import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from './contact.js';
import { useLanguage } from './i18n.jsx';
import './info-pages.css';

function InfoHeader({ label, title, text }) {
  return <section className="page-title"><div className="container"><span className="eyebrow green">{label}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const hasDirectContact = Boolean(CONTACT.phone || CONTACT.email);
  return (
    <>
      <InfoHeader label={c.label} title={c.title} text={c.text}/>
      <section className="container section contact-grid">
        <div className="contact-card"><MapPin/><h2>{c.address}</h2><p>{t.footer.location}</p></div>
        {CONTACT.phone && <div className="contact-card"><Phone/><h2>{c.phone}</h2><a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`} dir="ltr">{CONTACT.phone}</a></div>}
        {CONTACT.email && <div className="contact-card"><Mail/><h2>{c.email}</h2><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>}
        {!hasDirectContact && <div className="contact-card muted"><Mail/><h2>{c.pendingTitle}</h2><p>{c.pendingText}</p></div>}
      </section>
      <section className="work-section"><div className="container contact-reasons"><h2>{c.reasonsTitle}</h2><ul>{c.reasons.map(reason => <li key={reason}>{reason}</li>)}</ul></div></section>
    </>
  );
}

export function Privacy() {
  const { t, to } = useLanguage();
  const p = t.privacy;
  return (
    <>
      <InfoHeader label={p.label} title={p.title} text={p.updated}/>
      <article className="container section privacy-copy">
        <p>{p.intro}</p>
        {p.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
        <section><h2>{p.contactTitle}</h2><p>{p.contactText} <a href={to('contact')}>{t.nav.contact}</a></p></section>
      </article>
    </>
  );
}
