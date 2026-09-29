using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using DHJ.Core;

namespace DHJ.UI
{
    /// <summary>
    /// Per-scene UI root. Owns the canvas, the HUD (in gameplay scenes) and a stack
    /// of full-screen panels. Full-screen panels are built lazily on first use.
    /// </summary>
    public class UIManager : MonoBehaviour
    {
        public static UIManager instance { get; private set; }

        public Canvas canvas;
        public CanvasScaler scaler;
        public HUDController hud;

        private readonly Stack<FullScreenPanel> _openPanels = new();
        private readonly Dictionary<System.Type, FullScreenPanel> _cache = new();

        // panels
        private ArchiveScreen _archive;
        private QuizScreen _quiz;
        private ExhibitPanel _exhibit;
        private SettingsScreen _settings;
        private PauseScreen _pause;
        private MapScreen _map;
        private AIScreen _ai;
        private DoorInfoPanel _doorInfo;
        private CertificateScreen _certificate;
        private InfoPanel _info;

        public bool AnyPanelOpen => _openPanels.Count > 0;

        private void Awake()
        {
            instance = this;
            BuildCanvas();
            bool gameplay = SceneManager.GetActiveScene().name != "MainMenu";
            if (gameplay)
            {
                hud = HUDController.Create(this);
            }
            ApplyAccessibility();
            EventBus.Subscribe<AccessibilityChanged>(_ => ApplyAccessibility());
        }

        private void OnDestroy()
        {
            if (instance == this) instance = null;
            EventBus.Unsubscribe<AccessibilityChanged>(_ => { });
        }

        private void BuildCanvas()
        {
            canvas = GetComponentInChildren<Canvas>();
            if (canvas == null)
            {
                var go = new GameObject("UICanvas", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
                go.transform.SetParent(transform, false);
                canvas = go.GetComponent<Canvas>();
                canvas.renderMode = RenderMode.ScreenSpaceOverlay;
                canvas.sortingOrder = 10;
            }
            scaler = canvas.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(1920, 1080);
            scaler.matchWidthOrHeight = 0.6f;
            var safe = canvas.GetComponent<SafeAreaFitter>();
            if (safe == null) canvas.gameObject.AddComponent<SafeAreaFitter>();
        }

        private void ApplyAccessibility()
        {
            UIThemeRefresh.RefreshAll(transform);
        }

        // ------------------------------------------------------------ panels
        private T Get<T>(ref T field) where T : FullScreenPanel, new()
        {
            if (field == null)
            {
                field = new T();
                field.Build(this);
                _built.Add(field);
            }
            return field;
        }

        private void Push(FullScreenPanel p)
        {
            _openPanels.Push(p);
            p.gameObject.SetActive(true);
            p.OnOpen();
            UpdateInputLock();
        }

        public void Pop(FullScreenPanel p)
        {
            if (_openPanels.Count == 0) return;
            var top = _openPanels.Pop();
            top.Close();
            if (top != p) p.Close();
            UpdateInputLock();
        }

        private void UpdateInputLock()
        {
            GameInput.Enabled = _openPanels.Count == 0;
            if (GameManager.I != null && GameManager.I.State == GameState.UI && _openPanels.Count == 0)
                GameManager.I.SetState(GameState.Playing);
            if (_openPanels.Count > 0)
            {
                if (GameManager.I != null && GameManager.I.State == GameState.Playing)
                    GameManager.I.SetState(GameState.UI);
                Cursor.lockState = CursorLockMode.None;
                Cursor.visible = true;
            }
        }

        /// <summary>Android Back / Esc entry point. True if a panel consumed it.</summary>
        public bool HandleBack()
        {
            if (_openPanels.Count > 0)
            {
                var top = _openPanels.Peek();
                if (!top.HandleBack()) Pop(top);
                return true;
            }
            return false;
        }

        // public screen API -------------------------------------------------
        public void ShowArchive(bool openSearch = false)
        {
            var s = Get(ref _archive);
            s.OpenSearch = openSearch;
            Push(s);
        }

        public void ShowQuiz(string quizId)
        {
            var s = Get(ref _quiz);
            s.QuizId = quizId;
            Push(s);
        }

        public void ShowExhibit(string exhibitId, string archiveId)
        {
            var s = Get(ref _exhibit);
            s.Set(exhibitId, archiveId);
            Push(s);
        }

        public void ShowSettings()  => Push(Get(ref _settings));
        public void ShowMap()       => Push(Get(ref _map));
        public void ShowAssistant() => Push(Get(ref _ai));

        public void ShowDoorInfo(Interaction.DoorController door)
        {
            var s = Get(ref _doorInfo);
            s.Door = door;
            Push(s);
        }

        public void ShowCertificate() => Push(Get(ref _certificate));

        public void ShowInfo(string title, string body)
        {
            var s = Get(ref _info);
            s.Title = title; s.Body = body;
            Push(s);
        }

        public void ShowPause()
        {
            var s = Get(ref _pause);
            Push(s);
        }

        private readonly List<FullScreenPanel> _built = new();

        /// <summary>
        /// Destroys all cached panels so they rebuild with fresh theme/language
        /// on next open. Called by the settings screen after global style changes.
        /// </summary>
        public void InvalidatePanels()
        {
            while (_openPanels.Count > 0) Pop(_openPanels.Peek());
            foreach (var p in _built)
                if (p != null && p.gameObject != null) Destroy(p.gameObject);
            _built.Clear();
            _archive = null; _quiz = null; _exhibit = null; _settings = null;
            _pause = null; _map = null; _ai = null; _doorInfo = null; _certificate = null;
            _info = null;
        }

        public void Toast(string message) => hud?.Toast(message);
        public void ShowSubtitle(string line, float seconds) => hud?.Subtitle(line, seconds);
        public void SetObjectiveBanner(string text) => hud?.SetObjective(text);
        public void FlashObjectiveComplete(string text) => hud?.ObjectiveComplete(text);
    }

    /// <summary>Base class for full-screen panels built in code.</summary>
    public abstract class FullScreenPanel
    {
        public GameObject gameObject { get; protected set; }
        protected UIManager ui;
        protected Core.GameManager G => GameManager.I;

        public void Build(UIManager manager)
        {
            ui = manager;
            gameObject = new GameObject(GetType().Name, typeof(RectTransform));
            var rt = (RectTransform)gameObject.transform;
            rt.SetParent(manager.canvas.transform, false);
            rt.anchorMin = Vector2.zero; rt.anchorMax = Vector2.one;
            rt.offsetMin = Vector2.zero; rt.offsetMax = Vector2.zero;
            BuildUI(rt);
            gameObject.SetActive(false);
        }

        public void Close() => gameObject.SetActive(false);
        public FullScreenPanel DestroySelf()
        {
            if (gameObject != null) Object.Destroy(gameObject);
            return null;
        }
        public virtual void OnOpen() { }
        public virtual bool HandleBack() => false; // return true to swallow

        protected abstract void BuildUI(RectTransform root);

        protected Image Scrim(RectTransform root)
        {
            var img = UIFactory.Img(root.gameObject, "scrim", null, UITheme.Scrim);
            var btn = img.gameObject.AddComponent<Button>();
            btn.transition = Selectable.Transition.None;
            btn.onClick.AddListener(() => ui.Pop(this));
            return img;
        }

        /// <summary>Centered window panel; returns content RectTransform.</summary>
        protected RectTransform Window(RectTransform root, Vector2 size, string title)
        {
            Scrim(root);
            var rt = UIFactory.Rt(root.gameObject, "window",
                new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f),
                new Vector2(-size.x / 2, -size.y / 2), new Vector2(size.x / 2, size.y / 2));
            UIFactory.Panel(rt.gameObject, "bg");
            // title bar
            var bar = UIFactory.Rt(rt.gameObject, "titlebar", new Vector2(0, 1), new Vector2(1, 1),
                                   new Vector2(0, -64), Vector2.zero);
            UIFactory.Img(bar.gameObject, "barbg", null, new Color(1, 1, 1, 0.03f));
            UIFactory.TextAt(bar.gameObject, "title", title, UITheme.H2, UITheme.Gold,
                             new Vector2(0, 0), new Vector2(0.85f, 1)).alignment =
                TMPro.TextAlignmentOptions.MidlineLeft;
            bar.GetComponentInChildren<TMPro.TextMeshProUGUI>().margin = new Vector4(28, 0, 0, 0);
            var closeBtn = UIFactory.Button(bar.gameObject, "✕", () => ui.Pop(this), UITheme.PanelSoft, UITheme.H2);
            ((RectTransform)closeBtn.transform).anchorMin = new Vector2(0.94f, 0.12f);
            ((RectTransform)closeBtn.transform).anchorMax = new Vector2(0.99f, 0.88f);
            ((RectTransform)closeBtn.transform).offsetMin = Vector2.zero;
            ((RectTransform)closeBtn.transform).offsetMax = Vector2.zero;

            var content = UIFactory.Rt(rt.gameObject, "content", Vector2.zero, Vector2.one,
                                       new Vector2(28, 24), new Vector2(-28, -76));
            return content;
        }
    }
}
