import React from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import Stats from './components/sections/Stats/Stats';
import Services from './components/sections/Services/Services';
import Features from './components/sections/Features/Features';
import Process from './components/sections/Process/Process';
import Testimonials from './components/sections/Testimonials/Testimonials';
import CTA from './components/sections/CTA/CTA';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
