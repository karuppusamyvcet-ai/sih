using System;
using System.IO;
using UnityEngine;
using DHJ.Core;

namespace DHJ.Settings
{
    [Serializable]
    public class SettingsData
    {
        // audio
        public float master = 1f, music = 0.7f, voice = 0.9f, sfx = 1f;
        // display
        public int qualityLevel = -1;            // -1 = platform default
        public int resolutionIndex = -1;
        public int fullscreenMode = -1;          // FullScreenMode enum
        public bool vsync = true;
        // controls
        public float sensitivity = 1f;
        public float touchSensitivity = 1f;
        public bool invertY;
        // accessibility
        public bool subtitles = true;
        public float textScale = 1f;             // 0.85 / 1.0 / 1.2 / 1.4
        public bool highContrast;
        public bool reducedFx;
        public bool narration = true;
        public string language = "en";
        // AI (optional online endpoint; empty = offline knowledge base only)
        public string aiEndpoint = "";
    }

    public class SettingsManager : MonoBehaviour
    {
        public SettingsData Data { get; private set; } = new();
        private string Path => System.IO.Path.Combine(Application.persistentDataPath, "settings.json");

        private void Awake()
        {
            Load();
            ApplyQualityDefault();
        }

        private void ApplyQualityDefault()
        {
            if (Data.qualityLevel >= 0) ApplyQuality(Data.qualityLevel);
            else
                ApplyQuality(Application.isMobilePlatform
                    ? Mathf.Clamp(QualitySettings.names.Length - 3, 0, 5)
                    : Mathf.Clamp(QualitySettings.names.Length - 1, 0, 5));
        }

        public void Load()
        {
            try
            {
                if (File.Exists(Path))
                {
                    var d = JsonUtility.FromJson<SettingsData>(File.ReadAllText(Path));
                    if (d != null) Data = d;
                }
            }
            catch (Exception ex) { Debug.LogWarning($"[Settings] Load failed: {ex.Message}"); }
        }

        public void SaveNow()
        {
            try { File.WriteAllText(Path, JsonUtility.ToJson(Data, true)); }
            catch (Exception ex) { Debug.LogWarning($"[Settings] Save failed: {ex.Message}"); }
        }

        /// <summary>Presets: 0 LOW, 1 MEDIUM, 2 HIGH, 3 ULTRA (ULTRA clamps on mobile).</summary>
        public void ApplyQuality(int preset)
        {
            Data.qualityLevel = preset;
            int p = preset;
            if (Application.isMobilePlatform && p > 2) p = 2;
            QualitySettings.SetQualityLevel(Mathf.Clamp(p, 0, QualitySettings.names.Length - 1), true);

            switch (p)
            {
                case 0: // LOW
                    QualitySettings.shadowDistance = 15f;
                    QualitySettings.shadowCascades = 0;
                    QualitySettings.antiAliasing = 0;
                    QualitySettings.globalTextureMipmapLimit = 1;
                    Application.targetFrameRate = 30;
                    RenderSettings.fogDensity = 0.008f;
                    break;
                case 1: // MEDIUM
                    QualitySettings.shadowDistance = 35f;
                    QualitySettings.shadowCascades = 2;
                    QualitySettings.antiAliasing = 2;
                    QualitySettings.globalTextureMipmapLimit = 0;
                    Application.targetFrameRate = Application.isMobilePlatform ? 60 : -1;
                    break;
                case 2: // HIGH
                    QualitySettings.shadowDistance = 60f;
                    QualitySettings.shadowCascades = 2;
                    QualitySettings.antiAliasing = 4;
                    QualitySettings.globalTextureMipmapLimit = 0;
                    Application.targetFrameRate = Application.isMobilePlatform ? 60 : -1;
                    break;
                default: // ULTRA (PC)
                    QualitySettings.shadowDistance = 120f;
                    QualitySettings.shadowCascades = 4;
                    QualitySettings.antiAliasing = 8;
                    QualitySettings.globalTextureMipmapLimit = 0;
                    Application.targetFrameRate = -1;
                    break;
            }
            QualitySettings.vSyncCount = Data.vsync && !Application.isMobilePlatform ? 1 : 0;
            EventBus.Publish(new AccessibilityChanged());
        }

        public void ApplyAccessibility()
        {
            EventBus.Publish(new AccessibilityChanged());
            SaveNow();
        }
    }
}
