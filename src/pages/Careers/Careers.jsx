import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Layout from '../../components/Layout'
import PageHero from '../../components/common/PageHero'
import { Reveal, RevealGroup, RevealItem } from '../../components/common/Reveal'
import usePageMeta from '../../hooks/usePageMeta'
import './Careers.css'

const HOW = [
  { title: '4-day client weeks', desc: 'Monday through Thursday is client work. Fridays are ours — for internal projects, learning, and the maintenance that keeps our own house in order.' },
  { title: 'No timesheets', desc: 'We measure outcomes, not hours logged. Nobody at Webfluence has ever filled in a six-minute billing increment, and nobody ever will.' },
  { title: 'Pairing culture', desc: 'Hard problems get two people. Pairing is how we keep quality high, spread context, and make sure no system has exactly one person who understands it.' },
  { title: 'Whole-company offsite', desc: 'Once a year the entire firm — SF, NYC, and remote — gets in one room for a week. It is the only meeting we consider mandatory.' },
]

const BENEFITS = [
  'Top-1% salary bands, published internally',
  '100% medical, dental & vision',
  '$2,500 annual learning budget',
  '20 days PTO + closed last week of December',
  '16-week parental leave',
  '401(k) with 4% match',
  'Remote-flexible across the US',
  'M2-loaded setup + $1,500 desk budget',
]

const ROLES = [
  { title: 'Staff ML Engineer', meta: 'SF OR REMOTE · $205K–$260K' },
  { title: 'Senior Product Engineer (Full-stack)', meta: 'SF / NYC / REMOTE · $185K–$235K' },
  { title: 'Senior Infrastructure Engineer', meta: 'SF OR REMOTE · $190K–$245K' },
  { title: 'Product Designer (Systems)', meta: 'NYC OR REMOTE · $165K–$210K' },
  { title: 'Engineering Manager — Platforms', meta: 'SF · $215K–$270K' },
  { title: 'Technical Program Manager', meta: 'SF / NYC · $170K–$215K' },
]

export default function Careers() {
  usePageMeta(
    'Careers — Webfluence',
    'Do the best work of your career, then operate it. Senior engineers, four-day client weeks, transparent pay, and open roles across SF, NYC, and remote.'
  )

  return (
    <Layout>
      <PageHero
        eyebrow="CAREERS"
        title={<>Do the best work of your career. <em>Then operate it.</em></>}
        lead="We hire senior people and give them room to do the work properly — then we stay on the hook for it together. If you want to ship software you are proud of and stand behind it in production, this is the firm."
      />

      {/* How we run */}
      <section className="section rule-top" aria-labelledby="how-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">How we run</span>
            <h2 id="how-heading" className="sec-head__title">A place built for focused work.</h2>
          </div>
          <RevealGroup className="how">
            {HOW.map((h) => (
              <RevealItem key={h.title} className="how__item">
                <h3 className="how__title">{h.title}</h3>
                <p className="how__desc">{h.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section--sunk rule-top" aria-labelledby="benefits-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Benefits</span>
            <h2 id="benefits-heading" className="sec-head__title">The details, handled.</h2>
          </div>
          <RevealGroup as="ul" className="benefits">
            {BENEFITS.map((b) => (
              <RevealItem as="li" key={b} className="benefit mono">
                <span className="benefit__dot" aria-hidden="true" />
                {b}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Open roles */}
      <section className="section rule-top" aria-labelledby="roles-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Open roles</span>
            <h2 id="roles-heading" className="sec-head__title">Six seats open right now.</h2>
          </div>
          <RevealGroup className="roles">
            {ROLES.map((r) => (
              <RevealItem key={r.title}>
                <Link to="/contact" className="role-row">
                  <h3 className="role-row__title">{r.title}</h3>
                  <span className="role-row__meta mono">{r.meta}</span>
                  <ArrowRight size={18} strokeWidth={1.5} className="role-row__arrow" />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal as="p" className="roles__note mono" delay={0.1}>
            We read every application ourselves. No ATS black hole.
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
