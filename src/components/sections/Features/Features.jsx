import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Rocket, Headphones } from 'lucide-react';
import WordsPullUp from '../../ui/WordsPullUp';
import ScrollRevealText from '../../ui/AnimatedLetter';
import './Features.css';

const features = [
  {
    Icon: Brain,
    title: 'AI-First Approach',
    desc: 'We integrate intelligent AI solutions into everything we build, giving your business a decisive competitive edge over traditional agencies.',
  },
  {
    Icon: Zap,
    title: 'End-to-End Delivery',
    desc: 'From strategy and design to development and deployment — we own every step so you never have to manage multiple vendors.',
  },
  {
    Icon: Rocket,
    title: 'Fast Turnaround',
    desc: 'Optimized workflows and AI-assisted development mean we deliver high-quality, production-ready solutions in record time.',
  },
  {
    Icon: Headphones,
    title: 'Dedicated Support',
    desc: 'Ongoing maintenance, updates, and priority support ensure your tools always perform at peak efficiency.',
  },
];

const Features = () => (
  <section id="about" className="highlights-section">
    <div className="highlights-section__top" aria-hidden="true" />

    <div className="container">
      {/* Header */}
      <div className="highlights__header">
        <motion.span
          className="highlights__label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Webfluence
        </motion.span>
        <h2 className="highlights__title">
          <WordsPullUp text="Not just an agency." delay={0.05} />
          <br />
          <WordsPullUp
            text="Your dedicated tech partner."
            style={{ color: 'rgba(222,219,200,0.38)' }}
            delay={0.2}
          />
        </h2>
      </div>

      {/* Scroll reveal paragraph */}
      <div className="highlights__about-wrap">
        <ScrollRevealText
          className="highlights__about-text"
          text="We combine cutting-edge AI, premium design, and relentless execution to build digital tools that actually move the needle. Every project we take on is treated as if it were our own business — because your growth is our obsession."
        />
      </div>

      {/* Feature cards */}
      <div className="features-grid">
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            className="feature-card"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="feature-icon">
              <feat.Icon size={22} strokeWidth={1.5} />
            </div>
            <h4 className="feature-title">{feat.title}</h4>
            <p className="feature-desc">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
