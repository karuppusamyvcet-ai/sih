using UnityEngine;

namespace DHJ.Player
{
    /// <summary>
    /// Parameter name constants + helpers for the generated Animator Controller
    /// (created by DHJ.EditorTools.AnimationFactory). Keeps code/asset in sync.
    /// </summary>
    public static class CharacterAnimatorDriver
    {
        public static readonly int Speed     = Animator.StringToHash("Speed");
        public static readonly int Interact  = Animator.StringToHash("Interact");
        public static readonly int Read      = Animator.StringToHash("Read");
        public static readonly int Examine   = Animator.StringToHash("Examine");
        public static readonly int Talk      = Animator.StringToHash("Talk");
        public static readonly int Greet     = Animator.StringToHash("Greet");

        public static void Trigger(Animator anim, int trigger)
        {
            if (anim != null && anim.isActiveAndEnabled) anim.SetTrigger(trigger);
        }
    }
}
