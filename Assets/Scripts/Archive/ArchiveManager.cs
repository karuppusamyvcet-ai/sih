using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using DHJ.Core;
using DHJ.Data;

namespace DHJ.Archive
{
    /// <summary>
    /// The in-game search engine + "My Digital Archive" collection state.
    /// Instant local scoring search over title/keywords/category/description.
    /// </summary>
    public class ArchiveManager : MonoBehaviour
    {
        private static readonly HashSet<string> StopWords = new()
        {
            "the","a","an","of","in","on","at","to","and","or","is","was","were",
            "what","who","when","where","which","did","do","does","his","her","he","she",
            "it","its","by","for","with","about","from","that","this","as","be","are","how"
        };

        public void Initialize() { /* subscriptions handled by interactables */ }

        // ------------------------------------------------------------ search
        public List<SearchHit> Search(string query, int maxResults = 24)
        {
            var hits = new List<SearchHit>();
            if (string.IsNullOrWhiteSpace(query) || GameManager.I.Content == null)
            {
                EventBus.Publish(new ArchiveSearchedEvent { Query = query ?? "", Results = 0 });
                return hits;
            }
            var tokens = Tokenize(query).Where(t => !StopWords.Contains(t)).Distinct().ToList();
            foreach (var item in GameManager.I.Content.AllArchiveItems)
            {
                float score = Score(item, tokens, query.Trim().ToLowerInvariant());
                if (score > 0.5f) hits.Add(new SearchHit { Item = item, Score = score });
            }
            hits.Sort((a, b) => b.Score.CompareTo(a.Score));
            if (hits.Count > maxResults) hits.RemoveRange(maxResults, hits.Count - maxResults);
            EventBus.Publish(new ArchiveSearchedEvent { Query = query, Results = hits.Count });
            return hits;
        }

        private static float Score(ArchiveItemDto item, List<string> tokens, string rawQuery)
        {
            float s = 0f;
            string title = item.title?.ToLowerInvariant() ?? "";
            string cat   = item.category?.ToLowerInvariant() ?? "";
            string desc  = item.description?.ToLowerInvariant() ?? "";
            string loc   = item.location?.ToLowerInvariant() ?? "";
            string date  = item.date?.ToLowerInvariant() ?? "";
            var kws      = item.keywords ?? new List<string>();

            if (!string.IsNullOrEmpty(rawQuery) && title.Contains(rawQuery)) s += 6f;
            foreach (var t in tokens)
            {
                if (title.Contains(t)) s += 4f;
                if (kws.Any(k => k.ToLowerInvariant().Contains(t))) s += 3f;
                if (cat.Contains(t)) s += 3f;
                if (loc.Contains(t)) s += 2f;
                if (date.Contains(t)) s += 2.5f;
                if (desc.Contains(t)) s += 1f;
            }
            return s;
        }

        public static IEnumerable<string> Tokenize(string q)
        {
            var sb = new System.Text.StringBuilder();
            foreach (char c in q.ToLowerInvariant())
            {
                if (char.IsLetterOrDigit(c)) sb.Append(c);
                else if (sb.Length > 0) { yield return sb.ToString(); sb.Clear(); }
            }
            if (sb.Length > 0) yield return sb.ToString();
        }

        // ------------------------------------------------------- collections
        public List<ArchiveItemDto> Collected()
        {
            var save = GameManager.I.Save.Data;
            var list = new List<ArchiveItemDto>();
            foreach (var id in save.collectedItems)
            {
                var item = GameManager.I.Content.GetArchiveItem(id);
                if (item != null) list.Add(item);
            }
            return list;
        }

        public List<ArchiveItemDto> ByCategory(string category)
        {
            return GameManager.I.Content.AllArchiveItems
                .Where(a => a.category == category)
                .OrderBy(a => a.title).ToList();
        }

        public bool CollectIfNew(string archiveId)
        {
            bool added = GameManager.I.Save.Collect(archiveId);
            if (added)
            {
                EventBus.Publish(new ArchiveItemCollected { ArchiveId = archiveId });
                GameManager.I.Save.AddPoints(5);
            }
            return added;
        }

        public int CompletionPercent()
        {
            int total = GameManager.I.Content.AllArchiveItems.Count();
            if (total == 0) return 0;
            return Mathf.RoundToInt(100f * GameManager.I.Save.Data.collectedItems.Count / total);
        }
    }

    public struct SearchHit
    {
        public ArchiveItemDto Item; public float Score;
    }
}
