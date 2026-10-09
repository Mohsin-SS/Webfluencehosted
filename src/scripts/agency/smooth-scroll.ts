import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger, prefersReducedMotion } from './motion';

// Header height, so in-page anchors don't land underneath the fixed nav.
const ANCHOR_OFFSET = -96;

export const lenis = prefersReducedMotion
  ? null
  : new Lenis({ lerp: 0.1, anchors: { offset: ANCHOR_OFFSET }, autoRaf: false });

if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

export function scrollToTarget(target: HTMLElement | number) {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : ANCHOR_OFFSET });
    return;
  }
  const top =
    typeof target === 'number'
      ? target
      : target.getBoundingClientRect().top + window.scrollY + ANCHOR_OFFSET;
  window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}

export function lockScroll(locked: boolean) {
  document.documentElement.classList.toggle('scroll-locked', locked);
  if (locked) lenis?.stop();
  else lenis?.start();
}
