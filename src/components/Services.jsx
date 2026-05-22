import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" data-screen-label="Services" className="section">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between",
              alignItems: "end", marginBottom: 56, gap: 40, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span className="eyebrow">02 — Services</span>
            <h2 className="display-lg" style={{ margin: 0, maxWidth: "16ch" }}>
              Six disciplines, <em>one team.</em>
            </h2>
          </div>
          <p className="body-lg" style={{ maxWidth: "38ch", margin: 0 }}>
            We staff full project teams from a single roster — design, engineering,
            and infrastructure under one Slack channel, one invoice, one timezone.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 0,
          borderTop: "1px solid var(--line)",
          borderLeft: "1px solid var(--line)",
        }}>
          {services.map((s, i) => (
            <Link to={`/services/${s.slug}`} key={s.n} className="service-card" style={{
              borderRight: "1px solid var(--line)",
              borderBottom: "1px solid var(--line)",
              padding: "36px 32px",
              background: "var(--bg-elev)",
              display: "flex", flexDirection: "column", gap: 18,
              position: "relative",
              transition: "background .25s",
              minHeight: 320,
              textDecoration: "none",
              color: "inherit",
              overflow: "hidden",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--ink)";
              e.currentTarget.style.color = "var(--bg)";
              const img = e.currentTarget.querySelector('.card-bg-img');
              if(img) img.style.opacity = 0.4;
              const arrow = e.currentTarget.querySelector('.card-arrow');
              if(arrow) arrow.style.color = "var(--bg)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--bg-elev)";
              e.currentTarget.style.color = "inherit";
              const img = e.currentTarget.querySelector('.card-bg-img');
              if(img) img.style.opacity = 0;
              const arrow = e.currentTarget.querySelector('.card-arrow');
              if(arrow) arrow.style.color = "var(--ink-mute)";
            }}
            >
              <div className="card-bg-img" style={{
                position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                backgroundImage: `url(${s.bgImage})`, backgroundSize: "cover", backgroundPosition: "center",
                opacity: 0, transition: "opacity .4s ease", mixBlendMode: "overlay",
                pointerEvents: "none", zIndex: 0
              }} />
              
              <div style={{ display: "flex", justifyContent: "space-between",
                    alignItems: "start", position: "relative", zIndex: 1 }}>
                <div className="mono" style={{ fontSize: 12, letterSpacing: "0.06em" }}>{s.n}</div>
                <span className="card-arrow" style={{ fontSize: 18, color: "var(--ink-mute)", transition: "transform .2s, color .2s" }}>↗</span>
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ fontSize: 26, fontWeight: 500,
                      letterSpacing: "-0.025em", margin: "0 0 6px",
                      lineHeight: 1.1 }}>{s.t}</h3>
                <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic",
                      fontSize: 17, opacity: 0.8 }}>{s.sub}</div>
              </div>
              <p className="body-sm" style={{ flex: 1, maxWidth: "32ch", position: "relative", zIndex: 1, color: "inherit", opacity: 0.8 }}>{s.d}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
                {s.stack.map(x => (
                  <span key={x} className="mono" style={{
                    fontSize: 10.5,
                    padding: "3px 8px",
                    border: "1px solid color-mix(in srgb, currentColor 20%, transparent)",
                    borderRadius: 4,
                    letterSpacing: "0.02em",
                  }}>{x}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
