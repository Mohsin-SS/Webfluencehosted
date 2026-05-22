import React from 'react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="section" style={{ background: "var(--ink)", color: "var(--bg)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24 }}>
        <h2 className="display-xl" style={{ margin: 0, maxWidth: "14ch" }}>
          Let's build something <em style={{ color: "var(--accent)" }}>worth owning.</em>
        </h2>
        <p className="body-lg" style={{ color: "color-mix(in srgb, var(--bg) 70%, transparent)", maxWidth: "48ch" }}>
          Skip the agency slide decks. We start every engagement with a working scaffold and a fixed quote.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
          <Link to="/#contact" className="btn" style={{ background: "var(--bg)", color: "var(--ink)" }}>Start a project <span className="arrow-r">→</span></Link>
          <Link to="/#contact" className="btn" style={{ background: "transparent", border: "1px solid color-mix(in srgb, var(--bg) 30%, transparent)", color: "var(--bg)" }}>Book a discovery call</Link>
        </div>
      </div>
    </section>
  );
}
