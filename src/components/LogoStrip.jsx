import React from 'react';

export default function LogoStrip() {
  const logos = [
    "/clients-assets/linkers.png",
    "/clients-assets/links.png",
    "/clients-assets/times.jpeg",
  ];
  // Repeat enough times to make the marquee seamless
  const list = [...logos, ...logos, ...logos, ...logos, ...logos];
  
  return (
    <section className="section-tight" style={{ paddingTop: 40, paddingBottom: 40,
        borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center",
            gap: 48, flexDirection: "column" }}>
        <div className="eyebrow">Trusted by teams from seed to Series C</div>
        <div className="fade-x" style={{ width: "100%", overflow: "hidden" }}>
          <div style={{
            display: "flex", gap: 72, width: "max-content", alignItems: "center",
            animation: "marquee 38s linear infinite",
          }}>
            {list.map((src, i) => (
              <img key={i} src={src} alt="Client logo" style={{
                height: 48,
                maxWidth: 180,
                objectFit: "contain",
                filter: "grayscale(100%)",
                opacity: 0.65,
                transition: "opacity 0.2s, filter 0.2s",
              }} onMouseEnter={e => {
                e.currentTarget.style.opacity = 1;
                e.currentTarget.style.filter = "grayscale(0%)";
              }} onMouseLeave={e => {
                e.currentTarget.style.opacity = 0.65;
                e.currentTarget.style.filter = "grayscale(100%)";
              }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
