import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import WordsPullUp from '../../ui/WordsPullUp';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero" id="home" ref={ref}>
      <ParticleCanvas />
      {/* Noise overlay */}
      <div className="hero__noise" aria-hidden="true" />
      {/* Radial glow */}
      <div className="hero__glow" aria-hidden="true" />

      <motion.div className="container hero-content" style={{ y, opacity }}>
        {/* Badge */}
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__badge-dot" />
          AI-Powered Digital Solutions
        </motion.div>

        {/* Headline */}
        <h1 className="hero__heading">
          <span className="hero__heading-line">
            <WordsPullUp text="We Build the" delay={0.2} />
          </span>
          <span className="hero__heading-line hero__heading-line--accent">
            <WordsPullUp text="Digital Tools" delay={0.35} />
          </span>
          <span className="hero__heading-line">
            <WordsPullUp text="That Grow Your" delay={0.5} />
          </span>
          <span className="hero__heading-line">
            <WordsPullUp text="Business." delay={0.65} />
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          Webfluence is an AI-powered digital solutions agency. We transform your ideas into
          intelligent, high-performing websites and automated workflows that scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#services" className="hero__btn hero__btn--primary">
            Explore Services
            <span className="hero__btn-icon"><ArrowRight size={16} /></span>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            Book a Free Call
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <motion.div
            className="hero__scroll-dot"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
