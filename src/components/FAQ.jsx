import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faq';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="section-tight">
      <div className="container" style={{ maxWidth: 800 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="eyebrow">06 — FAQ</span>
          <h2 className="display-lg" style={{ margin: 0 }}>
            Questions we hear in <em>every discovery call.</em>
          </h2>
        </div>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    width: "100%", textAlign: "left",
                    appearance: "none", border: 0, background: "transparent",
                    padding: "24px 0",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    cursor: "pointer",
                    fontFamily: "var(--font-sans)",
                    fontSize: 18, fontWeight: 500,
                    color: "var(--ink)",
                  }}
                >
                  <span style={{ paddingRight: 24 }}>{item.q}</span>
                  <span style={{ 
                    fontSize: 24, fontWeight: 300,
                    transform: isOpen ? "rotate(45deg)" : "none",
                    transition: "transform .3s ease",
                  }}>+</span>
                </button>
                <div style={{ 
                  maxHeight: isOpen ? 500 : 0, 
                  overflow: "hidden",
                  transition: "max-height .4s ease",
                }}>
                  <p className="body-lg" style={{ paddingBottom: 24, fontSize: 16 }}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
