using System;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using DHJ.Core;

namespace DHJ.I18n
{
    // JsonUtility cannot parse a Dictionary; en.json/hi.json/ta.json use {"items":{key:value}}
    // so we load with a tiny hand-rolled reader instead of fighting JsonUtility's limits.

    /// <summary>
    /// JSON dictionary localization with English fallback. Languages discovered
    /// automatically from StreamingAssets/Localization/*.json.
    /// </summary>
    public class LocalizationManager : MonoBehaviour
    {
        public string Current { get; private set; } = "en";
        public List<(string code, string displayName)> Available { get; } = new();

        private Dictionary<string, string> _table = new();
        private Dictionary<string, string> _fallback = new();

        public void Initialize(string language)
        {
            _fallback = LoadLang("en");
            RefreshAvailable();
            SetLanguage(string.IsNullOrEmpty(language) ? "en" : language);
        }

        private void RefreshAvailable()
        {
            Available.Clear();
            try
            {
                var dir = Path.Combine(Application.streamingAssetsPath, "Localization");
#if UNITY_ANDROID && !UNITY_EDITOR
                // StreamingAssets on Android is inside the APK (jar). Ship list mirrors files;
                // missing entries simply fall back to English.
                Available.Add(("en", "English")); Available.Add(("hi", "हिन्दी")); Available.Add(("ta", "தமிழ்"));
#else
                foreach (var f in Directory.GetFiles(dir, "*.json"))
                {
                    var code = Path.GetFileNameWithoutExtension(f);
                    Available.Add((code, code == "en" ? "English" : code == "hi" ? "हिन्दी" : code == "ta" ? "தமிழ்" : code));
                }
                if (Available.Count == 0) Available.Add(("en", "English"));
#endif
            }
            catch { if (Available.Count == 0) Available.Add(("en", "English")); }
        }

        public void SetLanguage(string code)
        {
            Current = code;
            _table = code == "en" ? _fallback : Merge(_fallback, LoadLang(code));
            EventBus.Publish(new LanguageChangedEvent { Code = code });
        }

        private static Dictionary<string, string> Merge(Dictionary<string, string> fb, Dictionary<string, string> over)
        {
            var d = new Dictionary<string, string>(fb);
            foreach (var kv in over) d[kv.Key] = kv.Value;
            return d;
        }

        public string T(string key)
        {
            if (key == null) return "";
            if (_table.TryGetValue(key, out var v)) return v;
            if (_fallback.TryGetValue(key, out v)) return v;
#if UNITY_EDITOR
            Debug.LogWarning($"[I18n] Missing key: {key}");
#endif
            return key;
        }

        public string T(string key, params object[] args) => string.Format(T(key), args);

        // ---- ultra-small {"items":{"k":"v",...}} reader (no external deps)
        private Dictionary<string, string> LoadLang(string code)
        {
            string json = null;
            var p = Path.Combine(Application.streamingAssetsPath, "Localization", code + ".json");
#if UNITY_ANDROID && !UNITY_EDITOR
            using var req = UnityEngine.Networking.UnityWebRequest.Get(p);
            var op = req.SendWebRequest();
            while (!op.isDone) { }                          // boot-time, tiny files
            if (req.result == UnityEngine.Networking.UnityWebRequest.Result.Success) json = req.downloadHandler.text;
#else
            if (File.Exists(p)) json = File.ReadAllText(p);
#endif
            return string.IsNullOrEmpty(json) ? new Dictionary<string, string>() : ParseItems(json);
        }

        private static Dictionary<string, string> ParseItems(string json)
        {
            var d = new Dictionary<string, string>();
            int i = json.IndexOf("\"items\"", StringComparison.Ordinal);
            if (i < 0) return d;
            i = json.IndexOf('{', i);
            if (i < 0) return d;
            i++;
            while (i < json.Length)
            {
                while (i < json.Length && (char.IsWhiteSpace(json[i]) || json[i] == ',')) i++;
                if (i >= json.Length || json[i] == '}') break;
                if (json[i] != '"') { i++; continue; }
                string key = ReadString(json, i, out i);
                while (i < json.Length && char.IsWhiteSpace(json[i])) i++;
                if (i >= json.Length || json[i] != ':') continue;
                i++;
                while (i < json.Length && char.IsWhiteSpace(json[i])) i++;
                if (i < json.Length && json[i] == '"') d[key] = ReadString(json, i, out i);
                else i++;
            }
            return d;
        }

        private static string ReadString(string s, int start, out int next)
        {
            var sb = new System.Text.StringBuilder();
            int i = start + 1;
            for (; i < s.Length; i++)
            {
                char c = s[i];
                if (c == '\\' && i + 1 < s.Length)
                {
                    char e = s[++i];
                    switch (e)
                    {
                        case 'n': sb.Append('\n'); break;
                        case 't': sb.Append('\t'); break;
                        case 'r': sb.Append('\r'); break;
                        case '"': sb.Append('"'); break;
                        case '\\': sb.Append('\\'); break;
                        case 'u' when i + 4 < s.Length:
                            if (int.TryParse(s.Substring(i + 1, 4), System.Globalization.NumberStyles.HexNumber,
                                             System.Globalization.CultureInfo.InvariantCulture, out int cp))
                            { sb.Append((char)cp); i += 4; }
                            break;
                        default: sb.Append(e); break;
                    }
                }
                else if (c == '"') { i++; break; }
                else sb.Append(c);
            }
            next = i;
            return sb.ToString();
        }
    }
}
