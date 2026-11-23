import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import { LanguageProvider } from './i18n.jsx';
import { parseRoute } from './seo.js';
import './style.css';

const container = document.getElementById('root');
const { lang, page } = container.dataset.page ? container.dataset : parseRoute(location.pathname);
const app = <LanguageProvider lang={lang} page={page}><App/></LanguageProvider>;

if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
