import type Lenis from "lenis";

/** Clearance under fixed top nav (px) — used with `[data-nav-target]` */
export const SCROLL_NAV_OFFSET = -150;

/** Wheel / general Lenis glide */
export const scrollEasing = (t: number) =>
  Math.min(1, 1.001 - Math.pow(2, -10 * t));

/** Nav jumps: ease-out, no elastic overshoot */
export const navScrollEasing = (t: number) => 1 - Math.pow(1 - t, 3);

const NAV_SCROLL_DURATION = 1.15;

export function resolveNavScrollTarget(hash: string): HTMLElement | null {
  const section = document.querySelector<HTMLElement>(hash);
  if (!section) return null;
  return (
    section.querySelector<HTMLElement>("[data-nav-target]") ?? section
  );
}

export function scrollToTop(lenis: Lenis | null, duration = 1.5) {
  if (lenis) {
    lenis.scrollTo(0, { duration, easing: scrollEasing });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function scrollToHash(
  lenis: Lenis | null,
  hash: string,
  duration = NAV_SCROLL_DURATION,
) {
  if (hash === "#" || hash === "#home") {
    scrollToTop(lenis, duration);
    return;
  }

  const target = resolveNavScrollTarget(hash);

  if (lenis && target) {
    lenis.scrollTo(target, {
      offset: SCROLL_NAV_OFFSET,
      duration,
      easing: navScrollEasing,
      lock: true,
    });
    return;
  }

  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}
