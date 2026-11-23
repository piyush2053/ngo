import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { LanguageProvider } from './i18n.jsx';

export { LANGS, PAGES, pathFor, seoHead, sitemapXml } from './seo.js';

export function renderPage(lang, page) {
  return renderToString(<LanguageProvider lang={lang} page={page}><App/></LanguageProvider>);
}
