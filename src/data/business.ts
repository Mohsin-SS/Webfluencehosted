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
    'Webfluence is a performance marketing and software development company in Lahore, Pakistan. It runs Google and Meta ad campaigns, creates social media and video content, and builds ERP, CRM, mobile and web applications for businesses across Pakistan and internationally.',
  // Priority order (see src/data/site.ts).
  services: [
    'Performance Marketing',
    'Creative & Media Content',
    'ERP Development',
    'CRM Development',
    'Mobile App Development',
    'WhatsApp Chatbot Development',
    'Web Development',
    'SEO Services',
  ],
  // Add LinkedIn, Facebook, Instagram, Clutch etc. profile URLs here once
  // they exist; they are output as `sameAs` in the schema.
  sameAs: [] as string[],
} as const;

/**
 * Google tools. Paste the IDs here; anything left empty is simply not output.
 * - analyticsId: GA4 Measurement ID, "G-XXXXXXXXXX"
 *   (analytics.google.com > Admin > Data streams > Web)
 * - searchConsoleVerification: only the `content` value of the
 *   <meta name="google-site-verification"> tag Search Console gives you.
 *   Not needed if you verify with a DNS record at GoDaddy instead.
 * These values are public by design (every visitor's browser sees them).
 */
export const google = {
  analyticsId: 'G-3JN1CS0DJP',
  searchConsoleVerification: '',
};

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
