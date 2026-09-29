using UnityEngine;
using DHJ.Core;

namespace DHJ.Player
{
    /// <summary>
    /// Third-person orbit camera with asymmetric collision smoothing (fast pull-in on
    /// obstruction, smooth ease-out when clear), subtle organic breathing & stride
    /// coupling (respecting Reduced FX), dynamic FOV, and configurable sensitivity.
    /// </summary>
    public class ThirdPersonCamera : MonoBehaviour
    {
        public Transform target;
        [Header("Framing")]
        public Vector3 pivotOffset = new(0f, 1.64f, 0f);
        public float shoulderOffset = 0.14f;
        public float minDistance = 1.5f;
        public float maxDistance = 7.2f;
        public float startDistance = 4.1f;
        [Header("Feel & Collision")]
        public float followSmoothTime = 0.085f;
        public float collisionInSpeed = 24f;
        public float collisionOutSpeed = 5.5f;
        public float minPitch = -26f;
        public float maxPitch = 62f;
        public float baseFov = 56f;
        public LayerMask collisionMask = ~0;

        private Camera _cam;
        private PlayerController _pc;
        private float _yaw, _pitch = 11f, _distance, _targetDistance, _currentClippedDist;
        private Vector3 _pivotPos, _pivotVel;
        private float _stridePhase;

        private void Awake()
        {
            _cam = GetComponent<Camera>();
        }

        private void Start()
        {
            _distance = _targetDistance = _currentClippedDist = startDistance;
            if (target != null)
            {
                _yaw = target.eulerAngles.y;
                _pivotPos = target.position + pivotOffset;
                _pc = target.GetComponent<PlayerController>();
            }
        }

        public void SnapBehindTarget()
        {
            if (target == null) return;
            _yaw = target.eulerAngles.y;
            _pitch = 11f;
            _distance = _targetDistance = _currentClippedDist = startDistance;
            _pivotPos = target.position + pivotOffset;
            _pivotVel = Vector3.zero;
        }

        private void LateUpdate()
        {
            if (target == null) return;
            if (_pc == null) _pc = target.GetComponent<PlayerController>();

            var settings = GameManager.I != null ? GameManager.I.Settings.Data : null;
            bool reducedFx = settings != null && settings.reducedFx;
            float sens = (GameManager.I != null && GameManager.I.IsTouchPlatform
                            ? (settings?.touchSensitivity ?? 1f)
                            : (settings?.sensitivity ?? 1f)) * 118f;

            float dt = Time.unscaledDeltaTime;

            if (GameManager.I == null || GameManager.I.State == GameState.Playing)
            {
                Vector2 look = GameInput.Look;
                _yaw   += look.x * sens * dt;
                _pitch -= look.y * sens * dt * ((settings != null && settings.invertY) ? -1f : 1f);
                _pitch = Mathf.Clamp(_pitch, minPitch, maxPitch);

                float scroll = GameInput.ZoomAxis;
                if (Mathf.Abs(scroll) > 0.001f)
                    _targetDistance = Mathf.Clamp(_targetDistance - scroll * 2.2f, minDistance, maxDistance);
            }

            _distance = Mathf.Lerp(_distance, _targetDistance, dt * 8f);

            // Organic breathing & subtle stride camera coupling (disabled in Reduced FX mode)
            Vector3 organicOffset = Vector3.zero;
            float speed = _pc != null ? _pc.CurrentPlanarSpeed : 0f;
            if (!reducedFx)
            {
                if (speed > 0.25f)
                {
                    _stridePhase += dt * Mathf.Lerp(6.2f, 10.5f, Mathf.InverseLerp(1.5f, 4.3f, speed));
                    float bobY = Mathf.Sin(_stridePhase * 2f) * 0.014f * Mathf.Clamp01(speed / 2.5f);
                    float bobX = Mathf.Cos(_stridePhase) * 0.009f * Mathf.Clamp01(speed / 2.5f);
                    organicOffset = new Vector3(bobX, bobY, 0f);
                }
                else
                {
                    float breath = Mathf.Sin(Time.unscaledTime * 1.45f) * 0.005f;
                    organicOffset = new Vector3(0f, breath, 0f);
                }
            }

            Quaternion rot = Quaternion.Euler(_pitch, _yaw, 0);
            Vector3 desiredPivot = target.position + pivotOffset + rot * (new Vector3(shoulderOffset, 0f, 0f) + organicOffset);
            _pivotPos = Vector3.SmoothDamp(_pivotPos, desiredPivot, ref _pivotVel, followSmoothTime, Mathf.Infinity, dt);

            // Obstruction check: fast pull-in on hit, smooth ease-out when clear
            float desiredDist = _distance;
            Vector3 back = rot * Vector3.back;
            if (Physics.SphereCast(_pivotPos, 0.22f, back, out RaycastHit hit, _distance, collisionMask,
                                   QueryTriggerInteraction.Ignore))
            {
                desiredDist = Mathf.Max(hit.distance - 0.06f, 0.45f);
            }

            float colSpeed = desiredDist < _currentClippedDist ? collisionInSpeed : collisionOutSpeed;
            _currentClippedDist = Mathf.Lerp(_currentClippedDist, desiredDist, dt * colSpeed);

            transform.SetPositionAndRotation(_pivotPos + back * _currentClippedDist, rot);

            // Subtle dynamic FOV coupling
            if (_cam != null)
            {
                float targetFov = baseFov + (reducedFx ? 0f : Mathf.Clamp(speed - 2.3f, 0f, 2f) * 1.1f);
                _cam.fieldOfView = Mathf.Lerp(_cam.fieldOfView, targetFov, dt * 5f);
            }
        }
    }
}
