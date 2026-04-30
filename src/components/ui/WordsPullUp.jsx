import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * WordsPullUp — Splits text by words, each animates upward on scroll into view.
 * @param {string} text - The text to animate
 * @param {string} className - CSS class for the wrapper span
 * @param {object} style - Inline styles for the wrapper
 * @param {number} delay - Base delay offset in seconds
 */
const WordsPullUp = ({ text = '', className = '', style = {}, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const words = text.split(' ');

  return (
    <span ref={ref} className={className} style={{ display: 'inline', ...style }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00a0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default WordsPullUp;
