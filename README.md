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

Use landscape photos, ideally at least 1920 × 1080. Text overlays the left side, so keep the subject toward the right. Slide content is in `src/main.jsx`; styling is in `src/style.css`.

## Donations

The form previews the intended contribution only. No payments or personal information are collected. To enable real donations, connect verified NGO payment details and a payment gateway with server-side order creation, signature verification and webhook handling. Do not add gateway secrets to frontend code. Receipt and tax exemption details must be verified before making any claims.

Navigation uses hash URLs so all three pages work on ordinary static hosting without rewrite configuration.
