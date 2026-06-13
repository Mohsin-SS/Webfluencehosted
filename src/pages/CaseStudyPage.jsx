import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data/caseStudies';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = CASE_STUDIES.find(c => c.slug === slug);

  if (!study) {
    return (
      <div className="section container" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 className="display-md">Case study not found.</h1>
        <Link to="/" className="btn btn-ghost" style={{ alignSelf: "flex-start", marginTop: 24 }}>← Back home</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 80 }}>

      {/* Hero */}
      <section className="section" style={{
        paddingTop: 120, paddingBottom: 100,
        background: study.bgImage ? `linear-gradient(to bottom, rgba(12,12,10,0.4), #0c0c0a), url(${study.bgImage}) center/cover no-repeat` : "#0c0c0a",
        color: "#f5f2ea",
        borderBottom: "1px solid rgba(245,242,234,0.08)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "radial-gradient(rgba(245,242,234,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }} />
        {/* Accent glow — primary */}
        <div style={{
          position: "absolute", zIndex: 0, pointerEvents: "none",
          width: 700, height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${study.accent}28 0%, transparent 65%)`,
          top: "-20%", right: "-10%",
          filter: "blur(40px)",
        }} />
        {/* Accent glow — secondary, softer */}
        <div style={{
          position: "absolute", zIndex: 0, pointerEvents: "none",
          width: 500, height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${study.accent}14 0%, transparent 70%)`,
          bottom: "-10%", left: "5%",
          filter: "blur(60px)",
        }} />
        {/* Noise grain overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          opacity: 0.4,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: 860, margin: "0 auto" }}>

          <Link to="/#work" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 13, color: "rgba(245,242,234,0.45)",
            marginBottom: 40, letterSpacing: "0.01em",
          }}>
            ← Back to work
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <span className="mono" style={{
              fontSize: 11, padding: "4px 12px",
              border: "1px solid rgba(245,242,234,0.15)",
              borderRadius: 999, color: "rgba(245,242,234,0.6)",
            }}>{study.service}</span>
            <span className="mono" style={{ fontSize: 11, color: "rgba(245,242,234,0.35)" }}>
              {study.location} · {study.year}
            </span>
          </div>

          <h1 className="display-xl" style={{ margin: 0, lineHeight: 1.1, color: "#f5f2ea" }}>
            {study.headline}
          </h1>

          <p style={{
            marginTop: 28, fontSize: 20, lineHeight: 1.65,
            color: "rgba(245,242,234,0.6)", maxWidth: "54ch",
          }}>
            {study.summary}
          </p>

          {/* Metrics row */}
          <div className="study-metrics">
            {study.metrics.map((m, i) => (
              <div key={i} className="study-metric-item">
                <div style={{
                  fontFamily: "var(--font-sans)", fontSize: 40, fontWeight: 600,
                  letterSpacing: "-0.035em", color: study.accent, lineHeight: 1,
                }}>{m.v}</div>
                <div style={{
                  marginTop: 8, fontSize: 13, lineHeight: 1.5,
                  color: "rgba(245,242,234,0.45)",
                }}>{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

            {/* Problem */}
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <span className="eyebrow">The Challenge</span>
              <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--ink-soft)", maxWidth: "62ch" }}>
                {study.problem}
              </p>
            </div>

            <div style={{ height: 1, background: "var(--line-soft)" }} />

            {/* Approach */}
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <span className="eyebrow">What We Built</span>
              <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--ink-soft)", maxWidth: "62ch" }}>
                {study.approach}
              </p>
            </div>

            <div style={{ height: 1, background: "var(--line-soft)" }} />

            {/* Result */}
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <span className="eyebrow">The Outcome</span>
              <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--ink-soft)", maxWidth: "62ch" }}>
                {study.result}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Quote */}
      {study.quote && (
        <section style={{
          background: "var(--bg-elev)",
          borderTop: "1px solid var(--line-soft)",
          borderBottom: "1px solid var(--line-soft)",
          padding: "80px 0",
        }}>
          <div className="container" style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{
              width: 40, height: 3,
              background: study.accent,
              marginBottom: 32,
            }} />
            <blockquote style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
              lineHeight: 1.4,
              color: "var(--ink)",
              margin: 0,
              fontStyle: "italic",
            }}>
              "{study.quote.text}"
            </blockquote>
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontWeight: 500, fontSize: 15 }}>{study.quote.author}</div>
              <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>{study.quote.role}</div>
            </div>
          </div>
        </section>
      )}

      {/* Stack */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <span className="eyebrow">Tech Stack</span>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
            {study.stack.map(x => (
              <span key={x} className="mono" style={{
                fontSize: 13, padding: "6px 14px",
                border: "1px solid var(--line)",
                borderRadius: 6, color: "var(--ink-soft)",
              }}>{x}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Other case studies */}
      <section className="section" style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line-soft)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <h2 className="display-md" style={{ margin: 0 }}>More work</h2>
            <Link to="/#work" style={{ fontSize: 14, color: "var(--ink-mute)", textDecoration: "none" }}>
              View all →
            </Link>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}>
            {CASE_STUDIES.filter(c => c.slug !== study.slug).slice(0, 3).map(c => (
              <Link key={c.slug} to={`/case-studies/${c.slug}`} style={{ textDecoration: "none" }}>
                <article style={{
                  background: "var(--bg)", border: "1px solid var(--line)",
                  overflow: "hidden", display: "flex", flexDirection: "column",
                  transition: "transform .25s, box-shadow .25s",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px -6px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ height: 3, background: c.accent }} />
                  <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                      <div style={{ fontSize: 15, fontWeight: 500 }}>{c.client}</div>
                      <span className="mono" style={{ fontSize: 10, padding: "3px 8px", background: "color-mix(in srgb, var(--ink) 6%, transparent)", borderRadius: 4 }}>{c.service}</span>
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.45, color: "var(--ink-soft)", margin: 0 }}>{c.headline}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
