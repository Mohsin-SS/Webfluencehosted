import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Nav() {
  const { pathname, hash } = useLocation();
  const [active, setActive] = useState('home');

  useEffect(() => {
    if (pathname === '/') {
      setActive(hash ? hash.replace('#', '') : 'home');
    } else {
      setActive(''); // not on home page
    }
  }, [pathname, hash]);

  const links = [
    { id: "home",    label: "Home" },
    { id: "about",   label: "About" },
    { id: "services",label: "Services" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" },
  ];
  
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "color-mix(in srgb, var(--bg) 80%, transparent)",
      backdropFilter: "blur(16px) saturate(160%)",
      WebkitBackdropFilter: "blur(16px) saturate(160%)",
      borderBottom: "1px solid var(--line-soft)",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72,
      }}>
        <Link to="/" style={{ textDecoration: "none" }}><Logo /></Link>
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
          <Link to="/#contact" className="btn btn-primary btn-sm">
            Start project <span className="arrow-r">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
