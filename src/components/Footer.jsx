import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-elev)", paddingTop: 80, paddingBottom: 40, borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 80 }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 16, gridColumn: "1 / -1", maxWidth: 300, marginBottom: 20 }}>
            <Logo size={24} />
            <p className="body-sm" style={{ margin: 0 }}>Senior engineering studio, Lahore.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.06em" }}>SERVICES</div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[{label:"Web Development", slug:"web"}, {label:"Mobile Apps", slug:"mobile"}, {label:"AR / VR", slug:"ar"}, {label:"CRM & ERP", slug:"crm"}, {label:"Desktop Apps", slug:"desktop"}, {label:"AI Integration", slug:"ai"}].map(l => (
                <li key={l.slug}><Link to={`/services/${l.slug}`} className="body-sm" style={{ color: "var(--ink)", transition: "color .2s", textDecoration: "none" }}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.06em" }}>COMPANY</div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["About", "Process", "Case Studies", "Pricing", "Contact"].map(l => (
                <li key={l}><Link to={`/#${l.toLowerCase().replace(' ', '')}`} className="body-sm" style={{ color: "var(--ink)", transition: "color .2s", textDecoration: "none" }}>{l}</Link></li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.06em" }}>LEGAL</div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
                <li key={l}><a href="#" className="body-sm" style={{ color: "var(--ink)", transition: "color .2s", textDecoration: "none" }}>{l}</a></li>
              ))}
            </ul>
          </div>

        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, paddingTop: 32, borderTop: "1px solid var(--line-soft)" }}>
          <div className="body-sm" style={{ color: "var(--ink-mute)" }}>© {new Date().getFullYear()} Webfluence. All rights reserved.</div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Twitter", "LinkedIn", "GitHub"].map(social => (
              <a key={social} href="#" className="body-sm" style={{ color: "var(--ink)", textDecoration: "none" }}>{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
