import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data/caseStudies';

function CaseCard({ study, index }) {
  const [hovered, setHovered] = React.useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <Link
      to={`/case-studies/${study.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "flex" }}
    >
      <article
        className="reveal"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "32px 32px 28px",
          background: hovered ? "var(--bg-elev)" : "transparent",
          border: "1px solid var(--line-soft)",
          transition: "background .2s",
          cursor: "pointer",
        }}
      >

        {/* Row 1 — index + industry */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 32,
        }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--ink-mute)",
            letterSpacing: "0.04em",
          }}>
            {num}
          </span>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--ink-mute)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>
            {study.industry}
          </span>
        </div>

        {/* Row 2 — client */}
        <div style={{
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
          marginBottom: 12,
          fontFamily: "var(--font-sans)",
        }}>
          {study.client}
        </div>

        {/* Row 3 — headline */}
        {study.bgImage && (
          <div style={{
            height: 160,
            marginBottom: 24,
            borderRadius: 8,
            backgroundImage: `url(${study.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: hovered ? 1 : 0.8,
            transition: "opacity .2s",
            border: "1px solid var(--line-soft)",
          }} />
        )}
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)",
          fontWeight: 400,
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
          color: "var(--ink)",
          margin: 0,
          flex: 1,
        }}>
          {study.headline}
        </h3>

        {/* Row 4 — metrics */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0 24px",
          marginTop: 32,
          paddingTop: 24,
          borderTop: "1px solid var(--line-soft)",
        }}>
          {study.metrics.slice(0, 2).map((m, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.5rem, 2vw, 1.875rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "var(--ink)",
                lineHeight: 1,
              }}>
                {m.v}
              </div>
              <div style={{
                marginTop: 6,
                fontSize: 11,
                lineHeight: 1.5,
                color: "var(--ink-mute)",
                fontFamily: "var(--font-sans)",
              }}>
                {m.l}
              </div>
            </div>
          ))}
        </div>

        {/* Row 5 — footer */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 24,
        }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--ink-mute)",
            letterSpacing: "0.04em",
          }}>
            {study.location} · {study.year}
          </span>
          <span style={{
            fontSize: 16,
            color: hovered ? "var(--ink)" : "var(--ink-mute)",
            transition: "color .2s, transform .2s",
            display: "inline-block",
            transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
          }}>
            ↗
          </span>
        </div>

      </article>
    </Link>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" data-screen-label="Work" className="section">
      <div className="container">

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span className="eyebrow">03 — Case Studies</span>
            <h2 className="display-lg" style={{ margin: 0, maxWidth: "20ch" }}>
              Results we can point to, <em>not just talk about.</em>
            </h2>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.04em" }}>
            {CASE_STUDIES.length} projects
          </span>
        </div>

        <div className="cases-grid">
          {CASE_STUDIES.slice(0, 6).map((study, i) => (
            <div key={study.slug} className="cases-grid-item">
              <CaseCard study={study} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
