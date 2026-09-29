using UnityEngine;
using TMPro;
using DHJ.Core;

namespace DHJ.UI
{
    /// <summary>Small modal: door title + description + ENTER / BACK.</summary>
    public class DoorInfoPanel : FullScreenPanel
    {
        public Interaction.DoorController Door;
        private RectTransform _content;

        protected override void BuildUI(RectTransform root)
        {
            _content = Window(root, new Vector2(760, 460), "");
        }

        public override void OnOpen()
        {
            foreach (Transform c in _content) Object.Destroy(c.gameObject);
            var L = G.Localization;
            var bar = _content.parent.Find("titlebar/title");
            if (bar != null) bar.GetComponent<TextMeshProUGUI>().text = Door.displayName;

            var dt = UIFactory.TextAt(_content.gameObject, "desc", Door.description,
                UITheme.Body, UITheme.Cream, new Vector2(0.04f, 0.55f), new Vector2(0.96f, 0.96f),
                TextAlignmentOptions.Center);
            dt.enableWordWrapping = true;

            var enter = UIFactory.Button(_content.gameObject, L.T("door.enter") + "  ➜", () =>
            {
                ui.Pop(this);
                Door.BeginEnter();
            }, gold: true, baseSize: UITheme.Body);
            var ert = (RectTransform)enter.transform;
            ert.anchorMin = new Vector2(0.30f, 0.06f); ert.anchorMax = new Vector2(0.70f, 0.30f);
            ert.offsetMin = Vector2.zero; ert.offsetMax = Vector2.zero;
        }
    }
}
