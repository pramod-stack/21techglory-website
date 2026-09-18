// useAnimationBudget: dev-console warning when concurrent anims > 3 per Annex E
let alive = 0;

export function registerAnim(label: string): () => void {
  alive++;
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug(`[21TG Anim] ${label} started (active: ${alive})`);
  }
  
  if (alive > 3 && process.env.NODE_ENV !== 'production') {
    console.warn(`[21TG Anim Budget] Concurrent animation count (${alive}) exceeded limit of 3. Consider viewport-gating non-critical loops.`);
  }

  return () => {
    alive = Math.max(0, alive - 1);
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.debug(`[21TG Anim] ${label} finished (active: ${alive})`);
    }
  };
}

export function prefersReduced(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
