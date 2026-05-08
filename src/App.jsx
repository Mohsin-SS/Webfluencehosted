import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Stats from './components/sections/Stats/Stats';
import Services from './components/sections/Services/Services';
import Features from './components/sections/Features/Features';
import ProductShowcase from './components/sections/ProductShowcase/ProductShowcase';
import Process from './components/sections/Process/Process';
import Testimonials from './components/sections/Testimonials/Testimonials';
import CTA from './components/sections/CTA/CTA';
import Footer from './components/layout/Footer/Footer';
import ProductTeaser from './components/sections/ProductTeaser/ProductTeaser';
import ProductPage from './pages/ProductPage';

// Main homepage layout
const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <Stats />
    <Services />
    <ProductShowcase />
    <Features />
    <Process />
    <Testimonials />
    <ProductTeaser />
    <CTA />
    <Footer />
  </>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
