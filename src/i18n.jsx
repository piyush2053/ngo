import React, { createContext, useContext, useMemo } from 'react';
import { pathFor } from './seo.js';

const STORAGE_KEY = 'kgvs-language';

export const translations = {
  en: {
    a11y: { language: 'Choose language', emblem: 'Keshav Gram Vikas Samiti emblem', orgEmblem: 'Organisation emblem', orgName: 'Keshav Gram Vikas Samiti', toggleNav: 'Toggle navigation', mission: 'Our mission', showSlide: n => `Show slide ${n}`, play: 'Play carousel', pause: 'Pause carousel', prev: 'Previous slide', next: 'Next slide' },
    top: { location: 'Madhya Pradesh', tagline: 'Rooted in service. Growing together since 2012.' },
    brand: { line1: 'KESHAV GRAM', line2: 'VIKAS SAMITI', small: 'केशव ग्राम विकास समिति' },
    nav: { home: 'Home', about: 'About Us', donations: 'Donations', donate: 'Donate Now', contact: 'Contact', privacy: 'Privacy Policy' },
    slides: [
      { tag: 'COMPASSION IN ACTION', title: <>A little care.<br/>A better <em>tomorrow.</em></>, text: 'Together, let’s nurture our cows, empower our villages, and build a kinder future.', label: 'Support Gaushala Seva' },
      { tag: 'ROOTED IN OUR VILLAGES', title: <>Stronger villages.<br/><em>Shared progress.</em></>, text: 'Supporting rural livelihoods, sustainable agriculture and the communities we call home.', label: 'Discover Our Work' },
      { tag: 'OPPORTUNITY THROUGH LEARNING', title: <>Skills for today.<br/>Hope for <em>tomorrow.</em></>, text: 'Opening doors through education and vocational training in computer applications, beauty culture and cutting.', label: 'About Our Mission' },
    ],
    hero: { story: 'Know Our Story', note: 'Small acts of kindness. Lasting change.' },
    trust: [['Registered NGO', 'Registrar of Societies'], ['Serving Since 2012', 'Rooted in rural development'], ['Madhya Pradesh', 'Operating in Indore & Narsinghpur'], ['Driven by Seva', 'People, animals & our planet']],
    intro: { eyebrow: 'OUR PURPOSE', title: <>Rooted in our villages.<br/>Inspired by <em>seva.</em></>, text: 'Keshav Gram Vikas Samiti is a registered non-government organisation in Madhya Pradesh, operating in Indore and Narsinghpur. Since 2012, our purpose has been simple: to help rural communities grow with dignity.', link: 'Meet the organisation' },
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
      p1: 'Keshav Gram Vikas Samiti is a registered society in Madhya Pradesh, operating in Indore and Narsinghpur. We work in rural development and community welfare.',
      p2: 'Our focus brings together education, livelihoods, women’s empowerment, health, agriculture and care for the environment. Gaushala seva adds a commitment to compassionate care for cows, calves and bulls.',
      skills: 'Skills that open doors', p3: 'Our vocational training includes Computer Application, Beauty Culture and Cutting, supporting practical learning and opportunities for self-reliance.',
      glance: 'Our organisation at a glance',
      facts: [['Established', '2012'], ['Organisation', 'Registered Society (Non-Government)'], ['Registered with', 'Registrar of Societies'], ['State', 'Madhya Pradesh'], ['Operating in', 'Indore, Narsinghpur'], ['FCRA status', 'No']],
      focusEyebrow: 'OUR FOCUS', focusTitle: <>Many needs. One spirit of <em>service.</em></>,
      focus: ['Gaushala Seva', 'Agriculture', 'Animal Husbandry, Dairying & Fisheries', 'Art & Culture', 'Children', 'Disaster Management', 'Drinking Water', 'Education & Literacy', 'Environment & Forests', 'Health & Family Welfare', 'HIV/AIDS', 'Micro Finance (SHGs)', 'Minority Issues', 'Nutrition', 'Panchayati Raj', 'Rural Development & Poverty Alleviation', 'Women’s Development & Empowerment', 'Youth Affairs'],
      whereEyebrow: 'WHERE WE WORK', whereTitle: <>Our roots in <em>Madhya Pradesh.</em></>, whereText: 'We currently operate in Indore and Narsinghpur.',
      districts: ['Indore', 'Narsinghpur'],
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
    cashless: {
      eyebrow: 'CASHLESS SEVA', title: <>No money?<br/><em>Your time is seva too.</em></>,
      text: 'Not everyone can give money, but everyone can be part of seva. In Cashless Seva, our sponsors fund the work directly, and you spend a few minutes getting to know them.',
      cta: 'Know About Cashless Seva', status: 'Starting soon, as our first sponsors join.',
      stats: [['₹0', 'from your pocket'], ['10', 'sponsor videos'], ['5 min', 'of your time']],
      steps: ['Begin only if and when you choose to.', 'See 10 short videos from our sponsors, at your own pace.', 'Sponsors fund the seva directly, under their agreement with us.'],
      progress: (done, total) => `${done} of ${total} videos watched`, progressLabel: 'Cashless Seva progress', secondsLeft: n => `${n}s left`,
      start: 'Start Seva', next: 'Continue', retry: 'Try again', error: 'This video could not play. Please try again.', sponsoredBy: name => `Sponsored by ${name}`,
      soonTitle: 'Starting soon', soonText: 'Cashless Seva begins once our first sponsors join.',
      doneTitle: 'Your seva is complete', doneText: 'Thank you for giving your time today. You can serve again tomorrow.',
      disclosure: 'Sponsor videos come directly from our sponsors. This page also shows ads from an advertising partner. Taking part is your choice, costs you nothing, and does not create a personal donation receipt or tax benefit.',
    },
    contact: {
      label: 'GET IN TOUCH', title: 'Contact us', text: 'Reach out to Keshav Gram Vikas Samiti about our work, partnerships or support.',
      address: 'Operating in', phone: 'Phone', email: 'Email', pendingTitle: 'Phone and email', pendingText: 'Our direct contact details will be added here soon.',
      reasonsTitle: 'You can contact us for', reasons: ['Gaushala seva and donations', 'Sponsorship and CSR partnerships', 'Volunteering', 'Vocational training', 'Questions about this website', 'Privacy requests'],
    },
    privacy: {
      label: 'YOUR PRIVACY', title: 'Privacy Policy', updated: 'Last updated: 24 November 2026',
      intro: 'This policy explains what information the Keshav Gram Vikas Samiti website uses and how it is handled.',
      sections: [
        ['Information we collect', 'This website does not ask you to create an account and does not collect your name, phone number, email or payment details. The amount and cause you choose in the donation form stay in your browser and are not sent to us.'],
        ['Information stored on your device', 'We use browser storage to remember your language choice and your Cashless Seva progress for the day. You can remove this at any time by clearing site data in your browser.'],
        ['Services that help run the website', 'Our hosting provider may process technical logs such as IP address, browser type and pages requested in order to deliver and secure the website. Fonts are loaded from Google Fonts, so Google may receive your IP address and browser details.'],
        ['Advertising and cookies', 'This website uses Google AdSense, and Monetag on the donations page, to show ads. These ad providers and their partners may use cookies or similar technologies to show and measure ads, including ads based on your earlier visits to this and other websites. You can manage personalised ads in Google My Ad Center (myadcenter.google.com) and learn more at policies.google.com/technologies/partner-sites.'],
        ['Sponsor videos', 'Cashless Seva videos are hosted on this website. We do not share your identity with sponsors.'],
        ['External links', 'Other websites linked from this site have their own privacy practices, and we are not responsible for them.'],
        ['Changes to this policy', 'We may update this policy when our website or services change. The date at the top shows the latest version.'],
      ],
      contactTitle: 'Contact us about privacy', contactText: 'For any privacy question or request, please reach us through our',
    },
    callout: { eyebrow: 'TOGETHER, WE CAN DO MORE', title: <>Your kindness can<br/>be someone’s <em>new beginning.</em></>, cta: 'Support Our Mission' },
    notFound: { title: 'Page not found', text: 'The page you are looking for does not exist.', home: 'Go to Home' },
    footer: { tagline: <>Serving our villages. Caring for every life.<br/>Growing together since 2012.</>, explore: 'Explore', focus: 'Our Focus', rooted: 'Rooted in Madhya Pradesh', location: <>Indore & Narsinghpur,<br/>Madhya Pradesh, India</>, rights: year => `© ${year} Keshav Gram Vikas Samiti. All rights reserved.`, made: 'Made with care. Inspired by seva.' },
  },
  hi: {
    a11y: { language: 'भाषा चुनें', emblem: 'केशव ग्राम विकास समिति का प्रतीक चिह्न', orgEmblem: 'संस्था का प्रतीक चिह्न', orgName: 'केशव ग्राम विकास समिति', toggleNav: 'मेन्यू खोलें या बंद करें', mission: 'हमारा उद्देश्य', showSlide: n => `स्लाइड ${n} दिखाएँ`, play: 'स्लाइड शो चलाएँ', pause: 'स्लाइड शो रोकें', prev: 'पिछली स्लाइड', next: 'अगली स्लाइड' },
    top: { location: 'मध्य प्रदेश', tagline: 'सेवा में निहित। 2012 से साथ-साथ आगे बढ़ते हुए।' },
    brand: { line1: 'केशव ग्राम', line2: 'विकास समिति', small: 'Keshav Gram Vikas Samiti' },
    nav: { home: 'मुख्य पृष्ठ', about: 'हमारे बारे में', donations: 'दान', donate: 'अभी दान करें', contact: 'संपर्क', privacy: 'निजता नीति' },
    slides: [
      { tag: 'करुणा से कर्म तक', title: <>थोड़ी सी देखभाल।<br/>एक बेहतर <em>कल।</em></>, text: 'आइए मिलकर अपनी गायों का पालन-पोषण करें, अपने गाँवों को सशक्त बनाएँ और एक अधिक दयालु भविष्य गढ़ें।', label: 'गौशाला सेवा में सहयोग करें' },
      { tag: 'अपने गाँवों से जुड़े', title: <>सशक्त गाँव।<br/><em>साझा प्रगति।</em></>, text: 'ग्रामीण आजीविका, टिकाऊ खेती और उन समुदायों का सहयोग, जिन्हें हम अपना घर कहते हैं।', label: 'हमारा कार्य जानें' },
      { tag: 'शिक्षा से नए अवसर', title: <>आज के लिए कौशल।<br/>कल के लिए <em>उम्मीद।</em></>, text: 'शिक्षा तथा कंप्यूटर एप्लीकेशन, ब्यूटी कल्चर और कटिंग के व्यावसायिक प्रशिक्षण से नए अवसरों के द्वार खोलना।', label: 'हमारे उद्देश्य के बारे में' },
    ],
    hero: { story: 'हमारी कहानी जानें', note: 'दया के छोटे कदम। स्थायी परिवर्तन।' },
    trust: [['पंजीकृत एनजीओ', 'रजिस्ट्रार ऑफ़ सोसाइटीज़'], ['2012 से सेवा में', 'ग्रामीण विकास से जुड़े'], ['मध्य प्रदेश', 'इंदौर और नरसिंहपुर में कार्यरत'], ['सेवा से प्रेरित', 'लोग, पशु और हमारी धरती']],
    intro: { eyebrow: 'हमारा उद्देश्य', title: <>अपने गाँवों से जुड़े।<br/><em>सेवा</em> से प्रेरित।</>, text: 'केशव ग्राम विकास समिति मध्य प्रदेश की एक पंजीकृत गैर-सरकारी संस्था है, जो इंदौर और नरसिंहपुर में कार्यरत है। 2012 से हमारा उद्देश्य सरल रहा है: ग्रामीण समुदायों को सम्मान के साथ आगे बढ़ने में मदद करना।', link: 'संस्था को जानें' },
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
      p1: 'केशव ग्राम विकास समिति मध्य प्रदेश की एक पंजीकृत संस्था है, जो इंदौर और नरसिंहपुर में ग्रामीण विकास और समाज कल्याण के क्षेत्र में कार्य करती है।',
      p2: 'हमारा कार्य शिक्षा, आजीविका, महिला सशक्तिकरण, स्वास्थ्य, कृषि और पर्यावरण संरक्षण को एक साथ जोड़ता है। गौशाला सेवा के माध्यम से हम गायों, बछड़ों और बैलों की करुणामय देखभाल के लिए भी प्रतिबद्ध हैं।',
      skills: 'कौशल जो नए द्वार खोले', p3: 'हमारे व्यावसायिक प्रशिक्षण में कंप्यूटर एप्लीकेशन, ब्यूटी कल्चर और कटिंग शामिल हैं, जो व्यावहारिक शिक्षा और आत्मनिर्भरता के अवसर देते हैं।',
      glance: 'हमारी संस्था एक नज़र में',
      facts: [['स्थापना', '2012'], ['संस्था', 'पंजीकृत सोसाइटी (गैर-सरकारी)'], ['पंजीयन', 'रजिस्ट्रार ऑफ़ सोसाइटीज़'], ['राज्य', 'मध्य प्रदेश'], ['कार्य क्षेत्र', 'इंदौर, नरसिंहपुर'], ['FCRA स्थिति', 'नहीं']],
      focusEyebrow: 'हमारे कार्य क्षेत्र', focusTitle: <>अनेक ज़रूरतें। <em>सेवा</em> का एक भाव।</>,
      focus: ['गौशाला सेवा', 'कृषि', 'पशुपालन, डेयरी और मत्स्य पालन', 'कला और संस्कृति', 'बच्चे', 'आपदा प्रबंधन', 'पेयजल', 'शिक्षा और साक्षरता', 'पर्यावरण और वन', 'स्वास्थ्य और परिवार कल्याण', 'एचआईवी/एड्स', 'सूक्ष्म वित्त (स्वयं सहायता समूह)', 'अल्पसंख्यक मुद्दे', 'पोषण', 'पंचायती राज', 'ग्रामीण विकास और गरीबी उन्मूलन', 'महिला विकास और सशक्तिकरण', 'युवा मामले'],
      whereEyebrow: 'हमारा कार्य क्षेत्र', whereTitle: <><em>मध्य प्रदेश</em> में हमारी जड़ें।</>, whereText: 'फ़िलहाल हम इंदौर और नरसिंहपुर में कार्यरत हैं।',
      districts: ['इंदौर', 'नरसिंहपुर'],
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
    cashless: {
      eyebrow: 'कैशलेस सेवा', title: <>पैसा नहीं है?<br/><em>आपका समय भी सेवा है।</em></>,
      text: 'हर कोई पैसे नहीं दे सकता, पर सेवा से हर कोई जुड़ सकता है। कैशलेस सेवा में हमारे प्रायोजक सीधे कार्य में सहयोग करते हैं, और आप कुछ मिनट उन्हें जानने में देते हैं।',
      cta: 'कैशलेस सेवा के बारे में जानें', status: 'पहले प्रायोजकों के जुड़ते ही जल्द शुरू होगी।',
      stats: [['₹0', 'आपकी जेब से'], ['10', 'प्रायोजकों के वीडियो'], ['5 मिनट', 'आपका समय']],
      steps: ['जब आप चाहें, तभी शुरू करें।', 'अपनी सुविधा से हमारे प्रायोजकों के 10 छोटे वीडियो देखें।', 'प्रायोजक अपने समझौते के अनुसार सीधे सेवा में सहयोग करते हैं।'],
      progress: (done, total) => `${total} में से ${done} वीडियो देखे`, progressLabel: 'कैशलेस सेवा की प्रगति', secondsLeft: n => `${n} सेकंड बाकी`,
      start: 'सेवा शुरू करें', next: 'जारी रखें', retry: 'फिर कोशिश करें', error: 'यह वीडियो नहीं चल पाया। कृपया फिर कोशिश करें।', sponsoredBy: name => `प्रायोजक: ${name}`,
      soonTitle: 'जल्द शुरू हो रही है', soonText: 'पहले प्रायोजकों के जुड़ने पर कैशलेस सेवा शुरू होगी।',
      doneTitle: 'आपकी सेवा पूरी हुई', doneText: 'आज अपना समय देने के लिए धन्यवाद। आप कल फिर सेवा कर सकते हैं।',
      disclosure: 'प्रायोजकों के वीडियो सीधे हमारे प्रायोजकों से आते हैं। इस पेज पर एक विज्ञापन साझेदार के विज्ञापन भी दिखते हैं। इसमें भाग लेना आपकी इच्छा पर है, इसमें कोई खर्च नहीं है, और इससे व्यक्तिगत दान रसीद या कर लाभ नहीं मिलता।',
    },
    contact: {
      label: 'हमसे जुड़ें', title: 'संपर्क करें', text: 'हमारे कार्य, साझेदारी या सहयोग के बारे में केशव ग्राम विकास समिति से संपर्क करें।',
      address: 'कार्य क्षेत्र', phone: 'फ़ोन', email: 'ईमेल', pendingTitle: 'फ़ोन और ईमेल', pendingText: 'हमारे सीधे संपर्क की जानकारी जल्द ही यहाँ जोड़ी जाएगी।',
      reasonsTitle: 'आप इन विषयों पर संपर्क कर सकते हैं', reasons: ['गौशाला सेवा और दान', 'प्रायोजन और CSR साझेदारी', 'स्वयंसेवा', 'व्यावसायिक प्रशिक्षण', 'इस वेबसाइट से जुड़े प्रश्न', 'निजता से जुड़े अनुरोध'],
    },
    privacy: {
      label: 'आपकी निजता', title: 'निजता नीति', updated: 'अंतिम अपडेट: 24 नवंबर 2026',
      intro: 'यह नीति बताती है कि केशव ग्राम विकास समिति की वेबसाइट कौन सी जानकारी का उपयोग करती है और उसे कैसे संभाला जाता है।',
      sections: [
        ['हम कौन सी जानकारी लेते हैं', 'इस वेबसाइट पर खाता बनाना ज़रूरी नहीं है और यह आपका नाम, फ़ोन नंबर, ईमेल या भुगतान की जानकारी नहीं लेती। दान फ़ॉर्म में चुनी गई राशि और उद्देश्य आपके ब्राउज़र में ही रहते हैं और हमें नहीं भेजे जाते।'],
        ['आपके डिवाइस पर रखी जानकारी', 'आपकी भाषा और उस दिन की कैशलेस सेवा की प्रगति याद रखने के लिए हम ब्राउज़र स्टोरेज का उपयोग करते हैं। आप ब्राउज़र में साइट डेटा साफ़ करके इसे कभी भी हटा सकते हैं।'],
        ['वेबसाइट चलाने में सहायक सेवाएँ', 'वेबसाइट उपलब्ध और सुरक्षित रखने के लिए हमारा होस्टिंग प्रदाता IP पता, ब्राउज़र का प्रकार और देखे गए पेज जैसे तकनीकी लॉग प्रोसेस कर सकता है। फ़ॉन्ट Google Fonts से लोड होते हैं, इसलिए Google को आपका IP पता और ब्राउज़र की जानकारी मिल सकती है।'],
        ['विज्ञापन और कुकीज़', 'यह वेबसाइट विज्ञापन दिखाने के लिए Google AdSense का, और दान पेज पर Monetag का उपयोग करती है। ये विज्ञापन प्रदाता और उनके साझेदार विज्ञापन दिखाने और मापने के लिए कुकीज़ या ऐसी तकनीकों का उपयोग कर सकते हैं, जिनमें इस और अन्य वेबसाइटों पर आपकी पिछली विज़िट पर आधारित विज्ञापन भी शामिल हैं। आप Google My Ad Center (myadcenter.google.com) में व्यक्तिगत विज्ञापन नियंत्रित कर सकते हैं और policies.google.com/technologies/partner-sites पर अधिक जान सकते हैं।'],
        ['प्रायोजकों के वीडियो', 'कैशलेस सेवा के वीडियो इसी वेबसाइट पर होस्ट होते हैं। हम आपकी पहचान प्रायोजकों के साथ साझा नहीं करते।'],
        ['बाहरी लिंक', 'इस साइट से जुड़ी अन्य वेबसाइटों की अपनी निजता नीतियाँ होती हैं, और हम उनके लिए ज़िम्मेदार नहीं हैं।'],
        ['इस नीति में बदलाव', 'वेबसाइट या सेवाओं में बदलाव होने पर हम यह नीति अपडेट कर सकते हैं। ऊपर दी गई तारीख नवीनतम संस्करण बताती है।'],
      ],
      contactTitle: 'निजता के बारे में संपर्क करें', contactText: 'निजता से जुड़े किसी भी प्रश्न या अनुरोध के लिए कृपया यहाँ संपर्क करें:',
    },
    callout: { eyebrow: 'साथ मिलकर हम और कर सकते हैं', title: <>आपकी दया बन सकती है<br/>किसी की <em>नई शुरुआत।</em></>, cta: 'हमारे उद्देश्य में सहयोग करें' },
    notFound: { title: 'पृष्ठ नहीं मिला', text: 'आप जो पृष्ठ खोज रहे हैं, वह उपलब्ध नहीं है।', home: 'मुख्य पृष्ठ पर जाएँ' },
    footer: { tagline: <>गाँवों की सेवा। हर जीवन की देखभाल।<br/>2012 से साथ-साथ आगे बढ़ते हुए।</>, explore: 'देखें', focus: 'हमारे कार्य', rooted: 'मध्य प्रदेश से जुड़े', location: <>इंदौर और नरसिंहपुर,<br/>मध्य प्रदेश, भारत</>, rights: year => `© ${year} केशव ग्राम विकास समिति। सर्वाधिकार सुरक्षित।`, made: 'स्नेह से निर्मित। सेवा से प्रेरित।' },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ lang, page, children }) {
  const value = useMemo(() => ({ lang, page, t: translations[lang], to: target => pathFor(lang, target) }), [lang, page]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

function saveLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // The link still opens the chosen language when storage is unavailable.
  }
}

export function LanguageToggle() {
  const { lang, page, t } = useLanguage();
  const target = page === 'notfound' ? 'home' : page;
  return (
    <div className="lang-toggle" role="group" aria-label={t.a11y.language}>
      <a href={pathFor('en', target)} hrefLang="en" lang="en" aria-label="English" aria-current={lang === 'en' ? 'true' : undefined} onClick={() => saveLanguage('en')}>EN</a>
      <a href={pathFor('hi', target)} hrefLang="hi" lang="hi" aria-label="हिन्दी" aria-current={lang === 'hi' ? 'true' : undefined} onClick={() => saveLanguage('hi')}>हिं</a>
    </div>
  );
}
