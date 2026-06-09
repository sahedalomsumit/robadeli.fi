import { memo } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const translations = {
  fi: {
    tagline: 'Tuoreet Submaariinit, Salaatit ja Smoothiet — Sydämestä Teille.',
    address: 'Osoite',
    hours: 'Aukioloajat',
    hoursMonWed: 'Ma–Ke',
    hoursThu: 'Torstai',
    hoursFriSat: 'Pe–La',
    hoursSun: 'Sunnuntai',
    contact: 'Yhteystiedot',
    quickLinks: 'Pikavalinnat',
    home: 'Etusivu',
    menu: 'Menu',
    followUs: 'Seuraa meitä',
    rights: 'Kaikki oikeudet pidätetään.',
  },
  en: {
    tagline: 'Fresh Subs, Salads, and Smoothies — Made with Heart.',
    address: 'Address',
    hours: 'Opening Hours',
    hoursMonWed: 'Mon–Wed',
    hoursThu: 'Thursday',
    hoursFriSat: 'Fri–Sat',
    hoursSun: 'Sunday',
    contact: 'Contact',
    quickLinks: 'Quick Links',
    home: 'Home',
    menu: 'Menu',
    followUs: 'Follow Us',
    rights: 'All rights reserved.',
  }
};

const Footer = memo(function Footer({ lang }) {
  const t = translations[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={`${import.meta.env.BASE_URL}images/robadeli-logo.png`} alt="Roba Deli" width="52" height="52" />
                <span className="footer-logo-text">Roba<span>Deli</span></span>
              </div>
              <p className="footer-tagline">{t.tagline}</p>
              {/* Social links */}
              <div className="footer-social">
                <a
                  href="https://maps.app.goo.gl/RUCXA96bhSmibGVN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Google Maps"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </a>
                <a
                  href="mailto:info@robadeli.fi"
                  className="social-link"
                  aria-label="Sähköposti"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </a>
                <a
                  href="tel:+358503797490"
                  className="social-link"
                  aria-label="Puhelin"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.26 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.75 16a2 2 0 0 1 .25.92z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h3 className="footer-col-title">{t.quickLinks}</h3>
              <ul className="footer-links">
                <li><Link to={lang === 'en' ? '/en' : '/'} className="footer-link" onClick={() => window.scrollTo(0,0)}>{t.home}</Link></li>
                <li><Link to={lang === 'en' ? '/en/menu' : '/menu'} className="footer-link" onClick={() => window.scrollTo(0,0)}>{t.menu}</Link></li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/RUCXA96bhSmibGVN9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Google Maps
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div className="footer-col">
              <h3 className="footer-col-title">{t.hours}</h3>
              <ul className="footer-hours">
                <li>
                  <span>{t.hoursMonWed}</span>
                  <span>10:30–23:00</span>
                </li>
                <li>
                  <span>{t.hoursThu}</span>
                  <span>10:30–16:00</span>
                </li>
                <li>
                  <span>{t.hoursFriSat}</span>
                  <span>10:30–17:30</span>
                </li>
                <li>
                  <span>{t.hoursSun}</span>
                  <span>11:30–23:00</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h3 className="footer-col-title">{t.contact}</h3>
              <address className="footer-address">
                <div className="footer-contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Iso Robertinkatu 1,<br/>00120 Helsinki</span>
                </div>
                <div className="footer-contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.26 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.75 16a2 2 0 0 1 .25.92z"/>
                  </svg>
                  <a href="tel:+358503797490" className="footer-link">+358 50 379 7490</a>
                </div>
                <div className="footer-contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <a href="mailto:info@robadeli.fi" className="footer-link">info@robadeli.fi</a>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            &copy; {currentYear} Roba Deli. {t.rights}
          </p>

          {/* Developer Credit */}
          <div className="footer-credit">
            <a href="https://sahedalomsumit.com" target="_blank" rel="noopener noreferrer" className="footer-credit-link">
              <span>Built with</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart heart-pulse">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
              <span>by</span>
              <span className="footer-dev-name">Sahed</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
