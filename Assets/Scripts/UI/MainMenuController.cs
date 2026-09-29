using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DHJ.Core;

namespace DHJ.UI
{
    /// <summary>
    /// Main menu (built over a slowly orbiting museum vignette): title block,
    /// NEW JOURNEY / CONTINUE / ARCHIVE / PRESENTATION MODE / SETTINGS / CREDITS / EXIT,
    /// plus the SIH credits sheet with editable team placeholders.
    /// </summary>
    public class MainMenuController : MonoBehaviour
    {
        private UIManager _ui;
        private GameObject _menuRoot, _creditsPanel, _confirmPanel;

        private void Start()
        {
            _ui = UIManager.instance;
            if (_ui == null) { Debug.LogError("[Menu] UIManager missing"); return; }
            GameManager.I.SetState(GameState.MainMenu);
            Build();
        }

        private void Build()
        {
            var L = GameManager.I.Localization;
            bool touch = GameManager.I.IsTouchPlatform;

            _menuRoot = UIFactory.Stretch(_ui.canvas.gameObject, "MainMenu").gameObject;

            // left vignette gradient behind menu column
            var shade = UIFactory.Rt(_menuRoot, "shade", new Vector2(0, 0), new Vector2(0.42f, 1),
                                     Vector2.zero, Vector2.zero);
            UIFactory.Img(shade.gameObject, "i", null, new Color(0.03f, 0.04f, 0.08f, 0.88f));

            // title block
            var title = UIFactory.Rt(_menuRoot, "title", new Vector2(0, 0.66f), new Vector2(0.42f, 0.98f),
                                     new Vector2(40, 0), new Vector2(-16, -16));
            UIFactory.TextAt(title.gameObject, "t1", "AMBEDKAR", UITheme.Title + 14, UITheme.Cream,
                             Vector2.zero, Vector2.one, TextAlignmentOptions.TopLeft, FontStyles.Bold);
            var t2 = UIFactory.TextAt(title.gameObject, "t2", L.T("app.title").Replace("AMBEDKAR:", ""),
                UITheme.H2, UITheme.Gold, new Vector2(0, 0), new Vector2(1, 0.72f),
                TextAlignmentOptions.TopLeft, FontStyles.Bold);
            t2.characterSpacing = 4;
            var t3 = UIFactory.TextAt(title.gameObject, "t3", L.T("app.subtitle"),
                UITheme.Body, UITheme.Subtle, new Vector2(0, 0), new Vector2(1, 0.30f), TextAlignmentOptions.TopLeft);
            // gold rule
            var rule = UIFactory.Rt(title.gameObject, "rule", new Vector2(0, 0.46f), new Vector2(0.7f, 0.475f),
                                    Vector2.zero, Vector2.zero);
            UIFactory.Img(rule.gameObject, "r", null, UITheme.Gold);

            // buttons column
            var col = UIFactory.Rt(_menuRoot, "buttons", new Vector2(0, 0.06f), new Vector2(0.30f, 0.60f),
                                   new Vector2(40, 0), new Vector2(0, 0));
            bool hasSave = GameManager.I.Save.HasSave && GameManager.I.Save.Data.playSeconds > 0f;

            (string label, System.Action act, bool enabled, bool gold)[] buttons =
            {
                (L.T("menu.new"),         () => TryNewGame(),                               true,    true),
                (L.T("menu.continue"),    () => GameManager.I.ContinueJourney(),            hasSave, false),
                (L.T("menu.archive"),     () => _ui.ShowArchive(),                          true,    false),
                (L.T("menu.presentation"),() => StartPresentation(),                        true,    false),
                (L.T("menu.settings"),    () => _ui.ShowSettings(),                         true,    false),
                (L.T("menu.credits"),     ShowCredits,                                      true,    false),
                (L.T("menu.exit") ?? "EXIT", () => GameManager.I.QuitGame(),                !touch,  false),
            };

            for (int i = 0; i < buttons.Length; i++)
            {
                var (label, act, enabled, gold) = buttons[i];
                if (!enabled && label == L.T("menu.exit")) continue;
                float rowH = 1f / buttons.Length;
                var rt = UIFactory.Rt(col.gameObject, "b" + i,
                    new Vector2(0, 1 - (i + 1) * rowH), new Vector2(1, 1 - i * rowH),
                    new Vector2(0, 8), new Vector2(0, -8));
                var b = UIFactory.Button(rt.gameObject, label, act,
                    gold ? UITheme.Gold : new Color(0.10f, 0.125f, 0.21f, 0.82f),
                    UITheme.Body, gold: gold);
                b.interactable = enabled;
                if (!enabled) b.GetComponent<Image>().color = new Color(0.1f, 0.11f, 0.15f, 0.5f);
            }

            // footer
            UIFactory.TextAt(_menuRoot, "footer",
                "SIH26096 · Smart Education · Ministry of Social Justice & Empowerment\nTeam: [TEAM NAME] · Institution: [INSTITUTION] — edit in Documentation/TeamCredits.md",
                UITheme.Tiny, new Color(1, 1, 1, 0.45f), new Vector2(0, 0), new Vector2(0.6f, 0.05f),
                TextAlignmentOptions.BottomLeft).margin = new Vector4(40, 0, 0, 6);
        }

        private void TryNewGame()
        {
            if (GameManager.I.Save.HasSave && GameManager.I.Save.Data.playSeconds > 1f)
                ShowConfirm();
            else { GameManager.I.PresentationMode = false; GameManager.I.NewJourney(); }
        }

        private void ShowConfirm()
        {
            var L = GameManager.I.Localization;
            _confirmPanel = UIFactory.Stretch(_ui.canvas.gameObject, "confirm").gameObject;
            UIFactory.Img(_confirmPanel, "scrim", null, UITheme.Scrim);
            var win = UIFactory.Rt(_confirmPanel, "win", new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f),
                                   new Vector2(-300, -110), new Vector2(300, 110));
            UIFactory.Panel(win.gameObject, "bg");
            UIFactory.TextAt(win.gameObject, "msg", L.T("confirm.newgame"), UITheme.Body, UITheme.Cream,
                new Vector2(0.06f, 0.45f), new Vector2(0.94f, 0.95f), TextAlignmentOptions.Center);
            var yes = UIFactory.Button(win.gameObject, L.T("confirm.yes"), () =>
            {
                Destroy(_confirmPanel);
                GameManager.I.PresentationMode = false;
                GameManager.I.NewJourney();
            }, gold: true);
            var yrt = (RectTransform)yes.transform;
            yrt.anchorMin = new Vector2(0.06f, 0.08f); yrt.anchorMax = new Vector2(0.47f, 0.38f);
            yrt.offsetMin = Vector2.zero; yrt.offsetMax = Vector2.zero;
            var no = UIFactory.Button(win.gameObject, L.T("confirm.no"), () => Destroy(_confirmPanel));
            var nrt = (RectTransform)no.transform;
            nrt.anchorMin = new Vector2(0.53f, 0.08f); nrt.anchorMax = new Vector2(0.94f, 0.38f);
            nrt.offsetMin = Vector2.zero; nrt.offsetMax = Vector2.zero;
        }

        private void StartPresentation()
        {
            GameManager.I.PresentationMode = true;
            GameManager.I.NewJourney();
        }

        private void ShowCredits()
        {
            var L = GameManager.I.Localization;
            _creditsPanel = UIFactory.Stretch(_ui.canvas.gameObject, "credits").gameObject;
            UIFactory.Img(_creditsPanel, "scrim", null, new Color(0.02f, 0.03f, 0.06f, 0.96f));
            var win = UIFactory.Rt(_creditsPanel, "win", new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f),
                                   new Vector2(-420, -320), new Vector2(420, 320));
            UIFactory.Panel(win.gameObject, "bg");

            string body =
                "AMBEDKAR: THE DIGITAL HERITAGE JOURNEY\n" +
                "──────────────────────────────\n" +
                "Smart India Hackathon 2026 · Problem SIH26096\n" +
                "Theme: Smart Education\n" +
                "Organization: Ministry of Social Justice & Empowerment\n\n" +
                "Team Name:      [TEAM NAME]\n" +
                "Institution:    [INSTITUTION]\n" +
                "Team Members:   [MEMBERS]\n" +
                "Mentor:         [MENTOR]\n" +
                "Department:     [DEPARTMENT]\n\n" +
                "Technology: Unity 2022 LTS · C# · URP · TextMeshPro\n" +
                "All art, audio and imagery in this prototype are procedural /\n" +
                "original assets generated by the project's content pipeline.\n" +
                "Historical text is sourced from public records and cited\n" +
                "in every archive entry. Reconstructions are labelled.\n\n" +
                "Content pipeline & credits: Documentation/ and Tools/AssetGen/";

            var t = UIFactory.TextAt(win.gameObject, "body", body, UITheme.Small, UITheme.Cream,
                new Vector2(0.06f, 0.12f), new Vector2(0.94f, 0.96f), TextAlignmentOptions.TopLeft);
            var back = UIFactory.Button(win.gameObject, L.T("credits.back"), () => Destroy(_creditsPanel));
            var brt = (RectTransform)back.transform;
            brt.anchorMin = new Vector2(0.3f, 0.015f); brt.anchorMax = new Vector2(0.7f, 0.1f);
            brt.offsetMin = Vector2.zero; brt.offsetMax = Vector2.zero;
        }
    }
}
