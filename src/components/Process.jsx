import React from 'react';

export default function Process() {
  const steps = [
    { w: "Week 0", t: "Discovery sprint",
      d: "Five working days. We meet your team, audit existing code/infra, write a spec, and produce a Loom walkthrough of a working scaffold.",
      out: "Written spec · fixed quote · working scaffold" },
    { w: "Week 1–2", t: "Architecture & first deploy",
      d: "Repo, CI/CD, infra-as-code, design system, and the riskiest technical path live in staging within ten working days.",
      out: "Staging URL · CI green · auth + billing live" },
    { w: "Week 3–N", t: "Two‑week increments",
      d: "Demo every other Friday. Burndown is public. We re-plan after each demo so scope tracks reality, not the kickoff doc.",
      out: "Bi-weekly demos · public burndown · loom logs" },
    { w: "Launch", t: "Handover & care",
      d: "ADRs, runbooks, on-call rotation training, 30-day warranty on every feature. Care retainer is optional, never assumed.",
      out: "Runbooks · ADRs · 30-day warranty" },
  ];
  return (
    <section id="process" data-screen-label="Process" className="section"
        style={{ background: "var(--ink)", color: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between",
              alignItems: "end", marginBottom: 64, gap: 40, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span className="eyebrow" style={{ color: "color-mix(in srgb, var(--bg) 55%, transparent)" }}>
              04 — How we work
            </span>
            <h2 className="display-lg" style={{ margin: 0, color: "var(--bg)", maxWidth: "16ch" }}>
              A predictable cadence, <em style={{ color: "var(--accent)" }}>from week zero.</em>
            </h2>
          </div>
          <p className="body-lg" style={{ maxWidth: "38ch", margin: 0,
                color: "color-mix(in srgb, var(--bg) 70%, transparent)" }}>
            No discovery phase that quietly becomes the whole project.
            No "we'll know more after design." A clear handshake every fortnight.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, i) => (
            <div key={i} className="process-grid-item" style={{
              display: "flex", flexDirection: "column", gap: 16,
              position: "relative",
            }}>
              <div style={{
                display: "inline-flex", alignSelf: "flex-start",
                padding: "4px 10px",
                border: "1px solid color-mix(in srgb, var(--bg) 30%, transparent)",
                borderRadius: 999,
                fontFamily: "var(--font-mono)",
                fontSize: 11, letterSpacing: "0.06em",
                color: "var(--accent)",
              }}>{s.w}</div>

              <div>
                <h3 style={{ fontSize: 24, fontWeight: 500,
                      letterSpacing: "-0.025em", margin: "0 0 10px",
                      color: "var(--bg)", lineHeight: 1.1 }}>{s.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55,
                      color: "color-mix(in srgb, var(--bg) 68%, transparent)",
                      margin: 0, maxWidth: "32ch" }}>{s.d}</p>
              </div>

              <div style={{
                marginTop: 8, paddingTop: 16,
                borderTop: "1px solid color-mix(in srgb, var(--bg) 12%, transparent)",
                fontFamily: "var(--font-mono)",
                fontSize: 11, letterSpacing: "0.02em",
                color: "color-mix(in srgb, var(--bg) 55%, transparent)",
                textTransform: "uppercase",
              }}>Output<br/>
                <span style={{ color: "var(--bg)", textTransform: "none",
                      fontFamily: "var(--font-sans)", fontSize: 13.5,
                      letterSpacing: "-0.005em", display: "block", marginTop: 6 }}>
                  {s.out}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
