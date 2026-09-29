using System;
using System.Collections.Generic;

namespace DHJ.Core
{
    /// <summary>
    /// Minimal, allocation-free-enough pub/sub used for cross-system communication.
    /// Systems publish events and never need direct references to each other.
    /// </summary>
    public static class EventBus
    {
        private static readonly Dictionary<Type, Delegate> Handlers = new Dictionary<Type, Delegate>(32);

        public static void Subscribe<T>(Action<T> handler) where T : struct
        {
            var t = typeof(T);
            Handlers[t] = Handlers.TryGetValue(t, out var d) ? Delegate.Combine(d, handler) : handler;
        }

        public static void Unsubscribe<T>(Action<T> handler) where T : struct
        {
            var t = typeof(T);
            if (!Handlers.TryGetValue(t, out var d)) return;
            var nd = Delegate.Remove(d, handler);
            if (nd == null) Handlers.Remove(t); else Handlers[t] = nd;
        }

        public static void Publish<T>(T evt) where T : struct
        {
            if (Handlers.TryGetValue(typeof(T), out var d))
                ((Action<T>)d)?.Invoke(evt);
        }

        public static void ClearAll() => Handlers.Clear();
    }

    // ---------------------------------------------------------------- events
    public struct ExhibitOpenedEvent    { public string ExhibitId; public string ArchiveId; }
    public struct ArchiveItemCollected  { public string ArchiveId; }
    public struct QuizCompletedEvent    { public string QuizId; public int Score; public int MaxScore; }
    public struct ArchiveSearchedEvent  { public string Query; public int Results; }
    public struct AssistantAskedEvent   { public string Question; }
    public struct MemorialVisitedEvent  { public string ExhibitId; }
    public struct MissionStateChanged   { public string MissionId; public bool Completed; }
    public struct SaveCompletedEvent    { }
    public struct LanguageChangedEvent  { public string Code; }
    public struct AccessibilityChanged  { }
    public struct GamePausedEvent       { public bool Paused; }
    public struct PlayerZoneEntered     { public string ZoneId; }
}
