using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

namespace DHJ.EditorTools
{
    /// <summary>
    /// All materials as persistent PBR assets (stable references from generated
    /// scenes). Works under URP (Lit shader) and falls back to built-in Standard.
    /// Automatically binds matching tangent-space normal maps (*_n.png) and enables
    /// GPU instancing so realistic surfaces stay fast on desktop and mobile.
    /// </summary>
    public static class MaterialLibrary
    {
        private const string Dir = "Assets/Art/Materials/Generated";
        private static readonly Dictionary<string, Material> Cache = new();

        private static Shader Lit
        {
            get
            {
                var s = Shader.Find("Universal Render Pipeline/Lit");
                if (s == null) s = Shader.Find("Standard");
                return s;
            }
        }

        public static Material Get(string name, Color color, string texPath = null,
                                   float smoothness = 0.35f, float metallic = 0f,
                                   Vector2? tiling = null, Color? emission = null,
                                   float bumpScale = 0.6f)
        {
            string key = $"{name}|{color}|{texPath}|{smoothness}|{metallic}|{tiling}|{emission}|{bumpScale}";
            if (Cache.TryGetValue(key, out var m) && m != null) return m;

            string safe = name.Replace("/", "_").Replace(" ", "");
            string path = $"{Dir}/{safe}.mat";
            m = AssetDatabase.LoadAssetAtPath<Material>(path);
            if (m == null)
            {
                EnsureDir();
                m = new Material(Lit) { name = safe };
                AssetDatabase.CreateAsset(m, path);
            }
            m.shader = Lit;
            m.color = color;
            if (m.HasProperty("_BaseColor")) m.SetColor("_BaseColor", color);
            m.enableInstancing = true;

            Vector2 scale = tiling ?? Vector2.one;
            if (texPath != null)
            {
                var tex = AssetDatabase.LoadAssetAtPath<Texture2D>($"Assets/Art/Textures/{texPath}.png");
                if (tex != null)
                {
                    m.mainTexture = tex;
                    m.mainTextureScale = scale;
                    if (m.HasProperty("_BaseMap"))
                    {
                        m.SetTexture("_BaseMap", tex);
                        m.SetTextureScale("_BaseMap", scale);
                    }
                }
                var nrm = AssetDatabase.LoadAssetAtPath<Texture2D>($"Assets/Art/Textures/{texPath}_n.png");
                if (nrm != null && m.HasProperty("_BumpMap"))
                {
                    m.EnableKeyword("_NORMALMAP");
                    m.SetTexture("_BumpMap", nrm);
                    m.SetTextureScale("_BumpMap", scale);
                    if (m.HasProperty("_BumpScale")) m.SetFloat("_BumpScale", bumpScale);
                }
            }
            SetSmoothness(m, smoothness);
            SetMetallic(m, metallic);
            if (emission.HasValue)
            {
                m.EnableKeyword("_EMISSION");
                m.SetColor("_EmissionColor", emission.Value);
            }
            EditorUtility.SetDirty(m);
            Cache[key] = m;
            return m;
        }

        private static void SetSmoothness(Material m, float v)
        {
            if (m.HasProperty("_Smoothness")) m.SetFloat("_Smoothness", v);
            if (m.HasProperty("_Glossiness")) m.SetFloat("_Glossiness", v);
        }

        private static void SetMetallic(Material m, float v)
        {
            if (m.HasProperty("_Metallic")) m.SetFloat("_Metallic", v);
        }

        private static void EnsureDir()
        {
            if (!AssetDatabase.IsValidFolder("Assets/Art/Materials")) AssetDatabase.CreateFolder("Assets/Art", "Materials");
            if (!AssetDatabase.IsValidFolder(Dir)) AssetDatabase.CreateFolder("Assets/Art/Materials", "Generated");
        }

        // ------------------------------------------------------- named PBR presets
        // Prop UVs are metre-scaled (1 unit = 1 metre), so tiling <1 makes
        // each texture span multiple metres — the realistic architectural scale.
        public static Material Marble         => Get("Marble_Cream", new Color(0.95f, 0.93f, 0.89f), "marble_cream", 0.72f, 0.02f, new Vector2(0.45f, 0.45f), null, 0.45f);
        public static Material MarbleBlue     => Get("Marble_Blue", new Color(0.86f, 0.88f, 0.95f), "marble_blue", 0.70f, 0.04f, new Vector2(0.35f, 0.35f), null, 0.45f);
        public static Material Sandstone      => Get("Sandstone", new Color(0.88f, 0.82f, 0.70f), "sandstone_wall", 0.22f, 0f, new Vector2(0.45f, 0.45f), null, 0.85f);
        public static Material WoodWarm       => Get("Wood_Warm", new Color(0.76f, 0.58f, 0.40f), "wood_warm", 0.52f, 0f, Vector2.one, null, 0.55f);
        public static Material WoodDark       => Get("Wood_Dark", new Color(0.56f, 0.40f, 0.27f), "wood_dark", 0.54f, 0f, Vector2.one, null, 0.55f);
        public static Material CeilingMat     => Get("Ceiling_Coffer", new Color(0.68f, 0.72f, 0.82f), "ceiling_coffer", 0.36f, 0.08f, new Vector2(0.25f, 0.25f), null, 0.90f);
        public static Material Carpet         => Get("Carpet_Heritage", new Color(0.92f, 0.92f, 0.96f), "carpet_heritage", 0.08f, 0f, Vector2.one, null, 0.75f);
        public static Material FloorMedallion => Get("Floor_Medallion", Color.white, "floor_medallion", 0.72f, 0.22f, Vector2.one, null, 0.65f);
        public static Material Gold           => Get("Gold", new Color(0.82f, 0.65f, 0.30f), null, 0.78f, 0.88f);
        public static Material GoldEmissive   => Get("Gold_Emissive", new Color(0.86f, 0.68f, 0.32f), null, 0.65f, 0.55f, null, new Color(0.85f, 0.62f, 0.22f) * 0.45f);
        public static Material BrushedSteel   => Get("Steel", new Color(0.60f, 0.63f, 0.67f), null, 0.70f, 0.92f);
        public static Material Glass          => MakeTransparent(Get("Glass", new Color(0.82f, 0.90f, 0.96f, 0.16f), null, 0.95f, 0.05f));
        public static Material PaperMat       => Get("Paper_Aged", new Color(0.95f, 0.91f, 0.82f), "paper_aged", 0.12f, 0f, Vector2.one);
        public static Material Parchment      => Get("Parchment", new Color(0.94f, 0.89f, 0.78f), "parchment", 0.10f, 0f, Vector2.one);
        public static Material CreamPaint     => Get("Cream_Paint", new Color(0.93f, 0.90f, 0.84f), null, 0.32f);
        public static Material DeepBlue       => Get("Deep_Blue", new Color(0.12f, 0.16f, 0.30f), null, 0.42f, 0.05f);
        public static Material CrimsonVelvet  => Get("Crimson_Velvet", new Color(0.46f, 0.11f, 0.14f), "carpet_heritage", 0.10f, 0f, new Vector2(2f, 2f), null, 0.4f);
        public static Material LeatherDark    => Get("Leather_Dark", new Color(0.32f, 0.22f, 0.17f), "leather_dark", 0.48f, 0f, new Vector2(2f, 2f), null, 0.60f);
        public static Material SuitWool       => Get("Suit_Wool", new Color(0.14f, 0.18f, 0.32f), "suit_fabric", 0.24f, 0f, new Vector2(4f, 4f), null, 0.55f);
        public static Material ScreenGlow     => Get("Screen_Glow", new Color(0.76f, 0.86f, 0.98f), null, 0.55f, 0f, null, new Color(0.45f, 0.64f, 0.92f) * 0.65f);

        /// <summary>Transparent glass setup for either pipeline.</summary>
        public static Material MakeTransparent(Material m)
        {
            if (m.HasProperty("_Surface")) m.SetFloat("_Surface", 1);           // URP transparent
            if (m.HasProperty("_Mode")) m.SetFloat("_Mode", 3);                 // Standard transparent
            m.SetInt("_SrcBlend", (int)UnityEngine.Rendering.BlendMode.SrcAlpha);
            m.SetInt("_DstBlend", (int)UnityEngine.Rendering.BlendMode.OneMinusSrcAlpha);
            m.SetInt("_ZWrite", 0);
            m.renderQueue = 3000;
            m.EnableKeyword("_SURFACE_TYPE_TRANSPARENT");
            m.EnableKeyword("_ALPHABLEND_ON");
            EditorUtility.SetDirty(m);
            return m;
        }
    }
}
