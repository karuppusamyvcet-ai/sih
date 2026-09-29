using System.Collections.Generic;
using UnityEngine;

namespace DHJ.UI
{
    /// <summary>Applies the device safe area to the canvas (notches, rounded corners).</summary>
    [RequireComponent(typeof(Canvas))]
    public class SafeAreaFitter : MonoBehaviour
    {
        private Rect _last;

        private void Update()
        {
            var sa = Screen.safeArea;
            if (sa == _last) return;
            _last = sa;
            var canvas = GetComponent<Canvas>();
            var rt = (RectTransform)canvas.transform;
            var min = sa.position, max = sa.position + sa.size;
            min.x /= Screen.width; min.y /= Screen.height;
            max.x /= Screen.width; max.y /= Screen.height;
            rt.anchorMin = min; rt.anchorMax = max;
            rt.offsetMin = Vector2.zero; rt.offsetMax = Vector2.zero;
        }
    }

    /// <summary>Records a text widget's pre-scale font size so accessibility
    /// text scaling can be re-applied live to an already-built panel.</summary>
    public class TextScaler : MonoBehaviour
    {
        public float baseSize;
        private TMPro.TextMeshProUGUI _tmp;

        public static void Attach(TMPro.TextMeshProUGUI tmp, float baseSize)
        {
            var s = tmp.GetComponent<TextScaler>();
            if (s == null) s = tmp.gameObject.AddComponent<TextScaler>();
            s.baseSize = baseSize;
            s._tmp = tmp;
        }

        public void Apply()
        {
            if (_tmp != null) _tmp.fontSize = Mathf.RoundToInt(baseSize * UITheme.TextScale);
        }
    }

    /// <summary>Re-applies text scaling to every built widget in a hierarchy.</summary>
    public static class UIThemeRefresh
    {
        public static void RefreshAll(Transform root)
        {
            foreach (var s in root.GetComponentsInChildren<TextScaler>(true))
                s.Apply();
        }
    }
}
