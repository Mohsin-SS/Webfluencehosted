// Shared site data used across navigation, footer, home, services, and work.

export const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
]

export const PRACTICES = [
  {
    id: 'ai',
    name: 'Applied AI',
    desc: 'Production LLM systems: agents, retrieval pipelines, evaluation harnesses, and the guardrails that make them safe to put in front of customers.',
    tags: ['RAG', 'AGENTS', 'EVALS', 'FINE-TUNING'],
  },
  {
    id: 'product',
    name: 'Product engineering',
    desc: 'Web and mobile products built end-to-end — design systems, APIs, and the unglamorous edge cases that make software feel finished.',
    tags: ['REACT', 'SWIFT', 'KOTLIN', 'DESIGN SYSTEMS'],
  },
  {
    id: 'platforms',
    name: 'Enterprise platforms',
    desc: 'Internal systems that thousands of employees depend on daily: ERPs, order management, underwriting, claims. Boring on purpose, bulletproof by design.',
    tags: ['INTEGRATIONS', 'MIGRATIONS', 'SSO', 'AUDIT'],
  },
  {
    id: 'cloud',
    name: 'Cloud & infrastructure',
    desc: 'Architecture, migration, and operations on AWS and GCP. We carry the pager for what we build.',
    tags: ['KUBERNETES', 'TERRAFORM', 'SRE', 'FINOPS'],
  },
  {
    id: 'automation',
    name: 'Automation',
    desc: 'Workflow systems that remove entire categories of manual work — measured in hours returned, not features shipped.',
    tags: ['ORCHESTRATION', 'ETL', 'BACK-OFFICE', 'QA'],
  },
]

// Home featured (first three) reference these by slug.
export const CASES = [
  {
    slug: 'alderbrook',
    client: 'Alderbrook',
    industry: 'Fintech',
    cover: 'ledger',
    result: 'Rebuilt treasury operations for a $9B asset manager.',
    metrics: ['−82% CLOSE TIME', '$1.2B DAILY VOLUME'],
  },
  {
    slug: 'corvia',
    client: 'Corvia Health',
    industry: 'Healthcare',
    cover: 'waveform',
    result: 'An AI intake agent that answers every patient call.',
    metrics: ['24/7 COVERAGE', '−61% NO-SHOWS'],
  },
  {
    slug: 'lattice',
    client: 'Lattice Freight',
    industry: 'Logistics',
    cover: 'routes',
    result: 'Route optimization across a 4,000-truck network.',
    metrics: ['−17% FUEL SPEND', '11WK TO PRODUCTION'],
  },
  {
    slug: 'northgate',
    client: 'Northgate Retail Group',
    industry: 'Retail',
    cover: 'grid',
    result: 'One commerce platform for 214 stores.',
    metrics: ['+31% ONLINE REVENUE', '3 SYSTEMS RETIRED'],
  },
]

export const OFFICES = [
  { city: 'San Francisco', address: '550 Kearny St, Suite 800', tz: 'America/Los_Angeles', code: 'SF' },
  { city: 'New York', address: '115 Broadway, Floor 5', tz: 'America/New_York', code: 'NYC' },
]

export const EMAIL = 'hello@webfluence.tech'
