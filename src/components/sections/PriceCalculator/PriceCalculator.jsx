import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, Lock, ArrowRight, ShoppingCart } from 'lucide-react';
import WordsPullUp from '../../ui/WordsPullUp';
import useCurrency, { formatRange } from '../../../hooks/useCurrency';
import { pricing } from '../../../data/pricing';
import './PriceCalculator.css';

const tierKeys = ['basic', 'premium'];

const PriceCalculator = ({ productId, productName, onContact }) => {
  const config = pricing[productId];
  const { currency, setCurrency, isAutoDetected } = useCurrency();

  const [tier, setTier] = useState('basic');
  const [selectedAddons, setSelectedAddons] = useState(() => new Set());

  // ────────────────────────────────────────────────────────
  // Total math — sums [min, max] across base tier + add-ons
  // (useMemo declared before early-return to satisfy hooks rules)
  // ────────────────────────────────────────────────────────
  const total = useMemo(() => {
    if (!config) return [0, 0];
    const base = config[tier].price[currency];
    let min = base[0];
    let max = base[1];
    selectedAddons.forEach((id) => {
      const addon = config.addons.find((a) => a.id === id);
      if (!addon) return;
      if (!addon.tiers.includes(tier)) return;
      const [aMin, aMax] = addon.price[currency];
      min += aMin;
      max += aMax;
    });
    return [min, max];
  }, [config, tier, currency, selectedAddons]);

  if (!config) return null;

  const isMonthly = config.billing === 'monthly';
  const periodSuffix = isMonthly ? '/mo' : '';
  const baseRange = config[tier].price[currency];
  const selectedAddonObjects = config.addons.filter(
    (a) => selectedAddons.has(a.id) && a.tiers.includes(tier)
  );

  const toggleAddon = (id, locked) => {
    if (locked) return;
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleTierChange = (next) => {
    setTier(next);
    // When switching to Basic, prune any selected Premium-only add-ons silently.
    setSelectedAddons((prev) => {
      const filtered = new Set();
      prev.forEach((id) => {
        const addon = config.addons.find((a) => a.id === id);
        if (addon && addon.tiers.includes(next)) filtered.add(id);
      });
      return filtered;
    });
  };

  const handleGetQuote = () => {
    const tierName = config[tier].name;
    const addonLines = selectedAddonObjects.length
      ? selectedAddonObjects.map((a) => `  • ${a.name}`).join('\n')
      : '  • (no add-ons)';

    const messageBody = [
      `Hi! I'd like a quote for the following:`,
      ``,
      `Product: ${productName} — ${tierName}`,
      `Selected add-ons:`,
      addonLines,
      ``,
      `Estimated range: ${formatRange(total, currency)}${periodSuffix}`,
      ``,
      `Could you please send me more details?`,
    ].join('\n');

    onContact?.({
      plan: `${productName} — ${tierName}`,
      emailSubject: `${productName} (${tierName}) — Quote Request`,
      prefilledMessage: messageBody,
    });
  };

  return (
    <section className="pc" id="pricing">
      <div className="pc__bg" aria-hidden="true" />

      <div className="container">
        {/* ── Header ─────────────────────────────────── */}
        <div className="pc__header">
          <motion.span
            className="pc__label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pricing
          </motion.span>
          <h2 className="pc__title">
            <WordsPullUp text="Build your package." delay={0.05} />
          </h2>
          <p className="pc__sub">{config.tagline}</p>

          {/* Currency toggle */}
          <div className="pc__currency-toggle" role="tablist" aria-label="Currency">
            <button
              type="button"
              role="tab"
              aria-selected={currency === 'pkr'}
              className={`pc__currency-btn${currency === 'pkr' ? ' active' : ''}`}
              onClick={() => setCurrency('pkr')}
            >
              PKR
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={currency === 'usd'}
              className={`pc__currency-btn${currency === 'usd' ? ' active' : ''}`}
              onClick={() => setCurrency('usd')}
            >
              USD
            </button>
            {isAutoDetected && (
              <span className="pc__currency-hint">auto</span>
            )}
          </div>
        </div>

        {/* ── Two-column layout: configurator + cart ── */}
        <div className="pc__layout">
          {/* Left: tier toggle + add-ons */}
          <div className="pc__config">
            {/* Tier toggle */}
            <div className="pc__tier-toggle" role="tablist" aria-label="Tier">
              {tierKeys.map((key) => {
                const t = config[key];
                const active = tier === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={`pc__tier${active ? ' active' : ''}${key === 'premium' ? ' premium' : ''}`}
                    onClick={() => handleTierChange(key)}
                  >
                    <div className="pc__tier-head">
                      <span className="pc__tier-name">{t.name}</span>
                      {key === 'premium' && (
                        <span className="pc__tier-flag">Most flexible</span>
                      )}
                    </div>
                    <div className="pc__tier-price">
                      {formatRange(t.price[currency], currency)}
                      {periodSuffix && <span className="pc__tier-period">{periodSuffix}</span>}
                    </div>
                    <ul className="pc__tier-includes">
                      {t.includes.slice(0, 5).map((inc) => (
                        <li key={inc}>
                          <Check size={12} strokeWidth={2.5} />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>

            {/* Add-ons header */}
            <div className="pc__addons-head">
              <h3 className="pc__addons-title">Add-ons</h3>
              <span className="pc__addons-count">
                {selectedAddonObjects.length} selected
              </span>
            </div>

            {/* Add-ons grid */}
            <div className="pc__addons">
              {config.addons.map((a) => {
                const locked = !a.tiers.includes(tier);
                const selected = selectedAddons.has(a.id);
                return (
                  <button
                    key={a.id}
                    type="button"
                    className={`pc__addon${selected ? ' selected' : ''}${locked ? ' locked' : ''}`}
                    onClick={() => toggleAddon(a.id, locked)}
                    aria-pressed={selected}
                    aria-disabled={locked}
                  >
                    <div className="pc__addon-check">
                      {locked ? (
                        <Lock size={12} strokeWidth={2.5} />
                      ) : selected ? (
                        <Check size={14} strokeWidth={3} />
                      ) : (
                        <Plus size={14} strokeWidth={2.5} />
                      )}
                    </div>
                    <div className="pc__addon-body">
                      <div className="pc__addon-row">
                        <span className="pc__addon-name">{a.name}</span>
                        {locked && (
                          <span className="pc__addon-flag">Premium only</span>
                        )}
                      </div>
                      <p className="pc__addon-desc">{a.desc}</p>
                    </div>
                    <div className="pc__addon-price">
                      {formatRange(a.price[currency], currency)}
                      {periodSuffix && <span className="pc__addon-period">{periodSuffix}</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: sticky cart */}
          <aside className="pc__cart">
            <div className="pc__cart-inner">
              <div className="pc__cart-head">
                <ShoppingCart size={16} strokeWidth={2.2} />
                <span>Your build</span>
              </div>

              <div className="pc__cart-tier">
                <span className="pc__cart-label">{config[tier].name} plan</span>
                <span className="pc__cart-price">
                  {formatRange(baseRange, currency)}
                  {periodSuffix}
                </span>
              </div>

              <div className="pc__cart-items">
                <AnimatePresence mode="popLayout">
                  {selectedAddonObjects.length === 0 ? (
                    <motion.p
                      key="empty"
                      className="pc__cart-empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Select add-ons to customise your build.
                    </motion.p>
                  ) : (
                    selectedAddonObjects.map((a) => (
                      <motion.div
                        key={a.id}
                        className="pc__cart-item"
                        layout
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 12 }}
                        transition={{ duration: 0.2 }}
                      >
                        <button
                          type="button"
                          className="pc__cart-remove"
                          onClick={() => toggleAddon(a.id, false)}
                          aria-label={`Remove ${a.name}`}
                        >
                          ×
                        </button>
                        <span className="pc__cart-item-name">{a.name}</span>
                        <span className="pc__cart-item-price">
                          {formatRange(a.price[currency], currency)}
                          {periodSuffix}
                        </span>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              <div className="pc__cart-total">
                <span className="pc__cart-total-label">Estimated total</span>
                <motion.span
                  key={`${total[0]}-${total[1]}-${currency}`}
                  className="pc__cart-total-value"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formatRange(total, currency)}
                  {periodSuffix && <span className="pc__cart-total-period">{periodSuffix}</span>}
                </motion.span>
                <span className="pc__cart-total-note">
                  Indicative range — final price confirmed on a discovery call.
                </span>
              </div>

              <button
                type="button"
                className="pc__cart-cta"
                onClick={handleGetQuote}
              >
                Get a Quote
                <ArrowRight size={16} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
