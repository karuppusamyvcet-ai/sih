using UnityEngine;
using DHJ.Save;
using DHJ.I18n;
using DHJ.Settings;
using DHJ.AudioSys;
using DHJ.Archive;
using DHJ.Quests;
using DHJ.Quiz;
using DHJ.AI;

namespace DHJ.Core
{
    public enum GameState { Boot, MainMenu, Playing, Paused, Cinematic, UI }

    /// <summary>
    /// Root service locator + game state machine. Created once by the Boot scene
    /// (or by RuntimeBootstrap in the editor when pressing Play in any scene).
    /// </summary>
    public class GameManager : MonoBehaviour
    {
        public static GameManager I { get; private set; }

        public GameState State { get; private set; } = GameState.Boot;
        public bool IsTouchPlatform { get; private set; }
        public bool PresentationMode;

        // Services (all persist across scenes)
        public SaveManager          Save          { get; private set; }
        public SettingsManager      Settings      { get; private set; }
        public LocalizationManager  Localization  { get; private set; }
        public AudioManager         Audio         { get; private set; }
        public ContentDatabase      Content       { get; private set; }
        public ArchiveManager       Archive       { get; private set; }
        public QuestManager         Quests        { get; private set; }
        public QuizManager          Quizzes       { get; private set; }
        public AchievementManager   Achievements  { get; private set; }
        public KnowledgeAssistant   Assistant     { get; private set; }

        private void Awake()
        {
            if (I != null && I != this) { Destroy(gameObject); return; }
            I = this;
            DontDestroyOnLoad(gameObject);
            Application.targetFrameRate = Application.isMobilePlatform ? 60 : -1;
            Application.runInBackground = false;
            IsTouchPlatform = Application.isMobilePlatform || (Input.touchSupported && !Input.mousePresent);

            Content      = gameObject.AddComponent<ContentDatabase>();
            Settings     = gameObject.AddComponent<SettingsManager>();
            Save         = gameObject.AddComponent<SaveManager>();
            Localization = gameObject.AddComponent<LocalizationManager>();
            Audio        = gameObject.AddComponent<AudioManager>();
            Archive      = gameObject.AddComponent<ArchiveManager>();
            Quests       = gameObject.AddComponent<QuestManager>();
            Quizzes      = gameObject.AddComponent<QuizManager>();
            Achievements = gameObject.AddComponent<AchievementManager>();
            Assistant    = gameObject.AddComponent<KnowledgeAssistant>();
        }

        private void Start() => StartCoroutine(BootSequence());

        private System.Collections.IEnumerator BootSequence()
        {
            yield return Content.LoadAll();                 // JSON content from StreamingAssets
            Localization.Initialize(Settings.Data.language);
            Audio.Initialize();
            Archive.Initialize();
            Quests.Initialize();
            Achievements.Initialize();

            var active = UnityEngine.SceneManagement.SceneManager.GetActiveScene().name;
            if (active == "MainMenu")
            {
                SetState(GameState.MainMenu);               // Boot already switched scenes
            }
            else if (active == "Boot" || active.StartsWith("Gallery_") == false && active != "MuseumHub")
            {
                SetState(GameState.MainMenu);
                yield return SceneFlow.SwitchTo("MainMenu");
            }
            else
            {
                SetState(GameState.Playing);                // dev/QA: launched inside a gameplay scene
            }
        }

        public void SetState(GameState s)
        {
            State = s;
            Cursor.lockState = (s == GameState.Playing) ? CursorLockMode.Locked : CursorLockMode.None;
            Cursor.visible   = s != GameState.Playing;
        }

        /// <summary>Start a fresh journey (clears save, plays intro in the hub).</summary>
        public void NewJourney()
        {
            Save.NewGame();
            StartCoroutine(StartHub(intro: true));
        }

        public void ContinueJourney() => StartCoroutine(ResumeSavedScene());

        private System.Collections.IEnumerator StartHub(bool intro)
        {
            SetState(GameState.Cinematic);
            Save.Data.playIntroOnHubEntry = intro;
            yield return SceneFlow.SwitchTo("MuseumHub");
            SetState(intro ? GameState.Cinematic : GameState.Playing);
        }

        private System.Collections.IEnumerator ResumeSavedScene()
        {
            SetState(GameState.Cinematic);
            Save.Data.playIntroOnHubEntry = false;
            string scene = Save.Data.lastScene;
            if (string.IsNullOrEmpty(scene) || scene == "Boot" || scene == "MainMenu")
                scene = "MuseumHub";
            yield return SceneFlow.SwitchTo(scene);
            SetState(GameState.Playing);
        }

        public void CapturePlayerPosition()
        {
            var pc = FindObjectOfType<Player.PlayerController>();
            if (pc != null && State != GameState.MainMenu)
                Save.SetPlayerPosition(pc.transform.position,
                    UnityEngine.SceneManagement.SceneManager.GetActiveScene().name);
        }

        public void QuitToMainMenu()
        {
            CapturePlayerPosition();
            Save.SaveNow();
            SetState(GameState.MainMenu);
            Time.timeScale = 1f;
            StartCoroutine(SceneFlow.SwitchTo("MainMenu"));
        }

        public void QuitGame()
        {
            CapturePlayerPosition();
            Save.SaveNow();
#if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
#else
            Application.Quit();
#endif
        }

        private int _lastAutosaveSlot = -1;

        private void Update()
        {
            if (GameInput.PausePressed) HandleBackButton();   // Esc on PC, Back on Android
            if (State == GameState.Playing)
            {
                if (GameInput.ArchivePressed) UI.UIManager.instance?.ShowArchive();
                else if (GameInput.MapPressed) UI.UIManager.instance?.ShowMap();

                int slot = (int)(Time.unscaledTime / 30f);
                if (slot != _lastAutosaveSlot) { _lastAutosaveSlot = slot; CapturePlayerPosition(); Save.TickAutosave(); }
            }
        }

        private void LateUpdate()
        {
            GameInput.EndFrame();
        }

        /// <summary>Esc on PC / Back on Android — routed to UI first, then pause.</summary>
        private void HandleBackButton()
        {
            var ui = UI.UIManager.instance;
            if (ui != null && ui.HandleBack()) return;               // UI consumed
            if (State == GameState.Playing)
            {
                SetState(GameState.Paused);
                Time.timeScale = 0f;
                ui?.ShowPause();
                EventBus.Publish(new GamePausedEvent { Paused = true });
            }
        }

        public void ResumeFromPause()
        {
            Time.timeScale = 1f;
            SetState(GameState.Playing);
            EventBus.Publish(new GamePausedEvent { Paused = false });
        }

        private void OnApplicationPause(bool paused)
        {
            if (paused && State == GameState.Playing) { CapturePlayerPosition(); Save.SaveNow(); }
        }

        private void OnApplicationQuit() { CapturePlayerPosition(); Save.SaveNow(); }
    }
}
