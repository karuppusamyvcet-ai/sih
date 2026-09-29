using UnityEngine;
using TMPro;
using DHJ.Core;

namespace DHJ.UI
{
    /// <summary>Generic small modal (title + body + CLOSE). Used by timeline panels and
    /// friendly error messages. Registered on UIManager via ShowInfo().</summary>
    public class InfoPanel : FullScreenPanel
    {
        public string Title, Body;
        private RectTransform _content;

        protected override void BuildUI(RectTransform root)
        {
            _content = Window(root, new Vector2(820, 420), "");
        }

        public override void OnOpen()
        {
            var bar = _content.parent.Find("titlebar/title");
            if (bar != null) bar.GetComponent<TextMeshProUGUI>().text = Title;
            foreach (Transform c in _content) Object.Destroy(c.gameObject);
            var t = UIFactory.TextAt(_content.gameObject, "body", Body, UITheme.Body, UITheme.Cream,
                new Vector2(0.05f, 0), new Vector2(0.95f, 0.86f), TextAlignmentOptions.Center);
            t.enableWordWrapping = true;
            var btn = UIFactory.Button(_content.gameObject, GameManager.I.Localization.T("common.close"),
                () => ui.Pop(this), gold: true, baseSize: UITheme.Small);
            var rt = (RectTransform)btn.transform;
            rt.anchorMin = new Vector2(0.36f, 0.02f); rt.anchorMax = new Vector2(0.64f, 0.16f);
            rt.offsetMin = Vector2.zero; rt.offsetMax = Vector2.zero;
        }
    }
}
