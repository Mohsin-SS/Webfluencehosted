import type { APIRoute } from 'astro';
import { business, addressLine, SITE_URL } from '@/data/business';
import {
  softwareServices,
  marketingServices,
  products,
  caseStudies,
  clients,
} from '@/data/site';
import { faqs } from '@/data/faqs';

// /llms.txt: a plain-text summary of the business for AI assistants
// (https://llmstxt.org). Built from the same data as the site, so it never
// drifts from what the pages say.
const link = (title: string, href: string, note: string) =>
  `- [${title}](${SITE_URL}${href}): ${note}`;

const body = `# ${business.name}

> ${business.description}

- Business name: ${business.name}
- Website: ${SITE_URL}
- Address: ${addressLine}
- Phone: ${business.phone}
- Email: ${business.email}
- Languages: English, Urdu
- Serves: Lahore, all of Pakistan, and international clients

Main services, in priority order: performance marketing, creative and media
content, software development, web development, SEO.

## Marketing services

${marketingServices.map(s => link(s.title, s.href, s.description)).join('\n')}

## Software services

${softwareServices.map(s => link(s.title, s.href, s.description)).join('\n')}

## Products

${products.map(s => link(s.title, s.href, s.description)).join('\n')}

## Clients

${clients.map(c => `- ${c.name}`).join('\n')}

## Case studies

${caseStudies.map(c => link(c.client, c.href, c.title)).join('\n')}

## Frequently asked questions

${faqs.home.map(f => `### ${f.question}\n\n${f.answer}`).join('\n\n')}

## Company

${link('About', '/about', 'Who Webfluence is and what the team does')}
${link('Contact', '/contact', 'Start a project or request a demo')}
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
