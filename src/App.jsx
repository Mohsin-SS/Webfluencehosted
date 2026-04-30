import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Stats from './components/sections/Stats/Stats';
import Services from './components/sections/Services/Services';
import Features from './components/sections/Features/Features';
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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
