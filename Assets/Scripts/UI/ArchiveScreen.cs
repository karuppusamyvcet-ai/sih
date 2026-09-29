using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DHJ.Core;
using DHJ.Data;

namespace DHJ.UI
{
    /// <summary>
    /// MY DIGITAL ARCHIVE — instant local search, category filter chips,
    /// detail pane with sources & related links, collection state display.
    /// </summary>
    public class ArchiveScreen : FullScreenPanel
    {
        public bool OpenSearch;

        private TMP_InputField _search;
        private RectTransform _listContent, _detailContent;
        private TextMeshProUGUI _countLabel;
        private string _category = "ALL";
        private readonly List<string> _chips = new();
        private readonly Dictionary<string, Image> _chipBgs = new();

        protected override void BuildUI(RectTransform root)
        {
            var L = G.Localization;
            var content = Window(root, new Vector2(1500, 820), L.T("archive.title"));

            // ---------------- left column: search + chips + list
            var left = UIFactory.Rt(content.gameObject, "left", new Vector2(0, 0), new Vector2(0.44f, 1),
                                    Vector2.zero, Vector2.zero);
            var searchHolder = UIFactory.Rt(left.gameObject, "search", new Vector2(0, 1), new Vector2(1, 1),
                                            new Vector2(0, -64), Vector2.zero);
            _search = UIFactory.Input(searchHolder.gameObject, L.T("archive.search.hint"));
            _search.onValueChanged.AddListener(_ => RefreshList());

            var chipRow = UIFactory.Rt(left.gameObject, "chips", new Vector2(0, 1), new Vector2(1, 1),
                                       new Vector2(0, -122), new Vector2(0, -72));
            var (chipScroll, chipContent) = UIFactory.Scroll(chipRow.gameObject);
            chipScroll.horizontal = true; chipScroll.vertical = false;
            var hlg = chipContent.gameObject.AddComponent<HorizontalLayoutGroup>();
            hlg.spacing = 8; hlg.childControlWidth = false; hlg.childControlHeight = true;
            hlg.childForceExpandWidth = false; hlg.childForceExpandHeight = true;
            Object.Destroy(chipContent.GetComponent<VerticalLayoutGroup>());

            var listHolder = UIFactory.Rt(left.gameObject, "list", Vector2.zero, Vector2.one,
                                          new Vector2(0, 8), new Vector2(0, -166));
            var (_, listContent) = UIFactory.Scroll(listHolder.gameObject);
            _listContent = listContent;

            _countLabel = UIFactory.TextAt(left.gameObject, "count", "", UITheme.Tiny, UITheme.Subtle,
                                           new Vector2(0, 1), new Vector2(1, 1),
                                           TextAlignmentOptions.TopRight);
            ((RectTransform)_countLabel.transform).offsetMin = new Vector2(0, -158);
            ((RectTransform)_countLabel.transform).offsetMax = new Vector2(0, -130);

            // ---------------- right column: detail
            var right = UIFactory.Rt(content.gameObject, "right", new Vector2(0.46f, 0), new Vector2(1, 1),
                                     Vector2.zero, Vector2.zero);
            var rp = UIFactory.Panel(right.gameObject, "detailPanel", UITheme.BgInk);
            var (_, detailContent) = UIFactory.Scroll(rp.gameObject);
            _detailContent = detailContent;
        }

        public override void OnOpen()
        {
            G.Audio.PlaySfx(AudioSys.SfxId.PageTurn);
            BuildChips();
            RefreshList();
            if (OpenSearch && _search != null) _search.Select();
            OpenSearch = false;
        }

        private void BuildChips()
        {
            foreach (var kv in _chipBgs) if (kv.Value != null) Object.Destroy(kv.Value.gameObject.transform.parent.gameObject);
            _chipBgs.Clear(); _chips.Clear();

            _chips.Add(G.Localization.T("archive.all"));
            foreach (var c in G.Content.Categories()) _chips.Add(c);
            _chips.Add(G.Localization.T("archive.collected"));

            // Parent: chips scroll content is the second child of the chips holder
            var holder = _search.transform.parent.parent.Find("chips/scroll/content");
            if (holder == null) return;

            foreach (var chip in _chips)
            {
                var row = new GameObject("chip_" + chip, typeof(RectTransform));
                var rt = (RectTransform)row.transform;
                rt.SetParent(holder, false);
                rt.sizeDelta = new Vector2(Mathf.Max(96, chip.Length * 12 + 34), 0);
                var le = row.AddComponent<LayoutElement>();
                le.minWidth = rt.sizeDelta.x; le.preferredWidth = rt.sizeDelta.x;
                var btn = UIFactory.Button(row, chip, () => { _category = chip; RefreshList(); },
                                           UITheme.PanelSoft, UITheme.Small);
                ((RectTransform)btn.transform).anchorMin = Vector2.zero;
                ((RectTransform)btn.transform).anchorMax = Vector2.one;
                ((RectTransform)btn.transform).offsetMin = Vector2.zero;
                ((RectTransform)btn.transform).offsetMax = Vector2.zero;
                _chipBgs[chip] = btn.GetComponent<Image>();
            }
        }

        private string SelectedCategory()
        {
            var L = G.Localization;
            if (_category == L.T("archive.all") || _category == "ALL") return "ALL";
            if (_category == L.T("archive.collected") || _category == "COLLECTED") return "COLLECTED";
            return _category;
        }

        private void RefreshList()
        {
            string cat = SelectedCategory();
            string q = _search != null ? _search.text : "";
            List<ArchiveItemDto> items;
            if (!string.IsNullOrWhiteSpace(q))
                items = G.Archive.Search(q).ConvertAll(h => h.Item);
            else if (cat == "ALL")
                items = new List<ArchiveItemDto>(G.Content.AllArchiveItems);
            else if (cat == "COLLECTED")
                items = G.Archive.Collected();
            else
                items = G.Archive.ByCategory(cat);

            foreach (Transform c in _listContent) Object.Destroy(c.gameObject);
            int shown = 0;
            foreach (var item in items)
            {
                shown++;
                bool collected = G.Save.Data.collectedItems.Contains(item.id);
                var row = UIFactory.ListRow(_listContent, "row_" + item.id, 64);
                var bg = UIFactory.Panel(row.gameObject, "bg",
                    collected ? new Color(0.18f, 0.22f, 0.28f, 0.97f) : UITheme.PanelSoft);
                var btn = bg.gameObject.AddComponent<Button>();
                btn.targetGraphic = bg;
                btn.onClick.AddListener(() => ShowDetail(item));
                UIFactory.TextAt(row.gameObject, "title", item.title, UITheme.Small,
                                 UITheme.Cream, new Vector2(0, 0.5f), new Vector2(0.8f, 1))
                    .margin = new Vector4(14, 0, 0, 0);
                UIFactory.TextAt(row.gameObject, "cat", item.category, UITheme.Tiny,
                                 UITheme.Gold, new Vector2(0, 0), new Vector2(0.8f, 0.5f))
                    .margin = new Vector4(14, 0, 0, 0);
                UIFactory.TextAt(row.gameObject, "state", collected ? "✓" : "·", UITheme.H2,
                                 collected ? UITheme.Correct : UITheme.Subtle,
                                 new Vector2(0.9f, 0), new Vector2(1, 1), TextAlignmentOptions.Center);
            }
            _countLabel.text = shown == 0 ? G.Localization.T("archive.empty") : $"{shown}";
            if (shown > 0) ShowDetail(items[0]);
        }

        private void ShowDetail(ArchiveItemDto item)
        {
            foreach (Transform c in _detailContent) Object.Destroy(c.gameObject);
            var L = G.Localization;

            void Line(string text, int size, Color color, float h, FontStyles style = FontStyles.Normal, float spacing = 0)
            {
                var row = UIFactory.ListRow(_detailContent, "line", h);
                var t = UIFactory.Text(row.gameObject, "t", text, size, color, TextAlignmentOptions.TopLeft, style);
            }

            Line(item.title, UITheme.H1, UITheme.White, 46, FontStyles.Bold);
            Line($"{item.category}   ·   {item.date}   ·   {item.location}", UITheme.Small, UITheme.Gold, 30);
            if (!string.IsNullOrEmpty(item.author) && item.author != "—")
                Line($"By: {item.author}", UITheme.Small, UITheme.Subtle, 26);

            var imgSprite = item.media != null && item.media.type != "Text"
                ? AssetLibrary.I.ImageFor(item.media.@ref) : null;
            if (imgSprite != null)
            {
                var row = UIFactory.ListRow(_detailContent, "img", 260);
                var rt = UIFactory.Rt(row.gameObject, "holder", new Vector2(0.5f, 0), new Vector2(0.5f, 1),
                                      new Vector2(-170, 8), new Vector2(170, -8));
                var img = UIFactory.Img(rt.gameObject, "i", imgSprite, Color.white);
                img.preserveAspect = true;
                if (!string.IsNullOrEmpty(item.media.label))
                    Line(item.media.label, UITheme.Tiny, UITheme.Wrong, 36, FontStyles.Italic);
            }

            float est = Mathf.Clamp(40 + item.description.Length * 0.42f, 120, 900);
            Line(item.description, UITheme.Body, UITheme.Cream, est);

            if (!string.IsNullOrEmpty(item.source))
                Line($"{L.T("archive.source")}: {item.source}", UITheme.Small, UITheme.Subtle, 34, FontStyles.Italic);

            if (item.related != null && item.related.Count > 0)
            {
                Line(L.T("archive.related").ToUpperInvariant(), UITheme.Tiny, UITheme.Gold, 26, FontStyles.Bold);
                foreach (var relId in item.related)
                {
                    var rel = G.Content.GetArchiveItem(relId);
                    if (rel == null) continue;
                    var row = UIFactory.ListRow(_detailContent, "rel", 44);
                    var btn = UIFactory.Button(row.gameObject, "›  " + rel.title, () => ShowDetail(rel),
                                               UITheme.PanelSoft, UITheme.Small);
                    ((RectTransform)btn.transform).anchorMin = Vector2.zero;
                    ((RectTransform)btn.transform).anchorMax = Vector2.one;
                    ((RectTransform)btn.transform).offsetMin = Vector2.zero; ((RectTransform)btn.transform).offsetMax = Vector2.zero;
                }
            }

            bool collected = G.Save.Data.collectedItems.Contains(item.id);
            var cRow = UIFactory.ListRow(_detailContent, "collect", 70);
            UIFactory.Text(cRow.gameObject, "c",
                collected ? "✓  " + L.T("archive.collected.on") : L.T("archive.notcollected"),
                UITheme.Small, collected ? UITheme.Correct : UITheme.Subtle, TextAlignmentOptions.Center);
        }
    }
}
