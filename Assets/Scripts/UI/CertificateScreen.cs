using UnityEngine;
using TMPro;
using DHJ.Core;

namespace DHJ.UI
{
    /// <summary>End-of-journey certificate + stats dashboard (spec §46, §68 #10).</summary>
    public class CertificateScreen : FullScreenPanel
    {
        private RectTransform _content;

        protected override void BuildUI(RectTransform root)
        {
            _content = Window(root, new Vector2(1000, 840), "");
        }

        public override void OnOpen()
        {
            foreach (Transform c in _content) Object.Destroy(c.gameObject);
            var L = G.Localization;
            G.Audio.PlaySfx(AudioSys.SfxId.Achievement);
            var bar = _content.parent.Find("titlebar/title");
            if (bar != null) bar.GetComponent<TextMeshProUGUI>().text = L.T("certificate.title");

            UIFactory.TextAt(_content.gameObject, "sub", L.T("certificate.subtitle"),
                UITheme.Body, UITheme.Cream, new Vector2(0, 0.86f), new Vector2(1, 0.95f), TextAlignmentOptions.Center);

            // ornate certificate panel
            var cert = UIFactory.Rt(_content.gameObject, "cert", new Vector2(0.10f, 0.30f), new Vector2(0.90f, 0.84f),
                                    Vector2.zero, Vector2.zero);
            UIFactory.Panel(cert.gameObject, "bg", new Color(0.16f, 0.14f, 0.10f, 0.98f));
            UIFactory.TextAt(cert.gameObject, "seal", "◆", 72, UITheme.Gold,
                new Vector2(0, 0.62f), new Vector2(1, 0.94f), TextAlignmentOptions.Center);
            UIFactory.TextAt(cert.gameObject, "rank", L.T("certificate.rank"),
                UITheme.Title, UITheme.Gold, new Vector2(0, 0.40f), new Vector2(1, 0.62f),
                TextAlignmentOptions.Center, FontStyles.Bold);
            UIFactory.TextAt(cert.gameObject, "sub2", "SMART INDIA HACKATHON 2026 · SIH26096 · " +
                "Digital Heritage Journey", UITheme.Tiny, UITheme.Subtle,
                new Vector2(0, 0.30f), new Vector2(1, 0.42f), TextAlignmentOptions.Center);

            // stats grid
            var save = G.Save.Data;
            int quizzesDone = 0, quizScore = 0, quizMax = 0;
            foreach (var r in save.quizResults)
            {
                if (r.attempts > 0) quizzesDone++;
                quizScore += r.bestScore; quizMax += r.maxScore;
            }
            var (missionsDone, missionsTotal) = G.Quests.Summary();
            int zones = 0;
            foreach (var z in new[] { "early_life", "social_reform", "constitution", "scholarship", "memorials", "legacy" })
                if (ZoneCompleted(z)) zones++;

            string[,] stats =
            {
                { L.T("certificate.exhibits"),  save.discoveredExhibits.Count.ToString() },
                { L.T("certificate.items"),     save.collectedItems.Count.ToString() },
                { L.T("certificate.score"),     $"{quizScore} / {quizMax}" },
                { L.T("certificate.points"),    save.knowledgePoints.ToString() },
                { L.T("certificate.galleries"), $"{zones} / 6" },
                { "Missions",                    $"{missionsDone} / {missionsTotal}" },
            };

            var grid = UIFactory.Rt(_content.gameObject, "stats", new Vector2(0.14f, 0.04f), new Vector2(0.86f, 0.28f),
                                    Vector2.zero, Vector2.zero);
            for (int i = 0; i < 6; i++)
            {
                int col = i % 3, row = i / 3;
                var cell = UIFactory.Rt(grid.gameObject, "s" + i,
                    new Vector2(col / 3f + 0.008f, 1 - (row + 1) / 2f + 0.03f),
                    new Vector2((col + 1) / 3f - 0.008f, 1 - row / 2f - 0.03f), Vector2.zero, Vector2.zero);
                UIFactory.Panel(cell.gameObject, "bg", UITheme.PanelSoft);
                UIFactory.TextAt(cell.gameObject, "v", stats[i, 1], UITheme.H2, UITheme.Gold,
                    new Vector2(0, 0.42f), new Vector2(1, 0.98f), TextAlignmentOptions.Center, FontStyles.Bold);
                UIFactory.TextAt(cell.gameObject, "k", stats[i, 0], UITheme.Tiny, UITheme.Cream,
                    new Vector2(0, 0.02f), new Vector2(1, 0.42f), TextAlignmentOptions.Center);
            }
        }

        private bool ZoneCompleted(string zoneId)
        {
            var zone = G.Content.GetZone(zoneId);
            if (zone == null) return false;
            int need = Mathf.Min(2, zone.exhibits.Count), have = 0;
            foreach (var e in zone.exhibits)
                if (G.Save.Data.discoveredExhibits.Contains(e.id)) have++;
            return have >= need;
        }
    }
}
