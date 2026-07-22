import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../data/site'
import './Navbar.css'

const EASE = [0.22, 1, 0.36, 1]

function Wordmark() {
  return (
    <span className="nav__wordmark">
      <span className="nav__mark" aria-hidden="true">W</span>
      Webfluence
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" aria-label="Webfluence — home">
          <Wordmark />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__right">
          <span className="nav__meta mono">SF / NYC</span>
          <Link to="/contact" className="btn btn--primary nav__cta">
            Start a project <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
          <button
            className="nav__burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="nav__overlay-top container">
              <Link to="/" className="nav__brand"><Wordmark /></Link>
              <button className="nav__burger" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="nav__overlay-links container" aria-label="Mobile">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.08 + i * 0.06 }}
                >
                  <Link to={l.to} className="nav__overlay-link">{l.label}</Link>
                </motion.div>
              ))}
            </nav>

            <div className="nav__overlay-foot container">
              <span className="mono nav__meta">SF / NYC · hello@webfluence.tech</span>
              <Link to="/contact" className="btn btn--primary nav__overlay-cta">
                Start a project <ArrowRight size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
