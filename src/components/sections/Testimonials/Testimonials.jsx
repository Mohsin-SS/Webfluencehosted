import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../../../data/testimonials';
import WordsPullUp from '../../ui/WordsPullUp';
import './Testimonials.css';

const Testimonials = () => (
  <section className="testimonials-section">
    <div className="container">
      {/* Header */}
      <div className="testimonials__header">
        <motion.span
          className="testimonials__label"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Client Love
        </motion.span>
        <h2 className="testimonials__title">
          <WordsPullUp text="Loved by industry leaders." delay={0.05} />
          <br />
          <WordsPullUp
            text="Don't just take our word for it."
            style={{ color: 'rgba(222,219,200,0.38)' }}
            delay={0.2}
          />
        </h2>
      </div>

      {/* Cards */}
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="testimonial-card"
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Stars */}
            <div className="stars">
              {Array.from({ length: t.rating }, (_, si) => (
                <Star key={si} size={14} fill="#C9A84C" strokeWidth={0} />
              ))}
            </div>
            {/* Quote */}
            <p className="quote">"{t.quote}"</p>
            {/* Client */}
            <div className="client-info">
              <div className="client-avatar">{t.initials}</div>
              <div className="client-details">
                <h5>{t.name}</h5>
                <p>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
