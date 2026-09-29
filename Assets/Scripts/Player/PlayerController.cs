using UnityEngine;
using DHJ.Core;

namespace DHJ.Player
{
    /// <summary>
    /// Third-person character controller (CharacterController based).
    /// Movement is camera-relative; the character turns smoothly toward travel.
    /// </summary>
    [RequireComponent(typeof(CharacterController))]
    public class PlayerController : MonoBehaviour
    {
        [Header("Tuning")]
        public float walkSpeed = 2.2f;
        public float runSpeed = 4.2f;
        public float turnSmoothTime = 0.12f;
        public float gravity = -18f;
        public float jumpHeight = 1.0f;
        public bool allowJump = true;

        [HideInInspector] public bool MovementLocked;

        private CharacterController _cc;
        private Transform _cam;
        private Animator _anim;
        private float _turnVelocity;
        private float _yVel;
        private bool _grounded;

        // footstep cadence
        private float _stepTimer;

        private void Awake()
        {
            _cc = GetComponent<CharacterController>();
            _anim = GetComponentInChildren<Animator>();
        }

        private void Start()
        {
            if (Camera.main != null) _cam = Camera.main.transform;
        }

        private void Update()
        {
            if (GameManager.I == null || GameManager.I.State != GameState.Playing || MovementLocked)
            {
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

            float speed = running ? runSpeed : walkSpeed;
            Vector3 planar = dir * speed * (input.sqrMagnitude > 0.001f ? Mathf.Clamp01(input.magnitude) : 0f);

            if (allowJump && _grounded && GameInput.JumpPressed)
                _yVel = Mathf.Sqrt(jumpHeight * -2f * gravity);

            _yVel += gravity * Time.deltaTime;
            Vector3 vel = planar + Vector3.up * _yVel;
            _cc.Move(vel * Time.deltaTime);

            float planarMag = new Vector3(vel.x, 0, vel.z).magnitude;
            SetAnimSpeed(planarMag);
            Footsteps(planarMag);
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
            if (!_grounded || planarMag < 0.4f) { _stepTimer = 0; return; }
            _stepTimer -= Time.deltaTime * (planarMag > (walkSpeed + runSpeed) / 2 ? 1.6f : 1f);
            if (_stepTimer <= 0f)
            {
                _stepTimer = 0.45f;
                GameManager.I.Audio.PlaySfx(AudioSys.SfxId.Footstep, transform.position, Random.Range(0.92f, 1.08f));
            }
        }

        /// <summary>Snap to a position (scene entry / continue game).</summary>
        public void Teleport(Vector3 pos, float yawDegrees = 0f)
        {
            _cc.enabled = false;
            transform.SetPositionAndRotation(pos, Quaternion.Euler(0, yawDegrees, 0));
            _cc.enabled = true;
            _yVel = 0;
        }
    }
}
