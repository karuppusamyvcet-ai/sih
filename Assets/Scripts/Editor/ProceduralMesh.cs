using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Parametric mesh builders saved as .asset meshes so generated scenes keep
    /// stable references (no runtime mesh baking). Computes normals, bounds, and
    /// tangents so PBR normal maps render accurately under URP and Standard.
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
            m.RecalculateTangents();
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
                float slope = (rBottom - rTop) / Mathf.Max(0.001f, h);
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

        /// <summary>Classical architectural column shaft with vertical fluting and subtle entasis.</summary>
        public static Mesh FlutedCylinder(string name, float rTop, float rBottom, float h, int flutes = 16, int rings = 6)
        {
            int seg = flutes * 3;
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var tri = new List<int>();
            for (int r = 0; r <= rings; r++)
            {
                float ty = r / (float)rings;
                // Classical entasis: slight convex swell at 1/3 height
                float entasis = Mathf.Sin(ty * Mathf.PI) * 0.018f * rBottom;
                float baseR = Mathf.Lerp(rBottom, rTop, ty) + entasis;
                float fluteFade = Mathf.SmoothStep(0f, 1f, Mathf.Min(ty / 0.08f, (1f - ty) / 0.08f));
                for (int i = 0; i <= seg; i++)
                {
                    float u = i / (float)seg;
                    float a = u * Mathf.PI * 2f;
                    float groove = Mathf.Max(0f, Mathf.Sin(u * flutes * Mathf.PI * 2f)) * 0.042f * rBottom * fluteFade;
                    float rad = baseR - groove;
                    Vector3 dir = new(Mathf.Cos(a), 0f, Mathf.Sin(a));
                    v.Add(dir * rad + Vector3.up * (ty * h));
                    n.Add(dir);
                    uv.Add(new Vector2(u * 2f, ty * h * 0.5f));
                }
            }
            int stride = seg + 1;
            for (int r = 0; r < rings; r++)
            {
                for (int i = 0; i < seg; i++)
                {
                    int a = r * stride + i;
                    int b = a + stride;
                    tri.AddRange(new[] { a, a + 1, b, a + 1, b + 1, b });
                }
            }
            return Save(name, FromLists(name, v, n, uv, tri));
        }

        /// <summary>Anatomically tapered limb/finger segment extending downward from 0 to -len with rounded joint caps.</summary>
        public static Mesh RoundedLimb(string name, float rTop, float rBottom, float len, int seg = 16)
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var tri = new List<int>();
            int rings = 8;
            for (int r = 0; r <= rings; r++)
            {
                float t = r / (float)rings;
                float y, rad;
                if (t < 0.15f)
                {
                    float kt = t / 0.15f;
                    y = (1f - kt) * (rTop * 0.45f);
                    rad = rTop * Mathf.Sin(kt * Mathf.PI * 0.5f);
                }
                else if (t > 0.85f)
                {
                    float kb = (t - 0.85f) / 0.15f;
                    y = -len - kb * (rBottom * 0.45f);
                    rad = rBottom * Mathf.Cos(kb * Mathf.PI * 0.5f);
                }
                else
                {
                    float km = (t - 0.15f) / 0.70f;
                    // subtle anatomical muscle belly curve
                    float belly = Mathf.Sin(km * Mathf.PI) * 0.06f * rTop;
                    y = -km * len;
                    rad = Mathf.Lerp(rTop, rBottom, km) + belly;
                }
                for (int i = 0; i <= seg; i++)
                {
                    float u = i / (float)seg;
                    float a = u * Mathf.PI * 2f;
                    Vector3 dir = new(Mathf.Cos(a), 0f, Mathf.Sin(a));
                    v.Add(dir * rad + Vector3.up * y);
                    n.Add(dir);
                    uv.Add(new Vector2(u, t));
                }
            }
            int stride = seg + 1;
            for (int r = 0; r < rings; r++)
                for (int i = 0; i < seg; i++)
                {
                    int a = r * stride + i, b = a + stride;
                    tri.AddRange(new[] { a, b, a + 1, a + 1, b, b + 1 });
                }
            return Save(name, FromLists(name, v, n, uv, tri));
        }

        /// <summary>Hanging velvet stanchion cord along local X from -span/2 to +span/2 with natural sag.</summary>
        public static Mesh CatenaryRope(string name, float span, float sag = 0.22f, float radius = 0.022f, int seg = 16, int tube = 8)
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var tri = new List<int>();
            for (int i = 0; i <= seg; i++)
            {
                float t = i / (float)seg;
                float x = Mathf.Lerp(-span * 0.5f, span * 0.5f, t);
                float y = -Mathf.Sin(t * Mathf.PI) * sag;
                float dy = -Mathf.Cos(t * Mathf.PI) * Mathf.PI * sag / Mathf.Max(0.1f, span);
                Vector3 tangent = new Vector3(1f, dy, 0f).normalized;
                Vector3 up = Vector3.Cross(tangent, Vector3.forward).normalized;
                for (int j = 0; j <= tube; j++)
                {
                    float b = j / (float)tube * Mathf.PI * 2f;
                    Vector3 off = (up * Mathf.Cos(b) + Vector3.forward * Mathf.Sin(b)) * radius;
                    v.Add(new Vector3(x, y, 0f) + off);
                    n.Add(off.normalized);
                    uv.Add(new Vector2(t * 4f, j / (float)tube));
                }
            }
            int stride = tube + 1;
            for (int i = 0; i < seg; i++)
                for (int j = 0; j < tube; j++)
                {
                    int a = i * stride + j, b = a + stride;
                    tri.AddRange(new[] { a, b, a + 1, a + 1, b, b + 1 });
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

            Vector3 nLeft  = Vector3.Cross(E - A, F - A).normalized;
            Vector3 nRight = Vector3.Cross(C - B, F - B).normalized;
            Quad(A, D, F, E, nLeft);
            Quad(B, C, F, E, nRight);
            Tri(A, E, B, Vector3.forward);
            Tri(C, F, D, Vector3.back);
            Quad(A, D, C, B, Vector3.down);
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
                float a = i / (float)seg * Mathf.PI;
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
