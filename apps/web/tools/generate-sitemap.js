#!/usr/bin/env node
// Generates public/sitemap.xml for Hostinger deployment.
// Covers all 8 language prefixes, core pages, and every blog article slug.
// Usage: SITE_URL=https://example.com node tools/generate-sitemap.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = (process.env.SITE_URL || 'https://example.com').replace(/\/+$/, '');
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const SRC = path.resolve(__dirname, '../src/data/blogData.js');

const LANGS = ['en', 'zh', 'zh-TW', 'ja', 'es', 'fr', 'de', 'ko'];
const STATIC_ROUTES = ['', 'about', 'contact', 'faq', 'guide', 'blog', 'privacy', 'terms', 'disclaimer'];
const SLUG_PREFIX = { en: '', zh: 'zh-', 'zh-TW': 'zhtw-', es: 'es-', fr: 'fr-', de: 'de-', ja: 'ja-', ko: 'ko-' };

function readSlugs() {
  const src = fs.readFileSync(SRC, 'utf-8');
  const slugs = new Set();
  for (const m of src.matchAll(/slugBase:\s*'([^']+)'/g)) slugs.add(m[1]);
  return [...slugs];
}

function url(loc, lastmod, changefreq = 'weekly', priority = '0.7') {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

const today = new Date().toISOString().slice(0, 10);
const urls = [];
for (const lang of LANGS) {
  for (const route of STATIC_ROUTES) {
    const loc = `${SITE_URL}/${lang}${route ? `/${route}` : ''}`;
    urls.push(url(loc, today, route === '' ? 'daily' : 'weekly', route === '' ? '1.0' : '0.8'));
  }
  for (const slug of readSlugs()) {
    urls.push(url(`${SITE_URL}/${lang}/blog/${SLUG_PREFIX[lang]}${slug}`, today, 'monthly', '0.6'));
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
console.log(`sitemap.xml written: ${urls.length} urls -> ${SITE_URL}`);

// Keep robots.txt sitemap pointer in sync with the real domain
const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf-8')
    .replace(/^Sitemap:.*$/m, `Sitemap: ${SITE_URL}/sitemap.xml`);
  fs.writeFileSync(robotsPath, robots);
  console.log(`robots.txt sitemap -> ${SITE_URL}/sitemap.xml`);
}
