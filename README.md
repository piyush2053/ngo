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

## SEO and link previews

`npm run build` prerenders separate HTML for `/`, `/about/`, `/donate/`, `/hi/`, `/hi/about/` and `/hi/donate/`, plus `robots.txt`, `sitemap.xml` and `404.html`. Deploy the `dist` folder.

Set these build environment variables on your host:

- `SITE_URL`: the live https address, for example `https://your-domain.org`. Required for canonical URLs, sitemap and WhatsApp/social preview images.
- `GOOGLE_SITE_VERIFICATION`: optional token from Google Search Console's HTML tag method.

Page titles and descriptions are in `src/seo.js`.
