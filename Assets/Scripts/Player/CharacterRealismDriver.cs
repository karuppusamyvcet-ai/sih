using UnityEngine;
using DHJ.Core;

namespace DHJ.Player
{
    /// <summary>
    /// Runtime character realism controller for Dr. B. R. Ambedkar:
    ///   1. Autonomous natural eyelid blinking (with occasional double-blink) & eye micro-saccades
    ///   2. Contextual Head/Neck/Eye Look-At IK toward nearby exhibits & turn direction
    ///   3. Dynamic facial expressions (Attentive Examine, Manuscript Reading eye-scan, Conversational lip/jaw motion)
    ///   4. Secondary damped spring-pendulum physics on the necktie and tailored suit jacket skirt
    /// Runs in LateUpdate after Animator evaluation so procedural fidelity layers cleanly over clips.
    /// </summary>
    public class CharacterRealismDriver : MonoBehaviour
    {
        public enum ExpressionState { Calm, Attentive, Reading, Speaking, Respectful }

        [Header("Look-At & Gaze")]
        public float maxHeadYaw = 32f;
        public float maxHeadPitch = 18f;
        public float headTrackSpeed = 5.5f;

        [Header("Secondary Clothing Physics")]
        public float tieSpringStiffness = 48f;
        public float tieDamping = 6.5f;

        public ExpressionState CurrentExpression { get; private set; } = ExpressionState.Calm;

        private PlayerInteractor _interactor;
        private CharacterController _cc;

        // Discovered rig nodes
        private Transform _hips, _spine, _chest, _neck, _head;
        private Transform _eyelidL, _eyelidR, _pupilL, _pupilR;
        private Transform _browL, _browR, _lowerLip, _mustache;
        private Transform _tieBlade, _tieTip, _jacketSkirt;

        // Base local transforms captured at bind time
        private Vector3 _pupilLBase, _pupilRBase;
        private Vector3 _browLBasePos, _browRBasePos;
        private Vector3 _lowerLipBasePos, _mustacheBasePos;
        private Quaternion _tieBladeBaseRot, _tieTipBaseRot, _skirtBaseRot;

        // Blink state
        private float _blinkTimer = 2.4f;
        private float _blinkPhase = -1f;
        private bool _pendingDoubleBlink;

        // Gaze & saccade state
        private Vector2 _saccadeOffset;
        private float _saccadeTimer = 1.2f;
        private Vector2 _currentHeadAngles; // x = pitch, y = yaw
        private float _expressionTimer;

        // Secondary physics state (x = pitch/forward-back, z = roll/side-to-side)
        private Vector3 _lastWorldPos;
        private float _lastYaw;
        private Vector2 _tieAngle, _tieVel;
        private float _turnBankAngle;

        private void Awake()
        {
            _interactor = GetComponent<PlayerInteractor>();
            _cc = GetComponent<CharacterController>();
            BindRig();
        }

        private void Start()
        {
            _lastWorldPos = transform.position;
            _lastYaw = transform.eulerAngles.y;
        }

        private void BindRig()
        {
            _hips  = FindDeep(transform, "Hips");
            _spine = FindDeep(transform, "Spine");
            _chest = FindDeep(transform, "Chest");
            _neck  = FindDeep(transform, "Neck");
            _head  = FindDeep(transform, "Head");

            if (_head != null)
            {
                _eyelidL  = FindDeep(_head, "Eyelid_L");
                _eyelidR  = FindDeep(_head, "Eyelid_R");
                _pupilL   = FindDeep(_head, "Pupil_L");
                _pupilR   = FindDeep(_head, "Pupil_R");
                _browL    = FindDeep(_head, "Brow_L");
                _browR    = FindDeep(_head, "Brow_R");
                _lowerLip = FindDeep(_head, "LowerLip");
                _mustache = FindDeep(_head, "Mustache");

                if (_pupilL != null)   _pupilLBase = _pupilL.localPosition;
                if (_pupilR != null)   _pupilRBase = _pupilR.localPosition;
                if (_browL != null)    _browLBasePos = _browL.localPosition;
                if (_browR != null)    _browRBasePos = _browR.localPosition;
                if (_lowerLip != null) _lowerLipBasePos = _lowerLip.localPosition;
                if (_mustache != null) _mustacheBasePos = _mustache.localPosition;
            }

            if (_chest != null) _tieBlade = FindDeep(_chest, "Tie_Blade");
            if (_spine != null) _tieTip   = FindDeep(_spine, "Tie_Tip");
            if (_hips != null)  _jacketSkirt = FindDeep(_hips, "Jacket_Skirt");

            if (_tieBlade != null)    _tieBladeBaseRot = _tieBlade.localRotation;
            if (_tieTip != null)      _tieTipBaseRot = _tieTip.localRotation;
            if (_jacketSkirt != null) _skirtBaseRot = _jacketSkirt.localRotation;
        }

        public void TriggerExpression(ExpressionState state, float duration = 3.0f)
        {
            CurrentExpression = state;
            _expressionTimer = duration;
        }

        private void LateUpdate()
        {
            float dt = Time.deltaTime;
            if (dt <= 0.0001f) return;

            if (_expressionTimer > 0f)
            {
                _expressionTimer -= dt;
                if (_expressionTimer <= 0f) CurrentExpression = ExpressionState.Calm;
            }

            UpdateBlinking(dt);
            UpdateGazeAndHeadIK(dt);
            UpdateFacialExpression(dt);
            UpdateClothingPhysics(dt);
        }

        // -------------------------------------------------------- 1. Blinking
        private void UpdateBlinking(float dt)
        {
            if (_eyelidL == null || _eyelidR == null) return;

            float blinkOpenness = 1f;
            if (_blinkPhase >= 0f)
            {
                _blinkPhase += dt / 0.14f; // 140 ms natural blink duration
                if (_blinkPhase >= 1f)
                {
                    _blinkPhase = -1f;
                    if (_pendingDoubleBlink)
                    {
                        _pendingDoubleBlink = false;
                        _blinkTimer = 0.12f;
                    }
                    else
                    {
                        _blinkTimer = Random.Range(2.6f, 5.8f);
                    }
                }
                else
                {
                    // Smooth close then open
                    blinkOpenness = Mathf.Abs(_blinkPhase * 2f - 1f);
                }
            }
            else
            {
                _blinkTimer -= dt;
                if (_blinkTimer <= 0f)
                {
                    _blinkPhase = 0f;
                    _pendingDoubleBlink = Random.value < 0.18f;
                }
            }

            // Reading state lowers upper lids slightly for downward focus
            float exprLidBias = CurrentExpression == ExpressionState.Reading ? 0.72f : 1.0f;
            float closedAmount = 1f - (blinkOpenness * exprLidBias);
            Vector3 lidScale = new(1f, Mathf.Lerp(0.18f, 1.05f, closedAmount), 1f);
            _eyelidL.localScale = lidScale;
            _eyelidR.localScale = lidScale;
        }

        // -------------------------------------------------------- 2. Gaze & Head IK
        private void UpdateGazeAndHeadIK(float dt)
        {
            if (_head == null) return;

            // Micro-saccades
            _saccadeTimer -= dt;
            if (_saccadeTimer <= 0f)
            {
                _saccadeTimer = Random.Range(0.9f, 2.8f);
                if (CurrentExpression == ExpressionState.Reading)
                    _saccadeOffset = new Vector2(Random.Range(-0.0035f, 0.0035f), -0.0025f);
                else
                    _saccadeOffset = new Vector2(Random.Range(-0.0022f, 0.0022f), Random.Range(-0.0012f, 0.0012f));
            }

            Vector2 targetHead = Vector2.zero;
            if (_interactor != null && _interactor.Current is MonoBehaviour mb && mb != null)
            {
                Vector3 targetPos = mb.transform.position + Vector3.up * 1.35f;
                Vector3 toTarget = targetPos - _head.position;
                if (toTarget.sqrMagnitude > 0.05f && toTarget.sqrMagnitude < 20f)
                {
                    Vector3 localDir = transform.InverseTransformDirection(toTarget.normalized);
                    if (localDir.z > 0.15f)
                    {
                        float yaw = Mathf.Clamp(Mathf.Atan2(localDir.x, localDir.z) * Mathf.Rad2Deg, -maxHeadYaw, maxHeadYaw);
                        float pitch = Mathf.Clamp(-Mathf.Asin(Mathf.Clamp(localDir.y, -1f, 1f)) * Mathf.Rad2Deg, -maxHeadPitch, maxHeadPitch);
                        targetHead = new Vector2(pitch, yaw);
                    }
                }
            }

            _currentHeadAngles = Vector2.Lerp(_currentHeadAngles, targetHead, dt * headTrackSpeed);

            // Distribute 35% of look rotation to Neck and 65% to Head for anatomical cervical motion
            if (_neck != null)
                _neck.localRotation *= Quaternion.Euler(_currentHeadAngles.x * 0.35f, _currentHeadAngles.y * 0.35f, 0f);
            _head.localRotation *= Quaternion.Euler(_currentHeadAngles.x * 0.65f, _currentHeadAngles.y * 0.65f, 0f);

            // Eye pupils track slightly further toward the target + micro-saccade
            Vector3 eyeShift = new(
                Mathf.Clamp(_currentHeadAngles.y / maxHeadYaw * 0.0035f + _saccadeOffset.x, -0.0045f, 0.0045f),
                Mathf.Clamp(-_currentHeadAngles.x / maxHeadPitch * 0.0025f + _saccadeOffset.y, -0.0035f, 0.0035f),
                0f);
            if (_pupilL != null) _pupilL.localPosition = Vector3.Lerp(_pupilL.localPosition, _pupilLBase + eyeShift, dt * 14f);
            if (_pupilR != null) _pupilR.localPosition = Vector3.Lerp(_pupilR.localPosition, _pupilRBase + eyeShift, dt * 14f);
        }

        // -------------------------------------------------------- 3. Facial Expressions
        private void UpdateFacialExpression(float dt)
        {
            float browLift = 0f;
            float browTilt = 0f;
            float jawOpen = 0f;

            switch (CurrentExpression)
            {
                case ExpressionState.Attentive:
                    browLift = 0.0032f;
                    browTilt = 2.5f;
                    break;
                case ExpressionState.Reading:
                    browLift = -0.0012f;
                    browTilt = -2.0f;
                    break;
                case ExpressionState.Speaking:
                    browLift = 0.0020f + Mathf.Sin(Time.time * 4.5f) * 0.0012f;
                    // Natural syllabic jaw/lip articulation
                    float syl = Mathf.Max(0f, Mathf.Sin(Time.time * 11.5f) * 0.6f + Mathf.Sin(Time.time * 7.2f) * 0.4f);
                    jawOpen = syl * 0.0048f;
                    break;
                case ExpressionState.Respectful:
                    browLift = 0.0025f;
                    browTilt = 3.0f;
                    break;
            }

            if (_browL != null)
            {
                _browL.localPosition = Vector3.Lerp(_browL.localPosition, _browLBasePos + new Vector3(0f, browLift, 0f), dt * 8f);
                _browL.localRotation = Quaternion.Lerp(_browL.localRotation, Quaternion.Euler(0f, 0f, browTilt), dt * 8f);
            }
            if (_browR != null)
            {
                _browR.localPosition = Vector3.Lerp(_browR.localPosition, _browRBasePos + new Vector3(0f, browLift, 0f), dt * 8f);
                _browR.localRotation = Quaternion.Lerp(_browR.localRotation, Quaternion.Euler(0f, 0f, -browTilt), dt * 8f);
            }
            if (_lowerLip != null)
            {
                _lowerLip.localPosition = Vector3.Lerp(_lowerLip.localPosition, _lowerLipBasePos - new Vector3(0f, jawOpen, 0f), dt * 16f);
            }
            if (_mustache != null)
            {
                _mustache.localPosition = Vector3.Lerp(_mustache.localPosition, _mustacheBasePos - new Vector3(0f, jawOpen * 0.25f, 0f), dt * 16f);
            }
        }

        // -------------------------------------------------------- 4. Clothing & Turn Physics
        private void UpdateClothingPhysics(float dt)
        {
            Vector3 worldVel = (transform.position - _lastWorldPos) / dt;
            _lastWorldPos = transform.position;
            Vector3 localVel = transform.InverseTransformDirection(worldVel);
            float planarSpeed = new Vector2(localVel.x, localVel.z).magnitude;

            float yaw = transform.eulerAngles.y;
            float yawRate = Mathf.DeltaAngle(_lastYaw, yaw) / dt;
            _lastYaw = yaw;

            // Subtle anatomical torso lean into turns
            float targetBank = Mathf.Clamp(-yawRate * 0.018f * Mathf.Clamp01(planarSpeed / 2.2f), -4.5f, 4.5f);
            _turnBankAngle = Mathf.Lerp(_turnBankAngle, targetBank, dt * 7f);
            if (_spine != null)
                _spine.localRotation *= Quaternion.Euler(0f, 0f, _turnBankAngle);

            // Damped pendulum for tie & jacket hem
            float walkBob = planarSpeed > 0.2f ? Mathf.Sin(Time.time * (planarSpeed > 3f ? 11f : 7.2f)) * planarSpeed * 1.2f : 0f;
            Vector2 targetTie = new(
                Mathf.Clamp(localVel.z * 1.4f + Mathf.Abs(walkBob) * 0.6f, 0f, 8.5f), // never swing negative into chest
                Mathf.Clamp(-yawRate * 0.035f + walkBob * 0.8f, -9f, 9f)
            );

            Vector2 force = (targetTie - _tieAngle) * tieSpringStiffness - _tieVel * tieDamping;
            _tieVel += force * dt;
            _tieAngle += _tieVel * dt;
            _tieAngle.x = Mathf.Clamp(_tieAngle.x, 0f, 10f);
            _tieAngle.y = Mathf.Clamp(_tieAngle.y, -10f, 10f);

            if (_tieBlade != null)
                _tieBlade.localRotation = _tieBladeBaseRot * Quaternion.Euler(_tieAngle.x, 0f, _tieAngle.y);
            if (_tieTip != null)
                _tieTip.localRotation = _tieTipBaseRot * Quaternion.Euler(_tieAngle.x * 1.25f, 0f, _tieAngle.y * 1.35f);
            if (_jacketSkirt != null)
                _jacketSkirt.localRotation = _skirtBaseRot * Quaternion.Euler(Mathf.Clamp(localVel.z * 0.6f, -3f, 4f), 0f, _tieAngle.y * 0.3f);
        }

        private static Transform FindDeep(Transform root, string name)
        {
            if (root.name == name) return root;
            for (int i = 0; i < root.childCount; i++)
            {
                var found = FindDeep(root.GetChild(i), name);
                if (found != null) return found;
            }
            return null;
        }
    }
}
