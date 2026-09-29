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
    /// Quiz flow: intro → per-type question screens → per-question educational
    /// feedback (never just "wrong") → summary. Passing the final challenge
    /// opens the certificate. Architecture is data-driven; new question types
    /// only need a renderer here.
    /// </summary>
    public class QuizScreen : FullScreenPanel
    {
        public string QuizId;

        private RectTransform _content;
        private QuizManager.Session _session;

        protected override void BuildUI(RectTransform root)
        {
            var content = Window(root, new Vector2(1240, 800), "");
            _content = content;
        }

        public override void OnOpen()
        {
            _session = G.Quizzes.StartQuiz(QuizId);
            if (_session == null) { ui.Pop(this); return; }
            ShowIntro();
        }

        private void SetTitle(string t)
        {
            var bar = _content.parent.Find("titlebar/title");
            if (bar != null) bar.GetComponent<TextMeshProUGUI>().text = t;
        }

        private void Clear()
        {
            foreach (Transform c in _content) Object.Destroy(c.gameObject);
        }

        // ---------------------------------------------------------------- intro
        private void ShowIntro()
        {
            Clear();
            SetTitle(_session.Data.title);
            var L = G.Localization;

            var holder = UIFactory.Rt(_content.gameObject, "intro", Vector2.zero, Vector2.one, Vector2.zero, Vector2.zero);
            UIFactory.TextAt(holder.gameObject, "eyebrow", "KNOWLEDGE CHALLENGE", UITheme.Small, UITheme.Gold,
                             new Vector2(0, 0.86f), new Vector2(1, 1), TextAlignmentOptions.Center, FontStyles.Bold);
            var t = UIFactory.TextAt(holder.gameObject, "intro", _session.Data.intro ?? "", UITheme.Body,
                                     UITheme.Cream, new Vector2(0.08f, 0.5f), new Vector2(0.92f, 0.84f),
                                     TextAlignmentOptions.Center);
            t.enableWordWrapping = true;
            var best = G.Quizzes.BestResult(QuizId);
            if (best != null)
                UIFactory.TextAt(holder.gameObject, "best",
                    $"{L.T("quiz.bestscore")}: {best.bestScore} / {best.maxScore}",
                    UITheme.Small, UITheme.Subtle, new Vector2(0.2f, 0.4f), new Vector2(0.8f, 0.48f),
                    TextAlignmentOptions.Center);
            var btn = UIFactory.Button(holder.gameObject, L.T("quiz.start"), () => ShowQuestion(),
                                       gold: true, baseSize: UITheme.H2);
            CenterBottom((RectTransform)btn.transform, 340, 68, 40);
        }

        private static void CenterBottom(RectTransform rt, float w, float h, float bottom)
        {
            rt.anchorMin = rt.anchorMax = new Vector2(0.5f, 0);
            rt.offsetMin = new Vector2(-w / 2, bottom);
            rt.offsetMax = new Vector2(w / 2, bottom + h);
        }

        // ---------------------------------------------------------------- question
        private void ShowQuestion()
        {
            Clear();
            var q = _session.Current;
            var L = G.Localization;
            SetTitle(_session.Data.title);

            UIFactory.TextAt(_content.gameObject, "progress",
                $"Question {_session.Index + 1} / {_session.Data.questions.Count}      ·      {L.T("quiz.score")}: {_session.Score}",
                UITheme.Small, UITheme.Subtle, new Vector2(0, 1), new Vector2(1, 1),
                TextAlignmentOptions.TopRight);
            var progRt = (RectTransform)_content.Find("progress");
            progRt.offsetMin = new Vector2(0, -34);

            var qt = UIFactory.TextAt(_content.gameObject, "q", q.question, UITheme.H2, UITheme.White,
                                      new Vector2(0.03f, 0.72f), new Vector2(0.97f, 0.97f),
                                      TextAlignmentOptions.Center, FontStyles.Bold);
            qt.enableWordWrapping = true;

            var answerZone = UIFactory.Rt(_content.gameObject, "answers", new Vector2(0, 0), new Vector2(1, 0.68f),
                                          Vector2.zero, Vector2.zero);

            switch (q.Type)
            {
                case QuestionType.Ordering:   BuildOrdering(answerZone, q); break;
                case QuestionType.Matching:   BuildMatching(answerZone, q); break;
                default:                      BuildChoices(answerZone, q); break;
            }
        }

        private void BuildChoices(RectTransform zone, QuestionDto q)
        {
            int n = q.answers.Count;
            for (int i = 0; i < n; i++)
            {
                int idx = i;
                float row = (float)i / n;
                var rt = UIFactory.Rt(zone.gameObject, "ans" + i,
                    new Vector2(0.14f, 1 - row - 1f / n), new Vector2(0.86f, 1 - row),
                    new Vector2(0, 6), new Vector2(0, -6));
                var btn = UIFactory.Button(rt.gameObject, q.answers[i], () =>
                {
                    bool correct = G.Quizzes.Submit(_session, new List<int> { idx });
                    ShowFeedback(q, correct);
                }, UITheme.PanelSoft, UITheme.Body);
                ((RectTransform)btn.transform).anchorMin = Vector2.zero;
                ((RectTransform)btn.transform).anchorMax = Vector2.one;
                ((RectTransform)btn.transform).offsetMin = Vector2.zero;
                ((RectTransform)btn.transform).offsetMax = Vector2.zero;
            }
        }

        private void BuildOrdering(RectTransform zone, QuestionDto q)
        {
            // display order starts shuffled deterministically (so "already correct" never appears)
            var order = new List<int>();
            for (int i = 0; i < q.answers.Count; i++) order.Add(i);
            for (int i = order.Count - 1; i > 0; i--)
            {
                int j = (i * 7 + 3) % order.Count;
                (order[i], order[j]) = (order[j], order[i]);
            }
            if (IsIdentity(order)) order.Reverse();

            var listZone = UIFactory.Rt(zone.gameObject, "orderList",
                new Vector2(0.1f, 0.2f), new Vector2(0.9f, 0.98f), Vector2.zero, Vector2.zero);

            void Render()
            {
                foreach (Transform c in listZone) Object.Destroy(c.gameObject);
                int n = order.Count;
                for (int row = 0; row < n; row++)
                {
                    int r = row;
                    int origIdx = order[row];
                    var rt = UIFactory.Rt(listZone.gameObject, "row" + row,
                        new Vector2(0, 1 - (row + 1f) / n), new Vector2(1, 1 - (float)row / n),
                        new Vector2(0, 4), new Vector2(0, -4));
                    UIFactory.Panel(rt.gameObject, "bg", UITheme.PanelSoft);
                    UIFactory.TextAt(rt.gameObject, "ord", $"{row + 1}", UITheme.Body, UITheme.Gold,
                                     new Vector2(0.02f, 0), new Vector2(0.09f, 1), TextAlignmentOptions.Center, FontStyles.Bold);
                    UIFactory.TextAt(rt.gameObject, "txt", q.answers[origIdx], UITheme.Small, UITheme.Cream,
                                     new Vector2(0.1f, 0), new Vector2(0.82f, 1), TextAlignmentOptions.MidlineLeft);
                    var up = UIFactory.Button(rt.gameObject, "▲", () => { Swap(order, r, r - 1); Render(); },
                                              UITheme.BgInk, UITheme.Small);
                    AnchorCorner((RectTransform)up.transform, new Vector2(0.84f, 0), new Vector2(0.915f, 1));
                    var dn = UIFactory.Button(rt.gameObject, "▼", () => { Swap(order, r, r + 1); Render(); },
                                              UITheme.BgInk, UITheme.Small);
                    AnchorCorner((RectTransform)dn.transform, new Vector2(0.925f, 0), new Vector2(1, 1));
                    up.interactable = r > 0; dn.interactable = r < n - 1;
                }
            }
            Render();

            var submit = UIFactory.Button(zone.gameObject, G.Localization.T("quiz.continue"), () =>
            {
                bool correct = G.Quizzes.Submit(_session, new List<int>(order));
                ShowFeedback(q, correct, GivenOrderText(q, order));
            }, gold: true, baseSize: UITheme.Body);
            CenterBottom((RectTransform)submit.transform, 300, 62, 6);
        }

        private string GivenOrderText(QuestionDto q, List<int> order)
        {
            var sb = new System.Text.StringBuilder("Your order: ");
            for (int i = 0; i < order.Count; i++)
                sb.Append(i == 0 ? "" : "  →  ").Append(q.answers[order[i]]);
            return sb.ToString();
        }

        private static bool IsIdentity(List<int> l) { for (int i = 0; i < l.Count; i++) if (l[i] != i) return false; return true; }
        private static void Swap(List<int> l, int a, int b)
        {
            if (b < 0 || b >= l.Count) return;
            (l[a], l[b]) = (l[b], l[a]);
        }

        private void BuildMatching(RectTransform zone, QuestionDto q)
        {
            // right column shuffled; remember original indices
            var rightOrder = new List<int>();
            for (int i = 0; i < q.pairs.Count; i++) rightOrder.Add(i);
            for (int i = rightOrder.Count - 1; i > 0; i--)
            {
                int j = (i * 5 + 2) % rightOrder.Count;
                (rightOrder[i], rightOrder[j]) = (rightOrder[j], rightOrder[i]);
            }
            if (IsIdentity(rightOrder) && rightOrder.Count > 1) rightOrder.Reverse();

            var mapping = new Dictionary<int, int>();      // left index -> right ORIGINAL index
            int selectedLeft = -1;
            var leftBtns = new List<Button>();
            var rightBtns = new List<Button>();
            var pairLabels = new Dictionary<int, TextMeshProUGUI>();

            var zoneL = UIFactory.Rt(zone.gameObject, "left", new Vector2(0.06f, 0.22f), new Vector2(0.47f, 0.98f), Vector2.zero, Vector2.zero);
            var zoneR = UIFactory.Rt(zone.gameObject, "right", new Vector2(0.53f, 0.22f), new Vector2(0.94f, 0.98f), Vector2.zero, Vector2.zero);

            TextMeshProUGUI hint = UIFactory.TextAt(zone.gameObject, "hint",
                "Tap an item on the left, then its match on the right.", UITheme.Small, UITheme.Subtle,
                new Vector2(0.06f, 0.02f), new Vector2(0.94f, 0.2f), TextAlignmentOptions.Center);

            void RefreshColors()
            {
                for (int i = 0; i < leftBtns.Count; i++)
                    leftBtns[i].GetComponent<Image>().color = i == selectedLeft ? UITheme.Gold : UITheme.PanelSoft;
            }

            int n = q.pairs.Count;
            for (int i = 0; i < n; i++)
            {
                int li = i;
                var rt = UIFactory.Rt(zoneL.gameObject, "L" + i,
                    new Vector2(0, 1 - (i + 1f) / n), new Vector2(1, 1 - (float)i / n), new Vector2(0, 4), new Vector2(0, -4));
                var b = UIFactory.Button(rt.gameObject, q.pairs[i].left, () =>
                    { selectedLeft = li; RefreshColors(); }, UITheme.PanelSoft, UITheme.Small);
                ((RectTransform)b.transform).anchorMin = Vector2.zero; ((RectTransform)b.transform).anchorMax = Vector2.one;
                ((RectTransform)b.transform).offsetMin = Vector2.zero; ((RectTransform)b.transform).offsetMax = Vector2.zero;
                leftBtns.Add(b);

                var badge = UIFactory.TextAt(rt.gameObject, "badge", "", UITheme.Small, UITheme.Gold,
                                             new Vector2(0.88f, 0), new Vector2(1, 1), TextAlignmentOptions.Center, FontStyles.Bold);
                pairLabels[li] = badge;
            }
            for (int i = 0; i < n; i++)
            {
                int displayRow = i;
                int origRight = rightOrder[i];
                var rt = UIFactory.Rt(zoneR.gameObject, "R" + i,
                    new Vector2(0, 1 - (i + 1f) / n), new Vector2(1, 1 - (float)i / n), new Vector2(0, 4), new Vector2(0, -4));
                var b = UIFactory.Button(rt.gameObject, q.pairs[origRight].right, () =>
                {
                    if (selectedLeft < 0) return;
                    // clear any previous use of this right item
                    foreach (var kv in new Dictionary<int, int>(mapping))
                        if (kv.Value == origRight) { mapping.Remove(kv.Key); pairLabels[kv.Key].text = ""; }
                    mapping[selectedLeft] = origRight;
                    pairLabels[selectedLeft].text = "✓";
                    selectedLeft = -1; RefreshColors();
                }, UITheme.BgInk, UITheme.Small);
                ((RectTransform)b.transform).anchorMin = Vector2.zero; ((RectTransform)b.transform).anchorMax = Vector2.one;
                ((RectTransform)b.transform).offsetMin = Vector2.zero; ((RectTransform)b.transform).offsetMax = Vector2.zero;
                rightBtns.Add(b);
            }

            var submit = UIFactory.Button(zone.gameObject, G.Localization.T("quiz.continue"), () =>
            {
                bool correct = mapping.Count == n && G.Quizzes.Submit(_session, null, new Dictionary<int, int>(mapping));
                if (mapping.Count < n) correct = G.Quizzes.Submit(_session, null, null);
                string given = mapping.Count == n ? "All pairs matched." : "Some pairs were left unmatched.";
                ShowFeedback(q, correct, given);
            }, gold: true, baseSize: UITheme.Body);
            CenterBottom((RectTransform)submit.transform, 300, 62, 6);
        }

        private static void AnchorCorner(RectTransform rt, Vector2 min, Vector2 max)
        {
            rt.anchorMin = min; rt.anchorMax = max; rt.offsetMin = Vector2.zero; rt.offsetMax = Vector2.zero;
        }

        // ---------------------------------------------------------------- feedback
        private void ShowFeedback(QuestionDto q, bool correct, string given = null)
        {
            Clear();
            var L = G.Localization;
            G.Audio.PlaySfx(correct ? AudioSys.SfxId.QuizCorrect : AudioSys.SfxId.QuizIncorrect);

            UIFactory.TextAt(_content.gameObject, "verdict",
                correct ? "✓  " + L.T("quiz.correct").ToUpperInvariant() : "✗  " + L.T("quiz.incorrect").ToUpperInvariant(),
                UITheme.H1, correct ? UITheme.Correct : UITheme.Wrong,
                new Vector2(0, 0.82f), new Vector2(1, 0.98f), TextAlignmentOptions.Center, FontStyles.Bold);

            if (correct)
                UIFactory.TextAt(_content.gameObject, "pts", $"+{q.points} {L.T("hud.points")}",
                    UITheme.Body, UITheme.Gold, new Vector2(0, 0.76f), new Vector2(1, 0.83f), TextAlignmentOptions.Center);

            var explHolder = UIFactory.Rt(_content.gameObject, "expl", new Vector2(0.10f, 0.30f), new Vector2(0.90f, 0.72f),
                                          Vector2.zero, Vector2.zero);
            UIFactory.Panel(explHolder.gameObject, "bg", UITheme.BgInk);
            UIFactory.TextAt(explHolder.gameObject, "eyebrow", L.T("quiz.explanation").ToUpperInvariant(),
                UITheme.Tiny, UITheme.Gold, new Vector2(0, 0.82f), new Vector2(1, 1), TextAlignmentOptions.TopLeft, FontStyles.Bold)
                .margin = new Vector4(22, 8, 0, 0);
            var et = UIFactory.TextAt(explHolder.gameObject, "txt",
                (given != null ? given + "\n\n" : "") + q.explanation,
                UITheme.Body, UITheme.Cream, new Vector2(0, 0.1f), new Vector2(1, 0.8f));
            et.margin = new Vector4(22, 4, 22, 6);
            if (!string.IsNullOrEmpty(q.source))
                UIFactory.TextAt(explHolder.gameObject, "src", L.T("archive.source") + ": " + q.source,
                    UITheme.Tiny, UITheme.Subtle, new Vector2(0, 0), new Vector2(1, 0.12f), TextAlignmentOptions.TopLeft, FontStyles.Italic)
                    .margin = new Vector4(22, 4, 22, 4);

            var btn = UIFactory.Button(_content.gameObject,
                _session.IsLast ? L.T("quiz.complete") : L.T("quiz.continue"),
                () =>
                {
                    if (_session.IsLast) ShowSummary();
                    else { G.Quizzes.Advance(_session); ShowQuestion(); }
                }, gold: true, baseSize: UITheme.Body);
            CenterBottom((RectTransform)btn.transform, 320, 64, 24);
        }

        // ---------------------------------------------------------------- summary
        private void ShowSummary()
        {
            Clear();
            var L = G.Localization;
            int score = _session.Score, max = _session.MaxScore;
            var result = G.Quizzes.Finish(_session);
            bool passed = (float)score / max >= 0.6f;

            UIFactory.TextAt(_content.gameObject, "done", L.T("quiz.complete").ToUpperInvariant(),
                UITheme.H1, UITheme.Gold, new Vector2(0, 0.82f), new Vector2(1, 0.98f),
                TextAlignmentOptions.Center, FontStyles.Bold);

            UIFactory.TextAt(_content.gameObject, "score", $"{L.T("quiz.score")}: {score} / {max}",
                UITheme.Title, UITheme.White, new Vector2(0, 0.62f), new Vector2(1, 0.80f),
                TextAlignmentOptions.Center, FontStyles.Bold);

            string verdict = passed
                ? "Well done — this section of the archive is yours."
                : "Good effort — review the exhibits and try again.";
            UIFactory.TextAt(_content.gameObject, "verdict", verdict,
                UITheme.Body, passed ? UITheme.Correct : UITheme.Cream,
                new Vector2(0.1f, 0.52f), new Vector2(0.9f, 0.62f), TextAlignmentOptions.Center);

            var btn = UIFactory.Button(_content.gameObject, L.T("quiz.close"), () =>
            {
                ui.Pop(this);
                if (QuizId == "quiz_final" && G.Quizzes.IsPassed("quiz_final"))
                    ui.ShowCertificate();
            }, gold: true, baseSize: UITheme.Body);
            CenterBottom((RectTransform)btn.transform, 300, 64, 60);
        }
    }
}
