using UnityEngine;
using UnityEditor;
using TMPro;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Modular museum prop builders. Everything is made from shared generated
    /// meshes + shared materials, so a gallery stays a handful of draw calls even
    /// on mid-range Android.
    /// </summary>
    public static class PropLibrary
    {
        public static GameObject Mk(string name, Transform parent, Mesh mesh, Material mat,
            Vector3 pos, Vector3 euler = default, Vector3? scale = null, bool collider = false)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.localPosition = pos;
            go.transform.localEulerAngles = euler;
            go.transform.localScale = scale ?? Vector3.one;
            if (mesh != null)
            {
                var mf = go.AddComponent<MeshFilter>(); mf.sharedMesh = mesh;
                var mr = go.AddComponent<MeshRenderer>(); mr.sharedMaterial = mat;
            }
            if (collider) go.AddComponent<BoxCollider>();
            return go;
        }

        // ---------------------------------------------------------------- shell
        /// <summary>Room shell: floor/ceiling/walls with tiled materials + colliders.</summary>
        public static GameObject RoomShell(string name, float w, float h, float d,
            Material floor, Material wall, Material ceil)
        {
            var root = new GameObject(name);
            Mk("Floor", root.transform, ProceduralMesh.Box($"Floor_{name}", w, 0.2f, d), floor,
                new Vector3(0, -0.1f, 0), default, null, collider: true);
            Mk("Ceiling", root.transform, ProceduralMesh.Box($"Ceil_{name}", w, 0.3f, d), ceil,
                new Vector3(0, h + 0.15f, 0));
            Mk("WallN", root.transform, ProceduralMesh.Box($"WallN_{name}", w, h, 0.4f), wall,
                new Vector3(0, h / 2, d / 2 + 0.2f), default, null, true);
            Mk("WallS", root.transform, ProceduralMesh.Box($"WallS_{name}", w, h, 0.4f), wall,
                new Vector3(0, h / 2, -d / 2 - 0.2f), default, null, true);
            Mk("WallE", root.transform, ProceduralMesh.Box($"WallE_{name}", 0.4f, h, d), wall,
                new Vector3(w / 2 + 0.2f, h / 2, 0), default, null, true);
            Mk("WallW", root.transform, ProceduralMesh.Box($"WallW_{name}", 0.4f, h, d), wall,
                new Vector3(-w / 2 - 0.2f, h / 2, 0), default, null, true);
            // wainscot
            Mk("WainscotN", root.transform, ProceduralMesh.Box($"Wn_{name}", w - 0.1f, 1.1f, 0.06f),
                MaterialLibrary.WoodDark, new Vector3(0, 0.55f, d / 2 - 0.03f));
            Mk("WainscotS", root.transform, ProceduralMesh.Box($"Ws_{name}", w - 0.1f, 1.1f, 0.06f),
                MaterialLibrary.WoodDark, new Vector3(0, 0.55f, -d / 2 + 0.03f));
            return root;
        }

        // ---------------------------------------------------------------- architecture
        public static GameObject Column(Transform parent, Vector3 pos, float height, float r = 0.35f)
        {
            var c = new GameObject("Column");
            c.transform.SetParent(parent, false);
            c.transform.localPosition = pos;
            Mk("Base", c.transform, ProceduralMesh.Box($"ColBase_{r}", r * 2.7f, 0.25f, r * 2.7f),
                MaterialLibrary.Marble, new Vector3(0, 0.125f, 0));
            Mk("Shaft", c.transform, ProceduralMesh.Cylinder($"ColShaft_{r}", r, r * 1.08f, height - 0.5f, 18),
                MaterialLibrary.Sandstone, new Vector3(0, 0.25f, 0));
            Mk("Ring", c.transform, ProceduralMesh.Cylinder($"ColRing_{r}", r * 1.16f, r * 1.16f, 0.10f, 18),
                MaterialLibrary.Gold, new Vector3(0, height - 0.6f, 0));
            Mk("Capital", c.transform, ProceduralMesh.Box($"ColCap_{r}", r * 2.5f, 0.3f, r * 2.5f),
                MaterialLibrary.Marble, new Vector3(0, height - 0.15f, 0));
            var box = c.AddComponent<BoxCollider>();
            box.size = new Vector3(r * 2.2f, height, r * 2.2f);
            box.center = new Vector3(0, height / 2, 0);
            return c;
        }

        /// <summary>Gallery door assembly with sliding double leaves and an identity strip.</summary>
        public static (GameObject root, Transform leafL, Transform leafR, Renderer strip, TMP_Text label)
            DoorAssembly(Transform parent, Vector3 pos, string title, Color accent, float width = 3.4f, float height = 4.6f)
        {
            var root = new GameObject("Door_" + title);
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;

            float jamb = 0.5f;
            // jambs + lintel + threshold
            Mk("JambL", root.transform, ProceduralMesh.Box($"Jamb_{width}", jamb, height, 1.0f),
                MaterialLibrary.WoodDark, new Vector3(-(width / 2 + jamb / 2), height / 2, 0));
            Mk("JambR", root.transform, ProceduralMesh.Box($"Jamb_{width}", jamb, height, 1.0f),
                MaterialLibrary.WoodDark, new Vector3(width / 2 + jamb / 2, height / 2, 0));
            Mk("Lintel", root.transform, ProceduralMesh.Box($"Lintel_{width}", width + 2 * jamb, 0.7f, 1.0f),
                MaterialLibrary.WoodDark, new Vector3(0, height + 0.35f, 0));
            Mk("Arch", root.transform, ProceduralMesh.ArchBand($"Arch_{width}", width / 2 + jamb * 0.6f, 0.14f),
                MaterialLibrary.Gold, new Vector3(0, height + 0.7f, -0.5f));
            // gold trim lines
            Mk("TrimL", root.transform, ProceduralMesh.Box($"Trim_{width}", 0.08f, height, 0.06f),
                MaterialLibrary.Gold, new Vector3(-(width / 2), height / 2, -0.46f));
            Mk("TrimR", root.transform, ProceduralMesh.Box($"Trim_{width}", 0.08f, height, 0.06f),
                MaterialLibrary.Gold, new Vector3(width / 2, height / 2, -0.46f));

            // leaves (slide apart on open)
            float leafW = width / 2;
            var leafL = Mk("Leaf_L", root.transform, ProceduralMesh.Box($"Leaf_{width}", leafW, height, 0.14f),
                MaterialLibrary.DeepBlue, new Vector3(-leafW / 2, height / 2, 0), default, null, true).transform;
            var leafR = Mk("Leaf_R", root.transform, ProceduralMesh.Box($"Leaf_{width}", leafW, height, 0.14f),
                MaterialLibrary.DeepBlue, new Vector3(leafW / 2, height / 2, 0), default, null, true).transform;
            // accent stripes on leaves
            Mk("AccentL", leafL, ProceduralMesh.Box($"LeafAccent_{width}", leafW * 0.82f, height * 0.82f, 0.04f),
                MaterialLibrary.Get("DoorAccent_" + title, accent, null, 0.4f), new Vector3(0, 0, -0.09f));
            Mk("AccentR", leafR, ProceduralMesh.Box($"LeafAccent_{width}", leafW * 0.82f, height * 0.82f, 0.04f),
                MaterialLibrary.Get("DoorAccent_" + title, accent, null, 0.4f), new Vector3(0, 0, 0.09f));
            // door handles
            Mk("HandleL", leafL, ProceduralMesh.Cylinder("Handle", 0.025f, 0.025f, 0.5f, 10),
                MaterialLibrary.Gold, new Vector3(leafW / 2 - 0.12f, 0, -0.10f));
            Mk("HandleR", leafR, ProceduralMesh.Cylinder("Handle", 0.025f, 0.025f, 0.5f, 10),
                MaterialLibrary.Gold, new Vector3(-(leafW / 2 - 0.12f), 0, 0.10f));

            // glow strip (state indicator)
            var stripGo = Mk("GlowStrip", root.transform, ProceduralMesh.Box($"Strip_{width}", width + 1.0f, 0.16f, 0.1f),
                MaterialLibrary.GoldEmissive, new Vector3(0, height + 1.35f, -0.4f));

            // 3D label (TMP text reads correctly for a viewer on its −Z side,
            // so an unrotated transform faces the hall, which is south / −Z here)
            var labelGo = new GameObject("Label");
            labelGo.transform.SetParent(root.transform, false);
            labelGo.transform.localPosition = new Vector3(0, height + 2.1f, -0.55f);
            var tmp = labelGo.AddComponent<TextMeshPro>();
            tmp.text = title;
            tmp.fontSize = 1.35f;
            tmp.alignment = TextAlignmentOptions.Center;
            tmp.fontStyle = FontStyles.Bold;
            tmp.color = new Color(0.92f, 0.88f, 0.78f);
            tmp.rectTransform.sizeDelta = new Vector2(width + 4f, 1.6f);
            var font = DHJBootstrap.EnsureTmpFont();
            if (font != null) tmp.font = font;

            return (root, leafL, leafR, stripGo.GetComponent<Renderer>(), tmp);
        }

        // ---------------------------------------------------------------- furniture & exhibits
        public static GameObject Bench(Transform parent, Vector3 pos, float yaw = 0)
        {
            var root = new GameObject("Bench");
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            root.transform.localEulerAngles = new Vector3(0, yaw, 0);
            Mk("Seat", root.transform, ProceduralMesh.Box("BenchSeat", 2.2f, 0.12f, 0.55f),
                MaterialLibrary.WoodWarm, new Vector3(0, 0.46f, 0), default, null, true);
            Mk("Back", root.transform, ProceduralMesh.Box("BenchBack", 2.2f, 0.5f, 0.09f),
                MaterialLibrary.WoodWarm, new Vector3(0, 0.85f, -0.26f), new Vector3(-8, 0, 0));
            foreach (var x in new[] { -0.95f, 0.95f })
                Mk("Leg" + x, root.transform, ProceduralMesh.Box("BenchLeg", 0.08f, 0.46f, 0.5f),
                    MaterialLibrary.BrushedSteel, new Vector3(x, 0.23f, 0));
            return root;
        }

        public static GameObject Pedestal(Transform parent, Vector3 pos, string artifactKind = "prism")
        {
            var root = new GameObject("Pedestal");
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            Mk("Plinth", root.transform, ProceduralMesh.Box("PedPlinth", 0.8f, 1.05f, 0.8f),
                MaterialLibrary.Marble, new Vector3(0, 0.525f, 0), default, null, true);
            Mk("Trim", root.transform, ProceduralMesh.Box("PedTrim", 0.86f, 0.05f, 0.86f),
                MaterialLibrary.Gold, new Vector3(0, 1.05f, 0));
            switch (artifactKind)
            {
                case "book":
                    Mk("Book", root.transform, ProceduralMesh.Box("PedBook", 0.42f, 0.10f, 0.32f),
                        MaterialLibrary.Get("Artifact_Red", new Color(0.45f, 0.14f, 0.16f), null, 0.4f),
                        new Vector3(0, 1.16f, 0), new Vector3(0, 20, 0));
                    break;
                case "document":
                    var doc = Mk("Doc", root.transform, ProceduralMesh.Box("PedDoc", 0.4f, 0.02f, 0.52f),
                        MaterialLibrary.PaperMat, new Vector3(0, 1.42f, 0), new Vector3(58, -12, 0));
                    Mk("DocStand", root.transform, ProceduralMesh.Box("PedStand", 0.44f, 0.5f, 0.06f),
                        MaterialLibrary.WoodDark, new Vector3(0, 1.28f, 0.12f), new Vector3(58, -12, 0));
                    break;
                default: // prism sculpture
                    Mk("Prism", root.transform, ProceduralMesh.Cylinder("PedPrism", 0.02f, 0.26f, 0.7f, 6),
                        MaterialLibrary.MarbleBlue, new Vector3(0, 1.07f, 0), new Vector3(0, 30, 0));
                    break;
            }
            return root;
        }

        public static GameObject DisplayCase(Transform parent, Vector3 pos, float yaw = 0)
        {
            var root = new GameObject("DisplayCase");
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            root.transform.localEulerAngles = new Vector3(0, yaw, 0);
            Mk("Base", root.transform, ProceduralMesh.Box("CaseBase", 1.3f, 0.85f, 1.3f),
                MaterialLibrary.WoodDark, new Vector3(0, 0.425f, 0), default, null, true);
            var glass = MaterialLibrary.Get("CaseGlass", new Color(0.8f, 0.9f, 1f, 0.14f), null, 0.92f, 0f);
            MaterialLibrary.MakeTransparent(glass);
            Mk("Glass", root.transform, ProceduralMesh.Box("CaseGlassBox", 1.15f, 0.9f, 1.15f), glass,
                new Vector3(0, 1.32f, 0));
            Mk("Cap", root.transform, ProceduralMesh.Box("CaseCap", 1.22f, 0.07f, 1.22f),
                MaterialLibrary.Gold, new Vector3(0, 1.82f, 0));
            // artifact inside
            Mk("Artifact", root.transform, ProceduralMesh.Cylinder("CaseArtifact", 0.06f, 0.22f, 0.55f, 8),
                MaterialLibrary.Gold, new Vector3(0, 0.85f, 0));
            return root;
        }

        public static GameObject WallPanelFrame(Transform parent, Vector3 pos, float yaw,
            float w = 3.2f, float h = 2.4f, string name = "WallPanel")
        {
            var root = new GameObject(name);
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            root.transform.localEulerAngles = new Vector3(0, yaw, 0);
            Mk("Board", root.transform, ProceduralMesh.Box($"WP_Board_{w}", w, h, 0.08f),
                MaterialLibrary.CreamPaint, new Vector3(0, 0, 0), default, null, true);
            // frame
            Mk("Top", root.transform, ProceduralMesh.Box($"WP_Frame_{w}", w + 0.16f, 0.09f, 0.12f),
                MaterialLibrary.WoodDark, new Vector3(0, h / 2 + 0.04f, 0.01f));
            Mk("Bottom", root.transform, ProceduralMesh.Box($"WP_Frame_{w}", w + 0.16f, 0.09f, 0.12f),
                MaterialLibrary.WoodDark, new Vector3(0, -h / 2 - 0.04f, 0.01f));
            Mk("Left", root.transform, ProceduralMesh.Box($"WP_Side_{h}", 0.09f, h + 0.16f, 0.12f),
                MaterialLibrary.WoodDark, new Vector3(-w / 2 - 0.04f, 0, 0.01f));
            Mk("Right", root.transform, ProceduralMesh.Box($"WP_Side_{h}", 0.09f, h + 0.16f, 0.12f),
                MaterialLibrary.WoodDark, new Vector3(w / 2 + 0.04f, 0, 0.01f));
            Mk("HeaderBar", root.transform, ProceduralMesh.Box($"WP_Head_{w}", w, 0.34f, 0.05f),
                MaterialLibrary.DeepBlue, new Vector3(0, h / 2 - 0.25f, -0.045f));
            return root;
        }

        public static GameObject Bookshelf(Transform parent, Vector3 pos, float yaw = 0)
        {
            var root = new GameObject("Bookshelf");
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            root.transform.localEulerAngles = new Vector3(0, yaw, 0);
            Mk("Frame", root.transform, ProceduralMesh.Box("Shelf_Frame", 3.0f, 3.4f, 0.42f),
                MaterialLibrary.WoodDark, new Vector3(0, 1.7f, 0.06f), default, null, true);
            var spineTex = AssetDatabase.LoadAssetAtPath<Texture2D>("Assets/Art/Images/book_spines.png");
            var spineMat = MaterialLibrary.Get("BookSpines", Color.white, null, 0.4f);
            if (spineTex != null && spineMat != null) spineMat.mainTexture = spineTex;
            for (int i = 0; i < 5; i++)
            {
                float y = 0.35f + i * 0.62f;
                Mk("Shelf" + i, root.transform, ProceduralMesh.Box("Shelf_S", 2.8f, 0.06f, 0.34f),
                    MaterialLibrary.WoodWarm, new Vector3(0, y, -0.02f));
                Mk("Books" + i, root.transform, ProceduralMesh.Box("BooksRow", 2.6f, 0.5f, 0.26f),
                    spineMat, new Vector3(0, y + 0.28f, -0.05f));
            }
            return root;
        }

        public static GameObject BookDesk(Transform parent, Vector3 pos, float yaw = 0)
        {
            var root = new GameObject("BookDesk");
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            root.transform.localEulerAngles = new Vector3(0, yaw, 0);
            Mk("DeskTop", root.transform, ProceduralMesh.Box("DeskTop", 1.5f, 0.07f, 0.95f),
                MaterialLibrary.WoodWarm, new Vector3(0, 0.82f, 0), default, null, true);
            foreach (var (x, z) in new[] { (-0.65f, -0.35f), (0.65f, -0.35f), (-0.65f, 0.35f), (0.65f, 0.35f) })
                Mk("Leg", root.transform, ProceduralMesh.Box("DeskLeg", 0.08f, 0.82f, 0.08f),
                    MaterialLibrary.WoodDark, new Vector3(x, 0.41f, z));
            // open book
            var pageL = Mk("PageL", root.transform, ProceduralMesh.Box("BookPage", 0.30f, 0.015f, 0.42f),
                MaterialLibrary.PaperMat, new Vector3(-0.155f, 0.90f, 0.02f), new Vector3(0, 0, -6));
            var pageR = Mk("PageR", root.transform, ProceduralMesh.Box("BookPage", 0.30f, 0.015f, 0.42f),
                MaterialLibrary.PaperMat, new Vector3(0.155f, 0.90f, 0.02f), new Vector3(0, 0, 6));
            Mk("Cover", root.transform, ProceduralMesh.Box("BookCover", 0.66f, 0.02f, 0.46f),
                MaterialLibrary.Get("Artifact_Red", new Color(0.45f, 0.14f, 0.16f), null, 0.4f),
                new Vector3(0, 0.875f, 0.02f));
            return root;
        }

        public static GameObject Kiosk(Transform parent, Vector3 pos, float yaw = 0, string screenName = "terminal")
        {
            var root = new GameObject("Kiosk_" + screenName);
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            root.transform.localEulerAngles = new Vector3(0, yaw, 0);
            Mk("Stand", root.transform, ProceduralMesh.Box("KioskStand", 0.6f, 1.05f, 0.24f),
                MaterialLibrary.BrushedSteel, new Vector3(0, 0.525f, 0), default, null, true);
            Mk("Screen", root.transform, ProceduralMesh.Box("KioskScreen", 1.0f, 0.62f, 0.06f),
                MaterialLibrary.ScreenGlow, new Vector3(0, 1.35f, 0), new Vector3(-16, 0, 0));
            Mk("ScreenFrame", root.transform, ProceduralMesh.Box("KioskFrame", 1.1f, 0.72f, 0.04f),
                MaterialLibrary.DeepBlue, new Vector3(0, 1.35f, 0.035f), new Vector3(-16, 0, 0));
            return root;
        }

        public static GameObject ConstitutionTable(Transform parent, Vector3 pos)
        {
            var root = new GameObject("ConstitutionTable");
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            Mk("Drum", root.transform, ProceduralMesh.Cylinder("CT_Drum", 1.5f, 1.65f, 0.9f, 32),
                MaterialLibrary.Marble, new Vector3(0, 0, 0), default, null, true);
            Mk("Ring", root.transform, ProceduralMesh.Torus("CT_Ring", 1.62f, 0.045f, 32, 8),
                MaterialLibrary.Gold, new Vector3(0, 0.92f, 0));
            // the book, open under glass
            Mk("BookStand", root.transform, ProceduralMesh.Box("CT_Stand", 1.0f, 0.12f, 0.7f),
                MaterialLibrary.WoodDark, new Vector3(0, 0.98f, 0));
            Mk("PageL", root.transform, ProceduralMesh.Box("CT_Page", 0.46f, 0.02f, 0.62f),
                MaterialLibrary.PaperMat, new Vector3(-0.24f, 1.06f, 0), new Vector3(0, 0, -5));
            Mk("PageR", root.transform, ProceduralMesh.Box("CT_Page", 0.46f, 0.02f, 0.62f),
                MaterialLibrary.PaperMat, new Vector3(0.24f, 1.06f, 0), new Vector3(0, 0, 5));
            var glass = MaterialLibrary.Get("CT_Glass", new Color(0.85f, 0.92f, 1f, 0.13f), null, 0.95f);
            MaterialLibrary.MakeTransparent(glass);
            var tilt = Mk("Glass", root.transform, ProceduralMesh.Box("CT_GlassBox", 1.15f, 0.55f, 0.85f),
                glass, new Vector3(0, 1.30f, 0));
            var capLight = new GameObject("CT_Light");
            capLight.transform.SetParent(root.transform, false);
            return root;
        }

        public static GameObject ReceptionDesk(Transform parent, Vector3 pos, float yaw = 0)
        {
            var root = new GameObject("Reception");
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            root.transform.localEulerAngles = new Vector3(0, yaw, 0);
            Mk("Counter", root.transform, ProceduralMesh.Box("RecCounter", 3.6f, 1.05f, 0.9f),
                MaterialLibrary.WoodDark, new Vector3(0, 0.525f, 0), default, null, true);
            Mk("Top", root.transform, ProceduralMesh.Box("RecTop", 3.8f, 0.07f, 1.05f),
                MaterialLibrary.Marble, new Vector3(0, 1.085f, 0));
            Mk("GoldLine", root.transform, ProceduralMesh.Box("RecGold", 3.6f, 0.06f, 0.04f),
                MaterialLibrary.Gold, new Vector3(0, 0.85f, -0.47f));
            return root;
        }

        /// <summary>A framed artistic-visualization portrait with spotlighting.</summary>
        public static GameObject PortraitDisplay(Transform parent, Vector3 pos, float yaw, Sprite portrait)
        {
            var root = new GameObject("PortraitDisplay");
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            root.transform.localEulerAngles = new Vector3(0, yaw, 0);
            Mk("Frame", root.transform, ProceduralMesh.Box("Portrait_Frame", 1.5f, 1.9f, 0.10f),
                MaterialLibrary.Gold, new Vector3(0, 1.9f, 0));
            var back = Mk("Canvas", root.transform, ProceduralMesh.Box("Portrait_Canvas", 1.34f, 1.74f, 0.06f),
                MaterialLibrary.CreamPaint, new Vector3(0, 1.9f, -0.028f));
            if (portrait != null)
            {
                var imgGo = new GameObject("Image");
                imgGo.transform.SetParent(root.transform, false);
                imgGo.transform.localPosition = new Vector3(0, 1.9f, -0.062f);
                var sr = imgGo.AddComponent<SpriteRenderer>();
                sr.sprite = portrait;
                sr.drawMode = SpriteDrawMode.Sliced;
                sr.size = new Vector2(1.30f, 1.70f);
            }
            return root;
        }

        public static GameObject SpotlightFixture(Transform parent, Vector3 pos, Vector3 euler,
            string lightName, float intensity, float range, Color color)
        {
            var root = new GameObject("Spot_" + lightName);
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            // small housing cone at ceiling
            Mk("Housing", root.transform, ProceduralMesh.Cylinder("SpotHousing", 0.06f, 0.10f, 0.22f, 12),
                MaterialLibrary.BrushedSteel, Vector3.zero, new Vector3(180, 0, 0));
            var lgo = new GameObject("Light");
            lgo.transform.SetParent(root.transform, false);
            lgo.transform.localEulerAngles = euler;
            var l = lgo.AddComponent<Light>();
            l.type = LightType.Spot;
            l.color = color;
            l.intensity = intensity;
            l.range = range;
            l.spotAngle = 38f;
            l.shadows = LightShadows.None;
            return root;
        }

        public static GameObject Planter(Transform parent, Vector3 pos)
        {
            var root = new GameObject("Planter");
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            Mk("Pot", root.transform, ProceduralMesh.Cylinder("PlanterPot", 0.32f, 0.24f, 0.5f, 14),
                MaterialLibrary.Get("Pot", new Color(0.45f, 0.30f, 0.22f), null, 0.5f), Vector3.zero, default, null, true);
            var leafMat = MaterialLibrary.Get("Leaf", new Color(0.22f, 0.40f, 0.25f), null, 0.2f);
            for (int i = 0; i < 3; i++)
                Mk("Leaf" + i, root.transform, ProceduralMesh.Sphere("LeafBall", 0.3f, 12, 8), leafMat,
                    new Vector3(Mathf.Cos(i * 2.1f) * 0.18f, 0.75f + (i % 2) * 0.15f, Mathf.Sin(i * 2.1f) * 0.18f),
                    default, new Vector3(1, 0.8f, 1));
            return root;
        }

        public static GameObject CollectibleNode(Transform parent, Vector3 pos)
        {
            var root = new GameObject("Collectible");
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            Mk("Card", root.transform, ProceduralMesh.Box("CollectCard", 0.34f, 0.44f, 0.03f),
                MaterialLibrary.GoldEmissive, Vector3.zero);
            Mk("Icon", root.transform, ProceduralMesh.Torus("CollectIcon", 0.11f, 0.025f, 16, 8),
                MaterialLibrary.DeepBlue, new Vector3(0, 0, -0.02f), new Vector3(90, 0, 0));
            var col = root.AddComponent<BoxCollider>();
            col.isTrigger = true;
            col.size = new Vector3(0.8f, 0.8f, 0.8f);
            // soft glow light
            var lgo = new GameObject("Glow");
            lgo.transform.SetParent(root.transform, false);
            var l = lgo.AddComponent<Light>();
            l.type = LightType.Point; l.range = 2.2f; l.intensity = 0.8f;
            l.color = new Color(0.9f, 0.7f, 0.35f); l.shadows = LightShadows.None;
            return root;
        }

        /// <summary>3D TMP label plate — used for exhibit captions.</summary>
        public static TextMeshPro CaptionPlate(Transform parent, Vector3 pos, string text,
            float width = 1.8f, float size = 0.16f, float yaw = 0)
        {
            var root = new GameObject("Caption");
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;
            root.transform.localEulerAngles = new Vector3(20, yaw, 0);
            Mk("Plate", root.transform, ProceduralMesh.Box("CaptionPlate", width + 0.1f, 0.42f, 0.03f),
                MaterialLibrary.DeepBlue, new Vector3(0, 0, 0.02f));
            var go = new GameObject("Text");
            go.transform.SetParent(root.transform, false);
            go.transform.localPosition = new Vector3(0, 0, -0.005f);
            var tmp = go.AddComponent<TextMeshPro>();
            tmp.text = text;
            tmp.fontSize = size;
            tmp.color = new Color(0.92f, 0.88f, 0.78f);
            tmp.alignment = TextAlignmentOptions.Center;
            var font = DHJBootstrap.EnsureTmpFont();
            if (font != null) tmp.font = font;
            tmp.rectTransform.sizeDelta = new Vector2(width, 0.4f);
            tmp.enableWordWrapping = true;
            return tmp;
        }
    }
}
