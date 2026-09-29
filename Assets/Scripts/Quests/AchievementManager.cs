using System.Collections.Generic;
using UnityEngine;
using DHJ.Core;

namespace DHJ.Quests
{
    public struct AchievementDef
    {
        public string Id, TitleKey, DescKey;
        public bool Hidden;
    }

    /// <summary>
    /// Achievement evaluation on top of EventBus signals + save data.
    /// Definitions are small and code-side; titles/descriptions live in localization.
    /// </summary>
    public class AchievementManager : MonoBehaviour
    {
        public static readonly AchievementDef[] Defs =
        {
            new() { Id = "first_exhibit",  TitleKey = "ach.first_exhibit",  DescKey = "ach.first_exhibit.desc" },
            new() { Id = "timeline_walker",TitleKey = "ach.timeline_walker",DescKey = "ach.timeline_walker.desc" },
            new() { Id = "book_lover",     TitleKey = "ach.book_lover",     DescKey = "ach.book_lover.desc" },
            new() { Id = "pilgrim",        TitleKey = "ach.pilgrim",        DescKey = "ach.pilgrim.desc" },
            new() { Id = "perfect_quiz",   TitleKey = "ach.perfect_quiz",   DescKey = "ach.perfect_quiz.desc" },
            new() { Id = "archivist",      TitleKey = "ach.archivist",      DescKey = "ach.archivist.desc" },
        };

        private static readonly string[] BookDesks = { "sc_rupee", "sc_aoc", "sc_shudras", "sc_buddha" };
        private static readonly string[] Memorials = { "mm_mhow", "mm_chaitya", "mm_deeksha", "mm_alipur", "mm_lucknow", "mm_london" };

        public void Initialize()
        {
            EventBus.Subscribe<ExhibitOpenedEvent>(_ => Evaluate());
            EventBus.Subscribe<QuizCompletedEvent>(e =>
            {
                if (e.QuizId == "quiz_final" && GameManager.I.Quizzes.IsPassed("quiz_final"))
                    TryUnlock("archivist");
            });
            EventBus.Subscribe<TimelineReadEvent>(_ => TryUnlock("timeline_walker"));
            Evaluate();
        }

        public void Evaluate()
        {
            var data = GameManager.I.Save.Data;
            if (data.discoveredExhibits.Count > 0) TryUnlock("first_exhibit");
            if (ContainsAll(data.discoveredExhibits, BookDesks)) TryUnlock("book_lover");
            if (ContainsAll(data.visitedMemorials, Memorials) || data.visitedMemorials.Count >= 6) TryUnlock("pilgrim");
        }

        private static bool ContainsAll(List<string> have, IEnumerable<string> need)
        {
            foreach (var n in need) if (!have.Contains(n)) return false;
            return true;
        }

        public bool TryUnlock(string id)
        {
            if (!GameManager.I.Save.UnlockAchievement(id)) return false;
            EventBus.Publish(new AchievementUnlockedEvent { AchievementId = id });
            GameManager.I.Save.AddPoints(15);
            return true;
        }

        public bool IsUnlocked(string id) => GameManager.I.Save.Data.achievements.Contains(id);

        public static AchievementDef? Find(string id)
        {
            foreach (var d in Defs) if (d.Id == id) return d;
            return null;
        }
    }

    public struct AchievementUnlockedEvent { public string AchievementId; }
    public struct TimelineReadEvent { public string ZoneId; }
}
