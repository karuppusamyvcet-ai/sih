using System;
using System.Collections.Generic;

namespace DHJ.Data
{
    // DTOs are JsonUtility-compatible mirrors of the StreamingAssets JSON.
    // Designer-facing ScriptableObjects (Assets/Scripts/Data/*SO.cs) are generated
    // from these by the editor Content Importer for teams that prefer asset-based
    // editing; the JSON remains the runtime source of truth for this deliverable.

    [Serializable] public class MediaRef
    {
        public string type = "Text";
        public string @ref = "";
        public string label = "";
    }

    [Serializable] public class ArchiveItemDto
    {
        public string id, title, category, period, date, location, author, source, description;
        public List<string> keywords = new();
        public MediaRef media;
        public List<string> related = new();
    }
    [Serializable] public class ArchiveItemListDto { public List<ArchiveItemDto> items = new(); }

    public enum QuestionType { MultipleChoice, TrueFalse, Ordering, Matching }

    [Serializable] public class PairDto { public string left, right; }

    [Serializable] public class QuestionDto
    {
        public string type = "MultipleChoice";
        public string question;
        public List<string> answers = new();
        public int correctIndex;
        public List<int> correctOrder = new();
        public List<PairDto> pairs = new();
        public string explanation, source;
        public int points = 10;

        public QuestionType Type
        {
            get
            {
                return Enum.TryParse(type, true, out QuestionType t) ? t : QuestionType.MultipleChoice;
            }
        }
    }

    [Serializable] public class QuizDto
    {
        public string id, title, zone, intro;
        public List<QuestionDto> questions = new();
    }
    [Serializable] public class QuizListDto { public List<QuizDto> quizzes = new(); }

    public enum MissionType { Interact, DiscoverExhibits, CompleteQuiz, SearchArchive, VisitMemorials, AskAssistant }

    [Serializable] public class MissionDto
    {
        public string id, title, brief, objective;
        public string type = "Interact";
        public string targetId, zone, quizId;
        public int count = 1;
        public int xp = 20;

        public MissionType Type => Enum.TryParse(type, true, out MissionType t) ? t : MissionType.Interact;
    }
    [Serializable] public class MissionListDto { public List<MissionDto> missions = new(); }

    public enum ExhibitKind { Pedestal, WallPanel, DisplayCase, QuizKiosk, BookDesk, ArchiveTerminal, AIConsole, ConstitutionTable, MonumentDiorama, GuideKiosk }

    [Serializable] public class ExhibitDto
    {
        public string id, archiveId, title;
        public string kind = "Pedestal";
        public string quizId, diorama;
        public ExhibitKind Kind => Enum.TryParse(kind, true, out ExhibitKind k) ? k : ExhibitKind.Pedestal;
    }

    [Serializable] public class TimelineEntryDto { public string year, text; }

    [Serializable] public class ZoneDto
    {
        public string zoneId, title;
        public List<ExhibitDto> exhibits = new();
        public List<TimelineEntryDto> timeline = new();
    }
    [Serializable] public class ZoneListDto { public List<ZoneDto> zones = new(); }
}
