import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Layout from '../../components/Layout'
import PageHero from '../../components/common/PageHero'
import { Reveal, RevealGroup, RevealItem } from '../../components/common/Reveal'
import usePageMeta from '../../hooks/usePageMeta'
import './Services.css'

const PRACTICES = [
  {
    id: 'ai',
    name: 'Applied AI',
    paras: [
      'We build language-model systems that survive contact with real users. That means retrieval pipelines with measurable grounding, agents that know when to stop and ask a human, and evaluation harnesses that catch regressions before your customers do.',
      'The hard part of AI is not the model — it is everything around it. We own the retrieval quality, the prompt versioning, the guardrails, the cost ceilings, and the observability that tells you what actually happened on run 40,000. If a system cannot be evaluated, we do not ship it.',
    ],
    deliver: [
      'Retrieval-augmented generation with grounding metrics',
      'Multi-step agents with human-in-the-loop handoff',
      'Offline and online evaluation harnesses',
      'Prompt versioning, cost controls, and rate limiting',
      'Guardrails, PII redaction, and audit logging',
      'Fine-tuning and distillation where it earns its keep',
    ],
    engagement: 'TYPICAL ENGAGEMENT: 8–16 WEEKS · TEAM OF 3–5',
    related: { label: 'Corvia Health — AI intake agent', slug: 'corvia' },
  },
  {
    id: 'product',
    name: 'Product engineering',
    paras: [
      'We build web and mobile products end-to-end — from the design system to the deploy pipeline. Interfaces that feel considered, APIs that are pleasant to integrate against, and the unglamorous edge cases that separate a demo from a product.',
      'We work in your stack or recommend one and defend the choice. Every surface is accessible, every state is designed — loading, empty, error, offline — and every component ships with the tests that let the next engineer move fast without breaking it.',
    ],
    deliver: [
      'Design systems and component libraries',
      'React and React Native application development',
      'Native iOS (Swift) and Android (Kotlin) where it matters',
      'Typed APIs, SDKs, and integration surfaces',
      'Accessibility to WCAG 2.2 AA',
      'CI/CD, preview environments, and release tooling',
    ],
    engagement: 'TYPICAL ENGAGEMENT: 10–20 WEEKS · TEAM OF 3–6',
    related: { label: 'Alderbrook — treasury operations', slug: 'alderbrook' },
  },
  {
    id: 'platforms',
    name: 'Enterprise platforms',
    paras: [
      'The systems that run a company are rarely glamorous: order management, underwriting, claims, ERPs, the internal tools thousands of employees live in eight hours a day. We build them to be boring on purpose and bulletproof by design.',
      'We specialize in the migrations everyone else is afraid of — moving off the mainframe, consolidating three systems into one, threading single sign-on and audit trails through software that predates your tenure. We plan the cutover so nobody notices it happened.',
    ],
    deliver: [
      'Order management, underwriting, and claims systems',
      'Legacy migration and system consolidation',
      'Third-party and internal system integrations',
      'SSO, RBAC, and complete audit trails',
      'Data modeling and zero-downtime cutovers',
      'Runbooks and operator documentation',
    ],
    engagement: 'TYPICAL ENGAGEMENT: 12–24 WEEKS · TEAM OF 4–6',
    related: { label: 'Northgate — unified commerce platform', slug: 'northgate' },
  },
  {
    id: 'cloud',
    name: 'Cloud & infrastructure',
    paras: [
      'We architect, migrate, and operate cloud infrastructure on AWS and GCP. Infrastructure as code, sensible defaults, and the boring reliability practices that keep a fleet at four-nines without heroics.',
      'We do not hand you a diagram and leave. We carry the pager for what we build, instrument it properly, and hand over only when your team is ready to own it. FinOps is part of the job — we have taken six-figure monthly bills down by a third without touching reliability.',
    ],
    deliver: [
      'Kubernetes and container platform design',
      'Terraform-managed, reproducible infrastructure',
      'Cloud migration and multi-region architecture',
      'SRE practices: SLOs, on-call, incident response',
      'Observability with metrics, traces, and logs',
      'FinOps and sustained cost optimization',
    ],
    engagement: 'TYPICAL ENGAGEMENT: 8–16 WEEKS · TEAM OF 3–5',
    related: { label: 'Lattice Freight — route optimization', slug: 'lattice' },
  },
  {
    id: 'automation',
    name: 'Automation',
    paras: [
      'We remove entire categories of manual work — the copy-paste between systems, the overnight reconciliation, the queue a team of ten processes by hand. We measure the result in hours returned to your business, not features shipped.',
      'Durable orchestration is the backbone: workflows that survive restarts, retry intelligently, and leave an audit trail. We automate the eighty percent that is mechanical and route the twenty percent that needs judgment to the right person, with context attached.',
    ],
    deliver: [
      'Durable workflow orchestration (Temporal)',
      'ETL and data pipeline automation',
      'Back-office and operations tooling',
      'Automated QA and regression suites',
      'Exception routing with human review',
      'Reporting, alerting, and reconciliation',
    ],
    engagement: 'TYPICAL ENGAGEMENT: 6–12 WEEKS · TEAM OF 2–4',
    related: { label: 'Alderbrook — treasury operations', slug: 'alderbrook' },
  },
]

const WAYPOINT = [
  ['Diagnose', 'Two weeks embedded. A map, the risks, a fixed-scope plan.'],
  ['Design', 'Interface, architecture, and data model — documented in ADRs.'],
  ['Deliver', 'Weekly shipped demos on production infrastructure.'],
  ['Operate', 'We instrument, monitor, and carry the pager until handover.'],
]

export default function Services() {
  usePageMeta(
    'Services — Webfluence',
    'Five practices: applied AI, product engineering, enterprise platforms, cloud and infrastructure, and automation. Narrow surface, deep expertise.'
  )

  return (
    <Layout>
      <PageHero
        eyebrow="CAPABILITIES"
        title={<>Narrow surface. <em>Deep expertise.</em></>}
        lead="We take on five kinds of work and turn everything else down. It keeps our people senior, our standards high, and our judgment worth paying for. Here is exactly what each practice does — and what you get when we are done."
      />

      {PRACTICES.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`section svc rule-top${i % 2 === 1 ? ' section--sunk' : ''}`}
          aria-labelledby={`${p.id}-heading`}
        >
          <div className="container svc__inner">
            <Reveal className="svc__lead">
              <span className="eyebrow">{String(i + 1).padStart(2, '0')} — Practice</span>
              <h2 id={`${p.id}-heading`} className="svc__title">{p.name}</h2>
              {p.paras.map((para, j) => (
                <p key={j} className="svc__para">{para}</p>
              ))}
              <p className="svc__engagement mono">{p.engagement}</p>
              <Link to={`/work#${p.related.slug}`} className="link-underline svc__related">
                {p.related.label} <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
            </Reveal>

            <Reveal className="svc__deliver" delay={0.12}>
              <h3 className="svc__deliver-title">What we deliver</h3>
              <RevealGroup as="ul" className="svc__checklist" stagger={0.06}>
                {p.deliver.map((d) => (
                  <RevealItem as="li" key={d} className="svc__check">
                    <span className="svc__check-icon" aria-hidden="true">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    {d}
                  </RevealItem>
                ))}
              </RevealGroup>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Waypoint recap */}
      <section className="section rule-top" aria-labelledby="waypoint-heading">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">How we deliver</span>
            <div>
              <h2 id="waypoint-heading" className="sec-head__title">Every practice runs on Waypoint.</h2>
              <p className="sec-head__intro">
                The same delivery system across all five, refined over 140 launches. You see working
                software in week one and every week after.
              </p>
            </div>
          </div>
          <RevealGroup className="svc__waypoint">
            {WAYPOINT.map(([name, desc], i) => (
              <RevealItem key={name} className="svc__wp">
                <span className="svc__wp-num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="svc__wp-name">{name}</h3>
                <p className="svc__wp-desc">{desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </Layout>
  )
}
