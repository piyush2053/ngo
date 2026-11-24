import React from 'react';
import { Trophy, Heart, Medal, HandHeart } from 'lucide-react';
import { useLanguage } from './i18n.jsx';
import { punyaDonors } from './leaderboard-data.js';
import './leaderboard.css';

const copy = {
  en: { eyebrow: 'CELEBRATING THE SPIRIT OF SEVA', title: 'Punya Leaderboard', subtitle: 'Every act of giving carries a little kindness forward.', demo: 'Sample leaderboard · Fictional names and amounts, not actual donations.', view: 'View all 25 contributors', name: 'Contributor', rank: 'Rank', amount: 'Contribution', count: 'Sample contributors', total: 'Illustrative total', note: 'Every contribution matters, whatever its size. This list is a preview of how we will celebrate our community’s kindness.', give: 'Support our mission', list: 'Our circle of kindness', preview: 'A glimpse of our circle of kindness', currency: 'All amounts in Indian rupees (INR).' },
  hi: { eyebrow: 'सेवा और सहयोग की भावना को नमन', title: 'पुण्य लीडरबोर्ड', subtitle: 'हर छोटा सहयोग करुणा को एक कदम आगे बढ़ाता है।', demo: 'नमूना लीडरबोर्ड · नाम और राशियाँ काल्पनिक हैं, वास्तविक दान नहीं।', view: 'सभी 25 सहयोगियों को देखें', name: 'सहयोगी', rank: 'स्थान', amount: 'सहयोग राशि', count: 'नमूना सहयोगी', total: 'उदाहरण की कुल राशि', note: 'हर सहयोग अनमोल है, चाहे राशि कितनी भी हो। यह सूची हमारे समुदाय के सहयोग को सम्मान देने का एक नमूना है।', give: 'हमारे उद्देश्य में सहयोग करें', list: 'सेवा से जुड़े हमारे सहयोगी', preview: 'सहयोग की भावना की एक झलक', currency: 'सभी राशियाँ भारतीय रुपये (INR) में हैं।' },
};
const rupees = amount => `₹${amount.toLocaleString('en-IN')}`;

function Podium({ text }) {
  return <div className="punya-podium">{punyaDonors.slice(0,3).map((donor,i) => <div className={`punya-winner winner-${i+1}`} key={donor.id}><span className="punya-medal"><Medal size={24}/><span>{i+1}</span></span><h3 lang="en">{donor.name}</h3><strong>{rupees(donor.amount)}</strong><small>{text.amount}</small></div>)}</div>;
}

export function LeaderboardTeaser() {
  const { lang, to } = useLanguage(); const text = copy[lang];
  return <section className="container section punya-preview"><a className="punya-preview-link" href={to('leaderboard')}><div className="punya-heading"><div><span className="eyebrow green"><Trophy size={16}/>{text.eyebrow}</span><h2>{text.title}</h2><p>{text.preview}</p></div><span className="button orange">{text.view}</span></div><Podium text={text}/></a></section>;
}

export function Leaderboard() {
  const { lang, to } = useLanguage(); const text = copy[lang];
  const total = punyaDonors.reduce((sum, donor) => sum + donor.amount, 0);
  return <><section className="page-title punya-title"><div className="container"><span className="eyebrow green"><Trophy size={17}/>{text.eyebrow}</span><h1>{text.title}</h1><p>{text.subtitle}</p></div></section><section className="container section punya-page"><div className="punya-summary"><div><HandHeart/><span><strong>25</strong><small>{text.count}</small></span></div><div><Heart/><span><strong>{rupees(total)}</strong><small>{text.total}</small></span></div></div><Podium text={text}/><div className="punya-table-heading"><h2>{text.list}</h2><p>{text.currency}</p></div><div className="punya-table-wrap"><table className="punya-table"><thead><tr><th scope="col">{text.rank}</th><th scope="col">{text.name}</th><th scope="col">{text.amount}</th></tr></thead><tbody>{punyaDonors.map((donor,index)=><tr key={donor.id}><td><span className={index<3?'punya-rank top-rank':'punya-rank'}>{index+1}</span></td><th scope="row" lang="en">{donor.name}</th><td>{rupees(donor.amount)}</td></tr>)}</tbody></table></div><div className="punya-bottom"><p>{text.note}</p><a className="button orange" href={to('donate')}><Heart size={17}/>{text.give}</a></div></section></>;
}
