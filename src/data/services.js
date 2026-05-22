export const services = [
  {
    n: '01', t: 'Web Development', slug: 'web',
    sub: 'Websites, web apps, dashboards',
    d: 'From single-page sites to production web apps — Next.js, React, type-safe APIs, payments, admin surfaces, the works.',
    stack: ['Next.js', 'Laravel', 'Postgres', 'Stripe'],
    bgImage: '/assets/bg_service_web.png',
    overview: `Our web development practice is built around a central premise: code should be an asset, not a liability. We don't use heavy, brittle templates or bloated plugins. Instead, we architect bespoke platforms using modern, type-safe stacks like Next.js and TypeScript on the front end, backed by robust APIs. 

Whether you need a high-conversion marketing site, a complex B2B dashboard, or a full-scale SaaS platform, we build for longevity. Performance budgets are strictly enforced, ensuring your application loads instantly and ranks flawlessly. Every line of code is written by a senior engineer and handed over with complete documentation.`,
    deliverables: [
      'Production-ready codebase (Next.js/React)',
      'Headless CMS integration (Sanity/Strapi)',
      'Payment gateway setup (Stripe/Paddle)',
      'Comprehensive test coverage suite',
      'Automated CI/CD deployment pipelines',
      'Architectural Decision Records (ADRs)'
    ],
    methodology: [
      { step: '01', title: 'Architecture & Modeling', desc: 'We begin by defining the schema, the routing structure, and the critical path before writing a single component.' },
      { step: '02', title: 'Component Driven Build', desc: 'We build out the design system and individual UI components in isolation, ensuring consistency and reusability.' },
      { step: '03', title: 'Integration & Handoff', desc: 'APIs are wired up, end-to-end tests are written, and the complete infra is transferred to your AWS/Vercel accounts.' }
    ]
  },
  {
    n: '02', t: 'Mobile Apps', slug: 'mobile',
    sub: 'iOS, Android, cross-platform',
    d: 'Native Swift/Kotlin or cross-platform React Native and Flutter — App Store and Play Store submission included.',
    stack: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
    bgImage: '/assets/bg_service_mobile.png',
    overview: `Building for mobile requires a deep understanding of platform constraints, battery life, memory management, and network unreliability. We build apps that feel inherently native, whether we're using cross-platform frameworks like React Native or writing pure Swift and Kotlin.

We handle the entire lifecycle—from the initial TestFlight beta tracks to the final grueling App Store review processes. We focus heavily on offline-first architectures, ensuring your app remains functional and elegant even when connectivity drops.`,
    deliverables: [
      'Compiled binaries for iOS and Android',
      'Full source code repository',
      'Automated OTA update pipelines',
      'App Store & Google Play listings',
      'Push notification infrastructure',
      'Crashlytics & Telemetry dashboards'
    ],
    methodology: [
      { step: '01', title: 'Interaction Design', desc: 'We map out gesture-based navigation and define the offline-first sync strategies before touching the IDE.' },
      { step: '02', title: 'Development & Beta', desc: 'We ship early builds via TestFlight and Google Play Console for continuous stakeholder feedback.' },
      { step: '03', title: 'Store Submission', desc: 'We navigate the app review guidelines, handle the metadata, and manage the phased rollout to production.' }
    ]
  },
  {
    n: '03', t: 'AR / VR Development', slug: 'ar',
    sub: 'Immersive apps, training, retail',
    d: 'Unity and WebXR experiences for product visualisation, employee training, real-estate walkthroughs, and retail try-on.',
    stack: ['Unity', 'Unreal', 'WebXR', 'ARKit'],
    bgImage: '/assets/bg_service_ar.png',
    overview: `Spatial computing is transitioning from novelty to utility. We build practical, ROI-driven AR and VR experiences tailored for enterprise and high-end consumer retail. From training simulations that reduce onboarding time to WebXR showrooms that drive e-commerce conversions.

We optimize 3D assets for mobile and standalone headsets, ensuring buttery-smooth framerates without sacrificing visual fidelity. Our WebXR pipeline allows users to experience immersive environments directly in their mobile browser—no app downloads required.`,
    deliverables: [
      'Optimized 3D asset library',
      'Compiled Unity/Unreal project files',
      'WebXR compatible browser builds',
      'Custom shader and material pipelines',
      'Spatial analytics tracking',
      'Hardware-specific deployment profiles'
    ],
    methodology: [
      { step: '01', title: 'Asset Pipeline', desc: 'We begin by establishing the polygon budgets and texture constraints for the target hardware platform.' },
      { step: '02', title: 'Spatial Prototyping', desc: 'Core interactions (grabbing, teleporting, gazing) are prototyped in grey-box environments to nail the physics.' },
      { step: '03', title: 'Optimization & Polish', desc: 'Lighting is baked, draw calls are reduced, and the experience is rigorously tested to prevent motion sickness.' }
    ]
  },
  {
    n: '04', t: 'CRM & ERP Systems', slug: 'crm',
    sub: 'Sales, ops, accounting in one',
    d: 'Built-from-scratch CRMs and ERPs tailored to your processes — or Odoo / SuiteCRM / ERPNext implementations done right.',
    stack: ['Odoo', 'ERPNext', 'Laravel', 'SuiteCRM'],
    bgImage: '/assets/bg_service_crm.png',
    overview: `Off-the-shelf enterprise software often forces you to change your business to fit the tool. We build systems that fit your business. Whether we are heavily customizing an open-source framework like Odoo or building a bespoke ERP from the ground up in Laravel, we map the software directly to your actual floor operations.

We eliminate spreadsheet sprawl, consolidate isolated data silos, and automate the tedious reconciliation tasks that drain your team's energy. Our implementations come with strict data migration protocols and hands-on change management training.`,
    deliverables: [
      'Fully configured ERP/CRM instance',
      'Custom module source code',
      'Automated daily backup infrastructure',
      'Third-party API integrations (Banks/Gov)',
      'Role-based access control (RBAC) matrix',
      'End-user training documentation'
    ],
    methodology: [
      { step: '01', title: 'Workflow Auditing', desc: 'We spend time shadowing your operators to understand how work actually happens, not just how management thinks it happens.' },
      { step: '02', title: 'Data Migration', desc: 'We build rigorous ETL pipelines to safely extract, clean, and load your historical data into the new schema.' },
      { step: '03', title: 'Phased Rollout', desc: 'We deploy module by module (e.g., Inventory, then Sales, then Accounting) to minimize operational disruption.' }
    ]
  },
  {
    n: '05', t: 'Desktop Applications', slug: 'desktop',
    sub: 'Windows, macOS, Linux',
    d: 'Cross-platform Electron and Tauri apps, or native C#/Swift builds — POS, kiosk, broadcast, and back-office tools.',
    stack: ['Electron', 'Tauri', 'C#', 'Qt'],
    bgImage: '/assets/bg_service_desktop.png',
    overview: `Not everything belongs in the browser. When you need raw performance, deep hardware integration, or guaranteed offline capabilities, native desktop applications are the only answer. We specialize in building robust tooling for Point of Sale (POS) systems, broadcast environments, and industrial kiosks.

Using modern frameworks like Tauri (Rust) and Electron, we deliver cross-platform applications that feel incredibly responsive. For specialized Windows environments, we write performant native C# / .NET. All our desktop builds include robust auto-updating pipelines and strict crash telemetry.`,
    deliverables: [
      'Signed installers for Windows & macOS',
      'Automated release & update servers',
      'Local SQLite database sync architecture',
      'Hardware integration drivers (Printers/Scanners)',
      'Crashlytics and error reporting',
      'Complete build & code signing pipelines'
    ],
    methodology: [
      { step: '01', title: 'Hardware Mapping', desc: 'We identify all necessary peripherals (USB scales, receipt printers, custom displays) and write the necessary bindings.' },
      { step: '02', title: 'Offline-First Architecture', desc: 'We engineer the local database and conflict-resolution strategies to ensure seamless sync when connectivity returns.' },
      { step: '03', title: 'Distribution Pipeline', desc: 'We set up the CI/CD pipelines to handle code signing and seamless over-the-air (OTA) updates for the client machines.' }
    ]
  },
  {
    n: '06', t: 'AI Integration', slug: 'ai',
    sub: 'Chatbots, agents, automation',
    d: 'RAG over your documents, custom agents with tools and evals, and the plumbing that makes them work in production.',
    stack: ['OpenAI', 'LangGraph', 'pgvector', 'Llama'],
    bgImage: '/assets/bg_service_ai.png',
    overview: `Moving AI from a flashy demo to a reliable production system is an engineering challenge, not just a prompt engineering exercise. We build robust Retrieval-Augmented Generation (RAG) pipelines and autonomous agents that actually execute tasks reliably.

Our approach is built on stringent evaluation harnesses. We don't just guess if a prompt is working; we test it against hundreds of edge-cases before it ever sees production. From secure, on-premise Llama deployments to orchestrating complex multi-agent workflows with LangGraph, we build AI that works.`,
    deliverables: [
      'Production LangGraph agent architectures',
      'Vector database setup and tuning (pgvector)',
      'Comprehensive Evaluation Harnesses',
      'Cost and latency monitoring dashboards',
      'Data ingestion and chunking pipelines',
      'Human-in-the-loop review interfaces'
    ],
    methodology: [
      { step: '01', title: 'Eval Harness Setup', desc: 'Before building the agent, we define the success metrics and build an automated testing suite of 100+ scenarios.' },
      { step: '02', title: 'Pipeline Engineering', desc: 'We build the ingestion pipelines to clean, chunk, and embed your proprietary data securely into the vector store.' },
      { step: '03', title: 'Agent Tuning & Guardrails', desc: 'We iterate on the prompt chains and implement strict fallback mechanisms to prevent hallucinations and constrain outputs.' }
    ]
  }
];
