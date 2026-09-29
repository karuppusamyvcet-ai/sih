using System.IO;
using UnityEngine;
using UnityEditor;
using TMPro;

namespace DHJ.EditorTools
{
    /// <summary>
    /// "DHJ → 1 · Prepare Project" — one-time setup that normally requires manual
    /// clicks: creates the shared TMP font asset, assigns the render pipeline,
    /// configures player/build settings for Windows & Android.
    /// Safe to run repeatedly; skips work that's already done.
    /// </summary>
    public static class DHJBootstrap
    {
        public const string FontDir = "Assets/Resources/DHJ";
        public const string FontPath = FontDir + "/DHJ_MainFont.asset";
        public const string StyleConfigPath = "Assets/Data/Characters/AmbedkarStyle.asset";

        [MenuItem("DHJ/1 · Prepare Project (font, pipeline, settings)", false, 10)]
        public static void PrepareAll()
        {
            EnsureFolders();
            var font = EnsureTmpFont();
            EnsureStyleConfig();
            TryAssignUrp();
            ConfigurePlayerSettings();
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            Debug.Log("[DHJ] Project prepared. Next: DHJ → 2 · Generate All Scenes & Character.");
            if (font != null) EditorGUIUtility.PingObject(font);
        }

        private static void EnsureFolders()
        {
            foreach (var d in new[]
            {
                "Assets/Resources", FontDir, "Assets/Data", "Assets/Data/Characters",
                "Assets/Data/Generated", "Assets/Scenes", "Assets/Prefabs",
                "Assets/Prefabs/Player", "Assets/Prefabs/Props", "Assets/Art/Materials",
                "Assets/Art/Materials/Generated", "Assets/Animations", "Assets/Animations/Clips"
            })
            {
                var parent = Path.GetDirectoryName(d).Replace('\\', '/');
                var leaf = Path.GetFileName(d);
                if (!AssetDatabase.IsValidFolder(d))
                    AssetDatabase.CreateFolder(parent, leaf);
            }
        }

        public static TMP_FontAsset EnsureTmpFont()
        {
            var existing = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>(FontPath);
            if (existing != null) return existing;

            Font legacy = null;
            try { legacy = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf"); } catch { }
            if (legacy == null)
                try { legacy = Resources.GetBuiltinResource<Font>("Arial.ttf"); } catch { }
            if (legacy == null)
            {
                Debug.LogWarning("[DHJ] No built-in font found; assign a TMP font manually.");
                return null;
            }

            var fontAsset = TMP_FontAsset.CreateFontAsset(legacy, 72, 8,
                GlyphRenderMode.SDFAA, 1024, 1024, AtlasPopulationMode.Dynamic);
            AssetDatabase.CreateAsset(fontAsset, FontPath);
            if (fontAsset.material != null) AssetDatabase.AddObjectToAsset(fontAsset.material, fontAsset);
            if (fontAsset.atlasTexture != null) AssetDatabase.AddObjectToAsset(fontAsset.atlasTexture, fontAsset);
            EditorUtility.SetDirty(fontAsset);
            Debug.Log("[DHJ] Created shared TMP font at " + FontPath);
            return fontAsset;
        }

        public static CharacterStyleConfig EnsureStyleConfig()
        {
            var cfg = AssetDatabase.LoadAssetAtPath<CharacterStyleConfig>(StyleConfigPath);
            if (cfg == null)
            {
                cfg = ScriptableObject.CreateInstance<CharacterStyleConfig>();
                AssetDatabase.CreateAsset(cfg, StyleConfigPath);
            }
            return cfg;
        }

        /// <summary>Create & assign a URP asset when the URP package is present.
        /// Reflection-based so the editor code still compiles on built-in RP.</summary>
        private static void TryAssignUrp()
        {
            if (UnityEngine.Rendering.GraphicsSettings.defaultRenderPipeline != null)
            {
                Debug.Log("[DHJ] Render pipeline already assigned: " +
                          UnityEngine.Rendering.GraphicsSettings.defaultRenderPipeline.GetType().Name);
                return;
            }
            var t = System.Type.GetType(
                "UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset, Unity.RenderPipelines.Universal.Runtime");
            if (t == null)
            {
                Debug.LogWarning("[DHJ] URP package not found — materials fall back to Standard shaders. " +
                                 "The project works either way.");
                return;
            }
            var create = t.GetMethod("Create", System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Static);
            UnityEngine.Rendering.RenderPipelineAsset rp = null;
            if (create != null && create.GetParameters().Length == 0)
                rp = (UnityEngine.Rendering.RenderPipelineAsset)create.Invoke(null, null);
            if (rp == null)
            {
                Debug.LogWarning("[DHJ] Could not construct URP asset via reflection; assign a pipeline manually.");
                return;
            }
            const string rpPath = "Assets/Data/Generated/DHJ_URP.asset";
            AssetDatabase.CreateAsset(rp, rpPath);
            // ensure the renderer sub-asset is persisted if the API exposed one
            UnityEngine.Rendering.GraphicsSettings.defaultRenderPipeline = rp;
            QualitySettings.renderPipeline = rp;
            Debug.Log("[DHJ] Assigned URP asset at " + rpPath);
        }

        private static void ConfigurePlayerSettings()
        {
            PlayerSettings.companyName = "SIH26096 Team";
            PlayerSettings.productName = "Ambedkar: The Digital Heritage Journey";
            try
            {
                PlayerSettings.SetApplicationIdentifier(
                    UnityEditor.Build.NamedBuildTarget.Android, "com.sih26096.team.ambedkardigitalheritage");
                PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;
                PlayerSettings.SetScriptingBackend(
                    UnityEditor.Build.NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
                PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel26;
                PlayerSettings.Android.targetSdkVersion = AndroidSdkVersions.AndroidApiLevelAuto;
                PlayerSettings.defaultInterfaceOrientation = UIOrientation.LandscapeLeft;
            }
            catch (System.Exception ex)
            {
                Debug.LogWarning("[DHJ] Android settings partial: " + ex.Message);
            }
        }
    }
}
