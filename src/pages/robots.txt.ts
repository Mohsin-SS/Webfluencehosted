import type { APIRoute } from 'astro';
import { SITE_URL } from '@/data/business';

// Allow all crawlers everywhere and point them at the sitemap.
const getRobotsTxt = () => `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

export const GET: APIRoute = () => {
  return new Response(getRobotsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
