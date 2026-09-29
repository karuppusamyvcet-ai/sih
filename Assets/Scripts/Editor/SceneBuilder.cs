using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;

namespace DHJ.EditorTools
{
    /// <summary>Creates/saves every game scene and registers build settings.</summary>
    public static class SceneBuilder
    {
        public const string SceneDir = "Assets/Scenes";

        public static readonly string[] SceneNames =
        {
            "Boot", "MainMenu", "MuseumHub",
            "Gallery_EarlyLife", "Gallery_SocialReform", "Gallery_Constitution",
            "Gallery_Scholarship", "Gallery_Memorials", "Gallery_Legacy"
        };

        [MenuItem("DHJ/2 · Build Everything (scenes, character, animations)", false, 20)]
        public static void BuildAllScenes()
        {
            EnsureScenePrerequisites();
            Directory.CreateDirectory(SceneDir);

            BuildOne("Boot", MuseumBuilder.BuildBootScene);
            BuildOne("MainMenu", MuseumBuilder.BuildMenuScene);
            BuildOne("MuseumHub", MuseumBuilder.BuildHubScene);

            var zones = MuseumBuilder.LoadZones();
            foreach (var kv in MuseumBuilder.ZoneScenes)
            {
                if (!zones.TryGetValue(kv.Key, out var zone)) { Debug.LogError($"[DHJ] zone '{kv.Key}' missing from exhibits.json"); continue; }
                string sceneName = kv.Value;
                BuildOne(sceneName, s => MuseumBuilder.BuildGalleryScene(s, zone));
            }

            var buildScenes = new List<EditorBuildSettingsScene>();
            foreach (var n in SceneNames)
            {
                string path = $"{SceneDir}/{n}.unity";
                if (File.Exists(path)) buildScenes.Add(new EditorBuildSettingsScene(path, true));
            }
            EditorBuildSettings.scenes = buildScenes.ToArray();
            AssetDatabase.SaveAssets();
            Debug.Log($"[DHJ] ✅ All scenes built and registered ({buildScenes.Count} in build settings).");
        }

        [MenuItem("DHJ/2 · Rebuild Scenes (content JSON changed)", false, 21)]
        public static void RebuildFromContent() => BuildAllScenes();

        private static void BuildOne(string name, System.Action<UnityEngine.SceneManagement.Scene> builder)
        {
            var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);
            builder(scene);
            string path = $"{SceneDir}/{name}.unity";
            EditorSceneManager.SaveScene(scene, path);
            Debug.Log($"[DHJ] scene built: {path}");
        }

        /// <summary>Makes sure every asset the scenes reference exists first.</summary>
        private static void EnsureScenePrerequisites()
        {
            AssetDatabase.Refresh();   // AssetImportRules post-processor applies import settings
            var cfg = DHJBootstrap.EnsureStyleConfig();
            if (AssetDatabase.LoadAssetAtPath<GameObject>(CharacterFactory.PrefabPath) == null)
                CharacterFactory.BuildPlayerPrefab(cfg);
            AnimationFactory.EnsureController();
            AssetDatabase.SaveAssets();
        }
    }
}
