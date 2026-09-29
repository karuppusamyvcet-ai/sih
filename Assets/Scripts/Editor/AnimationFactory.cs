using UnityEngine;
using UnityEditor;
using UnityEditor.Animations;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Generates all character AnimationClips (biomechanically natural transform
    /// curves matching CharacterFactory's rig) plus the AnimatorController:
    ///
    ///   Idle(breathing + subtle weight shift) ⇄ Walk(pelvic-thoracic counter-rotation,
    ///     heel-strike/toe-off ankle articulation, elbow lag) ⇄ Run  [Speed float]
    ///   Interact / Read / Examine / Talk / Greet                    [trigger → back to Idle]
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
        private const string Neck   = Chest + "/Neck";
        private const string Head   = Neck + "/Head";
        private const string ShL    = Chest + "/ShoulderL";
        private const string ShR    = Chest + "/ShoulderR";
        private const string FaL    = ShL + "/ForearmL";
        private const string FaR    = ShR + "/ForearmR";
        private const string ThL    = Hips + "/ThighL";
        private const string ThR    = Hips + "/ThighR";
        private const string SnL    = ThL + "/ShinL";
        private const string SnR    = ThR + "/ShinR";
        private const string FtL    = SnL + "/FootL";
        private const string FtR    = SnR + "/FootR";

        public static RuntimeAnimatorController EnsureController()
        {
            var existing = AssetDatabase.LoadAssetAtPath<RuntimeAnimatorController>(ControllerPath);
            if (existing != null) return existing;
            EnsureDirs();

            var idle     = Idle();
            var walk     = Walk();
            var run      = Run();
            var interact = Interact();
            var read     = Read();
            var examine  = Examine();
            var talk     = Talk();
            var greet    = Greet();

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
            ab.hasExitTime = false; ab.duration = 0.20f;
            ab.AddCondition(AnimatorConditionMode.Greater, high, param);
            var ba = b.AddTransition(a);
            ba.hasExitTime = false; ba.duration = 0.24f;
            ba.AddCondition(AnimatorConditionMode.Less, low, param);
        }

        private static void TriggerLoop(AnimatorController c, AnimatorStateMachine sm,
            AnimatorState idle, string trigger, AnimationClip clip, bool loopedState)
        {
            var st = AddState(sm, trigger, clip);
            var go = idle.AddTransition(st);
            go.hasExitTime = false; go.duration = 0.18f;
            go.AddCondition(AnimatorConditionMode.If, 0, trigger);
            var back = st.AddTransition(idle);
            back.hasExitTime = true;
            back.exitTime = 0.90f;
            back.duration = 0.28f;
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
            // Calm diaphragmatic breathing + subtle scholarly weight shift over 8s cycle
            PosY(c, Hips, 0, HIPS_Y, 2, HIPS_Y - 0.004f, 4, HIPS_Y, 6, HIPS_Y - 0.004f, 8, HIPS_Y);
            Rot(c, Hips, "z", 0, 0, 4, 0.8f, 8, 0);
            Rot(c, Spine, "x", 0, 0, 2, 0.8f, 4, 0, 6, 0.8f, 8, 0);
            Rot(c, Chest, "x", 0, 0, 2, 1.8f, 4, 0, 6, 1.8f, 8, 0);
            Rot(c, Chest, "y", 0, 0, 4, 1.2f, 8, 0);
            Rot(c, Head, "x", 0, 0, 2, -1.0f, 4, 0, 6, 1.0f, 8, 0);
            Rot(c, Head, "y", 0, 0, 3, 2.2f, 6, -1.8f, 8, 0);
            Rot(c, ShL, "z", 0, 10, 2, 11.2f, 4, 10, 6, 11.2f, 8, 10);
            Rot(c, ShR, "z", 0, -10, 2, -11.2f, 4, -10, 6, -11.2f, 8, -10);
            Rot(c, FaL, "x", 0, -8, 4, -10, 8, -8);
            Rot(c, FaR, "x", 0, -8, 4, -10, 8, -8);
            return c;
        }

        private static AnimationClip Walk()
        {
            var c = NewClip("Walk", true);
            // Lower body: hip swing, knee weight-acceptance & swing flexion, heel-strike/toe-off ankle pitch
            Rot(c, ThL, "x", 0, 24, 0.25f, 4, 0.5f, -22, 0.75f, 2, 1, 24);
            Rot(c, ThR, "x", 0, -22, 0.25f, 2, 0.5f, 24, 0.75f, 4, 1, -22);
            Rot(c, SnL, "x", 0, 5, 0.15f, 14, 0.5f, 6, 0.72f, 44, 1, 5);
            Rot(c, SnR, "x", 0, 6, 0.22f, 44, 0.5f, 5, 0.65f, 14, 1, 6);
            Rot(c, FtL, "x", 0, -10, 0.15f, 2, 0.5f, 16, 0.75f, -6, 1, -10);
            Rot(c, FtR, "x", 0, 16, 0.25f, -6, 0.5f, -10, 0.65f, 2, 1, 16);

            // Pelvic list & counter-rotation vs thorax
            Rot(c, Hips, "z", 0, 2.2f, 0.5f, -2.2f, 1, 2.2f);
            Rot(c, Hips, "y", 0, -3.5f, 0.5f, 3.5f, 1, -3.5f);
            PosY(c, Hips, 0, HIPS_Y - 0.008f, 0.25f, HIPS_Y + 0.014f, 0.5f,
                 HIPS_Y - 0.008f, 0.75f, HIPS_Y + 0.014f, 1, HIPS_Y - 0.008f);

            Rot(c, Spine, "x", 0, 1.8f, 1, 1.8f);
            Rot(c, Chest, "x", 0, 1.5f, 0.25f, 2.4f, 0.5f, 1.5f, 0.75f, 2.4f, 1, 1.5f);
            Rot(c, Chest, "y", 0, 4.0f, 0.5f, -4.0f, 1, 4.0f);
            Rot(c, Head, "y", 0, -2.5f, 0.5f, 2.5f, 1, -2.5f);

            // Arm swing with natural elbow flexion
            Rot(c, ShL, "x", 0, -16, 0.5f, 18, 1, -16);
            Rot(c, ShR, "x", 0, 18, 0.5f, -16, 1, 18);
            Rot(c, ShL, "z", 0, 10, 1, 10);
            Rot(c, ShR, "z", 0, -10, 1, -10);
            Rot(c, FaL, "x", 0, -24, 0.5f, -10, 1, -24);
            Rot(c, FaR, "x", 0, -10, 0.5f, -24, 1, -10);
            return c;
        }

        private static AnimationClip Run()
        {
            var c = NewClip("Run", true);
            Rot(c, ThL, "x", 0, 38, 0.35f, -32, 0.7f, 38);
            Rot(c, ThR, "x", 0, -32, 0.35f, 38, 0.7f, -32);
            Rot(c, SnL, "x", 0, 12, 0.48f, 56, 0.7f, 12);
            Rot(c, SnR, "x", 0, 56, 0.18f, 12, 0.7f, 56);
            Rot(c, FtL, "x", 0, -12, 0.35f, 22, 0.7f, -12);
            Rot(c, FtR, "x", 0, 22, 0.35f, -12, 0.7f, 22);

            Rot(c, Hips, "y", 0, -5f, 0.35f, 5f, 0.7f, -5f);
            Rot(c, Spine, "x", 0, 4.5f, 0.7f, 4.5f);
            Rot(c, Chest, "x", 0, 6.5f, 0.7f, 6.5f);
            Rot(c, Chest, "y", 0, 6f, 0.35f, -6f, 0.7f, 6f);
            Rot(c, Head, "x", 0, -5f, 0.7f, -5f);

            Rot(c, ShL, "x", 0, -28, 0.35f, 28, 0.7f, -28);
            Rot(c, ShR, "x", 0, 28, 0.35f, -28, 0.7f, 28);
            Rot(c, FaL, "x", 0, -48, 0.35f, -34, 0.7f, -48);
            Rot(c, FaR, "x", 0, -34, 0.35f, -48, 0.7f, -34);
            PosY(c, Hips, 0, HIPS_Y + 0.018f, 0.175f, HIPS_Y - 0.016f, 0.35f,
                 HIPS_Y + 0.018f, 0.525f, HIPS_Y - 0.016f, 0.7f, HIPS_Y + 0.018f);
            return c;
        }

        private static AnimationClip Interact()
        {
            var c = NewClip("Interact", false);
            Rot(c, Spine, "x", 0, 0, 0.35f, 4, 0.85f, 4, 1.2f, 0);
            Rot(c, ShR, "x", 0, 0, 0.35f, -54, 0.85f, -54, 1.2f, 0);
            Rot(c, ShR, "z", 0, -10, 0.35f, -4, 0.85f, -4, 1.2f, -10);
            Rot(c, FaR, "x", 0, -8, 0.35f, -24, 0.85f, -24, 1.2f, -8);
            Rot(c, Head, "x", 0, 0, 0.35f, 5, 0.85f, 5, 1.2f, 0);
            return c;
        }

        private static AnimationClip Read()
        {
            var c = NewClip("Read", true);
            Rot(c, ShL, "x", 0, -30, 3, -30); Rot(c, ShR, "x", 0, -30, 3, -30);
            Rot(c, ShL, "z", 0, 4, 3, 4);     Rot(c, ShR, "z", 0, -4, 3, -4);
            Rot(c, FaL, "x", 0, -78, 3, -78); Rot(c, FaR, "x", 0, -78, 3, -78);
            Rot(c, Neck, "x", 0, 5, 3, 5);
            Rot(c, Head, "x", 0, 10, 1.5f, 8, 3, 10);
            Rot(c, Head, "y", 0, -3, 1.5f, 3, 3, -3);
            Rot(c, Chest, "x", 0, 3, 1.5f, 4.5f, 3, 3);
            return c;
        }

        private static AnimationClip Examine()
        {
            var c = NewClip("Examine", false);
            Rot(c, Spine, "x", 0, 0, 0.6f, 11, 2.2f, 11, 3.2f, 0);
            Rot(c, Neck, "x", 0, 0, 0.6f, 4, 2.2f, 4, 3.2f, 0);
            Rot(c, Head, "x", 0, 0, 0.6f, 7, 1.4f, 11, 2.2f, 7, 3.2f, 0);
            Rot(c, Head, "z", 0, 0, 1.0f, -6, 2.0f, -6, 2.8f, 0);
            Rot(c, ThL, "x", 0, 0, 0.6f, 4, 2.2f, 4, 3.2f, 0);
            Rot(c, ThR, "x", 0, 0, 0.6f, 4, 2.2f, 4, 3.2f, 0);
            PosY(c, Hips, 0, HIPS_Y, 0.6f, HIPS_Y - 0.04f, 2.2f, HIPS_Y - 0.04f, 3.2f, HIPS_Y);
            Rot(c, ShR, "x", 0, 0, 0.9f, -36, 2.2f, -36, 3.2f, 0);
            Rot(c, FaR, "x", 0, -8, 0.9f, -42, 2.2f, -42, 3.2f, -8);
            return c;
        }

        private static AnimationClip Talk()
        {
            var c = NewClip("Talk", true);
            Rot(c, ShR, "x", 0, -24, 1.5f, -34, 3, -24);
            Rot(c, FaR, "x", 0, -54, 0.75f, -68, 1.5f, -48, 2.25f, -68, 3, -54);
            Rot(c, FaR, "z", 0, -8, 0.75f, 8, 1.5f, -8, 2.25f, 8, 3, -8);
            Rot(c, ShL, "x", 0, -10, 1.5f, -16, 3, -10);
            Rot(c, FaL, "x", 0, -22, 1.5f, -30, 3, -22);
            Rot(c, Head, "x", 0, 3, 0.75f, -2, 1.5f, 3, 2.25f, -2, 3, 3);
            Rot(c, Head, "y", 0, -2, 1.5f, 2, 3, -2);
            return c;
        }

        private static AnimationClip Greet()
        {
            var c = NewClip("Greet", false);
            Rot(c, Head, "x", 0, 0, 0.4f, 13, 1.2f, 13, 1.8f, 0);
            Rot(c, ShL, "x", 0, 0, 0.4f, -28, 1.2f, -28, 1.8f, 0);
            Rot(c, ShR, "x", 0, 0, 0.4f, -28, 1.2f, -28, 1.8f, 0);
            Rot(c, FaL, "x", 0, -8, 0.4f, -94, 1.2f, -94, 1.8f, -8);
            Rot(c, FaR, "x", 0, -8, 0.4f, -94, 1.2f, -94, 1.8f, -8);
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
