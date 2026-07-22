import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import PageHero from '../../components/common/PageHero'
import CaseCover from '../../components/common/CaseCover'
import { Reveal, RevealGroup, RevealItem } from '../../components/common/Reveal'
import usePageMeta from '../../hooks/usePageMeta'
import './Work.css'

const CASES = [
  {
    slug: 'alderbrook',
    client: 'Alderbrook',
    cover: 'ledger',
    meta: ['FINTECH', '2024', '18 WEEKS', 'TEAM OF 5'],
    headline: 'Rebuilt treasury operations for a $9B asset manager.',
    challenge: 'Alderbrook ran daily treasury operations across four disconnected systems and a spreadsheet nobody was allowed to touch. Month-end close took eleven days, reconciliation was manual, and a single analyst held the only complete picture of cash positions in their head.',
    approach: 'We spent two weeks mapping every data flow before writing a line of code. Then we built a single treasury platform on an event-sourced ledger — every position, every movement, fully auditable — with automated reconciliation and a real-time cash dashboard. We migrated fourteen years of history without a day of downtime.',
    outcome: 'Close time dropped from eleven days to under two. Reconciliation that took three analysts now runs automatically overnight, with exceptions routed for review. The platform processes $1.2B in daily volume and passed the client\'s external audit on the first pass.',
    metrics: [
      ['−82%', 'Month-end close time'],
      ['$1.2B', 'Daily volume processed'],
      ['14 yrs', 'History migrated, zero downtime'],
    ],
    quote: { text: 'They understood our controls better than some of our own hires. The audit was a non-event.', name: 'Controller, Alderbrook' },
    stack: ['POSTGRES', 'EVENT SOURCING', 'TEMPORAL', 'REACT', 'AWS'],
  },
  {
    slug: 'corvia',
    client: 'Corvia Health',
    cover: 'waveform',
    meta: ['HEALTHCARE', '2025', '14 WEEKS', 'TEAM OF 4'],
    headline: 'An AI intake agent that answers every patient call.',
    challenge: 'Corvia\'s clinics missed roughly a third of inbound calls at peak — patients rescheduling, asking about prep, confirming coverage. Missed calls meant no-shows, and no-shows meant empty appointment slots the practice could not afford.',
    approach: 'We built a voice and messaging intake agent grounded in Corvia\'s own scheduling and eligibility systems. It handles the routine — booking, reminders, coverage checks — and hands off to staff the moment a call needs judgment, with a full transcript and context attached. Every response is evaluated against a suite we run continuously.',
    outcome: 'The agent now covers intake around the clock and answers calls that used to go to voicemail. No-shows fell 61%. Front-desk staff spend their time on patients in the building instead of the phone, and every interaction is logged for compliance.',
    metrics: [
      ['24/7', 'Intake coverage'],
      ['−61%', 'Patient no-shows'],
      ['3.1s', 'Median response time'],
    ],
    quote: { text: 'Our front desk got their afternoons back. Patients cannot tell it is not a person — and legally, we make sure they can.', name: 'Director of Operations, Corvia Health' },
    stack: ['PYTHON', 'RAG', 'EVALS', 'TWILIO', 'GCP'],
  },
  {
    slug: 'lattice',
    client: 'Lattice Freight',
    cover: 'routes',
    meta: ['LOGISTICS', '2023', '11 WEEKS', 'TEAM OF 5'],
    headline: 'Route optimization across a 4,000-truck network.',
    challenge: 'Lattice planned routes for a 4,000-truck network with regional dispatchers, tribal knowledge, and a planning tool a decade past its prime. Fuel was their second-largest cost and nobody could say how much of it was avoidable.',
    approach: 'We built an optimization engine that ingests live orders, capacity, traffic, and fuel prices and proposes routes dispatchers can accept, adjust, or override. We shipped it region by region so dispatchers could trust it before depending on it — the first optimized routes were live in week four.',
    outcome: 'Fuel spend across the optimized network fell 17%. Dispatchers plan in minutes instead of hours, and the system reached full production across all regions in eleven weeks. The optimizer now re-plans continuously as conditions change.',
    metrics: [
      ['−17%', 'Network fuel spend'],
      ['11 wk', 'To full production'],
      ['4,000', 'Trucks optimized live'],
    ],
    quote: { text: 'They told us to cut a third of our roadmap. They were right. We shipped in eleven weeks instead of six months.', name: 'Sam Herrera, VP Engineering, Lattice Freight' },
    stack: ['GO', 'KAFKA', 'KUBERNETES', 'REACT', 'GCP'],
  },
  {
    slug: 'northgate',
    client: 'Northgate Retail Group',
    cover: 'grid',
    meta: ['RETAIL', '2025', '22 WEEKS', 'TEAM OF 6'],
    headline: 'One commerce platform for 214 stores.',
    challenge: 'Northgate ran 214 stores on three commerce systems that did not talk to each other. Online and in-store inventory drifted apart daily, promotions had to be entered three times, and a customer could not return online what they bought in a store.',
    approach: 'We built a unified commerce platform with a single source of truth for inventory, pricing, and orders, then integrated it store by store while the old systems kept running. Buy-online-pickup-in-store, unified returns, and one promotions engine went live in phases so no store ever went dark.',
    outcome: 'Online revenue rose 31% within two quarters as inventory finally reflected reality. Three legacy systems were retired, cutting license and maintenance cost, and the platform paid for itself in six months. Store staff now work in one system instead of three.',
    metrics: [
      ['+31%', 'Online revenue'],
      ['3', 'Legacy systems retired'],
      ['6 mo', 'Payback period'],
    ],
    quote: { text: 'For the first time our website knows what is actually on the shelf. That one fact changed everything downstream.', name: 'VP Digital, Northgate Retail Group' },
    stack: ['POSTGRES', 'KAFKA', 'TEMPORAL', 'REACT', 'AWS'],
  },
]

function useActiveSection(slugs) {
  const [active, setActive] = useState(slugs[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    slugs.forEach((s) => {
      const el = document.getElementById(s)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [slugs])
  return active
}

export default function Work() {
  usePageMeta(
    'Work — Webfluence',
    'Four engagements — fintech, healthcare, logistics, and retail — told with the numbers that mattered.'
  )
  const active = useActiveSection(CASES.map((c) => c.slug))

  return (
    <Layout>
      <PageHero
        eyebrow="SELECTED WORK"
        title="Work that holds up in production."
        lead="Four engagements, told with the numbers that mattered. Every figure here is one a client would recognize on their own dashboard."
      />

      <nav className="work-anchors" aria-label="Case studies">
        <div className="container work-anchors__inner">
          {CASES.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className={`work-anchors__link mono${active === c.slug ? ' is-active' : ''}`}
            >
              {c.client}
            </a>
          ))}
        </div>
      </nav>

      {CASES.map((c, i) => (
        <article
          key={c.slug}
          id={c.slug}
          className={`section wcase rule-top${i % 2 === 1 ? ' section--sunk' : ''}`}
          aria-labelledby={`${c.slug}-heading`}
        >
          <div className="container">
            <Reveal>
              <CaseCover type={c.cover} className="wcase__cover" />
            </Reveal>

            <div className="wcase__head">
              <Reveal as="p" className="wcase__meta mono">{c.meta.join('  ·  ')}</Reveal>
              <Reveal as="h2" className="wcase__headline" delay={0.05} id={`${c.slug}-heading`}>
                {c.headline}
              </Reveal>
            </div>

            <div className="wcase__grid">
              <RevealGroup className="wcase__narrative">
                {[['Challenge', c.challenge], ['Approach', c.approach], ['Outcome', c.outcome]].map(([label, body]) => (
                  <RevealItem key={label} className="wcase__block">
                    <h3 className="wcase__block-label mono">{label}</h3>
                    <p className="wcase__block-body">{body}</p>
                  </RevealItem>
                ))}
              </RevealGroup>

              <aside className="wcase__side">
                <Reveal className="wcase__stats">
                  {c.metrics.map(([v, l]) => (
                    <div key={l} className="wcase__stat">
                      <span className="wcase__stat-value">{v}</span>
                      <span className="wcase__stat-label mono">{l}</span>
                    </div>
                  ))}
                </Reveal>
                <Reveal className="wcase__stack" delay={0.1}>
                  <h3 className="wcase__stack-label mono">Stack</h3>
                  <div className="wcase__tags">
                    {c.stack.map((t) => <span key={t} className="wcase__tag mono">{t}</span>)}
                  </div>
                </Reveal>
              </aside>
            </div>

            <Reveal as="figure" className="wcase__quote" delay={0.05}>
              <blockquote className="wcase__quote-text">{c.quote.text}</blockquote>
              <figcaption className="wcase__quote-cite mono">{c.quote.name}</figcaption>
            </Reveal>
          </div>
        </article>
      ))}
    </Layout>
  )
}
