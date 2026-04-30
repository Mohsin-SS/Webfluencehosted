import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Brain, MessageSquare, LayoutDashboard, Check } from 'lucide-react';
import WordsPullUp from '../../ui/WordsPullUp';
import './ProductFeatures.css';

const features = [
  {
    icon: Globe,
    number: '01',
    title: 'Multi-Source Scraping',
    desc: 'Pulls leads from Google Maps, Facebook, and local business directories across any city and country you configure — fully customisable.',
    items: [
      'Google Maps Places API',
      'Facebook Graph API',
      'Local directories & listings',
      'Auto phone validation',
    ],
  },
  {
    icon: Brain,
    number: '02',
    title: 'AI Lead Scoring',
    desc: 'Every lead is scored 0–100 by Claude AI. It judges industry fit, business size signals, growth potential, and decision-maker access.',
    items: [
      'Hot / Warm / Cold classification',
      'One-line reasoning per lead',
      'Suggested SaaS product match',
      'Sorted by score automatically',
    ],
  },
  {
    icon: MessageSquare,
    number: '03',
    title: 'Auto Outreach Drafting',
    desc: 'Warm and hot leads get a personalised WhatsApp message in Hinglish — human-sounding, concise, and referencing their business.',
    items: [
      'Hinglish (English + Urdu roman)',
      'Business-name personalisation',
      'Under 4 lines, never robotic',
      'Ready to send from dashboard',
    ],
  },
  {
    icon: LayoutDashboard,
    number: '04',
    title: 'Daily Dashboard',
    desc: 'A local FastAPI dashboard served at 8 AM every day. Filter by temperature, update lead status, add notes, and track progress.',
    items: [
      'Hot / Warm / Cold view',
      'One-click status updates',
      'Notes & follow-up tracking',
      'Historical run logs',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ProductFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="product-features" id="product-features">
      {/* Noise texture */}
      <div className="pf-noise" aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className="product-features__header">
          <motion.span
            className="product-features__label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What It Does
          </motion.span>
          <h2 className="product-features__title">
            <WordsPullUp text="Studio-grade automation" delay={0.05} />
            <br />
            <WordsPullUp
              text="for B2B sales teams worldwide."
              style={{ color: 'rgba(222,219,200,0.38)' }}
              delay={0.2}
            />
          </h2>
        </div>

        {/* Cards grid */}
        <div className="product-features__grid" ref={ref}>
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.number}
                className="pf-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <div className="pf-card__top">
                  <div className="pf-card__icon-wrap">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="pf-card__number">{feat.number}</span>
                </div>
                <h3 className="pf-card__title">{feat.title}</h3>
                <p className="pf-card__desc">{feat.desc}</p>
                <ul className="pf-card__list">
                  {feat.items.map((item) => (
                    <li key={item} className="pf-card__item">
                      <Check size={14} strokeWidth={2.5} className="pf-card__check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
