using UnityEngine;
using TMPro;
using DHJ.Core;

namespace DHJ.UI
{
    public class PauseScreen : FullScreenPanel
    {
        private RectTransform _content;

        protected override void BuildUI(RectTransform root)
        {
            _content = Window(root, new Vector2(560, 720), "");
        }

        public override void OnOpen() => Rebuild();

        private void Rebuild()
        {
            foreach (Transform c in _content) Object.Destroy(c.gameObject);
            var L = G.Localization;
            var bar = _content.parent.Find("titlebar/title");
            if (bar != null) bar.GetComponent<TextMeshProUGUI>().text = L.T("hud.menu");

            string[] keys =
            {
                "pause.resume", "pause.archive", "pause.map", "pause.objectives",
                "pause.settings", "pause.restart", "pause.mainmenu"
            };
            System.Action[] actions =
            {
                () => { ui.Pop(this); G.ResumeFromPause(); },
                () => { Time.timeScale = 1f; ui.ShowArchive(); },
                () => { Time.timeScale = 1f; ui.ShowMap(); },
                () => { G.Quests.Current != null ? ui.Toast(G.Quests.Current.brief) : ui.Toast(L.T("certificate.subtitle")); Time.timeScale = 1f; },
                () => ui.ShowSettings(),
                () => RestartCheckpoint(),
                () => { Time.timeScale = 1f; G.QuitToMainMenu(); }
            };

            int n = keys.Length;
            for (int i = 0; i < n; i++)
            {
                int idx = i;
                var rt = UIFactory.Rt(_content.gameObject, "b" + i,
                    new Vector2(0.05f, 1 - (i + 1f) / n), new Vector2(0.95f, 1 - (float)i / n),
                    new Vector2(0, 5), new Vector2(0, -5));
                UIFactory.Button(rt.gameObject, L.T(keys[i]), actions[idx],
                                 i == 0 ? UITheme.Gold : UITheme.PanelSoft, UITheme.Body, gold: i == 0);
            }
        }

        private void RestartCheckpoint()
        {
            // museum is hub-centric: returning to spawn is the checkpoint reset
            Time.timeScale = 1f;
            var spawn = GameObject.Find("PlayerSpawn");
            var pc = Object.FindObjectOfType<Player.PlayerController>();
            if (pc != null && spawn != null) pc.Teleport(spawn.transform.position, spawn.transform.eulerAngles.y);
            ui.Pop(this);
            G.ResumeFromPause();
        }
    }
}
