import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const translations = {
  fi: {
    home: 'Etusivu',
    menu: 'Menu',
    contact: 'Ota yhteyttä',
    order: 'Tilaa nyt',
    phone: 'Soita meille',
  },
  en: {
    home: 'Home',
    menu: 'Menu',
    contact: 'Contact',
    order: 'Order Now',
    phone: 'Call Us',
  }
};

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <m.header 
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`} 
      role="banner"
    >
      <div className="container relative">
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="Roba Deli - Etusivu" onClick={() => window.scrollTo(0,0)}>
            <img
              src="/images/robadeli-logo-horizontal.png"
              alt="Roba Deli logo"
              className="logo-img-hor"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar-nav" aria-label="Päänavigaatio">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => window.scrollTo(0,0)}>
              {t.home}
            </Link>
            <Link to="/menu" className={`nav-link ${isActive('/menu') ? 'active' : ''}`} onClick={() => window.scrollTo(0,0)}>
              {t.menu}
            </Link>
            <a
              href="tel:+358503797490"
              className="nav-link nav-phone"
              aria-label={t.phone}
            >
              +358 50 379 7490
            </a>
          </nav>

          {/* Right side */}
          <div className="navbar-right hidden-mobile">
            {/* Language Switcher */}
            <div className="lang-switcher" role="group" aria-label="Kielivalinta">
              <button
                className={`lang-btn ${lang === 'fi' ? 'active' : ''}`}
                onClick={() => setLang('fi')}
                aria-pressed={lang === 'fi'}
              >FI</button>
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >EN</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Avaa valikko"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mobile-menu-wrapper"
            >
              <div className="mobile-menu-inner">
                <nav aria-label="Mobiilinavigaatio" className="mobile-nav-list">
                  <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => { setMenuOpen(false); window.scrollTo(0,0); }}>
                    {t.home}
                  </Link>
                  <Link to="/menu" className={`mobile-nav-link ${isActive('/menu') ? 'active' : ''}`} onClick={() => { setMenuOpen(false); window.scrollTo(0,0); }}>
                    {t.menu}
                  </Link>
                  <a href="tel:+358503797490" className="mobile-nav-link">
                    +358 50 379 7490
                  </a>
                  <a href="mailto:info@robadeli.fi" className="mobile-nav-link">
                    info@robadeli.fi
                  </a>
                </nav>
                <div className="mobile-lang-switcher">
                  <button
                    className={`lang-btn ${lang === 'fi' ? 'active' : ''}`}
                    onClick={() => setLang('fi')}
                  >FI – Suomi</button>
                  <button
                    className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                    onClick={() => setLang('en')}
                  >EN – English</button>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.header>
  );
}
