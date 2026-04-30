import React from 'react';
import { motion } from 'framer-motion';
import ProductHero from '../components/sections/ProductHero/ProductHero';
import ProductFeatures from '../components/sections/ProductFeatures/ProductFeatures';
import HowItWorks from '../components/sections/HowItWorks/HowItWorks';
import Pricing from '../components/sections/Pricing/Pricing';
import ScrollRevealText from '../components/ui/AnimatedLetter';
import { ArrowLeft } from 'lucide-react';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      {/* Back to main site nav */}
      <motion.div
        className="product-page__back"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="/" className="product-page__back-link">
          <ArrowLeft size={16} />
          <span>Back to Webfluence</span>
        </a>
      </motion.div>

      {/* Sections */}
      <ProductHero />

      {/* About / scroll-reveal paragraph */}
      <section className="product-about">
        <div className="container">
          <div className="product-about__inner">
            <motion.span
              className="product-about__label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              The Problem We Solve
            </motion.span>
            <ScrollRevealText
              className="product-about__text"
              text="B2B sales teams worldwide waste hours every day manually searching for leads on Google, verifying contact details one by one, and writing the same outreach message over and over again. The Agentic Lead Manager eliminates all of that — it runs overnight, scores intelligently with Claude AI, and hands you a ranked shortlist every single morning, ready to act on."
            />
          </div>
        </div>
      </section>

      <ProductFeatures />
      <HowItWorks />
      <Pricing />

      {/* Final CTA */}
      <section className="product-final-cta">
        <div className="container">
          <motion.div
            className="product-final-cta__inner"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="product-final-cta__label">Ready to automate?</span>
            <h2 className="product-final-cta__title">
              Start closing leads while you sleep.
            </h2>
            <p className="product-final-cta__sub">
              Get set up in under 30 minutes. Our team handles onboarding end-to-end.
            </p>
            <div className="product-final-cta__btns">
              <a
                href="mailto:webfluence.ai@gmail.com?subject=Agentic Lead Manager Inquiry"
                className="product-final-cta__btn product-final-cta__btn--primary"
              >
                Get Started Today
              </a>
              <a href="#pricing" className="product-final-cta__btn product-final-cta__btn--ghost">
                See Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="product-footer">
        <div className="container">
          <div className="product-footer__inner">
            <span className="product-footer__brand">
              <span className="wf-italic">Wf</span> Webfluence
            </span>
            <p className="product-footer__copy">
              © 2026 Webfluence. All rights reserved.
            </p>
            <a href="/" className="product-footer__link">Main Site</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
