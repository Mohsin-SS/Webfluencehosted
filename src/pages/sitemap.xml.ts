import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { canonicalUrl } from '@/data/business';

// Builds /sitemap.xml from the page files in src/pages, plus any support
// articles and reference docs. Left out: the 404 page, dynamic route
// templates (their real URLs are added from the collections below), and the
// /case-studies/* pages, which duplicate /work/* and canonicalise to it.
const pageFiles = Object.keys(import.meta.glob('./**/*.astro'));

const EXCLUDE = [/^\/404$/, /\[/, /^\/case-studies\//];

function pathFromFile(file: string): string {
  const path = file
    .replace(/^\.\//, '/')
    .replace(/\.astro$/, '')
    .replace(/\/index$/, '/');
  return path === '' ? '/' : path;
}

async function collectionPaths(
  name: 'articles' | 'reference',
  base: string
): Promise<string[]> {
  try {
    const entries = await getCollection(name);
    return entries.map(entry => `${base}/${entry.id}`);
  } catch {
    return [];
  }
}

export const GET: APIRoute = async () => {
  const staticPaths = pageFiles
    .map(pathFromFile)
    .filter(path => !EXCLUDE.some(rule => rule.test(path)));

  const paths = [
    ...staticPaths,
    ...(await collectionPaths('articles', '/support/articles')),
    ...(await collectionPaths('reference', '/support/reference')),
  ];

  const urls = [...new Set(paths.map(canonicalUrl))].sort((a, b) => {
    // Homepage first, then alphabetical.
    if (a.endsWith('.tech/')) return -1;
    if (b.endsWith('.tech/')) return 1;
    return a.localeCompare(b);
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
