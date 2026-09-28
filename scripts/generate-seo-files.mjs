/**
 * Generates robots.txt and sitemap.xml after the static build.
 *
 * Routes are derived from the HTML files vite-react-ssg actually emitted, so
 * the sitemap can never list a URL that wasn't prerendered.
 */
import { readdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE_URL = 'https://mohithn.dev';
const BUILD_DIR = 'build';

const routes = readdirSync(BUILD_DIR)
  .filter((f) => f.endsWith('.html'))
  .map((f) => (f === 'index.html' ? '/' : `/${f.replace(/\.html$/, '')}`))
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

/**
 * react-helmet injects the per-route tags at the top of <head>, which pushes
 * the charset declaration past the 1024-byte mark browsers use to sniff the
 * encoding. Hoist it back to the first position in <head>.
 */
const CHARSET_RE = /\s*<meta charset="[^"]*"\s*\/?>/i;
for (const file of readdirSync(BUILD_DIR).filter((f) => f.endsWith('.html'))) {
  const path = join(BUILD_DIR, file);
  const html = readFileSync(path, 'utf8');
  const match = html.match(CHARSET_RE);
  if (!match) continue;
  const hoisted = html.replace(CHARSET_RE, '').replace(/<head>/i, '<head><meta charset="UTF-8">');
  writeFileSync(path, hoisted);
  const offset = hoisted.indexOf('charset');
  console.log(`[seo] ${file}: charset hoisted to byte ${offset}`);
}

const lastmod = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(join(BUILD_DIR, 'sitemap.xml'), sitemap);
writeFileSync(join(BUILD_DIR, 'robots.txt'), robots);

console.log(`[seo] sitemap.xml written with ${routes.length} routes: ${routes.join(', ')}`);
console.log('[seo] robots.txt written');
