import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Bot, Globe, BarChart3 } from 'lucide-react';
import WordsPullUp from '../../ui/WordsPullUp';
import './ProductHero.css';

const stats = [
  { value: '30+', label: 'Leads/Day' },
  { value: '∞',   label: 'Any City' },
  { value: '0-100', label: 'AI Score' },
  { value: '8AM',  label: 'Auto-Run' },
];

const ProductHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section className="product-hero" id="product" ref={containerRef}>
      {/* Animated background orbs */}
      <div className="product-hero__orbs" aria-hidden="true">
        <div className="orb orb--gold" />
        <div className="orb orb--amber" />
        <div className="orb orb--cream" />
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <motion.div className="product-hero__inner" style={{ y, opacity }}>
        {/* Badge */}
        <motion.div
          className="product-hero__badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Zap size={14} />
          <span>Flagship AI Product</span>
        </motion.div>

        {/* Heading */}
        <h1 className="product-hero__heading">
          <WordsPullUp text="Agentic Lead" className="product-hero__line" delay={0.1} />
          <br />
          <WordsPullUp text="Manager" className="product-hero__line product-hero__line--accent" delay={0.3} />
        </h1>

        {/* Subheading */}
        <motion.p
          className="product-hero__sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          An autonomous AI system that wakes up every morning, scrapes any city or country for
          high-quality B2B leads, scores them with Claude AI, drafts personalised outreach messages,
          and delivers a ranked dashboard — before you start your day.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="product-hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="/product" className="product-hero__btn product-hero__btn--primary">
            View Full Product
            <span className="product-hero__btn-icon"><ArrowRight size={16} /></span>
          </a>
          <a href="#product-features" className="product-hero__btn product-hero__btn--ghost">
            See How It Works
          </a>
        </motion.div>

        {/* Floating stats */}
        <div className="product-hero__stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="product-hero__stat"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="product-hero__stat-value">{stat.value}</span>
              <span className="product-hero__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="product-hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="product-hero__scroll-dot"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default ProductHero;
