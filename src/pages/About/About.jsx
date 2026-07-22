import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import PageHero from '../../components/common/PageHero'
import { Reveal, RevealGroup, RevealItem } from '../../components/common/Reveal'
import usePageMeta from '../../hooks/usePageMeta'
import { OFFICES } from '../../data/site'
import './About.css'

const PRINCIPLES = [
  { title: 'Senior people, actually', desc: 'Median 11 years of experience across the firm. The engineers in your kickoff are the engineers who write the code — no bait-and-switch staffing, no junior team hiding behind a senior name on the proposal.' },
  { title: 'Truth over comfort', desc: "We've talked clients out of seven figures of unnecessary work. A hard conversation in week two is cheaper than a failed launch in month nine, and it is the reason clients come back." },
  { title: 'Operate what you build', desc: 'We instrument, monitor, and carry the pager for the systems we ship. Software you cannot operate is a liability dressed as an asset, so we own it until your team is genuinely ready.' },
  { title: 'Documentation is the deliverable', desc: 'ADRs, runbooks, and architecture maps are not afterthoughts — they ship with the code. When we hand over, your next engineer inherits a system they can actually reason about.' },
]

const LEADERS = [
  { name: 'Priya Raman', role: 'Co-founder & CEO', bio: 'Runs the firm the way she ran platforms — with a bias for evidence.', prev: 'PREVIOUSLY: INFRA @ A MAJOR CLOUD PROVIDER' },
  { name: 'Daniel Voss', role: 'Co-founder & CTO', bio: 'Owns the technical bar. Still reviews architecture on the hard engagements.', prev: 'PREVIOUSLY: STAFF ENGINEER @ A PAYMENTS COMPANY' },
  { name: 'Maya Lindqvist', role: 'Head of Applied AI', bio: 'Built evaluation practice before it was fashionable to have one.', prev: 'PREVIOUSLY: ML LEAD @ A SEARCH COMPANY' },
  { name: 'Jerome Bell', role: 'Head of Product Engineering', bio: 'Cares about the empty state as much as the happy path.', prev: 'PREVIOUSLY: ENG DIRECTOR @ A CONSUMER APP' },
  { name: 'Anika Chaudhry', role: 'Design Director', bio: 'Believes the interface is the product and the details are the interface.', prev: 'PREVIOUSLY: DESIGN LEAD @ A DESIGN TOOL COMPANY' },
  { name: 'Tom Okada', role: 'Head of Infrastructure', bio: 'Keeps the fleet at four-nines and the on-call calendar humane.', prev: 'PREVIOUSLY: SRE @ A STREAMING PLATFORM' },
]

function initials(name) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2)
}

function OfficeClock({ tz }) {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit', minute: '2-digit', timeZone: tz, hour12: false,
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [tz])
  return <span className="office__time mono">{time} LOCAL</span>
}

export default function About() {
  usePageMeta(
    'About — Webfluence',
    'Founded in 2018 by two ex-infrastructure engineers. Sixty people across San Francisco and New York. Engineer-led, no account managers.'
  )

  return (
    <Layout>
      <PageHero
        eyebrow="ABOUT"
        title={<>Software is a craft. <em>We treat it like one.</em></>}
      />

      {/* Story */}
      <section className="section rule-top" aria-labelledby="story-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Our story</span>
            <h2 id="story-heading" className="sec-head__title">How Webfluence started.</h2>
          </div>
          <RevealGroup className="story">
            <RevealItem as="p" className="story__para">
              Webfluence was founded in 2018 by Priya Raman and Daniel Voss, two infrastructure
              engineers who kept getting hired to clean up the same mess: an agency rebuild that
              looked finished in the demo and fell apart in production. They started the firm on a
              simple premise — that the people who sell the work should be the people who build it.
            </RevealItem>
            <RevealItem as="p" className="story__para">
              Eight years later we are about sixty people across San Francisco and New York, working
              with clients from funded startups through the Fortune 500. We have stayed deliberately
              small and deliberately senior. Growth has never been the goal; being the firm a CTO
              calls when the outcome actually matters is.
            </RevealItem>
            <RevealItem as="p" className="story__para">
              We are still engineer-led. There are no account managers between you and the people
              doing the work, no layer that translates your problem into a statement of work and
              loses it in the process. The person who understands your system is the person building
              it — and the person who will still be reachable when it needs to change.
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* Principles */}
      <section className="section section--sunk rule-top" aria-labelledby="principles-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Principles</span>
            <h2 id="principles-heading" className="sec-head__title">Four things we don't compromise.</h2>
          </div>
          <RevealGroup className="principles">
            {PRINCIPLES.map((p, i) => (
              <RevealItem key={p.title} className="principle">
                <span className="principle__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="principle__title">{p.title}</h3>
                <p className="principle__desc">{p.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Leadership */}
      <section className="section rule-top" aria-labelledby="leaders-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Leadership</span>
            <h2 id="leaders-heading" className="sec-head__title">The people who build the work.</h2>
          </div>
          <RevealGroup className="leaders">
            {LEADERS.map((l) => (
              <RevealItem key={l.name} className="leader">
                <span className="leader__monogram" aria-hidden="true">{initials(l.name)}</span>
                <div className="leader__body">
                  <h3 className="leader__name">{l.name}</h3>
                  <p className="leader__role mono">{l.role}</p>
                  <p className="leader__bio">{l.bio}</p>
                  <p className="leader__prev mono">{l.prev}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Offices */}
      <section className="section section--sunk rule-top" aria-labelledby="offices-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Offices</span>
            <h2 id="offices-heading" className="sec-head__title">Two studios, one standard.</h2>
          </div>
          <RevealGroup className="offices">
            {OFFICES.map((o) => (
              <RevealItem key={o.code} className="office">
                <div className="office__head">
                  <h3 className="office__city">{o.city}</h3>
                  <OfficeClock tz={o.tz} />
                </div>
                <p className="office__addr mono">{o.address}</p>
              </RevealItem>
            ))}
            <RevealItem className="office office--remote">
              <h3 className="office__city">Remote</h3>
              <p className="office__addr mono">DISTRIBUTED ACROSS 9 US STATES</p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>
    </Layout>
  )
}
