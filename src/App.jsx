import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Nav from './components/Nav';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import CaseStudyPage from './pages/CaseStudyPage';

function App() {
  const [currency, setCurrency] = useState("PKR");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

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
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        </Routes>
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
