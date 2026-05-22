import React from 'react';

export default function LogoStrip() {
  const logos = [
    "Northwind", "Lumen Health", "Karachi Power", "Brightside",
    "Meridian", "Foundry 23", "Helix AI", "Saga Studios",
    "Polaris Labs", "Coastline",
  ];
  const list = [...logos, ...logos];
  
  return (
    <section className="section-tight" style={{ paddingTop: 40, paddingBottom: 40,
        borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center",
            gap: 48, flexDirection: "column" }}>
        <div className="eyebrow">Trusted by teams from seed to Series C</div>
        <div className="fade-x" style={{ width: "100%", overflow: "hidden" }}>
          <div style={{
            display: "flex", gap: 56, width: "max-content",
            animation: "marquee 38s linear infinite",
          }}>
            {list.map((n, i) => (
              <div key={i} style={{
                fontFamily: "var(--font-display)",
                fontSize: 28, fontStyle: "italic",
                color: "var(--ink-mute)",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
                opacity: 0.85,
              }}>{n}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
