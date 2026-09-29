using System.Collections.Generic;
using UnityEngine;
using DHJ.Core;
using DHJ.Quests;

namespace DHJ.Interaction
{
    /// <summary>
    /// One panel of a walkable timeline wall. Reading it records discovery;
    /// reading every panel of the zone unlocks the Timeline Walker achievement.
    /// </summary>
    public class TimelinePanelInteractable : Interactable
    {
        public string panelId;             // e.g. "tl_early_life_3"
        public string zoneId;
        public string year, text;
        public List<string> allZonePanelIds = new();

        public override string Prompt => "Read the timeline";

        public override void Interact(GameObject player)
        {
            GameManager.I.Audio.PlaySfx(AudioSys.SfxId.PageTurn, transform.position);
            bool first = GameManager.I.Save.DiscoverExhibit(panelId);
            EventBus.Publish(new ExhibitOpenedEvent { ExhibitId = panelId, ArchiveId = "" });
            if (first) GameManager.I.Save.AddPoints(3);

            UI.UIManager.instance?.ShowInfo($"{year}", text);

            if (!string.IsNullOrEmpty(zoneId) && allZonePanelIds.Count > 0)
            {
                foreach (var id in allZonePanelIds)
                    if (!GameManager.I.Save.Data.discoveredExhibits.Contains(id)) return;
                EventBus.Publish(new TimelineReadEvent { ZoneId = zoneId });
            }
        }
    }
}
