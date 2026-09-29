using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using TMPro;
using DHJ.Core;
using DHJ.Player;

namespace DHJ.UI
{
    /// <summary>
    /// Gameplay HUD: objective banner, knowledge points, interaction prompt,
    /// subtitles, toasts, and (on touch platforms) the full touch control scheme.
    /// </summary>
    public class HUDController : MonoBehaviour
    {
        private UIManager _ui;
        private TextMeshProUGUI _objectiveText, _pointsText, _toastText, _subtitleText, _promptText, _galleryCompassText;
        private GameObject _promptGo, _bannerGo;
        private CanvasGroup _toastCg, _subtitleCg, _bannerCg;
        private RectTransform _banner;
        private Coroutine _toastCo, _subtitleCo, _bannerCo;

        // touch
        private VirtualStick _stick;
        private LookZone _look;
        private GameObject _interactBtn;

        public static HUDController Create(UIManager ui)
        {
            var go = new GameObject("HUD", typeof(RectTransform));
            var rt = (RectTransform)go.transform;
            rt.SetParent(ui.canvas.transform, false);
            rt.anchorMin = Vector2.zero; rt.anchorMax = Vector2.one;
            rt.offsetMin = Vector2.zero; rt.offsetMax = Vector2.zero;
            var hud = go.AddComponent<HUDController>();
            hud._ui = ui;
            hud.Build(rt);
            return hud;
        }

        private void Build(RectTransform root)
        {
            var L = GameManager.I.Localization;
            bool touch = GameManager.I.IsTouchPlatform;

            // ---- top-left: curatorial objective plaque --------
            _banner = UIFactory.Rt(gameObject, "objective", new Vector2(0, 1), new Vector2(0, 1),
                                   new Vector2(20, -118), new Vector2(440, -20));
            var bannerPanel = UIFactory.Panel(_banner.gameObject, "bg", UITheme.BgInk);
            if (AssetLibrary.I != null && AssetLibrary.I.roundedGold != null)
                UIFactory.Img(_banner.gameObject, "frame", AssetLibrary.I.roundedGold, new Color(1, 1, 1, 0.72f), Image.Type.Sliced).raycastTarget = false;
            var accentBar = UIFactory.Rt(_banner.gameObject, "accent", new Vector2(0, 0.14f), new Vector2(0, 0.86f), new Vector2(8, 0), new Vector2(12, 0));
            UIFactory.Img(accentBar.gameObject, "bar", null, UITheme.Gold);
            _bannerCg = bannerPanel.gameObject.AddComponent<CanvasGroup>();
            var eyebrow = UIFactory.TextAt(_banner.gameObject, "eyebrow", "◈  " + L.T("hud.objective").ToUpperInvariant(), UITheme.Tiny,
                             UITheme.Gold, new Vector2(0, 0.62f), new Vector2(1, 1f), TextAlignmentOptions.MidlineLeft, FontStyles.Bold);
            eyebrow.characterSpacing = 4f;
            eyebrow.margin = new Vector4(22, 4, 12, 0);
            _objectiveText = UIFactory.TextAt(_banner.gameObject, "text", "—", UITheme.Small, UITheme.Cream,
                                              new Vector2(0, 0), new Vector2(1, 0.64f));
            _objectiveText.margin = new Vector4(22, 2, 12, 6);

            // ---- top-center: gallery wing & compass header ----
            var topCenter = UIFactory.Rt(gameObject, "galleryHeader", new Vector2(0.5f, 1), new Vector2(0.5f, 1),
                                         new Vector2(-240, -64), new Vector2(240, -20));
            UIFactory.Panel(topCenter.gameObject, "bg", UITheme.BgInk);
            if (AssetLibrary.I != null && AssetLibrary.I.roundedGold != null)
                UIFactory.Img(topCenter.gameObject, "frame", AssetLibrary.I.roundedGold, new Color(1, 1, 1, 0.55f), Image.Type.Sliced).raycastTarget = false;
            _galleryCompassText = UIFactory.TextAt(topCenter.gameObject, "t", "GRAND ROTUNDA HALL  ·  N", UITheme.Tiny,
                                                   UITheme.Cream, Vector2.zero, Vector2.one, TextAlignmentOptions.Center, FontStyles.Bold);
            _galleryCompassText.characterSpacing = 3.5f;

            // ---- top-right: points + buttons -------------------
            var topRight = UIFactory.Rt(gameObject, "topright", new Vector2(1, 1), new Vector2(1, 1),
                                        new Vector2(-470, -76), new Vector2(-20, -20));
            var kpPanel = UIFactory.Panel(topRight.gameObject, "kp", UITheme.BgInk);
            ((RectTransform)kpPanel.transform).anchorMax = new Vector2(0.52f, 1);
            ((RectTransform)kpPanel.transform).offsetMax = Vector2.zero;
            if (AssetLibrary.I != null && AssetLibrary.I.roundedGold != null)
                UIFactory.Img(kpPanel.gameObject, "frame", AssetLibrary.I.roundedGold, new Color(1, 1, 1, 0.65f), Image.Type.Sliced).raycastTarget = false;
            _pointsText = UIFactory.TextAt(kpPanel.gameObject, "t", "✦ 0", UITheme.Body, UITheme.Gold,
                                           Vector2.zero, Vector2.one, TextAlignmentOptions.Center, FontStyles.Bold);

            RectTransform Slot(int i) => UIFactory.Rt(topRight.gameObject, $"slot{i}",
                new Vector2(0.56f + 0.145f * i, 0.08f), new Vector2(0.56f + 0.145f * i + 0.13f, 0.92f),
                Vector2.zero, Vector2.zero);
            var mapBtn = UIFactory.Button(Slot(0).gameObject, L.T("hud.map"), () => _ui.ShowMap(), UITheme.PanelSoft, UITheme.Small);
            var archBtn = UIFactory.Button(Slot(1).gameObject, L.T("hud.archive"), () => _ui.ShowArchive(), UITheme.PanelSoft, UITheme.Small);
            var menuBtn = UIFactory.Button(Slot(2).gameObject, L.T("hud.menu"), () =>
            {
                GameManager.I.SetState(GameState.Paused);
                Time.timeScale = 0f;
                _ui.ShowPause();
            }, UITheme.PanelSoft, UITheme.Small);

            // ---- bottom-center: engraved museum interact prompt ----
            _promptGo = new GameObject("prompt", typeof(RectTransform));
            var prt = (RectTransform)_promptGo.transform;
            prt.SetParent(transform, false);
            prt.anchorMin = new Vector2(0.5f, 0); prt.anchorMax = new Vector2(0.5f, 0);
            prt.offsetMin = new Vector2(-250, touch ? 190 : 88);
            prt.offsetMax = new Vector2(250, touch ? 248 : 146);
            UIFactory.Panel(_promptGo, "bg", UITheme.BgInk);
            if (AssetLibrary.I != null && AssetLibrary.I.roundedGold != null)
                UIFactory.Img(_promptGo, "frame", AssetLibrary.I.roundedGold, new Color(1, 1, 1, 0.92f), Image.Type.Sliced).raycastTarget = false;
            var keycapRt = UIFactory.Rt(_promptGo, "keycap", new Vector2(0, 0.15f), new Vector2(0, 0.85f), new Vector2(12, 0), new Vector2(54, 0));
            UIFactory.Panel(keycapRt.gameObject, "kbg", UITheme.Gold);
            UIFactory.TextAt(keycapRt.gameObject, "klbl", "E", UITheme.Body, new Color(0.08f, 0.07f, 0.04f),
                             Vector2.zero, Vector2.one, TextAlignmentOptions.Center, FontStyles.Bold);
            _promptText = UIFactory.TextAt(_promptGo, "t", "Interact", UITheme.Body,
                                           UITheme.Cream, new Vector2(0, 0), new Vector2(1, 1),
                                           TextAlignmentOptions.MidlineLeft, FontStyles.Bold);
            _promptText.margin = new Vector4(68, 0, 16, 0);
            _promptGo.SetActive(false);

            // ---- bottom-left: toast ----------------------------
            var toastRt = UIFactory.Rt(gameObject, "toast", new Vector2(0, 0), new Vector2(0, 0),
                                       new Vector2(20, 90), new Vector2(430, 150));
            var tp = UIFactory.Panel(toastRt.gameObject, "bg", UITheme.PanelSoft);
            _toastCg = tp.gameObject.AddComponent<CanvasGroup>();
            _toastCg.alpha = 0;
            _toastText = UIFactory.TextAt(tp.gameObject, "t", "", UITheme.Small, UITheme.Cream,
                                          Vector2.zero, Vector2.one, TextAlignmentOptions.MidlineLeft);
            _toastText.margin = new Vector4(16, 0, 8, 0);

            // ---- bottom-center: subtitles -----------------------
            var subRt = UIFactory.Rt(gameObject, "subtitles", new Vector2(0.5f, 0), new Vector2(0.5f, 0),
                                     new Vector2(-560, touch ? 260 : 24), new Vector2(560, touch ? 360 : 84));
            var sp = UIFactory.Panel(subRt.gameObject, "bg", new Color(0, 0, 0, 0.78f));
            _subtitleCg = sp.gameObject.AddComponent<CanvasGroup>();
            _subtitleCg.alpha = 0;
            _subtitleText = UIFactory.TextAt(sp.gameObject, "t", "", UITheme.Body, UITheme.White,
                                             Vector2.zero, Vector2.one, TextAlignmentOptions.Center);
            _subtitleText.margin = new Vector4(20, 0, 20, 0);

            if (touch) BuildTouch(root);
            else EventSystemKeyboardHint(root);
        }

        private void EventSystemKeyboardHint(RectTransform root)
        {
            var hint = UIFactory.Rt(gameObject, "keys", new Vector2(0.5f, 0), new Vector2(0.5f, 0),
                                    new Vector2(-380, 6), new Vector2(380, 30));
            var t = hint.gameObject.AddComponent<TextMeshProUGUI>();
            t.text = "W A S D — Move    ·    Mouse — Camera    ·    E — Interact    ·    TAB — Archive    ·    ESC — Menu";
            t.fontSize = UITheme.FontSize(UITheme.Tiny);
            t.color = new Color(1, 1, 1, 0.4f);
            t.alignment = TextAlignmentOptions.Center;
            if (AssetLibrary.I != null && AssetLibrary.I.mainFont != null) t.font = AssetLibrary.I.mainFont;
        }

        // ---------------------------------------------------------------- touch
        private void BuildTouch(RectTransform root)
        {
            // joystick (left)
            var joy = UIFactory.Rt(gameObject, "joystick", new Vector2(0, 0), new Vector2(0, 0),
                                   new Vector2(36, 36), new Vector2(36 + 260, 36 + 260));
            _stick = joy.gameObject.AddComponent<VirtualStick>();

            // look zone (right half)
            var look = UIFactory.Rt(gameObject, "lookzone", new Vector2(0.45f, 0), new Vector2(1, 0.8f),
                                    Vector2.zero, Vector2.zero);
            _look = look.gameObject.AddComponent<LookZone>();
            var li = look.gameObject.AddComponent<Image>();
            li.color = new Color(0, 0, 0, 0.0f); li.raycastTarget = true;

            // buttons (right column)
            Button TouchBtn(string name, string label, Vector2 min, Vector2 max, System.Action onClick,
                            Color? color = null)
            {
                var rt = UIFactory.Rt(gameObject, name, new Vector2(1, 0), new Vector2(1, 0), min, max);
                return UIFactory.Button(rt.gameObject, label, onClick, color ?? new Color(0.83f, 0.66f, 0.3f, 0.85f),
                                        UITheme.Small, gold: false);
            }

            _interactBtn = TouchBtn("btnInteract", "INTERACT",
                new Vector2(-330, 40), new Vector2(-180, 120),
                () => GameInput.InjectInteract());
            TouchBtn("btnJump", "JUMP", new Vector2(-160, 40), new Vector2(-30, 120),
                     () => GameInput.InjectJump(), new Color(0.16f, 0.19f, 0.30f, 0.85f));
            TouchBtn("btnRun", "RUN", new Vector2(-160, 136), new Vector2(-30, 210),
                     ToggleRun, new Color(0.16f, 0.19f, 0.30f, 0.85f));
            TouchBtn("btnArchive", "ARCHIVE", new Vector2(-330, 136), new Vector2(-180, 210),
                     () => _ui.ShowArchive(), new Color(0.16f, 0.19f, 0.30f, 0.85f));
            TouchBtn("btnMap", "MAP", new Vector2(-330, 226), new Vector2(-180, 300),
                     () => _ui.ShowMap(), new Color(0.16f, 0.19f, 0.30f, 0.85f));
            TouchBtn("btnMenu", "≡", new Vector2(-86, 320), new Vector2(-20, 370), () =>
            {
                GameManager.I.SetState(GameState.Paused);
                Time.timeScale = 0f;
                _ui.ShowPause();
            }, new Color(0.16f, 0.19f, 0.30f, 0.85f));
        }

        private void ToggleRun()
        {
            GameInput.TouchRunHeld = !GameInput.TouchRunHeld;
            Toast(GameInput.TouchRunHeld ? "Running" : "Walking");
        }

        // ---------------------------------------------------------------- runtime
        private void Update()
        {
            if (GameManager.I == null) return;

            // interaction prompt
            bool showPrompt = false;
            if (GameManager.I.State == GameState.Playing && !_ui.AnyPanelOpen)
            {
                var pi = FindObjectOfType<PlayerInteractor>();
                if (pi != null && pi.Current != null)
                {
                    showPrompt = true;
                    string prompt = pi.Current.Prompt;
                    _promptText.text = GameManager.I.IsTouchPlatform
                        ? $"⟶  {prompt}"
                        : prompt;
                    if (_interactBtn != null) _interactBtn.SetActive(true);
                }
            }
            if (_interactBtn != null && !showPrompt) _interactBtn.SetActive(false);
            _promptGo.SetActive(showPrompt && !GameManager.I.IsTouchPlatform);

            // gallery header + cardinal compass
            if (_galleryCompassText != null)
            {
                string sceneName = UnityEngine.SceneManagement.SceneManager.GetActiveScene().name;
                string wing = sceneName switch
                {
                    "MuseumHub"            => "GRAND ROTUNDA HALL",
                    "Gallery_EarlyLife"    => "GALLERY I · EARLY LIFE & EDUCATION",
                    "Gallery_SocialReform" => "GALLERY II · SOCIAL REFORM",
                    "Gallery_Constitution" => "GALLERY III · LAW & CONSTITUTION",
                    "Gallery_Scholarship"  => "GALLERY IV · BOOKS & SCHOLARSHIP",
                    "Gallery_Memorials"    => "GALLERY V · MEMORIALS & SITES",
                    "Gallery_Legacy"       => "GALLERY VI · LEGACY ARCHIVE",
                    _                      => sceneName.ToUpperInvariant()
                };
                string heading = "N";
                if (Camera.main != null)
                {
                    string[] dirs = { "N", "NE", "E", "SE", "S", "SW", "W", "NW" };
                    int idx = Mathf.RoundToInt(Mathf.Repeat(Camera.main.transform.eulerAngles.y, 360f) / 45f) % 8;
                    heading = dirs[idx];
                }
                _galleryCompassText.text = $"{wing}   <color=#D4A84C>·   {heading}</color>";
            }

            // points
            if (_pointsText != null)
                _pointsText.text = $"✦ {GameManager.I.Save.Data.knowledgePoints}  {GameManager.I.Localization.T("hud.points")}";
        }

        // ---------------------------------------------------------------- api
        public void SetObjective(string text)
        {
            if (_objectiveText != null) _objectiveText.text = string.IsNullOrEmpty(text) ? "—" : text;
        }

        public void ObjectiveComplete(string text)
        {
            if (_bannerCo != null) StopCoroutine(_bannerCo);
            _bannerCo = StartCoroutine(BannerPulse(GameManager.I.Localization.T("objective.complete") + " — " + text));
        }

        private IEnumerator BannerPulse(string msg)
        {
            var prev = _objectiveText.text;
            _objectiveText.text = msg;
            _bannerCg.alpha = 1;
            GameManager.I.Audio.PlaySfx(AudioSys.SfxId.ObjectiveNew);
            yield return new WaitForSeconds(3.2f);
            _objectiveText.text = prev;
        }

        public void Toast(string message)
        {
            if (_toastCo != null) StopCoroutine(_toastCo);
            _toastText.text = message;
            _toastCo = StartCoroutine(Fade(_toastCg, 2.6f));
        }

        public void Subtitle(string line, float seconds)
        {
            if (!GameManager.I.Settings.Data.subtitles) return;
            if (_subtitleCo != null) StopCoroutine(_subtitleCo);
            _subtitleText.text = line;
            _subtitleCo = StartCoroutine(Fade(_subtitleCg, seconds));
        }

        private IEnumerator Fade(CanvasGroup cg, float hold)
        {
            cg.alpha = 1;
            yield return new WaitForSecondsRealtime(hold);
            float t = 0;
            while (t < 0.6f) { t += Time.unscaledDeltaTime; cg.alpha = 1 - t / 0.6f; yield return null; }
            cg.alpha = 0;
        }
    }

    /// <summary>Floating virtual joystick; drives GameInput.TouchMove.</summary>
    public class VirtualStick : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler
    {
        private RectTransform _bg, _knob;
        private Vector2 _center;
        private float _radius;

        private void Start()
        {
            var rt = (RectTransform)transform;
            var lib = AssetLibrary.I;
            var bg = UIFactory.Img(gameObject, "bg", lib != null ? lib.ringSprite : null,
                                   new Color(1, 1, 1, 0.35f));
            _bg = (RectTransform)bg.transform;
            var knob = UIFactory.Img(gameObject, "knob", lib != null ? lib.circleSprite : null,
                                     new Color(0.83f, 0.66f, 0.3f, 0.85f));
            _knob = (RectTransform)knob.transform;
            _knob.anchorMin = _knob.anchorMax = new Vector2(0.5f, 0.5f);
            _knob.sizeDelta = new Vector2(110, 110);
            _radius = rt.sizeDelta.x * 0.42f;
            _center = ((RectTransform)transform).anchoredPosition;
            gameObject.SetActive(true);
        }

        public void OnPointerDown(PointerEventData e) => UpdateKnob(e);
        public void OnDrag(PointerEventData e) => UpdateKnob(e);

        private void UpdateKnob(PointerEventData e)
        {
            if (_bg == null) return;
            RectTransformUtility.ScreenPointToLocalPointInRectangle((RectTransform)transform, e.position,
                e.pressEventCamera, out Vector2 local);
            Vector2 clamped = Vector2.ClampMagnitude(local, _radius);
            _knob.anchoredPosition = clamped;
            GameInput.TouchMove = clamped / _radius;
        }

        public void OnPointerUp(PointerEventData e)
        {
            if (_knob != null) _knob.anchoredPosition = Vector2.zero;
            GameInput.TouchMove = Vector2.zero;
        }
    }

    /// <summary>Right-half swipe zone feeding GameInput.TouchLook delta.</summary>
    public class LookZone : MonoBehaviour, IBeginDragHandler, IDragHandler
    {
        public void OnBeginDrag(PointerEventData e) { }
        public void OnDrag(PointerEventData e) => GameInput.TouchLook += e.delta;
    }
}
