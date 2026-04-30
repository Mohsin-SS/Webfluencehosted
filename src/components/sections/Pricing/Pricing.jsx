import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import WordsPullUp from '../../ui/WordsPullUp';
import './Pricing.css';

const basicFeatures = [
  '30 leads/day',
  'Google Maps source',
  'Up to 2 cities / regions',
  'AI scoring (Claude AI)',
  'Local dashboard',
  'SQLite storage',
  'Email support',
];

const premiumFeatures = [
  'Unlimited leads/day',
  'Google Maps + Facebook + Directories',
  'Unlimited cities & countries worldwide',
  'AI scoring (Claude AI) — highest quality',
  'Personalised outreach drafting (auto)',
  'WhatsApp integration',
  'Real-time live dashboard',
  'Custom scoring criteria config',
  'Historical analytics & export',
  'Priority onboarding + support',
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      {/* Background glow */}
      <div className="pricing__glow" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className="pricing__header">
          <motion.span
            className="pricing__label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pricing
          </motion.span>
          <h2 className="pricing__title">
            <WordsPullUp text="Pick your growth engine." delay={0.05} />
          </h2>
          <motion.p
            className="pricing__subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Both plans include the full agentic AI system. Premium unlocks the full power.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="pricing__cards">
          {/* Basic */}
          <motion.div
            className="pricing-card"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="pricing-card__badge pricing-card__badge--basic">Basic</div>
            <div className="pricing-card__price">
              <span className="pricing-card__currency">$</span>
              <span className="pricing-card__amount">250</span>
              <span className="pricing-card__period">/month</span>
            </div>
            <p className="pricing-card__tagline">
              Launch your automated lead pipeline in a day. Perfect for solo founders and small teams.
            </p>
            <div className="pricing-card__divider" />
            <ul className="pricing-card__features">
              {basicFeatures.map((f) => (
                <li key={f} className="pricing-card__feature">
                  <Check size={14} strokeWidth={2.5} className="pricing-card__check" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:webfluence.ai@gmail.com?subject=Agentic Lead Manager - Basic Plan" className="pricing-card__cta pricing-card__cta--basic">
              Get Started
              <ArrowRight size={15} />
            </a>
          </motion.div>

          {/* Premium */}
          <motion.div
            className="pricing-card pricing-card--premium"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Popular badge */}
            <div className="pricing-card__popular">
              <Zap size={12} />
              Most Powerful
            </div>

            <div className="pricing-card__badge pricing-card__badge--premium">Premium</div>
            <div className="pricing-card__price">
              <span className="pricing-card__currency">$</span>
              <span className="pricing-card__amount">500</span>
              <span className="pricing-card__period">/month</span>
            </div>
            <p className="pricing-card__tagline">
              Full autonomous AI sales operation. Built for agencies and serious operators who need volume, speed, and intelligence.
            </p>
            <div className="pricing-card__divider" />
            <ul className="pricing-card__features">
              {premiumFeatures.map((f) => (
                <li key={f} className="pricing-card__feature">
                  <Check size={14} strokeWidth={2.5} className="pricing-card__check pricing-card__check--premium" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:webfluence.ai@gmail.com?subject=Agentic Lead Manager - Premium Plan" className="pricing-card__cta pricing-card__cta--premium">
              Get Premium Access
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.p
          className="pricing__note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          All plans are billed monthly. Setup + onboarding included. Cancel anytime.
          Custom enterprise packages available — <a href="mailto:webfluence.ai@gmail.com">reach out</a>.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
