using UnityEngine;

namespace DHJ.Core
{
    /// <summary>
    /// Scene-side glue: listens to gameplay events and drives HUD feedback —
    /// objective banners, achievement toasts, collection feedback.
    /// Present in every gameplay scene (added by SceneBuilder).
    /// </summary>
    public class GameplayWiring : MonoBehaviour
    {
        private UI.UIManager Ui => UI.UIManager.instance;

        private void Start()
        {
            EventBus.Subscribe<MissionStateChanged>(OnMission);
            EventBus.Subscribe<Quests.AchievementUnlockedEvent>(OnAchievement);
            EventBus.Subscribe<ArchiveItemCollected>(OnCollected);
            EventBus.Subscribe<PlayerZoneEntered>(_ => RefreshObjective());
            RefreshObjective();
        }

        private void OnDestroy()
        {
            EventBus.Unsubscribe<MissionStateChanged>(OnMission);
            EventBus.Unsubscribe<Quests.AchievementUnlockedEvent>(OnAchievement);
            EventBus.Unsubscribe<ArchiveItemCollected>(OnCollected);
        }

        private void OnMission(MissionStateChanged e)
        {
            if (e.Completed)
            {
                var m = GameManager.I.Content.GetMission(e.MissionId);
                Ui?.FlashObjectiveComplete(m != null ? m.title : e.MissionId);
                GameManager.I.Audio.PlaySfx(AudioSys.SfxId.Achievement, null, 0.7f);
            }
            RefreshObjective();
        }

        private void OnAchievement(Quests.AchievementUnlockedEvent e)
        {
            var def = Quests.AchievementManager.Find(e.AchievementId);
            if (def.HasValue)
            {
                GameManager.I.Audio.PlaySfx(AudioSys.SfxId.Achievement);
                Ui?.Toast($"{GameManager.I.Localization.T("toast.achievement")}: {GameManager.I.Localization.T(def.Value.TitleKey)}");
            }
        }

        private void OnCollected(ArchiveItemCollected e)
        {
            var item = GameManager.I.Content.GetArchiveItem(e.ArchiveId);
            if (item != null)
                Ui?.Toast($"{GameManager.I.Localization.T("toast.collected")}: {item.title}");
        }

        private void RefreshObjective()
        {
            if (Ui == null || GameManager.I.Quests == null) return;
            var m = GameManager.I.Quests.Current;
            if (m == null)
            {
                Ui.SetObjectiveBanner(GameManager.I.Localization.T("certificate.subtitle"));
                return;
            }
            string progress = "";
            if (m.count > 1)
            {
                int done = GameManager.I.Quests.ProgressOf(m);
                progress = $"  ({Mathf.Min(done, m.count)}/{m.count})";
            }
            Ui.SetObjectiveBanner(m.objective + progress);
        }
    }
}
