import { gsap, SplitText, prefersReducedMotion } from './motion';

// [data-skew-up]: words rise out of masked lines with a slight skew.
// [data-reveal-words]: words brighten one by one as the paragraph scrolls past.
export function initTextReveals() {
  if (prefersReducedMotion) return;

  // Line breaks depend on the web font, so wait for it before splitting.
  document.fonts.ready.then(() => {
    document.querySelectorAll<HTMLElement>('[data-skew-up]').forEach(el => {
      SplitText.create(el, {
        type: 'lines,words',
        mask: 'lines',
        linesClass: 'split-line',
        autoSplit: true,
        onSplit(self) {
          gsap.set(el, { autoAlpha: 1 });
          return gsap.from(self.words, {
            yPercent: 110,
            skewX: -6,
            duration: 1.4,
            stagger: 0.03,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          });
        },
      });
    });

    document.querySelectorAll<HTMLElement>('[data-reveal-words]').forEach(el => {
      SplitText.create(el, {
        type: 'words',
        onSplit(self) {
          return gsap.fromTo(
            self.words,
            { opacity: 0.18 },
            {
              opacity: 1,
              stagger: 0.1,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'bottom 55%',
                scrub: 1,
              },
            }
          );
        },
      });
    });
  });
}
