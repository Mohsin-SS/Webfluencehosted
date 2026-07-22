import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Work from './pages/Work/Work'
import About from './pages/About/About'
import Careers from './pages/Careers/Careers'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MotionConfig>
  )
}
