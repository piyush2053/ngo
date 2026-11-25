# Keshav Gram Vikas Samiti

React + Vite website with Home, About Us and Donations pages. Branding uses the supplied local artwork and favicon.

## Run locally

```sh
npm install
npm run dev
```

Production build: `npm run build`. Preview build: `npm run preview`.

## Homepage photos

The carousel currently uses local artwork as its fallback. Add your HD photos at these paths to replace it automatically:

- `public/images/gaushala.jpg`
- `public/images/villages.jpg`
- `public/images/education.jpg`

Use landscape photos, ideally at least 1920 × 1080. Text overlays the left side, so keep the subject toward the right. Slide content is in `src/i18n.jsx`; styling is in `src/style.css`.

## Donations

The form previews the intended contribution only. No payments or personal information are collected. To enable real donations, connect verified NGO payment details and a payment gateway with server-side order creation, signature verification and webhook handling. Do not add gateway secrets to frontend code. Receipt and tax exemption details must be verified before making any claims.

## Cashless Seva

The section offers volunteering and awareness opportunities, with responsive Google AdSense Display unit `3830939849` on the donations pages. The shared loader is included once through `index.html`; error pages omit it. Video playback, progress and Monetag have been removed. Ad interactions do not earn donation credit. The former sponsor-video configuration is unused.

## SEO and link previews

Public phone and email are set in `src/contact.js`.

`npm run build` prerenders separate HTML for `/`, `/about/`, `/donate/`, `/contact/`, `/privacy/` and their `/hi/` versions, plus `robots.txt`, `sitemap.xml` and `404.html`. Deploy the `dist` folder.

Set these build environment variables on your host:

- `SITE_URL`: optional override for the live https address. The default is `https://kesavgramvikassamiti.com`.
- `GOOGLE_SITE_VERIFICATION`: optional token from Google Search Console's HTML tag method.

Page titles and descriptions are in `src/seo.js`.
