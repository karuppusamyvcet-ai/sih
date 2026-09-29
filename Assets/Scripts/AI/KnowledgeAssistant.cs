using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;
using UnityEngine.Networking;
using DHJ.Core;
using DHJ.Data;

namespace DHJ.AI
{
    /// <summary>
    /// "Archive Guide" — retrieval-first educational assistant.
    ///
    ///   PLAYER QUESTION
    ///     → intent + keyword extraction
    ///     → ARCHIVE SEARCH (local approved knowledge base)
    ///     → answer composed ONLY from retrieved archive entries
    ///     → sources displayed alongside the answer
    ///
    /// An optional online endpoint (Settings.aiEndpoint) may wrap a real LLM with
    /// RAG server-side; when unset/unreachable/offline the game silently uses the
    /// local retrieval path and the UI labels itself "Offline Archive Guide".
    /// The assistant never invents facts: no retrieval → honest fallback message.
    /// </summary>
    public class KnowledgeAssistant : MonoBehaviour
    {
        public struct AssistantReply
        {
            public string Text;
            public List<ArchiveItemDto> Sources;
            public bool FromOnlineAi;
        }

        public bool IsOnlineMode => false; // flips true only while a live endpoint answers

        public IEnumerator Ask(string question, System.Action<AssistantReply> onReply)
        {
            EventBus.Publish(new AssistantAskedEvent { Question = question });

            // -------- optional online RAG endpoint (off by default, never required)
            string endpoint = GameManager.I.Settings.Data.aiEndpoint;
            if (!string.IsNullOrEmpty(endpoint) && Application.internetReachability != NetworkReachability.NotReachable)
            {
                AssistantReply? online = null;
                yield return TryOnline(endpoint, question, r => online = r);
                if (online.HasValue)
                {
                    onReply?.Invoke(online.Value);
                    yield break;
                }
            }

            // -------- offline retrieval path
            yield return null;
            var reply = ComposeOffline(question);
            onReply?.Invoke(reply);
        }

        private IEnumerator TryOnline(string endpoint, string question, System.Action<AssistantReply?> done)
        {
            var payload = JsonUtility.ToJson(new OnlineQuery { question = question });
            using var req = new UnityWebRequest(endpoint, "POST");
            req.uploadHandler = new UploadHandlerRaw(Encoding.UTF8.GetBytes(payload));
            req.downloadHandler = new DownloadHandlerBuffer();
            req.SetRequestHeader("Content-Type", "application/json");
            req.timeout = 6;
            yield return req.SendWebRequest();
            AssistantReply? result = null;
            if (req.result == UnityWebRequest.Result.Success)
            {
                try
                {
                    var dto = JsonUtility.FromJson<OnlineAnswer>(req.downloadHandler.text);
                    if (dto != null && !string.IsNullOrEmpty(dto.answer))
                    {
                        var sources = new List<ArchiveItemDto>();
                        foreach (var s in dto.sources ?? new List<string>())
                        {
                            var item = GameManager.I.Content.GetArchiveItem(s);
                            if (item != null) sources.Add(item);
                        }
                        result = new AssistantReply { Text = dto.answer, Sources = sources, FromOnlineAi = true };
                    }
                }
                catch { /* fall through to offline */ }
            }
            done(result);
        }

        [System.Serializable] private class OnlineQuery { public string question; }
        [System.Serializable] private class OnlineAnswer { public string answer; public List<string> sources; }

        // ------------------------------------------------------------- offline
        private AssistantReply ComposeOffline(string question)
        {
            var hits = GameManager.I.Archive.Search(question, 3);
            if (hits.Count == 0)
            {
                return new AssistantReply
                {
                    Text = GameManager.I.Localization.T("ai.noresult"),
                    Sources = new List<ArchiveItemDto>(),
                    FromOnlineAi = false
                };
            }

            var sb = new StringBuilder();
            var q = question.ToLowerInvariant();
            bool wantsList = q.Contains("list") || q.Contains("all") || q.Contains("which");
            var top = hits[0].Item;

            if (wantsList && hits.Count > 1)
            {
                sb.AppendLine($"I found {hits.Count} archive entries that answer that best:");
                foreach (var h in hits)
                    sb.AppendLine($"  • {h.Item.title} — {Shorten(h.Item.description, 110)}");
            }
            else
            {
                sb.Append(BuildAnswerFromItem(top));
                if (hits.Count > 1)
                {
                    sb.Append($"\n\nRelated: {hits[1].Item.title}");
                    if (hits.Count > 2) sb.Append($" · {hits[2].Item.title}");
                }
            }
            return new AssistantReply
            {
                Text = sb.ToString().Trim(),
                Sources = hits.Select(h => h.Item).ToList(),
                FromOnlineAi = false
            };
        }

        private static string BuildAnswerFromItem(ArchiveItemDto it)
        {
            var sb = new StringBuilder();
            sb.Append(it.description);
            if (!string.IsNullOrEmpty(it.date) && it.date != "—")
                sb.Append($"\n\nDate: {it.date}");
            if (!string.IsNullOrEmpty(it.location) && it.location != "—")
                sb.Append($"   |   Place: {it.location}");
            return sb.ToString();
        }

        private static string Shorten(string s, int n) =>
            string.IsNullOrEmpty(s) || s.Length <= n ? s ?? "" : s.Substring(0, n - 1).TrimEnd() + "…";
    }
}
