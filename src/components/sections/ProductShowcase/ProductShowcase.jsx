import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, MessageCircle, Users, Globe, Smartphone, Building2, Check, ArrowRight, Zap, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import WordsPullUp from '../../ui/WordsPullUp';
import './ProductShowcase.css';

const products = [
  {
    id: 'lead-manager',
    tab: 'Agentic Lead Manager',
    badge: 'AI Flagship',
    icon: Brain,
    headline: 'Find, Score & Close B2B Leads — Fully Automated',
    desc: 'Our flagship AI agent scrapes leads from Google Maps, Facebook & directories, scores every prospect 0–100 with Claude AI, and drafts personalised WhatsApp outreach. Your pipeline fills itself.',
    features: [
      'Multi-source scraping (Google Maps, Facebook)',
      'AI lead scoring with reasoning',
      'Auto WhatsApp outreach in Hinglish',
      'Live dashboard served daily at 8 AM',
      'Historical analytics & CSV export',
    ],
    cta: { label: 'Explore Product', to: '/product', isLink: true },
    visual: 'lead',
  },
  {
    id: 'whatsapp-chatbot',
    tab: 'WhatsApp Chatbot',
    badge: 'AI Automation',
    icon: MessageCircle,
    headline: 'Never Miss a Message — AI Replies Instantly, 24/7',
    desc: 'Intelligent chatbots that handle customer queries, capture leads, book appointments, and escalate to humans only when needed — deployed directly on WhatsApp.',
    features: [
      'Instant replies to customer queries',
      'Lead capture & qualification flows',
      'Appointment booking automation',
      'Multi-language & Hinglish support',
      'Seamless human handoff',
    ],
    cta: { label: 'Get a Demo', to: '#contact', isLink: false },
    visual: 'chat',
  },
  {
    id: 'crm',
    tab: 'CRM System',
    badge: 'Sales Tool',
    icon: Users,
    headline: 'Your Entire Sales Pipeline — One Clean Dashboard',
    desc: 'A custom CRM built around your workflow. Track deals, manage contacts, set follow-up reminders, and close more business without juggling spreadsheets.',
    features: [
      'Visual drag-and-drop pipeline',
      'Contact & company management',
      'Follow-up reminders & tasks',
      'Email & WhatsApp integration',
      'Sales analytics & reporting',
    ],
    cta: { label: 'Get a Demo', to: '#contact', isLink: false },
    visual: 'crm',
  },
  {
    id: 'website',
    tab: 'Website Development',
    badge: 'Development',
    icon: Globe,
    headline: 'Fast, Modern Websites That Convert Visitors to Clients',
    desc: 'From landing pages to full-stack web apps, we design and build high-performing websites that load fast, rank on Google, and turn traffic into paying customers.',
    features: [
      'Fully custom design — no templates',
      'Lightning-fast Core Web Vitals',
      'SEO-optimised from day one',
      'Mobile-first responsive design',
      'CMS & admin panel included',
    ],
    cta: { label: 'Start a Project', to: '#contact', isLink: false },
    visual: 'web',
  },
  {
    id: 'mobile-app',
    tab: 'Mobile App',
    badge: 'Development',
    icon: Smartphone,
    headline: 'iOS & Android Apps That Users Actually Love',
    desc: 'Native and cross-platform mobile apps built for speed and usability. From MVP to enterprise-grade, we take your idea from wireframe to the App Store.',
    features: [
      'iOS & Android (React Native / Flutter)',
      'Intuitive UX with custom UI design',
      'Push notifications & analytics',
      'Payment & third-party integrations',
      'App Store submission support',
    ],
    cta: { label: 'Discuss Your App', to: '#contact', isLink: false },
    visual: 'mobile',
  },
  {
    id: 'erp',
    tab: 'ERP System',
    badge: 'Enterprise',
    icon: Building2,
    headline: 'Run Your Entire Business From One Unified Platform',
    desc: 'Custom ERP solutions that unify inventory, HR, finance, procurement, and operations — eliminating silos and giving leadership real-time visibility across the company.',
    features: [
      'Inventory & supply chain management',
      'HR & payroll module',
      'Finance & accounting dashboard',
      'Purchase orders & procurement',
      'Role-based access & reporting',
    ],
    cta: { label: 'Schedule a Call', to: '#contact', isLink: false },
    visual: 'erp',
  },
  {
    id: 'ai-automations',
    tab: 'AI Automations',
    badge: 'Efficiency',
    icon: Zap,
    headline: 'Eliminate Repetitive Tasks with Intelligent Workflows',
    desc: 'We build custom AI automations that connect your tools and handle data entry, report generation, and lead processing — saving your team hundreds of hours every month.',
    features: [
      'Multi-app workflow orchestration',
      'AI-powered document processing',
      'Automated data entry & syncing',
      'Custom GPT-based agents',
      'Real-time error handling & logs',
    ],
    cta: { label: 'Automate Now', to: '#contact', isLink: false },
    visual: 'automation',
  },
];

/* ─── Visuals ─────────────────────────────────────────────────────────── */

const LeadVisual = () => (
  <div className="ps-visual ps-visual--lead">
    <div className="ps-visual__header">
      <span className="ps-visual__dot ps-visual__dot--green" />
      <span className="ps-visual__dot ps-visual__dot--yellow" />
      <span className="ps-visual__dot ps-visual__dot--red" />
      <span className="ps-visual__title-bar">Today's Leads — 34 new</span>
    </div>
    {[
      { name: 'Zara Textiles Ltd.', city: 'Lahore', score: 91, temp: 'Hot' },
      { name: 'AlphaFoods Co.', city: 'Karachi', score: 74, temp: 'Warm' },
      { name: 'Metro Supplies', city: 'Islamabad', score: 48, temp: 'Cold' },
    ].map((lead, i) => (
      <motion.div
        key={lead.name}
        className="ps-lead-row"
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.12, duration: 0.45 }}
      >
        <div className="ps-lead-row__info">
          <span className="ps-lead-row__name">{lead.name}</span>
          <span className="ps-lead-row__city">{lead.city}</span>
        </div>
        <div className={`ps-lead-row__temp ps-lead-row__temp--${lead.temp.toLowerCase()}`}>{lead.temp}</div>
        <div className="ps-lead-row__score">{lead.score}</div>
      </motion.div>
    ))}
    <div className="ps-visual__bar-row">
      {[91, 74, 48, 85, 62, 38, 77].map((v, i) => (
        <motion.div
          key={i}
          className="ps-bar"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
          style={{ height: `${v * 0.55}px` }}
        />
      ))}
    </div>
  </div>
);

const ChatVisual = () => (
  <div className="ps-visual ps-visual--chat">
    <div className="ps-chat__header">
      <div className="ps-chat__avatar">WB</div>
      <div>
        <div className="ps-chat__name">Webfluence Bot</div>
        <div className="ps-chat__status">● Online</div>
      </div>
    </div>
    {[
      { from: 'bot', text: 'Hi! How can I help you today? 👋' },
      { from: 'user', text: 'I need a quote for a website.' },
      { from: 'bot', text: "Sure! What type of site? (Landing page / E-commerce / Custom web app)" },
      { from: 'user', text: 'E-commerce for clothing.' },
      { from: 'bot', text: "Great choice! Let me get your details and we'll send a proposal within 2 hours." },
    ].map((msg, i) => (
      <motion.div
        key={i}
        className={`ps-bubble ps-bubble--${msg.from}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.15, duration: 0.35 }}
      >
        {msg.text}
      </motion.div>
    ))}
  </div>
);

const CrmVisual = () => (
  <div className="ps-visual ps-visual--crm">
    {[
      { col: 'Prospects', color: '#3B82F6', deals: ['Zara Textiles', 'Metro Foods'] },
      { col: 'In Discussion', color: '#8B5CF6', deals: ['AlphaFoods Co.'] },
      { col: 'Closed', color: '#22C55E', deals: ['TechParts Ltd.', 'SwiftLogix'] },
    ].map((col, ci) => (
      <div key={col.col} className="ps-crm-col">
        <div className="ps-crm-col__header" style={{ color: col.color }}>
          <span className="ps-crm-dot" style={{ background: col.color }} />
          {col.col}
        </div>
        {col.deals.map((deal, di) => (
          <motion.div
            key={deal}
            className="ps-crm-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.15 + di * 0.1, duration: 0.4 }}
          >
            {deal}
          </motion.div>
        ))}
      </div>
    ))}
  </div>
);

const WebVisual = () => (
  <div className="ps-visual ps-visual--web">
    <div className="ps-browser__chrome">
      <span className="ps-visual__dot ps-visual__dot--red" />
      <span className="ps-visual__dot ps-visual__dot--yellow" />
      <span className="ps-visual__dot ps-visual__dot--green" />
      <div className="ps-browser__url">webfluence.ai</div>
    </div>
    <div className="ps-browser__body">
      <motion.div className="ps-web-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <div className="ps-web-hero__badge" />
        <div className="ps-web-hero__h1" />
        <div className="ps-web-hero__h1 ps-web-hero__h1--short" />
        <div className="ps-web-hero__sub" />
        <div className="ps-web-hero__btns">
          <div className="ps-web-btn ps-web-btn--primary" />
          <div className="ps-web-btn" />
        </div>
      </motion.div>
      <div className="ps-web-cards">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="ps-web-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.1 }}
          />
        ))}
      </div>
    </div>
  </div>
);

const MobileVisual = () => (
  <div className="ps-visual ps-visual--mobile">
    <div className="ps-phone">
      <div className="ps-phone__notch" />
      <div className="ps-phone__screen">
        <div className="ps-app-bar">
          <div className="ps-app-bar__icon" />
          <div className="ps-app-bar__title" />
        </div>
        <div className="ps-app-banner" />
        <div className="ps-app-grid">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="ps-app-tile"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
            />
          ))}
        </div>
        <div className="ps-app-list">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="ps-app-row"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 + i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ErpVisual = () => (
  <div className="ps-visual ps-visual--erp">
    <div className="ps-erp-grid">
      {[
        { label: 'Revenue', value: '₨4.2M', delta: '+18%', up: true },
        { label: 'Orders', value: '1,284', delta: '+24%', up: true },
        { label: 'Employees', value: '86', delta: '0%', up: null },
        { label: 'Inventory', value: '3,940', delta: '-3%', up: false },
      ].map((m, i) => (
        <motion.div
          key={m.label}
          className="ps-erp-metric"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        >
          <span className="ps-erp-metric__label">{m.label}</span>
          <span className="ps-erp-metric__value">{m.value}</span>
          <span className={`ps-erp-metric__delta ${m.up === true ? 'up' : m.up === false ? 'down' : ''}`}>{m.delta}</span>
        </motion.div>
      ))}
    </div>
    <div className="ps-erp-chart">
      {[55, 72, 61, 88, 74, 95, 83].map((h, i) => (
        <motion.div
          key={i}
          className="ps-erp-bar"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4 + i * 0.07, duration: 0.45, ease: 'easeOut' }}
          style={{ '--h': `${h}%` }}
        />
      ))}
    </div>
    <div className="ps-erp-modules">
      {['Inventory', 'HR', 'Finance', 'Procurement'].map((mod, i) => (
        <motion.span
          key={mod}
          className="ps-erp-module"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 + i * 0.08 }}
        >
          {mod}
        </motion.span>
      ))}
    </div>
  </div>
);

const AutomationVisual = () => (
  <div className="ps-visual ps-visual--automation">
    <div className="ps-automation-nodes">
      <motion.div 
        className="ps-node ps-node--trigger"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="ps-node__icon"><Cpu size={14} /></div>
        <div className="ps-node__label">Trigger: New Lead</div>
      </motion.div>

      <div className="ps-node-connector">
        <motion.div 
          className="ps-node-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        />
      </div>

      <motion.div 
        className="ps-node ps-node--action"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="ps-node__icon"><Brain size={14} /></div>
        <div className="ps-node__label">AI Scoring...</div>
      </motion.div>

      <div className="ps-node-connector">
        <motion.div 
          className="ps-node-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        />
      </div>

      <motion.div 
        className="ps-node ps-node--success"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="ps-node__icon"><Check size={14} /></div>
        <div className="ps-node__label">CRM Updated</div>
      </motion.div>
    </div>
    
    <div className="ps-automation-log">
      <div className="ps-log-header">Workflow Execution Log</div>
      {[
        { time: '14:20:01', msg: 'Checking inbox...', status: 'info' },
        { time: '14:20:05', msg: 'New lead detected!', status: 'success' },
        { time: '14:20:07', msg: 'Claude AI scoring: 92/100', status: 'ai' },
        { time: '14:20:10', msg: 'Drafting response...', status: 'info' },
      ].map((log, i) => (
        <motion.div 
          key={i} 
          className={`ps-log-entry ps-log-entry--${log.status}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 + i * 0.2 }}
        >
          <span className="ps-log-time">[{log.time}]</span> {log.msg}
        </motion.div>
      ))}
    </div>
  </div>
);

const visuals = {
  lead: LeadVisual,
  chat: ChatVisual,
  crm: CrmVisual,
  web: WebVisual,
  mobile: MobileVisual,
  erp: ErpVisual,
  automation: AutomationVisual,
};

/* ─── Main component ──────────────────────────────────────────────────── */

const panelVariants = {
  enter: { opacity: 0, y: 18, scale: 0.98 },
  center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.25 } },
};

const ProductShowcase = () => {
  const [active, setActive] = useState(0);
  const product = products[active];
  const Visual = visuals[product.visual];
  const Icon = product.icon;

  return (
    <section className="product-showcase" id="products">
      <div className="container">
        {/* Header */}
        <div className="ps-header">
          <motion.span
            className="ps-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.span>
          <h2 className="ps-title">
            <WordsPullUp text="Everything you need to" delay={0.05} />
            <br />
            <WordsPullUp
              text="build, automate & scale."
              style={{ color: 'var(--primary-accent-2, #8B5CF6)' }}
              delay={0.2}
            />
          </h2>
        </div>

        {/* Tab bar */}
        <div className="ps-tabs-wrap">
          <div className="ps-tabs">
            {products.map((p, i) => {
              const TabIcon = p.icon;
              return (
                <button
                  key={p.id}
                  className={`ps-tab ${i === active ? 'ps-tab--active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <TabIcon size={14} strokeWidth={2} />
                  {p.tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            className="ps-panel"
            variants={panelVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Left: text */}
            <div className="ps-panel__text">
              <span className="ps-panel__badge">{product.badge}</span>
              <h3 className="ps-panel__headline">{product.headline}</h3>
              <p className="ps-panel__desc">{product.desc}</p>
              <ul className="ps-panel__features">
                {product.features.map((f) => (
                  <li key={f} className="ps-panel__feature">
                    <Check size={14} strokeWidth={2.5} className="ps-panel__check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="ps-panel__cta-row">
                {product.cta.isLink ? (
                  <Link to={product.cta.to} className="ps-panel__cta">
                    {product.cta.label}
                    <ArrowRight size={15} />
                  </Link>
                ) : (
                  <a href={product.cta.to} className="ps-panel__cta">
                    {product.cta.label}
                    <ArrowRight size={15} />
                  </a>
                )}
              </div>
            </div>

            {/* Right: visual */}
            <div className="ps-panel__visual">
              <Visual />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductShowcase;
