import React from 'react';

export default function About() {
  return (
    <section id="about" data-screen-label="About" className="section">
      <div className="container">
        <div className="grid-2col" style={{ alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "sticky", top: 100 }}>
            <span className="eyebrow">01 — About</span>
            <h2 className="display-md" style={{ margin: 0 }}>
              Built like an in‑house team, <em>without the headcount.</em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <p className="body-lg" style={{ fontSize: 22, color: "var(--ink)",
                  maxWidth: "44ch", lineHeight: 1.45 }}>
              We started in 2018 as two engineers tired of agency middlemen, slide-deck
              estimates, and code that became someone else's problem to maintain.
              Today we're a 14-person studio of senior engineers, product designers,
              and infrastructure specialists.
            </p>

            <p className="body-lg">
              Every engagement starts with a one-week scoping sprint. You leave with
              a written spec, a fixed quote, and a Loom of working scaffolding —
              before you commit to anything. We work in two-week increments,
              deploy on day one, and hand over CI/CD, infrastructure-as-code,
              and architectural decision records on day last.
            </p>

            {/* Principles grid */}
            <div className="principles-grid">
              {[
                { n: "01", t: "Senior-only delivery",
                  d: "No bench, no juniors learning on your invoice. Every line ships from a five-year-plus engineer." },
                { n: "02", t: "Fixed-scope, fixed-fee",
                  d: "We commit to a scope and a number after the discovery week. Surprises are on us." },
                { n: "03", t: "You own everything",
                  d: "Repo, infra, vendor accounts, decisions log. We don't gate-keep your platform." },
                { n: "04", t: "Built to be inherited",
                  d: "Test coverage, runbooks, ADRs. Your future hire can be productive in a week." },
              ].map((p, i) => (
                <div key={p.n} className="principles-grid-item">
                  <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)",
                        letterSpacing: "0.06em", marginBottom: 10 }}>{p.n}</div>
                  <div style={{ fontSize: 18, fontWeight: 500,
                        letterSpacing: "-0.015em", marginBottom: 6 }}>{p.t}</div>
                  <div className="body-sm" style={{ maxWidth: "38ch" }}>{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
