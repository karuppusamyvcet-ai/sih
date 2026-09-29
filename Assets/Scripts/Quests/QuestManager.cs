using System.Collections.Generic;
using UnityEngine;
using DHJ.Core;
using DHJ.Data;

namespace DHJ.Quests
{
    /// <summary>
    /// Mission chain: 8 ordered missions. Progress is advanced by gameplay events;
    /// completing a mission grants XP, unlocks the next door, and fires UI banners.
    /// </summary>
    public class QuestManager : MonoBehaviour
    {
        private List<MissionDto> _order = new();
        private readonly Dictionary<string, int> _counters = new();

        public MissionDto Current { get; private set; }
        public bool AllComplete => Current == null && GameManager.I.Save.Data.completedMissions.Count >= _order.Count;

        public void Initialize()
        {
            _order = new List<MissionDto>(GameManager.I.Content.MissionsInOrder);
            RecomputeCurrent();
            EventBus.Subscribe<ExhibitOpenedEvent>(OnExhibit);
            EventBus.Subscribe<QuizCompletedEvent>(OnQuiz);
            EventBus.Subscribe<ArchiveSearchedEvent>(OnSearch);
            EventBus.Subscribe<MemorialVisitedEvent>(OnMemorial);
            EventBus.Subscribe<AssistantAskedEvent>(OnAssistant);
        }

        private void RecomputeCurrent()
        {
            var done = GameManager.I.Save.Data.completedMissions;
            Current = null;
            foreach (var m in _order)
                if (!done.Contains(m.id)) { Current = m; break; }
            GameManager.I.Save.Data.currentMissionIndex =
                Current == null ? _order.Count : _order.IndexOf(Current);
        }

        private void OnExhibit(ExhibitOpenedEvent e)
        {
            if (Current == null) return;
            switch (Current.Type)
            {
                case MissionType.Interact when e.ExhibitId == Current.targetId: Complete(Current); break;
                case MissionType.DiscoverExhibits: Bump(Current); break;
            }
        }

        private void OnQuiz(QuizCompletedEvent e)
        {
            if (Current == null) return;
            if (Current.Type == MissionType.CompleteQuiz && e.QuizId == Current.quizId
                && GameManager.I.Quizzes.IsPassed(e.QuizId))
                Complete(Current);
        }

        private void OnSearch(ArchiveSearchedEvent e)
        {
            if (Current is { Type: MissionType.SearchArchive } && e.Results > 0 && !string.IsNullOrWhiteSpace(e.Query))
                Complete(Current);
        }

        private void OnMemorial(MemorialVisitedEvent e)
        {
            if (Current is { Type: MissionType.VisitMemorials }) Bump(Current);
        }

        private void OnAssistant(AssistantAskedEvent e)
        {
            if (Current is { Type: MissionType.AskAssistant }) Complete(Current);
        }

        private void Bump(MissionDto m)
        {
            int count = m.Type switch
            {
                MissionType.DiscoverExhibits => CountDiscoveredInZone(m.zone),
                MissionType.VisitMemorials   => GameManager.I.Save.Data.visitedMemorials.Count,
                _ => 1
            };
            _counters[m.id] = count;
            EventBus.Publish(new MissionStateChanged { MissionId = m.id, Completed = false });
            if (count >= Mathf.Max(1, m.count)) Complete(m);
        }

        private int CountDiscoveredInZone(string zoneId)
        {
            var zone = GameManager.I.Content.GetZone(zoneId);
            if (zone == null) return 0;
            int n = 0;
            foreach (var ex in zone.exhibits)
                if (GameManager.I.Save.Data.discoveredExhibits.Contains(ex.id)) n++;
            return n;
        }

        public int ProgressOf(MissionDto m) => _counters.TryGetValue(m.id, out var c) ? c : CountDiscoveredInZone(m.zone);

        private void Complete(MissionDto m)
        {
            if (GameManager.I.Save.Data.completedMissions.Contains(m.id)) return;
            GameManager.I.Save.Data.completedMissions.Add(m.id);
            GameManager.I.Save.AddPoints(m.xp);
            UnlockNextDoor(m);
            EventBus.Publish(new MissionStateChanged { MissionId = m.id, Completed = true });
            RecomputeCurrent();
            GameManager.I.Save.SaveNow();
        }

        private void UnlockNextDoor(MissionDto justCompleted)
        {
            // Door map: completing mission n unlocks its following gallery door.
            string door = justCompleted.id switch
            {
                "m1_enter"        => "early_life",
                "m2_earlylife"    => "constitution",
                "m3_reform"       => "scholarship",
                "m4_constitution" => "memorials",
                "m5_archive"      => "legacy",
                _ => null
            };
            if (door != null) GameManager.I.Save.UnlockDoor(door);
        }

        public bool IsDoorUnlocked(string zoneId)
        {
            if (GameManager.I.PresentationMode) return true;
            return GameManager.I.Save.Data.unlockedDoors.Contains(zoneId);
        }

        public (int done, int total) Summary() => (GameManager.I.Save.Data.completedMissions.Count, _order.Count);
    }
}
