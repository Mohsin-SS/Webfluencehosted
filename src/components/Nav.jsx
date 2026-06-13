import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Nav() {
  const { pathname, hash } = useLocation();
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === '/') {
      setActive(hash ? hash.replace('#', '') : 'home');
    } else {
      setActive(''); // not on home page
    }
  }, [pathname, hash]);

  // Lock scroll on body when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const links = [
    { id: "home",    label: "Home" },
    { id: "about",   label: "About" },
    { id: "services",label: "Services" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" },
  ];
  
  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "color-mix(in srgb, var(--bg) 80%, transparent)",
        backdropFilter: "blur(16px) saturate(160%)",
        WebkitBackdropFilter: "blur(16px) saturate(160%)",
        borderBottom: "1px solid var(--line-soft)",
      }}>
        <div className="container" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 72,
        }}>
          <Link to="/" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}><Logo /></Link>
          
          {/* Desktop Navigation */}
          <nav style={{ display: "flex", gap: 4, alignItems: "center" }} className="hide-mobile">
            {links.map(l => (
              <Link key={l.id} to={`/#${l.id}`}
                 style={{
                   padding: "8px 14px",
                   borderRadius: 999,
                   fontSize: 14,
                   fontWeight: 500,
                   letterSpacing: "-0.005em",
                   textDecoration: "none",
                   color: active === l.id ? "var(--ink)" : "var(--ink-soft)",
                   background: active === l.id ? "color-mix(in srgb, var(--ink) 6%, transparent)" : "transparent",
                   transition: "background .2s, color .2s",
                 }}>
                {l.label}
              </Link>
            ))}
          </nav>
          
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Link to="/#contact" className="btn btn-primary btn-sm hide-mobile">
              Start project <span className="arrow-r">→</span>
            </Link>
            
            {/* Mobile Menu Toggler */}
            <button 
              className="mobile-nav-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ position: "relative", zIndex: 102 }}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu Drawer */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-menu-links">
          {links.map(l => (
            <Link 
              key={l.id} 
              to={`/#${l.id}`} 
              className="mobile-menu-link" 
              onClick={() => setMenuOpen(false)}
              style={{
                color: active === l.id ? "var(--accent)" : "var(--ink)"
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link 
            to="/#contact" 
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: 16 }}
          >
            Start project <span className="arrow-r">→</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
