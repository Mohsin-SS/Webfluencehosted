import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ScrollRevealText — Scroll-linked character-by-character opacity reveal.
 * Each character fades from 0.15 → 1 as it enters the viewport.
 * @param {string} text - The text to animate
 * @param {string} className - CSS class for the wrapper paragraph
 * @param {object} style - Inline styles
 */
const ScrollRevealText = ({ text = '', className = '', style = {} }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', ...style }}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 0.12;
        return (
          <AnimatedChar
            key={i}
            char={char}
            scrollYProgress={scrollYProgress}
            range={[Math.max(0, start - 0.05), Math.min(1, end)]}
          />
        );
      })}
    </p>
  );
};

const AnimatedChar = ({ char, scrollYProgress, range }) => {
  const opacity = useTransform(scrollYProgress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity, whiteSpace: char === ' ' ? 'pre' : 'normal' }}
    >
      {char}
    </motion.span>
  );
};

export default ScrollRevealText;
