import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'kgvs-language';

export const translations = {
  en: {
    meta: { title: 'Keshav Gram Vikas Samiti | Seva. Support. Change.', description: 'Keshav Gram Vikas Samiti — serving rural communities in Madhya Pradesh since 2012. Support Gaushala seva, education and rural development.' },
    a11y: { language: 'Choose language', emblem: 'Keshav Gram Vikas Samiti emblem', orgEmblem: 'Organisation emblem', orgName: 'Keshav Gram Vikas Samiti', toggleNav: 'Toggle navigation', mission: 'Our mission', showSlide: n => `Show slide ${n}`, play: 'Play carousel', pause: 'Pause carousel', prev: 'Previous slide', next: 'Next slide' },
    top: { location: 'Madhya Pradesh', tagline: 'Rooted in service. Growing together since 2012.' },
    brand: { line1: 'KESHAV GRAM', line2: 'VIKAS SAMITI', small: 'केशव ग्राम विकास समिति' },
    nav: { home: 'Home', about: 'About Us', donations: 'Donations', donate: 'Donate Now' },
    slides: [
      { tag: 'COMPASSION IN ACTION', title: <>A little care.<br/>A better <em>tomorrow.</em></>, text: 'Together, let’s nurture our cows, empower our villages, and build a kinder future.', label: 'Support Gaushala Seva' },
      { tag: 'ROOTED IN OUR VILLAGES', title: <>Stronger villages.<br/><em>Shared progress.</em></>, text: 'Supporting rural livelihoods, sustainable agriculture and the communities we call home.', label: 'Discover Our Work' },
      { tag: 'OPPORTUNITY THROUGH LEARNING', title: <>Skills for today.<br/>Hope for <em>tomorrow.</em></>, text: 'Opening doors through education and vocational training in computer applications, beauty culture and cutting.', label: 'About Our Mission' },
    ],
    hero: { story: 'Know Our Story', note: 'Small acts of kindness. Lasting change.' },
    trust: [['Registered NGO', 'Registrar of Societies'], ['Serving Since 2012', 'Rooted in rural development'], ['Madhya Pradesh', 'Working across 8 districts'], ['Driven by Seva', 'People, animals & our planet']],
    intro: { eyebrow: 'OUR PURPOSE', title: <>Rooted in our villages.<br/>Inspired by <em>seva.</em></>, text: 'Keshav Gram Vikas Samiti is a registered non-government organisation based in Narsinghpur, Madhya Pradesh. Since 2012, our purpose has been simple: to help rural communities grow with dignity.', link: 'Meet the organisation' },
    work: { eyebrow: 'WHERE CARE BECOMES ACTION', title: <>Our areas of <em>service.</em></>, text: <>A better tomorrow begins with<br/>what we care for today.</>, support: 'Support cow seva', learn: 'Learn more' },
    areas: [
      { title: 'Gaushala Seva', text: 'Compassionate care for cows, calves and bulls. Help support feed, shelter and everyday wellbeing.', tag: 'CARE & COMPASSION' },
      { title: 'Education & Skills', text: 'Creating opportunities through literacy and vocational training for more independent futures.', tag: 'LEARN & GROW' },
      { title: 'Rural Development', text: 'Supporting village communities through agriculture, livelihoods and sustainable development.', tag: 'ROOTS & RESILIENCE' },
      { title: 'Women & Youth', text: 'Encouraging participation, self-reliance and opportunities for women and young people.', tag: 'EMPOWER & ENABLE' },
    ],
    seva: { motto: 'करुणा से सेवा, सेवा से परिवर्तन', eyebrow: 'A PLACE FOR CARE. A PROMISE OF KINDNESS.', title: <>Their wellbeing.<br/>Our <em>shared responsibility.</em></>, text: 'Gaushala seva is the selfless service of cows. With your support, we want to provide cows, calves and bulls with nourishment, a safe shelter and compassionate care.', list: ['Feed and daily nourishment', 'Shelter and everyday care', 'Support for health and wellbeing'], cta: 'Contribute to Gaushala Seva' },
    about: {
      label: 'OUR STORY', title: <>Service at heart.<br/><em>Community at the centre.</em></>, text: 'Get to know Keshav Gram Vikas Samiti and the purpose that brings us together.',
      eyebrow: 'KESHAV GRAM VIKAS SAMITI', heading: <>Growing together,<br/>since <em>2012.</em></>,
      p1: 'Based in Narsinghpur, Madhya Pradesh, Keshav Gram Vikas Samiti is a registered society working in rural development and community welfare.',
      p2: 'Our focus brings together education, livelihoods, women’s empowerment, health, agriculture and care for the environment. Gaushala seva adds a commitment to compassionate care for cows, calves and bulls.',
      skills: 'Skills that open doors', p3: 'Our vocational training includes Computer Application, Beauty Culture and Cutting, supporting practical learning and opportunities for self-reliance.',
      glance: 'Our organisation at a glance',
      facts: [['Established', '2012'], ['Organisation', 'Registered Society (Non-Government)'], ['Registered with', 'Registrar of Societies'], ['Based in', 'Narsinghpur, Madhya Pradesh'], ['FCRA status', 'No']],
      focusEyebrow: 'OUR FOCUS', focusTitle: <>Many needs. One spirit of <em>service.</em></>,
      focus: ['Gaushala Seva', 'Agriculture', 'Animal Husbandry, Dairying & Fisheries', 'Art & Culture', 'Children', 'Disaster Management', 'Drinking Water', 'Education & Literacy', 'Environment & Forests', 'Health & Family Welfare', 'HIV/AIDS', 'Micro Finance (SHGs)', 'Minority Issues', 'Nutrition', 'Panchayati Raj', 'Rural Development & Poverty Alleviation', 'Women’s Development & Empowerment', 'Youth Affairs'],
      whereEyebrow: 'WHERE WE WORK', whereTitle: <>Our roots in <em>Madhya Pradesh.</em></>, whereText: 'Our operational districts connect us to communities across the state.',
      districts: ['Sagar', 'Damoh', 'Vidisha', 'Raisen', 'Jabalpur', 'Narsimhapur', 'Chhindwara', 'Seoni'],
    },
    donate: {
      label: 'GIVE WITH COMPASSION', title: <>A small contribution.<br/><em>A meaningful difference.</em></>, text: 'Support the care of cows and the wellbeing of our rural communities.',
      eyebrow: 'YOUR KINDNESS MATTERS', heading: <>Be a part of<br/>something <em>caring.</em></>, intro: 'Choose a cause close to your heart. Your intended contribution can support our vision for a more compassionate, self-reliant community.',
      reasons: [['Care for cows', 'Support nourishment, shelter and everyday wellbeing through Gaushala seva.'], ['Enable opportunity', 'Support education, practical skills and rural development.'], ['Give thoughtfully', 'Payment details will be available once the organisation’s donation account is connected.']],
      formTitle: 'Make a contribution', formSub: 'Every act of seva counts.', supportLabel: 'I would like to support',
      causes: { gaushala: 'Gaushala Seva', education: 'Education & Skills', rural: 'Rural Development', general: 'General Support' },
      amountLabel: 'Select an amount', customLabel: 'Or enter your amount (INR)', placeholder: 'Enter amount', notActive: 'Online donations are not active yet. No payment will be taken.', review: 'Review Contribution',
      summary: (amount, cause) => `₹${amount} for ${cause}`,
      thanks: 'Thank you for your intention to give. Payments will open once the NGO adds its verified UPI or payment gateway details. No donation has been processed.',
      footnote: 'Currently accepting no online payments. Donation receipt and tax exemption details will be confirmed by the organisation.',
    },
    callout: { eyebrow: 'TOGETHER, WE CAN DO MORE', title: <>Your kindness can<br/>be someone’s <em>new beginning.</em></>, cta: 'Support Our Mission' },
    footer: { tagline: <>Serving our villages. Caring for every life.<br/>Growing together since 2012.</>, explore: 'Explore', focus: 'Our Focus', rooted: 'Rooted in Madhya Pradesh', location: <>Narsinghpur,<br/>Madhya Pradesh, India</>, rights: year => `© ${year} Keshav Gram Vikas Samiti. All rights reserved.`, made: 'Made with care. Inspired by seva.' },
  },
  hi: {
    meta: { title: 'केशव ग्राम विकास समिति | सेवा। सहयोग। परिवर्तन।', description: 'केशव ग्राम विकास समिति — 2012 से मध्य प्रदेश के ग्रामीण समुदायों की सेवा में। गौशाला सेवा, शिक्षा और ग्रामीण विकास में सहयोग करें।' },
    a11y: { language: 'भाषा चुनें', emblem: 'केशव ग्राम विकास समिति का प्रतीक चिह्न', orgEmblem: 'संस्था का प्रतीक चिह्न', orgName: 'केशव ग्राम विकास समिति', toggleNav: 'मेन्यू खोलें या बंद करें', mission: 'हमारा उद्देश्य', showSlide: n => `स्लाइड ${n} दिखाएँ`, play: 'स्लाइड शो चलाएँ', pause: 'स्लाइड शो रोकें', prev: 'पिछली स्लाइड', next: 'अगली स्लाइड' },
    top: { location: 'मध्य प्रदेश', tagline: 'सेवा में निहित। 2012 से साथ-साथ आगे बढ़ते हुए।' },
    brand: { line1: 'केशव ग्राम', line2: 'विकास समिति', small: 'Keshav Gram Vikas Samiti' },
    nav: { home: 'मुख्य पृष्ठ', about: 'हमारे बारे में', donations: 'दान', donate: 'अभी दान करें' },
    slides: [
      { tag: 'करुणा से कर्म तक', title: <>थोड़ी सी देखभाल।<br/>एक बेहतर <em>कल।</em></>, text: 'आइए मिलकर अपनी गायों का पालन-पोषण करें, अपने गाँवों को सशक्त बनाएँ और एक अधिक दयालु भविष्य गढ़ें।', label: 'गौशाला सेवा में सहयोग करें' },
      { tag: 'अपने गाँवों से जुड़े', title: <>सशक्त गाँव।<br/><em>साझा प्रगति।</em></>, text: 'ग्रामीण आजीविका, टिकाऊ खेती और उन समुदायों का सहयोग, जिन्हें हम अपना घर कहते हैं।', label: 'हमारा कार्य जानें' },
      { tag: 'शिक्षा से नए अवसर', title: <>आज के लिए कौशल।<br/>कल के लिए <em>उम्मीद।</em></>, text: 'शिक्षा तथा कंप्यूटर एप्लीकेशन, ब्यूटी कल्चर और कटिंग के व्यावसायिक प्रशिक्षण से नए अवसरों के द्वार खोलना।', label: 'हमारे उद्देश्य के बारे में' },
    ],
    hero: { story: 'हमारी कहानी जानें', note: 'दया के छोटे कदम। स्थायी परिवर्तन।' },
    trust: [['पंजीकृत एनजीओ', 'रजिस्ट्रार ऑफ़ सोसाइटीज़'], ['2012 से सेवा में', 'ग्रामीण विकास से जुड़े'], ['मध्य प्रदेश', '8 ज़िलों में कार्यरत'], ['सेवा से प्रेरित', 'लोग, पशु और हमारी धरती']],
    intro: { eyebrow: 'हमारा उद्देश्य', title: <>अपने गाँवों से जुड़े।<br/><em>सेवा</em> से प्रेरित।</>, text: 'केशव ग्राम विकास समिति नरसिंहपुर, मध्य प्रदेश में स्थित एक पंजीकृत गैर-सरकारी संस्था है। 2012 से हमारा उद्देश्य सरल रहा है: ग्रामीण समुदायों को सम्मान के साथ आगे बढ़ने में मदद करना।', link: 'संस्था को जानें' },
    work: { eyebrow: 'जहाँ देखभाल कर्म बनती है', title: <>हमारे <em>सेवा क्षेत्र।</em></>, text: <>बेहतर कल की शुरुआत होती है<br/>आज की हमारी देखभाल से।</>, support: 'गौ सेवा में सहयोग करें', learn: 'और जानें' },
    areas: [
      { title: 'गौशाला सेवा', text: 'गायों, बछड़ों और बैलों की करुणामय देखभाल। चारे, आश्रय और उनके दैनिक कल्याण में सहयोग करें।', tag: 'देखभाल और करुणा' },
      { title: 'शिक्षा और कौशल', text: 'साक्षरता और व्यावसायिक प्रशिक्षण से आत्मनिर्भर भविष्य के अवसर बनाना।', tag: 'सीखें और बढ़ें' },
      { title: 'ग्रामीण विकास', text: 'कृषि, आजीविका और सतत विकास के माध्यम से ग्रामीण समुदायों का सहयोग।', tag: 'जड़ें और मज़बूती' },
      { title: 'महिला और युवा', text: 'महिलाओं और युवाओं की भागीदारी, आत्मनिर्भरता और अवसरों को बढ़ावा देना।', tag: 'सशक्त और सक्षम' },
    ],
    seva: { motto: 'करुणा से सेवा, सेवा से परिवर्तन', eyebrow: 'देखभाल का स्थान। करुणा का वचन।', title: <>उनका कल्याण।<br/>हमारी <em>साझा ज़िम्मेदारी।</em></>, text: 'गौशाला सेवा गायों की निःस्वार्थ सेवा है। आपके सहयोग से हम गायों, बछड़ों और बैलों को पोषण, सुरक्षित आश्रय और करुणामय देखभाल देना चाहते हैं।', list: ['चारा और दैनिक पोषण', 'आश्रय और रोज़ की देखभाल', 'स्वास्थ्य और कल्याण में सहयोग'], cta: 'गौशाला सेवा में योगदान दें' },
    about: {
      label: 'हमारी कहानी', title: <>मन में सेवा।<br/><em>केंद्र में समाज।</em></>, text: 'केशव ग्राम विकास समिति और हमें एक साथ जोड़ने वाले उद्देश्य को जानें।',
      eyebrow: 'केशव ग्राम विकास समिति', heading: <>साथ-साथ आगे बढ़ते हुए,<br/><em>2012</em> से।</>,
      p1: 'नरसिंहपुर, मध्य प्रदेश में स्थित केशव ग्राम विकास समिति एक पंजीकृत संस्था है, जो ग्रामीण विकास और समाज कल्याण के क्षेत्र में कार्य करती है।',
      p2: 'हमारा कार्य शिक्षा, आजीविका, महिला सशक्तिकरण, स्वास्थ्य, कृषि और पर्यावरण संरक्षण को एक साथ जोड़ता है। गौशाला सेवा के माध्यम से हम गायों, बछड़ों और बैलों की करुणामय देखभाल के लिए भी प्रतिबद्ध हैं।',
      skills: 'कौशल जो नए द्वार खोले', p3: 'हमारे व्यावसायिक प्रशिक्षण में कंप्यूटर एप्लीकेशन, ब्यूटी कल्चर और कटिंग शामिल हैं, जो व्यावहारिक शिक्षा और आत्मनिर्भरता के अवसर देते हैं।',
      glance: 'हमारी संस्था एक नज़र में',
      facts: [['स्थापना', '2012'], ['संस्था', 'पंजीकृत सोसाइटी (गैर-सरकारी)'], ['पंजीयन', 'रजिस्ट्रार ऑफ़ सोसाइटीज़'], ['स्थान', 'नरसिंहपुर, मध्य प्रदेश'], ['FCRA स्थिति', 'नहीं']],
      focusEyebrow: 'हमारे कार्य क्षेत्र', focusTitle: <>अनेक ज़रूरतें। <em>सेवा</em> का एक भाव।</>,
      focus: ['गौशाला सेवा', 'कृषि', 'पशुपालन, डेयरी और मत्स्य पालन', 'कला और संस्कृति', 'बच्चे', 'आपदा प्रबंधन', 'पेयजल', 'शिक्षा और साक्षरता', 'पर्यावरण और वन', 'स्वास्थ्य और परिवार कल्याण', 'एचआईवी/एड्स', 'सूक्ष्म वित्त (स्वयं सहायता समूह)', 'अल्पसंख्यक मुद्दे', 'पोषण', 'पंचायती राज', 'ग्रामीण विकास और गरीबी उन्मूलन', 'महिला विकास और सशक्तिकरण', 'युवा मामले'],
      whereEyebrow: 'हमारा कार्य क्षेत्र', whereTitle: <><em>मध्य प्रदेश</em> में हमारी जड़ें।</>, whereText: 'हमारे कार्यक्षेत्र के ज़िले हमें प्रदेश भर के समुदायों से जोड़ते हैं।',
      districts: ['सागर', 'दमोह', 'विदिशा', 'रायसेन', 'जबलपुर', 'नरसिंहपुर', 'छिंदवाड़ा', 'सिवनी'],
    },
    donate: {
      label: 'करुणा से दान करें', title: <>एक छोटा सा योगदान।<br/><em>एक सार्थक बदलाव।</em></>, text: 'गायों की देखभाल और हमारे ग्रामीण समुदायों के कल्याण में सहयोग करें।',
      eyebrow: 'आपकी दया मायने रखती है', heading: <>एक करुणामय पहल का<br/><em>हिस्सा बनें।</em></>, intro: 'अपने मन के करीब का उद्देश्य चुनें। आपका प्रस्तावित योगदान एक अधिक करुणामय और आत्मनिर्भर समाज के हमारे संकल्प को बल दे सकता है।',
      reasons: [['गायों की देखभाल', 'गौशाला सेवा के माध्यम से पोषण, आश्रय और दैनिक कल्याण में सहयोग करें।'], ['अवसर बनाएँ', 'शिक्षा, व्यावहारिक कौशल और ग्रामीण विकास में सहयोग करें।'], ['सोच-समझकर दान करें', 'संस्था का दान खाता जुड़ने के बाद भुगतान की जानकारी उपलब्ध होगी।']],
      formTitle: 'योगदान करें', formSub: 'सेवा का हर कार्य मायने रखता है।', supportLabel: 'मैं इसमें सहयोग करना चाहता/चाहती हूँ',
      causes: { gaushala: 'गौशाला सेवा', education: 'शिक्षा और कौशल', rural: 'ग्रामीण विकास', general: 'सामान्य सहयोग' },
      amountLabel: 'राशि चुनें', customLabel: 'या अपनी राशि दर्ज करें (INR)', placeholder: 'राशि दर्ज करें', notActive: 'ऑनलाइन दान अभी शुरू नहीं हुआ है। कोई भुगतान नहीं लिया जाएगा।', review: 'योगदान की समीक्षा करें',
      summary: (amount, cause) => `${cause} के लिए ₹${amount}`,
      thanks: 'दान की आपकी भावना के लिए धन्यवाद। संस्था द्वारा सत्यापित UPI या पेमेंट गेटवे की जानकारी जोड़ने के बाद भुगतान शुरू होंगे। कोई दान प्रोसेस नहीं किया गया है।',
      footnote: 'फ़िलहाल कोई ऑनलाइन भुगतान स्वीकार नहीं किया जा रहा है। दान रसीद और कर छूट की जानकारी संस्था द्वारा पुष्टि के बाद दी जाएगी।',
    },
    callout: { eyebrow: 'साथ मिलकर हम और कर सकते हैं', title: <>आपकी दया बन सकती है<br/>किसी की <em>नई शुरुआत।</em></>, cta: 'हमारे उद्देश्य में सहयोग करें' },
    footer: { tagline: <>गाँवों की सेवा। हर जीवन की देखभाल।<br/>2012 से साथ-साथ आगे बढ़ते हुए।</>, explore: 'देखें', focus: 'हमारे कार्य', rooted: 'मध्य प्रदेश से जुड़े', location: <>नरसिंहपुर,<br/>मध्य प्रदेश, भारत</>, rights: year => `© ${year} केशव ग्राम विकास समिति। सर्वाधिकार सुरक्षित।`, made: 'स्नेह से निर्मित। सेवा से प्रेरित।' },
  },
};

function readSavedLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'hi' ? 'hi' : 'en';
  } catch {
    return 'en';
  }
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readSavedLanguage);

  useEffect(() => {
    const { title, description } = translations[lang].meta;
    document.documentElement.lang = lang;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // The choice still applies for this visit when storage is unavailable.
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="lang-toggle" role="group" aria-label={t.a11y.language}>
      <button type="button" lang="en" aria-label="English" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
      <button type="button" lang="hi" aria-label="हिन्दी" aria-pressed={lang === 'hi'} onClick={() => setLang('hi')}>हिं</button>
    </div>
  );
}
