using System;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using DHJ.Core;

namespace DHJ.Save
{
    [Serializable]
    public class SaveData
    {
        public int version = 1;
        public string lastScene = "MuseumHub";
        public float px, py, pz;                 // last player position
        public bool playIntroOnHubEntry;
        public int knowledgePoints;
        public int currentMissionIndex;
        public List<string> completedMissions  = new();
        public List<string> discoveredExhibits = new();
        public List<string> collectedItems     = new();
        public List<string> visitedMemorials   = new();
        public List<string> unlockedDoors      = new() { "early_life", "social_reform" };
        public List<string> achievements       = new();
        public List<QuizResult> quizResults    = new();
        public float playSeconds;
    }

    [Serializable]
    public class QuizResult
    {
        public string quizId; public int bestScore; public int maxScore; public int attempts;
    }

    /// <summary>JSON save in persistentDataPath. Versioned, corruption-tolerant.</summary>
    public class SaveManager : MonoBehaviour
    {
        public SaveData Data { get; private set; } = new();
        public bool HasSave => File.Exists(Path);

        private string PathDir => Application.persistentDataPath;
        private string Path => System.IO.Path.Combine(PathDir, "heritage_save.json");
        private string BackupPath => Path + ".bak";

        private void Awake() => Load();

        public void NewGame()
        {
            Data = new SaveData();
            SaveNow();
        }

        public void Load()
        {
            Data = TryRead(Path) ?? TryRead(BackupPath) ?? new SaveData();
            Data.unlockedDoors ??= new List<string> { "early_life", "social_reform" };
            if (Data.unlockedDoors.Count == 0) Data.unlockedDoors.AddRange(new[] { "early_life", "social_reform" });
        }

        private SaveData TryRead(string p)
        {
            try
            {
                if (!File.Exists(p)) return null;
                var d = JsonUtility.FromJson<SaveData>(File.ReadAllText(p));
                return d != null && d.version >= 1 ? d : null;
            }
            catch (Exception ex)
            {
                Debug.LogWarning($"[Save] Corrupt save at {p}, trying backup. {ex.Message}");
                return null;
            }
        }

        public void SaveNow()
        {
            try
            {
                Data.playSeconds += Time.unscaledDeltaTime;
                if (File.Exists(Path)) File.Copy(Path, BackupPath, true);
                File.WriteAllText(Path, JsonUtility.ToJson(Data, true));
                EventBus.Publish(new SaveCompletedEvent());
            }
            catch (Exception ex)
            {
                Debug.LogWarning($"[Save] Failed to write save: {ex.Message}");
            }
        }

        public void TickAutosave() => SaveNow();

        // ------------------------------------------------------------ helpers
        public void AddPoints(int n) { Data.knowledgePoints += n; SaveNow(); }

        public bool DiscoverExhibit(string exhibitId)
        {
            if (string.IsNullOrEmpty(exhibitId) || Data.discoveredExhibits.Contains(exhibitId)) return false;
            Data.discoveredExhibits.Add(exhibitId);
            SaveNow();
            return true;
        }

        public bool Collect(string archiveId)
        {
            if (string.IsNullOrEmpty(archiveId) || Data.collectedItems.Contains(archiveId)) return false;
            Data.collectedItems.Add(archiveId);
            SaveNow();
            return true;
        }

        public bool VisitMemorial(string exhibitId)
        {
            if (string.IsNullOrEmpty(exhibitId) || Data.visitedMemorials.Contains(exhibitId)) return false;
            Data.visitedMemorials.Add(exhibitId);
            SaveNow();
            return true;
        }

        public bool UnlockDoor(string zoneId)
        {
            if (string.IsNullOrEmpty(zoneId) || Data.unlockedDoors.Contains(zoneId)) return false;
            Data.unlockedDoors.Add(zoneId);
            SaveNow();
            return true;
        }

        public bool UnlockAchievement(string id)
        {
            if (string.IsNullOrEmpty(id) || Data.achievements.Contains(id)) return false;
            Data.achievements.Add(id);
            SaveNow();
            return true;
        }

        public QuizResult RecordQuizResult(string quizId, int score, int maxScore)
        {
            var r = Data.quizResults.Find(q => q.quizId == quizId);
            if (r == null) { r = new QuizResult { quizId = quizId }; Data.quizResults.Add(r); }
            r.attempts++;
            r.maxScore = maxScore;
            if (score > r.bestScore) r.bestScore = score;
            SaveNow();
            return r;
        }

        public QuizResult GetQuizResult(string quizId) =>
            Data.quizResults.Find(q => q.quizId == quizId);

        public void SetPlayerPosition(Vector3 p, string scene)
        {
            Data.px = p.x; Data.py = p.y; Data.pz = p.z;
            Data.lastScene = scene;
        }
    }
}
