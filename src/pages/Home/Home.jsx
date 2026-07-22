import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Layout from '../../components/Layout'
import AtlasMockup from '../../components/Atlas/AtlasMockup'
import CaseCover from '../../components/common/CaseCover'
import { Reveal, RevealGroup, RevealItem, EASE } from '../../components/common/Reveal'
import useCountUp from '../../hooks/useCountUp'
import usePageMeta from '../../hooks/usePageMeta'
import { PRACTICES, CASES } from '../../data/site'
import './Home.css'

const CLIENTS = [
  { name: 'Alderbrook', cls: 'wm-serif' },
  { name: 'Corvia Health', cls: 'wm-sans-tight' },
  { name: 'Lattice Freight', cls: 'wm-wide' },
  { name: 'Meridian Bank', cls: 'wm-serif-italic' },
  { name: 'Halcyon Labs', cls: 'wm-lower' },
  { name: 'Northgate Retail Group', cls: 'wm-sans' },
  { name: 'Statler & Finch', cls: 'wm-serif' },
  { name: 'Ovelia', cls: 'wm-wide-serif' },
]

const STATS = [
  { value: 140, suffix: '+', label: 'Systems in production' },
  { value: 3.1, decimals: 1, prefix: '$', suffix: 'B', label: 'Processed annually by platforms we operate' },
  { value: 99.98, decimals: 2, suffix: '%', label: 'Trailing 12-month uptime, managed fleet' },
  { value: 92, suffix: '%', label: 'Clients who return for a second engagement' },
]

const STEPS = [
  { n: '01', name: 'Diagnose', desc: 'Two weeks embedded with your team. We leave with a map of the system, the risks, and a fixed-scope plan — or we tell you not to build it.' },
  { n: '02', name: 'Design', desc: 'Interface, architecture, and data model designed together. Decisions documented in ADRs you keep, whoever you hire next.' },
  { n: '03', name: 'Deliver', desc: 'Weekly shipped demos on production infrastructure. No big reveal at the end — the end is just another Tuesday.' },
  { n: '04', name: 'Operate', desc: 'We instrument, monitor, and carry the pager. Handover when your team is ready, not when the contract says so.' },
]

const QUOTES = [
  { quote: "Webfluence's engineers passed our internal architecture review on the first attempt. Our own teams don't always do that.", name: 'Diane Okafor', role: 'CTO, Meridian Bank' },
  { quote: 'They told us to cut a third of our roadmap. They were right. We shipped in eleven weeks instead of six months.', name: 'Sam Herrera', role: 'VP Engineering, Lattice Freight' },
]

const NOTES = [
  { title: 'Evals are the new unit tests', meta: 'JUN 2026 · 9 MIN' },
  { title: 'The case against microservices at Series B', meta: 'MAY 2026 · 7 MIN' },
  { title: 'What 40 LLM production incidents taught us', meta: 'APR 2026 · 12 MIN' },
]

function StatNumber({ value, decimals = 0, prefix = '', suffix = '' }) {
  const [ref, current] = useCountUp(value, { decimals })
  const display = decimals ? current.toFixed(decimals) : Math.round(current).toLocaleString('en-US')
  return (
    <span className="stat__value" ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}

function HeadlineLine({ children, delay }) {
  return (
    <span className="hero__line">
      <motion.span
        className="hero__line-inner"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Home() {
  usePageMeta(
    'Webfluence — Applied AI & Product Engineering',
    "Webfluence is an engineering firm that designs, ships, and operates AI systems, enterprise platforms, and cloud infrastructure for companies where failure isn't an option."
  )

  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero__inner">
          <motion.p
            className="eyebrow hero__eyebrow"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            APPLIED AI · PRODUCT ENGINEERING · SAN FRANCISCO
          </motion.p>

          <h1 id="hero-heading" className="hero__title display">
            <HeadlineLine delay={0.1}>We build the software</HeadlineLine>
            <HeadlineLine delay={0.22}>serious companies</HeadlineLine>
            <HeadlineLine delay={0.34}><em>run on.</em></HeadlineLine>
          </h1>

          <div className="hero__row">
            <motion.p
              className="hero__sub"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            >
              Webfluence is an engineering firm that designs, ships, and operates AI systems,
              enterprise platforms, and cloud infrastructure — for companies where failure isn't an option.
            </motion.p>

            <motion.div
              className="hero__aside mono"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
            >
              <span className="hero__pulse" aria-hidden="true" />
              Currently accepting Q4 2026 engagements
            </motion.div>
          </div>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.62 }}
          >
            <Link to="/contact" className="btn btn--primary">
              Start a project <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <Link to="/work" className="link-underline">
              See our work <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>

        {/* Mockup band */}
        <div className="hero__mockup-band">
          <div className="container">
            <motion.p
              className="eyebrow hero__mockup-caption"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
            >
              ATLAS — AGENT OPERATIONS CONSOLE, BUILT FOR A FORTUNE 500 LOGISTICS CLIENT
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
            >
              <AtlasMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 01 Client strip ──────────────────────────────── */}
      <section className="clients section--sunk" aria-label="Clients">
        <div className="container">
          <p className="clients__label"><span className="eyebrow">01 — Trusted by</span></p>
          <p className="clients__lead">Engineering partner to teams at</p>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className={`marquee__item ${c.cls}`}>{c.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 Capabilities ──────────────────────────────── */}
      <section className="section rule-top" aria-labelledby="cap-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">02 — What we do</span>
            <div>
              <h2 id="cap-heading" className="sec-head__title">Five practices. One standard.</h2>
              <p className="sec-head__intro">
                We keep our surface area deliberately narrow. Everything we take on, we can
                defend in a room full of your engineers.
              </p>
            </div>
          </div>

          <RevealGroup className="cap-list">
            {PRACTICES.map((p, i) => (
              <RevealItem key={p.id}>
                <Link to={`/services#${p.id}`} className="cap-row">
                  <span className="cap-row__num mono">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="cap-row__name">{p.name}</h3>
                  <p className="cap-row__desc">{p.desc}</p>
                  <span className="cap-row__tags mono">{p.tags.join(' · ')}</span>
                  <span className="cap-row__arrow"><ArrowRight size={20} strokeWidth={1.5} /></span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 03 Results (dark) ────────────────────────────── */}
      <section className="section section--dark results" aria-labelledby="results-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">03 — Results</span>
            <h2 id="results-heading" className="sec-head__title">We're measured by what ships.</h2>
          </div>
          <RevealGroup className="results__grid">
            {STATS.map((s) => (
              <RevealItem key={s.label} className="stat">
                <StatNumber {...s} />
                <span className="stat__label mono">{s.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal as="p" className="results__foot mono" delay={0.1}>
            FIGURES AUDITED INTERNALLY, JANUARY 2026.
          </Reveal>
        </div>
      </section>

      {/* ── 04 Featured work ─────────────────────────────── */}
      <section className="section work-feat" aria-labelledby="work-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">04 — Selected work</span>
            <h2 id="work-heading" className="sec-head__title">Work that holds up in production.</h2>
          </div>

          <RevealGroup className="work-feat__grid">
            {CASES.slice(0, 3).map((c) => (
              <RevealItem key={c.slug}>
                <Link to={`/work#${c.slug}`} className="case-card">
                  <CaseCover type={c.cover} className="case-card__cover" />
                  <div className="case-card__body">
                    <span className="case-card__client mono">{c.client.toUpperCase()}</span>
                    <p className="case-card__result">{c.result}</p>
                    <div className="case-card__foot">
                      <span className="case-card__metrics mono">{c.metrics.join(' · ')}</span>
                      <ArrowUpRight size={18} strokeWidth={1.5} className="case-card__arrow" />
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="work-feat__more" delay={0.1}>
            <Link to="/work" className="link-underline">All case studies <ArrowRight size={15} strokeWidth={1.5} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ── 05 Waypoint method ───────────────────────────── */}
      <section className="section section--sunk rule-top method" aria-labelledby="method-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">05 — The Waypoint method</span>
            <div>
              <h2 id="method-heading" className="sec-head__title">A delivery system, not a leap of faith.</h2>
              <p className="sec-head__intro">
                Every engagement runs on Waypoint — the operating system we've refined across 140 launches.
                You see working software in week one and every week after.
              </p>
            </div>
          </div>

          <RevealGroup className="method__steps">
            {STEPS.map((s) => (
              <RevealItem key={s.n} className="method__step">
                <span className="method__num mono">{s.n}</span>
                <span className="method__dot" aria-hidden="true" />
                <h3 className="method__name">{s.name}</h3>
                <p className="method__desc">{s.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 06 Testimonials ──────────────────────────────── */}
      <section className="section rule-top" aria-labelledby="quotes-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">06 — What clients say</span>
            <h2 id="quotes-heading" className="sec-head__title">Signed off by the people who'd know.</h2>
          </div>
          <RevealGroup className="quotes">
            {QUOTES.map((q) => (
              <RevealItem key={q.name}>
                <figure className="quote">
                  <span className="quote__mark" aria-hidden="true">&ldquo;</span>
                  <blockquote className="quote__text">{q.quote}</blockquote>
                  <figcaption className="quote__cite mono">
                    <span className="quote__name">{q.name}</span>{q.role}
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 07 Field notes ───────────────────────────────── */}
      <section className="section section--sunk rule-top" aria-labelledby="notes-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">07 — Field notes</span>
            <h2 id="notes-heading" className="sec-head__title">What we're thinking about.</h2>
          </div>
          <RevealGroup className="notes">
            {NOTES.map((n) => (
              <RevealItem key={n.title}>
                <a href="#" className="note-row" aria-disabled="true" role="link">
                  <h3 className="note-row__title">{n.title}</h3>
                  <span className="note-row__meta mono">{n.meta}</span>
                  <ArrowUpRight size={18} strokeWidth={1.5} className="note-row__arrow" />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </Layout>
  )
}
