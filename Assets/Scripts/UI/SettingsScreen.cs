using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DHJ.Core;

namespace DHJ.UI
{
    /// <summary>Complete settings: audio / display / controls / accessibility / language.</summary>
    public class SettingsScreen : FullScreenPanel
    {
        private RectTransform _content;

        protected override void BuildUI(RectTransform root)
        {
            _content = Window(root, new Vector2(1100, 860), "");
        }

        public override void OnOpen()
        {
            foreach (Transform c in _content) Object.Destroy(c.gameObject);
            var L = G.Localization;
            var S = G.Settings.Data;
            SetTitle(L.T("settings.title"));

            var (scroll, list) = UIFactory.Scroll(_content.gameObject);

            void Section(string title)
            {
                var row = UIFactory.ListRow(list, "sec", 44);
                UIFactory.Text(row.gameObject, "t", title, UITheme.Small, UITheme.Gold,
                               TextAlignmentOptions.BottomLeft, FontStyles.Bold);
            }

            void SliderRow(string label, float v, float min, float max, System.Action<float> set)
            {
                var row = UIFactory.ListRow(list, "sl_" + label, 52);
                UIFactory.SliderRow(row.gameObject, label, v, min, max, set);
            }

            void ToggleRow(string label, bool v, System.Action<bool> set)
            {
                var row = UIFactory.ListRow(list, "tg_" + label, 52);
                UIFactory.ToggleRow(row.gameObject, label, v, set);
            }

            void ChoiceRow(string label, string[] options, int current, System.Action<int> set)
            {
                var row = UIFactory.ListRow(list, "ch_" + label, 56);
                UIFactory.TextAt(row.gameObject, "lbl", label, UITheme.Body, UITheme.Cream,
                                 new Vector2(0, 0), new Vector2(0.34f, 1), TextAlignmentOptions.MidlineLeft);
                float w = 0.66f / options.Length;
                for (int i = 0; i < options.Length; i++)
                {
                    int idx = i;
                    var rt = UIFactory.Rt(row.gameObject, "opt" + i,
                        new Vector2(0.34f + w * i + 0.006f, 0.08f), new Vector2(0.34f + w * (i + 1) - 0.006f, 0.92f),
                        Vector2.zero, Vector2.zero);
                    bool active = i == current;
                    var b = UIFactory.Button(rt.gameObject, options[i], () =>
                        { set(idx); OnOpen(); }, active ? UITheme.Gold : UITheme.PanelSoft, UITheme.Small, gold: active);
                    AnchorFull((RectTransform)b.transform);
                }
            }

            // ---------------- audio
            Section(L.T("settings.audio"));
            SliderRow(L.T("settings.master"), S.master, 0, 1, v => { S.master = v; G.Audio.ApplyVolumes(); G.Settings.SaveNow(); });
            SliderRow(L.T("settings.music"),  S.music,  0, 1, v => { S.music  = v; G.Audio.ApplyVolumes(); G.Settings.SaveNow(); });
            SliderRow(L.T("settings.voice"),  S.voice,  0, 1, v => { S.voice  = v; G.Audio.ApplyVolumes(); G.Settings.SaveNow(); });
            SliderRow(L.T("settings.sfx"),    S.sfx,    0, 1, v => { S.sfx    = v; G.Audio.ApplyVolumes(); G.Settings.SaveNow(); });

            // ---------------- display
            Section(L.T("settings.display"));
            bool mobile = Application.isMobilePlatform;
            if (mobile)
                ChoiceRow(L.T("settings.quality"),
                    new[] { L.T("settings.quality.low"), L.T("settings.quality.medium"), L.T("settings.quality.high") },
                    Mathf.Clamp(S.qualityLevel, 0, 2), i => { G.Settings.ApplyQuality(i); G.Settings.SaveNow(); });
            else
                ChoiceRow(L.T("settings.quality"),
                    new[] { L.T("settings.quality.low"), L.T("settings.quality.medium"), L.T("settings.quality.high"), L.T("settings.quality.ultra") },
                    Mathf.Clamp(S.qualityLevel, 0, 3), i => { G.Settings.ApplyQuality(i); G.Settings.SaveNow(); });

            if (!mobile)
            {
                var res = Screen.resolutions;
                string[] resNames = new string[res.Length];
                for (int i = 0; i < res.Length; i++) resNames[i] = $"{res[i].width}×{res[i].height}";
                if (res.Length > 0 && res.Length <= 6)
                    ChoiceRow(L.T("settings.resolution"), resNames, Mathf.Clamp(S.resolutionIndex, 0, res.Length - 1), i =>
                    {
                        S.resolutionIndex = i;
                        Screen.SetResolution(res[i].width, res[i].height, Screen.fullScreenMode);
                        G.Settings.SaveNow();
                        OnOpen();
                    });
                ToggleRow(L.T("settings.fullscreen"), Screen.fullScreenMode != FullScreenMode.Windowed, v =>
                {
                    Screen.fullScreenMode = v ? FullScreenMode.FullScreenWindow : FullScreenMode.Windowed;
                    S.fullscreenMode = (int)Screen.fullScreenMode; G.Settings.SaveNow();
                    OnOpen();
                });
                ToggleRow(L.T("settings.vsync"), S.vsync, v =>
                {
                    S.vsync = v; QualitySettings.vSyncCount = v ? 1 : 0; G.Settings.SaveNow();
                });
            }

            // ---------------- controls
            Section(L.T("settings.controls"));
            SliderRow(L.T("settings.sensitivity"), S.sensitivity, 0.3f, 2.5f, v => { S.sensitivity = v; G.Settings.SaveNow(); });
            if (mobile)
                SliderRow(L.T("settings.sensitivity") + " (touch)", S.touchSensitivity, 0.3f, 2.5f, v => { S.touchSensitivity = v; G.Settings.SaveNow(); });
            ToggleRow(L.T("settings.inverty"), S.invertY, v => { S.invertY = v; G.Settings.SaveNow(); });

            // ---------------- accessibility
            Section(L.T("settings.accessibility"));
            ToggleRow(L.T("settings.subtitles"), S.subtitles, v => { S.subtitles = v; G.Settings.ApplyAccessibility(); });
            ToggleRow(L.T("settings.highcontrast"), S.highContrast, v =>
            { S.highContrast = v; G.Settings.ApplyAccessibility(); RebuildAllPanels(); ui.ShowSettings(); });
            ToggleRow(L.T("settings.reducedfx"), S.reducedFx, v => { S.reducedFx = v; G.Settings.ApplyAccessibility(); });
            ToggleRow(L.T("settings.subtitles") + " / " + "voice narration", S.narration, v => { S.narration = v; G.Settings.ApplyAccessibility(); });
            ChoiceRow(L.T("settings.textsize"), new[] { "S", "M", "L", "XL" },
                S.textScale < 0.95f ? 0 : S.textScale < 1.1f ? 1 : S.textScale < 1.3f ? 2 : 3,
                i => { S.textScale = new[] { 0.85f, 1f, 1.2f, 1.4f }[i]; G.Settings.ApplyAccessibility(); OnOpen(); });

            // ---------------- language
            Section(L.T("settings.language"));
            var langs = G.Localization.Available;
            string[] names = new string[langs.Count];
            int current = 0;
            for (int i = 0; i < langs.Count; i++)
            {
                names[i] = langs[i].displayName;
                if (langs[i].code == G.Localization.Current) current = i;
            }
            ChoiceRow(L.T("settings.language"), names, current, i =>
            {
                S.language = langs[i].code;
                G.Localization.SetLanguage(langs[i].code);
                G.Settings.SaveNow();
                RebuildAllPanels();
                ui.ShowSettings();
            });
        }

        private void RebuildAllPanels() => ui.InvalidatePanels();

        private void SetTitle(string t)
        {
            var bar = _content.parent.Find("titlebar/title");
            if (bar != null) bar.GetComponent<TextMeshProUGUI>().text = t;
        }

        private static void AnchorFull(RectTransform rt)
        {
            rt.anchorMin = Vector2.zero; rt.anchorMax = Vector2.one;
            rt.offsetMin = Vector2.zero; rt.offsetMax = Vector2.zero;
        }
    }
}
