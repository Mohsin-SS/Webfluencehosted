import { useState, useEffect } from 'react';

const TWEAK_DEFAULTS = {
  theme: "light",
  accent: "cobalt",
  fontPair: "geist-instrument",
  density: "regular"
};

const FONT_PAIRS = {
  "geist-instrument": {
    sans: '"Geist", ui-sans-serif, system-ui, sans-serif',
    display: '"Instrument Serif", "Times New Roman", serif',
    mono: '"Geist Mono", ui-monospace, monospace',
  },
  "manrope-fraunces": {
    sans: '"Manrope", ui-sans-serif, system-ui, sans-serif',
    display: '"Fraunces", "Times New Roman", serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
  "spacegrotesk-newsreader": {
    sans: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
    display: '"Newsreader", "Times New Roman", serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
};

export default function useTweaks(initialDefaults = TWEAK_DEFAULTS) {
  const [tweaks, setTweaks] = useState(() => {
    try {
      const saved = localStorage.getItem('wf-tweaks');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Force the theme to be 'light' for now to prevent dark mode takeover
        return { ...initialDefaults, ...parsed, theme: "light" };
      }
    } catch {}
    return { ...initialDefaults, theme: "light" };
  });

  const setTweak = (key, value) => {
    setTweaks(prev => {
      const next = { ...prev, [key]: value };
      try {
        localStorage.setItem('wf-tweaks', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Apply Theme & Accent & Density to <html> classes
  useEffect(() => {
    const html = document.documentElement;
    html.className = ""; // reset
    html.classList.add(tweaks.theme === "dark" ? "theme-dark" : "theme-light");
    html.classList.add(`accent-${tweaks.accent}`);
    html.classList.add(`density-${tweaks.density}`);
  }, [tweaks.theme, tweaks.accent, tweaks.density]);

  // Apply Density padding variable
  useEffect(() => {
    const r = document.documentElement.style;
    if (tweaks.density === "compact") {
      r.setProperty("--section-pad", "80px");
    } else if (tweaks.density === "spacious") {
      r.setProperty("--section-pad", "160px");
    } else {
      r.setProperty("--section-pad", "120px");
    }
  }, [tweaks.density]);

  // Apply Fonts
  useEffect(() => {
    const pair = FONT_PAIRS[tweaks.fontPair] || FONT_PAIRS["geist-instrument"];
    const r = document.documentElement.style;
    r.setProperty("--font-sans", pair.sans);
    r.setProperty("--font-display", pair.display);
    r.setProperty("--font-mono", pair.mono);
  }, [tweaks.fontPair]);

  return [tweaks, setTweak];
}
