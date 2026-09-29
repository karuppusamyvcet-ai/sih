using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace DHJ.Core
{
    /// <summary>
    /// Async scene transitions with a loading overlay driven by events the UI listens to.
    /// One gameplay scene is active at a time; UI overlays are canvas-based.
    /// </summary>
    public static class SceneFlow
    {
        public struct LoadingProgress { public string Scene; public float Progress; public bool Done; }

        public static bool IsLoading { get; private set; }

        public static IEnumerator SwitchTo(string sceneName)
        {
            if (IsLoading) yield break;
            IsLoading = true;
            PublishProgress(sceneName, 0f, false);

            string current = SceneManager.GetActiveScene().name;
            var op = SceneManager.LoadSceneAsync(sceneName, LoadSceneMode.Additive);
            if (op == null)
            {
                Debug.LogError($"[SceneFlow] Failed to start loading scene '{sceneName}'. " +
                               "Run DHJ > Generate Scenes & Assets, and check Build Settings.");
                IsLoading = false;
                PublishProgress(sceneName, 1f, true);
                yield break;
            }
            op.allowSceneActivation = false;
            while (op.progress < 0.9f)
            {
                PublishProgress(sceneName, op.progress / 0.9f, false);
                yield return null;
            }
            PublishProgress(sceneName, 1f, false);
            yield return new WaitForSecondsRealtime(0.25f); // let overlay finish its animation
            op.allowSceneActivation = true;
            while (!op.isDone) yield return null;

            var loaded = SceneManager.GetSceneByName(sceneName);
            SceneManager.SetActiveScene(loaded);

            if (!string.IsNullOrEmpty(current) && current != sceneName)
            {
                var prev = SceneManager.GetSceneByName(current);
                if (prev.IsValid() && prev.isLoaded)
                    yield return SceneManager.UnloadSceneAsync(prev);
            }

            // release gallery objects player walked past; safe small win for mobile
            yield return Resources.UnloadUnusedAssets();

            IsLoading = false;
            PublishProgress(sceneName, 1f, true);
        }

        public static IEnumerator LoadAdditive(string sceneName)
        {
            IsLoading = true;
            PublishProgress(sceneName, 0f, false);
            var op = SceneManager.LoadSceneAsync(sceneName, LoadSceneMode.Additive);
            if (op == null)
            {
                Debug.LogError($"[SceneFlow] Missing scene '{sceneName}'.");
                IsLoading = false; PublishProgress(sceneName, 1f, true);
                yield break;
            }
            while (!op.isDone)
            {
                PublishProgress(sceneName, Mathf.Clamp01(op.progress / 0.9f), false);
                yield return null;
            }
            SceneManager.SetActiveScene(SceneManager.GetSceneByName(sceneName));
            IsLoading = false;
            PublishProgress(sceneName, 1f, true);
        }

        private static void PublishProgress(string scene, float p, bool done) =>
            EventBus.Publish(new LoadingProgress { Scene = scene, Progress = p, Done = done });
    }
}
