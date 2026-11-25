import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build, loadEnv } from 'vite';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const ssrDir = join(root, '.ssr');
const env = { ...loadEnv('production', root, ''), ...process.env };

const DEFAULT_SITE_URL = 'https://kesavgramvikassamiti.com';

function resolveSiteUrl() {
  const raw = env.SITE_URL || DEFAULT_SITE_URL;
  const url = new URL(raw);
  if (url.protocol !== 'https:') throw new Error(`SITE_URL must use https: ${raw}`);
  return url.origin;
}

const siteUrl = resolveSiteUrl();
const verification = env.GOOGLE_SITE_VERIFICATION || 'd2_L4sIkEYPkxoJ6PrOLEsnFp9Mo4PX8b8RUne3c9Zk';

await build({ root, logLevel: 'warn' });
await build({ root, logLevel: 'warn', build: { ssr: 'src/entry-server.jsx', outDir: '.ssr', emptyOutDir: true, rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } } } });

const server = await import(pathToFileURL(join(ssrDir, 'entry-server.mjs')).href);
const template = await readFile(join(dist, 'index.html'), 'utf8');

function pageHtml(lang, page) {
  const head = server.seoHead({ siteUrl, lang, page, verification });
  const app = server.renderPage(lang, page);
  const rootAttrs = `id="root" data-lang="${lang}" data-page="${page}"`;
  let html = template
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace(/<!--seo-start-->[\s\S]*<!--seo-end-->/, () => head)
    .replace('<div id="root"></div>', () => `<div ${rootAttrs}>${app}</div>`);
  if (page === 'notfound') html = html.replace(/<script data-route-redirect>[\s\S]*?<\/script>/, '');
  // Keep Google ads off error pages.
  if (page === 'notfound') html = html.replace(/<script[^>]*data-adsense[^>]*><\/script>/, '');
  return html;
}

async function emit(relativePath, content) {
  const file = join(dist, relativePath);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content);
}

for (const lang of server.LANGS) {
  for (const page of server.PAGES) {
    await emit(join(server.pathFor(lang, page).slice(1), 'index.html'), pageHtml(lang, page));
  }
}
await emit('404.html', pageHtml('en', 'notfound'));

if (siteUrl) await emit('sitemap.xml', server.sitemapXml(siteUrl));
await emit('robots.txt', `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ''}`);
await rm(ssrDir, { recursive: true, force: true });

if (siteUrl) console.log(`Prerendered ${server.LANGS.length * server.PAGES.length} pages for ${siteUrl}`);
else console.warn('\nWARNING: SITE_URL is not set. Canonical URLs, share images, structured data and sitemap.xml were skipped.\n');
