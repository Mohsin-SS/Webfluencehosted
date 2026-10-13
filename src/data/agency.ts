// Content for the agency-style site (home page, header and "Let's Connect" footer).
// Edit copy here rather than inside the components.

export const contact = {
  email: 'momin@webfluence.tech',
  phone: '+92 321 7555516',
  city: 'Lahore',
  // Used by the floating "Let's Chat" button.
  whatsapp: 'https://wa.me/923217555516',
  address: 'Phase 6, DHA, Lahore, Pakistan',
};

// Leave empty to hide the social column; add { label, href } entries when ready.
export const socials: { label: string; href: string }[] = [];

export const hero = {
  lead: 'Premier',
  full: 'Full-Service',
  // Rendered as "<word> Agency" on desktop; mobile shows "Agency" on its own line.
  ticker: ['Digital', 'Software', 'Web', 'App', 'Growth', 'Creative'],
  // Drop a video at public/videos/showreel.mp4 and the hero will play it
  // instead of the animated fallback panel.
  showreel: '/videos/showreel.mp4',
};

// The Services dropdown is inserted after the first two links.
export const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Work', href: '/work' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/contact' },
];

export const serviceMenu = [
  {
    title: 'Development',
    links: [
      { label: 'Web Development', href: '/web-development', icon: 'newWindow' },
      { label: 'Mobile Apps', href: '/mobile-app', icon: 'mobile' },
      { label: 'ERP Systems', href: '/erp', icon: 'dataBase' },
      { label: 'CRM Platforms', href: '/crm', icon: 'portfolio' },
      { label: 'WhatsApp Chatbots', href: '/whatsapp-chatbot', icon: 'chatBubble' },
    ],
  },
  {
    title: 'Growth',
    links: [
      { label: 'SEO', href: '/seo', icon: 'documentMagnifyingGlass' },
      { label: 'Digital Marketing', href: '/digital-marketing', icon: 'cursorRays' },
    ],
  },
  {
    title: 'Design',
    links: [{ label: 'Creative & Branding', href: '/creative', icon: 'lightbulb' }],
  },
];

export const clients = [
  { name: 'Education Links', logo: '/logos/education-links.png' },
  { name: 'Fastaxi', logo: '/logos/fastaxi.png' },
  { name: 'Property Linkers', logo: '/logos/property-linkers.png' },
  { name: 'Times Consultant', logo: '/logos/times-consultant.png' },
  { name: 'Ghausia Floor Mills', logo: '/logos/ghausia-floor-mills.png' },
  { name: 'Zamindar Premium', logo: '/logos/zamindar-premium.png' },
  { name: 'Data Flour Mills', logo: '/logos/image copy 3.png' },
  { name: 'Data Foods', logo: '/logos/data-foods.png' },
  { name: 'Slap Media', logo: '/logos/slap-media.png' },
  { name: 'The Carology', logo: '/logos/image copy 2.png' },
  { name: 'Pitstop 63', logo: '/logos/image copy 6.png' },
  { name: 'GariBaich.com', logo: '/logos/image copy 7.png' },
  { name: 'Adoro', logo: '/logos/image copy 8.png' },
];

export type WorkArt = 'blueprint' | 'chat' | 'bars' | 'cta';

export interface WorkItem {
  title: string;
  tags: string[];
  href: string;
  size: 'lg' | 'sm' | 'full';
  image?: string;
  // Cover image laid over the card; on hover it shrinks away as a circle to reveal the card.
  // Without one, the card gets a tinted greyscale veil instead.
  cover?: string;
  // Optional hover video (mp4). Loaded lazily the first time it plays.
  video?: string;
  // Illustrated panel used when there is no image yet.
  art?: WorkArt;
}

export const work: WorkItem[] = [
  {
    title: 'Construction Price Estimator AI',
    tags: ['AI', 'Web App'],
    href: '/products/construction-price-estimator',
    size: 'lg',
    cover: '/work/covers/pink_shapes.jpg',
    image: '/homepageimages/estimator_mockup_real_screenshot.png',
  },
  {
    title: 'WhatsApp Chatbot',
    tags: ['Automation', 'AI'],
    href: '/whatsapp-chatbot',
    size: 'sm',
    cover: '/work/covers/neon_rock.jpg',
    image: '/homepageimages/whatsapp_bot_mobile_mockup_1.png',
  },
  {
    title: 'EduConsult — Education Consultancy CRM',
    tags: ['CRM', 'Web App', 'UI/UX'],
    href: '/products/education-crm',
    size: 'full',
    cover: '/homepageimages/Glowing Blue Glass Waves.png',
    image: '/homepageimages/educonsult_mockup_real_screenshot.png',
    video: '/homepageimages/educonsult_cover_loop.mp4',
  },
  {
    title: 'ERP Suite',
    tags: ['ERP', 'Dashboards'],
    href: '/erp',
    size: 'sm',
    cover: '/homepageimages/erp_cover.png',
    image: '/homepageimages/erp_mockup_real_screenshot.png',
  },
  {
    title: 'Your project, next.',
    tags: ["Let's talk"],
    href: '#contact',
    size: 'lg',
    art: 'cta',
  },
];

// Case studies shown on /work. Screenshots live in src/assets/images/clients-work and are
// mapped to their imports by `image` key inside src/pages/work.astro.
export interface Project {
  slug: string;
  client: string;
  title: string;
  summary: string;
  url: string;
  image: 'edu-link-web' | 'crm-edu-link-web' | 'latch-shopify' | 'zelvior-shopify';
  tags: string[];
  year: string;
  services: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: 'education-links-website',
    client: 'Education Links',
    title: 'A study-abroad website built to turn visitors into applicants',
    summary:
      'Education Links is an ICEF-certified study-abroad consultancy. We designed and built their public website — a bold, editorial home for their counselling services that guides students from first visit to a submitted application.',
    url: 'https://educationlinkspk.com',
    image: 'edu-link-web',
    tags: ['Website', 'UI/UX', 'Development'],
    year: '2025',
    services: ['UI/UX Design', 'Web Development', 'Responsive Build', 'SEO Foundations'],
    highlights: [
      'Universities and study-destination pages so students can explore options by country',
      'Clear “Apply Now” and counselling calls to action on every page',
      'Team, services and gallery sections that build trust before the first call',
      'Fast, mobile-first build that looks sharp on every screen',
    ],
  },
  {
    slug: 'education-links-crm',
    client: 'Education Links',
    title: 'A custom CRM that runs the consultancy behind the scenes',
    summary:
      'Alongside the website, we built the Education Links CRM portal — a secure, role-based system where counsellors manage student leads and applications in one place instead of scattered spreadsheets and chats.',
    url: 'https://crm.educationlinkspk.com',
    image: 'crm-edu-link-web',
    tags: ['CRM', 'Web App', 'Dashboard'],
    year: '2025',
    services: ['Product Design', 'Full-Stack Development', 'Authentication & Roles', 'Cloud Deployment'],
    highlights: [
      'Secure sign-in portal with separate access for admins and counsellors',
      'Central record for every student lead, from enquiry to enrolment',
      'Application tracking so nothing slips between counsellors',
      'Clean, focused interface the whole team can adopt quickly',
    ],
  },
  {
    slug: 'latch-shopify',
    client: 'Latch',
    title: 'Custom Shopify Theme Development',
    summary: 'A high-performance custom Shopify storefront built to elevate the brand experience and maximize conversions.',
    url: 'https://latch.com',
    image: 'latch-shopify',
    tags: ['E-commerce', 'Shopify', 'Development'],
    year: '2025',
    services: ['Shopify Theme Development', 'UI/UX Design', 'E-commerce Optimization'],
    highlights: [
      'Custom theme architecture for fast loading speeds',
      'Optimized checkout flow to increase conversion rates',
      'Seamless integration with third-party apps',
      'Mobile-first responsive design'
    ],
  },
  {
    slug: 'zelvior-shopify',
    client: 'Zelvior',
    title: 'Shopify store design & SEO that drives organic growth',
    summary:
      'Zelvior is a Shopify-based e-commerce brand. We designed a visually striking storefront and implemented a comprehensive SEO strategy — from technical foundations to on-page optimisation — to boost organic visibility and convert browsers into buyers.',
    url: 'https://www.zelviorofficial.pk',
    image: 'zelvior-shopify',
    tags: ['Shopify', 'SEO', 'Design'],
    year: '2025',
    services: ['Shopify Store Design', 'SEO Strategy & Execution', 'UI/UX Design', 'Conversion Optimisation'],
    highlights: [
      'Fully custom Shopify theme tailored to the brand identity',
      'On-page and technical SEO audit with full implementation',
      'Optimised product pages for higher conversion rates',
      'Mobile-first, fast-loading design for improved Core Web Vitals',
    ],
  },
];

export const services = {
  headline: 'We engineer software and growth that makes brands impossible to ignore',
  intro:
    'Big ideas. Clean code. Measurable growth. You bring the vision — we build the machine behind it.',
  groups: [
    {
      title: 'Software',
      href: '/erp',
      items: [
        { label: 'ERP Systems', href: '/erp' },
        { label: 'CRM Platforms', href: '/crm' },
        { label: 'WhatsApp Chatbots', href: '/whatsapp-chatbot' },
        { label: 'AI Tools', href: '/products/construction-price-estimator' },
        { label: 'Cloud & APIs', href: '/web-development' },
      ],
    },
    {
      title: 'Websites',
      href: '/web-development',
      items: [
        { label: 'Custom Web Apps', href: '/web-development' },
        { label: 'Frontend Engineering', href: '/web-development' },
        { label: 'Backend Architecture', href: '/web-development' },
        { label: 'Ecommerce', href: '/web-development' },
        { label: 'Landing Pages', href: '/web-development' },
      ],
    },
    {
      title: 'Mobile Apps',
      href: '/mobile-app',
      items: [
        { label: 'iOS Apps', href: '/mobile-app' },
        { label: 'Android Apps', href: '/mobile-app' },
        { label: 'Cross-Platform', href: '/mobile-app' },
        { label: 'App UI/UX', href: '/mobile-app' },
      ],
    },
    {
      title: 'Marketing',
      href: '/digital-marketing',
      items: [
        { label: 'SEO', href: '/seo' },
        { label: 'Performance Marketing', href: '/digital-marketing' },
        { label: 'Content Marketing', href: '/digital-marketing' },
        { label: 'Analytics & Tracking', href: '/digital-marketing' },
      ],
    },
    {
      title: 'Creative',
      href: '/creative',
      items: [
        { label: 'Brand Identity', href: '/creative' },
        { label: 'UI/UX Design', href: '/creative' },
        { label: 'Content Creation', href: '/creative' },
        { label: 'Social Creatives', href: '/creative' },
      ],
    },
  ],
};

export const about = {
  eyebrow: '(About us)',
  lead: 'The minds behind your next big launch. We’re not just a software house — we’re the people who get genuinely excited about your idea, then ship it.',
  paragraphs: [
    'Webfluence is a software engineering and digital growth agency based in Lahore. We partner with ambitious startups and established enterprises to build custom software, mobile apps and high-performance websites — then help them grow with data-driven marketing.',
    'We don’t just write code; we solve business problems. From ERP and CRM systems that untangle operations, to websites that convert and campaigns that pay for themselves, everything we ship is built around one question: will it move your numbers?',
  ],
  stats: [
    { value: 250, suffix: '+', label: 'digital products launched.', note: 'Websites, apps and platforms — shipped, not shelved.', tone: 'dark', span: 5 },
    { value: 10, suffix: 'M+', label: 'lines of code shipped.', note: 'Tested, reviewed and running in production.', tone: 'light', span: 4 },
    { value: 45, suffix: '+', label: 'enterprise clients worldwide.', note: 'Teams that trust us with the systems they run on.', tone: 'light', span: 7 },
    { value: 10, suffix: '+', label: 'years of engineering excellence.', note: 'Long enough to know what actually works.', tone: 'accent', span: 5 },
  ] as const,
};

// PLACEHOLDER quotes — replace with real, attributable client testimonials before launch.
export const testimonials = [
  {
    quote:
      'Webfluence took a process that lived in spreadsheets and turned it into a CRM our whole team actually uses. Onboarding took days, not months.',
    name: 'Client name',
    role: 'Role, Company',
  },
  {
    quote:
      'They asked better questions about our business than most consultants we have hired. The product they shipped reflects that.',
    name: 'Client name',
    role: 'Role, Company',
  },
  {
    quote:
      'Our new site finally converts. Within weeks, inbound enquiries were coming from search instead of just referrals.',
    name: 'Client name',
    role: 'Role, Company',
  },
  {
    quote:
      'Fast, transparent and genuinely invested in the outcome. It felt like working with an in-house team.',
    name: 'Client name',
    role: 'Role, Company',
  },
];

export const connect = {
  heading: "Let's Connect",
  interests: ['Website', 'Web App', 'Mobile App', 'ERP / CRM', 'SEO', 'Performance Marketing', 'Branding', 'Other'],
  budgets: ['Under $2,000', '$2,000 – $5,000', '$5,000 – $10,000', '$10,000+'],
  sources: ['Google', 'Facebook', 'Instagram', 'LinkedIn', 'Referred by someone', 'Other'],
  // Draggable pills in the footer physics playground.
  pills: [
    { label: 'ERP', tone: 'accent' },
    { label: 'Web Apps', tone: 'white' },
    { label: 'SEO', tone: 'lime' },
    { label: 'Mobile Apps', tone: 'lilac' },
    { label: 'CRM', tone: 'orange' },
    { label: 'Branding', tone: 'white' },
    { label: 'AI', tone: 'accent' },
    { label: 'Chatbots', tone: 'lime' },
    { label: 'UI/UX', tone: 'orange' },
    { label: 'Ads', tone: 'lilac' },
  ],
};
