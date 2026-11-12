// Tells Bing (and Copilot, which reads Bing's index), Yandex, Seznam and
// other IndexNow engines that the site's pages have changed, so they recrawl
// now instead of whenever they next get round to it.
//
// Run AFTER a deploy is live:   npm run indexnow
//
// The key below is public by design: IndexNow checks it against
// https://www.webfluence.tech/<key>.txt (public/<key>.txt in this repo).

const SITE = 'https://www.webfluence.tech';
const KEY = '8bfc981c2393387a7d09290944ccf86d';

const sitemap = await fetch(`${SITE}/sitemap.xml`).then(r => {
  if (!r.ok) throw new Error(`sitemap.xml returned ${r.status}`);
  return r.text();
});
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
if (urlList.length === 0) throw new Error('No URLs found in sitemap.xml');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});

// 200 = accepted, 202 = accepted (key check pending).
console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
if (res.status >= 300) {
  console.error(await res.text());
  process.exit(1);
}
