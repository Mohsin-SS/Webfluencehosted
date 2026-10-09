import { gsap, ScrollTrigger, prefersReducedMotion } from './motion';

// Counts [data-count-to] elements up from zero the first time they scroll into view.
// The server-rendered text is the final value, so no-JS and reduced motion stay correct.
export function initCounters() {
  if (prefersReducedMotion) return;

  document.querySelectorAll<HTMLElement>('[data-count-to]').forEach(el => {
    const target = Number(el.dataset.countTo);
    const state = { value: 0 };
    el.textContent = '0';

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () =>
        gsap.to(state, {
          value: target,
          duration: 2.2,
          ease: 'power3.out',
          onUpdate: () => {
            el.textContent = String(Math.round(state.value));
          },
        }),
    });
  });
}
