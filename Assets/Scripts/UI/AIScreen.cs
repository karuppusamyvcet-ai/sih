using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DHJ.Core;

namespace DHJ.UI
{
    /// <summary>
    /// Archive Guide chat panel. Every answer carries its sources and a label that
    /// shows whether it came from the local knowledge base ("Offline Archive
    /// Guide") or a live endpoint — honesty is part of the UX.
    /// </summary>
    public class AIScreen : FullScreenPanel
    {
        private RectTransform _content, _chatContent;
        private TMP_InputField _input;
        private ScrollRect _scroll;
        private bool _busy;

        protected override void BuildUI(RectTransform root)
        {
            _content = Window(root, new Vector2(900, 820), "");
        }

        public override void OnOpen()
        {
            foreach (Transform c in _content) Object.Destroy(c.gameObject);
            var L = G.Localization;
            var bar = _content.parent.Find("titlebar/title");
            if (bar != null) bar.GetComponent<TextMeshProUGUI>().text = L.T("ai.title");

            // mode badge
            UIFactory.TextAt(_content.gameObject, "mode", "● " + L.T("ai.offline"),
                UITheme.Tiny, UITheme.Gold, new Vector2(0, 1), new Vector2(1, 1), TextAlignmentOptions.TopRight)
                .GetComponent<RectTransform>().offsetMin = new Vector2(0, -26);

            var chatHolder = UIFactory.Rt(_content.gameObject, "chat", Vector2.zero, Vector2.one,
                                          new Vector2(0, 96), new Vector2(0, -24));
            var (scroll, content) = UIFactory.Scroll(chatHolder.gameObject);
            _scroll = scroll; _chatContent = content;

            // input row
            var row = UIFactory.Rt(_content.gameObject, "inputRow", new Vector2(0, 0), new Vector2(1, 0),
                                   new Vector2(0, 16), new Vector2(0, 86));
            var inputHolder = UIFactory.Rt(row.gameObject, "ih", new Vector2(0, 0), new Vector2(0.78f, 1),
                                           Vector2.zero, Vector2.zero);
            _input = UIFactory.Input(inputHolder.gameObject, L.T("ai.hint"));
            _input.onSubmit.AddListener(_ => Ask());
            var btnHolder = UIFactory.Rt(row.gameObject, "bh", new Vector2(0.80f, 0), new Vector2(1, 1),
                                         Vector2.zero, Vector2.zero);
            var send = UIFactory.Button(btnHolder.gameObject, "➤", Ask, gold: true, baseSize: UITheme.H2);
            var brt = (RectTransform)send.transform;
            brt.anchorMin = Vector2.zero; brt.anchorMax = Vector2.one;
            brt.offsetMin = Vector2.zero; brt.offsetMax = Vector2.zero;

            // suggestion chips
            var chips = UIFactory.Rt(_content.gameObject, "chips", new Vector2(0, 0), new Vector2(1, 0),
                                     new Vector2(0, 74), new Vector2(0, 118));
            string[] suggestions = { "constitution", "education", "books", "memorials", "equality", "poona pact" };
            for (int i = 0; i < suggestions.Length; i++)
            {
                int idx = i;
                float w = 1f / suggestions.Length;
                var rt = UIFactory.Rt(chips.gameObject, "c" + i, new Vector2(w * i + 0.005f, 0),
                                      new Vector2(w * (i + 1) - 0.005f, 1), Vector2.zero, Vector2.zero);
                UIFactory.Button(rt.gameObject, suggestions[i], () =>
                {
                    _input.text = suggestions[idx];
                    Ask();
                }, UITheme.PanelSoft, UITheme.Tiny);
            }

            AddBubble(L.T("ai.welcome"), true, null);
        }

        private void Ask()
        {
            if (_busy || _input == null) return;
            string q = _input.text.Trim();
            if (q.Length == 0) return;
            _input.text = "";
            AddBubble(q, false, null);
            _busy = true;
            AddBubble(L.T("ai.thinking"), true, null, transient: true);
            GameObjectCoroutiner.Run(ui, AskRoutine(q));
        }

        private System.Collections.IEnumerator AskRoutine(string q)
        {
            AI.KnowledgeAssistant.AssistantReply reply = default;
            bool got = false;
            yield return G.Assistant.Ask(q, r => { reply = r; got = true; });
            while (!got) yield return null;
            RemoveTransient();
            AddBubble(reply.Text, true, reply.Sources, reply.FromOnlineAi);
            _busy = false;
        }

        private void AddBubble(string text, bool fromGuide, List<Data.ArchiveItemDto> sources,
            bool fromOnline = false, bool transient = false)
        {
            float est = Mathf.Clamp(44 + text.Length * 0.40f, 60, 620);
            var row = UIFactory.ListRow(_chatContent, transient ? "thinking" : "msg", est);
            var holder = UIFactory.Rt(row.gameObject, "holder",
                fromGuide ? new Vector2(0f, 0) : new Vector2(0.22f, 0),
                fromGuide ? new Vector2(0.78f, 1) : new Vector2(1f, 1),
                Vector2.zero, Vector2.zero);
            UIFactory.Panel(holder.gameObject, "bg",
                fromGuide ? UITheme.PanelSoft : new Color(0.55f, 0.44f, 0.20f, 0.9f));
            var t = UIFactory.TextAt(holder.gameObject, "t", text, UITheme.Small,
                transient ? UITheme.Subtle : UITheme.Cream, Vector2.zero, Vector2.one,
                TextAlignmentOptions.TopLeft, transient ? FontStyles.Italic : FontStyles.Normal);
            t.margin = new Vector4(16, 10, 16, 10);

            if (sources != null && sources.Count > 0)
            {
                var srow = UIFactory.ListRow(_chatContent, "src", 30 + 30 * sources.Count);
                var sholder = UIFactory.Rt(srow.gameObject, "h", new Vector2(0, 0), new Vector2(0.78f, 1),
                                           Vector2.zero, Vector2.zero);
                var sb = new System.Text.StringBuilder("◈ " + G.Localization.T("ai.sources") + ":\n");
                foreach (var s in sources)
                    sb.Append("   • ").Append(s.title).Append("  [").Append(s.id).Append("]\n");
                var st = UIFactory.TextAt(sholder.gameObject, "t", sb.ToString().TrimEnd(),
                    UITheme.Tiny, UITheme.Gold, Vector2.zero, Vector2.one, TextAlignmentOptions.TopLeft, FontStyles.Italic);
                st.margin = new Vector4(16, 2, 8, 2);
            }
            ScrollToBottom();
        }

        private void RemoveTransient()
        {
            foreach (Transform c in _chatContent)
                if (c.name.StartsWith("thinking")) Object.Destroy(c.gameObject);
        }

        private void ScrollToBottom()
        {
            Canvas.ForceUpdateCanvases();
            if (_scroll != null) _scroll.normalizedPosition = Vector2.zero;
        }
    }
}
