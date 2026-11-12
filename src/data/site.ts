// Shared site content: the navbar, footer, homepage, llms.txt and FAQs all
// read from here, so a service, client or case study is added in one place.
//
// ORDER IS DELIBERATE: keep it when adding items.
// - Services: 1. Performance marketing  2. Creative & media content
//   3. Software development (ERP, CRM, mobile, WhatsApp)  4. Web development
//   5. the rest (SEO). Marketing is shown before software everywhere.
// - Clients: 1. Times Consultant  2. Adoro (ECS)  3. Education Links
//   4. Ghausia Flour Mills  5. Slap Media, then the rest.

export interface ServiceLink {
  title: string;
  href: string;
  icon: string;
  description: string;
}

export const softwareServices: ServiceLink[] = [
  {
    title: 'ERP systems',
    href: '/erp',
    icon: 'dataBase',
    description: 'Inventory, finance, HR and supply chain in one system.',
  },
  {
    title: 'CRM platforms',
    href: '/crm',
    icon: 'portfolio',
    description: 'Track leads, automate follow-ups, see every customer.',
  },
  {
    title: 'Mobile apps',
    href: '/mobile-app',
    icon: 'mobile',
    description: 'Cross-platform iOS and Android apps, built and maintained.',
  },
  {
    title: 'WhatsApp chatbots',
    href: '/whatsapp-chatbot',
    icon: 'chatBubble',
    description: 'AI assistants that answer customers around the clock.',
  },
  {
    title: 'Web development',
    href: '/web-development',
    icon: 'newWindow',
    description: 'Fast, secure websites and custom web applications.',
  },
];

export const marketingServices: ServiceLink[] = [
  {
    title: 'Performance marketing',
    href: '/digital-marketing',
    icon: 'cursorRays',
    description: 'Google and Meta campaigns measured on real sales.',
  },
  {
    title: 'Creative & media content',
    href: '/creative',
    icon: 'lightbulb',
    description: 'Social media content, video, design and branding.',
  },
  {
    title: 'SEO',
    href: '/seo',
    icon: 'documentMagnifyingGlass',
    description: 'Technical SEO, content and rankings that bring leads.',
  },
];

export const products: ServiceLink[] = [
  {
    title: 'Construction Price Estimator AI',
    href: '/products/construction-price-estimator',
    icon: 'chartPie',
    description: 'AI-driven cost estimates and budgets for construction.',
  },
  {
    title: 'Education Consultancy CRM',
    href: '/products/education-crm',
    icon: 'presentationChart',
    description: 'Leads, admissions and student management in one portal.',
  },
];

export interface CaseStudy {
  client: string;
  tag: string;
  title: string;
  summary: string;
  href: string;
  logo: string;
  image: string;
  imageAlt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    client: 'Times Consultant',
    tag: 'CRM & automation',
    title: 'AI CRM and WhatsApp automation for 500+ overseas students',
    summary: 'AI-powered CRM + WhatsApp automation for 500+ overseas students',
    href: '/work/times-consultant',
    logo: '/logos/times-consultant.png',
    image: '/case-studies/times-consultant/crm-dashboard.jpg',
    imageAlt: 'EduConsult CRM dashboard built for Times Consultant',
  },
  {
    client: 'Adoro (ECS)',
    tag: 'Performance marketing',
    title: 'Performance marketing that scaled monthly sales by 57%',
    summary: 'Performance marketing scaling monthly sales by 57%',
    href: '/work/adoro',
    logo: '/logos/adoro.png',
    image: '/case-studies/adoro/home.webp',
    imageAlt: 'Adoro online store homepage',
  },
  {
    client: 'The Carology',
    tag: 'AI product',
    title: 'An AI car customiser that previews 715 parts on your own car',
    summary: 'AI Car Customiser previewing 715 parts on customer vehicles',
    href: '/work/carology',
    logo: '/logos/carology.png',
    image: '/case-studies/carology/studio.webp',
    imageAlt: 'The Carology AI modification studio',
  },
  {
    client: 'Latch',
    tag: 'Ecommerce',
    title: 'Shopify storefront, SEO and paid media for a loungewear brand',
    summary:
      'Shopify storefront, SEO & paid media for innerwear & loungewear brand',
    href: '/work/latch',
    logo: '/logos/latch.png',
    image: '/case-studies/latch/latch-home.jpg',
    imageAlt: 'Latch Shopify storefront homepage',
  },
  {
    client: 'Zelvior Official',
    tag: 'Ecommerce',
    title: 'Shopify store, checkout and payments for luxury womenswear',
    summary: 'Shopify ecommerce, checkout & payments for luxury womenswear',
    href: '/work/zelvior',
    logo: '/logos/zelvior.png',
    image: '/case-studies/zelvior/zel-hero.jpg',
    imageAlt: 'Zelvior Official storefront',
  },
];

export interface Client {
  name: string;
  logo: string;
}

/** Every client brand, in display order (see the ORDER note at the top). */
export const clients: Client[] = [
  { name: 'Times Consultant', logo: '/logos/times-consultant.png' },
  { name: 'Adoro (ECS)', logo: '/logos/adoro.png' },
  { name: 'Education Links', logo: '/logos/education-links.png' },
  { name: 'Ghausia Flour Mills', logo: '/logos/ghausia-floor-mills.png' },
  { name: 'Slap Media', logo: '/logos/slap-media.png' },
  // The rest
  { name: 'The Carology', logo: '/logos/carology.png' },
  { name: 'Latch', logo: '/logos/latch.png' },
  { name: 'Zelvior Official', logo: '/logos/zelvior.png' },
  { name: 'Fastaxi', logo: '/logos/fastaxi.png' },
  { name: 'Property Linkers', logo: '/logos/property-linkers.png' },
  { name: 'Zamindar Premium', logo: '/logos/zamindar-premium.png' },
  { name: 'Data Foods', logo: '/logos/data-foods.png' },
  { name: 'Data Flour Mills', logo: '/logos/data-flour-mills.png' },
  { name: 'Pitstop 63', logo: '/logos/pitstop.png' },
  { name: 'Gari Baich', logo: '/logos/image copy 7.png' },
  { name: 'Modus', logo: '/logos/modus-1.avif' },
  { name: 'Maktron Consultant', logo: '/logos/maktron.png' },
  { name: 'AHM Developers', logo: '/logos/ahm-developers.png' },
];

export const supportLinks: ServiceLink[] = [
  {
    title: 'Articles',
    href: '/support/articles',
    icon: 'articles',
    description: 'Learn from our collection of insightful articles.',
  },
  {
    title: 'Whitepapers',
    href: '/support/whitepapers',
    icon: 'blankDocument',
    description: 'Detailed reports on successful digital transformations.',
  },
  {
    title: 'Reference',
    href: '/support/reference',
    icon: 'documentMagnifyingGlass',
    description: 'Technical documentation and reference materials.',
  },
  {
    title: 'Knowledge base',
    href: '/support/knowledge-base',
    icon: 'info',
    description: 'Search for answers to your questions.',
  },
];

export const companyLinks = [
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];
