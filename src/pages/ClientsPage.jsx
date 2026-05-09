import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer/Footer';
import WordsPullUp from '../components/ui/WordsPullUp';
import { clients, featuredProjects } from '../data/clients';
import './ClientsPage.css';

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ClientsPage = () => (
  <>
    <Navbar />

    {/* ── Hero ── */}
    <section className="clients-hero">
      <div className="clients-hero__bg" aria-hidden="true" />
      <div className="container">
        <motion.span
          className="clients-hero__label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Work
        </motion.span>
        <h1 className="clients-hero__title">
          <WordsPullUp text="Trusted by ambitious" delay={0.05} />
          <br />
          <WordsPullUp
            text="businesses worldwide."
            style={{ color: 'rgba(var(--accent-rgb), 0.38)' }}
            delay={0.2}
          />
        </h1>
        <motion.p
          className="clients-hero__sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          From CRM stacks and AI chatbots to full marketing engines and ERP systems —
          here's a snapshot of the brands and products we've shipped.
        </motion.p>
      </div>
    </section>

    {/* ── Clients Grid ── */}
    <section className="clients-section">
      <div className="container">
        <div className="clients-section__head">
          <span className="clients-section__eyebrow">Clients</span>
          <h2 className="clients-section__title">
            <WordsPullUp text="Brands we partner with." delay={0.05} />
          </h2>
        </div>

        <div className="clients-grid">
          {clients.map((c, i) => (
            <motion.article
              key={c.name}
              className="client-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
            >
              <div className="client-card__head">
                <div className="client-card__monogram">
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="client-card__logo"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <span
                    className="client-card__monogram-text"
                    style={{ display: c.logo ? 'none' : 'flex' }}
                  >
                    {c.initials}
                  </span>
                </div>
                <div className="client-card__heading">
                  <h3 className="client-card__name">{c.name}</h3>
                  <span className="client-card__industry">{c.industry}</span>
                </div>
              </div>
              <p className="client-card__summary">{c.summary}</p>
              <div className="client-card__chips">
                {c.services.map((s) => (
                  <span key={s} className="client-chip">{s}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* ── Featured Projects ── */}
    <section className="projects-section">
      <div className="container">
        <div className="clients-section__head">
          <span className="clients-section__eyebrow">Featured Projects</span>
          <h2 className="clients-section__title">
            <WordsPullUp text="Products we've engineered." delay={0.05} />
          </h2>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((p, i) => (
            <motion.article
              key={p.name}
              className="project-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
            >
              <span className="project-card__category">{p.category}</span>
              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__summary">{p.summary}</p>
              <ul className="project-card__highlights">
                {p.highlights.map((h) => (
                  <li key={h}>
                    <CheckCircle2 size={14} strokeWidth={2} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="clients-cta">
      <div className="container">
        <motion.div
          className="clients-cta__inner"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="clients-cta__label">Have a project in mind?</span>
          <h2 className="clients-cta__title">Let's build the next one together.</h2>
          <p className="clients-cta__sub">
            Tell us what you're trying to solve — websites, CRMs, AI agents, ERPs — and we'll scope it with you.
          </p>
          <div className="clients-cta__btns">
            <Link to="/#contact" className="btn btn-primary clients-cta__btn">
              Get a Free Consultation
              <ArrowRight size={16} />
            </Link>
            <Link to="/#services" className="btn btn-ghost clients-cta__btn-ghost">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </>
);

export default ClientsPage;
