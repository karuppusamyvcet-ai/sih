using UnityEngine;
using UnityEditor;
using DHJ.Data;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Generates the playable Dr. B. R. Ambedkar character from the
    /// CharacterStyleConfig (the machine-readable form of the supplied character
    /// sheet — spec §54). Rigid-mesh "action-figure" construction on a full humanoid
    /// bone hierarchy: suit, shirt, red tie, round glasses, combed hair, mustache,
    /// jointed arms with hands & fingers, legs and shoes. Every part is a shared
    /// asset so the whole thing stays consistent, mobile-cheap and re-generable.
    /// </summary>
    public static class CharacterFactory
    {
        public const string PrefabPath = "Assets/Prefabs/Player/Ambedkar_Player.prefab";

        public static GameObject BuildPlayerPrefab(CharacterStyleConfig cfg)
        {
            if (cfg == null) cfg = DHJBootstrap.EnsureStyleConfig();

            var skin      = Mat("Skin", cfg.skinTone, 0.28f);
            var skinShade = Mat("Skin_Shade", cfg.skinShade, 0.28f);
            var hairMat   = Mat("Hair", cfg.hairColor, 0.4f);
            var suit      = Mat("Suit_Navy", cfg.suitColor, 0.35f);
            var shirt     = Mat("Shirt_White", cfg.shirtColor, 0.25f);
            var tie       = Mat("Tie_Red", cfg.tieColor, 0.32f);
            var trousers  = Mat("Trousers", cfg.trouserColor, 0.3f);
            var shoes     = Mat("Shoes_Black", cfg.shoeColor, 0.7f);
            var frame     = Mat("Glasses_Frame", cfg.glassesFrameColor, 0.55f, 0.6f);
            var lens      = Mat("Glasses_Lens", new Color(0.8f, 0.9f, 1f, 0.18f), 0.85f);
            MaterialLibrary.MakeTransparent(lens);

            // ---------------- root & rig ----------------
            var root = new GameObject("Ambedkar_Player");
            var model = Child(root, "Model", Vector3.zero);
            var rig = Child(model, "Rig", Vector3.zero);

            float h = cfg.height;
            float k = h / 1.72f;      // normalize all measurements to configured height
            float B = cfg.build;

            var hips     = Bone(rig, "Hips", P(0, 0.95f * k));
            var spine    = Bone(hips, "Spine", P(0, 1.10f * k));
            var chest    = Bone(spine, "Chest", P(0, 1.30f * k));
            var neck     = Bone(chest, "Neck", P(0, 1.50f * k));
            var head     = Bone(neck, "Head", P(0, 1.575f * k));
            var shoulderL = Bone(chest, "ShoulderL", P(-0.215f * B, 1.44f * k));
            var forearmL  = Bone(shoulderL, "ForearmL", P(0, -0.27f * k));
            var handL     = Bone(forearmL, "HandL", P(0, -0.27f * k));
            var shoulderR = Bone(chest, "ShoulderR", P(0.215f * B, 1.44f * k));
            var forearmR  = Bone(shoulderR, "ForearmR", P(0, -0.27f * k));
            var handR     = Bone(forearmR, "HandR", P(0, -0.27f * k));
            var thighL   = Bone(hips, "ThighL", P(-0.105f * B, 0.0f));
            var shinL    = Bone(thighL, "ShinL", P(0, -0.46f * k));
            var footL    = Bone(shinL, "FootL", P(0, -0.42f * k));
            var thighR   = Bone(hips, "ThighR", P(0.105f * B, 0.0f));
            var shinR    = Bone(thighR, "ShinR", P(0, -0.46f * k));
            var footR    = Bone(shinR, "FootR", P(0, -0.42f * k));

            // Formal standing pose: arms hang down and only slightly out
            shoulderL.localEulerAngles = new Vector3(0, 0, 12);
            shoulderR.localEulerAngles = new Vector3(0, 0, -12);

            // ---------------- torso: suit, shirt, tie ----------------
            MeshBox(hips, "Jacket_Skirt", new Vector3(0.40f * B, 0.16f, 0.26f * B), P(0, 0.02f * k), suit);
            MeshBox(spine, "Jacket_Mid", new Vector3(0.38f * B, 0.24f, 0.245f * B), P(0, 0.10f * k), suit);
            MeshBox(chest, "Jacket_Chest", new Vector3(0.42f * B, 0.26f, 0.26f * B), P(0, 0.115f * k), suit);
            MeshBox(chest, "Shoulder_Pads", new Vector3(0.46f * B, 0.07f, 0.25f * B), P(0, 0.225f * k), suit);

            // shirt showing through the open jacket front
            MeshBox(chest, "Shirt_Panel", new Vector3(0.115f * B, 0.20f, 0.02f), P(0, 0.10f * k, 0.125f * B), shirt);
            MeshBox(spine, "Shirt_Lower", new Vector3(0.10f * B, 0.16f, 0.02f), P(0, 0.13f * k, 0.118f * B), shirt);
            var collarL = MeshBox(chest, "Collar_L", new Vector3(0.07f, 0.045f, 0.02f), P(-0.045f, 0.235f * k, 0.115f * B), shirt);
            collarL.localEulerAngles = new Vector3(12, 0, 30);
            var collarR = MeshBox(chest, "Collar_R", new Vector3(0.07f, 0.045f, 0.02f), P(0.045f, 0.235f * k, 0.115f * B), shirt);
            collarR.localEulerAngles = new Vector3(12, 0, -30);

            // red tie (knot + blade) — the character's signature color mark
            MeshBox(chest, "Tie_Knot", new Vector3(0.05f, 0.048f, 0.024f), P(0, 0.222f * k, 0.127f * B), tie);
            var tieBlade = MeshBox(chest, "Tie_Blade", new Vector3(0.062f, 0.30f, 0.016f), P(0, 0.045f * k, 0.128f * B), tie);
            tieBlade.localEulerAngles = new Vector3(3, 0, 0);
            MeshBox(spine, "Tie_Tip", new Vector3(0.075f, 0.09f, 0.015f), P(0, 0.165f * k, 0.127f * B), tie);

            // lapels
            var lapL = MeshBox(chest, "Lapel_L", new Vector3(0.10f, 0.22f, 0.025f), P(-0.085f * B, 0.135f * k, 0.118f * B), suit);
            lapL.localEulerAngles = new Vector3(6, -18, -12);
            var lapR = MeshBox(chest, "Lapel_R", new Vector3(0.10f, 0.22f, 0.025f), P(0.085f * B, 0.135f * k, 0.118f * B), suit);
            lapR.localEulerAngles = new Vector3(6, 18, 12);
            // jacket buttons
            MeshSphere(chest, "Button1", 0.014f, P(0.075f * B, 0.06f * k, 0.125f * B), frame);
            MeshSphere(chest, "Button2", 0.014f, P(0.07f * B, 0.0f, 0.122f * B), frame);

            // ---------------- head & face ----------------
            float hs = cfg.headScale;
            var headMesh = MeshSphere(head, "Head_Mesh", 0.125f * hs, P(0, 0.015f), skin);
            headMesh.localScale = new Vector3(0.90f, 1.06f, 0.94f);
            // neck
            MeshCyl(neck, "Neck_Mesh", 0.05f, 0.05f, 0.09f, P(0, 0.01f), skin);
            // ears
            MeshSphere(head, "Ear_L", 0.028f, P(-0.112f * hs, 0.005f, 0), skinShade)
                .localScale = new Vector3(0.5f, 1f, 0.8f);
            MeshSphere(head, "Ear_R", 0.028f, P(0.112f * hs, 0.005f, 0), skinShade)
                .localScale = new Vector3(0.5f, 1f, 0.8f);
            // eyes (whites + pupils)
            MeshSphere(head, "EyeW_L", 0.021f, P(-0.048f * hs, 0.012f, 0.100f * hs),
                Mat("Eye_White", new Color(0.94f, 0.93f, 0.92f), 0.15f));
            MeshSphere(head, "EyeW_R", 0.021f, P(0.048f * hs, 0.012f, 0.100f * hs),
                Mat("Eye_White", new Color(0.94f, 0.93f, 0.92f), 0.15f));
            MeshSphere(head, "Pupil_L", 0.011f, P(-0.048f * hs, 0.012f, 0.113f * hs), frame);
            MeshSphere(head, "Pupil_R", 0.011f, P(0.048f * hs, 0.012f, 0.113f * hs), frame);
            // brows
            var browL = MeshBox(head, "Brow_L", new Vector3(0.045f, 0.011f, 0.012f), P(-0.05f * hs, 0.048f, 0.103f * hs), hairMat);
            var browR = MeshBox(head, "Brow_R", new Vector3(0.045f, 0.011f, 0.012f), P(0.05f * hs, 0.048f, 0.103f * hs), hairMat);
            // nose
            var nose = MeshBox(head, "Nose", new Vector3(0.024f, 0.040f, 0.024f), P(0, -0.012f, 0.112f * hs), skin);
            nose.localEulerAngles = new Vector3(12, 0, 0);
            // mustache (the reference's signature feature)
            if (cfg.hasMustache)
                MeshBox(head, "Mustache", new Vector3(0.078f, 0.014f, 0.014f), P(0, -0.036f, 0.108f * hs), hairMat);

            // hair: side-parted combed cap
            var hair = MeshDome(head, "Hair_Cap", 0.132f * hs, P(0, 0.028f, -0.012f), hairMat);
            hair.localScale = new Vector3(1.0f, 0.86f, 1.02f);
            MeshBox(head, "Hair_Fringe", new Vector3(0.20f, 0.030f, 0.02f), P(0, 0.075f, 0.096f * hs), hairMat)
                .localEulerAngles = new Vector3(-14, 0, 0);
            MeshBox(head, "Hair_SideL", new Vector3(0.02f, 0.07f, 0.06f), P(-0.115f * hs, 0.045f, 0.02f), hairMat);
            MeshBox(head, "Hair_SideR", new Vector3(0.02f, 0.07f, 0.06f), P(0.115f * hs, 0.045f, 0.02f), hairMat);

            // round spectacles — always visible (spec §8)
            if (cfg.hasGlasses)
            {
                float r = cfg.glassesLensRadius;
                var rimL = MeshTorus(head, "Rim_L", r, 0.0032f, P(-0.048f * hs, 0.012f, 0.106f * hs), frame);
                var rimR = MeshTorus(head, "Rim_R", r, 0.0032f, P(0.048f * hs, 0.012f, 0.106f * hs), frame);
                var lensL = MeshSphere(head, "Lens_L", r * 0.9f, P(-0.048f * hs, 0.012f, 0.104f * hs), lens);
                lensL.localScale = new Vector3(1, 1, 0.15f);
                var lensR = MeshSphere(head, "Lens_R", r * 0.9f, P(0.048f * hs, 0.012f, 0.104f * hs), lens);
                lensR.localScale = new Vector3(1, 1, 0.15f);
                var bridge = MeshCyl(head, "Bridge", 0.003f, 0.003f, 0.020f, P(0, 0.016f, 0.106f * hs), frame);
                bridge.localEulerAngles = new Vector3(0, 0, 90);
                var tempL = MeshCyl(head, "Temple_L", 0.0026f, 0.0026f, 0.115f, P(-0.078f * hs - r * 0.4f, (0.012f + 0.014f) / 1.35f, (0.06f)), frame);
                tempL.localEulerAngles = new Vector3(88, 0, 0);
                var tempR = MeshCyl(head, "Temple_R", 0.0026f, 0.0026f, 0.115f, P(0.078f * hs + r * 0.4f, (0.012f + 0.014f) / 1.35f, (0.06f)), frame);
                tempR.localEulerAngles = new Vector3(88, 0, 0);
            }

            // ---------------- arms: jacket sleeves, cuffs, hands ----------------
            ArmMesh(shoulderL, forearmL, handL, suit, shirt, skin, 0.27f * k, -1, B);
            ArmMesh(shoulderR, forearmR, handR, suit, shirt, skin, 0.27f * k, +1, B);

            // ---------------- legs: trousers & shoes ----------------
            LegMesh(thighL, shinL, footL, trousers, shoes, k, B);
            LegMesh(thighR, shinR, footR, trousers, shoes, k, B);

            // ---------------- animator + player behaviour ----------------
            var animator = model.AddComponent<Animator>();
            animator.runtimeAnimatorController = AnimationFactory.EnsureController();
            animator.applyRootMotion = false;
            animator.cullingMode = AnimatorCullingMode.CullUpdateTransforms;

            var ccDesc = root.AddComponent<CharacterController>();
            ccDesc.height = 1.74f * k;
            ccDesc.radius = 0.34f;
            ccDesc.center = new Vector3(0, 0.9f * k);
            ccDesc.stepOffset = 0.4f;
            ccDesc.slopeLimit = 50f;

            var pc = root.AddComponent<DHJ.Player.PlayerController>();
            ccDesc.skinWidth = 0.03f;

            root.AddComponent<DHJ.Player.PlayerInteractor>();

            var go = SavePrefab(root, PrefabPath);
            Debug.Log("[DHJ] Character prefab generated at " + PrefabPath);
            return go;
        }

        private static void ArmMesh(Transform shoulder, Transform forearm, Transform hand,
            Material suit, Material shirt, Material skin, float segLen, int side, float B)
        {
            // sleeve: upper arm
            MeshCyl(shoulder, "UpperSleeve" + (side < 0 ? "L" : "R"), 0.062f, 0.056f, segLen,
                P(0, -segLen, 0), suit);
            // forearm sleeve + shirt cuff
            MeshCyl(forearm, "ForeSleeve" + (side < 0 ? "L" : "R"), 0.053f, 0.047f, segLen,
                P(0, -segLen, 0), suit);
            MeshCyl(forearm, "Cuff" + (side < 0 ? "L" : "R"), 0.049f, 0.049f, 0.035f,
                P(0, -segLen + 0.035f, 0), shirt);
            // hand: palm + fingers
            var palm = MeshBox(hand, "Palm" + (side < 0 ? "L" : "R"),
                new Vector3(0.055f, 0.085f, 0.028f), P(0, -0.045f, 0), skin);
            for (int f = 0; f < 4; f++)
            {
                MeshBox(hand, "Finger" + (side < 0 ? "L" : "R") + f,
                    new Vector3(0.011f, 0.05f, 0.012f),
                    P(-0.021f + f * 0.014f, -0.112f, 0.002f), skin);
            }
            MeshBox(hand, "Thumb" + (side < 0 ? "L" : "R"),
                new Vector3(0.012f, 0.045f, 0.012f),
                P(side * 0.0325f, -0.055f, 0.008f), skin)
                .localEulerAngles = new Vector3(0, 0, -side * 28);
        }

        private static void LegMesh(Transform thigh, Transform shin, Transform foot,
            Material trousers, Material shoes, float k, float B)
        {
            MeshCyl(thigh, "ThighMesh", 0.085f * B, 0.070f * B, 0.46f * k, P(0, -0.46f * k, 0), trousers);
            MeshCyl(shin, "ShinMesh", 0.062f * B, 0.052f * B, 0.42f * k, P(0, -0.42f * k, 0), trousers);
            // shoe (toe forward + heel)
            var shoe = MeshBox(foot, "Shoe", new Vector3(0.105f * B, 0.07f, 0.24f), P(0, 0.035f, 0.055f), shoes);
            MeshBox(foot, "ShoeHeel", new Vector3(0.09f * B, 0.03f, 0.09f), P(0, 0.015f, -0.045f), shoes);
        }

        // ------------------------------------------------------------ helpers
        private static Material Mat(string name, Color c, float smooth, float metallic = 0f) =>
            MaterialLibrary.Get("Char_" + name, c, null, smooth, metallic);

        private static Transform Child(GameObject parent, string name, Vector3 localPos)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent.transform, false);
            go.transform.localPosition = localPos;
            return go.transform;
        }

        private static Transform Bone(Transform parent, string name, Vector3 localPos)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.localPosition = localPos;
            return go.transform;
        }

        private static Vector3 P(float x, float y, float z = 0f) => new(x, y, z);

        private static string Dim(Vector3 v) => $"{v.x:F3}_{v.y:F3}_{v.z:F3}";

        private static Transform MeshBox(Transform bone, string name, Vector3 size, Vector3 localPos, Material m)
        {
            var mesh = ProceduralMesh.Box($"Box_{Dim(size)}", size.x, size.y, size.z);
            return AddPart(bone, name, mesh, localPos, m);
        }

        private static Transform MeshSphere(Transform bone, string name, float r, Vector3 localPos, Material m)
        {
            var mesh = ProceduralMesh.Sphere($"Sphere_{r:F3}", r, 16, 10);
            return AddPart(bone, name, mesh, localPos, m);
        }

        private static Transform MeshDome(Transform bone, string name, float r, Vector3 localPos, Material m)
        {
            var mesh = ProceduralMesh.Dome($"Dome_{r:F3}", r, 20, 7);
            return AddPart(bone, name, mesh, localPos, m);
        }

        private static Transform MeshCyl(Transform bone, string name, float rT, float rB, float h, Vector3 localPos, Material m)
        {
            var mesh = ProceduralMesh.Cylinder($"Cyl_{rT:F3}_{rB:F3}_{h:F3}", rT, rB, h, 16);
            var t = AddPart(bone, name, mesh, Vector3.zero, m);
            t.localPosition = localPos;
            return t;
        }

        private static Transform MeshTorus(Transform bone, string name, float major, float minor, Vector3 localPos, Material m)
        {
            var mesh = ProceduralMesh.Torus($"Torus_{major:F3}_{minor:F4}", major, minor, 20, 8);
            var t = AddPart(bone, name, mesh, localPos, m);
            t.localEulerAngles = new Vector3(90, 0, 0);   // torus lies in XZ → face forward
            return t;
        }

        private static Transform AddPart(Transform bone, string name, Mesh mesh, Vector3 localPos, Material m)
        {
            var go = new GameObject(name);
            go.transform.SetParent(bone, false);
            go.transform.localPosition = localPos;
            var mf = go.AddComponent<MeshFilter>(); mf.sharedMesh = mesh;
            var mr = go.AddComponent<MeshRenderer>(); mr.sharedMaterial = m;
            mr.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.On;
            return go.transform;
        }

        private static GameObject SavePrefab(GameObject root, string path)
        {
            if (!AssetDatabase.IsValidFolder("Assets/Prefabs/Player"))
            {
                if (!AssetDatabase.IsValidFolder("Assets/Prefabs")) AssetDatabase.CreateFolder("Assets", "Prefabs");
                AssetDatabase.CreateFolder("Assets/Prefabs", "Player");
            }
            var prefab = PrefabUtility.SaveAsPrefabAsset(root, path);
            Object.DestroyImmediate(root);
            return prefab;
        }
    }
}
