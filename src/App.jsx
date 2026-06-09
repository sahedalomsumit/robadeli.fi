import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));

function AppContent() {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en/') || location.pathname === '/en';
  const lang = isEnglish ? 'en' : 'fi';

  return (
    <>
      <ScrollToTop />
      <a href="#main-content" className="skip-to-content">
        {lang === 'fi' ? 'Siirry pääsisältöön' : 'Skip to main content'}
      </a>
      <Navbar lang={lang} />
      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)' }}>Ladataan...</div>}>
        <Routes>
          {/* Finnish routes */}
          <Route path="/" element={<Home lang="fi" />} />
          <Route path="/menu" element={<Menu lang="fi" />} />

          {/* English routes */}
          <Route path="/en" element={<Home lang="en" />} />
          <Route path="/en/menu" element={<Menu lang="en" />} />

          {/* Wildcard redirect based on current language prefix */}
          <Route path="*" element={<Navigate to={lang === 'en' ? '/en' : '/'} replace />} />
        </Routes>
      </Suspense>
      <Footer lang={lang} />
    </>
  );
}

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppContent />
      </BrowserRouter>
    </LazyMotion>
  );
}

export default App;
