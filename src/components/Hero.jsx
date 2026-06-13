import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" data-screen-label="Home" className="section grid-bg"
      style={{ paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: 'url(/home_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.4,
        pointerEvents: "none"
      }} />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 1180 }}>


          <h1 className="display-xl" style={{ margin: 0, maxWidth: "16ch" }}>
            We engineer software <em style={{ color: "var(--accent)" }}>that compounds</em> ._. not just ships.
          </h1>

          <p className="body-lg" style={{ marginTop: 4 }}>
            Webfluence is a senior engineering studio in Karachi building web platforms,
            mobile apps, and AI-native products for founders and operators worldwide.
            Fixed-scope sprints, no agency overhead, code you own outright.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
            <Link to="/#contact" className="btn btn-primary">Start a project <span className="arrow-r">→</span></Link>
            <Link to="/#services" className="btn btn-ghost">See what we build</Link>
          </div>
        </div>

        {/* Bottom stat row */}
        <div className="stats-grid">
          {[
            { k: "08 yr", l: "Average engineer tenure" },
            { k: "147", l: "Products shipped to date" },
            { k: "31 d", l: "Median time-to-first-deploy" },
            { k: "97%", l: "Client retention, 24-mo trailing" },
          ].map((s, i) => (
            <div key={i} className="stats-grid-item" style={{
              display: "flex", flexDirection: "column", gap: 6,
            }}>
              <div style={{
                fontFamily: "var(--font-sans)",
                fontSize: 44, fontWeight: 500,
                letterSpacing: "-0.035em", lineHeight: 1,
                color: "var(--ink)",
              }}>{s.k}</div>
              <div style={{
                fontSize: 13, color: "var(--ink-mute)",
                letterSpacing: "-0.005em"
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
