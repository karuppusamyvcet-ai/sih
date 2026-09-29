using UnityEngine;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Stylized "digital reconstruction" miniatures of the six memorial sites
    /// (~4 m diameter presentation dioramas for the Memorials gallery).
    /// Deliberately respectful abstractions — each clearly labelled in-scene.
    /// </summary>
    public static class DioramaFactory
    {
        private static Material StoneWhite => MaterialLibrary.Get("Dio_StoneWhite", new Color(0.90f, 0.87f, 0.80f), null, 0.35f);
        private static Material StoneRed   => MaterialLibrary.Get("Dio_StoneRed", new Color(0.62f, 0.38f, 0.30f), null, 0.3f);
        private static Material RoofDark   => MaterialLibrary.Get("Dio_Roof", new Color(0.28f, 0.24f, 0.22f), null, 0.3f);
        private static Material CreamHouse => MaterialLibrary.Get("Dio_Cream", new Color(0.88f, 0.83f, 0.72f), null, 0.35f);
        private static Material BrickRed   => MaterialLibrary.Get("Dio_Brick", new Color(0.52f, 0.30f, 0.26f), null, 0.35f);
        private static Material WaterBlue  => MaterialLibrary.Get("Dio_Water", new Color(0.35f, 0.50f, 0.65f), null, 0.8f);
        private static Material GreenLawn  => MaterialLibrary.Get("Dio_Green", new Color(0.35f, 0.48f, 0.32f), null, 0.15f);
        private static Material Gold       => MaterialLibrary.Gold;

        public static GameObject Build(string dioramaId, Transform parent, Vector3 pos)
        {
            var root = new GameObject("Diorama_" + dioramaId);
            root.transform.SetParent(parent, false);
            root.transform.localPosition = pos;

            // shared circular plinth
            PropLibrary.Mk("Plinth", root.transform, ProceduralMesh.Cylinder("DioPlinth", 2.1f, 2.25f, 0.5f, 36),
                MaterialLibrary.Marble, Vector3.zero, default, null, true);
            PropLibrary.Mk("GoldRing", root.transform, ProceduralMesh.Torus("DioRing", 2.18f, 0.035f, 36, 8),
                Gold, new Vector3(0, 0.53f, 0));

            var m = new GameObject("Model");
            m.transform.SetParent(root.transform, false);
            m.transform.localPosition = new Vector3(0, 0.5f, 0);

            switch (dioramaId)
            {
                case "MhowHouse":     MhowHouse(m.transform); break;
                case "ChaityaBhoomi": ChaityaBhoomi(m.transform); break;
                case "Deekshabhoomi": Deekshabhoomi(m.transform); break;
                case "AlipurHouse":   AlipurHouse(m.transform); break;
                case "LucknowPark":   LucknowPark(m.transform); break;
                case "LondonHouse":   LondonHouse(m.transform); break;
                default:              MhowHouse(m.transform); break;
            }
            return root;
        }

        private static void MhowHouse(Transform p)
        {
            PropLibrary.Mk("Lawn", p, ProceduralMesh.Box("DioG1", 3.2f, 0.06f, 2.6f), GreenLawn, new Vector3(0, 0.03f, 0));
            PropLibrary.Mk("House", p, ProceduralMesh.Box("DioMH", 1.5f, 1.0f, 1.1f), CreamHouse, new Vector3(0, 0.56f, 0.2f));
            PropLibrary.Mk("Roof", p, ProceduralMesh.Gable("DioMHR", 1.7f, 0.55f, 1.3f), RoofDark, new Vector3(0, 1.06f, 0.2f));
            PropLibrary.Mk("Door", p, ProceduralMesh.Box("DioMHDr", 0.3f, 0.6f, 0.05f), RoofDark, new Vector3(0, 0.36f, -0.36f));
            PropLibrary.Mk("GateArch", p, ProceduralMesh.ArchBand("DioMHArc", 0.55f, 0.08f, 14), CreamHouse, new Vector3(0, 0.85f, -0.95f));
            foreach (var x in new[] { -0.65f, 0.65f })
                PropLibrary.Mk("GatePost" + x, p, ProceduralMesh.Box("DioMHP", 0.12f, 0.85f, 0.12f), CreamHouse, new Vector3(x, 0.42f, -0.95f));
        }

        private static void ChaityaBhoomi(Transform p)
        {
            PropLibrary.Mk("Sea", p, ProceduralMesh.Box("DioSea", 3.4f, 0.04f, 1.4f), WaterBlue, new Vector3(0, 0.02f, 1.0f));
            PropLibrary.Mk("Sand", p, ProceduralMesh.Box("DioSand", 3.4f, 0.05f, 1.2f), CreamHouse, new Vector3(0, 0.025f, 0.0f));
            Stupa(p, new Vector3(-0.3f, 0.05f, 0.1f), 0.9f, StoneWhite);
            // chaitya arch gateway
            PropLibrary.Mk("Arch", p, ProceduralMesh.ArchBand("DioCBArc", 0.75f, 0.09f, 16), StoneWhite, new Vector3(0.7f, 1.0f, -0.6f));
            foreach (var x in new[] { -0.05f, 1.45f })
                PropLibrary.Mk("Post" + x, p, ProceduralMesh.Box("DioCBPost", 0.12f, 1.0f, 0.12f), StoneWhite, new Vector3(x, 0.5f, -0.6f));
        }

        private static void Deekshabhoomi(Transform p)
        {
            PropLibrary.Mk("Ground", p, ProceduralMesh.Cylinder("DioDKGr", 1.9f, 1.95f, 0.06f, 32), GreenLawn, Vector3.zero);
            // two-tier drum + great hollow stupa
            PropLibrary.Mk("Drum1", p, ProceduralMesh.Cylinder("DioDK1", 1.15f, 1.25f, 0.35f, 32), StoneWhite, new Vector3(0, 0.06f, 0.15f));
            PropLibrary.Mk("Drum2", p, ProceduralMesh.Cylinder("DioDK2", 0.95f, 1.05f, 0.3f, 32), StoneWhite, new Vector3(0, 0.41f, 0.15f));
            PropLibrary.Mk("Dome", p, ProceduralMesh.Dome("DioDKDome", 0.95f, 32, 12), StoneWhite, new Vector3(0, 0.71f, 0.15f));
            PropLibrary.Mk("Harmika", p, ProceduralMesh.Box("DioDKH", 0.28f, 0.16f, 0.28f), StoneWhite, new Vector3(0, 1.74f, 0.15f));
            PropLibrary.Mk("Spire", p, ProceduralMesh.Cylinder("DioDKS", 0.02f, 0.05f, 0.4f, 10), Gold, new Vector3(0, 1.82f, 0.15f));
            // porch
            PropLibrary.Mk("Porch", p, ProceduralMesh.Box("DioDKP", 0.5f, 0.4f, 0.3f), StoneWhite, new Vector3(0, 0.26f, -0.95f));
            PropLibrary.Mk("PorchRoof", p, ProceduralMesh.Gable("DioDKPr", 0.6f, 0.2f, 0.36f), StoneWhite, new Vector3(0, 0.46f, -0.95f));
        }

        private static void AlipurHouse(Transform p)
        {
            PropLibrary.Mk("Lawn", p, ProceduralMesh.Box("DioG2", 3.2f, 0.06f, 2.8f), GreenLawn, new Vector3(0, 0.03f, 0));
            PropLibrary.Mk("House", p, ProceduralMesh.Box("DioAH", 2.0f, 0.9f, 1.1f), CreamHouse, new Vector3(0, 0.51f, 0.35f));
            PropLibrary.Mk("Roof", p, ProceduralMesh.Gable("DioAHR", 2.2f, 0.45f, 1.25f), RoofDark, new Vector3(0, 0.96f, 0.35f));
            // columned porch
            foreach (var x in new[] { -0.55f, -0.2f, 0.2f, 0.55f })
                PropLibrary.Mk("PorchCol" + x, p, ProceduralMesh.Cylinder("DioACol", 0.045f, 0.05f, 0.75f, 10), CreamHouse, new Vector3(x, 0.06f, -0.45f));
            PropLibrary.Mk("PorchRoof", p, ProceduralMesh.Box("DioAPR", 1.5f, 0.08f, 0.5f), CreamHouse, new Vector3(0, 0.83f, -0.45f));
            PropLibrary.Mk("Steps", p, ProceduralMesh.Box("DioASt", 1.5f, 0.10f, 0.4f), StoneWhite, new Vector3(0, 0.05f, -0.55f));
            PropLibrary.Mk("WinL", p, ProceduralMesh.Box("DioAW", 0.28f, 0.4f, 0.04f), RoofDark, new Vector3(-0.6f, 0.55f, -0.21f));
            PropLibrary.Mk("WinR", p, ProceduralMesh.Box("DioAW", 0.28f, 0.4f, 0.04f), RoofDark, new Vector3(0.6f, 0.55f, -0.21f));
        }

        private static void LucknowPark(Transform p)
        {
            PropLibrary.Mk("Plaza", p, ProceduralMesh.Cylinder("DioLP", 1.8f, 1.85f, 0.08f, 32), StoneRed, Vector3.zero);
            // central memorial dome
            PropLibrary.Mk("Drum", p, ProceduralMesh.Cylinder("DioLPD", 0.8f, 0.9f, 0.5f, 28), StoneRed, new Vector3(0, 0.08f, 0));
            PropLibrary.Mk("Dome", p, ProceduralMesh.Dome("DioLPDome", 0.8f, 28, 10), StoneRed, new Vector3(0, 0.58f, 0));
            PropLibrary.Mk("Finial", p, ProceduralMesh.Cylinder("DioLPF", 0.02f, 0.04f, 0.3f, 8), Gold, new Vector3(0, 1.42f, 0));
            // corner chhatris
            foreach (var (x, z) in new[] { (-1.1f, -1.1f), (1.1f, -1.1f), (-1.1f, 1.1f), (1.1f, 1.1f) })
            {
                PropLibrary.Mk("ChBase" + x + z, p, ProceduralMesh.Cylinder("DioLCB", 0.22f, 0.24f, 0.35f, 12), StoneRed, new Vector3(x, 0.08f, z));
                PropLibrary.Mk("ChDome" + x + z, p, ProceduralMesh.Dome("DioLCD", 0.22f, 12, 8), StoneRed, new Vector3(x, 0.43f, z));
            }
        }

        private static void LondonHouse(Transform p)
        {
            PropLibrary.Mk("Pavement", p, ProceduralMesh.Box("DioPv", 3.0f, 0.05f, 2.4f),
                MaterialLibrary.Get("Dio_Pave", new Color(0.55f, 0.55f, 0.58f), null, 0.3f), new Vector3(0, 0.025f, 0));
            PropLibrary.Mk("Facade", p, ProceduralMesh.Box("DioLH", 1.6f, 1.7f, 0.7f), BrickRed, new Vector3(0, 0.9f, 0.5f));
            PropLibrary.Mk("Roof", p, ProceduralMesh.Gable("DioLHR", 1.7f, 0.4f, 0.8f), RoofDark, new Vector3(0, 1.75f, 0.5f));
            for (int f = 0; f < 3; f++)
                foreach (var x in new[] { -0.5f, 0f, 0.5f })
                    PropLibrary.Mk($"Win{f}{x}", p, ProceduralMesh.Box("DioLWin", 0.22f, 0.34f, 0.04f),
                        MaterialLibrary.Get("Dio_WinCream", new Color(0.9f, 0.88f, 0.82f), null, 0.4f),
                        new Vector3(x, 0.55f + f * 0.48f, 0.14f));
            PropLibrary.Mk("Door", p, ProceduralMesh.Box("DioLDr", 0.3f, 0.5f, 0.05f), RoofDark, new Vector3(0, 0.3f, 0.13f));
            PropLibrary.Mk("Portico", p, ProceduralMesh.Box("DioLPo", 0.44f, 0.06f, 0.2f), StoneWhite, new Vector3(0, 0.62f, 0.10f));
        }

        private static void Stupa(Transform p, Vector3 pos, float scale, Material m)
        {
            PropLibrary.Mk("Drum", p, ProceduralMesh.Cylinder("ST_D", 0.55f * scale, 0.65f * scale, 0.25f * scale, 24), m, pos);
            PropLibrary.Mk("Dome", p, ProceduralMesh.Dome("ST_Dome", 0.55f * scale, 24, 10), m, pos + new Vector3(0, 0.25f * scale, 0));
            PropLibrary.Mk("Harmika", p, ProceduralMesh.Box("ST_H", 0.2f * scale, 0.12f * scale, 0.2f * scale), m, pos + new Vector3(0, 0.86f * scale, 0));
            PropLibrary.Mk("Spire", p, ProceduralMesh.Cylinder("ST_S", 0.015f * scale, 0.035f * scale, 0.3f * scale, 8), Gold, pos + new Vector3(0, 0.92f * scale, 0));
        }
    }
}
