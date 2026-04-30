import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import WordsPullUp from '../../ui/WordsPullUp';
import './CTA.css';

const CTA = () => (
  <section id="contact" className="cta-banner">
    <div className="cta-banner__glow" aria-hidden="true" />
    <div className="noise-overlay" aria-hidden="true" />

    <div className="container">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="cta-content__top" aria-hidden="true" />

        <motion.div
          className="cta__badge"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <Sparkles size={13} />
          Ready to scale?
        </motion.div>

        <h2 className="cta__heading">
          <WordsPullUp text="Automate. Scale." delay={0.1} />
          <br />
          <WordsPullUp text="Dominate your market." delay={0.25} />
        </h2>

        <motion.p
          className="cta__sub"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Let's discuss how our custom AI-powered digital solutions can help you achieve
          your goals — and leave your competition behind.
        </motion.p>

        <motion.div
          className="cta__btns"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.a
            href="mailto:webfluence.ai@gmail.com?subject=Free Consultation Request"
            className="btn btn-primary cta__btn cta__btn--primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Free Call Today
            <ArrowRight size={16} />
          </motion.a>
          <a href="/product" className="cta__btn cta__btn--ghost">
            See Our AI Products
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
