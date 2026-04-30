import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Brain, PenLine, Database, LayoutDashboard, ArrowRight } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Scrape',
    desc: 'Every morning at 8 AM, the agent hits Google Maps, Facebook, and local directories across any cities and countries you configure to pull fresh business listings.',
    color: '#C9A84C',
  },
  {
    icon: Brain,
    number: '02',
    title: 'Score',
    desc: "Claude AI evaluates each lead 0–100 based on industry fit, business size, and SaaS readiness. It also suggests which product they'd benefit from most.",
    color: '#E3C161',
  },
  {
    icon: PenLine,
    number: '03',
    title: 'Draft',
    desc: 'Hot and warm leads get a personalised Hinglish WhatsApp message drafted automatically — sounding human, not robotic.',
    color: '#DEDBC8',
  },
  {
    icon: Database,
    number: '04',
    title: 'Save',
    desc: 'All leads are deduplicated by phone number and stored in SQLite. No duplicates, no manual cleanup needed.',
    color: '#C9A84C',
  },
  {
    icon: LayoutDashboard,
    number: '05',
    title: 'Review',
    desc: "Open the dashboard at http://localhost:8000. Review ranked leads, update statuses, copy messages and go close deals.",
    color: '#E3C161',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        {/* Header */}
        <div className="hiw__header">
          <motion.span
            className="hiw__label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Workflow
          </motion.span>
          <motion.h2
            className="hiw__title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Five steps. Zero manual work.
          </motion.h2>
          <motion.p
            className="hiw__subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The agent runs the full pipeline autonomously every day. You only need to show up, read the results, and close the deals.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="hiw__steps" ref={ref}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <React.Fragment key={step.number}>
                <motion.div
                  className="hiw__step"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="hiw__step-icon" style={{ '--step-color': step.color }}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="hiw__step-number">{step.number}</div>
                  <h3 className="hiw__step-title">{step.title}</h3>
                  <p className="hiw__step-desc">{step.desc}</p>
                </motion.div>

                {!isLast && (
                  <motion.div
                    className="hiw__connector"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.25 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
