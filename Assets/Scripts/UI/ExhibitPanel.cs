using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DHJ.Core;
using DHJ.Data;

namespace DHJ.UI
{
    /// <summary>
    /// The exhibit viewer: metadata + media by type (TEXT / IMAGE / DOCUMENT with
    /// page-turn viewer / AUDIO as subtitled narration / VIDEO & 3D placeholders
    /// wired for real content via the content pipeline). Missing media always
    /// degrades to a labelled placeholder — never a crash.
    /// </summary>
    public class ExhibitPanel : FullScreenPanel
    {
        private string _exhibitId, _archiveId;
        private RectTransform _content;
        private Coroutine _narration;

        public void Set(string exhibitId, string archiveId)
        {
            _exhibitId = exhibitId; _archiveId = archiveId;
        }

        protected override void BuildUI(RectTransform root)
        {
            _content = Window(root, new Vector2(1240, 800), "");
        }

        private void SetTitle(string t)
        {
            var bar = _content.parent.Find("titlebar/title");
            if (bar != null) bar.GetComponent<TextMeshProUGUI>().text = t;
        }

        public override void OnOpen()
        {
            foreach (Transform c in _content) Object.Destroy(c.gameObject);
            var item = G.Content.GetArchiveItem(_archiveId);
            if (item == null)
            {
                SetTitle("Exhibit");
                UIFactory.Text(_content.gameObject, "missing", G.Localization.T("error.generic"),
                    UITheme.Body, UITheme.Cream, TextAlignmentOptions.Center);
                return;
            }
            SetTitle(item.title);
            BuildItem(item);
        }

        private void OnDestroyPanel() { }

        private void BuildItem(ArchiveItemDto item)
        {
            var L = G.Localization;
            bool touch = G.IsTouchPlatform;
            float leftW = item.media != null && item.media.type != "Text" ? 0.46f : 1f;

            // ---------- info column (scrollable)
            var info = UIFactory.Rt(_content.gameObject, "info",
                new Vector2(0, 0), new Vector2(leftW, 1), Vector2.zero, Vector2.zero);
            var (_, infoContent) = UIFactory.Scroll(info.gameObject);

            var titleRow = UIFactory.ListRow(infoContent, "meta", 30);
            UIFactory.Text(titleRow.gameObject, "t",
                $"{item.category}  ·  {item.date}  ·  {item.location}",
                UITheme.Small, UITheme.Gold, TextAlignmentOptions.TopLeft);

            float descH = Mathf.Clamp(60 + item.description.Length * 0.42f, 140, 760);
            var descRow = UIFactory.ListRow(infoContent, "desc", descH);
            UIFactory.Text(descRow.gameObject, "t", item.description, UITheme.Body, UITheme.Cream);

            var srcRow = UIFactory.ListRow(infoContent, "src", 56);
            UIFactory.Text(srcRow.gameObject, "t", L.T("archive.source") + ": " + item.source,
                UITheme.Small, UITheme.Subtle, TextAlignmentOptions.TopLeft, FontStyles.Italic);

            if (item.related != null && item.related.Count > 0)
            {
                var relH = UIFactory.ListRow(infoContent, "relh", 30);
                UIFactory.Text(relH.gameObject, "t", L.T("archive.related").ToUpperInvariant(),
                    UITheme.Tiny, UITheme.Gold, TextAlignmentOptions.TopLeft, FontStyles.Bold);
                foreach (var relId in item.related)
                {
                    var rel = G.Content.GetArchiveItem(relId);
                    if (rel == null) continue;
                    var row = UIFactory.ListRow(infoContent, "rel", 46);
                    var b = UIFactory.Button(row.gameObject, "› " + rel.title, () =>
                    {
                        ui.Pop(this);
                        ui.ShowExhibit(_exhibitId, rel.id);
                    }, UITheme.PanelSoft, UITheme.Small);
                    AnchorFull((RectTransform)b.transform);
                }
            }

            // ---------- media column
            if (item.media == null || item.media.type == "Text") return;

            var media = UIFactory.Rt(_content.gameObject, "media",
                new Vector2(leftW + 0.015f, 0), new Vector2(1, 1), Vector2.zero, Vector2.zero);
            UIFactory.Panel(media.gameObject, "bg", UITheme.BgInk);

            switch (item.media.type)
            {
                case "Image":    BuildImage(media, item); break;
                case "Document": BuildDocument(media, item); break;
                case "Audio":    BuildAudio(media, item); break;
                case "Video":    Placeholder(media, L.T("media.placeholder.video"), item.media.label); break;
                default:         Placeholder(media, L.T("media.reconstruction"), item.media.label); break;
            }
        }

        private static void AnchorFull(RectTransform rt)
        {
            rt.anchorMin = Vector2.zero; rt.anchorMax = Vector2.one;
            rt.offsetMin = Vector2.zero; rt.offsetMax = Vector2.zero;
        }

        private void BuildImage(RectTransform holder, ArchiveItemDto item)
        {
            var sprite = ContentLoader.LoadSprite(item.media.@ref);
            var zone = UIFactory.Rt(holder.gameObject, "img", new Vector2(0.04f, 0.18f), new Vector2(0.96f, 0.92f),
                                    Vector2.zero, Vector2.zero);
            if (sprite != null)
            {
                var img = UIFactory.Img(zone.gameObject, "i", sprite, Color.white);
                img.preserveAspect = true;
            }
            else Placeholder(zone, G.Localization.T("media.placeholder.image"), null);

            if (!string.IsNullOrEmpty(item.media.label))
                UIFactory.TextAt(holder.gameObject, "cap", item.media.label, UITheme.Tiny, UITheme.Gold,
                    new Vector2(0.04f, 0.02f), new Vector2(0.96f, 0.16f), TextAlignmentOptions.Center, FontStyles.Italic);
        }

        private void BuildDocument(RectTransform holder, ArchiveItemDto item)
        {
            // choose page sprites deterministically from the placeholder set + StreamingAssets override
            var pages = new List<Sprite>();
            var baseSprite = ContentLoader.LoadSprite(item.media.@ref);
            if (baseSprite != null) pages.Add(baseSprite);
            if (AssetLibrary.I.manuscript1 != null && !pages.Contains(AssetLibrary.I.manuscript1)) pages.Add(AssetLibrary.I.manuscript1);
            if (AssetLibrary.I.manuscript2 != null && !pages.Contains(AssetLibrary.I.manuscript2)) pages.Add(AssetLibrary.I.manuscript2);
            if (AssetLibrary.I.manuscript3 != null && !pages.Contains(AssetLibrary.I.manuscript3)) pages.Add(AssetLibrary.I.manuscript3);

            int page = 0;
            float zoom = 1.0f;
            var zone = UIFactory.Rt(holder.gameObject, "doc", new Vector2(0.04f, 0.22f), new Vector2(0.96f, 0.94f),
                                    Vector2.zero, Vector2.zero);
            zone.gameObject.AddComponent<RectMask2D>();
            var img = UIFactory.Img(zone.gameObject, "page", null, Color.white);
            img.preserveAspect = true;

            var pageLabel = UIFactory.TextAt(holder.gameObject, "page", "", UITheme.Small, UITheme.Cream,
                new Vector2(0.24f, 0.04f), new Vector2(0.56f, 0.14f), TextAlignmentOptions.Center);

            Image imgRef = img;
            void Render()
            {
                if (page >= 0 && page < pages.Count) imgRef.sprite = pages[page];
                imgRef.rectTransform.localScale = Vector3.one * zoom;
                pageLabel.text = $"{G.Localization.T("media.document.page")} {page + 1}/{pages.Count}  ({Mathf.RoundToInt(zoom * 100)}%)";
            }
            Render();

            var prev = UIFactory.Button(holder.gameObject, "◀", () =>
                { if (page > 0) { page--; G.Audio.PlaySfx(AudioSys.SfxId.PageTurn); Render(); } },
                UITheme.PanelSoft, UITheme.Body);
            AnchorFull((RectTransform)prev.transform);
            ((RectTransform)prev.transform).anchorMin = new Vector2(0.04f, 0.04f);
            ((RectTransform)prev.transform).anchorMax = new Vector2(0.18f, 0.14f);
            ((RectTransform)prev.transform).offsetMin = Vector2.zero; ((RectTransform)prev.transform).offsetMax = Vector2.zero;

            var next = UIFactory.Button(holder.gameObject, "▶", () =>
                { if (page < pages.Count - 1) { page++; G.Audio.PlaySfx(AudioSys.SfxId.PageTurn); Render(); } },
                UITheme.PanelSoft, UITheme.Body);
            var nrt = (RectTransform)next.transform;
            nrt.anchorMin = new Vector2(0.82f, 0.04f); nrt.anchorMax = new Vector2(0.96f, 0.14f);
            nrt.offsetMin = Vector2.zero; nrt.offsetMax = Vector2.zero;

            // Interactive zoom controls (− / +)
            var zoomOut = UIFactory.Button(holder.gameObject, "−", () =>
                { zoom = Mathf.Clamp(zoom - 0.25f, 1.0f, 1.85f); Render(); }, UITheme.PanelSoft, UITheme.Body);
            var zort = (RectTransform)zoomOut.transform;
            zort.anchorMin = new Vector2(0.58f, 0.04f); zort.anchorMax = new Vector2(0.68f, 0.14f);
            zort.offsetMin = Vector2.zero; zort.offsetMax = Vector2.zero;

            var zoomIn = UIFactory.Button(holder.gameObject, "+", () =>
                { zoom = Mathf.Clamp(zoom + 0.25f, 1.0f, 1.85f); Render(); }, UITheme.PanelSoft, UITheme.Body);
            var zirt = (RectTransform)zoomIn.transform;
            zirt.anchorMin = new Vector2(0.70f, 0.04f); zirt.anchorMax = new Vector2(0.80f, 0.14f);
            zirt.offsetMin = Vector2.zero; zirt.offsetMax = Vector2.zero;

            if (!string.IsNullOrEmpty(item.media.label))
                UIFactory.TextAt(holder.gameObject, "cap", item.media.label, UITheme.Tiny, UITheme.Subtle,
                    new Vector2(0.15f, 0.14f), new Vector2(0.85f, 0.22f), TextAlignmentOptions.Center, FontStyles.Italic);
        }

        private void BuildAudio(RectTransform holder, ArchiveItemDto item)
        {
            var L = G.Localization;
            UIFactory.TextAt(holder.gameObject, "cap", L.T("media.placeholder.audio"),
                UITheme.Small, UITheme.Subtle, new Vector2(0.06f, 0.72f), new Vector2(0.94f, 0.94f),
                TextAlignmentOptions.Center, FontStyles.Italic);

            var play = UIFactory.Button(holder.gameObject, "▶  " + L.T("quiz.start"), () =>
            {
                if (_narration != null) GameObjectCoroutiner.Stop(_narration);
                _narration = GameObjectCoroutiner.Run(ui, Narrate(item.description));
            }, gold: true);
            var prt = (RectTransform)play.transform;
            prt.anchorMin = new Vector2(0.24f, 0.52f); prt.anchorMax = new Vector2(0.76f, 0.66f);
            prt.offsetMin = Vector2.zero; prt.offsetMax = Vector2.zero;

            var tr = UIFactory.Rt(holder.gameObject, "tr", new Vector2(0.06f, 0.04f), new Vector2(0.94f, 0.46f),
                                  Vector2.zero, Vector2.zero);
            var (_, content) = UIFactory.Scroll(tr.gameObject);
            var row = UIFactory.ListRow(content, "t", Mathf.Clamp(item.description.Length * 0.42f, 120, 700));
            UIFactory.Text(row.gameObject, "tt", item.description, UITheme.Small, UITheme.Cream);
        }

        private IEnumerator Narrate(string text)
        {
            // No TTS shipped: the description streams as timed subtitles, which is
            // also the accessibility-first narration path (Settings.subtitles).
            foreach (var sentence in text.Split('.'))
            {
                var s = sentence.Trim();
                if (s.Length < 2) continue;
                ui.ShowSubtitle(s + ".", Mathf.Clamp(s.Length * 0.055f, 2.2f, 6f));
                yield return new WaitForSeconds(Mathf.Clamp(s.Length * 0.055f, 2.4f, 6.2f));
            }
        }

        private void Placeholder(RectTransform holder, string message, string extraLabel)
        {
            var zone = UIFactory.Rt(holder.gameObject, "ph", new Vector2(0.1f, 0.2f), new Vector2(0.9f, 0.8f),
                                    Vector2.zero, Vector2.zero);
            UIFactory.Panel(zone.gameObject, "bg", UITheme.PanelSoft);
            UIFactory.TextAt(zone.gameObject, "icon", "▣", 60, UITheme.GoldDim,
                new Vector2(0, 0.5f), new Vector2(1, 1), TextAlignmentOptions.Center);
            UIFactory.TextAt(zone.gameObject, "msg", message, UITheme.Small, UITheme.Subtle,
                new Vector2(0.08f, 0.1f), new Vector2(0.92f, 0.5f), TextAlignmentOptions.Center, FontStyles.Italic);
            if (!string.IsNullOrEmpty(extraLabel))
                UIFactory.TextAt(holder.gameObject, "cap", extraLabel, UITheme.Tiny, UITheme.Wrong,
                    new Vector2(0.06f, 0.03f), new Vector2(0.94f, 0.16f), TextAlignmentOptions.Center, FontStyles.Italic);
        }
    }

    /// <summary>Tiny coroutine host so non-MonoBehaviour panels can run coroutines.</summary>
    public class GameObjectCoroutiner : MonoBehaviour
    {
        private static GameObjectCoroutiner _i;
        public static Coroutine Run(MonoBehaviour anyOwner, IEnumerator co)
        {
            Ensure(anyOwner);
            return _i.StartCoroutine(co);
        }
        public static void Stop(Coroutine co) { if (_i != null && co != null) _i.StopCoroutine(co); }

        private static void Ensure(MonoBehaviour anyOwner)
        {
            if (_i != null) return;
            var go = new GameObject("[DHJ] Coroutiner");
            go.transform.SetParent(anyOwner.transform.root, false);
            _i = go.AddComponent<GameObjectCoroutiner>();
            Object.DontDestroyOnLoad(go);
        }
    }
}
