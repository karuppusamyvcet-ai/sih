using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Parametric mesh builders saved as .asset meshes so generated scenes keep
    /// stable references (no runtime mesh baking). Everything is flat-shaded /
    /// smooth-shaded deliberately: clean, premium, museum-grade minimalism.
    /// </summary>
    public static class ProceduralMesh
    {
        private static string Dir => "Assets/Data/Generated/Meshes";

        [MenuItem("DHJ/Internal/Clear generated meshes", false, 90)]
        private static void ClearMeshes()
        {
            if (AssetDatabase.IsValidFolder(Dir)) AssetDatabase.DeleteAsset(Dir);
        }

        private static Mesh Save(string name, Mesh m)
        {
            EnsureDir();
            string path = $"{Dir}/{name}.asset";
            var existing = AssetDatabase.LoadAssetAtPath<Mesh>(path);
            if (existing != null) AssetDatabase.DeleteAsset(path);
            m.RecalculateNormals();
            m.RecalculateBounds();
            AssetDatabase.CreateAsset(m, path);
            return m;
        }

        private static void EnsureDir()
        {
            if (!AssetDatabase.IsValidFolder("Assets/Data/Generated/Meshes"))
                AssetDatabase.CreateFolder("Assets/Data/Generated", "Meshes");
        }

        // ---------------------------------------------------------------- API
        public static Mesh Box(string name, float w, float h, float d, bool smooth = false)
        {
            float x = w / 2, y = h / 2, z = d / 2;
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var tri = new List<int>();
            void Face(Vector3 a, Vector3 b, Vector3 c, Vector3 dd, Vector3 nn, float us, float vs)
            {
                int i = v.Count;
                v.AddRange(new[] { a, b, c, dd });
                for (int k = 0; k < 4; k++) n.Add(nn);
                uv.AddRange(new[] { new Vector2(0, 0), new Vector2(us, 0), new Vector2(us, vs), new Vector2(0, vs) });
                tri.AddRange(new[] { i, i + 2, i + 1, i, i + 3, i + 2 });
            }
            Face(new(-x,-y, z), new( x,-y, z), new( x, y, z), new(-x, y, z), Vector3.forward, w, h);
            Face(new( x,-y,-z), new(-x,-y,-z), new(-x, y,-z), new( x, y,-z), Vector3.back, w, h);
            Face(new(-x, y, z),  new( x, y, z),  new( x, y,-z), new(-x, y,-z), Vector3.up, w, d);
            Face(new(-x,-y,-z),  new( x,-y,-z),  new( x,-y, z), new(-x,-y, z), Vector3.down, w, d);
            Face(new( x,-y, z),  new( x,-y,-z),  new( x, y,-z), new( x, y, z), Vector3.right, d, h);
            Face(new(-x,-y,-z),  new(-x,-y, z),  new(-x, y, z), new(-x, y,-z), Vector3.left, d, h);
            return Save(name, FromLists(name, v, n, uv, tri));
        }

        /// <summary>Box centered at its BASE (y=0 at bottom) — easier prop placement.</summary>
        public static Mesh Slab(string name, float w, float h, float d)
        {
            var m = Box(name, w, h, d);
            Shift(m, new Vector3(0, h / 2, 0));
            return m;
        }

        public static Mesh Cylinder(string name, float rTop, float rBottom, float h, int seg = 24, bool capTop = true)
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var tri = new List<int>();
            for (int i = 0; i <= seg; i++)
            {
                float a = i / (float)seg * Mathf.PI * 2;
                Vector3 dir = new(Mathf.Cos(a), 0, Mathf.Sin(a));
                float slope = (rBottom - rTop) / h;
                Vector3 nrm = new Vector3(dir.x, slope, dir.z).normalized;
                v.Add(dir * rBottom + Vector3.up * 0);          n.Add(nrm); uv.Add(new Vector2(i / (float)seg, 0));
                v.Add(dir * rTop    + Vector3.up * h);          n.Add(nrm); uv.Add(new Vector2(i / (float)seg, 1));
                if (i < seg) tri.AddRange(new[] { i * 2, i * 2 + 2, i * 2 + 1, i * 2 + 2, i * 2 + 3, i * 2 + 1 });
            }
            if (capTop && rTop > 0.001f)
            {
                int ci = v.Count; v.Add(new Vector3(0, h, 0)); n.Add(Vector3.up); uv.Add(new Vector2(0.5f, 0.5f));
                for (int i = 0; i < seg; i++)
                {
                    float a0 = i / (float)seg * Mathf.PI * 2, a1 = (i + 1) / (float)seg * Mathf.PI * 2;
                    int i0 = v.Count; int i1 = i0 + 1;
                    v.Add(new Vector3(Mathf.Cos(a0) * rTop, h, Mathf.Sin(a0) * rTop)); n.Add(Vector3.up); uv.Add(new Vector2(0.5f + Mathf.Cos(a0) / 2, 0.5f + Mathf.Sin(a0) / 2));
                    v.Add(new Vector3(Mathf.Cos(a1) * rTop, h, Mathf.Sin(a1) * rTop)); n.Add(Vector3.up); uv.Add(new Vector2(0.5f + Mathf.Cos(a1) / 2, 0.5f + Mathf.Sin(a1) / 2));
                    tri.AddRange(new[] { ci, i0, i1 });
                }
            }
            return Save(name, FromLists(name, v, n, uv, tri));
        }

        public static Mesh Sphere(string name, float r, int seg = 16, int rings = 12) =>
            LatheEllipsoid(name, r, seg, rings, Mathf.PI);

        public static Mesh Dome(string name, float r, int seg = 28, int rings = 10) =>
            LatheEllipsoid(name, r, seg, rings, Mathf.PI / 2f);

        private static Mesh LatheEllipsoid(string name, float r, int seg, int rings, float maxPhi)
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var tri = new List<int>();
            for (int ring = 0; ring <= rings; ring++)
            {
                float phi = ring / (float)rings * maxPhi;
                for (int i = 0; i <= seg; i++)
                {
                    float a = i / (float)seg * Mathf.PI * 2;
                    Vector3 p = new(Mathf.Cos(a) * Mathf.Cos(phi), Mathf.Sin(phi), Mathf.Sin(a) * Mathf.Cos(phi));
                    v.Add(p * r); n.Add(p); uv.Add(new Vector2(i / (float)seg, ring / (float)rings));
                }
            }
            for (int ring = 0; ring < rings; ring++)
                for (int i = 0; i < seg; i++)
                {
                    int a = ring * (seg + 1) + i, b = a + seg + 1;
                    tri.AddRange(new[] { a, a + 1, b, a + 1, b + 1, b });
                }
            return Save(name, FromLists(name, v, n, uv, tri));
        }

        public static Mesh Torus(string name, float major, float minor, int seg = 24, int tube = 10)
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var tri = new List<int>();
            for (int i = 0; i <= seg; i++)
            {
                float a = i / (float)seg * Mathf.PI * 2;
                Vector3 center = new(Mathf.Cos(a) * major, 0, Mathf.Sin(a) * major);
                for (int j = 0; j <= tube; j++)
                {
                    float b = j / (float)tube * Mathf.PI * 2;
                    Vector3 off = new(Mathf.Cos(a) * Mathf.Cos(b), Mathf.Sin(b), Mathf.Sin(a) * Mathf.Cos(b)) * minor;
                    v.Add(center + off); n.Add(off.normalized); uv.Add(new Vector2(i / (float)seg, j / (float)tube));
                }
            }
            for (int i = 0; i < seg; i++)
                for (int j = 0; j < tube; j++)
                {
                    int a = i * (tube + 1) + j, b2 = a + tube + 1;
                    tri.AddRange(new[] { a, b2, a + 1, a + 1, b2, b2 + 1 });
                }
            return Save(name, FromLists(name, v, n, uv, tri));
        }

        /// <summary>Hemisphere/band utilities above share this winding convention:
        /// Unity front faces are CLOCKWISE when viewed from outside.</summary>
        /// <summary>Triangular prism (roof gable) with base at y=0, ridge along Z.</summary>
        public static Mesh Gable(string name, float w, float h, float d)
        {
            float x = w / 2, z = d / 2;
            var v = new List<Vector3>(); var nrm = new List<Vector3>(); var uv = new List<Vector2>(); var tri = new List<int>();
            Vector3 A = new(-x, 0, z), B = new(x, 0, z), C = new(x, 0, -z), D = new(-x, 0, -z),
                    E = new(0, h, z), F = new(0, h, -z);

            void Quad(Vector3 a, Vector3 b, Vector3 c, Vector3 dd, Vector3 nn)
            {
                int i = v.Count; v.AddRange(new[] { a, b, c, dd });
                for (int k = 0; k < 4; k++) nrm.Add(nn);
                uv.AddRange(new[] { new Vector2(0, 0), new(1, 0), new(1, 1), new(0, 1) });
                tri.AddRange(new[] { i, i + 2, i + 1, i, i + 3, i + 2 });
            }
            void Tri(Vector3 a, Vector3 b, Vector3 c, Vector3 nn)
            {
                int i = v.Count; v.AddRange(new[] { a, b, c });
                nrm.Add(nn); nrm.Add(nn); nrm.Add(nn);
                uv.AddRange(new[] { new Vector2(0, 0), new(1, 0), new(0.5f, 1) });
                tri.AddRange(new[] { i, i + 1, i + 2 });
            }

            Vector3 nLeft  = Vector3.Cross(E - A, F - A).normalized;   // outward left-up
            Vector3 nRight = Vector3.Cross(C - B, F - B).normalized;   // outward right-up
            Quad(A, D, F, E, nLeft);        // left slope (CCW loop for helper)
            Quad(B, C, F, E, nRight);       // right slope
            Tri(A, E, B, Vector3.forward);  // front gable triangle
            Tri(C, F, D, Vector3.back);     // back gable triangle
            Quad(A, D, C, B, Vector3.down); // underside
            return Save(name, FromLists(name, v, nrm, uv, tri));
        }

        /// <summary>Semicircular arch band for door frames (lies in the XY plane).</summary>
        public static Mesh ArchBand(string name, float major, float minor, int seg = 20) =>
            TorusBand(name, major, minor, seg);

        private static Mesh TorusBand(string name, float major, float minor, int seg)
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var tri = new List<int>();
            for (int i = 0; i <= seg; i++)
            {
                float a = i / (float)seg * Mathf.PI;    // half arc
                Vector3 center = new(Mathf.Cos(a) * major, Mathf.Sin(a) * major, 0);
                for (int j = 0; j <= 8; j++)
                {
                    float b = j / 8f * Mathf.PI * 2;
                    Vector3 off = new(Mathf.Cos(a) * Mathf.Cos(b) * minor, Mathf.Sin(a) * Mathf.Cos(b) * minor, Mathf.Sin(b) * minor);
                    v.Add(center + off); n.Add(off.normalized); uv.Add(new Vector2(i / (float)seg, j / 8f));
                }
            }
            for (int i = 0; i < seg; i++)
                for (int j = 0; j < 8; j++)
                {
                    int a = i * 9 + j, b2 = a + 9;
                    tri.AddRange(new[] { a, b2, a + 1, a + 1, b2, b2 + 1 });
                }
            return Save(name, FromLists(name, v, n, uv, tri));
        }

        // ---------------------------------------------------------------- util
        private static Mesh FromLists(string name, List<Vector3> v, List<Vector3> n, List<Vector2> uv, List<int> tri)
        {
            var m = new Mesh { name = name };
            if (v.Count > 64000) m.indexFormat = UnityEngine.Rendering.IndexFormat.UInt32;
            m.SetVertices(v); m.SetNormals(n); m.SetUVs(0, uv); m.SetTriangles(tri, 0);
            return m;
        }

        private static void Shift(Mesh m, Vector3 delta)
        {
            var vs = m.vertices;
            for (int i = 0; i < vs.Length; i++) vs[i] += delta;
            m.vertices = vs; m.RecalculateBounds();
            EditorUtility.SetDirty(m);
        }
    }
}
