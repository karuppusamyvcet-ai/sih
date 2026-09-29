using UnityEngine;
using UnityEditor;
using UnityEditor.Animations;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Generates all character AnimationClips (transform-path curves matching
    /// CharacterFactory's rig) plus the AnimatorController:
    ///
    ///   Idle(breathing) ⇄ Walk ⇄ Run      [Speed float]
    ///   Interact / Read / Examine / Talk / Greet  [trigger → back to Idle]
    /// </summary>
    public static class AnimationFactory
    {
        private const string ClipsDir = "Assets/Animations/Clips";
        private const string ControllerPath = "Assets/Animations/AmbedkarAnimator.controller";
        private const float HIPS_Y = 0.95f;

        // rig paths relative to the "Model" object that holds the Animator
        private const string Hips   = "Rig/Hips";
        private const string Spine  = Hips + "/Spine";
        private const string Chest  = Spine + "/Chest";
        private const string Head   = Chest + "/Neck/Head";
        private const string ShL    = Chest + "/ShoulderL";
        private const string ShR    = Chest + "/ShoulderR";
        private const string FaL    = ShL + "/ForearmL";
        private const string FaR    = ShR + "/ForearmR";
        private const string ThL    = Hips + "/ThighL";
        private const string ThR    = Hips + "/ThighR";
        private const string SnL    = ThL + "/ShinL";
        private const string SnR    = ThR + "/ShinR";

        public static RuntimeAnimatorController EnsureController()
        {
            var existing = AssetDatabase.LoadAssetAtPath<RuntimeAnimatorController>(ControllerPath);
            if (existing != null) return existing;
            EnsureDirs();

            var idle    = Idle();
            var walk    = Walk();
            var run     = Run();
            var interact= Interact();
            var read    = Read();
            var examine = Examine();
            var talk    = Talk();
            var greet   = Greet();

            var c = AnimatorController.CreateAnimatorControllerAtPath(ControllerPath);
            c.AddParameter("Speed", AnimatorControllerParameterType.Float);
            foreach (var t in new[] { "Interact", "Read", "Examine", "Talk", "Greet" })
                c.AddParameter(t, AnimatorControllerParameterType.Trigger);

            var sm = c.layers[0].stateMachine;
            sm.defaultState = AddState(sm, "Idle", idle);
            var sWalk = AddState(sm, "Walk", walk);
            var sRun  = AddState(sm, "Run", run);
            var sIdle = sm.defaultState;

            TwoWay(sIdle, sWalk, 0.12f, 0.18f, "Speed");
            TwoWay(sWalk, sRun, 2.9f, 3.3f, "Speed");

            TriggerLoop(c, sm, sIdle, "Interact", interact, loopedState: false);
            TriggerLoop(c, sm, sIdle, "Read", read, loopedState: true);
            TriggerLoop(c, sm, sIdle, "Examine", examine, loopedState: false);
            TriggerLoop(c, sm, sIdle, "Talk", talk, loopedState: true);
            TriggerLoop(c, sm, sIdle, "Greet", greet, loopedState: false);

            AssetDatabase.SaveAssets();
            Debug.Log("[DHJ] Animator generated at " + ControllerPath);
            return c;
        }

        // ------------------------------------------------------------ controller helpers
        private static AnimatorState AddState(AnimatorStateMachine sm, string name, AnimationClip clip)
        {
            var s = sm.AddState(name);
            s.motion = clip;
            return s;
        }

        private static void TwoWay(AnimatorState a, AnimatorState b, float low, float high, string param)
        {
            var ab = a.AddTransition(b);
            ab.hasExitTime = false; ab.duration = 0.18f;
            ab.AddCondition(AnimatorConditionMode.Greater, high, param);
            var ba = b.AddTransition(a);
            ba.hasExitTime = false; ba.duration = 0.22f;
            ba.AddCondition(AnimatorConditionMode.Less, low, param);
        }

        private static void TriggerLoop(AnimatorController c, AnimatorStateMachine sm,
            AnimatorState idle, string trigger, AnimationClip clip, bool loopedState)
        {
            var st = AddState(sm, trigger, clip);
            var go = idle.AddTransition(st);
            go.hasExitTime = false; go.duration = 0.15f;
            go.AddCondition(AnimatorConditionMode.If, 0, trigger);
            var back = st.AddTransition(idle);
            back.hasExitTime = true;
            back.exitTime = 0.90f;
            back.duration = 0.25f;
            // walk interrupts gestures naturally via Speed transitions from Idle
        }

        // ------------------------------------------------------------ clip authoring
        private static AnimationClip NewClip(string name, bool loop)
        {
            var clip = new AnimationClip { name = name, frameRate = 30 };
            string path = $"{ClipsDir}/{name}.anim";
            var old = AssetDatabase.LoadAssetAtPath<AnimationClip>(path);
            if (old != null) AssetDatabase.DeleteAsset(path);
            AssetDatabase.CreateAsset(clip, path);
            if (loop)
            {
                var settings = AnimationUtility.GetAnimationClipSettings(clip);
                settings.loopTime = true;
                AnimationUtility.SetAnimationClipSettings(clip, settings);
            }
            return clip;
        }

        private static void Rot(AnimationClip clip, string path, string axis, params float[] timeVal)
        {
            var curve = new AnimationCurve();
            for (int i = 0; i < timeVal.Length; i += 2)
                curve.AddKey(new Keyframe(timeVal[i], timeVal[i + 1]) { inTangent = 0, outTangent = 0 });
            Smooth(curve);
            AnimationUtility.SetEditorCurve(clip,
                EditorCurveBinding.FloatCurve(path, typeof(Transform), "localEulerAngles." + axis), curve);
        }

        private static void PosY(AnimationClip clip, string path, params float[] timeVal)
        {
            var curve = new AnimationCurve();
            for (int i = 0; i < timeVal.Length; i += 2)
                curve.AddKey(new Keyframe(timeVal[i], timeVal[i + 1]) { inTangent = 0, outTangent = 0 });
            Smooth(curve);
            AnimationUtility.SetEditorCurve(clip,
                EditorCurveBinding.FloatCurve(path, typeof(Transform), "m_LocalPosition.y"), curve);
        }

        private static void Smooth(AnimationCurve c)
        {
            for (int i = 0; i < c.length; i++) c.SmoothTangents(i, 0f);
        }

        // ------------------------------------------------------------ the clips
        private static AnimationClip Idle()
        {
            var c = NewClip("Idle", true);
            Rot(c, Chest, "y", 0, 0, 4, 0, 8, 0);
            Rot(c, Chest, "x", 0, 0, 2, 1.6f, 4, 0, 6, 1.6f, 8, 0);
            Rot(c, Head, "x", 0, 0, 2, 1.2f, 4, 0, 6, -1.2f, 8, 0);
            Rot(c, ShL, "z", 0, 12, 4, 13.5f, 8, 12);
            Rot(c, ShR, "z", 0, -12, 4, -13.5f, 8, -12);
            Rot(c, FaL, "x", 0, 0, 8, 0); Rot(c, FaR, "x", 0, 0, 8, 0);
            Rot(c, Spine, "x", 0, 0, 8, 0);
            return c;
        }

        private static AnimationClip Walk()
        {
            var c = NewClip("Walk", true);
            Rot(c, ThL, "x", 0, 25, 0.5f, -25, 1, 25);
            Rot(c, ThR, "x", 0, -25, 0.5f, 25, 1, -25);
            Rot(c, SnL, "x", 0, 4, 0.25f, 8, 0.65f, 42, 1, 4);
            Rot(c, SnR, "x", 0, 42, 0.15f, 8, 0.5f, 4, 1, 42);
            Rot(c, ShL, "x", 0, -18, 0.5f, 18, 1, -18);
            Rot(c, ShR, "x", 0, 18, 0.5f, -18, 1, 18);
            Rot(c, ShL, "z", 0, 12, 1, 12); Rot(c, ShR, "z", 0, -12, 1, -12);
            Rot(c, FaL, "x", 0, 0, 1, 0);   Rot(c, FaR, "x", 0, 0, 1, 0);
            Rot(c, Chest, "x", 0, 0, 1, 0);
            Rot(c, Spine, "x", 0, 0, 1, 0);
            Rot(c, Hips, "z", 0, 2.5f, 0.5f, -2.5f, 1, 2.5f);
            PosY(c, Hips, 0, HIPS_Y + 0.012f, 0.25f, HIPS_Y - 0.010f, 0.5f,
                 HIPS_Y + 0.012f, 0.75f, HIPS_Y - 0.010f, 1, HIPS_Y + 0.012f);
            return c;
        }

        private static AnimationClip Run()
        {
            var c = NewClip("Run", true);
            Rot(c, ThL, "x", 0, 42, 0.35f, -34, 0.7f, 42);
            Rot(c, ThR, "x", 0, -34, 0.35f, 42, 0.7f, -34);
            Rot(c, SnL, "x", 0, 10, 0.45f, 58, 0.7f, 10);
            Rot(c, SnR, "x", 0, 58, 0.25f, 10, 0.7f, 58);
            Rot(c, ShL, "x", 0, -30, 0.35f, 30, 0.7f, -30);
            Rot(c, ShR, "x", 0, 30, 0.35f, -30, 0.7f, 30);
            Rot(c, FaL, "x", 0, -45, 0.7f, -45); Rot(c, FaR, "x", 0, -45, 0.7f, -45);
            Rot(c, Chest, "x", 0, 8, 0.7f, 8);
            PosY(c, Hips, 0, HIPS_Y + 0.02f, 0.175f, HIPS_Y - 0.015f, 0.35f,
                 HIPS_Y + 0.02f, 0.525f, HIPS_Y - 0.015f, 0.7f, HIPS_Y + 0.02f);
            return c;
        }

        private static AnimationClip Interact()
        {
            var c = NewClip("Interact", false);
            Rot(c, ShR, "x", 0, 0, 0.35f, -58, 0.85f, -58, 1.2f, 0);
            Rot(c, ShR, "z", 0, -12, 0.35f, -6, 0.85f, -6, 1.2f, -12);
            Rot(c, FaR, "x", 0, 0, 0.35f, -18, 0.85f, -18, 1.2f, 0);
            Rot(c, Head, "x", 0, 0, 0.35f, -4, 0.85f, -4, 1.2f, 0);
            return c;
        }

        private static AnimationClip Read()
        {
            var c = NewClip("Read", true);
            Rot(c, ShL, "x", 0, -32, 3, -32); Rot(c, ShR, "x", 0, -32, 3, -32);
            Rot(c, ShL, "z", 0, 4, 3, 4);     Rot(c, ShR, "z", 0, -4, 3, -4);
            Rot(c, FaL, "x", 0, -82, 3, -82); Rot(c, FaR, "x", 0, -82, 3, -82);
            Rot(c, Head, "x", 0, 9, 1.5f, 7, 3, 9);
            Rot(c, Chest, "x", 0, 2, 1.5f, 3.5f, 3, 2);
            return c;
        }

        private static AnimationClip Examine()
        {
            var c = NewClip("Examine", false);
            Rot(c, Spine, "x", 0, 0, 0.6f, 13, 2.2f, 13, 3.2f, 0);
            Rot(c, Head, "x", 0, 0, 0.6f, 8, 1.4f, 12, 2.2f, 8, 3.2f, 0);
            Rot(c, Head, "z", 0, 0, 1.0f, -8, 2.0f, -8, 2.8f, 0);
            Rot(c, ThL, "x", 0, 0, 0.6f, 5, 2.2f, 5, 3.2f, 0);
            Rot(c, ThR, "x", 0, 0, 0.6f, 5, 2.2f, 5, 3.2f, 0);
            PosY(c, Hips, 0, HIPS_Y, 0.6f, HIPS_Y - 0.05f, 2.2f, HIPS_Y - 0.05f, 3.2f, HIPS_Y);
            Rot(c, ShR, "x", 0, 0, 0.9f, -40, 2.2f, -40, 3.2f, 0);
            return c;
        }

        private static AnimationClip Talk()
        {
            var c = NewClip("Talk", true);
            Rot(c, ShR, "x", 0, -25, 1.5f, -35, 3, -25);
            Rot(c, FaR, "x", 0, -55, 0.75f, -70, 1.5f, -50, 2.25f, -70, 3, -55);
            Rot(c, FaR, "z", 0, -10, 0.75f, 10, 1.5f, -10, 2.25f, 10, 3, -10);
            Rot(c, ShL, "x", 0, -8, 3, -8);
            Rot(c, Head, "x", 0, 3, 0.75f, -2, 1.5f, 3, 2.25f, -2, 3, 3);
            return c;
        }

        private static AnimationClip Greet()
        {
            var c = NewClip("Greet", false);
            Rot(c, Head, "x", 0, 0, 0.4f, 14, 1.2f, 14, 1.8f, 0);
            Rot(c, ShL, "x", 0, 0, 0.4f, -28, 1.2f, -28, 1.8f, 0);
            Rot(c, ShR, "x", 0, 0, 0.4f, -28, 1.2f, -28, 1.8f, 0);
            Rot(c, FaL, "x", 0, 0, 0.4f, -95, 1.2f, -95, 1.8f, 0);
            Rot(c, FaR, "x", 0, 0, 0.4f, -95, 1.2f, -95, 1.8f, 0);
            Rot(c, Chest, "x", 0, 0, 0.4f, 5, 1.2f, 5, 1.8f, 0);
            return c;
        }

        private static void EnsureDirs()
        {
            if (!AssetDatabase.IsValidFolder("Assets/Animations")) AssetDatabase.CreateFolder("Assets", "Animations");
            if (!AssetDatabase.IsValidFolder(ClipsDir)) AssetDatabase.CreateFolder("Assets/Animations", "Clips");
        }
    }
}
