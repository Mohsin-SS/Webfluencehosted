import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import WordsPullUp from '../../ui/WordsPullUp';
import PriceCalculator from '../PriceCalculator/PriceCalculator';
import { pricing } from '../../../data/pricing';
import './GenericProduct.css';

const GenericProduct = ({ product, onContact, onCalculatorContact }) => {
  const hasPricing = !!pricing[product.id];
  const featRef = useRef(null);
  const hiwRef  = useRef(null);
  const featInView = useInView(featRef, { once: true, margin: '-80px' });
  const hiwInView  = useInView(hiwRef,  { once: true, margin: '-60px' });

  return (
    <div className="gp">
      {/* ── Hero ── */}
      <section className="gp-hero">
        <div className="gp-hero__orbs" aria-hidden="true">
          <div className="gp-orb gp-orb--1" />
          <div className="gp-orb gp-orb--2" />
          <div className="gp-orb gp-orb--3" />
        </div>
        <div className="noise-overlay" aria-hidden="true" />

        <div className="container">
          <div className="gp-hero__inner">
            <motion.span
              className="gp-hero__badge"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {product.badge}
            </motion.span>

            <h1 className="gp-hero__heading">
              <WordsPullUp text={product.headline} className="gp-hero__line" delay={0.1} />
              <br />
              <WordsPullUp
                text={product.accentLine}
                className="gp-hero__line gp-hero__line--dim"
                delay={0.3}
              />
            </h1>

            <motion.p
              className="gp-hero__sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {product.sub}
            </motion.p>

            <div className="gp-hero__stats">
              {product.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="gp-hero__stat"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="gp-hero__stat-value">{stat.value}</span>
                  <span className="gp-hero__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="gp-hero__ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="gp-btn gp-btn--primary" onClick={onContact}>
                {product.cta}
                <ArrowRight size={16} />
              </button>
              <a href="#gp-features" className="gp-btn gp-btn--ghost">
                See Features
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="gp-features" id="gp-features">
        <div className="gp-noise" aria-hidden="true" />
        <div className="container">
          <div className="gp-features__hd">
            <motion.span
              className="gp-section-label"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What It Includes
            </motion.span>
            <h2 className="gp-features__title">
              <WordsPullUp text="Everything you need." delay={0.05} />
              <br />
              <WordsPullUp
                text="Nothing you don't."
                style={{ color: 'rgba(var(--accent-rgb),0.38)' }}
                delay={0.2}
              />
            </h2>
          </div>

          <div className="gp-features__grid" ref={featRef}>
            {product.features.map((feat, i) => (
              <motion.div
                key={feat.number}
                className="gp-feat-card"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={featInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="gp-feat-card__top">
                  <span className="gp-feat-card__num">{feat.number}</span>
                </div>
                <h3 className="gp-feat-card__title">{feat.title}</h3>
                <p className="gp-feat-card__desc">{feat.desc}</p>
                <ul className="gp-feat-card__list">
                  {feat.items.map((item) => (
                    <li key={item} className="gp-feat-card__item">
                      <Check size={14} strokeWidth={2.5} className="gp-feat-card__check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="gp-hiw">
        <div className="container">
          <div className="gp-hiw__hd">
            <motion.span
              className="gp-section-label"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How It Works
            </motion.span>
            <motion.h2
              className="gp-hiw__title"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Simple steps. Real results.
            </motion.h2>
          </div>

          <div className="gp-hiw__steps" ref={hiwRef}>
            {product.steps.map((step, i) => (
              <React.Fragment key={step.number}>
                <motion.div
                  className="gp-hiw__step"
                  initial={{ opacity: 0, y: 40 }}
                  animate={hiwInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="gp-hiw__step-num">{step.number}</div>
                  <h3 className="gp-hiw__step-title">{step.title}</h3>
                  <p className="gp-hiw__step-desc">{step.desc}</p>
                </motion.div>
                {i < product.steps.length - 1 && (
                  <motion.div
                    className="gp-hiw__connector"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={hiwInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.25 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price Calculator ── */}
      {hasPricing && (
        <PriceCalculator
          productId={product.id}
          productName={product.headline}
          onContact={onCalculatorContact}
        />
      )}

      {/* ── Final CTA ── */}
      <section className="gp-cta">
        <div className="container">
          <motion.div
            className="gp-cta__inner"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="gp-section-label gp-cta__pretitle">Ready to get started?</span>
            <h2 className="gp-cta__title">Let's build something great.</h2>
            <p className="gp-cta__sub">
              Our team handles everything end-to-end — strategy, design, build, and launch.
            </p>
            <button className="gp-btn gp-btn--primary" onClick={onContact}>
              {product.cta}
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GenericProduct;
