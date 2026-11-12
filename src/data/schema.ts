// JSON-LD builders shared by the pages. Everything links back to the one
// Organization entity in business.ts (by @id), so search engines and AI
// assistants see a single business behind every page.
//
// Pages pass `Astro.url.href` as the URL; BaseLayout swaps it for the clean
// canonical URL before output.

import type { WithContext, Thing } from 'schema-dts';
import { SITE_URL } from '@/data/business';

const ORG = { '@id': `${SITE_URL}/#organization` };
const WEBSITE = { '@id': `${SITE_URL}/#website` };

export interface Faq {
  question: string;
  /** Plain text. The first sentence must answer the question on its own. */
  answer: string;
}

type Schema = WithContext<Thing>;

export function webPageSchema(opts: {
  url: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'WebPage',
    '@id': opts.url,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'en',
    isPartOf: WEBSITE,
    about: ORG,
    publisher: ORG,
  } as Schema;
}

/** A service Webfluence sells, offered by the Organization. */
export function serviceSchema(opts: {
  url: string;
  name: string;
  serviceType: string;
  description: string;
}): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${opts.url}#service`,
    url: opts.url,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    provider: ORG,
    areaServed: [
      { '@type': 'City', name: 'Lahore' },
      { '@type': 'Country', name: 'Pakistan' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
  } as Schema;
}

/** A software product Webfluence builds and sells. */
export function softwareSchema(opts: {
  url: string;
  name: string;
  description: string;
  category: string;
}): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${opts.url}#software`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    applicationCategory: opts.category,
    operatingSystem: 'Web',
    publisher: ORG,
    creator: ORG,
  } as Schema;
}

export function faqSchema(url: string, faqs: Faq[]): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } as Schema;
}

/** A client case study, written and published by Webfluence. */
export function caseStudySchema(opts: {
  url: string;
  headline: string;
  description: string;
  image?: string;
  client: { name: string; url?: string };
}): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${opts.url}#article`,
    url: opts.url,
    mainEntityOfPage: opts.url,
    headline: opts.headline,
    name: opts.headline,
    description: opts.description,
    ...(opts.image
      ? { image: opts.image.startsWith('http') ? opts.image : `${SITE_URL}${opts.image}` }
      : {}),
    author: ORG,
    publisher: ORG,
    isPartOf: WEBSITE,
    inLanguage: 'en',
    about: {
      '@type': 'Organization',
      name: opts.client.name,
      ...(opts.client.url ? { url: opts.client.url } : {}),
    },
  } as Schema;
}
