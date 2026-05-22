import React from 'react';

export default function Logo({ size = 28 }) {
  return (
    <a href="#home" className="brand" aria-label="Webfluence — home"
       style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <clipPath id="wfclip"><rect width="32" height="32" rx="8" /></clipPath>
        </defs>
        <g clipPath="url(#wfclip)">
          <rect width="32" height="32" fill="var(--ink)" />
          <path d="M3 12 L9 22 L13 14 L17 22 L21 14 L25 22 L29 10"
                fill="none" stroke="var(--bg)" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="29" cy="10" r="2.4" fill="var(--accent)" />
        </g>
      </svg>
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 600,
        letterSpacing: '-0.02em', color: 'var(--ink)'
      }}>Webfluence</span>
    </a>
  );
}
