using UnityEngine;
using UnityEngine.SceneManagement;

namespace DHJ.Core
{
    /// <summary>
    /// Marks the scene entry point. On scene load, if the save says the player was
    /// last in THIS scene (continue-game flow), the saved position is restored.
    /// Door travel teleports afterwards, so arrivals always win over restore.
    /// </summary>
    public class PlayerSpawn : MonoBehaviour
    {
        private void Start()
        {
            var gm = GameManager.I;
            if (gm == null || gm.Save == null) return;
            var d = gm.Save.Data;
            if (d.playIntroOnHubEntry) return;                     // intro handles framing
            if (d.lastScene != SceneManager.GetActiveScene().name) return;

            var pc = FindObjectOfType<Player.PlayerController>();
            if (pc == null) return;
            pc.Teleport(new Vector3(d.px, Mathf.Max(d.py, 0.05f), d.pz), transform.eulerAngles.y);
            Camera.main?.GetComponent<Player.ThirdPersonCamera>()?.SnapBehindTarget();
        }

        private void OnDestroy()
        {
            // leaving a scene: remember where we stood
            var gm = GameManager.I;
            if (gm == null || gm.Save == null) return;
            var pc = FindObjectOfType<Player.PlayerController>();
            if (pc == null) return;
            var scene = SceneManager.GetActiveScene().name;
            if (scene.StartsWith("Gallery_") || scene == "MuseumHub")
                gm.Save.SetPlayerPosition(pc.transform.position, scene);
        }
    }
}
