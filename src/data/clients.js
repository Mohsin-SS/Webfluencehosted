// Clients we've delivered work for
export const clients = [
  {
    name: 'Times Consultant',
    initials: 'TC',
    logo: '/Timesconsultant.jpeg',
    industry: 'Education Consultancy',
    services: ['CRM Integration', 'Listener Service'],
    summary:
      'Integrated a Listener Service with their CRM to capture, route, and act on every inbound lead in real time.',
  },
  {
    name: 'Education Links',
    initials: 'EL',
    logo: '/educationlinks.png',
    industry: 'Education',
    services: ['CRM', 'Website', 'WhatsApp Automation', 'Appointment Chatbot'],
    summary:
      'Delivered an end-to-end stack — custom CRM, marketing website, and a WhatsApp appointment-booking chatbot connected to their pipeline.',
  },
  {
    name: 'Property Linkers',
    initials: 'PL',
    logo: '/propertylinker.jpeg',
    industry: 'Real Estate',
    services: [
      'Social Media Marketing',
      'Social Media Management',
      'Graphic Design',
      'AI Video Generation',
      'WhatsApp Campaign Automation',
    ],
    summary:
      'Full-stack marketing engine — paid social, organic management, branded creative, AI-generated property videos, and automated WhatsApp campaigns.',
  },
  {
    name: 'Corporate Tower',
    initials: 'CT',
    logo: '/corporatetower.jpeg',
    industry: 'Commercial Real Estate',
    services: ['Website', 'Social Media Marketing', 'Social Media Management', 'Graphic Design'],
    summary:
      'Built the brand presence from the ground up — corporate website, ongoing social campaigns, and a unified visual identity.',
  },
  {
    name: 'AHM Developers',
    initials: 'AHM',
    logo: '/ahm.jpeg',
    industry: 'Property Development',
    services: ['Web Development', 'Social Media Marketing', 'Social Media Management'],
    summary:
      'Designed and shipped a high-conversion development website backed by an always-on social marketing engine.',
  },
];

// Featured projects / case studies
export const featuredProjects = [
  {
    name: 'AI-Powered Healthcare Monitor',
    category: 'AI · Mobile · RAG',
    summary:
      'Flutter mobile app with medication-reminder workflows, Claude/OpenAI-driven health insights, and a pgvector-backed RAG retrieval pipeline.',
    highlights: [
      '100+ MVP users on Flutter app with medication reminder flows',
      'RAG pipeline using pgvector for semantic retrieval',
      'OpenAI APIs generating contextual health insights',
      'PostgreSQL schema with vector indexing strategy',
      'Redis caching layer for fast AI responses',
      'Linux backend deployed via Nginx + PM2',
    ],
  },
  {
    name: 'Workflow Automation Platform',
    category: 'SaaS · DevOps · Integrations',
    summary:
      'A visual no-code workflow builder powering 1,000+ concurrent executions with first-class connectors for Shopify, HubSpot, Slack, and Email.',
    highlights: [
      'Visual workflow builder powered by React Flow',
      'Backend scaled to 1,000+ concurrent executions',
      'Connectors for Shopify, HubSpot, Slack, Email',
      'Dockerised backend on AWS Elastic Beanstalk',
      'Static frontend on AWS S3 with custom domain',
    ],
  },
  {
    name: 'Voice AI Appointment Bot',
    category: 'Voice AI · Conversational',
    summary:
      'A voice-first conversational agent that handles inbound and outbound appointment scheduling end-to-end, with full data persistence.',
    highlights: [
      'Voice-based conversational AI for appointment scheduling',
      'Vapi voice API integrated with persistent backend storage',
    ],
  },
  {
    name: 'Textile ERP System',
    category: 'ERP · Manufacturing',
    summary:
      'A bespoke ERP built around textile production — planning, execution, and reporting unified across the floor.',
    highlights: [
      'ERP planning module covering production scheduling',
      'Production tracking from raw material to finished goods',
      'Custom-fit to the client’s textile workflow',
    ],
  },
  {
    name: 'Dataflourmills Website',
    category: 'Website · Industrial',
    summary:
      'A modern brand website for an industrial flour-mill operation — built for credibility, performance, and lead capture.',
    highlights: [
      'Brand-led marketing site',
      'Performance-tuned for fast load + SEO',
      'Lead capture wired to client workflow',
    ],
  },
];
