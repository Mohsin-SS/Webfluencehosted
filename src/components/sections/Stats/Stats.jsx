import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import './Stats.css';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', desc: 'Web, apps, AI & automation' },
  { value: 30, suffix: '+', label: 'Happy Clients',      desc: 'From startups to enterprises' },
  { value: 99, suffix: '%', label: 'Satisfaction Rate',  desc: 'Our obsession with quality' },
  { value: 24, suffix: '/7', label: 'Support Available', desc: 'Always here when you need us' },
];

const Counter = ({ target, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      const c = animate(count, target, { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] });
      return c.stop;
    }
  }, [isInView, target, count]);

  return (
    <span ref={ref} className="stat-value">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
};

const Stats = () => (
  <section className="stats-section">
    <div className="stats-section__line" aria-hidden="true" />
    <div className="container">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="stat-label">{stat.label}</p>
            <p className="stat-desc">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="stats-section__line" aria-hidden="true" />
  </section>
);

export default Stats;
