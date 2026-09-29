using UnityEngine;
using UnityEditor;
using DHJ.Data;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Generates the playable Dr. B. R. Ambedkar character from CharacterStyleConfig.
    /// Uses anatomically tapered limb meshes, sculpted facial features (cheekbones,
    /// jawline, eyelids for blinking, iris/pupil for gaze, articulated lips, tapered
    /// mustache), tailored worsted-wool navy suit with normal map, breast-pocket
    /// kerchief & gold fountain pen, round spectacles, and Oxford dress shoes.
    /// Preserves the exact humanoid bone hierarchy used by AnimationFactory and
    /// attaches CharacterRealismDriver for autonomous blinking, gaze IK, and cloth physics.
    /// </summary>
    public static class CharacterFactory
    {
        public const string PrefabPath = "Assets/Prefabs/Player/Ambedkar_Player.prefab";

        public static GameObject BuildPlayerPrefab(CharacterStyleConfig cfg)
        {
            if (cfg == null) cfg = DHJBootstrap.EnsureStyleConfig();

            var skin      = Mat("Skin", cfg.skinTone, 0.30f);
            var skinShade = Mat("Skin_Shade", cfg.skinShade, 0.28f);
            var lipMat    = Mat("Lip_Tone", Color.Lerp(cfg.skinShade, new Color(0.46f, 0.24f, 0.22f), 0.45f), 0.36f);
            var hairMat   = Mat("Hair", cfg.hairColor, 0.38f);
            var suit      = MaterialLibrary.Get("Char_Suit_Wool", cfg.suitColor, "suit_fabric", 0.24f, 0f, new Vector2(4f, 4f), null, 0.55f);
            var suitDark  = MaterialLibrary.Get("Char_Suit_Dark", cfg.suitColor * 0.82f, "suit_fabric", 0.22f, 0f, new Vector2(4f, 4f), null, 0.55f);
            var shirt     = Mat("Shirt_White", cfg.shirtColor, 0.24f);
            var tie       = Mat("Tie_Red", cfg.tieColor, 0.34f);
            var trousers  = MaterialLibrary.Get("Char_Trousers_Wool", cfg.trouserColor, "suit_fabric", 0.24f, 0f, new Vector2(4f, 4f), null, 0.50f);
            var shoes     = MaterialLibrary.Get("Char_Shoes_Leather", cfg.shoeColor, "leather_dark", 0.68f, 0.05f, new Vector2(2f, 2f), null, 0.45f);
            var frame     = Mat("Glasses_Frame", cfg.glassesFrameColor, 0.65f, 0.72f);
            var gold      = MaterialLibrary.Gold;
            var lens      = Mat("Glasses_Lens", new Color(0.82f, 0.90f, 0.98f, 0.16f), 0.92f);
            MaterialLibrary.MakeTransparent(lens);

            // ---------------- root & rig ----------------
            var root = new GameObject("Ambedkar_Player");
            var model = Child(root, "Model", Vector3.zero);
            var rig = Child(model, "Rig", Vector3.zero);

            float h = cfg.height;
            float k = h / 1.72f;      // normalize all measurements to configured height
            float B = cfg.build;

            var hips      = Bone(rig, "Hips", P(0, 0.95f * k));
            var spine     = Bone(hips, "Spine", P(0, 1.10f * k));
            var chest     = Bone(spine, "Chest", P(0, 1.30f * k));
            var neck      = Bone(chest, "Neck", P(0, 1.50f * k));
            var head      = Bone(neck, "Head", P(0, 1.575f * k));
            var shoulderL = Bone(chest, "ShoulderL", P(-0.215f * B, 1.44f * k));
            var forearmL  = Bone(shoulderL, "ForearmL", P(0, -0.27f * k));
            var handL     = Bone(forearmL, "HandL", P(0, -0.27f * k));
            var shoulderR = Bone(chest, "ShoulderR", P(0.215f * B, 1.44f * k));
            var forearmR  = Bone(shoulderR, "ForearmR", P(0, -0.27f * k));
            var handR     = Bone(forearmR, "HandR", P(0, -0.27f * k));
            var thighL    = Bone(hips, "ThighL", P(-0.105f * B, 0.0f));
            var shinL     = Bone(thighL, "ShinL", P(0, -0.46f * k));
            var footL     = Bone(shinL, "FootL", P(0, -0.42f * k));
            var thighR    = Bone(hips, "ThighR", P(0.105f * B, 0.0f));
            var shinR     = Bone(thighR, "ShinR", P(0, -0.46f * k));
            var footR     = Bone(shinR, "FootR", P(0, -0.42f * k));

            // Natural relaxed standing posture
            shoulderL.localEulerAngles = new Vector3(0, 0, 10);
            shoulderR.localEulerAngles = new Vector3(0, 0, -10);

            // ---------------- torso: tailored worsted-wool suit, shirt, tie ----------------
            var skirt = MeshBox(hips, "Jacket_Skirt", new Vector3(0.39f * B, 0.17f, 0.255f * B), P(0, 0.015f * k), suit);
            // Side pocket flaps on jacket skirt
            MeshBox(skirt, "PocketFlap_L", new Vector3(0.012f, 0.036f, 0.11f), P(-0.196f * B, 0.02f, 0.04f), suitDark);
            MeshBox(skirt, "PocketFlap_R", new Vector3(0.012f, 0.036f, 0.11f), P(0.196f * B, 0.02f, 0.04f), suitDark);

            MeshBox(spine, "Jacket_Mid", new Vector3(0.375f * B, 0.24f, 0.245f * B), P(0, 0.10f * k), suit);
            MeshBox(chest, "Jacket_Chest", new Vector3(0.415f * B, 0.26f, 0.26f * B), P(0, 0.115f * k), suit);
            // Sculpted rounded shoulders
            var shPadL = MeshSphere(chest, "ShoulderPad_L", 0.085f * B, P(-0.175f * B, 0.205f * k, 0), suit);
            shPadL.localScale = new Vector3(1.15f, 0.55f, 1.35f);
            var shPadR = MeshSphere(chest, "ShoulderPad_R", 0.085f * B, P(0.175f * B, 0.205f * k, 0), suit);
            shPadR.localScale = new Vector3(1.15f, 0.55f, 1.35f);
            MeshBox(chest, "Shoulder_Yoke", new Vector3(0.43f * B, 0.06f, 0.245f * B), P(0, 0.22f * k), suit);

            // Breast welt pocket with white kerchief & signature fountain pen (on left chest)
            MeshBox(chest, "BreastPocket_Welt", new Vector3(0.085f, 0.016f, 0.015f), P(-0.115f * B, 0.145f * k, 0.130f * B), suitDark);
            MeshBox(chest, "Pocket_Kerchief", new Vector3(0.065f, 0.022f, 0.012f), P(-0.115f * B, 0.158f * k, 0.128f * B), shirt);
            MeshCyl(chest, "FountainPen_Cap", 0.005f, 0.005f, 0.036f, P(-0.092f * B, 0.138f * k, 0.133f * B), gold);

            // Crisp white dress shirt showing through the open jacket front
            MeshBox(chest, "Shirt_Panel", new Vector3(0.125f * B, 0.21f, 0.022f), P(0, 0.105f * k, 0.124f * B), shirt);
            MeshBox(spine, "Shirt_Lower", new Vector3(0.105f * B, 0.16f, 0.020f), P(0, 0.13f * k, 0.118f * B), shirt);
            var collarL = MeshBox(chest, "Collar_L", new Vector3(0.072f, 0.046f, 0.022f), P(-0.044f, 0.236f * k, 0.116f * B), shirt);
            collarL.localEulerAngles = new Vector3(12, 0, 28);
            var collarR = MeshBox(chest, "Collar_R", new Vector3(0.072f, 0.046f, 0.022f), P(0.044f, 0.236f * k, 0.116f * B), shirt);
            collarR.localEulerAngles = new Vector3(12, 0, -28);

            // Signature red tie (knot + dynamic blade + tip)
            MeshBox(chest, "Tie_Knot", new Vector3(0.046f, 0.046f, 0.026f), P(0, 0.222f * k, 0.128f * B), tie);
            var tieBlade = MeshBox(chest, "Tie_Blade", new Vector3(0.058f, 0.29f, 0.016f), P(0, 0.05f * k, 0.129f * B), tie);
            tieBlade.localEulerAngles = new Vector3(2.5f, 0, 0);
            MeshBox(spine, "Tie_Tip", new Vector3(0.068f, 0.085f, 0.015f), P(0, 0.165f * k, 0.127f * B), tie);

            // Tailored notched lapels
            var lapL = MeshBox(chest, "Lapel_L", new Vector3(0.095f, 0.23f, 0.024f), P(-0.086f * B, 0.135f * k, 0.120f * B), suitDark);
            lapL.localEulerAngles = new Vector3(6, -16, -12);
            var lapR = MeshBox(chest, "Lapel_R", new Vector3(0.095f, 0.23f, 0.024f), P(0.086f * B, 0.135f * k, 0.120f * B), suitDark);
            lapR.localEulerAngles = new Vector3(6, 16, 12);

            // Jacket buttons
            MeshSphere(chest, "Button1", 0.013f, P(0.068f * B, 0.06f * k, 0.126f * B), frame);
            MeshSphere(chest, "Button2", 0.013f, P(0.065f * B, -0.01f, 0.123f * B), frame);

            // ---------------- sculpted head & facial anatomy ----------------
            float hs = cfg.headScale;
            var headMesh = MeshSphere(head, "Head_Mesh", 0.122f * hs, P(0, 0.022f, -0.004f), skin);
            headMesh.localScale = new Vector3(0.89f, 1.05f, 0.95f);

            // Sculpted jawline & chin contour
            var jawMesh = MeshSphere(head, "Jaw_Mesh", 0.094f * hs, P(0, -0.028f, 0.012f * hs), skin);
            jawMesh.localScale = new Vector3(0.88f, 0.82f, 0.92f);

            // Cheekbones for realistic facial topography
            var cheekL = MeshSphere(head, "Cheek_L", 0.038f * hs, P(-0.056f * hs, -0.008f, 0.078f * hs), skin);
            cheekL.localScale = new Vector3(1.0f, 0.75f, 0.85f);
            var cheekR = MeshSphere(head, "Cheek_R", 0.038f * hs, P(0.056f * hs, -0.008f, 0.078f * hs), skin);
            cheekR.localScale = new Vector3(1.0f, 0.75f, 0.85f);

            // Neck
            MeshCyl(neck, "Neck_Mesh", 0.052f, 0.056f, 0.095f, P(0, 0.005f), skin);

            // Anatomical ears with outer helix rim
            var earL = MeshSphere(head, "Ear_L", 0.028f, P(-0.110f * hs, 0.006f, -0.004f), skinShade);
            earL.localScale = new Vector3(0.42f, 1.05f, 0.75f);
            var earR = MeshSphere(head, "Ear_R", 0.028f, P(0.110f * hs, 0.006f, -0.004f), skinShade);
            earR.localScale = new Vector3(0.42f, 1.05f, 0.75f);

            // Eyes (sclera + dark brown iris + pupil + articulated upper eyelids for blinking)
            var eyeWhiteMat = Mat("Eye_White", new Color(0.93f, 0.91f, 0.88f), 0.65f);
            var irisMat     = Mat("Eye_Iris", new Color(0.20f, 0.12f, 0.08f), 0.75f);
            var pupilMat    = Mat("Eye_Pupil", new Color(0.04f, 0.04f, 0.05f), 0.85f);

            MeshSphere(head, "EyeW_L", 0.019f, P(-0.045f * hs, 0.014f, 0.096f * hs), eyeWhiteMat)
                .localScale = new Vector3(1.05f, 0.82f, 0.75f);
            MeshSphere(head, "EyeW_R", 0.019f, P(0.045f * hs, 0.014f, 0.096f * hs), eyeWhiteMat)
                .localScale = new Vector3(1.05f, 0.82f, 0.75f);

            var pupilL = MeshSphere(head, "Pupil_L", 0.0095f, P(-0.045f * hs, 0.014f, 0.109f * hs), irisMat);
            pupilL.localScale = new Vector3(1f, 1f, 0.45f);
            MeshSphere(pupilL, "PupilCore_L", 0.0055f, P(0, 0, 0.004f), pupilMat);

            var pupilR = MeshSphere(head, "Pupil_R", 0.0095f, P(0.045f * hs, 0.014f, 0.109f * hs), irisMat);
            pupilR.localScale = new Vector3(1f, 1f, 0.45f);
            MeshSphere(pupilR, "PupilCore_R", 0.0055f, P(0, 0, 0.004f), pupilMat);

            // Upper eyelids (scaled dynamically by CharacterRealismDriver for natural blinking)
            var lidL = MeshSphere(head, "Eyelid_L", 0.0205f, P(-0.045f * hs, 0.019f, 0.097f * hs), skinShade);
            lidL.localScale = new Vector3(1.08f, 0.22f, 0.78f);
            var lidR = MeshSphere(head, "Eyelid_R", 0.0205f, P(0.045f * hs, 0.019f, 0.097f * hs), skinShade);
            lidR.localScale = new Vector3(1.08f, 0.22f, 0.78f);

            // Supraorbital eyebrows
            var browL = MeshBox(head, "Brow_L", new Vector3(0.042f, 0.009f, 0.012f), P(-0.046f * hs, 0.044f, 0.101f * hs), hairMat);
            browL.localEulerAngles = new Vector3(0, -8, 4);
            var browR = MeshBox(head, "Brow_R", new Vector3(0.042f, 0.009f, 0.012f), P(0.046f * hs, 0.044f, 0.101f * hs), hairMat);
            browR.localEulerAngles = new Vector3(0, 8, -4);

            // Sculpted nose (bridge + rounded tip + alar wings)
            var nose = MeshCyl(head, "Nose", 0.009f, 0.013f, 0.040f, P(0, -0.018f, 0.108f * hs), skin);
            nose.localEulerAngles = new Vector3(-16, 0, 0);
            var noseTip = MeshSphere(head, "Nose_Tip", 0.0135f, P(0, -0.016f, 0.116f * hs), skin);
            noseTip.localScale = new Vector3(1.05f, 0.85f, 0.95f);

            // Mustache & articulated lips
            if (cfg.hasMustache)
            {
                var must = MeshBox(head, "Mustache", new Vector3(0.068f, 0.012f, 0.014f), P(0, -0.036f, 0.106f * hs), hairMat);
                MeshBox(must, "Mustache_WingL", new Vector3(0.022f, 0.010f, 0.012f), P(-0.026f, -0.002f, -0.002f), hairMat)
                    .localEulerAngles = new Vector3(0, 12, 12);
                MeshBox(must, "Mustache_WingR", new Vector3(0.022f, 0.010f, 0.012f), P(0.026f, -0.002f, -0.002f), hairMat)
                    .localEulerAngles = new Vector3(0, -12, -12);
            }
            var upperLip = MeshSphere(head, "UpperLip", 0.022f, P(0, -0.046f, 0.101f * hs), lipMat);
            upperLip.localScale = new Vector3(1.35f, 0.32f, 0.55f);
            var lowerLip = MeshSphere(head, "LowerLip", 0.021f, P(0, -0.053f, 0.099f * hs), lipMat);
            lowerLip.localScale = new Vector3(1.25f, 0.36f, 0.55f);

            // Side-parted combed hair with natural crown & nape contour
            var hair = MeshDome(head, "Hair_Cap", 0.128f * hs, P(0, 0.030f, -0.010f), hairMat);
            hair.localScale = new Vector3(0.98f, 0.88f, 1.02f);
            var fringe = MeshSphere(head, "Hair_Fringe", 0.075f * hs, P(0.012f, 0.076f, 0.062f * hs), hairMat);
            fringe.localScale = new Vector3(1.35f, 0.38f, 0.72f);
            fringe.localEulerAngles = new Vector3(14, 0, -5);
            MeshBox(head, "Hair_SideL", new Vector3(0.018f, 0.068f, 0.065f), P(-0.108f * hs, 0.042f, 0.012f), hairMat);
            MeshBox(head, "Hair_SideR", new Vector3(0.018f, 0.068f, 0.065f), P(0.108f * hs, 0.042f, 0.012f), hairMat);
            var nape = MeshSphere(head, "Hair_Nape", 0.085f * hs, P(0, 0.010f, -0.048f * hs), hairMat);
            nape.localScale = new Vector3(1.05f, 0.85f, 0.75f);

            // Signature round spectacles — always visible
            if (cfg.hasGlasses)
            {
                float r = cfg.glassesLensRadius;
                MeshTorus(head, "Rim_L", r, 0.0028f, P(-0.045f * hs, 0.014f, 0.106f * hs), frame);
                MeshTorus(head, "Rim_R", r, 0.0028f, P(0.045f * hs, 0.014f, 0.106f * hs), frame);
                var lensL = MeshSphere(head, "Lens_L", r * 0.92f, P(-0.045f * hs, 0.014f, 0.105f * hs), lens);
                lensL.localScale = new Vector3(1, 1, 0.12f);
                var lensR = MeshSphere(head, "Lens_R", r * 0.92f, P(0.045f * hs, 0.014f, 0.105f * hs), lens);
                lensR.localScale = new Vector3(1, 1, 0.12f);
                var bridge = MeshCyl(head, "Bridge", 0.0026f, 0.0026f, 0.020f, P(-0.010f, 0.018f, 0.107f * hs), frame);
                bridge.localEulerAngles = new Vector3(0, 0, -90);
                var tempL = MeshCyl(head, "Temple_L", 0.0024f, 0.0024f, 0.112f, P(-0.075f * hs - r * 0.35f, 0.016f, -0.004f), frame);
                tempL.localEulerAngles = new Vector3(88, 0, 0);
                var tempR = MeshCyl(head, "Temple_R", 0.0024f, 0.0024f, 0.112f, P(0.075f * hs + r * 0.35f, 0.016f, -0.004f), frame);
                tempR.localEulerAngles = new Vector3(88, 0, 0);
            }

            // ---------------- arms: tapered sleeves, cuffs, articulated hands ----------------
            ArmMesh(shoulderL, forearmL, handL, suit, shirt, skin, gold, 0.27f * k, -1, B);
            ArmMesh(shoulderR, forearmR, handR, suit, shirt, skin, gold, 0.27f * k, +1, B);

            // ---------------- legs: tailored trousers & Oxford dress shoes ----------------
            LegMesh(thighL, shinL, footL, trousers, shoes, k, B);
            LegMesh(thighR, shinR, footR, trousers, shoes, k, B);

            // ---------------- animator + player behaviour + realism driver ----------------
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
            ccDesc.skinWidth = 0.03f;

            root.AddComponent<DHJ.Player.PlayerController>();
            root.AddComponent<DHJ.Player.PlayerInteractor>();
            root.AddComponent<DHJ.Player.CharacterRealismDriver>();

            var go = SavePrefab(root, PrefabPath);
            Debug.Log("[DHJ] Character prefab generated at " + PrefabPath);
            return go;
        }

        private static void ArmMesh(Transform shoulder, Transform forearm, Transform hand,
            Material suit, Material shirt, Material skin, Material gold, float segLen, int side, float B)
        {
            string sfx = side < 0 ? "L" : "R";
            // Upper sleeve with rounded shoulder & elbow caps
            MeshLimb(shoulder, "UpperSleeve" + sfx, 0.064f * B, 0.055f * B, segLen, P(0, 0, 0), suit);
            // Forearm sleeve + crisp shirt cuff + gold cufflink
            MeshLimb(forearm, "ForeSleeve" + sfx, 0.054f * B, 0.046f * B, segLen * 0.92f, P(0, 0, 0), suit);
            MeshCyl(forearm, "Cuff" + sfx, 0.047f, 0.047f, 0.038f, P(0, -segLen + 0.028f, 0), shirt);
            MeshSphere(forearm, "Cufflink" + sfx, 0.0055f, P(side * 0.046f, -segLen + 0.042f, -0.01f), gold);

            // Sculpted hand: palm + rounded knuckles + natural slightly curved fingers
            var palm = MeshBox(hand, "Palm" + sfx, new Vector3(0.028f, 0.082f, 0.068f), P(0, -0.042f, 0.004f), skin);
            float[] fLengths = { 0.046f, 0.052f, 0.049f, 0.040f };
            for (int f = 0; f < 4; f++)
            {
                float zOff = -0.022f + f * 0.015f;
                var fGo = MeshLimb(hand, "Finger" + sfx + f, 0.0068f, 0.0052f, fLengths[f],
                    P(0, -0.080f, zOff), skin);
                fGo.localEulerAngles = new Vector3(0, 0, -side * 10f);
            }
            var thumb = MeshLimb(hand, "Thumb" + sfx, 0.0078f, 0.0060f, 0.042f,
                P(side * 0.008f, -0.038f, 0.034f), skin);
            thumb.localEulerAngles = new Vector3(-26f, 0, -side * 18f);
        }

        private static void LegMesh(Transform thigh, Transform shin, Transform foot,
            Material trousers, Material shoes, float k, float B)
        {
            MeshLimb(thigh, "ThighMesh", 0.088f * B, 0.070f * B, 0.46f * k, P(0, 0, 0), trousers);
            MeshLimb(shin, "ShinMesh", 0.066f * B, 0.052f * B, 0.42f * k, P(0, 0, 0), trousers);
            // Trouser cuff break over shoe
            MeshCyl(shin, "TrouserCuff", 0.056f * B, 0.058f * B, 0.045f, P(0, -0.415f * k, 0.005f), trousers);

            // Sculpted Oxford dress shoe (quartered vamp + rounded toe cap + sole welt + heel)
            MeshBox(foot, "ShoeQuarter", new Vector3(0.102f * B, 0.068f, 0.16f), P(0, 0.036f, 0.015f), shoes);
            var toe = MeshSphere(foot, "ShoeToe", 0.054f * B, P(0, 0.030f, 0.105f), shoes);
            toe.localScale = new Vector3(0.95f, 0.62f, 1.45f);
            MeshBox(foot, "ShoeWelt", new Vector3(0.108f * B, 0.014f, 0.245f), P(0, 0.009f, 0.052f), shoes);
            MeshBox(foot, "ShoeHeel", new Vector3(0.092f * B, 0.026f, 0.085f), P(0, 0.013f, -0.042f), shoes);
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
            var mesh = ProceduralMesh.Sphere($"Sphere_{r:F3}", r, 18, 12);
            return AddPart(bone, name, mesh, localPos, m);
        }

        private static Transform MeshDome(Transform bone, string name, float r, Vector3 localPos, Material m)
        {
            var mesh = ProceduralMesh.Dome($"Dome_{r:F3}", r, 22, 9);
            return AddPart(bone, name, mesh, localPos, m);
        }

        private static Transform MeshCyl(Transform bone, string name, float rT, float rB, float h, Vector3 localPos, Material m)
        {
            var mesh = ProceduralMesh.Cylinder($"Cyl_{rT:F3}_{rB:F3}_{h:F3}", rT, rB, h, 16);
            var t = AddPart(bone, name, mesh, Vector3.zero, m);
            t.localPosition = localPos;
            return t;
        }

        private static Transform MeshLimb(Transform bone, string name, float rT, float rB, float len, Vector3 localPos, Material m)
        {
            var mesh = ProceduralMesh.RoundedLimb($"Limb_{rT:F3}_{rB:F3}_{len:F3}", rT, rB, len, 16);
            var t = AddPart(bone, name, mesh, localPos, m);
            return t;
        }

        private static Transform MeshTorus(Transform bone, string name, float major, float minor, Vector3 localPos, Material m)
        {
            var mesh = ProceduralMesh.Torus($"Torus_{major:F3}_{minor:F4}", major, minor, 22, 8);
            var t = AddPart(bone, name, mesh, localPos, m);
            t.localEulerAngles = new Vector3(90, 0, 0);
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
