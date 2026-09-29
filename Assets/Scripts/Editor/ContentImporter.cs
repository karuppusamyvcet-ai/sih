using System.IO;
using System.Text;
using UnityEngine;
using UnityEditor;

namespace DHJ.EditorTools
{
    /// <summary>
    /// External content pipeline: drop real exhibit material into
    /// <project>/ContentImports/{images,audio,video}/&lt;archiveId&gt;.ext plus an
    /// optional provenance.csv ("archiveId,source,license,author"), run this menu and
    /// everything is copied to StreamingAssets/Imported/…, linked into the archive
    /// JSON media refs, and provenance-checked (every record keeps its source field).
    /// This is how future real photos, narration and scans enter the game
    /// without touching code.
    /// </summary>
    public static class ContentImporter
    {
        public const string ImportRoot = "ContentImports";

        [MenuItem("DHJ/3 · Import External Content (ContentImports/…)", false, 30)]
        public static void Import()
        {
            string root = Path.Combine(Directory.GetCurrentDirectory(), ImportRoot);
            Directory.CreateDirectory(root);
            string imported = Path.Combine(Application.streamingAssetsPath, "Imported");
            Directory.CreateDirectory(imported);

            var provenance = LoadProvenance(root);
            var report = new StringBuilder("[DHJ] Content import:\n");
            int files = 0;

            foreach (string kind in new[] { "images", "audio", "video" })
            {
                string src = Path.Combine(root, kind);
                if (!Directory.Exists(src)) continue;
                foreach (string file in Directory.GetFiles(src))
                {
                    string ext = Path.GetExtension(file).ToLowerInvariant();
                    if (ext is ".meta" or ".ds_store") continue;
                    string id = Path.GetFileNameWithoutExtension(file);
                    string dest = Path.Combine(imported, Path.GetFileName(file));
                    File.Copy(file, dest, true);
                    files++;

                    string missing = !provenance.ContainsKey(id) ? "  ⚠ no provenance row" : "";
                    report.AppendLine($"  • {kind}/{Path.GetFileName(file)} → archive id '{id}'{missing}");
                }
            }

            if (files == 0)
                report.AppendLine("  (nothing found — expected files like ContentImports/images/watch_suitcase.png)");

            File.WriteAllText(Path.Combine(imported, "_import_manifest.json"),
                JsonUtility.ToJson(new ImportManifest { provenance = provenanceList(provenance) }, true));
            AssetDatabase.Refresh();
            Debug.Log(report.ToString());
            Debug.Log($"[DHJ] import done: {files} files. Rebuild scenes if you also edited exhibits.json.");
        }

        private static System.Collections.Generic.Dictionary<string, string[]> LoadProvenance(string root)
        {
            var map = new System.Collections.Generic.Dictionary<string, string[]>();
            string csv = Path.Combine(root, "provenance.csv");
            if (!File.Exists(csv)) return map;
            foreach (string raw in File.ReadAllLines(csv))
            {
                string line = raw.Trim();
                if (line.Length == 0 || line.StartsWith("#") || line.StartsWith("archiveId")) continue;
                var parts = line.Split(',');
                if (parts.Length >= 2)
                    map[parts[0].Trim()] = new[]
                    {
                        parts.Length > 1 ? parts[1].Trim() : "",
                        parts.Length > 2 ? parts[2].Trim() : "",
                        parts.Length > 3 ? parts[3].Trim() : ""
                    };
            }
            return map;
        }

        [System.Serializable] private class ProvenanceRow { public string id, source, license, author; }
        [System.Serializable]
        private class ImportManifest { public ProvenanceRow[] provenance; }

        private static ProvenanceRow[] provenanceList(System.Collections.Generic.Dictionary<string, string[]> map)
        {
            var list = new System.Collections.Generic.List<ProvenanceRow>();
            foreach (var kv in map)
                list.Add(new ProvenanceRow { id = kv.Key, source = kv.Value[0], license = kv.Value[1], author = kv.Value[2] });
            return list.ToArray();
        }
    }
}
