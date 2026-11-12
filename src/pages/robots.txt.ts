import type { APIRoute } from 'astro';
import { SITE_URL } from '@/data/business';

// Every crawler may read every page. `User-agent: *` already covers them, but
// the search and AI crawlers are also named one by one so it is explicit that
// ChatGPT, Perplexity, Claude, Gemini, Bing/Copilot and Apple can all read
// and cite the site. A crawler obeys only the most specific group that names
// it, so each named group repeats `Allow: /`.
const AI_AND_SEARCH_CRAWLERS = [
  // OpenAI: ChatGPT search, user-triggered fetches, training
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Anthropic (Claude)
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  // Google Search and Gemini
  'Googlebot',
  'Google-Extended',
  // Microsoft Bing and Copilot
  'Bingbot',
  // Apple (Siri, Spotlight, Apple Intelligence)
  'Applebot',
  'Applebot-Extended',
  // Others that feed AI answers
  'DuckAssistBot',
  'Meta-ExternalAgent',
  'Amazonbot',
  'MistralAI-User',
  'cohere-ai',
  'YouBot',
];

const getRobotsTxt = () => `${AI_AND_SEARCH_CRAWLERS.map(
  bot => `User-agent: ${bot}\nAllow: /\n`
).join('\n')}
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

export const GET: APIRoute = () => {
  return new Response(getRobotsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
