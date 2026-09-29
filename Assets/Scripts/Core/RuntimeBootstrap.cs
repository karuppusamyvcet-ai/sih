using UnityEngine;
using UnityEngine.EventSystems;

namespace DHJ.Core
{
    /// <summary>
    /// Safety net: guarantees managers, an EventSystem and the UI root exist even if a
    /// scene was opened directly in the editor (Play-from-any-scene development flow).
    /// Boot scene contains one of these; gallery scenes reference it additively.
    /// </summary>
    public static class RuntimeBootstrap
    {
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        private static void Ensure()
        {
            InstallTmpFallbackFont();
            if (GameManager.I == null)
            {
                var go = new GameObject("[DHJ] GameSystems");
                go.AddComponent<GameManager>();
            }
            if (Object.FindObjectOfType<EventSystem>() == null)
            {
                var es = new GameObject("EventSystem",
                    typeof(EventSystem), typeof(StandaloneInputModule));
                Object.DontDestroyOnLoad(es);
            }
        }

        /// <summary>
        /// The generated Resources font (created by the DHJ editor bootstrap) is set
        /// as TMP's default so even persistent, scene-independent UI (e.g. the
        /// loading overlay) always has a valid font — no TMP-essentials dependency.
        /// </summary>
        private static void InstallTmpFallbackFont()
        {
            var font = Resources.Load<TMPro.TMP_FontAsset>("DHJ/DHJ_MainFont");
            if (font == null) return;
            try
            {
                TMPro.TMP_Settings.defaultFontAsset = font;
                if (TMPro.TMP_Settings.fallbackFontAssets != null &&
                    !TMPro.TMP_Settings.fallbackFontAssets.Contains(font))
                    TMPro.TMP_Settings.fallbackFontAssets.Add(font);
            }
            catch (System.Exception) { /* settings locked in some TMP versions — scene AssetLibrary still provides fonts */ }
        }
    }
}
