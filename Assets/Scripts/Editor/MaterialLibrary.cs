using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

namespace DHJ.EditorTools
{
    /// <summary>
    /// All materials as persistent assets (stable references from generated
    /// scenes). Works under URP (Lit shader) and falls back to built-in Standard.
    /// Texture assets are the procedurally generated PNGs in Assets/Art/Textures.
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
                                   Vector2? tiling = null, Color? emission = null)
        {
            string key = $"{name}|{color}|{texPath}|{smoothness}|{metallic}|{tiling}|{emission}";
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

            if (texPath != null)
            {
                var tex = AssetDatabase.LoadAssetAtPath<Texture2D>($"Assets/Art/Textures/{texPath}.png");
                if (tex != null)
                {
                    m.mainTexture = tex;
                    m.mainTextureScale = tiling ?? Vector2.one;
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

        // ------------------------------------------------------- named presets
        // NOTE: prop UVs are metre-scaled (1 unit = 1 metre), so tiling <1 makes
        // each texture span multiple metres — the correct museum scale.
        public static Material Marble       => Get("Marble_Cream", new Color(0.94f, 0.92f, 0.88f), "marble_cream", 0.55f, 0f, new Vector2(0.5f, 0.5f));
        public static Material MarbleBlue   => Get("Marble_Blue", new Color(0.85f, 0.87f, 0.95f), "marble_blue", 0.5f, 0f, new Vector2(0.35f, 0.35f));
        public static Material Sandstone    => Get("Sandstone", new Color(0.86f, 0.80f, 0.68f), "sandstone_wall", 0.2f, 0f, new Vector2(0.5f, 0.5f));
        public static Material WoodWarm     => Get("Wood_Warm", new Color(0.72f, 0.55f, 0.38f), "wood_warm", 0.4f, 0f, Vector2.one);
        public static Material WoodDark     => Get("Wood_Dark", new Color(0.55f, 0.40f, 0.27f), "wood_dark", 0.42f, 0f, Vector2.one);
        public static Material CeilingMat   => Get("Ceiling_Coffer", new Color(0.62f, 0.66f, 0.78f), "ceiling_coffer", 0.3f, 0f, new Vector2(0.25f, 0.25f));
        public static Material Carpet       => Get("Carpet_Heritage", new Color(0.9f, 0.9f, 0.95f), "carpet_heritage", 0.05f, 0f, Vector2.one);
        public static Material Gold         => Get("Gold", new Color(0.80f, 0.62f, 0.28f), null, 0.75f, 0.85f);
        public static Material GoldEmissive => Get("Gold_Emissive", new Color(0.85f, 0.66f, 0.30f), null, 0.5f, 0.4f, null, new Color(0.9f, 0.65f, 0.2f) * 0.6f);
        public static Material BrushedSteel => Get("Steel", new Color(0.55f, 0.58f, 0.62f), null, 0.65f, 0.9f);
        public static Material Glass        => Get("Glass", new Color(0.75f, 0.85f, 0.95f, 0.18f), null, 0.9f, 0f);
        public static Material PaperMat     => Get("Paper_Aged", new Color(0.94f, 0.90f, 0.80f), "paper_aged", 0.1f, 0f, Vector2.one);
        public static Material CreamPaint   => Get("Cream_Paint", new Color(0.93f, 0.90f, 0.84f), null, 0.35f);
        public static Material DeepBlue     => Get("Deep_Blue", new Color(0.12f, 0.16f, 0.30f), null, 0.35f);
        public static Material ScreenGlow   => Get("Screen_Glow", new Color(0.75f, 0.85f, 1f), null, 0.4f, 0f, null, new Color(0.5f, 0.7f, 1f) * 0.8f);

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
