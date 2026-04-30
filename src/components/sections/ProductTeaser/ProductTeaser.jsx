import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, MapPin, BarChart3, Zap } from 'lucide-react';
import './ProductTeaser.css';

const teaserPoints = [
  { icon: Bot,       text: 'Claude AI scores every lead 0–100' },
  { icon: MapPin,    text: 'Works in any city, any country, worldwide' },
  { icon: BarChart3, text: 'Daily ranked dashboard at 8 AM' },
  { icon: Zap,       text: 'Personalised outreach drafts — ready to send' },
];

const ProductTeaser = () => {
  return (
    <section className="product-teaser" id="product-teaser">
      {/* Background accent */}
      <div className="product-teaser__bg" aria-hidden="true" />

      <div className="container">
        <div className="product-teaser__inner">
          {/* Left: text */}
          <div className="product-teaser__text">
            <motion.span
              className="product-teaser__label"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Flagship AI Product
            </motion.span>

            <motion.h2
              className="product-teaser__heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Meet the Agentic
              <br />
              <span className="product-teaser__heading--accent">Lead Manager</span>
            </motion.h2>

            <motion.p
              className="product-teaser__desc"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              An autonomous AI system that wakes up every morning, scrapes any city worldwide
              for B2B leads, scores them with Claude AI, and delivers a ranked dashboard before you start your day.
            </motion.p>

            <ul className="product-teaser__points">
              {teaserPoints.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <motion.li
                    key={i}
                    className="product-teaser__point"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  >
                    <span className="product-teaser__point-icon">
                      <Icon size={14} strokeWidth={2} />
                    </span>
                    <span>{pt.text}</span>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              className="product-teaser__ctas"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <a href="/product" className="btn btn-primary product-teaser__btn">
                Explore the Product
                <ArrowRight size={16} />
              </a>
              <a href="/product#pricing" className="btn btn-ghost product-teaser__btn-ghost">
                View Pricing
              </a>
            </motion.div>
          </div>

          {/* Right: animated mockup card */}
          <motion.div
            className="product-teaser__mockup"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pt-mockup">
              <div className="pt-mockup__header">
                <div className="pt-mockup__dot pt-mockup__dot--red" />
                <div className="pt-mockup__dot pt-mockup__dot--yellow" />
                <div className="pt-mockup__dot pt-mockup__dot--green" />
                <span className="pt-mockup__title">Lead Manager — Today's Report</span>
              </div>
              <div className="pt-mockup__body">
                <div className="pt-mockup__stats-row">
                  <div className="pt-mockup__stat pt-mockup__stat--hot">
                    <span className="pt-mockup__stat-num">12</span>
                    <span className="pt-mockup__stat-lbl">🔥 Hot</span>
                  </div>
                  <div className="pt-mockup__stat pt-mockup__stat--warm">
                    <span className="pt-mockup__stat-num">19</span>
                    <span className="pt-mockup__stat-lbl">🟡 Warm</span>
                  </div>
                  <div className="pt-mockup__stat pt-mockup__stat--cold">
                    <span className="pt-mockup__stat-num">7</span>
                    <span className="pt-mockup__stat-lbl">🔵 Cold</span>
                  </div>
                </div>
                {[
                  { name: 'TechNest London', score: 92, temp: 'hot', industry: 'IT Company' },
                  { name: 'Dubai Logistics Co.', score: 81, temp: 'hot', industry: 'Logistics' },
                  { name: 'Berlin Realty Group', score: 74, temp: 'warm', industry: 'Real Estate' },
                  { name: 'NYC E-Commerce Hub', score: 61, temp: 'warm', industry: 'Retail' },
                ].map((lead, i) => (
                  <motion.div
                    key={lead.name}
                    className={`pt-mockup__lead pt-mockup__lead--${lead.temp}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  >
                    <div className="pt-mockup__lead-name">{lead.name}</div>
                    <div className="pt-mockup__lead-meta">{lead.industry}</div>
                    <div className={`pt-mockup__lead-score pt-mockup__lead-score--${lead.temp}`}>
                      {lead.score}
                    </div>
                  </motion.div>
                ))}
                <div className="pt-mockup__footer">
                  <span>38 leads saved · 0 duplicates · Run at 08:00 PKT</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductTeaser;
