import React from 'react';
import { CASE_STUDIES } from '../data/caseStudies';

export default function CaseStudies() {
  return (
    <section id="work" data-screen-label="Work" className="section">
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 56 }}>
          <span className="eyebrow">03 — Case Studies</span>
          <h2 className="display-lg" style={{ margin: 0, maxWidth: "20ch" }}>
            Results we can point to, <em>not just talk about.</em>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}>
          {CASE_STUDIES.slice(0, 3).map((study) => (
            <article key={study.slug} className="reveal" style={{
              background: "var(--bg-elev)",

              display: "flex", flexDirection: "column",
              overflow: "hidden",
              transition: "transform .3s, box-shadow .3s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 24px -8px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ height: 4, background: study.accent, width: "100%" }} />
              <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <div style={{ fontSize: 18, fontWeight: 500 }}>{study.client}</div>
                  <div className="mono" style={{
                    fontSize: 11,
                    padding: "4px 10px",

                    background: "color-mix(in srgb, var(--ink) 6%, transparent)",
                  }}>{study.service}</div>
                </div>

                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  lineHeight: 1.15,
                  margin: 0,
                }}>{study.headline}</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: "auto", paddingTop: 24 }}>
                  {study.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                      <div style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 24,
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        color: study.accent,
                        minWidth: 70,
                      }}>{m.v}</div>
                      <div className="body-sm">{m.l}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                  {study.stack.slice(0, 3).map(x => (
                    <span key={x} className="mono" style={{
                      fontSize: 10.5,
                      padding: "3px 8px",

                      borderRadius: 4,
                      color: "var(--ink-soft)",
                    }}>{x}</span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
