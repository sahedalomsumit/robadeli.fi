import { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));

function App() {
  // Default to Finnish
  const [lang, setLang] = useState('fi');

  // The document title is now managed by react-helmet-async in individual components.

  return (
    <LazyMotion features={domAnimation}>
      <HashRouter>
        <ScrollToTop />
        <a href="#main-content" className="skip-to-content">
          {lang === 'fi' ? 'Siirry pääsisältöön' : 'Skip to main content'}
        </a>
        <Navbar lang={lang} setLang={setLang} />
        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)' }}>Ladataan...</div>}>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/menu" element={<Menu lang={lang} />} />
          </Routes>
        </Suspense>
        <Footer lang={lang} />
      </HashRouter>
    </LazyMotion>
  );
}

export default App;
