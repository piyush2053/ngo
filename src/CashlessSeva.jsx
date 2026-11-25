import React, { useEffect, useRef } from 'react';
import { HandHeart } from 'lucide-react';
import { useLanguage } from './i18n.jsx';
import './cashless.css';

function DisplayAd() {
  const ad = useRef(null);
  const { t } = useLanguage();
  useEffect(() => {
    if (!ad.current || ad.current.dataset.adsbygoogleStatus) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
    catch (error) { console.error('Unable to initialise display ad', error); }
  }, []);
  return <aside className="cashless-card cashless-ad" aria-label={t.cashless.adLabel}>
    <span className="cashless-ad-label">{t.cashless.adLabel}</span>
    <ins ref={ad} className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-6936658021153884" data-ad-slot="3830939849" data-ad-format="auto" data-full-width-responsive="true"/>
  </aside>;
}

function SevaContent() {
  const { t, to } = useLanguage();
  const c = t.cashless;
  return <div><span className="cashless-badge"><HandHeart size={15}/> {c.eyebrow}</span>
    <h2>{c.title}</h2><p>{c.text}</p>
    <a className="button orange" href={to('contact')}><HandHeart size={17}/> {c.cta}</a>
  </div>;
}
export function CashlessTeaser() {
  return <section className="cashless-band"><div className="container"><SevaContent/></div></section>;
}
export function CashlessSeva() {
  return <section className="cashless-band" id="cashless-seva"><div className="container cashless-layout"><SevaContent/><DisplayAd/></div></section>;
}
