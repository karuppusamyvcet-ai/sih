using System.Collections;
using UnityEngine;
using DHJ.Core;

namespace DHJ.Player
{
    /// <summary>
    /// Third-person character controller (CharacterController based) with physically
    /// damped acceleration/deceleration inertia, camera-relative turning, alternating
    /// left/right stride-synchronized footsteps, and smooth interaction orientation.
    /// </summary>
    [RequireComponent(typeof(CharacterController))]
    public class PlayerController : MonoBehaviour
    {
        [Header("Tuning")]
        public float walkSpeed = 2.3f;
        public float runSpeed = 4.3f;
        public float turnSmoothTime = 0.12f;
        public float accelSmoothTime = 0.13f;
        public float decelSmoothTime = 0.16f;
        public float gravity = -18f;
        public float jumpHeight = 1.0f;
        public bool allowJump = true;

        [HideInInspector] public bool MovementLocked;

        public float CurrentPlanarSpeed { get; private set; }

        private CharacterController _cc;
        private Transform _cam;
        private Animator _anim;
        private float _turnVelocity;
        private Vector3 _planarVel;
        private Vector3 _planarVelRef;
        private float _yVel;
        private bool _grounded;

        // footstep cadence (alternating left/right shoe)
        private float _stepTimer;
        private bool _leftFootNext;
        private Coroutine _faceCo;

        private void Awake()
        {
            _cc = GetComponent<CharacterController>();
            _anim = GetComponentInChildren<Animator>();
            if (GetComponent<CharacterRealismDriver>() == null)
                gameObject.AddComponent<CharacterRealismDriver>();
        }

        private void Start()
        {
            if (Camera.main != null) _cam = Camera.main.transform;
        }

        private void Update()
        {
            if (_cam == null && Camera.main != null) _cam = Camera.main.transform;

            if (GameManager.I == null || GameManager.I.State != GameState.Playing || MovementLocked)
            {
                _planarVel = Vector3.SmoothDamp(_planarVel, Vector3.zero, ref _planarVelRef, decelSmoothTime);
                CurrentPlanarSpeed = 0f;
                ApplyGravityOnly();
                SetAnimSpeed(0);
                return;
            }

            Vector2 input = GameInput.Move;
            bool running = GameInput.RunHeld;

            _grounded = _cc.isGrounded;
            if (_grounded && _yVel < 0) _yVel = -2f;

            Vector3 dir = Vector3.zero;
            if (input.sqrMagnitude > 0.001f && _cam != null)
            {
                Vector3 fwd = _cam.forward; fwd.y = 0; fwd.Normalize();
                Vector3 rgt = _cam.right;   rgt.y = 0; rgt.Normalize();
                dir = (fwd * input.y + rgt * input.x).normalized;

                float targetAngle = Mathf.Atan2(dir.x, dir.z) * Mathf.Rad2Deg;
                float angle = Mathf.SmoothDampAngle(transform.eulerAngles.y, targetAngle,
                                                    ref _turnVelocity, turnSmoothTime);
                transform.rotation = Quaternion.Euler(0, angle, 0);
            }

            float targetSpeed = running ? runSpeed : walkSpeed;
            Vector3 targetPlanar = dir * (targetSpeed * (input.sqrMagnitude > 0.001f ? Mathf.Clamp01(input.magnitude) : 0f));
            float smoothTime = targetPlanar.sqrMagnitude > _planarVel.sqrMagnitude ? accelSmoothTime : decelSmoothTime;
            _planarVel = Vector3.SmoothDamp(_planarVel, targetPlanar, ref _planarVelRef, smoothTime);

            if (allowJump && _grounded && GameInput.JumpPressed)
                _yVel = Mathf.Sqrt(jumpHeight * -2f * gravity);

            _yVel += gravity * Time.deltaTime;
            Vector3 vel = _planarVel + Vector3.up * _yVel;
            _cc.Move(vel * Time.deltaTime);

            CurrentPlanarSpeed = new Vector3(_planarVel.x, 0, _planarVel.z).magnitude;
            SetAnimSpeed(CurrentPlanarSpeed);
            Footsteps(CurrentPlanarSpeed);
        }

        private void ApplyGravityOnly()
        {
            _yVel += gravity * Time.deltaTime;
            if (_cc.isGrounded && _yVel < 0) _yVel = -2f;
            _cc.Move(Vector3.up * _yVel * Time.deltaTime);
        }

        private void SetAnimSpeed(float v)
        {
            if (_anim != null) _anim.SetFloat(CharacterAnimatorDriver.Speed, v, 0.12f, Time.deltaTime);
        }

        private void Footsteps(float planarMag)
        {
            if (!_grounded || planarMag < 0.35f) { _stepTimer = 0.08f; return; }
            float cadence = Mathf.Lerp(0.95f, 1.70f, Mathf.InverseLerp(walkSpeed * 0.6f, runSpeed, planarMag));
            _stepTimer -= Time.deltaTime * cadence;
            if (_stepTimer <= 0f)
            {
                _stepTimer = 0.48f;
                _leftFootNext = !_leftFootNext;
                float basePitch = _leftFootNext ? 0.96f : 1.02f;
                float jitter = Random.Range(-0.03f, 0.03f);
                GameManager.I.Audio.PlaySfx(AudioSys.SfxId.Footstep, transform.position, basePitch + jitter);
            }
        }

        /// <summary>Smoothly orient the character toward an exhibit when interacting.</summary>
        public void FaceTowards(Vector3 worldTarget)
        {
            Vector3 to = worldTarget - transform.position;
            to.y = 0f;
            if (to.sqrMagnitude < 0.01f) return;
            if (_faceCo != null) StopCoroutine(_faceCo);
            _faceCo = StartCoroutine(FaceRoutine(Quaternion.LookRotation(to.normalized)));
        }

        private IEnumerator FaceRoutine(Quaternion targetRot)
        {
            float t = 0f;
            Quaternion startRot = transform.rotation;
            while (t < 0.22f)
            {
                t += Time.unscaledDeltaTime;
                transform.rotation = Quaternion.Slerp(startRot, targetRot, Mathf.SmoothStep(0f, 1f, t / 0.22f));
                yield return null;
            }
            transform.rotation = targetRot;
        }

        /// <summary>Snap to a position (scene entry / continue game).</summary>
        public void Teleport(Vector3 pos, float yawDegrees = 0f)
        {
            _cc.enabled = false;
            transform.SetPositionAndRotation(pos, Quaternion.Euler(0, yawDegrees, 0));
            _cc.enabled = true;
            _planarVel = Vector3.zero;
            _planarVelRef = Vector3.zero;
            _yVel = 0;
        }
    }
}
