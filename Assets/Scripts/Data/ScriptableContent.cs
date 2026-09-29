using System.Collections.Generic;
using UnityEngine;
using DHJ.Data;

namespace DHJ.Data
{
    /// <summary>
    /// Designer-facing ScriptableObject mirrors of the JSON content (spec §38).
    /// The editor Content Importer generates these from StreamingAssets JSON so a
    /// content creator can add/edit entries as assets too. The runtime database
    /// (ContentDatabase) reads the JSON; bundles below are the expansion route.
    /// </summary>
    [CreateAssetMenu(fileName = "ArchiveItem", menuName = "DHJ/Content/Archive Item", order = 1)]
    public class ArchiveItemSO : ScriptableObject
    {
        public string id, title, category, period, date, location, author, source;
        [TextArea(3, 10)] public string description;
        public List<string> keywords = new();
        public MediaRef media = new();
        public List<string> related = new();

        public ArchiveItemDto ToDto() => new()
        {
            id = id, title = title, category = category, period = period, date = date,
            location = location, author = author, source = source, description = description,
            keywords = new List<string>(keywords), media = media, related = new List<string>(related)
        };
    }

    [CreateAssetMenu(fileName = "Quiz", menuName = "DHJ/Content/Quiz", order = 2)]
    public class QuizSO : ScriptableObject
    {
        public string id, title, zone;
        [TextArea] public string intro;
        public List<QuestionDto> questions = new();

        public QuizDto ToDto() => new()
        { id = id, title = title, zone = zone, intro = intro, questions = new List<QuestionDto>(questions) };
    }

    [CreateAssetMenu(fileName = "Mission", menuName = "DHJ/Content/Mission", order = 3)]
    public class MissionSO : ScriptableObject
    {
        public string id, title, objective;
        [TextArea] public string brief;
        public string type = "Interact";
        public string targetId, zone, quizId;
        public int count = 1, xp = 20;

        public MissionDto ToDto() => new()
        {
            id = id, title = title, brief = brief, objective = objective, type = type,
            targetId = targetId, zone = zone, quizId = quizId, count = count, xp = xp
        };
    }

    /// <summary>Logical visual identity of the main character. The supplied
    /// character sheet is converted into these values; the 3D character is then
    /// GENERATED from this config so it stays consistent everywhere (spec §54).</summary>
    [CreateAssetMenu(fileName = "AmbedkarStyle", menuName = "DHJ/Character Style Config", order = 0)]
    public class CharacterStyleConfig : ScriptableObject
    {
        [Header("Identity — from the reference sheet")]
        public Color skinTone = new(0.45f, 0.32f, 0.24f);
        public Color hairColor = new(0.05f, 0.045f, 0.05f);
        public bool hasMustache = true;
        public bool hasGlasses = true;
        public Color glassesFrameColor = new(0.10f, 0.09f, 0.08f);
        [Tooltip("Round, thin-rimmed spectacles as seen in the reference.")]
        public float glassesLensRadius = 0.030f;

        [Header("Outfit")]
        public Color suitColor = new(0.11f, 0.14f, 0.26f);      // deep navy
        public Color shirtColor = new(0.93f, 0.93f, 0.94f);     // white
        public Color tieColor = new(0.55f, 0.18f, 0.20f);       // patterned red
        public Color trouserColor = new(0.10f, 0.12f, 0.22f);
        public Color shoeColor = new(0.05f, 0.045f, 0.05f);     // black
        public Color skinShade = new(0.42f, 0.30f, 0.22f);

        [Header("Proportions")]
        public float height = 1.72f;
        [Range(0.85f, 1.2f)] public float build = 1.0f;         // overall breadth
        [Range(0.9f, 1.1f)]  public float headScale = 1.0f;
    }
}
