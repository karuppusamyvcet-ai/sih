using UnityEngine;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Stylized "digital reconstruction" miniatures of the six memorial sites
    /// (~4.3 m diameter presentation dioramas for the Memorials gallery).
    /// Respectful architectural scale models — each clearly labelled in-scene.
    /// </summary>
    public static class DioramaFactory
    {
        private static Material StoneWhite => MaterialLibrary.Get("Dio_StoneWhite", new Color(0.90f, 0.87f, 0.80f), "marble_cream", 0.45f);
        private static Material StoneRed   => MaterialLibrary.Get("Dio_StoneRed", new Color(0.66f, 0.39f, 0.30f), "sandstone_wall", 0.36f);
        private static Material RoofDark   => MaterialLibrary.Get("Dio_Roof", new Color(0.26f, 0.23f, 0.22f), null, 0.35f);
        private static Material CreamHouse => MaterialLibrary.Get("Dio_Cream", new Color(0.90f, 0.85f, 0.75f), "sandstone_wall", 0.38f);
        private static Material BrickRed   => MaterialLibrary.Get("Dio_Brick", new Color(0.54f, 0.28f, 0.23f), "sandstone_wall", 0.35f);
        private static Material WaterBlue  => MaterialLibrary.Get("Dio_Water", new Color(0.22f, 0.44f, 0.62f), null, 0.88f);
        private static Material GreenLawn  => MaterialLibrary.Get("Dio_Green", new Color(0.28f, 0.44f, 0.28f), null, 0.22f);
        private static Material Gold       => MaterialLibrary.Gold;

        public static GameObject Build(string dioramaId, Transform parent, Vector3 pos)
        {
            var root = new GameObject("Diorama_" + dioramaId);
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;

            // Stepped circular marble plinth + brass rim molding
            PropLibrary.Mk("Step", root.transform, ProceduralMesh.Cylinder("DioStep", 2.28f, 2.38f, 0.12f, 36),
                MaterialLibrary.MarbleBlue, Vector3.zero);
            PropLibrary.Mk("Plinth", root.transform, ProceduralMesh.Cylinder("DioPlinth", 2.1f, 2.22f, 0.5f, 36),
                MaterialLibrary.Marble, new Vector3(0, 0.06f, 0), default, null, true);
            PropLibrary.Mk("GoldRing", root.transform, ProceduralMesh.Torus("DioRing", 2.16f, 0.038f, 36, 10),
                Gold, new Vector3(0, 0.56f, 0));

            var m = new GameObject("Model");
            m.transform.SetParent(root.transform, false);
            m.transform.localPosition = new Vector3(0, 0.56f, 0);

            switch (dioramaId)
            {
                case "MhowHouse":
                case "ex_mhow_house":
                    MhowHouse(m.transform); break;
                case "ChaityaBhoomi":
                case "ex_chaitya_bhoomi":
                    ChaityaBhoomi(m.transform); break;
                case "Deekshabhoomi":
                case "ex_deekshabhoomi":
                    Deekshabhoomi(m.transform); break;
                case "AlipurHouse":
                case "ex_alipur_house":
                    AlipurHouse(m.transform); break;
                case "LucknowPark":
                case "ex_lucknow_park":
                    LucknowPark(m.transform); break;
                case "LondonHouse":
                case "ex_london_house":
                    LondonHouse(m.transform); break;
                default:
                    MhowHouse(m.transform); break;
            }
            return root;
        }

        // 1. Birthplace Memorial, Mhow — stepped memorial hall + commemorative stupa dome + Ashoka pillar
        private static void MhowHouse(Transform p)
        {
            PropLibrary.Mk("Lawn", p, ProceduralMesh.Box("DioG1", 3.2f, 0.06f, 2.6f), GreenLawn, new Vector3(0, 0.03f, 0));
            PropLibrary.Mk("Walkway", p, ProceduralMesh.Box("DioMPath", 0.42f, 0.065f, 1.2f), StoneWhite, new Vector3(0, 0.033f, -0.65f));
            PropLibrary.Mk("Plinth", p, ProceduralMesh.Box("DioMPl", 1.72f, 0.14f, 1.32f), StoneRed, new Vector3(0, 0.10f, 0.2f));
            PropLibrary.Mk("House", p, ProceduralMesh.Box("DioMH", 1.5f, 0.86f, 1.1f), CreamHouse, new Vector3(0, 0.60f, 0.2f));
            PropLibrary.Mk("RoofSlab", p, ProceduralMesh.Box("DioMHR", 1.66f, 0.10f, 1.24f), StoneWhite, new Vector3(0, 1.06f, 0.2f));
            // Commemorative stupa dome crowning the birthplace memorial
            Stupa(p, new Vector3(0, 1.11f, 0.2f), 0.65f, StoneWhite);
            for (int i = -2; i <= 2; i++)
                PropLibrary.Mk("Col" + i, p, ProceduralMesh.Cylinder("DioMHC", 0.038f, 0.044f, 0.82f, 12),
                    StoneWhite, new Vector3(i * 0.30f, 0.17f, -0.36f));
            PropLibrary.Mk("Door", p, ProceduralMesh.Box("DioMHDr", 0.3f, 0.6f, 0.05f), RoofDark, new Vector3(0, 0.46f, -0.36f));
            PropLibrary.Mk("GateArch", p, ProceduralMesh.ArchBand("DioMHArc", 0.55f, 0.08f, 14), CreamHouse, new Vector3(0, 0.85f, -0.98f));
            foreach (var x in new[] { -0.65f, 0.65f })
                PropLibrary.Mk("GatePost" + x, p, ProceduralMesh.Box("DioMHP", 0.12f, 0.85f, 0.12f), CreamHouse, new Vector3(x, 0.42f, -0.98f));
        }

        // 2. Chaitya Bhoomi, Dadar — Arabian Sea waterfront promenade + Sanchi torana + white stupa
        private static void ChaityaBhoomi(Transform p)
        {
            PropLibrary.Mk("Sea", p, ProceduralMesh.Box("DioSea", 3.4f, 0.04f, 1.4f), WaterBlue, new Vector3(0, 0.02f, 1.0f));
            PropLibrary.Mk("Seawall", p, ProceduralMesh.Box("DioSeawall", 3.4f, 0.10f, 0.10f), StoneRed, new Vector3(0, 0.06f, 0.32f));
            PropLibrary.Mk("Sand", p, ProceduralMesh.Box("DioSand", 3.4f, 0.05f, 1.3f), CreamHouse, new Vector3(0, 0.025f, -0.35f));
            PropLibrary.Mk("SanctumSquare", p, ProceduralMesh.Box("DioCBSq", 1.35f, 0.36f, 1.35f), StoneWhite, new Vector3(-0.25f, 0.23f, -0.15f));
            Stupa(p, new Vector3(-0.25f, 0.41f, -0.15f), 0.92f, StoneWhite);
            // Sanchi-style Torana gateway with double architraves & Ashoka pillar
            PropLibrary.Mk("Arch", p, ProceduralMesh.ArchBand("DioCBArc", 0.72f, 0.08f, 16), StoneWhite, new Vector3(0.75f, 1.02f, -0.65f));
            PropLibrary.Mk("Crossbar", p, ProceduralMesh.Box("DioCBBar", 1.55f, 0.07f, 0.10f), StoneWhite, new Vector3(0.70f, 0.88f, -0.65f));
            foreach (var x in new[] { 0.0f, 1.40f })
                PropLibrary.Mk("Post" + x, p, ProceduralMesh.Box("DioCBPost", 0.12f, 1.0f, 0.12f), StoneWhite, new Vector3(x, 0.5f, -0.65f));
            PropLibrary.Mk("AshokaPillar", p, ProceduralMesh.Cylinder("DioCBAP", 0.045f, 0.055f, 0.95f, 12), StoneRed, new Vector3(-1.25f, 0.05f, -0.65f));
            PropLibrary.Mk("AshokaCap", p, ProceduralMesh.Sphere("DioCBAC", 0.075f, 12, 8), Gold, new Vector3(-1.25f, 1.03f, -0.65f));
        }

        // 3. Deekshabhoomi, Nagpur — two-tier circular drum, great hollow stupa, 4 torana gates & Bodhi tree
        private static void Deekshabhoomi(Transform p)
        {
            PropLibrary.Mk("Ground", p, ProceduralMesh.Cylinder("DioDKGr", 1.9f, 1.95f, 0.06f, 32), GreenLawn, Vector3.zero);
            PropLibrary.Mk("Drum1", p, ProceduralMesh.Cylinder("DioDK1", 1.15f, 1.25f, 0.35f, 32), StoneWhite, new Vector3(0, 0.06f, 0.15f));
            PropLibrary.Mk("Drum2", p, ProceduralMesh.Cylinder("DioDK2", 0.95f, 1.05f, 0.3f, 32), StoneRed, new Vector3(0, 0.41f, 0.15f));
            PropLibrary.Mk("Dome", p, ProceduralMesh.Dome("DioDKDome", 0.95f, 32, 14), StoneWhite, new Vector3(0, 0.71f, 0.15f));
            PropLibrary.Mk("Harmika", p, ProceduralMesh.Box("DioDKH", 0.30f, 0.16f, 0.30f), StoneWhite, new Vector3(0, 1.72f, 0.15f));
            PropLibrary.Mk("Spire", p, ProceduralMesh.Cylinder("DioDKS", 0.025f, 0.06f, 0.42f, 12), Gold, new Vector3(0, 1.80f, 0.15f));
            // Front porch & cardinal portals
            PropLibrary.Mk("Porch", p, ProceduralMesh.Box("DioDKP", 0.52f, 0.42f, 0.32f), StoneWhite, new Vector3(0, 0.26f, -0.95f));
            PropLibrary.Mk("PorchRoof", p, ProceduralMesh.Gable("DioDKPr", 0.62f, 0.20f, 0.38f), StoneWhite, new Vector3(0, 0.47f, -0.95f));
            // Sacred Bodhi tree on the grounds
            PropLibrary.Mk("BodhiTrunk", p, ProceduralMesh.Cylinder("DioDKTr", 0.05f, 0.07f, 0.36f, 10),
                MaterialLibrary.WoodDark, new Vector3(-1.28f, 0.05f, -0.78f));
            PropLibrary.Mk("BodhiCanopy", p, ProceduralMesh.Sphere("DioDKCn", 0.28f, 14, 10),
                GreenLawn, new Vector3(-1.28f, 0.48f, -0.78f), default, new Vector3(1.15f, 0.82f, 1.15f));
        }

        // 4. Dr. Ambedkar National Memorial, 26 Alipur Road, Delhi — colonial bungalow & book-shaped museum wing
        private static void AlipurHouse(Transform p)
        {
            PropLibrary.Mk("Lawn", p, ProceduralMesh.Box("DioG2", 3.2f, 0.06f, 2.8f), GreenLawn, new Vector3(0, 0.03f, 0));
            PropLibrary.Mk("House", p, ProceduralMesh.Box("DioAH", 2.0f, 0.9f, 1.1f), CreamHouse, new Vector3(0, 0.51f, 0.35f));
            PropLibrary.Mk("Roof", p, ProceduralMesh.Gable("DioAHR", 2.2f, 0.45f, 1.25f), RoofDark, new Vector3(0, 0.96f, 0.35f));
            foreach (var x in new[] { -0.55f, -0.2f, 0.2f, 0.55f })
                PropLibrary.Mk("PorchCol" + x, p, ProceduralMesh.Cylinder("DioACol", 0.045f, 0.05f, 0.75f, 10), CreamHouse, new Vector3(x, 0.06f, -0.45f));
            PropLibrary.Mk("PorchRoof", p, ProceduralMesh.Box("DioAPR", 1.5f, 0.08f, 0.5f), CreamHouse, new Vector3(0, 0.83f, -0.45f));
            PropLibrary.Mk("Steps", p, ProceduralMesh.Box("DioASt", 1.5f, 0.10f, 0.4f), StoneWhite, new Vector3(0, 0.05f, -0.55f));
            PropLibrary.Mk("WinL", p, ProceduralMesh.Box("DioAW", 0.28f, 0.4f, 0.04f), RoofDark, new Vector3(-0.6f, 0.55f, -0.21f));
            PropLibrary.Mk("WinR", p, ProceduralMesh.Box("DioAW", 0.28f, 0.4f, 0.04f), RoofDark, new Vector3(0.6f, 0.55f, -0.21f));
        }

        // 5. Ambedkar Memorial Park, Lucknow — red Agra sandstone stupa, corner chhatris & ceremonial elephant avenue
        private static void LucknowPark(Transform p)
        {
            PropLibrary.Mk("Plaza", p, ProceduralMesh.Cylinder("DioLP", 1.85f, 1.92f, 0.08f, 32), StoneRed, Vector3.zero);
            PropLibrary.Mk("Drum", p, ProceduralMesh.Cylinder("DioLPD", 0.8f, 0.9f, 0.5f, 28), StoneRed, new Vector3(0, 0.08f, 0.12f));
            PropLibrary.Mk("Dome", p, ProceduralMesh.Dome("DioLPDome", 0.8f, 28, 12), StoneRed, new Vector3(0, 0.58f, 0.12f));
            PropLibrary.Mk("Finial", p, ProceduralMesh.Cylinder("DioLPF", 0.02f, 0.045f, 0.32f, 10), Gold, new Vector3(0, 1.40f, 0.12f));
            // Corner chhatris
            foreach (var (x, z) in new[] { (-1.1f, -1.0f), (1.1f, -1.0f), (-1.1f, 1.1f), (1.1f, 1.1f) })
            {
                PropLibrary.Mk("ChBase" + x + z, p, ProceduralMesh.Cylinder("DioLCB", 0.22f, 0.24f, 0.35f, 12), StoneRed, new Vector3(x, 0.08f, z));
                PropLibrary.Mk("ChDome" + x + z, p, ProceduralMesh.Dome("DioLCD", 0.22f, 12, 8), StoneRed, new Vector3(x, 0.43f, z));
            }
            // Ceremonial elephant pedestals flanking the approach avenue
            for (int side = -1; side <= 1; side += 2)
                for (int k = 0; k < 2; k++)
                {
                    float zPos = -0.78f - k * 0.42f;
                    PropLibrary.Mk($"ElePed_{side}_{k}", p, ProceduralMesh.Box("DioLEP", 0.18f, 0.12f, 0.26f),
                        StoneRed, new Vector3(side * 0.48f, 0.14f, zPos));
                    PropLibrary.Mk($"EleSculpt_{side}_{k}", p, ProceduralMesh.Box("DioLES", 0.13f, 0.15f, 0.20f),
                        Gold, new Vector3(side * 0.48f, 0.27f, zPos));
                }
        }

        // 6. Dr. Ambedkar Museum, 10 King Henry's Road, London — Georgian townhouse with English Heritage Blue Plaque
        private static void LondonHouse(Transform p)
        {
            PropLibrary.Mk("Pavement", p, ProceduralMesh.Box("DioPv", 3.0f, 0.05f, 2.4f),
                MaterialLibrary.Get("Dio_Pave", new Color(0.55f, 0.55f, 0.58f), null, 0.3f), new Vector3(0, 0.025f, 0));
            PropLibrary.Mk("StuccoBase", p, ProceduralMesh.Box("DioLHSt", 1.62f, 0.46f, 0.72f),
                StoneWhite, new Vector3(0, 0.26f, 0.5f));
            PropLibrary.Mk("Facade", p, ProceduralMesh.Box("DioLH", 1.6f, 1.35f, 0.7f),
                BrickRed, new Vector3(0, 1.12f, 0.5f));
            PropLibrary.Mk("Roof", p, ProceduralMesh.Gable("DioLHR", 1.7f, 0.4f, 0.8f),
                RoofDark, new Vector3(0, 1.80f, 0.5f));
            for (int f = 0; f < 3; f++)
                foreach (var x in new[] { -0.5f, 0f, 0.5f })
                {
                    if (f == 0 && Mathf.Abs(x) < 0.01f) continue;
                    PropLibrary.Mk($"Win{f}{x}", p, ProceduralMesh.Box("DioLWin", 0.22f, 0.34f, 0.04f),
                        StoneWhite, new Vector3(x, 0.55f + f * 0.48f, 0.14f));
                    PropLibrary.Mk($"Pane{f}{x}", p, ProceduralMesh.Box("DioLPane", 0.16f, 0.26f, 0.045f),
                        RoofDark, new Vector3(x, 0.55f + f * 0.48f, 0.135f));
                }
            PropLibrary.Mk("Door", p, ProceduralMesh.Box("DioLDr", 0.3f, 0.5f, 0.05f), RoofDark, new Vector3(0, 0.3f, 0.13f));
            PropLibrary.Mk("Portico", p, ProceduralMesh.Box("DioLPo", 0.44f, 0.06f, 0.2f), StoneWhite, new Vector3(0, 0.62f, 0.10f));
            // Iconic round English Heritage Blue Plaque (installed 1991)
            var plaqueBlue = MaterialLibrary.Get("HeritagePlaqueBlue", new Color(0.10f, 0.28f, 0.58f), null, 0.65f);
            PropLibrary.Mk("BluePlaqueRim", p, ProceduralMesh.Cylinder("DioBPR", 0.09f, 0.09f, 0.02f, 16),
                StoneWhite, new Vector3(-0.26f, 0.96f, 0.138f), new Vector3(90, 0, 0));
            PropLibrary.Mk("BluePlaque", p, ProceduralMesh.Cylinder("DioBP", 0.075f, 0.075f, 0.024f, 16),
                plaqueBlue, new Vector3(-0.26f, 0.96f, 0.135f), new Vector3(90, 0, 0));
        }

        private static void Stupa(Transform p, Vector3 pos, float scale, Material m)
        {
            PropLibrary.Mk("Drum", p, ProceduralMesh.Cylinder("ST_D", 0.55f * scale, 0.65f * scale, 0.25f * scale, 24), m, pos);
            PropLibrary.Mk("Dome", p, ProceduralMesh.Dome("ST_Dome", 0.55f * scale, 24, 12), m, pos + new Vector3(0, 0.25f * scale, 0));
            PropLibrary.Mk("Harmika", p, ProceduralMesh.Box("ST_H", 0.2f * scale, 0.12f * scale, 0.2f * scale), m, pos + new Vector3(0, 0.86f * scale, 0));
            PropLibrary.Mk("Spire", p, ProceduralMesh.Cylinder("ST_S", 0.015f * scale, 0.035f * scale, 0.3f * scale, 10), Gold, pos + new Vector3(0, 0.92f * scale, 0));
        }
    }
}
