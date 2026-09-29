using System;
using System.Collections.Generic;
using UnityEngine;
using DHJ.Core;
using DHJ.Data;
using DHJ.Save;

namespace DHJ.Quiz
{
    /// <summary>
    /// Reusable quiz session engine. Question types: MultipleChoice, TrueFalse,
    /// Ordering, Matching. UI consumes the session state; scoring + educational
    /// feedback live here so every quiz behaves identically.
    /// </summary>
    public class QuizManager : MonoBehaviour
    {
        public class Session
        {
            public QuizDto Data;
            public int Index;
            public int Score;
            public readonly List<bool> AnswersCorrect = new();

            public QuestionDto Current => Data.questions[Index];
            public bool IsLast => Index >= Data.questions.Count - 1;
            public int MaxScore { get { int m = 0; foreach (var q in Data.questions) m += q.points; return m; } }
        }

        public Session Active { get; private set; }

        public Session StartQuiz(string quizId)
        {
            var data = GameManager.I.Content.GetQuiz(quizId);
            if (data == null)
            {
                Debug.LogWarning($"[Quiz] Unknown quiz '{quizId}'");
                return null;
            }
            Active = new Session { Data = data };
            return Active;
        }

        /// <summary>Grade an answer. For MC/TF: indices chosen. Ordering: order chosen. Matching: dict leftIndex->rightIndex.</summary>
        public bool Submit(Session s, List<int> choice, Dictionary<int,int> matching = null)
        {
            bool correct = s.Current.Type switch
            {
                QuestionType.MultipleChoice => choice != null && choice.Count == 1 && choice[0] == s.Current.correctIndex,
                QuestionType.TrueFalse      => choice != null && choice.Count == 1 && choice[0] == s.Current.correctIndex,
                QuestionType.Ordering       => IsOrderCorrect(s.Current, choice),
                QuestionType.Matching       => IsMatchCorrect(s.Current, matching),
                _ => false
            };
            s.AnswersCorrect.Add(correct);
            if (correct) s.Score += s.Current.points;
            return correct;
        }

        private static bool IsOrderCorrect(QuestionDto q, List<int> choice)
        {
            if (choice == null || q.correctOrder == null || choice.Count != q.correctOrder.Count) return false;
            for (int i = 0; i < choice.Count; i++) if (choice[i] != q.correctOrder[i]) return false;
            return true;
        }

        private static bool IsMatchCorrect(QuestionDto q, Dictionary<int, int> matching)
        {
            if (matching == null || q.pairs == null || matching.Count != q.pairs.Count) return false;
            // correct mapping: right list is a permutation; validate by comparing right texts
            for (int li = 0; li < q.pairs.Count; li++)
            {
                if (!matching.TryGetValue(li, out int ri)) return false;
                // UI passes the shuffled index; the caller maps it back — here we assume
                // matching[li] already equals the original pair index.
                if (matching[li] != li) return false;
            }
            return true;
        }

        public void Advance(Session s) => s.Index = Math.Min(s.Index + 1, s.Data.questions.Count - 1);

        public QuizResult Finish(Session s)
        {
            var result = GameManager.I.Save.RecordQuizResult(s.Data.id, s.Score, s.MaxScore);
            GameManager.I.Save.AddPoints(s.Score / 2);
            EventBus.Publish(new QuizCompletedEvent { QuizId = s.Data.id, Score = s.Score, MaxScore = s.MaxScore });
            if (s.Score >= s.MaxScore) GameManager.I.Achievements.TryUnlock("perfect_quiz");
            Active = null;
            return result;
        }

        public QuizResult BestResult(string quizId) => GameManager.I.Save.GetQuizResult(quizId);
        public bool IsPassed(string quizId, float passFraction = 0.6f)
        {
            var r = BestResult(quizId);
            return r != null && r.maxScore > 0 && (float)r.bestScore / r.maxScore >= passFraction;
        }
    }
}
