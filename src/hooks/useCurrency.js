import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'wf-currency';

const detectFromTimezone = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    return tz === 'Asia/Karachi' ? 'pkr' : 'usd';
  } catch {
    return 'usd';
  }
};

/**
 * useCurrency — region-aware currency selector with manual override.
 *
 * Priority:
 *   1. localStorage value (user previously toggled)
 *   2. Browser timezone (Asia/Karachi → PKR, else USD)
 *   3. Fallback USD
 *
 * Returns: { currency, setCurrency, toggleCurrency, isAutoDetected }
 */
const useCurrency = () => {
  const [currency, setCurrencyState] = useState(() => {
    if (typeof window === 'undefined') return 'usd';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'pkr' || saved === 'usd') return saved;
    return detectFromTimezone();
  });

  const [isAutoDetected, setIsAutoDetected] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !window.localStorage.getItem(STORAGE_KEY);
  });

  const setCurrency = useCallback((value) => {
    if (value !== 'pkr' && value !== 'usd') return;
    setCurrencyState(value);
    setIsAutoDetected(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* localStorage may be blocked — silently ignore */
    }
  }, []);

  const toggleCurrency = useCallback(() => {
    setCurrency(currency === 'pkr' ? 'usd' : 'pkr');
  }, [currency, setCurrency]);

  // Re-detect on mount in case the SSR/initial detection was off
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.localStorage.getItem(STORAGE_KEY)) return;
    const detected = detectFromTimezone();
    if (detected !== currency) setCurrencyState(detected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { currency, setCurrency, toggleCurrency, isAutoDetected };
};

export default useCurrency;

// Formatting helpers — exported for reuse in other components.
const formatters = {
  pkr: new Intl.NumberFormat('en-PK', { maximumFractionDigits: 0 }),
  usd: new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }),
};

export const formatPrice = (value, currency) => {
  const symbol = currency === 'pkr' ? 'PKR ' : '$';
  return `${symbol}${formatters[currency].format(value)}`;
};

export const formatRange = ([min, max], currency) =>
  `${formatPrice(min, currency)} – ${formatPrice(max, currency)}`;
