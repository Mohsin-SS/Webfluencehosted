import React from 'react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="section" style={{ background: "#0c0c0a", color: "#f5f2ea", borderTop: "1px solid rgba(245,242,234,0.08)", borderBottom: "1px solid rgba(245,242,234,0.08)" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24 }}>
        <h2 className="display-xl" style={{ margin: 0, maxWidth: "14ch", color: "#f5f2ea" }}>
          Let's build something <em style={{ color: "var(--accent)" }}>worth owning.</em>
        </h2>
        <p className="body-lg" style={{ color: "rgba(245,242,234,0.6)", maxWidth: "48ch" }}>
          Skip the agency slide decks. We start every engagement with a working scaffold and a fixed quote.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
          <Link to="/#contact" className="btn" style={{ background: "#f5f2ea", color: "#0c0c0a" }}>Start a project <span className="arrow-r">→</span></Link>
          <Link to="/#contact" className="btn" style={{ background: "transparent", border: "1px solid rgba(245,242,234,0.2)", color: "#f5f2ea" }}>Book a discovery call</Link>
        </div>
      </div>
    </section>
  );
}
