import { CONTACT } from './contact.js';

export const PAGES = ['home', 'about', 'donate', 'contact', 'privacy'];
export const LANGS = ['en', 'hi'];

const PAGE_PATHS = { home: '', about: 'about/', donate: 'donate/', contact: 'contact/', privacy: 'privacy/' };

export function pathFor(lang, page) {
  return `${lang === 'hi' ? '/hi/' : '/'}${PAGE_PATHS[page] ?? ''}`;
}

export function parseRoute(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  const lang = parts[0] === 'hi' ? 'hi' : 'en';
  if (lang === 'hi') parts.shift();
  if (parts.length === 0) return { lang, page: 'home' };
  if (parts.length === 1 && PAGES.includes(parts[0]) && parts[0] !== 'home') return { lang, page: parts[0] };
  return { lang, page: 'notfound' };
}

const ORG = { en: 'Keshav Gram Vikas Samiti', hi: 'केशव ग्राम विकास समिति' };
const DISTRICTS = ['Indore', 'Narsinghpur'];

const COPY = {
  en: {
    home: { name: 'Home', title: 'Keshav Gram Vikas Samiti | NGO in Madhya Pradesh', description: 'Registered NGO in Madhya Pradesh, operating in Indore and Narsinghpur, serving since 2012 through Gaushala seva, education, skills and rural development.' },
    about: { name: 'About Us', title: 'About Us | Keshav Gram Vikas Samiti, Madhya Pradesh', description: 'Registered society in Madhya Pradesh, operating in Indore and Narsinghpur since 2012 on rural development, education, women’s empowerment and health.' },
    donate: { name: 'Donations', title: 'Support Gaushala Seva | Keshav Gram Vikas Samiti', description: 'Support cow care, education and rural development with Keshav Gram Vikas Samiti in Madhya Pradesh. Online payments are not active yet.' },
    contact: { name: 'Contact', title: 'Contact Us | Keshav Gram Vikas Samiti, Madhya Pradesh', description: 'Contact Keshav Gram Vikas Samiti, an NGO in Madhya Pradesh operating in Indore and Narsinghpur, about Gaushala seva, sponsorship, volunteering, vocational training and our rural work.' },
    privacy: { name: 'Privacy Policy', title: 'Privacy Policy | Keshav Gram Vikas Samiti', description: 'Read how the Keshav Gram Vikas Samiti website uses browser storage, hosting logs, Google Fonts and cookies, and how to contact us about privacy.' },
    notfound: { name: 'Page not found', title: 'Page not found | Keshav Gram Vikas Samiti', description: 'This page could not be found.' },
  },
  hi: {
    home: { name: 'मुख्य पृष्ठ', title: 'केशव ग्राम विकास समिति | मध्य प्रदेश की एनजीओ', description: 'मध्य प्रदेश की पंजीकृत एनजीओ, जो इंदौर और नरसिंहपुर में 2012 से गौशाला सेवा, शिक्षा, कौशल प्रशिक्षण और ग्रामीण विकास के माध्यम से सेवा कर रही है।' },
    about: { name: 'हमारे बारे में', title: 'हमारे बारे में | केशव ग्राम विकास समिति, मध्य प्रदेश', description: 'केशव ग्राम विकास समिति के बारे में जानें, जो 2012 से मध्य प्रदेश के इंदौर और नरसिंहपुर में ग्रामीण विकास, शिक्षा, महिला सशक्तिकरण और स्वास्थ्य पर कार्य कर रही है।' },
    donate: { name: 'दान', title: 'गौशाला सेवा में सहयोग करें | केशव ग्राम विकास समिति', description: 'मध्य प्रदेश में गौ सेवा, शिक्षा और ग्रामीण विकास के लिए केशव ग्राम विकास समिति का सहयोग करें। ऑनलाइन भुगतान अभी शुरू नहीं हुआ है।' },
    contact: { name: 'संपर्क', title: 'संपर्क करें | केशव ग्राम विकास समिति, मध्य प्रदेश', description: 'गौशाला सेवा, प्रायोजन, स्वयंसेवा, व्यावसायिक प्रशिक्षण और ग्रामीण कार्यों के लिए मध्य प्रदेश की केशव ग्राम विकास समिति (इंदौर और नरसिंहपुर) से संपर्क करें।' },
    privacy: { name: 'निजता नीति', title: 'निजता नीति | केशव ग्राम विकास समिति', description: 'जानें कि केशव ग्राम विकास समिति की वेबसाइट ब्राउज़र स्टोरेज, होस्टिंग लॉग, Google Fonts और कुकीज़ का उपयोग कैसे करती है।' },
    notfound: { name: 'पृष्ठ नहीं मिला', title: 'पृष्ठ नहीं मिला | केशव ग्राम विकास समिति', description: 'यह पृष्ठ नहीं मिला।' },
  },
};

const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const meta = (key, name, content) => `<meta ${key}="${name}" content="${escapeHtml(content)}"/>`;
const jsonLd = data => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

function structuredData(siteUrl, lang, page, copy, url) {
  const orgId = `${siteUrl}/#organization`;
  const graph = [
    {
      '@type': 'NGO',
      '@id': orgId,
      name: ORG.en,
      alternateName: ORG.hi,
      url: `${siteUrl}/`,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` },
      image: `${siteUrl}/og-en.jpg`,
      foundingDate: '2012',
      ...(CONTACT.phone && { telephone: CONTACT.phone }),
      ...(CONTACT.email && { email: CONTACT.email }),
      description: COPY.en.home.description,
      address: { '@type': 'PostalAddress', addressRegion: 'Madhya Pradesh', addressCountry: 'IN' },
      areaServed: DISTRICTS.map(name => ({ '@type': 'AdministrativeArea', name: `${name}, Madhya Pradesh` })),
      knowsAbout: ['Gaushala Seva', 'Rural Development', 'Education', 'Vocational Training', 'Women Empowerment'],
    },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: ORG.en, alternateName: ORG.hi, inLanguage: ['en-IN', 'hi-IN'], publisher: { '@id': orgId } },
    {
      '@type': page === 'about' ? 'AboutPage' : page === 'contact' ? 'ContactPage' : 'WebPage',
      '@id': `${url}#webpage`, url, name: copy.title, description: copy.description,
      inLanguage: lang === 'hi' ? 'hi-IN' : 'en-IN',
      isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': orgId },
    },
  ];
  if (page !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: COPY[lang].home.name, item: `${siteUrl}${pathFor(lang, 'home')}` },
        { '@type': 'ListItem', position: 2, name: copy.name, item: url },
      ],
    });
  }
  return jsonLd({ '@context': 'https://schema.org', '@graph': graph });
}

export function seoHead({ siteUrl, lang, page, verification }) {
  const copy = COPY[lang][page];
  const indexable = page !== 'notfound';
  const tags = [
    `<title>${escapeHtml(copy.title)}</title>`,
    meta('name', 'description', copy.description),
    meta('name', 'robots', indexable ? 'index,follow,max-image-preview:large,max-snippet:-1' : 'noindex,follow'),
  ];
  if (verification) tags.push(meta('name', 'google-site-verification', verification));

  const locale = lang === 'hi' ? 'hi_IN' : 'en_IN';
  tags.push(
    meta('property', 'og:type', 'website'),
    meta('property', 'og:site_name', ORG[lang]),
    meta('property', 'og:title', copy.title),
    meta('property', 'og:description', copy.description),
    meta('property', 'og:locale', locale),
    meta('property', 'og:locale:alternate', lang === 'hi' ? 'en_IN' : 'hi_IN'),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', copy.title),
    meta('name', 'twitter:description', copy.description),
  );

  if (siteUrl && indexable) {
    const url = `${siteUrl}${pathFor(lang, page)}`;
    const image = `${siteUrl}/og-${lang}.jpg`;
    tags.push(
      `<link rel="canonical" href="${url}"/>`,
      `<link rel="alternate" hreflang="en-IN" href="${siteUrl}${pathFor('en', page)}"/>`,
      `<link rel="alternate" hreflang="hi-IN" href="${siteUrl}${pathFor('hi', page)}"/>`,
      `<link rel="alternate" hreflang="x-default" href="${siteUrl}${pathFor('en', page)}"/>`,
      meta('property', 'og:url', url),
      meta('property', 'og:image', image),
      meta('property', 'og:image:secure_url', image),
      meta('property', 'og:image:type', 'image/jpeg'),
      meta('property', 'og:image:width', '1200'),
      meta('property', 'og:image:height', '630'),
      meta('property', 'og:image:alt', ORG[lang]),
      meta('name', 'twitter:image', image),
      meta('name', 'twitter:image:alt', ORG[lang]),
      structuredData(siteUrl, lang, page, copy, url),
    );
  }
  return tags.join('');
}

export function sitemapXml(siteUrl) {
  const entries = LANGS.flatMap(lang => PAGES.map(page => {
    const alternates = [['en-IN', 'en'], ['hi-IN', 'hi'], ['x-default', 'en']]
      .map(([code, target]) => `<xhtml:link rel="alternate" hreflang="${code}" href="${siteUrl}${pathFor(target, page)}"/>`)
      .join('');
    return `<url><loc>${siteUrl}${pathFor(lang, page)}</loc>${alternates}</url>`;
  }));
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
}
