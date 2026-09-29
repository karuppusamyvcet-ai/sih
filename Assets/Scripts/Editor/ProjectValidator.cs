using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEngine;
using UnityEditor;
using DHJ.Data;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Project-wide validation checklist (menu DHJ ▸ Validate Project).
    /// Verifies scenes, build settings, content JSON integrity, cross-references,
    /// generated art/audio presence, localization tables and the player prefab.
    /// </summary>
    public static class ProjectValidator
    {
        [MenuItem("DHJ/4 · Validate Project (full checklist)", false, 40)]
        public static bool Validate()
        {
            int pass = 0, fail = 0;
            void Check(bool ok, string label, string fix = null)
            {
                if (ok) { pass++; Debug.Log($"  ✅ {label}"); }
                else { fail++; Debug.LogError($"  ❌ {label}" + (fix != null ? $"  → {fix}" : "")); }
            }

            Debug.Log("════════ DHJ PROJECT VALIDATION ════════");

            // --- scenes
            foreach (var n in SceneBuilder.SceneNames)
                Check(File.Exists($"Assets/Scenes/{n}.unity"), $"scene exists: {n}", "run DHJ ▸ Build All Scenes");
            var bs = EditorBuildSettings.scenes;
            Check(bs.Length == SceneBuilder.SceneNames.Length && bs.All(s => s.enabled),
                $"build settings register all {SceneBuilder.SceneNames.Length} scenes", "run DHJ ▸ Build All Scenes");

            // --- player + animation
            Check(AssetDatabase.LoadAssetAtPath<GameObject>(CharacterFactory.PrefabPath) != null,
                "player prefab exists", "run DHJ ▸ 2 · Build Everything");
            Check(AssetDatabase.LoadAssetAtPath<RuntimeAnimatorController>(
                "Assets/Animations/AmbedkarAnimator.controller") != null,
                "animator controller exists", "run DHJ ▸ 2 · Build Everything");

            // --- content JSONs parse
            var zones = MuseumBuilder.LoadZones();
            Check(zones.Count == 6, "exhibits.json holds exactly 6 zones");
            var archive = LoadJson<ArchiveItemListDto>("archive_items.json");
            var quizzes = LoadJson<QuizListDto>("quizzes.json");
            var missions = LoadJson<MissionListDto>("missions.json");
            Check(archive != null && archive.items.Count >= 25, $"archive DB has {archive?.items?.Count ?? 0} items (≥25)");
            Check(quizzes != null && quizzes.quizzes.Count == 4, "quizzes.json has 4 quizzes");
            Check(missions != null && missions.missions.Count == 8, "missions.json has 8 missions");

            // --- archive integrity & cross references
            var ids = new HashSet<string>(archive?.items?.Where(i => !string.IsNullOrEmpty(i.id)).Select(i => i.id) ?? Enumerable.Empty<string>());
            Check(ids.Count == archive?.items?.Count, "archive ids unique");
            if (archive != null)
            {
                int missingSource = archive.items.Count(i =>
                    string.IsNullOrEmpty(i.source) || string.IsNullOrEmpty(i.date) || string.IsNullOrEmpty(i.description));
                Check(missingSource == 0, "every archive item has source/date/description", $"{missingSource} items incomplete");
            }
            var exhibitIds = new HashSet<string>(
                zones.Values.SelectMany(z => z.exhibits.Select(e => e.id)))
            {
                "kiosk_guide", "hub_terminal"   // placed directly by MuseumBuilder in the hub
            };
            if (missions != null && quizzes != null)
                foreach (var m in missions.missions)
                {
                    if (m.Type == MissionType.CompleteQuiz && !string.IsNullOrEmpty(m.quizId))
                        Check(quizzes.quizzes.Any(q => q.id == m.quizId),
                            $"mission {m.id} quiz '{m.quizId}' exists");
                    if (m.Type == MissionType.Interact && !string.IsNullOrEmpty(m.targetId))
                        Check(exhibitIds.Contains(m.targetId),
                            $"mission {m.id} interact target '{m.targetId}' is a placed exhibit",
                            "add it in MuseumBuilder hub or a zone in exhibits.json");
                    if (!string.IsNullOrEmpty(m.zone))
                        Check(zones.ContainsKey(m.zone), $"mission {m.id} zone '{m.zone}' exists");
                }
            foreach (var z in zones.Values)
                foreach (var e in z.exhibits)
                {
                    if (!string.IsNullOrEmpty(e.archiveId))
                        Check(ids.Contains(e.archiveId), $"exhibit {e.id} archive target '{e.archiveId}' exists");
                    if (!string.IsNullOrEmpty(e.quizId))
                        Check(quizzes?.quizzes.Any(q => q.id == e.quizId) == true, $"exhibit {e.id} quiz '{e.quizId}' exists");
                }

            // --- generated art & audio
            foreach (var t in new[] { "marble_cream", "marble_blue", "sandstone_wall", "wood_warm", "wood_dark",
                                      "ceiling_coffer", "carpet_heritage", "floor_medallion", "parchment" })
                Check(File.Exists($"Assets/Art/Textures/{t}.png"), $"texture {t}.png");
            foreach (var u in new[] { "ui_rounded", "ui_rounded_soft", "ui_rounded_gold", "ui_circle", "ui_ring",
                                      "ui_arrow", "ui_glow", "ui_pin" })
                Check(File.Exists($"Assets/Art/UI/{u}.png"), $"UI sprite {u}.png");
            Check(File.Exists("Assets/Art/Images/portrait_ambedkar_art.png"), "portrait artwork");
            foreach (var a in new[] { "SFX/ui_click", "SFX/quiz_correct", "SFX/door_open", "SFX/page_turn",
                                      "SFX/pickup", "SFX/footstep_stone", "SFX/achievement",
                                      "Music/museum_theme_loop", "Ambience/hall_ambience_loop" })
                Check(File.Exists($"Assets/Audio/{a}.wav"), $"audio {a}.wav");

            // --- localization
            foreach (var l in new[] { "en", "hi", "ta" })
                Check(File.Exists($"Assets/StreamingAssets/Localization/{l}.json"), $"localization {l}.json");

            // --- player settings
            Check(PlayerSettings.productName == "Ambedkar: The Digital Heritage Journey",
                "product name set", "run DHJ ▸ 1 · Prepare Project");
            Check(PlayerSettings.colorSpace == ColorSpace.Linear, "linear color space", "run DHJ ▸ 1 · Prepare Project");

            Debug.Log($"════════ RESULT: {pass} passed, {fail} failed ════════");
            if (fail == 0) Debug.Log("🎓 Project validation PASSED — ready to build.");
            return fail == 0;
        }

        private static T LoadJson<T>(string file)
        {
            string path = Path.Combine(Application.streamingAssetsPath, "Content", file);
            try { return JsonUtility.FromJson<T>(File.ReadAllText(path)); }
            catch (System.Exception ex) { Debug.LogError($"[DHJ] cannot parse {file}: {ex.Message}"); return default; }
        }
    }
}
