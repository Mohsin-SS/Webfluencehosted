import React, { useState } from 'react';

const ACCENT_OPTIONS = [
  { value: "cobalt", swatch: ["#2638e0", "#f5f2ea", "#0c0c0a"] },
  { value: "ember",  swatch: ["#e84a1c", "#f5f2ea", "#0c0c0a"] },
  { value: "forest", swatch: ["#1d6b4a", "#f5f2ea", "#0c0c0a"] },
  { value: "ink",    swatch: ["#0c0c0a", "#f5f2ea", "#8a8980"] },
];

const FONT_PAIRS = {
  "geist-instrument": { label: "Geist + Instrument" },
  "manrope-fraunces": { label: "Manrope + Fraunces" },
  "spacegrotesk-newsreader": { label: "Space Grotesk + Newsreader" },
};

export default function TweaksPanel({ tweaks, setTweak, currency, setCurrency }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 100 }}>
      {/* Toggle Button */}
      <button 
        onClick={() => setOpen(!open)}
        style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "var(--ink)", color: "var(--bg)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          position: "absolute", bottom: 0, right: 0, zIndex: 101,
          transition: "transform 0.2s",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>

      {/* Panel */}
      <div style={{
        position: "absolute", bottom: 64, right: 0,
        width: 280, padding: 24, borderRadius: 16,
        background: "color-mix(in srgb, var(--bg-elev) 85%, transparent)",
        backdropFilter: "blur(24px) saturate(150%)",
        border: "1px solid var(--line)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
        display: open ? "flex" : "none",
        flexDirection: "column", gap: 24,
      }}>
        
        {/* Theme */}
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", marginBottom: 12 }}>THEME</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["light", "dark"].map(t => (
              <button key={t} onClick={() => setTweak("theme", t)} style={{
                flex: 1, padding: "8px 0", borderRadius: 8, cursor: "pointer",
                background: tweaks.theme === t ? "var(--ink)" : "transparent",
                color: tweaks.theme === t ? "var(--bg)" : "var(--ink)",
                border: `1px solid ${tweaks.theme === t ? "var(--ink)" : "var(--line)"}`,
                fontFamily: "var(--font-sans)", fontSize: 13, textTransform: "capitalize"
              }}>{t}</button>
            ))}
          </div>
        </div>

        {/* Accent */}
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", marginBottom: 12 }}>ACCENT</div>
          <div style={{ display: "flex", gap: 12 }}>
            {ACCENT_OPTIONS.map(opt => (
              <button key={opt.value} onClick={() => setTweak("accent", opt.value)} style={{
                width: 24, height: 24, borderRadius: "50%", cursor: "pointer",
                background: opt.swatch[0],
                border: tweaks.accent === opt.value ? "2px solid var(--ink)" : "1px solid var(--line)",
                outline: tweaks.accent === opt.value ? "2px solid var(--bg)" : "none",
                outlineOffset: -4,
              }} title={opt.value} />
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", marginBottom: 12 }}>TYPOGRAPHY</div>
          <select value={tweaks.fontPair} onChange={(e) => setTweak("fontPair", e.target.value)} style={{
            width: "100%", padding: "8px 12px", borderRadius: 8, cursor: "pointer",
            background: "transparent", color: "var(--ink)",
            border: "1px solid var(--line)", fontFamily: "var(--font-sans)", fontSize: 13,
            outline: "none"
          }}>
            {Object.entries(FONT_PAIRS).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>

        {/* Layout Density */}
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", marginBottom: 12 }}>DENSITY</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["compact", "regular", "spacious"].map(d => (
              <button key={d} onClick={() => setTweak("density", d)} style={{
                flex: 1, padding: "8px 0", borderRadius: 8, cursor: "pointer",
                background: tweaks.density === d ? "var(--ink)" : "transparent",
                color: tweaks.density === d ? "var(--bg)" : "var(--ink)",
                border: `1px solid ${tweaks.density === d ? "var(--ink)" : "var(--line)"}`,
                fontFamily: "var(--font-sans)", fontSize: 13, textTransform: "capitalize"
              }}>{d}</button>
            ))}
          </div>
        </div>

        {/* Currency Demo */}
        <div style={{ paddingTop: 20, borderTop: "1px solid var(--line)" }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", marginBottom: 12 }}>PRICING CURRENCY</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["USD", "PKR"].map(c => (
              <button key={c} onClick={() => setCurrency(c)} style={{
                flex: 1, padding: "8px 0", borderRadius: 8, cursor: "pointer",
                background: currency === c ? "var(--ink)" : "transparent",
                color: currency === c ? "var(--bg)" : "var(--ink)",
                border: `1px solid ${currency === c ? "var(--ink)" : "var(--line)"}`,
                fontFamily: "var(--font-sans)", fontSize: 13,
              }}>{c}</button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
