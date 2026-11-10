// Single source of truth for Webfluence's business details (NAP: name,
// address, phone). The footer, the contact page and the LocalBusiness
// JSON-LD all read from here, so they stay identical to each other.
// Keep these exactly in sync with the Google Business Profile listing.

export const SITE_URL = 'https://www.webfluence.tech';

export const business = {
  name: 'Webfluence',
  legalName: 'Webfluence',
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/social.png`,
  email: 'info@webfluence.tech',
  phone: '+92 324 4477757',
  address: {
    streetAddress: 'CCA 2, DHA Phase 6',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  description:
    'Webfluence is a software development and digital marketing company in Lahore, Pakistan, building ERP, CRM, web and mobile applications and running SEO and performance marketing for businesses across Pakistan and internationally.',
  services: [
    'ERP Development',
    'CRM Development',
    'Web Development',
    'Mobile App Development',
    'WhatsApp Chatbot Development',
    'SEO Services',
    'Digital Marketing',
    'Creative & Branding',
  ],
  // Add LinkedIn, Facebook, Instagram, Clutch etc. profile URLs here once
  // they exist; they are output as `sameAs` in the schema.
  sameAs: [] as string[],
} as const;

/** One-line address, as shown in the footer. */
export const addressLine = `${business.address.streetAddress}, ${business.address.addressLocality}, Pakistan`;

/** E.164 phone number for tel: links and schema, e.g. +923244477757. */
export const phoneE164 = business.phone.replace(/[^+\d]/g, '');

/**
 * Canonical URL for a page path. The static build writes `erp.html`,
 * `index.html` etc., which Astro.url reflects, so strip those. The
 * /case-studies/* pages duplicate /work/* (the URLs the nav links to), so
 * point them at /work.
 */
export function canonicalUrl(pathname: string): string {
  let path = pathname
    .replace(/\/index\.html$/, '/')
    .replace(/\.html$/, '')
    .replace(/^\/case-studies\//, '/work/');
  if (path.length > 1) path = path.replace(/\/$/, '');
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/** Organization + ProfessionalService (a LocalBusiness subtype) JSON-LD. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: business.name,
  legalName: business.legalName,
  url: `${SITE_URL}/`,
  logo: business.logo,
  image: business.image,
  description: business.description,
  email: business.email,
  telephone: phoneE164,
  address: {
    '@type': 'PostalAddress',
    ...business.address,
  },
  areaServed: [
    { '@type': 'City', name: 'Lahore' },
    { '@type': 'Country', name: 'Pakistan' },
  ],
  knowsAbout: business.services,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: phoneE164,
    email: business.email,
    areaServed: 'PK',
    availableLanguage: ['English', 'Urdu'],
  },
  ...(business.sameAs.length ? { sameAs: business.sameAs } : {}),
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: business.name,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
};
