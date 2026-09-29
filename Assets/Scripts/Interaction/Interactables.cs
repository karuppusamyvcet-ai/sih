using UnityEngine;
using DHJ.Core;
using DHJ.Data;
using DHJ.Player;

namespace DHJ.Interaction
{
    public interface IInteractable
    {
        string Prompt { get; }
        bool CanInteract { get; }
        void Interact(GameObject player);
    }

    /// <summary>Base for all interactables (implements IInteractable for future extensibility).</summary>
    [RequireComponent(typeof(Collider))]
    public abstract class Interactable : MonoBehaviour, IInteractable
    {
        [TextArea] public string customPrompt;
        public virtual string Prompt => string.IsNullOrEmpty(customPrompt) ? "Interact" : customPrompt;
        public virtual bool CanInteract => enabled;
        public abstract void Interact(GameObject player);

        protected static Animator Anim(GameObject player) => player.GetComponentInChildren<Animator>();

        protected void OrientAndExpress(GameObject player, int animTrigger,
            CharacterRealismDriver.ExpressionState expression = CharacterRealismDriver.ExpressionState.Attentive)
        {
            if (player == null) return;
            player.GetComponent<PlayerController>()?.FaceTowards(transform.position);
            player.GetComponent<CharacterRealismDriver>()?.TriggerExpression(expression, 4.0f);
            CharacterAnimatorDriver.Trigger(Anim(player), animTrigger);
        }
    }

    /// <summary>
    /// The museum's most important object: routes interact to the right system
    /// depending on exhibit kind (panel/case/desk/table/terminal/kiosk/diorama/guide).
    /// </summary>
    public class ExhibitInteractable : Interactable
    {
        public string exhibitId;
        public string archiveId;
        public ExhibitKind kind = ExhibitKind.Pedestal;
        public string quizId;

        public override string Prompt => kind switch
        {
            ExhibitKind.QuizKiosk         => "Take the Challenge",
            ExhibitKind.ArchiveTerminal   => "Use the Archive Terminal",
            ExhibitKind.AIConsole         => "Ask the Archive Guide",
            ExhibitKind.BookDesk          => "Open the Book",
            ExhibitKind.ConstitutionTable => "Read the Preamble",
            ExhibitKind.MonumentDiorama   => "View the Memorial",
            ExhibitKind.GuideKiosk        => "Talk to the Archive Guide",
            ExhibitKind.DisplayCase       => "Examine the Display",
            _                             => "Examine"
        };

        public override void Interact(GameObject player)
        {
            if (GameManager.I.State != GameState.Playing) return;
            GameManager.I.Audio.PlaySfx(AudioSys.SfxId.ExhibitOpen, transform.position);

            bool isReading = kind == ExhibitKind.BookDesk || kind == ExhibitKind.ConstitutionTable;
            bool isGuide   = kind == ExhibitKind.AIConsole || kind == ExhibitKind.GuideKiosk;

            OrientAndExpress(player,
                isReading ? CharacterAnimatorDriver.Read :
                isGuide   ? CharacterAnimatorDriver.Talk :
                            CharacterAnimatorDriver.Examine,
                isReading ? CharacterRealismDriver.ExpressionState.Reading :
                isGuide   ? CharacterRealismDriver.ExpressionState.Speaking :
                            CharacterRealismDriver.ExpressionState.Attentive);

            if (!string.IsNullOrEmpty(exhibitId))
            {
                bool first = GameManager.I.Save.DiscoverExhibit(exhibitId);
                EventBus.Publish(new ExhibitOpenedEvent { ExhibitId = exhibitId, ArchiveId = archiveId });
                if (first) GameManager.I.Save.AddPoints(8);
                if (!string.IsNullOrEmpty(archiveId)) GameManager.I.Archive.CollectIfNew(archiveId);
                if (kind == ExhibitKind.MonumentDiorama)
                {
                    if (GameManager.I.Save.VisitMemorial(exhibitId))
                        EventBus.Publish(new MemorialVisitedEvent { ExhibitId = exhibitId });
                }
            }

            var ui = UI.UIManager.instance;
            switch (kind)
            {
                case ExhibitKind.QuizKiosk:       ui.ShowQuiz(quizId); break;
                case ExhibitKind.ArchiveTerminal: ui.ShowArchive(openSearch: true); break;
                case ExhibitKind.AIConsole:       ui.ShowAssistant(); break;
                case ExhibitKind.GuideKiosk:      ui.ShowAssistant(); break;
                default:                          ui.ShowExhibit(exhibitId, archiveId); break;
            }
        }
    }

    /// <summary>Floating collectible knowledge artifact in the world.</summary>
    public class CollectibleInteractable : Interactable
    {
        public string archiveId;
        public float bobAmplitude = 0.08f, spinSpeed = 40f;
        private Vector3 _start;

        public override string Prompt => "Collect Archival Record";

        private void Start()
        {
            _start = transform.position;
            if (!string.IsNullOrEmpty(archiveId) &&
                GameManager.I.Save.Data.collectedItems.Contains(archiveId))
                gameObject.SetActive(false);
        }

        private void Update()
        {
            var fx = GameManager.I != null && GameManager.I.Settings.Data.reducedFx;
            if (fx) return;
            transform.Rotate(0, spinSpeed * Time.deltaTime, 0, Space.World);
            transform.position = _start + Vector3.up * (Mathf.Sin(Time.time * 1.6f) * bobAmplitude);
        }

        public override void Interact(GameObject player)
        {
            GameManager.I.Audio.PlaySfx(AudioSys.SfxId.Pickup, transform.position);
            if (GameManager.I.Archive.CollectIfNew(archiveId))
            {
                UI.UIManager.instance?.Toast(LocalizationMessage("toast.collected"));
            }
            OrientAndExpress(player, CharacterAnimatorDriver.Interact, CharacterRealismDriver.ExpressionState.Respectful);
            gameObject.SetActive(false);
        }

        protected static string LocalizationMessage(string key) =>
            GameManager.I.Localization != null ? GameManager.I.Localization.T(key) : key;
    }
}
