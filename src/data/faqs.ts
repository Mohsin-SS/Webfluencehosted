// Question-and-answer content for the FAQ sections and FAQPage schema.
//
// Rules for anything added here (this is what AI assistants quote):
// - Write the question the way a customer would type it into ChatGPT/Google.
// - The first sentence of the answer must answer it completely on its own.
// - Only state facts that are true and shown elsewhere on the site
//   (services, case-study numbers, contact details). No invented figures.

import type { Faq } from '@/data/schema';
import { business, addressLine } from '@/data/business';

const contactLine = `email ${business.email}, call ${business.phone}, or use the contact form at webfluence.tech/contact`;

export const faqs: Record<string, Faq[]> = {
  home: [
    {
      question: 'What does Webfluence do?',
      answer:
        'Webfluence is a performance marketing and software development company in Lahore, Pakistan. Its main services, in order, are performance marketing (Google Ads and Meta Ads), creative and social media content, software development (ERP, CRM, mobile apps and WhatsApp chatbots), web development and SEO, for businesses in Pakistan and abroad.',
    },
    {
      question: 'Where is Webfluence located?',
      answer: `Webfluence is based at ${addressLine}. The team works with clients across Pakistan and internationally, in English and Urdu.`,
    },
    {
      question: 'Which businesses has Webfluence worked with?',
      answer:
        'Webfluence clients include Times Consultant (an AI CRM and WhatsApp automation for 500+ overseas students), Adoro (ECS) (performance marketing that grew monthly sales by 57%), Education Links, Ghausia Flour Mills and Slap Media, along with The Carology, Latch, Zelvior Official and others. Case studies are on webfluence.tech/work.',
    },
    {
      question: 'How do I start a project with Webfluence?',
      answer: `To start a project, ${contactLine}. Tell the team what you need and they will follow up to discuss scope, timeline and cost.`,
    },
  ],

  erp: [
    {
      question: 'What is a custom ERP system?',
      answer:
        'A custom ERP (enterprise resource planning) system is software built around your own processes that keeps inventory, finance, HR and supply chain data in one place. It replaces separate spreadsheets and disconnected tools with one shared system.',
    },
    {
      question: 'What can a Webfluence ERP include?',
      answer:
        'A Webfluence ERP can cover inventory, finance, HR and supply chain in one system. It centralises your business data, automates repetitive work across departments, and tracks stock, financials and project resources in real time.',
    },
    {
      question: 'Does Webfluence build ERP systems outside Lahore?',
      answer:
        'Yes. Webfluence is based in Lahore and builds ERP systems for businesses across Pakistan and internationally.',
    },
  ],

  crm: [
    {
      question: 'What does a custom CRM do?',
      answer:
        'A custom CRM keeps every lead and customer in one place, so your team can track each enquiry through the sales pipeline, automate follow-ups and see sales performance on live dashboards.',
    },
    {
      question: 'Can a Webfluence CRM connect to WhatsApp and my other tools?',
      answer:
        'Yes. Webfluence CRMs integrate with email marketing, accounting and support tools, and with WhatsApp. For Times Consultant, Webfluence connected WhatsApp automation to a CRM that manages 500+ overseas students.',
    },
    {
      question: 'Is there a ready-made CRM for education consultancies?',
      answer:
        'Yes. The Webfluence Education Consultancy CRM manages students, applications, agents and conversions from first inquiry to enrolment. See webfluence.tech/products/education-crm.',
    },
  ],

  'web-development': [
    {
      question: 'What kind of websites does Webfluence build?',
      answer:
        'Webfluence builds business websites, Shopify stores and custom web applications, covering design, frontend and backend. Recent Shopify work includes Latch and Zelvior Official.',
    },
    {
      question: 'Does Webfluence build Shopify stores?',
      answer:
        'Yes. Webfluence rebuilt the Shopify storefront for Latch, works on the Shopify store, checkout and payments for Zelvior Official, and optimises the Shopify store for Adoro (ECS).',
    },
    {
      question: 'Can Webfluence also handle SEO and ads for my new website?',
      answer:
        'Yes. The same team runs SEO, Google Ads and Meta Ads, so the site is built to rank and convert from the start. For Latch, Webfluence connected the new storefront to SEO, Google Ads and Meta Ads.',
    },
  ],

  'mobile-app': [
    {
      question: 'Does Webfluence build apps for both iOS and Android?',
      answer:
        'Yes. Webfluence builds cross-platform mobile apps that run on both iOS and Android, using modern frameworks so one team delivers both.',
    },
    {
      question: 'Does Webfluence design the app as well as build it?',
      answer:
        'Yes. UI/UX design is part of every Webfluence app project, with interfaces made for touch and small screens.',
    },
    {
      question: 'Will Webfluence maintain my app after launch?',
      answer:
        'Yes. Webfluence maintains apps after launch with security updates, bug fixes, compatibility updates and new features.',
    },
  ],

  'whatsapp-chatbot': [
    {
      question: 'What can a WhatsApp chatbot do for my business?',
      answer:
        'A WhatsApp chatbot answers customer questions 24/7, takes orders and handles common requests without a person on the other end. Webfluence chatbots use AI to understand free-text messages and sync every conversation to your CRM.',
    },
    {
      question: 'Has Webfluence built WhatsApp automation for other businesses?',
      answer:
        'Yes. Webfluence built WhatsApp automation and an AI CRM for Times Consultant, an education consultancy handling 500+ overseas students, and WhatsApp automation for Maktron Consultant.',
    },
    {
      question: 'Can the WhatsApp chatbot connect to my CRM?',
      answer:
        'Yes. Webfluence connects WhatsApp chats to your CRM so every conversation is logged against the customer profile.',
    },
  ],

  seo: [
    {
      question: 'What is included in Webfluence SEO services?',
      answer:
        'Webfluence SEO covers on-page SEO, technical SEO and content strategy: page content, structure and meta tags; site speed, mobile-friendliness and crawlability; and content that earns rankings and backlinks.',
    },
    {
      question: 'Does Webfluence do SEO for Shopify and ecommerce stores?',
      answer:
        'Yes. Webfluence runs SEO for ecommerce stores including Adoro (ECS), across collections and product pages, and Latch.',
    },
    {
      question: 'How does Webfluence measure SEO results?',
      answer:
        'Webfluence reports SEO on the leads and sales it brings, not only on rankings, so every channel answers to the same number: what it earned.',
    },
  ],

  'digital-marketing': [
    {
      question: 'Which marketing channels does Webfluence run?',
      answer:
        'Webfluence runs Google Ads, Meta Ads (Facebook and Instagram), SEO, content and creative, managed together and measured on leads and sales.',
    },
    {
      question: 'What results has Webfluence delivered with performance marketing?',
      answer:
        'For Adoro (ECS), Webfluence’s performance marketing grew monthly sales by 57%, store visits by 65%, average order value by 32% and orders by 19%. The full numbers are in the Adoro case study at webfluence.tech/work/adoro.',
    },
    {
      question: 'Does Webfluence set up conversion tracking?',
      answer:
        'Yes. Webfluence builds ad tracking around real purchases. For Adoro (ECS), Google Ads was counting page views as sales; Webfluence rebuilt the tracking around purchases and checks every campaign against Shopify in a daily tracker.',
    },
  ],

  creative: [
    {
      question: 'What creative services does Webfluence offer?',
      answer:
        'Webfluence offers brand identity, UI/UX design and content creation, including graphics, video and copywriting.',
    },
    {
      question: 'Does Webfluence manage social media content?',
      answer:
        'Yes. Webfluence handles social media content from creation to posting for clients such as AHM Developers and Property Linkers.',
    },
  ],

  'construction-price-estimator': [
    {
      question: 'What is the Construction Price Estimator AI?',
      answer:
        'Construction Price Estimator AI is Webfluence software that produces itemised construction cost estimates, covering materials, labour, equipment and overhead, in minutes.',
    },
    {
      question: 'Can the estimator use our own past project data?',
      answer:
        'Yes. The estimator can be trained on your historical project data so its cost predictions reflect how your company actually builds.',
    },
    {
      question: 'How do I try the Construction Price Estimator AI?',
      answer: `Request a demo through webfluence.tech/contact, or ${contactLine}.`,
    },
  ],

  'education-crm': [
    {
      question: 'What is the Webfluence Education Consultancy CRM?',
      answer:
        'The Webfluence Education Consultancy CRM is software for education consultants that manages students, applications, agents and communication in one portal, from first inquiry to enrolment.',
    },
    {
      question: 'Who uses the Education Consultancy CRM?',
      answer:
        'Times Consultant uses a Webfluence-built AI CRM with WhatsApp automation to manage 500+ overseas students. The full story is in the Times Consultant case study at webfluence.tech/work/times-consultant.',
    },
    {
      question: 'Can I see the Education Consultancy CRM before buying?',
      answer:
        'Yes. A live version is at educonsult.webfluence.tech, and you can request a guided demo through webfluence.tech/contact.',
    },
  ],
};
