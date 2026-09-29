using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DHJ.Core;

namespace DHJ.UI
{
    /// <summary>
    /// Museum map: a schematic top-down view of the hub with the six gallery
    /// doors, completion states, objective highlight and player position.
    /// Generated programmatically from the same zone registry the builder uses.
    /// </summary>
    public class MapScreen : FullScreenPanel
    {
        private RectTransform _content;

        protected override void BuildUI(RectTransform root)
        {
            _content = Window(root, new Vector2(900, 860), "");
        }

        public override void OnOpen()
        {
            foreach (Transform c in _content) Object.Destroy(c.gameObject);
            var L = G.Localization;
            var bar = _content.parent.Find("titlebar/title");
            if (bar != null) bar.GetComponent<TextMeshProUGUI>().text = L.T("map.title");

            // floor schematic (rounded rectangle = hall)
            var hall = UIFactory.Rt(_content.gameObject, "hall",
                new Vector2(0.06f, 0.16f), new Vector2(0.94f, 0.90f), Vector2.zero, Vector2.zero);
            UIFactory.Panel(hall.gameObject, "bg", UITheme.BgInk);
            UIFactory.TextAt(hall.gameObject, "cap", "THE DIGITAL AMBEDKAR HERITAGE MUSEUM",
                UITheme.Small, UITheme.GoldDim, new Vector2(0, 0.02f), new Vector2(1, 0.12f),
                TextAlignmentOptions.Center, FontStyles.Bold);

            // central rotunda
            var rot = UIFactory.Rt(hall.gameObject, "rotunda", new Vector2(0.40f, 0.30f), new Vector2(0.60f, 0.62f),
                                   Vector2.zero, Vector2.zero);
            UIFactory.Img(rot.gameObject, "ring", AssetLibrary.I != null ? AssetLibrary.I.ringSprite : null, UITheme.GoldDim);

            // six door chips across the top of the hall (mirrors MuseumBuilder layout)
            string[] zoneIds = { "early_life", "social_reform", "constitution", "scholarship", "memorials", "legacy" };
            string currentObjectiveZone = CurrentObjectiveZone();
            bool inHub = UnityEngine.SceneManagement.SceneManager.GetActiveScene().name == "MuseumHub";

            for (int i = 0; i < zoneIds.Length; i++)
            {
                string zid = zoneIds[i];
                var zone = G.Content.GetZone(zid);
                bool unlocked = G.Quests.IsDoorUnlocked(zid);
                int discovered = CountZoneDiscovered(zid);
                bool isObjective = zid == currentObjectiveZone;

                float cx = 0.08f + 0.168f * i;
                var chip = UIFactory.Rt(hall.gameObject, "door_" + zid,
                    new Vector2(cx, 0.68f), new Vector2(cx + 0.148f, 0.98f), Vector2.zero, Vector2.zero);
                UIFactory.Panel(chip.gameObject, "bg",
                    isObjective ? new Color(0.55f, 0.44f, 0.20f, 0.95f)
                    : unlocked ? UITheme.PanelSoft : new Color(0.10f, 0.11f, 0.15f, 0.95f));
                UIFactory.TextAt(chip.gameObject, "num", $"DOOR {i + 1}", UITheme.Tiny, UITheme.Gold,
                    new Vector2(0, 0.78f), new Vector2(1, 0.98f), TextAlignmentOptions.Center, FontStyles.Bold);
                UIFactory.TextAt(chip.gameObject, "name", ShortenForMap(zone != null ? zone.title : zid),
                    UITheme.Tiny, unlocked ? UITheme.Cream : UITheme.Subtle,
                    new Vector2(0.02f, 0.30f), new Vector2(0.98f, 0.78f), TextAlignmentOptions.Center, FontStyles.Bold);
                string state = isObjective ? "◈ " + L.T("hud.objective") :
                    !unlocked ? "🔒" :
                    discovered > 0 ? $"✓ {discovered}/{zone?.exhibits.Count ?? 0}" : "○";
                UIFactory.TextAt(chip.gameObject, "state", state, UITheme.Tiny,
                    isObjective ? UITheme.Gold : unlocked ? UITheme.Correct : UITheme.Subtle,
                    new Vector2(0, 0.02f), new Vector2(1, 0.30f), TextAlignmentOptions.Center);
            }

            // player marker (hub only; galleries show gallery chip)
            if (inHub)
            {
                var player = Object.FindObjectOfType<Player.PlayerController>();
                if (player != null)
                {
                    var dot = UIFactory.Rt(hall.gameObject, "you", new Vector2(0, 0), new Vector2(0, 0),
                                           Vector2.zero, Vector2.zero);
                    // hub is 64 wide × 40 deep, centered at origin: map world->[0.05..0.95]
                    Vector3 p = player.transform.position;
                    float nx = Mathf.Clamp01((p.x + 32f) / 64f);
                    float nz = Mathf.Clamp01((18f - p.z) / 40f + 0.35f);
                    var rt = (RectTransform)dot;
                    rt.anchorMin = rt.anchorMax = new Vector2(nx, Mathf.Clamp(nz, 0.05f, 0.92f));
                    rt.sizeDelta = new Vector2(52, 52);
                    UIFactory.Img(dot.gameObject, "pin", AssetLibrary.I != null ? AssetLibrary.I.pinSprite : null, UITheme.Gold);
                    UIFactory.TextAt(dot.gameObject, "lbl", L.T("map.you"), UITheme.Tiny, UITheme.Gold,
                        new Vector2(-0.5f, -0.7f), new Vector2(1.5f, 0.2f), TextAlignmentOptions.Center, FontStyles.Bold);
                }
            }
            else
            {
                string scene = UnityEngine.SceneManagement.SceneManager.GetActiveScene().name;
                UIFactory.TextAt(_content.gameObject, "where", "◈ " + scene.Replace("Gallery_", "").Replace('_', ' ').ToUpperInvariant(),
                    UITheme.Small, UITheme.Gold, new Vector2(0, 0.02f), new Vector2(1, 0.12f), TextAlignmentOptions.Center);
            }
        }

        private string CurrentObjectiveZone()
        {
            var m = G.Quests.Current;
            if (m == null) return null;
            if (!string.IsNullOrEmpty(m.zone)) return m.zone;
            return m.id switch
            {
                "m1_enter" => "hub", "m5_archive" => "scholarship", "m6_memorials" => "memorials",
                "m7_legacy" or "m8_final" => "legacy", _ => null
            };
        }

        private int CountZoneDiscovered(string zoneId)
        {
            var zone = G.Content.GetZone(zoneId);
            if (zone == null) return 0;
            int n = 0;
            foreach (var e in zone.exhibits)
                if (G.Save.Data.discoveredExhibits.Contains(e.id)) n++;
            return n;
        }

        private static string ShortenForMap(string title)
        {
            return title
                .Replace(" & ", "\n& ")
                .Replace("BOOKS, MANUSCRIPTS & SCHOLARSHIP", "BOOKS &\nMANUSCRIPTS")
                .Replace("MEMORIALS & HISTORICAL PLACES", "MEMORIALS &\nPLACES")
                .Replace("LEGACY & DIGITAL ARCHIVE", "LEGACY &\nARCHIVE");
        }
    }
}
