import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

export default function Navbar({ lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const t = translations[lang];

  const handleLangChange = (targetLang) => {
    if (lang === targetLang) return;
    
    const currentPath = location.pathname;
    const isCurrentlyEnglish = currentPath.startsWith('/en/') || currentPath === '/en';
    
    let newPath = currentPath;
    if (targetLang === 'en' && !isCurrentlyEnglish) {
      newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
    } else if (targetLang === 'fi' && isCurrentlyEnglish) {
      const parsedPath = currentPath.replace(/^\/en/, '');
      newPath = parsedPath === '' ? '/' : parsedPath;
    }
    
    navigate(newPath);
  };

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
          <Link to={lang === 'en' ? '/en' : '/'} className="navbar-logo" aria-label="Roba Deli - Etusivu" onClick={() => window.scrollTo(0,0)}>
            <img
              src={`${import.meta.env.BASE_URL}images/robadeli-logo-horizontal.png`}
              alt="Roba Deli logo"
              className="logo-img-hor"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar-nav" aria-label="Päänavigaatio">
            <Link to={lang === 'en' ? '/en' : '/'} className={`nav-link ${isActive(lang === 'en' ? '/en' : '/') ? 'active' : ''}`} onClick={() => window.scrollTo(0,0)}>
              {t.home}
            </Link>
            <Link to={lang === 'en' ? '/en/menu' : '/menu'} className={`nav-link ${isActive(lang === 'en' ? '/en/menu' : '/menu') ? 'active' : ''}`} onClick={() => window.scrollTo(0,0)}>
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
                onClick={() => handleLangChange('fi')}
                aria-pressed={lang === 'fi'}
              >FI</button>
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => handleLangChange('en')}
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
                  <Link to={lang === 'en' ? '/en' : '/'} className={`mobile-nav-link ${isActive(lang === 'en' ? '/en' : '/') ? 'active' : ''}`} onClick={() => { setMenuOpen(false); window.scrollTo(0,0); }}>
                    {t.home}
                  </Link>
                  <Link to={lang === 'en' ? '/en/menu' : '/menu'} className={`mobile-nav-link ${isActive(lang === 'en' ? '/en/menu' : '/menu') ? 'active' : ''}`} onClick={() => { setMenuOpen(false); window.scrollTo(0,0); }}>
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
                    onClick={() => handleLangChange('fi')}
                  >FI – Suomi</button>
                  <button
                    className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                    onClick={() => handleLangChange('en')}
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
