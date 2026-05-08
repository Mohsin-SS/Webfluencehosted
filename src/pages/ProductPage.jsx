import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Bot, MessageSquare, BarChart3, Globe, Smartphone, Database, Zap } from 'lucide-react';
import ContactModal from '../components/sections/Pricing/ContactModal';
import ProductHero from '../components/sections/ProductHero/ProductHero';
import ProductFeatures from '../components/sections/ProductFeatures/ProductFeatures';
import HowItWorks from '../components/sections/HowItWorks/HowItWorks';
import Pricing from '../components/sections/Pricing/Pricing';
import GenericProduct from '../components/sections/GenericProduct/GenericProduct';
import ScrollRevealText from '../components/ui/AnimatedLetter';
import './ProductPage.css';

const TABS = [
  { id: 'lead-manager', label: 'Lead Manager', Icon: Bot },
  { id: 'whatsapp', label: 'Chatbot', Icon: MessageSquare },
  { id: 'crm', label: 'CRM System', Icon: BarChart3 },
  { id: 'website', label: 'Website Dev', Icon: Globe },
  { id: 'mobile-app', label: 'Mobile App', Icon: Smartphone },
  { id: 'erp', label: 'ERP System', Icon: Database },
  { id: 'ai-automations', label: 'AI Automations', Icon: Zap },
];

const GENERIC_PRODUCTS = [
  {
    id: 'whatsapp',
    badge: 'AI-Powered',
    headline: 'Chatbot',
    accentLine: 'for instant business conversations.',
    sub: 'AI-powered responses on WhatsApp that qualify leads, answer FAQs, and book appointments — 24/7, without a human agent.',
    stats: [
      { value: '24/7', label: 'Uptime' },
      { value: '<2s', label: 'Response' },
      { value: '80%', label: 'Auto-resolve' },
      { value: '5+', label: 'Languages' },
    ],
    features: [
      {
        number: '01',
        title: 'Smart Auto-Replies',
        desc: 'Understands intent with NLP, handles FAQs, and routes complex queries to a human — all from one number.',
        items: ['Natural language understanding', 'Custom FAQ knowledge base', 'Human handoff triggers', 'Media & emoji support'],
      },
      {
        number: '02',
        title: 'Lead Qualification',
        desc: 'Multi-step conversation flows that score and qualify prospects before they ever reach your sales team.',
        items: ['Custom qualification flows', 'Lead scoring & tagging', 'CRM auto-sync', 'Instant hot-lead alerts'],
      },
      {
        number: '03',
        title: 'Appointment Booking',
        desc: 'Integrates with your calendar to schedule calls, demos, and follow-ups directly inside WhatsApp.',
        items: ['Google Calendar integration', 'Time zone auto-detection', 'Automated reminders', 'Reschedule handling'],
      },
      {
        number: '04',
        title: 'Analytics Dashboard',
        desc: 'Track message volume, bot performance, lead conversion, and top query categories.',
        items: ['Conversation analytics', 'Lead conversion funnel', 'Top query breakdown', 'CSV export'],
      },
    ],
    steps: [
      { number: '01', title: 'Connect', desc: 'Link your WhatsApp Business number via the official Cloud API. No third-party tools required.' },
      { number: '02', title: 'Train', desc: 'Upload your FAQs, products, pricing, and brand tone. The AI learns to speak your language.' },
      { number: '03', title: 'Deploy', desc: 'Go live. Every incoming message is handled instantly and intelligently, day and night.' },
      { number: '04', title: 'Analyse', desc: 'Monitor conversations and leads in the dashboard. Refine flows, scale volume.' },
    ],
    cta: 'Get a Custom Quote',
    emailSubject: 'Chatbot Inquiry',
  },
  {
    id: 'crm',
    badge: 'Built for Closers',
    headline: 'CRM System',
    accentLine: 'built around your sales process.',
    sub: 'A custom CRM tailored to how you sell — track leads, manage pipelines, automate follow-ups, and close deals faster.',
    stats: [
      { value: '∞', label: 'Contacts' },
      { value: 'Visual', label: 'Pipeline' },
      { value: 'Auto', label: 'Follow-ups' },
      { value: 'Full', label: 'History' },
    ],
    features: [
      {
        number: '01',
        title: 'Visual Pipeline',
        desc: 'Drag-and-drop Kanban board showing every deal at every stage — move cards, set probabilities, forecast revenue.',
        items: ['Customisable deal stages', 'Drag-and-drop cards', 'Revenue forecasting', 'Team assignment'],
      },
      {
        number: '02',
        title: 'Contact Management',
        desc: 'Full interaction history per contact — calls, emails, WhatsApp messages, notes, and files in one timeline.',
        items: ['Unified contact timeline', 'Tag & segment contacts', 'File & document storage', 'CSV import'],
      },
      {
        number: '03',
        title: 'Automated Follow-ups',
        desc: 'Set sequences that trigger automatically — email or WhatsApp reminders sent at the right time, every time.',
        items: ['Multi-step sequences', 'Email & WhatsApp triggers', 'Delay-based scheduling', 'Reply detection & stop'],
      },
      {
        number: '04',
        title: 'Analytics & Reports',
        desc: 'Deal velocity, conversion rates, rep performance, and revenue reports — always up to date.',
        items: ['Win/loss analysis', 'Rep leaderboard', 'Pipeline health score', 'Monthly revenue breakdown'],
      },
    ],
    steps: [
      { number: '01', title: 'Import', desc: 'Bring in existing contacts from a spreadsheet or pull directly from the Agentic Lead Manager.' },
      { number: '02', title: 'Configure', desc: 'Set your pipeline stages, custom fields, and notification rules to match your workflow.' },
      { number: '03', title: 'Automate', desc: 'Build follow-up sequences and trigger conditions — set it once and never miss a follow-up.' },
      { number: '04', title: 'Close', desc: 'Work the board, update deal stages, and track revenue with real-time reports.' },
    ],
    cta: 'Request a Demo',
    emailSubject: 'CRM System Inquiry',
  },
  {
    id: 'website',
    badge: 'High-Conversion',
    headline: 'Website Development',
    accentLine: 'that turns visitors into customers.',
    sub: 'Modern, fast, and conversion-optimised websites built with React/Next.js — from landing pages to full product sites.',
    stats: [
      { value: '<2s', label: 'Load time' },
      { value: '100', label: 'Lighthouse' },
      { value: 'SEO', label: 'Ready' },
      { value: 'CMS', label: 'Powered' },
    ],
    features: [
      {
        number: '01',
        title: 'High-Performance Stack',
        desc: 'Built with React/Next.js, optimised for Core Web Vitals, sub-2s load times, and perfect Lighthouse scores.',
        items: ['React / Next.js / Vite', 'Static & server rendering', 'CDN-optimised assets', 'Vercel / Cloudflare deploy'],
      },
      {
        number: '02',
        title: 'Conversion-Focused Design',
        desc: 'Every section is designed with one goal — lead capture, demo booking, or a direct sale.',
        items: ['Above-fold CTA strategy', 'Social proof sections', 'Trust signal placement', 'A/B test ready'],
      },
      {
        number: '03',
        title: 'CMS Integration',
        desc: 'Client-editable content with Sanity, Contentful, or headless WordPress — update copy without touching code.',
        items: ['Sanity / Contentful / WP', 'Live preview support', 'Image optimisation pipeline', 'Role-based editing'],
      },
      {
        number: '04',
        title: 'SEO & Analytics',
        desc: 'Technical SEO, structured data, sitemap, GA4, and conversion tracking baked in from day one.',
        items: ['Schema markup', 'Dynamic sitemaps', 'GA4 + conversion events', 'Core Web Vitals monitoring'],
      },
    ],
    steps: [
      { number: '01', title: 'Discover', desc: 'A strategy call to align on goals, audience, competitor landscape, and site structure.' },
      { number: '02', title: 'Design', desc: 'Full Figma prototype of every page and interaction — approved before we write a line of code.' },
      { number: '03', title: 'Build', desc: 'React/Next.js development with CMS integration, animations, and all third-party connections.' },
      { number: '04', title: 'Launch', desc: 'Deployed to Vercel or Cloudflare, analytics live, handover session with your team included.' },
    ],
    cta: 'Start Your Project',
    emailSubject: 'Website Development Inquiry',
  },
  {
    id: 'mobile-app',
    badge: 'Cross-Platform',
    headline: 'Mobile App',
    accentLine: 'native quality on every device.',
    sub: 'High-quality iOS and Android apps built with React Native — from a single codebase, shipped in weeks not months.',
    stats: [
      { value: 'iOS+', label: 'Android' },
      { value: '1×', label: 'Codebase' },
      { value: 'Store', label: 'Ready' },
      { value: 'Push', label: 'Notifications' },
    ],
    features: [
      {
        number: '01',
        title: 'React Native',
        desc: 'Cross-platform apps that feel genuinely native — 60fps animations, native gestures, full device API access.',
        items: ['iOS & Android from one repo', 'Native navigation & gestures', '60fps animations', 'Full device API access'],
      },
      {
        number: '02',
        title: 'Backend Integration',
        desc: 'REST, GraphQL, Firebase, Supabase, or a custom Node/Python backend — built and integrated end-to-end.',
        items: ['REST / GraphQL APIs', 'Auth (Firebase / custom)', 'Real-time via WebSockets', 'Offline-first support'],
      },
      {
        number: '03',
        title: 'Push Notifications',
        desc: 'Real-time alerts, campaign triggers, and in-app messaging to keep users engaged and coming back.',
        items: ['FCM / APNs integration', 'Segmented campaigns', 'Deep-link routing', 'In-app message centre'],
      },
      {
        number: '04',
        title: 'App Store Submission',
        desc: 'Full submission for both Apple App Store and Google Play, including metadata, screenshots, and review handling.',
        items: ['App Store Connect setup', 'Google Play Console', 'Screenshots & metadata', 'Review dispute handling'],
      },
    ],
    steps: [
      { number: '01', title: 'Scope', desc: 'Define screens, user flows, core features, and the MVP boundary in a focused scoping session.' },
      { number: '02', title: 'Design', desc: 'Full UI/UX in Figma for every screen, state, and transition — approved before development.' },
      { number: '03', title: 'Build', desc: 'React Native development with backend integration, push notifications, and on-device testing.' },
      { number: '04', title: 'Ship', desc: 'TestFlight / internal beta, then full App Store + Google Play launch with your team.' },
    ],
    cta: 'Get a Quote',
    emailSubject: 'Mobile App Development Inquiry',
  },
  {
    id: 'erp',
    badge: 'Enterprise-Grade',
    headline: 'ERP System',
    accentLine: 'every department, one platform.',
    sub: 'End-to-end business management — inventory, HR, finance, and operations unified in a single custom-built system.',
    stats: [
      { value: 'All', label: 'Departments' },
      { value: 'Live', label: 'Data' },
      { value: 'RBAC', label: 'Access control' },
      { value: 'Custom', label: 'Modules' },
    ],
    features: [
      {
        number: '01',
        title: 'Inventory Management',
        desc: 'Real-time stock tracking across multiple warehouses, with auto-reorder triggers and supplier management.',
        items: ['Multi-warehouse support', 'Auto-reorder rules', 'Barcode / QR scanning', 'Supplier portal'],
      },
      {
        number: '02',
        title: 'HR & Payroll',
        desc: 'Employee records, attendance tracking, leave management, and automated payroll calculations in one place.',
        items: ['Employee profiles & docs', 'Attendance & biometrics', 'Leave approval workflows', 'Payroll automation'],
      },
      {
        number: '03',
        title: 'Finance & Accounting',
        desc: 'Invoicing, expense tracking, accounts payable/receivable, P&L reports, and bank reconciliation — all automated.',
        items: ['Invoice generation', 'Expense tracking', 'P&L dashboards', 'Bank reconciliation'],
      },
      {
        number: '04',
        title: 'Custom Modules',
        desc: 'Any business process — procurement, production, logistics — built as a module and integrated into the platform.',
        items: ['Procurement & POs', 'Production planning', 'Logistics tracking', 'Third-party API integration'],
      },
    ],
    steps: [
      { number: '01', title: 'Audit', desc: 'Map your current workflows, data sources, pain points, and integration requirements.' },
      { number: '02', title: 'Architect', desc: 'System design and module specs reviewed with your team before development begins.' },
      { number: '03', title: 'Build', desc: 'Custom modules developed iteratively, integrated with your existing tools and databases.' },
      { number: '04', title: 'Go Live', desc: 'Staff training, data migration, and a full handover with ongoing support included.' },
    ],
    cta: 'Request a Proposal',
    emailSubject: 'ERP System Inquiry',
  },
  {
    id: 'ai-automations',
    badge: 'Efficiency First',
    headline: 'AI Automations',
    accentLine: 'eliminate repetitive tasks.',
    sub: 'Intelligent workflows that connect your favorite tools and use AI to process data, generate content, and manage operations — automatically.',
    stats: [
      { value: '10x', label: 'Faster' },
      { value: '0', label: 'Human Error' },
      { value: '24/7', label: 'Execution' },
      { value: 'Custom', label: 'Workflows' },
    ],
    features: [
      {
        number: '01',
        title: 'Workflow Orchestration',
        desc: 'Connect your apps (Slack, Gmail, CRM, etc.) and automate complex multi-step processes triggered by real-world events.',
        items: ['Zapier / Make.com integration', 'Custom API webhooks', 'Multi-app sync', 'Conditional logic flows'],
      },
      {
        number: '02',
        title: 'AI Data Processing',
        desc: 'Automatically extract information from emails, documents, or websites using LLMs to structure and store data.',
        items: ['OCR & Document parsing', 'Sentiment analysis', 'Email auto-categorization', 'Data enrichment'],
      },
      {
        number: '03',
        title: 'Content Automation',
        desc: 'Generate reports, social media posts, or personalized emails at scale based on your live business data.',
        items: ['Dynamic report generation', 'Automated social posting', 'Personalized outreach', 'Image generation APIs'],
      },
      {
        number: '04',
        title: 'Custom AI Agents',
        desc: 'Bespoke agents designed for specific tasks like inventory forecasting, customer support triaging, or market research.',
        items: ['Task-specific agents', 'Self-healing workflows', 'Human-in-the-loop steps', 'Performance monitoring'],
      },
    ],
    steps: [
      { number: '01', title: 'Identify', desc: 'We audit your manual workflows to find the highest-impact areas for automation.' },
      { number: '02', title: 'Design', desc: 'We map out the logic, tool integrations, and AI prompts required for the automation.' },
      { number: '03', title: 'Deploy', desc: 'We build and test the workflow in a staging environment before going live.' },
      { number: '04', title: 'Scale', desc: 'Monitor execution, refine prompts, and add new capabilities as your needs grow.' },
    ],
    cta: 'Automate Your Business',
    emailSubject: 'AI Automations Inquiry',
  },
];

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ plan: '', emailSubject: '' });

  const openModal = (plan, emailSubject) => {
    setModalData({ plan, emailSubject });
    setModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  const currentProduct = activeTab > 0 ? GENERIC_PRODUCTS[activeTab - 1] : null;

  return (
    <div className="product-page">
      {/* ── Fixed nav: back link + tab pills ── */}
      <nav className="product-nav">
        <Link to="/" className="product-nav__back">
          <ArrowLeft size={15} />
          <span>Webfluence</span>
        </Link>
        <div className="product-nav__divider" />
        <div className="product-nav__tabs">
          {TABS.map((tab, i) => {
            const { Icon } = tab;
            return (
              <button
                key={tab.id}
                className={`product-nav__tab${activeTab === i ? ' active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <Icon size={13} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── Tab content ── */}
      <AnimatePresence mode="wait">
        {activeTab === 0 ? (
          <motion.div
            key="lead-manager"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ProductHero />

            <section className="product-about">
              <div className="container">
                <div className="product-about__inner">
                  <motion.span
                    className="product-about__label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    The Problem We Solve
                  </motion.span>
                  <ScrollRevealText
                    className="product-about__text"
                    text="B2B sales teams worldwide waste hours every day manually searching for leads on Google, verifying contact details one by one, and writing the same outreach message over and over again. The Agentic Lead Manager eliminates all of that — it runs overnight, scores intelligently with Claude AI, and hands you a ranked shortlist every single morning, ready to act on."
                  />
                </div>
              </div>
            </section>

            <ProductFeatures />
            <HowItWorks />
            <Pricing />

            <section className="product-final-cta">
              <div className="container">
                <motion.div
                  className="product-final-cta__inner"
                  initial={{ opacity: 0, y: 40, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="product-final-cta__label">Ready to automate?</span>
                  <h2 className="product-final-cta__title">
                    Start closing leads while you sleep.
                  </h2>
                  <p className="product-final-cta__sub">
                    Get set up in under 30 minutes. Our team handles onboarding end-to-end.
                  </p>
                  <div className="product-final-cta__btns">
                    <button
                      className="product-final-cta__btn product-final-cta__btn--primary"
                      onClick={() => openModal('Agentic Lead Manager', 'Agentic Lead Manager Inquiry')}
                    >
                      Get Started Today
                    </button>
                    <a href="#pricing" className="product-final-cta__btn product-final-cta__btn--ghost">
                      See Pricing
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key={TABS[activeTab].id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GenericProduct
              product={currentProduct}
              onContact={() => openModal(currentProduct.headline, currentProduct.emailSubject)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Minimal footer ── */}
      <footer className="product-footer">
        <div className="container">
          <div className="product-footer__inner">
            <span className="product-footer__brand">
              <span className="wf-italic">Wf</span> Webfluence
            </span>
            <p className="product-footer__copy">© 2026 Webfluence. All rights reserved.</p>
            <Link to="/" className="product-footer__link">Main Site</Link>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        plan={modalData.plan}
        emailSubject={modalData.emailSubject}
      />
    </div>
  );
};

export default ProductPage;
