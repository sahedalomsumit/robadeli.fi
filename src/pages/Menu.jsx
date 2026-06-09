import { useState } from 'react';
import { createPortal } from 'react-dom';
import { m, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './Menu.css';

const translations = {
  fi: {
    heroTitle: 'Meidän Menu',
    heroSub: 'Kaikki valmistetaan tuoreista aineksista, tilauksesta. Tervetuloa maistamaan!',
    allLabel: 'Kaikki',
    subsLabel: 'Submaariinit',
    saladsLabel: 'Salaatit',
    smoothiesLabel: 'Smoothiet',
    wrapsLabel: 'Wrapit',
    from: 'Alkaen',
    ordersInfo: 'Haluatko tilata? Soita meille tai tule suoraan ravintolaan.',
    call: 'Soita: +358 50 379 7490',
    popular: 'Suosittu',
    new: 'Uutuus',
    vegan: 'Vegaani',
  },
  en: {
    heroTitle: 'Our Menu',
    heroSub: 'Everything made fresh to order from quality ingredients. Come taste the difference!',
    allLabel: 'All',
    subsLabel: 'Subs',
    saladsLabel: 'Salads',
    smoothiesLabel: 'Smoothies',
    wrapsLabel: 'Wraps',
    from: 'From',
    ordersInfo: 'Want to order? Give us a call or visit us in person.',
    call: 'Call: +358 50 379 7490',
    popular: 'Popular',
    new: 'New',
    vegan: 'Vegan',
  }
};

const menuItems = [
  // Subs
  {
    id: 1,
    category: 'subs',
    name: { fi: 'Grilled Chicken Sub', en: 'Grilled Chicken Sub' },
    desc: {
      fi: 'Mehevä grillattu kana, salaatti, tomaatti, kurkku, paprika ja talon kastike.',
      en: 'Juicy grilled chicken, lettuce, tomato, cucumber, peppers, and house sauce.'
    },
    price: '9.90',
    image: `${import.meta.env.BASE_URL}images/grilled-chicken-sub.png`,
    tag: 'popular',
  },
  {
    id: 2,
    category: 'subs',
    name: { fi: 'Philly Cheese Steak', en: 'Philly Cheese Steak' },
    desc: {
      fi: 'Amerikkalainen klassikko: naudan ulkofileetä, karamellisoitu sipuli ja sulatejuusto.',
      en: 'American classic: thin-sliced beef, caramelised onions, and melted cheese.'
    },
    price: '11.50',
    image: `${import.meta.env.BASE_URL}images/philly-cheese-steak.png`,
    tag: 'popular',
  },
  {
    id: 3,
    category: 'subs',
    name: { fi: 'Ultimate Italian', en: 'Ultimate Italian' },
    desc: {
      fi: 'Italian salami, provolone, oliivit, pepperoncini ja vinaigrette-kastike.',
      en: 'Italian salami, provolone, olives, pepperoncini, and a zesty vinaigrette dressing.'
    },
    price: '10.50',
    image: `${import.meta.env.BASE_URL}images/ultimate-italian-sub.png`,
  },
  {
    id: 4,
    category: 'subs',
    name: { fi: 'Lohi Sub', en: 'Salmon Sub' },
    desc: {
      fi: 'Tuore lohi, tuorejuusto, kurkku ja kaprikset. Herkkua merenrannoilta!',
      en: 'Fresh salmon, cream cheese, cucumber, and capers. A taste of the sea!'
    },
    price: '12.90',
    image: `${import.meta.env.BASE_URL}images/salmon-sub.png`,
    tag: 'new',
  },
  {
    id: 5,
    category: 'subs',
    name: { fi: 'Brisket Sub', en: 'Brisket Sub' },
    desc: {
      fi: 'Hitaasti kypsennetty naudan brisket, coleslaw ja BBQ-kastike. Täyteläistä ja mehukasta.',
      en: 'Slow-cooked beef brisket, coleslaw, and BBQ sauce. Rich and juicy.'
    },
    price: '13.50',
    image: `${import.meta.env.BASE_URL}images/beef-brisket-sub.png`,
  },
  {
    id: 6,
    category: 'subs',
    name: { fi: 'Halloumi Sub', en: 'Halloumi Sub' },
    desc: {
      fi: 'Grillattu halloumi, paahdettu paprika, pesto ja tuoreet yrtit. Kasvissyöjien suosikki!',
      en: 'Grilled halloumi, roasted peppers, pesto, and fresh herbs. A vegetarian favourite!'
    },
    price: '10.90',
    image: `${import.meta.env.BASE_URL}images/halloumi-sub.png`,
    tag: 'vegan',
  },
  {
    id: 7,
    category: 'subs',
    name: { fi: 'Cheese Melt Sub', en: 'Cheese Melt Sub' },
    desc: {
      fi: 'Monta eri juustoa, tuoreet kasvikset ja dijon-sinappi. Juustonystävälle!',
      en: 'Multiple melted cheeses, fresh veggies, and Dijon mustard. Cheese lovers rejoice!'
    },
    price: '9.50',
    image: `${import.meta.env.BASE_URL}images/cheese-melt-sub.png`,
  },
  // Salads
  {
    id: 8,
    category: 'salads',
    name: { fi: 'Falafel Salaatti', en: 'Falafel Salad' },
    desc: {
      fi: 'Raikas salaatti rapeilla falafelleilla, kikhernillä, paprikalla ja tahini-kastikkeella.',
      en: 'Fresh greens with crispy falafel, chickpeas, peppers, and tahini dressing.'
    },
    price: '10.50',
    image: `${import.meta.env.BASE_URL}images/falafel-salad.png`,
    tag: 'vegan',
  },
  {
    id: 9,
    category: 'salads',
    name: { fi: 'Salaattikulho', en: 'Salaattikulho' },
    desc: {
      fi: 'Täyteläinen ja ravitseva kulho salaateista, quinoasta ja sesongin kasviksista.',
      en: 'A hearty, nourishing bowl of greens, quinoa, and seasonal vegetables.'
    },
    price: '11.90',
    image: `${import.meta.env.BASE_URL}images/fresh-salad-bowl.jpg`,
    tag: 'vegan',
  },
  // Smoothies
  {
    id: 10,
    category: 'smoothies',
    name: { fi: 'Smoothie', en: 'Smoothie' },
    desc: {
      fi: 'Tuoreista hedelmistä ja marjoista tehty vitamiinirikas smoothie. Pyydä suosikki!',
      en: 'Vitamin-packed fresh fruit and berry smoothie. Ask for your favourite blend!'
    },
    price: '7.50',
    image: `${import.meta.env.BASE_URL}images/fresh-fruit-smoothies.png`,
    tag: 'vegan',
  },
  // Wraps
  {
    id: 11,
    category: 'wraps',
    name: { fi: 'Wrap 1', en: 'Veggie Wrap' },
    desc: {
      fi: 'Raikas kasviswrapi täynnä tuoreita vihanneksia, humusta ja fetajuustoa.',
      en: 'Fresh veggie wrap filled with crunchy vegetables, hummus, and feta cheese.'
    },
    price: '8.90',
    image: `${import.meta.env.BASE_URL}images/veggie-wrap.png`,
    tag: 'vegan',
  },
  {
    id: 12,
    category: 'wraps',
    name: { fi: 'Wrap 2', en: 'Chicken Wrap' },
    desc: {
      fi: 'Grillattu kana, salaatti, tomaatti ja talon kastike – koristeltu täydellisesti.',
      en: 'Grilled chicken, lettuce, tomato, and house sauce — wrapped up just right.'
    },
    price: '9.90',
    image: `${import.meta.env.BASE_URL}images/chicken-wrap.png`,
  },
  // Combos
  {
    id: 13,
    category: 'subs',
    name: { fi: 'Combo-ateria', en: 'Combo Meal' },
    desc: {
      fi: 'Valitsemasi sub + juoma + lisuke. Paras arvo rahalle!',
      en: 'Your choice of sub + drink + side. Best value for money!'
    },
    price: '13.90',
    image: `${import.meta.env.BASE_URL}images/combo-meal.jpg`,
    tag: 'popular',
  },
];

const categories = [
  { id: 'all', fi: 'Kaikki', en: 'All' },
  { id: 'subs', fi: 'Submaariinit', en: 'Subs' },
  { id: 'salads', fi: 'Salaatit', en: 'Salads' },
  { id: 'smoothies', fi: 'Smoothiet', en: 'Smoothies' },
  { id: 'wraps', fi: 'Wrapit', en: 'Wraps' },
];

const tagColors = {
  popular: { bg: '#FEF3C7', text: '#92400E', label: { fi: 'Suosittu', en: 'Popular' } },
  new:     { bg: '#DCFCE7', text: '#14532D', label: { fi: 'Uutuus',   en: 'New' } },
  vegan:   { bg: '#F0FDF4', text: '#166534', label: { fi: 'Vegaani',  en: 'Vegan' } },
};

export default function Menu({ lang }) {
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  const filtered = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <main className="menu-page page-enter" id="main-content">
      <Helmet htmlAttributes={{ lang: lang }}>
        <title>{lang === 'fi' ? 'Menu | Roba Deli' : 'Menu | Roba Deli'}</title>
        <meta name="description" content={lang === 'fi' ? 'Katso Roba Delin herkullinen menu. Kaikki valmistetaan tuoreista aineksista.' : 'Check out our delicious menu at Roba Deli. Everything is made fresh to order.'} />
      </Helmet>

      {/* ====== HERO ====== */}
      <m.section {...fadeInUp} className="menu-hero" aria-label="Menu hero" id="menu-hero">
        <div className="menu-hero-bg">
          <img src={`${import.meta.env.BASE_URL}images/italian-sub-sandwich.png`} alt="" aria-hidden="true" />
          <div className="menu-hero-overlay"></div>
        </div>
        <div className="container menu-hero-content">
          <img src={`${import.meta.env.BASE_URL}images/robadeli-logo.png`} alt="Roba Deli" className="menu-hero-logo" />
          <h1 className="menu-hero-title">{t.heroTitle}</h1>
          <p className="menu-hero-sub">{t.heroSub}</p>
        </div>
      </m.section>

      {/* ====== MENU CONTENT ====== */}
      <m.section {...fadeInUp} className="menu-content section-pad" aria-label="Menuluettelo" id="menu-list">
        <div className="container">

          {/* Category Tabs */}
          <div className="category-tabs" role="tablist" aria-label="Menuluokat">
            {categories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                id={`tab-${cat.id}`}
              >
                {cat[lang]}
                <span className="tab-count">
                  {cat.id === 'all'
                    ? menuItems.length
                    : menuItems.filter(i => i.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div
            className="menu-grid"
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory}`}
          >
            {filtered.map((item, index) => (
              <m.article
                key={item.id}
                className="menu-card card"
                id={`menu-item-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="menu-card-img">
                  <img
                    src={item.image}
                    alt={item.name[lang]}
                    loading="lazy"
                  />
                  {item.tag && (
                    <span
                      className="menu-tag"
                      style={{
                        background: tagColors[item.tag].bg,
                        color: tagColors[item.tag].text,
                      }}
                    >
                      {tagColors[item.tag].label[lang]}
                    </span>
                  )}
                </div>
                <div className="menu-card-body">
                  <div className="menu-card-top">
                    <h2 className="menu-item-name">{item.name[lang]}</h2>
                    <span className="menu-item-price">€{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.desc[lang]}</p>
                </div>
              </m.article>
            ))}
          </div>

          {/* Order Info */}
          <div className="menu-order-info" id="menu-order-info">
            <div className="order-info-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.26 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.75 16a2 2 0 0 1 .25.92z"/>
              </svg>
            </div>
            <div>
              <p className="order-info-text">{t.ordersInfo}</p>
              <a href="tel:+358503797490" className="btn btn-primary" id="menu-call-btn">
                {t.call}
              </a>
            </div>
          </div>

          {/* Physical Menu Images */}
          <div className="physical-menu" id="physical-menu">
            <span className="section-label">{lang === 'fi' ? 'Virallinen menu' : 'Official Menu'}</span>
            <h2 className="section-title">{lang === 'fi' ? 'Printtimenumme' : 'Our Printed Menu'}</h2>
            <div className="physical-menu-grid">
              {[`${import.meta.env.BASE_URL}images/robadeli-menu-page-1.jpg`, `${import.meta.env.BASE_URL}images/robadeli-menu-page-2.jpg`, `${import.meta.env.BASE_URL}images/robadeli-menu-page-3.jpg`].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={lang === 'fi' ? `Menu sivu ${idx + 1}` : `Menu page ${idx + 1}`}
                  loading="lazy"
                  onClick={() => setLightboxImage(src)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>

          {/* Lightbox */}
          {createPortal(
            <AnimatePresence>
              {lightboxImage && (
                <m.div
                  key="lightbox"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="lightbox-overlay"
                  onClick={() => setLightboxImage(null)}
                >
                  <button className="lightbox-close" onClick={() => setLightboxImage(null)}>✕</button>
                  <m.img
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    src={lightboxImage}
                    alt="Menu Lightbox"
                    className="lightbox-image"
                    onClick={(e) => e.stopPropagation()}
                  />
                </m.div>
              )}
            </AnimatePresence>,
            document.body
          )}
        </div>
      </m.section>
    </main>
  );
}
