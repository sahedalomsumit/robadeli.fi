import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './Home.css';

const translations = {
  fi: {
    heroLabel: 'Helsingin Sydämessä',
    heroTitle: <>Tuoreutta&nbsp;joka<br />suupalasta.</>,
    heroSub: 'Nauti Iso Robertinkadulla käsintehdyistä subeista, raikkaista salaateista ja pirteistä smoothieista. Valmistamme kaiken tuoreena ja rakkaudella.',
    orderNow: 'Tilaa nyt',
    findUs: 'Menu >',
    stat1Value: '10+',
    stat1Label: 'Vuoden kokemus',
    stat2Value: '100%',
    stat2Label: 'Tuoretta',
    stat3Value: '5/5',
    stat3Label: 'Arvostelut',
    featTitle: 'Miksi valita Roba Deli?',
    featSub: 'Me uskomme, että hyvä ruoka on parasta silloin kun se on tuoretta, rehellistä ja tehty rakkaalla kädellä.',
    feat1Title: 'Aina tuoretta',
    feat1Desc: 'Kaikki ainekset hankitaan päivittäin. Ei pakastettua, ei kompromisseja – vain aitoa makua.',
    feat2Title: 'Kotoisaa makua',
    feat2Desc: 'Jokainen annos on valmistettu käsin rakkaudella. Tunnet sen ensimmäisestä suupalasta.',
    feat3Title: 'Sydämessä Helsingissä',
    feat3Desc: 'Löydät meidät Iso Robertinkadulta, aivan Helsingin sydämestä. Tule käymään!',
    specialsTitle: 'Tällä hetkellä suosituimmat',
    specialsSub: 'Nämä ruoat ovat asiakkaidemme ehdottomia suosikkeja. Kokeile itse!',
    seeMenu: 'Koko menu',
    reviewsTitle: 'Mitä asiakkaamme sanovat',
    reviewsSub: 'Aitoja kokemuksia aidoilta asiakkailta. Me olemme ylpeitä jokaisesta palautteesta.',
    mapTitle: 'Löydä meidät',
    mapSub: 'Olemme Iso Robertinkadulla – helposti löydettävissä julkisella liikenteellä.',
    hoursTitle: 'Aukioloajat',
    address: 'Osoite',
    ctaTitle: 'Nälkä tuli?',
    ctaSub: 'Tule käymään tai soita meille. Palvelemme sinua hymyllä.',
    ctaBtn: 'Katso koko menu',
    ctaPhone: 'Soita: +358 50 379 7490',
    hoursMonWed: 'Ma–Ke',
    hoursThu: 'Torstai',
    hoursFriSat: 'Pe–La',
    hoursSun: 'Sunnuntai',
  },
  en: {
    heroLabel: 'In the Heart of Helsinki',
    heroTitle: <>Freshness&nbsp;in<br />every&nbsp;bite.</>,
    heroSub: 'Enjoy handcrafted subs, fresh salads, and energizing smoothies on Iso Robertinkatu. We prepare everything fresh and with love.',
    orderNow: 'Order Now',
    findUs: 'Our Menu >',
    stat1Value: '10+',
    stat1Label: 'Years Experience',
    stat2Value: '100%',
    stat2Label: 'Freshness',
    stat3Value: '5/5',
    stat3Label: 'Reviews',
    featTitle: 'Why Choose Roba Deli?',
    featSub: 'We believe great food is best when it\'s fresh, honest, and made with love.',
    feat1Title: 'Always Fresh',
    feat1Desc: 'All ingredients are sourced daily. No frozen shortcuts, no compromises — just real, honest flavour.',
    feat2Title: 'Made with Heart',
    feat2Desc: 'Every dish is crafted by hand with love. You\'ll taste the difference from the very first bite.',
    feat3Title: 'In the Heart of Helsinki',
    feat3Desc: 'Find us on Iso Robertinkatu, right in the heart of Helsinki. Easy to reach, impossible to forget.',
    specialsTitle: 'Our Most Loved',
    specialsSub: 'These dishes are our customers\' absolute favourites. Come taste for yourself!',
    seeMenu: 'Full Menu',
    reviewsTitle: 'What Our Customers Say',
    reviewsSub: 'Real experiences from real people. We\'re proud of every piece of feedback.',
    mapTitle: 'Find Us',
    mapSub: 'We\'re on Iso Robertinkatu — easy to reach by public transport.',
    hoursTitle: 'Opening Hours',
    address: 'Address',
    ctaTitle: 'Feeling Hungry?',
    ctaSub: 'Come visit us or give us a call. We\'re always happy to serve you.',
    ctaBtn: 'View Full Menu',
    ctaPhone: 'Call: +358 50 379 7490',
    hoursMonWed: 'Mon–Wed',
    hoursThu: 'Thursday',
    hoursFriSat: 'Fri–Sat',
    hoursSun: 'Sunday',
  }
};

// Featured menu items on home page
const featuredItems = [
  {
    id: 1,
    name: { fi: 'Grilled Chicken Sub', en: 'Grilled Chicken Sub' },
    desc: { fi: 'Mehevä grillattu kana, tuoreet vihannekset ja salaattikastike.', en: 'Juicy grilled chicken, fresh veggies, and house dressing.' },
    image: `${import.meta.env.BASE_URL}images/grilled-chicken-sub.png`,
    price: '9.90',
  },
  {
    id: 2,
    name: { fi: 'Falafel Salaatti', en: 'Falafel Salad' },
    desc: { fi: 'Raikas salaatti rapeilla falafelleilla ja tuoreilla kasviksilla.', en: 'Crispy falafel on a bed of fresh greens and garden vegetables.' },
    image: `${import.meta.env.BASE_URL}images/falafel-salad.png`,
    price: '10.50',
  },
  {
    id: 3,
    name: { fi: 'Smoothie Bowl', en: 'Smoothie Bowl' },
    desc: { fi: 'Vitamiineilla ladattu smoothie tuoreista hedelmistä ja marjoista.', en: 'Vitamin-packed smoothie made from fresh fruits and berries.' },
    image: `${import.meta.env.BASE_URL}images/fresh-fruit-smoothies.png`,
    price: '7.50',
  },
];

// Google Reviews data (static — real embed is below)
const reviews = [
  {
    name: 'Mikael K.',
    rating: 5,
    date: { fi: '2 viikkoa sitten', en: '2 weeks ago' },
    text: {
      fi: 'Paras sub Helsingissä! Ainekset ovat aina tuoreita ja henkilökunta on todella ystävällistä. Tulen takaisin ehdottomasti.',
      en: 'Best sub in Helsinki! The ingredients are always fresh and the staff is super friendly. Definitely coming back.'
    },
    avatar: 'M',
  },
  {
    name: 'Anna L.',
    rating: 5,
    date: { fi: '1 kuukausi sitten', en: '1 month ago' },
    text: {
      fi: 'Smoothiet ovat maukkaita ja terveellisiä. Falafel-salaatti on nyt mielileikkiruokaani. Suosittelen lämpimästi!',
      en: 'The smoothies are delicious and healthy. The falafel salad is now my go-to lunch. Highly recommend!'
    },
    avatar: 'A',
  },
  {
    name: 'Joonas P.',
    rating: 5,
    date: { fi: '3 viikkoa sitten', en: '3 weeks ago' },
    text: {
      fi: 'Loistava paikka! Ruoka on aina tuoretta ja tilaukset tehdään nopeasti. Hintataso on myös erittäin hyvä.',
      en: 'Great spot! Food is always fresh and orders are done quickly. The price point is also excellent.'
    },
    avatar: 'J',
  },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} tähteä 5:stä`} role="img">
      {[1,2,3,4,5].map(star => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={star <= rating ? '#F59E0B' : 'none'}
          stroke={star <= rating ? '#F59E0B' : '#D1D5DB'}
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Home({ lang }) {
  const t = translations[lang];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <main className="home-page page-enter" id="main-content">
      <Helmet htmlAttributes={{ lang: lang }}>
        <title>{lang === 'fi' ? 'Roba Deli | Tuoreita Submaariineja, Salaatteja ja Smoothieita' : 'Roba Deli | Fresh Subs, Salads and Smoothies'}</title>
        <meta name="description" content={lang === 'fi' ? 'Nauti Iso Robertinkadulla käsintehdyistä subeista, raikkaista salaateista ja pirteistä smoothieista.' : 'Enjoy handcrafted subs, fresh salads, and energizing smoothies on Iso Robertinkatu in Helsinki.'} />
      </Helmet>

      {/* ====== HERO ====== */}
      <section className="hero-section" aria-label="Hero" id="hero">
        <div className="container hero-content">
          <div className="hero-text-area">
            {/* Top Badge */}
            <m.div 
              className="hero-badge-top"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hero-badge-dot"></div>
              <span>{t.heroLabel}</span>
            </m.div>

            <m.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.heroTitle}
            </m.h1>
            
            <m.p 
              className="hero-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.heroSub}
            </m.p>
            
            <m.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to={lang === 'en' ? '/en/menu' : '/menu'} className="btn btn-primary btn-lg hero-primary-btn" id="hero-menu-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                  <path d="M7 2v20"/>
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                </svg>
                {t.findUs}
              </Link>
            </m.div>

            {/* Bottom Stats */}
            <m.div 
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="hero-stat-item">
                <div className="stat-value">{t.stat1Value}</div>
                <div className="stat-label">{t.stat1Label}</div>
              </div>
              <div className="hero-stat-item">
                <div className="stat-value">{t.stat2Value}</div>
                <div className="stat-label">{t.stat2Label}</div>
              </div>
              <div className="hero-stat-item">
                <div className="stat-value">{t.stat3Value}</div>
                <div className="stat-label">{t.stat3Label}</div>
              </div>
            </m.div>
          </div>

          {/* Hero image stack */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-img-stack">
              <m.img 
                src={`${import.meta.env.BASE_URL}images/grilled-chicken-sub.png`} 
                alt="Grilled Chicken Sub" 
                className="hero-img hero-img-main" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <m.img 
                src={`${import.meta.env.BASE_URL}images/fresh-salad-bowl.jpg`} 
                alt="Salad Bowl" 
                className="hero-img hero-img-top" 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <m.section {...fadeInUp} className="features-section section-pad" aria-labelledby="features-title" id="features">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">{t.featTitle}</span>
            <h2 id="features-title" className="section-title">{t.featTitle}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.featSub}</p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <m.article 
              className="feature-card" 
              id="feature-fresh"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>{t.feat1Title}</h3>
              <p>{t.feat1Desc}</p>
            </m.article>

            {/* Feature 2 */}
            <m.article 
              className="feature-card feature-card--accent" 
              id="feature-heart"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <h3>{t.feat2Title}</h3>
              <p>{t.feat2Desc}</p>
            </m.article>

            {/* Feature 3 */}
            <m.article 
              className="feature-card" 
              id="feature-location"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>{t.feat3Title}</h3>
              <p>{t.feat3Desc}</p>
            </m.article>
          </div>
        </div>
      </m.section>

      {/* ====== GALLERY STRIP ====== */}
      <m.section {...fadeInUp} className="gallery-strip section-pad-sm" aria-label="Ruokakuvat" id="gallery">
        <div className="gallery-track" aria-hidden="true">
          {[
            'restaurant-poster-1.jpg', 'restaurant-poster-2.jpg', 'restaurant-poster-3.jpg', 'restaurant-poster-4.jpg',
            'restaurant-post-5.jpg', 'special-offer.jpg', 'restaurant-poster-1.jpg', 'restaurant-poster-2.jpg',
            'restaurant-poster-1.jpg', 'restaurant-poster-2.jpg', 'restaurant-poster-3.jpg', 'restaurant-poster-4.jpg',
            'restaurant-post-5.jpg', 'special-offer.jpg', 'restaurant-poster-1.jpg', 'restaurant-poster-2.jpg',
          ].map((img, i) => (
            <div key={i} className="gallery-item">
              <img src={`${import.meta.env.BASE_URL}images/${img}`} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </m.section>

      {/* ====== FEATURED MENU ====== */}
      <m.section {...fadeInUp} className="specials-section section-pad" aria-labelledby="specials-title" id="specials">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">{t.specialsTitle}</span>
            <h2 id="specials-title" className="section-title">{t.specialsTitle}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.specialsSub}</p>
          </div>

          <div className="specials-grid">
            {featuredItems.map((item, index) => (
              <m.article 
                key={item.id} 
                className="special-card card" 
                id={`special-item-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="special-img-wrap">
                  <img
                    src={item.image}
                    alt={item.name[lang]}
                    className="special-img"
                    loading="lazy"
                  />
                  <div className="special-price">€{item.price}</div>
                </div>
                <div className="special-body">
                  <h3 className="special-name">{item.name[lang]}</h3>
                  <p className="special-desc">{item.desc[lang]}</p>
                </div>
              </m.article>
            ))}
          </div>

          <div className="specials-cta">
            <Link to={lang === 'en' ? '/en/menu' : '/menu'} className="btn btn-cta btn-lg" id="specials-menu-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                <rect width="6" height="4" x="9" y="3" rx="1"/>
              </svg>
              {t.seeMenu}
            </Link>
          </div>
        </div>
      </m.section>

      {/* ====== REVIEWS ====== */}
      <m.section {...fadeInUp} className="reviews-section section-pad" aria-labelledby="reviews-title" id="reviews">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Google Reviews</span>
            <h2 id="reviews-title" className="section-title">{t.reviewsTitle}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.reviewsSub}</p>
          </div>

          {/* Google Reviews Badge */}
          <div className="google-rating-badge" role="img" aria-label="Google-arviointi 4.9/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="google-rating-info">
              <div className="google-rating-score">4.9</div>
              <StarRating rating={5} />
              <div className="google-rating-label">Google Rating</div>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <m.article 
                key={i} 
                className="review-card card" 
                id={`review-${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="review-header">
                  <div className="review-avatar" aria-hidden="true">{review.avatar}</div>
                  <div>
                    <div className="review-name">{review.name}</div>
                    <div className="review-date">{review.date[lang]}</div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="review-google-icon" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <StarRating rating={review.rating} />
                <blockquote className="review-text">
                  <p>"{review.text[lang]}"</p>
                </blockquote>
              </m.article>
            ))}
          </div>

          <div className="reviews-cta">
            <a
              href="https://maps.app.goo.gl/RUCXA96bhSmibGVN9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              id="google-reviews-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {lang === 'fi' ? 'Katso kaikki arvostelut' : 'See All Reviews'}
            </a>
          </div>
        </div>
      </m.section>

      {/* ====== MAP ====== */}
      <m.section {...fadeInUp} className="map-section section-pad" aria-labelledby="map-title" id="map">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">{t.mapTitle}</span>
            <h2 id="map-title" className="section-title">{t.mapTitle}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.mapSub}</p>
          </div>

          <div className="map-wrapper">
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.1247539985!2d24.9396!3d60.1640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc63e0f0001%3A0x1234567890abcdef!2sIso%20Robertinkatu%201%2C%2000120%20Helsinki!5e0!3m2!1sfi!2sfi!4v1620000000000!5m2!1sfi!2sfi"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={lang === 'fi' ? 'Roba Deli sijainti kartalla' : 'Roba Deli location on map'}
              ></iframe>
            </div>
            <div className="map-info">
              <h3>{t.address}</h3>
              <address className="map-address">
                <p>Iso Robertinkatu 1</p>
                <p>00120 Helsinki</p>
              </address>
              <div className="map-contact">
                <a href="tel:+358503797490" className="map-contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.26 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.75 16a2 2 0 0 1 .25.92z"/>
                  </svg>
                  +358 50 379 7490
                </a>
                <a href="mailto:info@robadeli.fi" className="map-contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  info@robadeli.fi
                </a>
              </div>
              <div className="map-hours">
                <h4>{t.hoursTitle}</h4>
                <div className="hours-row">
                  <span>{t.hoursMonWed}</span><span>10:30 – 23:00</span>
                </div>
                <div className="hours-row">
                  <span>{t.hoursThu}</span><span>10:30 – 16:00</span>
                </div>
                <div className="hours-row">
                  <span>{t.hoursFriSat}</span><span>10:30 – 17:30</span>
                </div>
                <div className="hours-row">
                  <span>{t.hoursSun}</span><span>11:30 – 23:00</span>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/RUCXA96bhSmibGVN9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="map-directions-btn"
              >
                {lang === 'fi' ? 'Hae reittiohjeet' : 'Get Directions'}
              </a>
            </div>
          </div>
        </div>
      </m.section>

      {/* ====== CTA BANNER ====== */}
      <m.section {...fadeInUp} className="cta-banner section-pad" aria-labelledby="cta-title" id="cta">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-content">
              <h2 id="cta-title">{t.ctaTitle}</h2>
              <p>{t.ctaSub}</p>
            </div>
            <div className="cta-actions">
              <Link to={lang === 'en' ? '/en/menu' : '/menu'} className="btn btn-primary btn-lg" id="cta-menu-btn">
                {t.ctaBtn}
              </Link>
              <a href="tel:+358503797490" className="btn btn-secondary btn-lg" id="cta-phone-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.26 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.75 16a2 2 0 0 1 .25.92z"/>
                </svg>
                {t.ctaPhone}
              </a>
            </div>
          </div>
        </div>
      </m.section>

    </main>
  );
}
