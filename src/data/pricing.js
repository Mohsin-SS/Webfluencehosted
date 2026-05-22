export const PRICING_SERVICES = [
  {
    id: 'web',
    label: 'Web Development',
    tagline: 'Websites, web apps, dashboards',
    sub: 'From landing sites to full web apps — fixed-fee, deployed, with admin surfaces and CMS handover.',
    packages: [
      {
        n: 'Landing site', suffix: '/ project',
        usd: 360, pkr: 100000, lead: '1–5 pages, mobile-optimised',
        feats: ['Up to 5 pages', 'Mobile + tablet responsive', 'Contact form + analytics', '1 round of revisions', 'Domain + hosting setup', '2-week delivery'],
        cta: 'Brief a site',
      },
      {
        n: 'Multi-page website', suffix: '/ project', popular: true,
        usd: 540, pkr: 150000, lead: 'Up to 12 pages, CMS-powered',
        feats: ['Up to 12 pages', 'WordPress / Strapi CMS', 'Blog + content publishing', 'SEO setup + sitemap', 'Forms, analytics, email', '3-week delivery', '30-day warranty'],
        cta: 'Plan the website',
      },
      {
        n: 'Web application', suffix: '/ project', from: true,
        usd: 715, pkr: 200000, lead: 'Auth + dashboard + admin',
        feats: ['User auth + roles', 'Custom dashboard + admin', 'Payment gateway integration', 'Up to 4 third-party APIs', 'Database + hosting handover', '4-week delivery'],
        cta: 'Scope the web app',
      },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    tagline: 'iOS, Android, cross-platform',
    sub: 'Native or cross-platform builds with push, payments, offline sync, and store submission included.',
    packages: [
      {
        n: 'iOS app', suffix: '/ project',
        usd: 2500, pkr: 700000, lead: 'iPhone + iPad, store-ready',
        feats: ['Native Swift or React Native', 'iPhone + iPad layouts', 'Push, deep links, analytics', 'App Store submission', 'TestFlight beta cycle', '6–8 week build'],
        cta: 'Scope iOS build',
      },
      {
        n: 'Android app', suffix: '/ project',
        usd: 2500, pkr: 700000, lead: 'Phone + tablet, Play Store-ready',
        feats: ['Native Kotlin or React Native', 'Phone + tablet layouts', 'Push, deep links, analytics', 'Play Store submission', 'Internal testing track', '6–8 week build'],
        cta: 'Scope Android build',
      },
      {
        n: 'iOS + Android', suffix: '/ project', popular: true,
        usd: 3570, pkr: 1000000, lead: 'Both platforms, one codebase',
        feats: ['React Native or Flutter', 'Both stores submitted', 'Push, payments, offline sync', 'OTA updates pipeline', '8–10 week build', '60-day warranty'],
        cta: 'Plan both platforms',
      },
    ],
  },
  {
    id: 'ar',
    label: 'AR / VR Development',
    tagline: 'Immersive experiences',
    sub: 'Unity, Unreal, WebXR — product visualisation, training, real-estate, retail try-on.',
    packages: [
      {
        n: 'AR / VR demo', suffix: '/ project',
        usd: 3570, pkr: 1000000, lead: 'Prototype or pilot experience',
        feats: ['Single-scene experience', 'iOS ARKit or Android ARCore', 'Up to 3 3D models or assets', 'Marker or marker-less tracking', '6-week build'],
        cta: 'Brief a demo',
      },
      {
        n: 'Production app', suffix: '/ project', popular: true,
        usd: 6430, pkr: 1800000, lead: 'Multi-scene, store-ready',
        feats: ['Multi-scene AR / VR app', 'Cross-platform (Quest, iOS, Android)', 'Custom 3D modelling', 'Cloud asset delivery', 'Analytics + telemetry', '10–12 week build'],
        cta: 'Plan the AR app',
      },
      {
        n: 'Enterprise solution', suffix: '/ project', from: true,
        usd: 10720, pkr: 3000000, lead: 'Training, simulation, retail',
        feats: ['Custom multi-user simulation', 'Headset + mobile + web targets', 'LMS / SCORM integration', 'On-site staff training', '16+ week build', 'Maintenance retainer eligible'],
        cta: 'Scope enterprise AR',
      },
    ],
  },
  {
    id: 'crm',
    label: 'CRM / ERP Systems',
    tagline: 'Sales, ops, accounting in one',
    sub: 'Custom or Odoo / ERPNext / SuiteCRM implementations — modelled to your actual workflows.',
    packages: [
      {
        n: 'CRM Starter', suffix: '/ project',
        usd: 1790, pkr: 500000, lead: 'Sales + customer pipeline',
        feats: ['Leads, pipeline, deals, contacts', 'Email + WhatsApp templates', 'User roles + permissions', '1 reporting dashboard', '8-week implementation'],
        cta: 'Brief the CRM',
      },
      {
        n: 'Mid-size ERP', suffix: '/ project', popular: true,
        usd: 5360, pkr: 1500000, lead: 'Sales + inventory + accounting',
        feats: ['Odoo or ERPNext implementation', 'Sales, inventory, purchase, accounting', 'Up to 25 users', 'Custom invoice + report templates', 'FBR e-invoicing ready', '12-week rollout', '30-day warranty'],
        cta: 'Plan the ERP',
      },
      {
        n: 'Enterprise ERP', suffix: '/ project', from: true,
        usd: 12500, pkr: 3500000, lead: 'Multi-branch, multi-currency',
        feats: ['Multi-branch + multi-currency', 'Custom modules + workflows', 'HR, payroll, manufacturing', 'API integrations (banks, couriers, FBR)', 'Staff training + change management', '20+ week rollout', '12-month support included'],
        cta: 'Scope enterprise ERP',
      },
    ],
  },
  {
    id: 'desktop',
    label: 'Desktop Applications',
    tagline: 'Windows, macOS, Linux',
    sub: 'Cross-platform Electron / Tauri or native builds — POS, kiosk, broadcast, back-office tools.',
    packages: [
      {
        n: 'Utility / Tool', suffix: '/ project',
        usd: 1070, pkr: 300000, lead: 'Single-purpose desktop tool',
        feats: ['Windows + macOS build', 'Single primary workflow', 'Local data + offline-first', 'Code-signed installers', '6-week build'],
        cta: 'Brief a tool',
      },
      {
        n: 'Business app', suffix: '/ project', popular: true,
        usd: 2145, pkr: 600000, lead: 'POS, inventory, back-office',
        feats: ['Electron or Tauri build', 'Database + cloud sync', 'Printer + barcode integration', 'User roles + audit log', 'Auto-update pipeline', '8–10 week build', '30-day warranty'],
        cta: 'Plan the business app',
      },
      {
        n: 'Enterprise desktop', suffix: '/ project', from: true,
        usd: 3570, pkr: 1000000, lead: 'Broadcast, simulation, kiosk',
        feats: ['Cross-platform + native modules', 'Hardware integration (cameras, scales, kiosks)', 'Multi-window, multi-display', 'Telemetry + crash reporting', '12+ week build'],
        cta: 'Scope desktop build',
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI Integration',
    tagline: 'Chatbots, agents, automation',
    sub: 'RAG over your documents, custom agents with tools and evals, and the plumbing that ships.',
    packages: [
      {
        n: 'Branded chatbot', suffix: '/ project',
        usd: 1430, pkr: 400000, lead: 'RAG over your docs',
        feats: ['Document ingestion pipeline', 'Branded chat UI on web', 'WhatsApp integration optional', 'Usage + token dashboard', '4-week build'],
        cta: 'Brief a chatbot',
      },
      {
        n: 'Custom AI agent', suffix: '/ project', popular: true,
        usd: 2860, pkr: 800000, lead: 'Tools, evals, monitoring',
        feats: ['Multi-tool agent (LangGraph)', 'Production eval harness', 'Tracing + cost dashboards', 'Human-in-the-loop review', '6–8 week build', '30-day warranty'],
        cta: 'Plan an agent',
      },
      {
        n: 'AI automation platform', suffix: '/ project', from: true,
        usd: 5360, pkr: 1500000, lead: 'Workflows + fine-tuning',
        feats: ['End-to-end workflow automation', 'Fine-tuning + custom evals', 'Multi-model routing', 'Cost + latency observability', '10–12 week build'],
        cta: 'Scope the platform',
      },
    ],
  }
];
