using UnityEngine;

namespace DHJ.Core
{
    /// <summary>
    /// Single-codebase input abstraction:
    ///   PC      -> WASD/arrows + mouse + keyboard shortcuts + gamepad (left stick = move, A = interact,
    ///              LB = run, X = map, Y = archive, Start = pause)
    ///   Android -> virtual joystick + touch buttons (injected by TouchControls)
    /// Both paths feed the same properties so gameplay code is platform-free.
    /// (Unity legacy Input Manager backend — see Documentation/Architecture.md §8.)
    /// </summary>
    public static class GameInput
    {
        // ---- injected by TouchControls at runtime (zero on PC)
        public static Vector2 TouchMove;
        public static Vector2 TouchLook;      // delta this frame (pixels)
        public static bool TouchRunHeld;
        private static bool _touchInteract, _touchJump;

        public static void InjectInteract() => _touchInteract = true;
        public static void InjectJump()     => _touchJump = true;

        public static bool Enabled = true;

        public static Vector2 Move
        {
            get
            {
                if (!Enabled) return Vector2.zero;
                var m = new Vector2(Input.GetAxisRaw("Horizontal"), Input.GetAxisRaw("Vertical"));
                m += TouchMove;
                return Vector2.ClampMagnitude(m, 1f);
            }
        }

        public static Vector2 Look
        {
            get
            {
                if (!Enabled) return Vector2.zero;
                if (TouchLook.sqrMagnitude > 0.001f)
                {
                    var t = TouchLook; TouchLook = Vector2.zero; // consumed
                    return t * 0.02f;
                }
                return new Vector2(Input.GetAxis("Mouse X"), Input.GetAxis("Mouse Y"));
            }
        }

        public static bool RunHeld   => Enabled && (Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.JoystickButton4) || TouchRunHeld);
        public static bool InteractPressed => Enabled && (Input.GetKeyDown(KeyCode.E) || Input.GetKeyDown(KeyCode.JoystickButton0) || Input.GetMouseButtonDown(0) && MouseOverInteractRaycast || Consume(ref _touchInteract));
        public static bool JumpPressed  => Enabled && (Input.GetKeyDown(KeyCode.Space) || Consume(ref _touchJump));
        public static bool ArchivePressed => Enabled && (Input.GetKeyDown(KeyCode.Tab) || Input.GetKeyDown(KeyCode.JoystickButton3));
        public static bool MapPressed     => Enabled && (Input.GetKeyDown(KeyCode.M) || Input.GetKeyDown(KeyCode.JoystickButton2));
        public static bool PausePressed   => Input.GetKeyDown(KeyCode.Escape) || Input.GetKeyDown(KeyCode.JoystickButton7);
        public static float ZoomAxis   => Enabled ? Input.GetAxis("Mouse ScrollWheel") : 0f;

        // Set by PlayerInteractor each frame: true while the aim/cursor is over an interactable.
        public static bool MouseOverInteractRaycast { get; set; }

        private static bool Consume(ref bool flag)
        {
            if (!flag) return false; flag = false; return true;
        }

        public static void EndFrame()
        {
            // safety: drop unconsumed one-frame flags so they never leak across frames
            _touchInteract = false; _touchJump = false;
        }
    }
}
