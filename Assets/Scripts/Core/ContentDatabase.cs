using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using DHJ.Data;

namespace DHJ.Core
{
    /// <summary>
    /// Loads every JSON content file from StreamingAssets (works on Android too
    /// via UnityWebRequest) and exposes typed registries + lookups.
    /// This is the single read path for all educational content.
    /// </summary>
    public class ContentDatabase : MonoBehaviour
    {
        public bool Loaded { get; private set; }
        public List<string> LoadErrors { get; } = new List<string>();

        private readonly Dictionary<string, ArchiveItemDto> _archive = new();
        private readonly Dictionary<string, QuizDto>        _quizzes = new();
        private readonly Dictionary<string, MissionDto>     _missions = new();
        private readonly Dictionary<string, ZoneDto>        _zones = new();
        private readonly List<MissionDto> _missionOrder = new();

        public IEnumerable<ArchiveItemDto> AllArchiveItems => _archive.Values;
        public IEnumerable<MissionDto> MissionsInOrder => _missionOrder;
        public IEnumerable<ZoneDto> Zones => _zones.Values;

        public IEnumerator LoadAll()
        {
            Loaded = false; LoadErrors.Clear();
            yield return LoadJsonInto("Content/archive_items.json", (ArchiveItemListDto d) =>
            { foreach (var it in d.items) if (ValidId(it?.id)) _archive[it.id] = it; });
            yield return LoadJsonInto("Content/quizzes.json", (QuizListDto d) =>
            { foreach (var q in d.quizzes) if (ValidId(q?.id)) _quizzes[q.id] = q; });
            yield return LoadJsonInto("Content/missions.json", (MissionListDto d) =>
            { foreach (var m in d.missions) if (ValidId(m?.id)) { _missions[m.id] = m; _missionOrder.Add(m); } });
            yield return LoadJsonInto("Content/exhibits.json", (ZoneListDto d) =>
            { foreach (var z in d.zones) if (ValidId(z?.zoneId)) _zones[z.zoneId] = z; });
            ValidateReferences();
            Loaded = true;
            Debug.Log($"[Content] Loaded {_archive.Count} archive items, {_quizzes.Count} quizzes, " +
                      $"{_missions.Count} missions, {_zones.Count} zones. Errors: {LoadErrors.Count}");
        }

        private static bool ValidId(string id) => !string.IsNullOrEmpty(id);

        private void ValidateReferences()
        {
            foreach (var m in _missions.Values)
            {
                if (!string.IsNullOrEmpty(m.quizId) && !_quizzes.ContainsKey(m.quizId))
                    LoadErrors.Add($"Mission {m.id} references missing quiz {m.quizId}");
                if (!string.IsNullOrEmpty(m.zone) && !_zones.ContainsKey(m.zone))
                    LoadErrors.Add($"Mission {m.id} references missing zone {m.zone}");
            }
            foreach (var z in _zones.Values)
                foreach (var e in z.exhibits)
                {
                    if (!string.IsNullOrEmpty(e.archiveId) && !_archive.ContainsKey(e.archiveId))
                        LoadErrors.Add($"Exhibit {e.id} references missing archive item {e.archiveId}");
                    if (!string.IsNullOrEmpty(e.quizId) && !_quizzes.ContainsKey(e.quizId))
                        LoadErrors.Add($"Exhibit {e.id} references missing quiz {e.quizId}");
                }
            foreach (var a in _archive.Values)
                foreach (var r in a.related ?? new List<string>())
                    if (!_archive.ContainsKey(r))
                        LoadErrors.Add($"Archive item {a.id} references missing related item {r}");
        }

        private delegate void Fill<T>(T dto);

        private IEnumerator LoadJsonInto<T>(string relative, Fill<T> fill)
        {
            string path = System.IO.Path.Combine(Application.streamingAssetsPath, relative);
            string json = null;

#if UNITY_ANDROID && !UNITY_EDITOR
            using var req = UnityWebRequest.Get(path);
            yield return req.SendWebRequest();
            if (req.result == UnityWebRequest.Result.Success) json = req.downloadHandler.text;
            else LoadErrors.Add($"Cannot read {relative}: {req.error}");
#else
            if (System.IO.File.Exists(path))
            {
                try { json = System.IO.File.ReadAllText(path); }
                catch (System.Exception ex) { LoadErrors.Add($"Cannot read {relative}: {ex.Message}"); }
            }
            else LoadErrors.Add($"Missing content file: {relative}");
            yield return null;
#endif
            if (json == null) yield break;
            try { fill(JsonUtility.FromJson<T>(json)); }
            catch (System.Exception ex) { LoadErrors.Add($"Parse error in {relative}: {ex.Message}"); }
        }

        public ArchiveItemDto GetArchiveItem(string id)
        {
            if (id != null && _archive.TryGetValue(id, out var v)) return v;
            return null;
        }

        public QuizDto   GetQuiz(string id)    => id != null && _quizzes.TryGetValue(id, out var v) ? v : null;
        public MissionDto GetMission(string id) => id != null && _missions.TryGetValue(id, out var v) ? v : null;
        public ZoneDto   GetZone(string id)    => id != null && _zones.TryGetValue(id, out var v) ? v : null;

        public string[] Categories()
        {
            var set = new SortedSet<string>();
            foreach (var a in _archive.Values) if (!string.IsNullOrEmpty(a.category)) set.Add(a.category);
            var arr = new string[set.Count]; set.CopyTo(arr); return arr;
        }
    }
}
