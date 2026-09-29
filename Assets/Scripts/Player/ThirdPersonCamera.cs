using UnityEngine;
using DHJ.Core;

namespace DHJ.Player
{
    /// <summary>
    /// Third-person orbit camera with collision (spherecast pull-in), smooth follow,
    /// zoom (scroll / pinch handled by touch controls), indoor clamping and
    /// configurable sensitivity / invert-Y. Positions in LateUpdate to avoid jitter.
    /// </summary>
    public class ThirdPersonCamera : MonoBehaviour
    {
        public Transform target;
        [Header("Framing")]
        public Vector3 pivotOffset = new(0f, 1.65f, 0f);
        public float minDistance = 1.6f;
        public float maxDistance = 7.5f;
        public float startDistance = 4.2f;
        [Header("Feel")]
        public float followSmoothTime = 0.08f;
        public float minPitch = -30f;
        public float maxPitch = 65f;
        public LayerMask collisionMask = ~0;

        private float _yaw, _pitch = 12f, _distance, _targetDistance;
        private Vector3 _pivotVel;

        private void Start()
        {
            _distance = _targetDistance = startDistance;
            if (target != null) _yaw = target.eulerAngles.y;
        }

        public void SnapBehindTarget()
        {
            if (target == null) return;
            _yaw = target.eulerAngles.y; _pitch = 12f; _distance = _targetDistance = startDistance;
        }

        private void LateUpdate()
        {
            if (target == null) return;
            var settings = GameManager.I != null ? GameManager.I.Settings.Data : null;
            float sens = (GameManager.I != null && GameManager.I.IsTouchPlatform
                            ? (settings?.touchSensitivity ?? 1f)
                            : (settings?.sensitivity ?? 1f)) * 120f;

            if (GameManager.I == null || GameManager.I.State == GameState.Playing)
            {
                Vector2 look = GameInput.Look;
                _yaw   += look.x * sens * Time.unscaledDeltaTime;
                _pitch -= look.y * sens * Time.unscaledDeltaTime * ((settings != null && settings.invertY) ? -1f : 1f);
                _pitch = Mathf.Clamp(_pitch, minPitch, maxPitch);

                float scroll = GameInput.ZoomAxis;
                if (Mathf.Abs(scroll) > 0.001f)
                    _targetDistance = Mathf.Clamp(_targetDistance - scroll * 2.2f, minDistance, maxDistance);
            }

            _distance = Mathf.Lerp(_distance, _targetDistance, Time.unscaledDeltaTime * 8f);

            Vector3 pivot = Vector3.SmoothDamp(transform.position - transform.forward * _distance,
                                               target.position + pivotOffset, ref _pivotVel, followSmoothTime,
                                               Mathf.Infinity, Time.unscaledDeltaTime);
            Quaternion rot = Quaternion.Euler(_pitch, _yaw, 0);

            // obstruction: pull camera in toward the pivot
            float dist = _distance;
            Vector3 back = rot * Vector3.back;
            if (Physics.SphereCast(pivot, 0.22f, back, out RaycastHit hit, _distance, collisionMask,
                                   QueryTriggerInteraction.Ignore))
                dist = Mathf.Max(hit.distance - 0.05f, 0.4f);

            transform.SetPositionAndRotation(pivot + back * dist, rot);
        }
    }
}
