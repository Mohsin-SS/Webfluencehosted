/**
 * Webfluence — product pricing config.
 *
 * All numbers are EDITABLE seed values. Adjust freely without touching the
 * PriceCalculator component. Ranges are [min, max] in the local currency.
 *
 * Conventions:
 *   - `pricing.billing`  → 'one-time' (project) | 'monthly' (subscription)
 *   - `tier.price`       → { pkr: [min, max], usd: [min, max] }
 *   - `addon.tiers`      → ['basic'] | ['premium'] | ['basic','premium']
 *
 * Region detection picks PKR for Asia/Karachi timezone, otherwise USD.
 * Users can override with the in-component currency toggle.
 */

export const pricing = {
  // ────────────────────────────────────────────────────────────────
  // 1. Agentic Lead Manager (subscription)
  // ────────────────────────────────────────────────────────────────
  'lead-manager': {
    billing: 'monthly',
    tagline: 'Subscription billed monthly. Setup + onboarding included.',
    basic: {
      name: 'Basic',
      price: { pkr: [25000, 50000], usd: [200, 400] },
      includes: [
        '30 leads/day',
        'Single city / region',
        'Claude AI scoring',
        'Daily 8am report',
        'SQLite storage',
        'Email support',
      ],
    },
    premium: {
      name: 'Premium',
      price: { pkr: [80000, 150000], usd: [700, 1500] },
      includes: [
        'Unlimited leads/day',
        'Multi-city + multi-source',
        'Personalised outreach drafts',
        'Real-time live dashboard',
        'Priority onboarding',
      ],
    },
    addons: [
      { id: 'extra-city', name: 'Additional City', desc: 'Per extra city/region scraped daily.', price: { pkr: [8000, 15000], usd: [80, 150] }, tiers: ['basic', 'premium'] },
      { id: 'wa-outreach', name: 'WhatsApp Outreach Automation', desc: 'Auto-send drafted messages over WhatsApp.', price: { pkr: [15000, 30000], usd: [150, 300] }, tiers: ['basic', 'premium'] },
      { id: 'email-outreach', name: 'Email Outreach Automation', desc: 'Send personalised email drafts via SendGrid/SES.', price: { pkr: [12000, 25000], usd: [120, 250] }, tiers: ['basic', 'premium'] },
      { id: 'crm-sync', name: 'CRM Auto-Sync', desc: 'Push leads into HubSpot, Salesforce, or your custom CRM.', price: { pkr: [10000, 20000], usd: [100, 200] }, tiers: ['basic', 'premium'] },
      { id: 'custom-scoring', name: 'Custom Scoring Criteria', desc: 'Train the AI scorer on your ICP and rubric.', price: { pkr: [20000, 40000], usd: [200, 400] }, tiers: ['premium'] },
      { id: 'slack-alerts', name: 'Slack / Teams Alerts', desc: 'Hot-lead notifications in your team channel.', price: { pkr: [5000, 10000], usd: [50, 100] }, tiers: ['basic', 'premium'] },
      { id: 'whitelabel', name: 'White-Label Dashboard', desc: 'Your branding on the lead manager UI.', price: { pkr: [30000, 60000], usd: [300, 600] }, tiers: ['premium'] },
      { id: 'api-access', name: 'API Access', desc: 'Programmatic access to leads + scores.', price: { pkr: [25000, 50000], usd: [250, 500] }, tiers: ['premium'] },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // 2. WhatsApp Chatbot
  // ────────────────────────────────────────────────────────────────
  'whatsapp': {
    billing: 'one-time',
    tagline: 'One-time build cost. Hosting + WhatsApp API fees billed separately.',
    basic: {
      name: 'Basic',
      price: { pkr: [40000, 100000], usd: [400, 1200] },
      includes: [
        'WhatsApp Cloud API setup',
        'FAQ-style auto-replies',
        '~20 trained intents',
        'Single language',
        'Basic analytics',
      ],
    },
    premium: {
      name: 'Premium',
      price: { pkr: [150000, 400000], usd: [1500, 5000] },
      includes: [
        'NLP-driven multi-flow bot',
        'CRM integration',
        'Lead qualification flows',
        'Analytics dashboard',
        'Multi-language ready',
      ],
    },
    addons: [
      { id: 'crm-sync', name: 'CRM Auto-Sync', desc: 'Push qualified leads into your CRM.', price: { pkr: [30000, 60000], usd: [300, 800] }, tiers: ['basic', 'premium'] },
      { id: 'appointment-booking', name: 'Appointment Booking', desc: 'Google Calendar integration with auto-reminders.', price: { pkr: [25000, 50000], usd: [250, 700] }, tiers: ['basic', 'premium'] },
      { id: 'multi-language', name: 'Multi-Language Support', desc: 'Per additional language pack.', price: { pkr: [20000, 40000], usd: [200, 500] }, tiers: ['basic', 'premium'] },
      { id: 'media-handling', name: 'Voice Notes + Media Handling', desc: 'Process images, voice, and documents.', price: { pkr: [15000, 30000], usd: [150, 400] }, tiers: ['basic', 'premium'] },
      { id: 'live-handoff', name: 'Live Agent Handoff', desc: 'Seamless escalation to human agents.', price: { pkr: [30000, 60000], usd: [300, 800] }, tiers: ['premium'] },
      { id: 'custom-nlp', name: 'Custom NLP Training', desc: 'Train the bot on your industry vocabulary.', price: { pkr: [50000, 120000], usd: [600, 1500] }, tiers: ['premium'] },
      { id: 'hot-lead-alerts', name: 'Hot Lead Alerts', desc: 'Instant Slack / email pings for hot leads.', price: { pkr: [15000, 30000], usd: [150, 400] }, tiers: ['basic', 'premium'] },
      { id: 'analytics-dashboard', name: 'Analytics Dashboard', desc: 'Conversation analytics + lead funnel.', price: { pkr: [40000, 80000], usd: [400, 1000] }, tiers: ['basic', 'premium'] },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // 3. CRM System
  // ────────────────────────────────────────────────────────────────
  'crm': {
    billing: 'one-time',
    tagline: 'Custom CRM built around your sales workflow. Hosting billed separately.',
    basic: {
      name: 'Basic',
      price: { pkr: [120000, 300000], usd: [1500, 4000] },
      includes: [
        'Visual pipeline / Kanban',
        'Contact management',
        'Basic reporting',
        '3 user seats',
        'Cloud hosting (1st year)',
      ],
    },
    premium: {
      name: 'Premium',
      price: { pkr: [400000, 1200000], usd: [5000, 20000] },
      includes: [
        'Custom modules + fields',
        'Workflow automation',
        'Advanced reporting',
        'Unlimited users',
        'Priority onboarding',
      ],
    },
    addons: [
      { id: 'email-integration', name: 'Email Integration', desc: 'Two-way sync with Gmail / Outlook.', price: { pkr: [30000, 70000], usd: [400, 1000] }, tiers: ['basic', 'premium'] },
      { id: 'whatsapp-integration', name: 'WhatsApp Integration', desc: 'Send / receive WhatsApp inside the CRM.', price: { pkr: [40000, 80000], usd: [500, 1200] }, tiers: ['basic', 'premium'] },
      { id: 'sms-gateway', name: 'SMS Gateway', desc: 'Send SMS via Twilio / Telenor / Jazz.', price: { pkr: [25000, 50000], usd: [300, 700] }, tiers: ['basic', 'premium'] },
      { id: 'rbac', name: 'Custom Roles & Permissions', desc: 'Role-based access control.', price: { pkr: [40000, 80000], usd: [500, 1200] }, tiers: ['basic', 'premium'] },
      { id: 'api-external', name: 'API for External Systems', desc: 'REST API for third-party integration.', price: { pkr: [50000, 120000], usd: [700, 1800] }, tiers: ['premium'] },
      { id: 'document-mgmt', name: 'Document & File Management', desc: 'Per-contact file storage.', price: { pkr: [30000, 60000], usd: [400, 900] }, tiers: ['basic', 'premium'] },
      { id: 'mobile-app', name: 'Mobile Companion App', desc: 'iOS + Android app for the CRM.', price: { pkr: [200000, 500000], usd: [2500, 8000] }, tiers: ['premium'] },
      { id: 'workflow-automation', name: 'Workflow Automation', desc: 'Trigger-based automation rules.', price: { pkr: [80000, 200000], usd: [1000, 3000] }, tiers: ['premium'] },
      { id: 'advanced-analytics', name: 'Advanced Analytics', desc: 'Forecasting, leaderboards, deep reports.', price: { pkr: [50000, 120000], usd: [700, 1800] }, tiers: ['basic', 'premium'] },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // 4. Website Development
  // ────────────────────────────────────────────────────────────────
  'website': {
    billing: 'one-time',
    tagline: 'One-time build. Hosting + domain billed separately.',
    basic: {
      name: 'Basic',
      price: { pkr: [60000, 180000], usd: [700, 2500] },
      includes: [
        'Up to 5 pages',
        'Mobile responsive',
        'Contact form',
        'Basic SEO',
        '1 round of revisions',
      ],
    },
    premium: {
      name: 'Premium',
      price: { pkr: [250000, 800000], usd: [3500, 15000] },
      includes: [
        'Unlimited pages',
        'Custom animations',
        'CMS-powered content',
        'Advanced SEO + schema',
        'Analytics + conversion tracking',
        'Unlimited revisions',
      ],
    },
    addons: [
      { id: 'cms', name: 'CMS Integration', desc: 'Sanity / Contentful / WordPress.', price: { pkr: [40000, 90000], usd: [500, 1500] }, tiers: ['basic', 'premium'] },
      { id: 'seo-schema', name: 'SEO + Structured Data', desc: 'Schema markup, sitemap, GA4 events.', price: { pkr: [30000, 70000], usd: [400, 1200] }, tiers: ['basic', 'premium'] },
      { id: 'multi-language', name: 'Multi-Language (i18n)', desc: 'Per additional language.', price: { pkr: [50000, 100000], usd: [600, 1800] }, tiers: ['basic', 'premium'] },
      { id: 'blog', name: 'Blog + CMS', desc: 'Editable blog with categories and tags.', price: { pkr: [40000, 80000], usd: [500, 1000] }, tiers: ['basic', 'premium'] },
      { id: 'ecommerce', name: 'E-commerce', desc: 'Shopify or custom storefront.', price: { pkr: [100000, 300000], usd: [1500, 5000] }, tiers: ['basic', 'premium'] },
      { id: 'booking', name: 'Booking System', desc: 'Calendar-based booking with reminders.', price: { pkr: [60000, 150000], usd: [800, 2500] }, tiers: ['basic', 'premium'] },
      { id: 'payment-gateway', name: 'Payment Gateway', desc: 'Stripe, JazzCash, EasyPaisa, etc.', price: { pkr: [60000, 150000], usd: [800, 2500] }, tiers: ['basic', 'premium'] },
      { id: 'auth', name: 'User Accounts + Auth', desc: 'Sign-up, login, password reset.', price: { pkr: [50000, 150000], usd: [700, 2500] }, tiers: ['premium'] },
      { id: 'animations-3d', name: 'Custom Animations / 3D', desc: 'Premium motion + WebGL.', price: { pkr: [80000, 200000], usd: [1200, 3500] }, tiers: ['premium'] },
      { id: 'hosting', name: 'Hosting + 1yr Maintenance', desc: 'Server, deploy pipeline, monthly checkups.', price: { pkr: [50000, 100000], usd: [600, 1500] }, tiers: ['basic', 'premium'] },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // 5. Mobile App
  // ────────────────────────────────────────────────────────────────
  'mobile-app': {
    billing: 'one-time',
    tagline: 'One-time build. App Store + Google Play fees billed separately.',
    basic: {
      name: 'Basic',
      price: { pkr: [250000, 700000], usd: [3000, 10000] },
      includes: [
        'Single platform (iOS or Android)',
        '5–7 screens',
        'Basic backend + database',
        'Auth (email or social)',
        'Splash + onboarding flow',
      ],
    },
    premium: {
      name: 'Premium',
      price: { pkr: [700000, 2500000], usd: [10000, 40000] },
      includes: [
        'iOS + Android',
        'Complex flows + animations',
        'Real-time + offline support',
        'Push notifications',
        'Admin panel',
      ],
    },
    addons: [
      { id: 'push-notifs', name: 'Push Notifications', desc: 'FCM + APNs with segmented campaigns.', price: { pkr: [50000, 120000], usd: [600, 1800] }, tiers: ['basic', 'premium'] },
      { id: 'in-app-payments', name: 'In-App Payments', desc: 'Stripe + Apple Pay + Google Pay.', price: { pkr: [80000, 180000], usd: [1000, 2800] }, tiers: ['basic', 'premium'] },
      { id: 'realtime-chat', name: 'Real-time Chat / WebSockets', desc: 'Live messaging between users.', price: { pkr: [100000, 250000], usd: [1500, 3500] }, tiers: ['premium'] },
      { id: 'maps-geo', name: 'Maps & Geolocation', desc: 'Google Maps + tracking + geofencing.', price: { pkr: [60000, 150000], usd: [800, 2200] }, tiers: ['basic', 'premium'] },
      { id: 'firebase-auth', name: 'Firebase / OAuth Auth', desc: 'Social login, email, phone OTP.', price: { pkr: [50000, 120000], usd: [600, 1800] }, tiers: ['basic', 'premium'] },
      { id: 'offline', name: 'Offline Mode', desc: 'Local-first with sync on reconnect.', price: { pkr: [80000, 180000], usd: [1000, 2500] }, tiers: ['premium'] },
      { id: 'store-submission', name: 'App Store + Play Store Submission', desc: 'Full submission with metadata + screenshots.', price: { pkr: [30000, 60000], usd: [400, 800] }, tiers: ['basic', 'premium'] },
      { id: 'analytics', name: 'Analytics (Firebase / Mixpanel)', desc: 'Event tracking + funnel analysis.', price: { pkr: [30000, 60000], usd: [400, 800] }, tiers: ['basic', 'premium'] },
      { id: 'admin-panel', name: 'Admin Panel', desc: 'Web dashboard to manage app data + users.', price: { pkr: [150000, 400000], usd: [2000, 6000] }, tiers: ['premium'] },
      { id: 'multi-language', name: 'Multi-Language', desc: 'Per additional language.', price: { pkr: [60000, 120000], usd: [700, 1800] }, tiers: ['basic', 'premium'] },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // 6. ERP System
  // ────────────────────────────────────────────────────────────────
  'erp': {
    billing: 'one-time',
    tagline: 'One-time build, modular. Hosting + license billed separately.',
    basic: {
      name: 'Basic',
      price: { pkr: [600000, 1500000], usd: [8000, 20000] },
      includes: [
        '2–3 core modules',
        'Role-based access',
        'Basic reporting',
        '10 user seats',
        'Cloud hosting setup',
      ],
    },
    premium: {
      name: 'Premium',
      price: { pkr: [1800000, 6000000], usd: [25000, 80000] },
      includes: [
        'Full module suite (HR + Inventory + Finance + Ops)',
        'Custom modules included',
        'Advanced reporting + dashboards',
        'Unlimited users',
        'Dedicated implementation team',
      ],
    },
    addons: [
      { id: 'hr-payroll', name: 'HR + Payroll Module', desc: 'Employees, attendance, leave, payroll.', price: { pkr: [250000, 600000], usd: [3000, 8000] }, tiers: ['basic', 'premium'] },
      { id: 'inventory', name: 'Inventory Management', desc: 'Stock tracking, reorder rules, suppliers.', price: { pkr: [300000, 700000], usd: [4000, 10000] }, tiers: ['basic', 'premium'] },
      { id: 'production', name: 'Production Planning', desc: 'BOM, routing, scheduling.', price: { pkr: [400000, 900000], usd: [5000, 12000] }, tiers: ['premium'] },
      { id: 'procurement', name: 'Procurement + POs', desc: 'Vendor management + PO workflow.', price: { pkr: [250000, 500000], usd: [3000, 7000] }, tiers: ['basic', 'premium'] },
      { id: 'multi-warehouse', name: 'Multi-Warehouse', desc: 'Stock visibility across locations.', price: { pkr: [200000, 450000], usd: [2500, 6000] }, tiers: ['basic', 'premium'] },
      { id: 'barcode', name: 'Barcode / QR Scanning', desc: 'Mobile-driven inventory scanning.', price: { pkr: [80000, 180000], usd: [1000, 2500] }, tiers: ['basic', 'premium'] },
      { id: 'biometric', name: 'Biometric Attendance', desc: 'Integration with biometric devices.', price: { pkr: [100000, 250000], usd: [1500, 3500] }, tiers: ['basic', 'premium'] },
      { id: 'reports', name: 'Custom Reports + Dashboards', desc: 'Bespoke reports for your KPIs.', price: { pkr: [150000, 350000], usd: [2000, 5000] }, tiers: ['basic', 'premium'] },
      { id: 'mobile-app', name: 'Mobile Companion App', desc: 'iOS + Android app for managers / staff.', price: { pkr: [400000, 900000], usd: [5000, 12000] }, tiers: ['premium'] },
      { id: 'third-party-api', name: 'Third-Party API Integration', desc: 'Connect to existing accounting / banking / vendor APIs.', price: { pkr: [200000, 500000], usd: [3000, 7000] }, tiers: ['basic', 'premium'] },
      { id: 'data-migration', name: 'Data Migration', desc: 'Migrate from legacy ERP / spreadsheets.', price: { pkr: [150000, 400000], usd: [2000, 5500] }, tiers: ['basic', 'premium'] },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // 7. AI Automations
  // ────────────────────────────────────────────────────────────────
  'ai-automations': {
    billing: 'one-time',
    tagline: 'One-time build per workflow. Recurring AI / API costs billed separately.',
    basic: {
      name: 'Basic',
      price: { pkr: [100000, 250000], usd: [1200, 3500] },
      includes: [
        'Single workflow',
        '1–2 app integrations',
        'Basic logic + branching',
        'Monitoring setup',
      ],
    },
    premium: {
      name: 'Premium',
      price: { pkr: [400000, 1500000], usd: [5000, 20000] },
      includes: [
        'Multi-workflow orchestration',
        'Custom AI agents',
        'Self-healing + retry logic',
        'Live dashboard',
      ],
    },
    addons: [
      { id: 'custom-agent', name: 'Custom AI Agent', desc: 'Bespoke autonomous agent for a specific task.', price: { pkr: [150000, 400000], usd: [2000, 5500] }, tiers: ['premium'] },
      { id: 'doc-parsing', name: 'Document / Email Parsing (OCR + NLP)', desc: 'Extract structured data from PDFs / emails.', price: { pkr: [100000, 250000], usd: [1200, 3500] }, tiers: ['basic', 'premium'] },
      { id: 'slack-teams', name: 'Slack / Teams Integration', desc: 'Trigger + notify in chat.', price: { pkr: [30000, 70000], usd: [400, 1000] }, tiers: ['basic', 'premium'] },
      { id: 'crm-sync', name: 'CRM Sync', desc: 'HubSpot / Salesforce / custom CRM connector.', price: { pkr: [50000, 120000], usd: [600, 1800] }, tiers: ['basic', 'premium'] },
      { id: 'content-gen', name: 'Image / Content Generation', desc: 'AI-generated text + images at scale.', price: { pkr: [80000, 200000], usd: [1000, 2500] }, tiers: ['basic', 'premium'] },
      { id: 'scheduling', name: 'Daily / Weekly Scheduling', desc: 'Cron + scheduled triggers.', price: { pkr: [25000, 50000], usd: [300, 700] }, tiers: ['basic', 'premium'] },
      { id: 'reporting', name: 'Reporting + Analytics', desc: 'Workflow execution dashboards.', price: { pkr: [60000, 150000], usd: [800, 2000] }, tiers: ['basic', 'premium'] },
      { id: 'webhooks-api', name: 'Webhook + API Setup', desc: 'Custom inbound + outbound webhooks.', price: { pkr: [40000, 90000], usd: [500, 1200] }, tiers: ['basic', 'premium'] },
      { id: 'human-loop', name: 'Human-in-the-Loop Approvals', desc: 'Manual review steps inside automated flows.', price: { pkr: [80000, 180000], usd: [1000, 2500] }, tiers: ['premium'] },
    ],
  },
};
