using UnityEngine;
using DHJ.Core;
using DHJ.Interaction;

namespace DHJ.Player
{
    /// <summary>
    /// Finds the best interaction candidate (range + view cone) and exposes it to the
    /// HUD. E key, touch INTERACT button, or a click directly on the object all work.
    /// </summary>
    public class PlayerInteractor : MonoBehaviour
    {
        public float radius = 3.2f;
        public float viewDot = 0.5f;
        public LayerMask interactMask = ~0;

        public IInteractable Current { get; private set; }

        private Camera _cam;
        private readonly Collider[] _hits = new Collider[24];

        private void Update()
        {
            Scan();
            if (GameManager.I == null || GameManager.I.State != GameState.Playing) return;

            if (GameInput.InteractPressed && Current != null && Current.CanInteract)
                Current.Interact(gameObject);
        }

        private void Scan()
        {
            if (_cam == null) _cam = Camera.main;
            IInteractable best = null;
            float bestScore = -1f;
            int n = Physics.OverlapSphereNonAlloc(transform.position + Vector3.up * 1.2f, radius, _hits,
                                                  interactMask, QueryTriggerInteraction.Collide);
            Vector3 fwd = transform.forward;
            for (int i = 0; i < n; i++)
            {
                var it = _hits[i].GetComponentInParent<Interactable>();
                if (it == null || !it.CanInteract) continue;
                Vector3 to = it.transform.position - transform.position;
                float dist = to.magnitude;
                float align = Vector3.Dot(fwd, to.normalized);
                if (dist > 1.2f && align < viewDot) continue;
                float score = align * 2f - dist * 0.25f;
                if (score > bestScore) { bestScore = score; best = it; }
            }
            Current = best;
            GameInput.MouseOverInteractRaycast = RaycastUnderCursor();
        }

        private bool RaycastUnderCursor()
        {
            if (_cam == null || GameManager.I == null || GameManager.I.IsTouchPlatform) return false;
            var ray = _cam.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out var hit, 22f, interactMask, QueryTriggerInteraction.Collide))
            {
                var it = hit.collider.GetComponentInParent<Interactable>();
                if (it != null && it.CanInteract) { Current = it; return true; }
            }
            return false;
        }

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = new Color(0.8f, 0.6f, 0.2f, 0.35f);
            Gizmos.DrawWireSphere(transform.position + Vector3.up * 1.2f, radius);
        }
    }
}
