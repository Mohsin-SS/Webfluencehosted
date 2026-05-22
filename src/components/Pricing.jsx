import React, { useState } from 'react';
import { PRICING_SERVICES } from '../data/pricing';

export default function Pricing({ currency, setCurrency }) {
  const [activeSvc, setActiveSvc] = useState("web");

  const fmt = (usd, pkr) => {
    if (usd == null) return null;
    return currency === "USD"
      ? { sym: "$", n: usd.toLocaleString("en-US") }
      : { sym: "₨", n: pkr.toLocaleString("en-US") };
  };

  const svc = PRICING_SERVICES.find(s => s.id === activeSvc) || PRICING_SERVICES[0];

  return (
    <section id="pricing" data-screen-label="Pricing" className="section">
      <div className="container">
        {/* Section header */}
        <div style={{ display: "flex", justifyContent: "space-between",
              alignItems: "end", marginBottom: 40, gap: 40, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span className="eyebrow">05 — Pricing</span>
            <h2 className="display-lg" style={{ margin: 0, maxWidth: "18ch" }}>
              Priced per service. <em>Fixed-fee, not retainers in disguise.</em>
            </h2>
            <p className="body-lg" style={{ marginTop: 8 }}>
              Pick a service to see its package tiers. Every engagement starts with a
              one-week discovery sprint; quoted numbers below are firm post-discovery.
            </p>
          </div>

          {/* Currency toggle */}
          <div style={{
            display: "inline-flex", alignItems: "center",
            padding: 4,
            background: "color-mix(in srgb, var(--ink) 6%, transparent)",
            borderRadius: 999,
            border: "1px solid var(--line-soft)",
          }}>
            {["USD", "PKR"].map(c => (
              <button key={c}
                onClick={() => setCurrency(c)}
                style={{
                  appearance: "none", border: 0, cursor: "pointer",
                  fontFamily: "var(--font-mono)", fontSize: 12,
                  letterSpacing: "0.06em",
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: currency === c ? "var(--ink)" : "transparent",
                  color: currency === c ? "var(--bg)" : "var(--ink-soft)",
                  transition: "background .2s, color .2s",
                }}>
                {c === "USD" ? "USD $" : "PKR ₨"}
              </button>
            ))}
          </div>
        </div>

        {/* Service tabs */}
        <div role="tablist" style={{
          display: "flex", flexWrap: "wrap", gap: 8,
          padding: "8px 0",
          marginBottom: 32,
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          paddingTop: 20, paddingBottom: 20,
        }}>
          {PRICING_SERVICES.map((s) => {
            const on = s.id === activeSvc;
            return (
              <button key={s.id} role="tab" aria-selected={on}
                onClick={() => setActiveSvc(s.id)}
                style={{
                  appearance: "none", cursor: "pointer",
                  border: "1px solid",
                  borderColor: on ? "var(--ink)" : "var(--line)",
                  background: on ? "var(--ink)" : "transparent",
                  color: on ? "var(--bg)" : "var(--ink)",
                  borderRadius: 999,
                  padding: "10px 18px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14, fontWeight: 500,
                  letterSpacing: "-0.005em",
                  transition: "all 0.2s ease",
                }}>
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}>
          {svc.packages.map((pkg, i) => {
            const price = fmt(pkg.usd, pkg.pkr);
            const isPop = pkg.popular;
            
            return (
              <div key={i} style={{
                background: isPop ? "var(--ink)" : "var(--bg-elev)",
                color: isPop ? "var(--bg)" : "var(--ink)",
                border: "1px solid",
                borderColor: isPop ? "var(--ink)" : "var(--line)",
                padding: 32,
                display: "flex", flexDirection: "column",
                position: "relative",
              }}>
                {isPop && (
                  <div style={{
                    position: "absolute", top: -12, left: 32,
                    background: "var(--accent)", color: "var(--bg)",
                    padding: "4px 12px", borderRadius: 999,
                    fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
                    letterSpacing: "0.02em",
                  }}>Most popular</div>
                )}
                
                <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 8 }}>{pkg.n}</h3>
                
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 16 }}>
                  {pkg.from && <span style={{ fontSize: 14, color: isPop ? "color-mix(in srgb, var(--bg) 60%, transparent)" : "var(--ink-mute)" }}>From</span>}
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em" }}>
                    {price.sym}{price.n}
                  </span>
                  <span style={{ fontSize: 14, color: isPop ? "color-mix(in srgb, var(--bg) 60%, transparent)" : "var(--ink-mute)" }}>
                    {pkg.suffix}
                  </span>
                </div>
                
                <p style={{ 
                  fontSize: 15, lineHeight: 1.5, 
                  color: isPop ? "var(--bg)" : "var(--ink-soft)",
                  marginBottom: 32,
                  paddingBottom: 24,
                  borderBottom: `1px solid ${isPop ? "color-mix(in srgb, var(--bg) 20%, transparent)" : "var(--line-soft)"}`
                }}>
                  {pkg.lead}
                </p>
                
                <ul style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1, marginBottom: 40 }}>
                  {pkg.feats.map((f, j) => (
                    <li key={j} style={{ display: "flex", gap: 12, fontSize: 14.5 }}>
                      <span style={{ color: "var(--accent)" }}>✓</span>
                      <span style={{ color: isPop ? "color-mix(in srgb, var(--bg) 85%, transparent)" : "var(--ink-soft)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className={isPop ? "btn btn-primary" : "btn btn-ghost"} style={{ width: "100%" }}>
                  {pkg.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
