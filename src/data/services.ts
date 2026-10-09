// Detailed content for the service pages (rendered by src/components/agency/ServiceDetails.astro).
// Edit copy here rather than inside the pages.

export interface ServiceDetail {
  overview: {
    heading: string;
    paragraphs: string[];
    benefits: string[];
  };
  features: { icon: string; title: string; description: string }[];
  process: { title: string; description: string }[];
  tools: string[];
  faqs: { question: string; answer: string }[];
  cta: { heading: string; description: string; button: string };
}

export const serviceDetails = {
  'web-development': {
    overview: {
      heading: 'Websites and web apps engineered for speed, scale and conversion',
      paragraphs: [
        'Your website is often the first conversation a customer has with your business. We design and build websites and web applications that load fast, rank well, and guide visitors toward the action that matters — a call, an enquiry, a purchase or a sign-up.',
        'From marketing sites and landing pages to customer portals, dashboards and SaaS products, our team covers the full stack: UX, frontend, backend, APIs, hosting and ongoing support. You get one accountable partner from the first wireframe to launch day and beyond.',
      ],
      benefits: [
        'Mobile-first, responsive builds that look sharp on every screen',
        'Performance and Core Web Vitals treated as a requirement, not an afterthought',
        'SEO-ready structure, metadata and analytics from day one',
        'Clean, documented code your team can own and extend',
      ],
    },
    features: [
      { icon: 'newWindow', title: 'Business & Marketing Websites', description: 'Fast, content-managed websites that tell your story clearly and turn visitors into enquiries.' },
      { icon: 'cog', title: 'Custom Web Applications', description: 'Portals, dashboards and internal tools built around your exact workflows and business rules.' },
      { icon: 'presentationChart', title: 'Landing Pages', description: 'Campaign pages designed for a single goal, with A/B-test-ready layouts and fast load times.' },
      { icon: 'portfolio', title: 'Ecommerce', description: 'Online stores with smooth checkout, payment gateway integration and inventory management.' },
      { icon: 'dataBase', title: 'Backend & APIs', description: 'Secure, scalable APIs, databases and integrations with the third-party tools you already use.' },
      { icon: 'arrowPath', title: 'Maintenance & Support', description: 'Updates, monitoring, backups and improvements so your site stays fast, secure and current.' },
    ],
    process: [
      { title: 'Discovery', description: 'We learn your goals, audience and competitors, then define scope, sitemap and success metrics.' },
      { title: 'UX & Design', description: 'Wireframes and high-fidelity designs you review and approve before a line of code is written.' },
      { title: 'Development', description: 'Agile sprints with regular demos, so you see real progress every week and can steer early.' },
      { title: 'Testing & Launch', description: 'Cross-browser, mobile, speed and security checks, then a smooth, monitored go-live.' },
      { title: 'Grow & Improve', description: 'Analytics, SEO and conversion improvements based on how real visitors use the site.' },
    ],
    tools: ['Astro', 'Next.js', 'React', 'Vue', 'Tailwind CSS', 'Node.js', 'Laravel', 'PHP', 'WordPress', 'Shopify', 'PostgreSQL', 'MySQL', 'AWS', 'Vercel'],
    faqs: [
      { question: 'How long does it take to build a website?', answer: 'A focused business website typically takes 3–6 weeks. Custom web applications depend on scope and are usually delivered in phases, with a first usable version in 6–12 weeks.' },
      { question: 'Will I be able to update the content myself?', answer: 'Yes. We set up an easy-to-use content management system where it makes sense and walk your team through it before handover.' },
      { question: 'Do you redesign existing websites?', answer: 'Absolutely. We audit your current site for performance, SEO and conversion issues, then redesign and rebuild while protecting the rankings you already have.' },
      { question: 'Is hosting and maintenance included?', answer: 'We can host and maintain your site on a monthly plan, or deploy to your own infrastructure — whichever suits your team.' },
    ],
    cta: {
      heading: 'Ready for a website that actually works for your business?',
      description: 'Tell us what you want to build. We will come back with a clear plan, timeline and estimate.',
      button: 'Start Your Project',
    },
  },

  'mobile-app': {
    overview: {
      heading: 'Mobile apps your customers will open again and again',
      paragraphs: [
        'We design and build iOS and Android apps that feel fast, intuitive and reliable — whether it is a customer-facing product, a booking or ordering app, or a field tool for your team.',
        'Our team handles everything from product strategy and UI/UX to development, backend APIs, App Store and Play Store submission, and post-launch updates. We build cross-platform where it saves you time and money, and native where performance demands it.',
      ],
      benefits: [
        'One codebase for iOS and Android where it makes sense',
        'Smooth, native-feeling interactions and offline support',
        'Secure authentication, payments and push notifications',
        'Store submission and release management handled for you',
      ],
    },
    features: [
      { icon: 'mobile', title: 'Cross-Platform Apps', description: 'Flutter and React Native apps that ship to iOS and Android from a single, maintainable codebase.' },
      { icon: 'cog', title: 'Native iOS & Android', description: 'Swift and Kotlin development for apps that need maximum performance or deep device features.' },
      { icon: 'lightbulb', title: 'App UI/UX Design', description: 'User flows, prototypes and polished interfaces designed for thumbs, small screens and real-world use.' },
      { icon: 'dataBase', title: 'Backend & APIs', description: 'Scalable backends, admin panels and APIs that power your app and keep data in sync.' },
      { icon: 'chatBubble', title: 'Push & In-App Messaging', description: 'Notifications and in-app messages that bring users back at the right moment.' },
      { icon: 'arrowPath', title: 'Support & Updates', description: 'OS compatibility updates, bug fixes, crash monitoring and new features after launch.' },
    ],
    process: [
      { title: 'Product Strategy', description: 'We define the core user journeys, must-have features and a realistic first release.' },
      { title: 'Design & Prototype', description: 'Clickable prototypes let you test the experience before development starts.' },
      { title: 'Build in Sprints', description: 'Regular test builds on your own phone so you can give feedback throughout.' },
      { title: 'QA & Store Launch', description: 'Device testing, performance tuning and App Store / Play Store submission.' },
      { title: 'Measure & Iterate', description: 'Analytics and user feedback guide the roadmap for the next releases.' },
    ],
    tools: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'Laravel', 'PostgreSQL', 'Stripe', 'OneSignal', 'App Store Connect', 'Google Play Console'],
    faqs: [
      { question: 'Should I build native or cross-platform?', answer: 'For most business apps, cross-platform (Flutter or React Native) delivers both platforms faster and at lower cost. We recommend native when you need heavy device integration or top-tier performance.' },
      { question: 'How long does it take to build an app?', answer: 'A focused first version (MVP) usually takes 8–14 weeks, depending on features, integrations and the backend required.' },
      { question: 'Do you publish the app to the stores?', answer: 'Yes. We prepare store listings, screenshots and builds, and manage the submission and review process for both stores.' },
      { question: 'Can you take over an existing app?', answer: 'Yes. We start with a code and architecture review, then stabilise, fix and extend the app from there.' },
    ],
    cta: {
      heading: 'Have an app idea? Let’s make it real.',
      description: 'Share your idea and we will help you shape the first release, timeline and budget.',
      button: 'Start Your Project',
    },
  },

  erp: {
    overview: {
      heading: 'One system to run your entire operation',
      paragraphs: [
        'When sales, inventory, production, finance and HR live in separate spreadsheets and tools, decisions slow down and mistakes creep in. We build custom ERP systems that bring every department onto one platform with a single source of truth.',
        'Unlike off-the-shelf software that forces you to change how you work, our ERPs are shaped around your processes — from purchase orders and stock movements to production planning, invoicing and reporting. We have built ERP solutions for manufacturing, food processing, trading and service businesses.',
      ],
      benefits: [
        'Real-time visibility across departments and locations',
        'Fewer manual entries, fewer errors, faster month-end',
        'Role-based access so everyone sees what they need',
        'Built to grow with new branches, products and users',
      ],
    },
    features: [
      { icon: 'portfolio', title: 'Inventory & Warehouse', description: 'Track stock levels, batches, transfers and reorder points across every warehouse in real time.' },
      { icon: 'cog', title: 'Production & Manufacturing', description: 'Plan production, manage bills of materials, track raw material consumption and output.' },
      { icon: 'documentChartBar', title: 'Finance & Accounting', description: 'Invoicing, payables, receivables, ledgers and financial reports tied directly to operations.' },
      { icon: 'presentationChart', title: 'Sales & Purchasing', description: 'Quotations, sales orders, purchase orders and supplier management in one connected flow.' },
      { icon: 'badge', title: 'HR & Payroll', description: 'Employee records, attendance, leave and payroll processing without separate spreadsheets.' },
      { icon: 'chartPie', title: 'Dashboards & Reports', description: 'Live dashboards and exportable reports for management, finance and operations.' },
    ],
    process: [
      { title: 'Process Mapping', description: 'We sit with each department to map how work and data actually flow today.' },
      { title: 'Solution Design', description: 'Modules, roles, workflows and reports are designed and agreed before development.' },
      { title: 'Phased Build', description: 'Core modules ship first so your team starts benefiting early, then we extend.' },
      { title: 'Data Migration & Training', description: 'We move your existing data across and train every team on their part of the system.' },
      { title: 'Support & Evolution', description: 'Ongoing support, new modules and integrations as your business grows.' },
    ],
    tools: ['Laravel', 'Node.js', 'React', 'Vue', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS', 'REST APIs', 'Power BI', 'Excel import/export'],
    faqs: [
      { question: 'Why custom ERP instead of off-the-shelf software?', answer: 'Off-the-shelf ERPs often require expensive customisation and force your team into someone else’s workflow. A custom ERP fits your processes exactly, and you only pay for the modules you need.' },
      { question: 'Can you migrate our existing data?', answer: 'Yes. We import data from spreadsheets, legacy systems and accounting software, and validate it with your team before go-live.' },
      { question: 'Can the ERP integrate with our other tools?', answer: 'Yes — accounting software, ecommerce stores, CRMs, payment gateways, biometric attendance devices and more can be connected via APIs.' },
      { question: 'How long does an ERP project take?', answer: 'Most projects launch core modules within 2–4 months, with further modules rolled out in phases afterwards.' },
    ],
    cta: {
      heading: 'Ready to replace spreadsheets with one connected system?',
      description: 'Walk us through your operations and we will map out an ERP that fits the way you work.',
      button: 'Start Your Project',
    },
  },

  crm: {
    overview: {
      heading: 'A CRM built around how your team actually sells',
      paragraphs: [
        'Leads slip through the cracks when they live in inboxes, WhatsApp chats and personal spreadsheets. We build custom CRM platforms that capture every lead, track every conversation and show exactly where each deal stands.',
        'Whether you run a sales team, a consultancy or a service business, your CRM is shaped around your pipeline stages, roles and reporting needs — not a generic template. We have built CRMs for education consultancies, real estate and service businesses that their teams use every day.',
      ],
      benefits: [
        'Every lead captured automatically from web, ads and WhatsApp',
        'Clear pipeline view so nothing is forgotten or duplicated',
        'Follow-up reminders and automations that save hours each week',
        'Reports that show what is working and who needs support',
      ],
    },
    features: [
      { icon: 'portfolio', title: 'Lead Management', description: 'Capture leads from forms, ads and chats, assign them automatically and track their source.' },
      { icon: 'presentationChart', title: 'Sales Pipeline', description: 'Custom pipeline stages with drag-and-drop deals, values and expected close dates.' },
      { icon: 'arrowPath', title: 'Workflow Automation', description: 'Automatic assignments, follow-up reminders, status updates and notifications.' },
      { icon: 'chatBubble', title: 'Communication History', description: 'Calls, emails, WhatsApp messages and notes logged against each contact.' },
      { icon: 'badge', title: 'Roles & Permissions', description: 'Admins, managers and agents each see the data and actions relevant to them.' },
      { icon: 'chartPie', title: 'Reports & Analytics', description: 'Conversion rates, team performance and revenue forecasts in live dashboards.' },
    ],
    process: [
      { title: 'Sales Process Audit', description: 'We map your lead sources, pipeline stages, team roles and current pain points.' },
      { title: 'CRM Design', description: 'Screens, fields, automations and reports are designed around your workflow.' },
      { title: 'Build & Integrate', description: 'We develop the CRM and connect it to your website, ads, email and WhatsApp.' },
      { title: 'Migration & Onboarding', description: 'Existing contacts are imported and every user is trained on day-to-day use.' },
      { title: 'Optimise', description: 'We refine automations and reports as your team uses the system.' },
    ],
    tools: ['Laravel', 'Node.js', 'React', 'Next.js', 'PostgreSQL', 'MySQL', 'WhatsApp Business API', 'Meta Lead Ads', 'Google Ads', 'Twilio', 'SendGrid', 'AWS'],
    faqs: [
      { question: 'Why not just use HubSpot or Salesforce?', answer: 'Those tools are great but can be costly per user and hard to adapt to niche workflows. A custom CRM has no per-seat fees and fits your process exactly.' },
      { question: 'Can leads from Facebook and Google ads flow in automatically?', answer: 'Yes. We connect your ad platforms, website forms and WhatsApp so new leads land in the CRM instantly and get assigned.' },
      { question: 'Can we import our existing contacts?', answer: 'Yes. We migrate contacts, deals and history from spreadsheets or your current CRM.' },
      { question: 'Will it work on mobile?', answer: 'Yes. Our CRMs are fully responsive so your team can update leads and deals from their phones.' },
    ],
    cta: {
      heading: 'Stop losing leads. Start closing more.',
      description: 'Tell us about your sales process and we will show you what your CRM could look like.',
      button: 'Start Your Project',
    },
  },

  'whatsapp-chatbot': {
    overview: {
      heading: 'Turn WhatsApp into your always-on sales and support channel',
      paragraphs: [
        'Your customers are already on WhatsApp. A smart chatbot lets you answer questions instantly, qualify leads, take orders and share updates — 24 hours a day, without growing your support team.',
        'We build WhatsApp chatbots on the official WhatsApp Business API, combining guided menus with AI that understands natural language. When a conversation needs a human, it is handed over seamlessly to your team with the full context.',
      ],
      benefits: [
        'Instant replies around the clock, even on holidays',
        'Leads qualified and captured automatically into your CRM',
        'Order updates, reminders and broadcasts at scale',
        'Smooth handover to human agents when needed',
      ],
    },
    features: [
      { icon: 'chatBubble', title: 'Customer Support Bot', description: 'Answer FAQs, share policies and resolve common queries instantly in your brand voice.' },
      { icon: 'brain', title: 'AI Conversations', description: 'AI that understands free-text questions in English and Urdu and responds naturally.' },
      { icon: 'portfolio', title: 'Lead Qualification', description: 'Ask the right questions, score leads and push qualified contacts straight to your CRM.' },
      { icon: 'cog', title: 'Orders & Bookings', description: 'Let customers browse products, place orders, book appointments and track status in chat.' },
      { icon: 'email', title: 'Broadcasts & Notifications', description: 'Approved template messages for order updates, reminders, offers and follow-ups.' },
      { icon: 'chartPie', title: 'Shared Inbox & Analytics', description: 'One inbox for your team plus reports on volumes, response times and conversions.' },
    ],
    process: [
      { title: 'Use-Case Planning', description: 'We identify the conversations that matter most — support, sales, orders or bookings.' },
      { title: 'Conversation Design', description: 'Flows, menus, AI prompts and handover rules are scripted in your brand voice.' },
      { title: 'API Setup & Integration', description: 'WhatsApp Business API verification plus connections to your CRM, store or database.' },
      { title: 'Testing & Launch', description: 'We test real scenarios end to end, then go live with monitoring in place.' },
      { title: 'Improve', description: 'Conversation analytics guide new answers, flows and automations.' },
    ],
    tools: ['WhatsApp Business API', 'Meta Cloud API', 'OpenAI', 'Claude', 'Node.js', 'Python', 'Twilio', 'Webhooks', 'Shopify', 'Custom CRM', 'Google Sheets', 'PostgreSQL'],
    faqs: [
      { question: 'Do I need the WhatsApp Business API?', answer: 'For automated chatbots at scale, yes. We guide you through Meta business verification and set up the official API on your number.' },
      { question: 'Can the bot understand Urdu or Roman Urdu?', answer: 'Yes. With AI-powered understanding the bot can handle English, Urdu and Roman Urdu messages.' },
      { question: 'What happens when the bot cannot answer?', answer: 'The conversation is handed to a human agent in a shared inbox, with the full chat history so the customer never repeats themselves.' },
      { question: 'Can it connect to my CRM or online store?', answer: 'Yes. We integrate with custom CRMs, Shopify, WooCommerce, Google Sheets and most systems with an API.' },
    ],
    cta: {
      heading: 'Ready to automate your WhatsApp conversations?',
      description: 'Tell us what your customers ask most and we will design a bot that handles it.',
      button: 'Start Your Project',
    },
  },

  seo: {
    overview: {
      heading: 'Get found by customers who are already searching for you',
      paragraphs: [
        'Search is where buying intent lives. When your business shows up for the right keywords, you earn a steady stream of qualified visitors without paying for every click.',
        'Our SEO service combines technical fixes, content strategy and authority building into one plan. We focus on rankings that drive enquiries and sales — not vanity metrics — and report transparently on what we did and what changed.',
      ],
      benefits: [
        'Keyword strategy based on real search demand and intent',
        'Technical issues that hold back rankings fixed properly',
        'Content that answers questions and converts readers',
        'Clear monthly reporting on rankings, traffic and leads',
      ],
    },
    features: [
      { icon: 'documentMagnifyingGlass', title: 'SEO Audit', description: 'A complete review of technical health, content, backlinks and competitors with a prioritised action plan.' },
      { icon: 'cog', title: 'Technical SEO', description: 'Site speed, Core Web Vitals, crawlability, indexing, structured data and mobile usability.' },
      { icon: 'articles', title: 'On-Page Optimisation', description: 'Titles, meta descriptions, headings, internal links and content tuned to target keywords.' },
      { icon: 'blankDocument', title: 'Content Strategy', description: 'Blog posts, service pages and guides planned around keyword clusters and buyer questions.' },
      { icon: 'mapPin', title: 'Local SEO', description: 'Google Business Profile optimisation, local citations and reviews to win the map pack.' },
      { icon: 'world', title: 'Link Building', description: 'Earning relevant, high-quality backlinks that build your site’s authority safely.' },
    ],
    process: [
      { title: 'Audit & Research', description: 'Technical audit, competitor analysis and keyword research to find the biggest opportunities.' },
      { title: 'Strategy', description: 'A prioritised roadmap of fixes, pages and content mapped to business goals.' },
      { title: 'Fix & Optimise', description: 'Technical improvements and on-page optimisation across your key pages.' },
      { title: 'Create & Promote', description: 'New content published and promoted to earn links and visibility.' },
      { title: 'Measure & Report', description: 'Monthly reports on rankings, organic traffic and conversions, with next steps.' },
    ],
    tools: ['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'Semrush', 'Screaming Frog', 'PageSpeed Insights', 'Google Business Profile', 'Schema.org', 'Looker Studio'],
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Technical fixes can show impact within weeks, but meaningful ranking and traffic growth typically builds over 3–6 months, depending on competition.' },
      { question: 'Do you guarantee first-page rankings?', answer: 'No honest agency can guarantee rankings, since Google controls them. We guarantee a clear strategy, transparent work and regular reporting on progress.' },
      { question: 'Do you write the content too?', answer: 'Yes. Our team plans and writes SEO content, or we can work alongside your in-house writers.' },
      { question: 'Can you help with local search in my city?', answer: 'Yes. Local SEO and Google Business Profile optimisation help you appear in “near me” and map results.' },
    ],
    cta: {
      heading: 'Want more customers finding you on Google?',
      description: 'Get a free SEO review of your website and a clear list of quick wins.',
      button: 'Start Your Campaign',
    },
  },

  'digital-marketing': {
    overview: {
      heading: 'Full-funnel marketing that turns attention into revenue',
      paragraphs: [
        'Good marketing is not about being everywhere — it is about being in the right place with the right message. We plan and run digital marketing that connects search, social, content and paid media into one strategy built around your growth targets.',
        'From brand awareness to lead generation and retargeting, every channel is measured. We track what drives enquiries and sales, cut what does not, and reinvest in what works.',
      ],
      benefits: [
        'One joined-up strategy across search, social and paid',
        'Campaigns measured on leads and revenue, not just reach',
        'Creative and copy produced in-house for faster turnaround',
        'Transparent dashboards so you always know your ROI',
      ],
    },
    features: [
      { icon: 'documentMagnifyingGlass', title: 'Search Engine Optimisation', description: 'Organic visibility for the keywords your customers search, built to compound over time.' },
      { icon: 'cursorRays', title: 'Paid Advertising', description: 'Google, Meta, TikTok and LinkedIn campaigns targeted at high-intent audiences.' },
      { icon: 'chatBubble', title: 'Social Media Management', description: 'Content calendars, posting and community management that keep your brand active.' },
      { icon: 'articles', title: 'Content Marketing', description: 'Blogs, videos and guides that educate buyers and support SEO and sales.' },
      { icon: 'email', title: 'Email & WhatsApp Marketing', description: 'Nurture sequences, newsletters and broadcasts that bring customers back.' },
      { icon: 'chartPie', title: 'Analytics & Tracking', description: 'Conversion tracking, attribution and dashboards so every rupee is accounted for.' },
    ],
    process: [
      { title: 'Audit & Goals', description: 'We review your current channels, competitors and numbers, then agree clear targets.' },
      { title: 'Strategy & Plan', description: 'Channel mix, audiences, messaging and budget allocation mapped in a 90-day plan.' },
      { title: 'Create & Launch', description: 'Creatives, copy, landing pages and tracking are produced and campaigns go live.' },
      { title: 'Optimise', description: 'Weekly testing of audiences, creatives and bids to lower costs and raise conversions.' },
      { title: 'Report & Scale', description: 'Monthly reporting on results, then budget shifts toward the best performers.' },
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'TikTok Ads', 'LinkedIn Ads', 'Google Analytics 4', 'Google Tag Manager', 'Meta Pixel & CAPI', 'Semrush', 'Canva', 'Mailchimp', 'Looker Studio'],
    faqs: [
      { question: 'Which channels should my business use?', answer: 'It depends on where your customers are and how they buy. We recommend a channel mix after reviewing your audience, competitors and goals.' },
      { question: 'What budget do I need to start?', answer: 'We work with a range of budgets. During the strategy phase we recommend a realistic ad spend based on your goals and market.' },
      { question: 'How do you report results?', answer: 'You get a live dashboard plus a monthly report covering spend, leads, cost per lead, sales and our recommendations.' },
      { question: 'Do you create the ad creatives?', answer: 'Yes. Our creative team produces static ads, videos, reels and copy as part of the service.' },
    ],
    cta: {
      heading: 'Ready to grow with marketing you can measure?',
      description: 'Book a free strategy call and we will show you where your next customers are coming from.',
      button: 'Start Your Campaign',
    },
  },

  'performance-marketing': {
    overview: {
      heading: 'Paid campaigns optimised for leads, sales and ROAS',
      paragraphs: [
        'Performance marketing means paying for results you can measure. We plan, launch and manage paid campaigns across Google, Meta, TikTok and LinkedIn with one goal: more customers at a lower cost.',
        'Every campaign starts with accurate tracking, so decisions are based on real conversions — not clicks. We test creatives, audiences and offers continuously, cut wasted spend quickly and scale the winners.',
      ],
      benefits: [
        'Conversion tracking set up properly before spend starts',
        'Continuous creative and audience testing',
        'Budgets shifted weekly toward the best performers',
        'Clear reporting on cost per lead, CPA and ROAS',
      ],
    },
    features: [
      { icon: 'documentMagnifyingGlass', title: 'Google Ads', description: 'Search, Performance Max, Display, YouTube and Shopping campaigns that capture high-intent demand.' },
      { icon: 'thumbUp', title: 'Meta Ads', description: 'Facebook and Instagram campaigns for lead generation, sales and retargeting.' },
      { icon: 'mobile', title: 'TikTok & Short-Form Video', description: 'Native-feeling video ads that reach younger, highly engaged audiences.' },
      { icon: 'portfolio', title: 'LinkedIn Ads', description: 'B2B campaigns targeting decision-makers by role, industry and company size.' },
      { icon: 'presentationChart', title: 'Landing Page Optimisation', description: 'High-converting landing pages and A/B tests that lower your cost per result.' },
      { icon: 'chartPie', title: 'Tracking & Attribution', description: 'GA4, Tag Manager, Meta Pixel and Conversions API set up for reliable data.' },
    ],
    process: [
      { title: 'Account & Tracking Audit', description: 'We review past campaigns and fix tracking so every conversion is measured.' },
      { title: 'Strategy & Creative', description: 'Offers, audiences and ad creatives planned around your funnel and margins.' },
      { title: 'Launch & Test', description: 'Structured campaigns go live with multiple creatives and audiences to test.' },
      { title: 'Optimise Weekly', description: 'We pause losers, refresh creatives and adjust bids and budgets every week.' },
      { title: 'Scale', description: 'Proven campaigns are scaled carefully to grow volume while protecting ROAS.' },
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'TikTok Ads Manager', 'LinkedIn Campaign Manager', 'Google Analytics 4', 'Google Tag Manager', 'Meta Conversions API', 'Looker Studio', 'Hotjar'],
    faqs: [
      { question: 'How quickly will I see results?', answer: 'Campaigns start generating data immediately. Most accounts stabilise within 2–4 weeks as we gather conversion data and optimise.' },
      { question: 'Is ad spend included in your fee?', answer: 'No. Ad spend is paid directly to the platforms from your account; our management fee is separate and agreed upfront.' },
      { question: 'Do I keep ownership of my ad accounts?', answer: 'Yes. Campaigns run in your own ad accounts, so you keep full ownership of your data and history.' },
      { question: 'What results can I expect?', answer: 'Results depend on your offer, market and budget. We set realistic targets after the audit and report against them every month.' },
    ],
    cta: {
      heading: 'Ready to make every ad rupee count?',
      description: 'Get a free audit of your ad accounts and a plan to lower your cost per customer.',
      button: 'Launch Your Campaign',
    },
  },

  creative: {
    overview: {
      heading: 'Design that makes your brand impossible to ignore',
      paragraphs: [
        'People decide in seconds whether a brand feels trustworthy. We create brand identities, interfaces and content that look professional, feel consistent and make your business memorable.',
        'Our designers work hand in hand with our developers and marketers, so every logo, screen and ad is created with how it will actually be used in mind — on websites, apps, social feeds and print.',
      ],
      benefits: [
        'A consistent look and voice across every touchpoint',
        'Interfaces designed for usability and conversion',
        'Scroll-stopping creatives for social and ads',
        'Ready-to-use brand guidelines and source files',
      ],
    },
    features: [
      { icon: 'lightbulb', title: 'Brand Identity', description: 'Logos, colour palettes, typography and visual language that capture who you are.' },
      { icon: 'blankDocument', title: 'Brand Guidelines', description: 'A clear brand book so your team and partners use your identity consistently.' },
      { icon: 'newWindow', title: 'UI/UX Design', description: 'Wireframes, prototypes and polished interfaces for websites, apps and dashboards.' },
      { icon: 'thumbUp', title: 'Social Media Creatives', description: 'Post, story and carousel designs that stop the scroll and stay on brand.' },
      { icon: 'presentationChart', title: 'Motion & Video', description: 'Reels, explainer videos and motion graphics that tell your story quickly.' },
      { icon: 'articles', title: 'Marketing Collateral', description: 'Brochures, presentations, packaging and print materials that sell.' },
    ],
    process: [
      { title: 'Discovery', description: 'We learn your business, audience, competitors and the impression you want to make.' },
      { title: 'Concepts', description: 'Moodboards and initial concepts explore different creative directions.' },
      { title: 'Refine', description: 'We develop your chosen direction with rounds of feedback until it is right.' },
      { title: 'Deliver', description: 'Final files in every format you need, plus guidelines for consistent use.' },
      { title: 'Roll Out', description: 'We apply the new look across your website, social channels and marketing.' },
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects', 'Adobe Premiere Pro', 'Adobe InDesign', 'Blender', 'Canva'],
    faqs: [
      { question: 'What do I receive at the end of a branding project?', answer: 'Logo files in all formats, colour and typography specifications, brand guidelines and templates for common uses like social posts and stationery.' },
      { question: 'How many revisions are included?', answer: 'Each phase includes structured feedback rounds. We agree the exact number upfront so the project stays on schedule.' },
      { question: 'Can you refresh our existing brand instead of starting over?', answer: 'Yes. A brand refresh modernises your identity while keeping the recognition you have already built.' },
      { question: 'Do you offer monthly design support?', answer: 'Yes. Many clients retain us monthly for social creatives, ad designs and ongoing UI work.' },
    ],
    cta: {
      heading: 'Ready to look as good as you are?',
      description: 'Tell us about your brand and we will propose a creative direction that fits.',
      button: 'Start Your Project',
    },
  },
} satisfies Record<string, ServiceDetail>;
