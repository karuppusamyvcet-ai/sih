using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DHJ.Core;

namespace DHJ.UI
{
    /// <summary>
    /// Persistent (DontDestroyOnLoad) loading screen driven by SceneFlow progress
    /// events, so it survives scene unloads during transitions. Shows the title,
    /// a heritage stripe and a progress bar. Never blocks input on its own.
    /// </summary>
    public class LoadingOverlay : MonoBehaviour
    {
        private static LoadingOverlay _i;

        private CanvasGroup _cg;
        private Image _fill;
        private TextMeshProUGUI _hint;
        private float _target;

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        private static void Install()
        {
            if (_i != null) return;
            var go = new GameObject("[DHJ] LoadingOverlay");
            Object.DontDestroyOnLoad(go);
            var canvas = go.AddComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 1000;
            var scaler = go.AddComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(1920, 1080);
            _i = go.AddComponent<LoadingOverlay>();
            _i.Build(go);
            EventBus.Subscribe<SceneFlow.LoadingProgress>(_i.OnProgress);
        }

        private void Build(GameObject root)
        {
            var rt = UIFactory.Stretch(root, "overlay");
            var img = rt.gameObject.AddComponent<Image>();
            img.color = new Color(0.035f, 0.045f, 0.09f, 1f);
            _cg = rt.gameObject.AddComponent<CanvasGroup>();
            _cg.alpha = 0; _cg.blocksRaycasts = false; _cg.interactable = false;

            var t = UIFactory.Text(rt.gameObject, "title", "", UITheme.Title, UITheme.Cream,
                TextAlignmentOptions.Center, FontStyles.Bold);
            ((RectTransform)t.transform).anchorMin = new Vector2(0.1f, 0.60f);
            ((RectTransform)t.transform).anchorMax = new Vector2(0.9f, 0.72f);
            t.text = "AMBEDKAR";
            var t2 = UIFactory.Text(rt.gameObject, "title2", "THE DIGITAL HERITAGE JOURNEY",
                UITheme.Small, UITheme.Gold, TextAlignmentOptions.Center);
            ((RectTransform)t2.transform).anchorMin = new Vector2(0.1f, 0.53f);
            ((RectTransform)t2.transform).anchorMax = new Vector2(0.9f, 0.60f);
            t2.characterSpacing = 10;

            // gold rule
            var rule = UIFactory.Rt(rt.gameObject, "rule", new Vector2(0.35f, 0.50f), new Vector2(0.65f, 0.505f),
                                    Vector2.zero, Vector2.zero);
            UIFactory.Img(rule.gameObject, "i", null, UITheme.Gold);

            // progress track
            var track = UIFactory.Rt(rt.gameObject, "track", new Vector2(0.30f, 0.44f), new Vector2(0.70f, 0.46f),
                                     Vector2.zero, Vector2.zero);
            UIFactory.Img(track.gameObject, "bg", null, new Color(1, 1, 1, 0.08f));
            var fillRt = UIFactory.Rt(track.gameObject, "fill", Vector2.zero, new Vector2(0, 1),
                                      Vector2.zero, Vector2.zero);
            _fill = UIFactory.Img(fillRt.gameObject, "f", null, UITheme.Gold);

            _hint = UIFactory.Text(rt.gameObject, "hint", "", UITheme.Small, UITheme.Subtle,
                TextAlignmentOptions.Center, FontStyles.Italic);
            ((RectTransform)_hint.transform).anchorMin = new Vector2(0.2f, 0.36f);
            ((RectTransform)_hint.transform).anchorMax = new Vector2(0.8f, 0.42f);
        }

        private void OnProgress(SceneFlow.LoadingProgress p) => OnProgressImpl(p);

        private void OnProgressImpl(SceneFlow.LoadingProgress p)
        {
            StopAllCoroutines();
            if (p.Done) StartCoroutine(FadeOut());
            else
            {
                _target = p.Progress;
                if (_hint != null)
                    _hint.text = (GameManager.I != null ? GameManager.I.Localization.T("loading") : "Loading")
                                 + "  " + Mathf.RoundToInt(p.Progress * 100f) + "%";
                StartCoroutine(FadeTo(1f));
            }
        }

        private IEnumerator FadeTo(float a)
        {
            _cg.blocksRaycasts = a > 0.5f;
            while (Mathf.Abs(_cg.alpha - a) > 0.01f)
            {
                _cg.alpha = Mathf.MoveTowards(_cg.alpha, a, Time.unscaledDeltaTime * 3f);
                yield return null;
            }
        }

        private IEnumerator FadeOut()
        {
            yield return FadeTo(0f);
            _cg.blocksRaycasts = false;
        }

        private void Update()
        {
            if (_fill != null && _cg.alpha > 0.01f)
            {
                var rt = (RectTransform)_fill.transform.parent;
                float cur = rt.anchorMax.x;
                float next = Mathf.MoveTowards(cur, _target, Time.unscaledDeltaTime * 0.8f);
                rt.anchorMax = new Vector2(next, 1);
            }
        }
    }
}
