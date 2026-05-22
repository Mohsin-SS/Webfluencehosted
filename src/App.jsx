import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import useTweaks from './hooks/useTweaks';

// Components
import Nav from './components/Nav';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TweaksPanel from './components/TweaksPanel';

// Pages
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';

function App() {
  const [tweaks, setTweak] = useTweaks();
  const [currency, setCurrency] = useState("PKR");
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Reveal-on-scroll logic
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home currency={currency} setCurrency={setCurrency} />} />
          <Route path="/services/:slug" element={<ServicePage currency={currency} />} />
        </Routes>
        <CTABanner />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel 
        tweaks={tweaks} 
        setTweak={setTweak}
        currency={currency}
        setCurrency={setCurrency}
      />
    </>
  );
}

export default App;
