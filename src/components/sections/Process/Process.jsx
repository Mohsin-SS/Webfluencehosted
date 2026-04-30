import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Settings, TrendingUp } from 'lucide-react';
import WordsPullUp from '../../ui/WordsPullUp';
import './Process.css';

const steps = [
  {
    Icon: PhoneCall,
    number: '01',
    title: 'Discovery Call',
    description: 'We understand your business goals and map out the exact digital solution you need — no templates, no guessing.',
    color: '#C9A84C',
  },
  {
    Icon: Settings,
    number: '02',
    title: 'We Build & Integrate',
    description: 'Our team designs, develops, and integrates the technology seamlessly into your existing workflow and systems.',
    color: '#E3C161',
  },
  {
    Icon: TrendingUp,
    number: '03',
    title: 'You Grow',
    description: 'Launch your new automated tools and watch your efficiency, conversion rates, and revenue climb every week.',
    color: '#DEDBC8',
  },
];

const Process = () => (
  <section className="process-section">
    <div className="process-section__noise" aria-hidden="true" />
    <div className="container">
      {/* Header */}
      <div className="process__header">
        <motion.span
          className="process__label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The Process
        </motion.span>
        <h2 className="process__title">
          <WordsPullUp text="Three steps." delay={0.05} />
          <br />
          <WordsPullUp
            text="Endless results."
            style={{ color: 'rgba(222,219,200,0.38)' }}
            delay={0.2}
          />
        </h2>
        <motion.p
          className="process__subtitle"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Our streamlined process ensures transparency, zero surprises, and fast results every time.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="process-flow">
        {steps.map((step, i) => (
          <React.Fragment key={step.number}>
            <motion.div
              className="process-step"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="process-step__icon" style={{ '--step-clr': step.color }}>
                <step.Icon size={24} strokeWidth={1.5} />
              </div>
              <div className="step-number">{step.number}</div>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.description}</p>
            </motion.div>

            {i < steps.length - 1 && (
              <motion.div
                className="process__connector"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
