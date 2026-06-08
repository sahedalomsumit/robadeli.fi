import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable smooth scrolling temporarily to prevent jump/slide effect
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    // Re-enable smooth scrolling after a tiny delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 10);
  }, [pathname]);

  return null;
}
