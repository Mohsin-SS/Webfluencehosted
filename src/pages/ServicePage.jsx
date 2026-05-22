import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { PRICING_SERVICES } from '../data/pricing';
import { CASE_STUDIES } from '../data/caseStudies';

export default function ServicePage({ currency }) {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const service = services.find(s => s.slug === slug);
  const pricing = PRICING_SERVICES.find(p => p.id === slug);
  const relatedCases = CASE_STUDIES.filter(c => c.serviceSlug === slug);

  if (!service) {
    return (
      <div className="section container" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 className="display-md">Service not found.</h1>
        <Link to="/" className="btn btn-ghost" style={{ alignSelf: "flex-start", marginTop: 24 }}>← Back home</Link>
      </div>
    );
  }

  const fmt = (usd, pkr) => {
    if (usd == null) return null;
    return currency === "USD"
      ? { sym: "$", n: usd.toLocaleString("en-US") }
      : { sym: "₨", n: pkr.toLocaleString("en-US") };
  };

  return (
    <div style={{ paddingBottom: 64 }}>
      {/* Hero */}
      <section className="section" style={{ 
        paddingTop: 120, paddingBottom: 100, borderBottom: "1px solid var(--line)",
        position: "relative", overflow: "hidden",
        background: "var(--ink)", color: "var(--bg)"
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          backgroundImage: `url(${service.bgImage})`, backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.35, mixBlendMode: "luminosity", pointerEvents: "none", zIndex: 0
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <div className="mono" style={{ fontSize: 12, padding: "6px 14px", borderRadius: 999, background: "color-mix(in srgb, var(--bg) 15%, transparent)", color: "var(--bg)" }}>
            SERVICE {service.n}
          </div>
          <h1 className="display-xl" style={{ margin: 0 }}>
            {service.t}
          </h1>
          <p className="body-lg" style={{ fontSize: 24, maxWidth: "34ch", color: "color-mix(in srgb, var(--bg) 85%, transparent)" }}>
            {service.sub}
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 12 }}>
            {service.stack.map(x => (
              <span key={x} className="mono" style={{ fontSize: 12, padding: "4px 10px", border: "1px solid color-mix(in srgb, var(--bg) 30%, transparent)", borderRadius: 6, color: "var(--bg)" }}>
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Details Container */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 80 }}>
            
            {/* Left: Overview & Methodology */}
            <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
              <div>
                <span className="eyebrow">Overview</span>
                <div className="body-lg" style={{ fontSize: 20, lineHeight: 1.6, color: "var(--ink)", display: "flex", flexDirection: "column", gap: 24 }}>
                  {service.overview.split('\n\n').map((p, i) => <p key={i} style={{ margin: 0 }}>{p}</p>)}
                </div>
              </div>

              <div>
                <span className="eyebrow">Methodology</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                  {service.methodology.map((m, i) => (
                    <div key={i} style={{ display: "flex", gap: 24, paddingBottom: 32, borderBottom: i !== service.methodology.length - 1 ? "1px solid var(--line-soft)" : "none" }}>
                      <div className="mono" style={{ fontSize: 14, color: "var(--ink-mute)", paddingTop: 4 }}>{m.step}</div>
                      <div>
                        <h4 style={{ fontSize: 18, fontWeight: 500, marginBottom: 8, letterSpacing: "-0.01em" }}>{m.title}</h4>
                        <p className="body-sm" style={{ margin: 0, fontSize: 15, maxWidth: "42ch" }}>{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Deliverables */}
            <div>
              <div style={{ background: "var(--bg-elev)", padding: 40, border: "1px solid var(--line)", position: "sticky", top: 100 }}>
                <span className="eyebrow">Deliverables</span>
                <ul style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 24 }}>
                  {service.deliverables.map((d, i) => (
                    <li key={i} style={{ display: "flex", gap: 16, alignItems: "start" }}>
                      <span style={{ color: "var(--accent)" }}>✓</span>
                      <span className="body-sm" style={{ fontSize: 15, color: "var(--ink)" }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing specific to this service */}
      {pricing && (
        <section className="section" style={{ background: "var(--bg-elev)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="display-md" style={{ margin: 0 }}>Pricing Packages</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
              {pricing.packages.map((pkg, i) => {
                const price = fmt(pkg.usd, pkg.pkr);
                const isPop = pkg.popular;
                return (
                  <div key={i} style={{
                    background: isPop ? "var(--ink)" : "var(--bg)",
                    color: isPop ? "var(--bg)" : "var(--ink)",
                    border: "1px solid", borderColor: isPop ? "var(--ink)" : "var(--line)",
                    padding: 32, display: "flex", flexDirection: "column", position: "relative"
                  }}>
                    {isPop && (
                      <div style={{ position: "absolute", top: -12, left: 32, background: "var(--accent)", color: "var(--bg)", padding: "4px 12px", borderRadius: 999, fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600 }}>Most popular</div>
                    )}
                    <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 8 }}>{pkg.n}</h3>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 16 }}>
                      {pkg.from && <span style={{ fontSize: 14, color: isPop ? "color-mix(in srgb, var(--bg) 60%, transparent)" : "var(--ink-mute)" }}>From</span>}
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em" }}>{price.sym}{price.n}</span>
                      <span style={{ fontSize: 14, color: isPop ? "color-mix(in srgb, var(--bg) 60%, transparent)" : "var(--ink-mute)" }}>{pkg.suffix}</span>
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.5, color: isPop ? "var(--bg)" : "var(--ink-soft)", marginBottom: 32, paddingBottom: 24, borderBottom: `1px solid ${isPop ? "color-mix(in srgb, var(--bg) 20%, transparent)" : "var(--line-soft)"}` }}>{pkg.lead}</p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1, marginBottom: 40 }}>
                      {pkg.feats.map((f, j) => (
                        <li key={j} style={{ display: "flex", gap: 12, fontSize: 14.5 }}>
                          <span style={{ color: "var(--accent)" }}>✓</span>
                          <span style={{ color: isPop ? "color-mix(in srgb, var(--bg) 85%, transparent)" : "var(--ink-soft)" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/#contact" className={isPop ? "btn btn-primary" : "btn btn-ghost"} style={{ width: "100%" }}>{pkg.cta}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies specific to this service */}
      {relatedCases.length > 0 && (
        <section className="section">
          <div className="container">
            <div style={{ marginBottom: 48 }}>
              <span className="eyebrow">Related Work</span>
              <h2 className="display-md" style={{ margin: 0 }}>Recent {service.t} Case Studies</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
              {relatedCases.map((study) => (
                <article key={study.slug} style={{ background: "var(--bg-elev)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  <div style={{ height: 4, background: study.accent, width: "100%" }} />
                  <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                      <div style={{ fontSize: 18, fontWeight: 500 }}>{study.client}</div>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1.15, margin: 0 }}>{study.headline}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: "auto", paddingTop: 24, borderTop: "1px solid var(--line-soft)" }}>
                      {study.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                          <div style={{ fontFamily: "var(--font-sans)", fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", color: study.accent, minWidth: 70 }}>{m.v}</div>
                          <div className="body-sm">{m.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
