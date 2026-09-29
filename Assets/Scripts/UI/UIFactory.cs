using System;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

namespace DHJ.UI
{
    /// <summary>
    /// Runtime UGUI construction helpers implementing the UITheme design system.
    /// All UI in the game is built through these methods — no .prefab authoring.
    /// </summary>
    public static class UIFactory
    {
        // ------------------------------------------------------------ layout
        public static RectTransform Rt(GameObject parent, string name,
            Vector2 anchorMin, Vector2 anchorMax, Vector2 offsetMin, Vector2 offsetMax)
        {
            var go = new GameObject(name, typeof(RectTransform));
            var rt = (RectTransform)go.transform;
            rt.SetParent(parent.transform, false);
            rt.anchorMin = anchorMin; rt.anchorMax = anchorMax;
            rt.offsetMin = offsetMin; rt.offsetMax = offsetMax;
            return rt;
        }

        public static RectTransform Stretch(GameObject parent, string name, float l = 0, float t = 0, float r = 0, float b = 0) =>
            Rt(parent, name, Vector2.zero, Vector2.one, new Vector2(l, b), new Vector2(-r, -t));

        // ------------------------------------------------------------ visuals
        public static Image Img(GameObject parent, string name, Sprite sprite, Color color, Image.Type type = Image.Type.Simple)
        {
            var rt = Rt(parent, name, Vector2.zero, Vector2.one, Vector2.zero, Vector2.zero);
            var img = rt.gameObject.AddComponent<Image>();
            img.sprite = sprite; img.color = color; img.type = type;
            if (type == Image.Type.Sliced) img.pixelsPerUnitMultiplier = 1;
            return img;
        }

        public static Image Panel(GameObject parent, string name, Color? color = null, bool sprite = true)
        {
            var lib = AssetLibrary.I;
            var img = Img(parent, name, sprite && lib != null ? lib.roundedSoft : null,
                          color ?? UITheme.Panel, sprite ? Image.Type.Sliced : Image.Type.Simple);
            if (sprite) img.raycastTarget = true;
            return img;
        }

        public static TextMeshProUGUI Text(GameObject parent, string name, string content,
            int baseSize = UITheme.Body, Color? color = null, TextAlignmentOptions align = TextAlignmentOptions.TopLeft,
            FontStyles style = FontStyles.Normal)
        {
            var rt = Rt(parent, name, Vector2.zero, Vector2.one, Vector2.zero, Vector2.zero);
            var tmp = rt.gameObject.AddComponent<TextMeshProUGUI>();
            tmp.text = content;
            tmp.fontSize = UITheme.FontSize(baseSize);
            tmp.color = color ?? UITheme.White;
            tmp.alignment = align;
            tmp.fontStyle = style;
            tmp.enableWordWrapping = true;
            tmp.overflowMode = TextOverflowModes.Ellipsis;
            if (AssetLibrary.I != null && AssetLibrary.I.mainFont != null) tmp.font = AssetLibrary.I.mainFont;
            TextScaler.Attach(tmp, baseSize);
            return tmp;
        }

        /// <summary>Gold heading with thin rule under it.</summary>
        public static TextMeshProUGUI Heading(GameObject parent, string content, int baseSize = UITheme.H2)
        {
            var t = Text(parent, "heading", content.ToUpperInvariant(), baseSize, UITheme.Gold,
                         TextAlignmentOptions.TopLeft, FontStyles.Bold);
            t.characterSpacing = 6;
            return t;
        }

        // ------------------------------------------------------------ buttons
        public static Button Button(GameObject parent, string label, Action onClick,
            Color? bg = null, int baseSize = UITheme.Body, bool gold = false)
        {
            var lib = AssetLibrary.I;
            var img = Panel(parent, "btn_" + label, bg ?? (gold ? UITheme.Gold : UITheme.PanelSoft));
            var btn = img.gameObject.AddComponent<Button>();
            btn.targetGraphic = img;
            var colors = btn.colors;
            colors.highlightedColor = Color.white * 1.08f; colors.highlightedColor.a = 1;
            colors.pressedColor = Color.white * 0.86f; colors.pressedColor.a = 1;
            colors.fadeDuration = 0.08f;
            btn.colors = colors;

            var labelRt = Stretch(img.gameObject, "label", 14, 4, 14, 4);
            var t = labelRt.gameObject.AddComponent<TextMeshProUGUI>();
            t.text = label;
            t.fontSize = UITheme.FontSize(baseSize);
            t.fontStyle = FontStyles.Bold;
            t.alignment = TextAlignmentOptions.Center;
            t.color = gold ? new Color(0.09f, 0.08f, 0.05f) : UITheme.Cream;
            if (lib != null && lib.mainFont != null) t.font = lib.mainFont;

            btn.onClick.AddListener(() =>
            {
                Core.GameManager.I?.Audio.PlaySfx(AudioSys.SfxId.UiClick);
                onClick?.Invoke();
            });
            var hover = img.gameObject.AddComponent<HoverSound>();
            return btn;
        }

        public static Image ThinRule(GameObject parent, Color? c = null)
        {
            return Img(parent, "rule", null, c ?? UITheme.GoldDim);
        }

        // ------------------------------------------------------------ inputs
        public static TMP_InputField Input(GameObject parent, string hint, int baseSize = UITheme.Body)
        {
            var bg = Panel(parent, "input", UITheme.PanelSoft);
            var field = bg.gameObject.AddComponent<TMP_InputField>();

            var textArea = Stretch(bg.gameObject, "textArea", 14, 6, 14, 6);
            var vp = textArea.gameObject.AddComponent<RectMask2D>();

            var placeholderRt = Stretch(textArea.gameObject, "ph", 4, 2, 4, 2);
            var ph = placeholderRt.gameObject.AddComponent<TextMeshProUGUI>();
            ph.text = hint; ph.fontSize = UITheme.FontSize(baseSize);
            ph.color = UITheme.Subtle; ph.fontStyle = FontStyles.Italic;
            ph.alignment = TextAlignmentOptions.MidlineLeft;

            var textRt = Stretch(textArea.gameObject, "text", 4, 2, 4, 2);
            var tx = textRt.gameObject.AddComponent<TextMeshProUGUI>();
            tx.fontSize = UITheme.FontSize(baseSize);
            tx.color = UITheme.White;
            tx.alignment = TextAlignmentOptions.MidlineLeft;

            if (AssetLibrary.I != null && AssetLibrary.I.mainFont != null)
            { tx.font = AssetLibrary.I.mainFont; ph.font = AssetLibrary.I.mainFont; }

            field.textViewport = textArea;
            field.textComponent = tx;
            field.placeholder = ph;
            field.caretColor = UITheme.Gold;
            field.selectionColor = new Color(0.83f, 0.66f, 0.30f, 0.4f);
            return field;
        }

        public static Slider SliderRow(GameObject parent, string label, float value,
            float min, float max, Action<float> onChanged)
        {
            var row = Rt(parent, "row_" + label, Vector2.zero, Vector2.one, Vector2.zero, Vector2.zero);
            var lbl = TextAt(row.gameObject, "lbl", label, UITheme.Body, UITheme.Cream,
                             new Vector2(0, 0), new Vector2(0.42f, 1), TextAlignmentOptions.MidlineLeft);

            var track = Rt(row.gameObject, "track", new Vector2(0.46f, 0.38f), new Vector2(1, 0.62f),
                           Vector2.zero, Vector2.zero);
            var bg = Img(track.gameObject, "bg", AssetLibrary.I != null ? AssetLibrary.I.roundedSoft : null,
                         UITheme.PanelSoft, Image.Type.Sliced);
            var fillArea = Rt(track.gameObject, "fill", Vector2.zero, new Vector2(value, 1), Vector2.zero, Vector2.zero);
            var fill = Img(fillArea.gameObject, "fillImg", AssetLibrary.I != null ? AssetLibrary.I.roundedSoft : null,
                           UITheme.Gold, Image.Type.Sliced);
            var handle = Rt(track.gameObject, "handle", new Vector2(value - 0.01f, -0.25f), new Vector2(value + 0.01f, 1.25f),
                            Vector2.zero, Vector2.zero);
            var himg = Img(handle.gameObject, "h", AssetLibrary.I != null ? AssetLibrary.I.circleSprite : null, UITheme.Cream);

            var slider = track.gameObject.AddComponent<Slider>();
            slider.minValue = min; slider.maxValue = max; slider.value = value;
            slider.fillRect = fillArea; slider.handleRect = handle;
            slider.targetGraphic = himg;
            slider.onValueChanged.AddListener(v =>
            {
                Core.GameManager.I?.Audio.PlaySfx(AudioSys.SfxId.UiHover);
                onChanged?.Invoke(v);
            });
            return slider;
        }

        public static Toggle ToggleRow(GameObject parent, string label, bool value, Action<bool> onChanged)
        {
            var row = Rt(parent, "row_" + label, Vector2.zero, Vector2.one, Vector2.zero, Vector2.zero);
            TextAt(row.gameObject, "lbl", label, UITheme.Body, UITheme.Cream,
                   new Vector2(0, 0), new Vector2(0.8f, 1), TextAlignmentOptions.MidlineLeft);
            var box = Rt(row.gameObject, "box", new Vector2(0.86f, 0.12f), new Vector2(1, 0.88f), Vector2.zero, Vector2.zero);
            var bg = Img(box.gameObject, "bg", AssetLibrary.I != null ? AssetLibrary.I.roundedSoft : null,
                         UITheme.PanelSoft, Image.Type.Sliced);
            var check = Img(box.gameObject, "check", AssetLibrary.I != null ? AssetLibrary.I.roundedSoft : null,
                            UITheme.Gold, Image.Type.Sliced);
            ((RectTransform)check.transform).offsetMin = new Vector2(4, 4);
            ((RectTransform)check.transform).offsetMax = new Vector2(-4, -4);

            var toggle = box.gameObject.AddComponent<Toggle>();
            toggle.graphic = check;
            toggle.isOn = value;
            toggle.onValueChanged.AddListener(v =>
            {
                Core.GameManager.I?.Audio.PlaySfx(AudioSys.SfxId.UiClick);
                onChanged?.Invoke(v);
            });
            return toggle;
        }

        public static TextMeshProUGUI TextAt(GameObject parent, string name, string content, int baseSize,
            Color color, Vector2 anchorMin, Vector2 anchorMax,
            TextAlignmentOptions align = TextAlignmentOptions.TopLeft, FontStyles style = FontStyles.Normal)
        {
            var rt = Rt(parent, name, anchorMin, anchorMax, Vector2.zero, Vector2.zero);
            var tmp = rt.gameObject.AddComponent<TextMeshProUGUI>();
            tmp.text = content; tmp.fontSize = UITheme.FontSize(baseSize); tmp.color = color;
            tmp.alignment = align; tmp.fontStyle = style; tmp.enableWordWrapping = true;
            if (AssetLibrary.I != null && AssetLibrary.I.mainFont != null) tmp.font = AssetLibrary.I.mainFont;
            TextScaler.Attach(tmp, baseSize);
            return tmp;
        }

        /// <summary>Vertical scroll list; returns (scrollRect, content).</summary>
        public static (ScrollRect, RectTransform) Scroll(GameObject parent)
        {
            var view = Stretch(parent, "scroll");
            var scroll = view.gameObject.AddComponent<ScrollRect>();
            scroll.horizontal = false;
            scroll.movementType = ScrollRect.MovementType.Clamped;
            scroll.scrollSensitivity = 30;
            var mask = view.gameObject.AddComponent<RectMask2D>();
            var img = view.gameObject.AddComponent<Image>();
            img.color = new Color(0, 0, 0, 0.02f);

            var content = Rt(view.gameObject, "content", new Vector2(0, 1), new Vector2(1, 1),
                             new Vector2(0, 0), new Vector2(0, 0));
            var vlg = content.gameObject.AddComponent<VerticalLayoutGroup>();
            vlg.childControlWidth = true; vlg.childControlHeight = false;
            vlg.childForceExpandWidth = true; vlg.childForceExpandHeight = false;
            vlg.spacing = 8;
            vlg.padding = new RectOffset(6, 6, 6, 6);
            var csf = content.gameObject.AddComponent<ContentSizeFitter>();
            csf.verticalFit = ContentSizeFitter.FitMode.PreferredSize;

            scroll.content = content;
            scroll.viewport = view;
            return (scroll, content);
        }

        /// <summary>Fixed-height child for vertical lists.</summary>
        public static RectTransform ListRow(RectTransform content, string name, float height)
        {
            var rt = Rt(content.gameObject, name, Vector2.zero, Vector2.one, Vector2.zero, Vector2.zero);
            var le = rt.gameObject.AddComponent<LayoutElement>();
            le.minHeight = height; le.preferredHeight = height;
            return rt;
        }
    }

    public class HoverSound : MonoBehaviour, UnityEngine.EventSystems.IPointerEnterHandler
    {
        public void OnPointerEnter(UnityEngine.EventSystems.PointerEventData e) =>
            Core.GameManager.I?.Audio.PlaySfx(AudioSys.SfxId.UiHover);
    }
}
