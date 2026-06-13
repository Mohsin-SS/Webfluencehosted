import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" data-screen-label="Contact" className="section">
      <div className="container">
        <div className="grid-2col">

          {/* Left Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <span className="eyebrow">07 — Contact</span>
              <h2 className="display-lg" style={{ margin: 0 }}>Start a <em>conversation.</em></h2>
            </div>

            <p className="body-lg" style={{ maxWidth: "38ch" }}>
              Whether you need a full platform build or a dedicated engineering pod, we'd love to hear about it.
            </p>

            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 24 }}>
              <div>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.06em", marginBottom: 4 }}>EMAIL</div>
                <a href="mailto:hello@webfluence.dev" style={{ fontSize: 18, fontWeight: 500, textDecoration: "underline" }}>hello@webfluence.dev</a>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.06em", marginBottom: 4 }}>PHONE</div>
                <div style={{ fontSize: 18, fontWeight: 500 }}>+92 321 828 2725</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.06em", marginBottom: 4 }}>LOCATION</div>
                <div style={{ fontSize: 18, fontWeight: 500 }}>Karachi, Pakistan</div>
                <div className="body-sm" style={{ marginTop: 4 }}>We overlap with GMT+5 (UK/EU) and flex for US-East.</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div>
            {status === 'success' ? (
              <div style={{ padding: 48, background: "var(--bg-elev)", border: "1px solid var(--line)", textAlign: "center" }}>
                <h3 style={{ fontSize: 24, marginBottom: 12 }}>Message received.</h3>
                <p className="body-sm">We'll get back to you within 24 hours to schedule a discovery call.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-ghost btn-sm" style={{ marginTop: 24 }}>Send another message</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div className="form-row">
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label className="mono" style={{ fontSize: 11, color: "var(--ink-mute)" }}>NAME *</label>
                    <input required name="from_name" type="text" style={{ padding: 14, border: "1px solid var(--line)", background: "transparent", color: "var(--ink)", fontFamily: "var(--font-sans)", fontSize: 16, outline: "none", borderRadius: 0 }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label className="mono" style={{ fontSize: 11, color: "var(--ink-mute)" }}>EMAIL *</label>
                    <input required name="from_email" type="email" style={{ padding: 14, border: "1px solid var(--line)", background: "transparent", color: "var(--ink)", fontFamily: "var(--font-sans)", fontSize: 16, outline: "none", borderRadius: 0 }} />
                  </div>
                </div>

                <div className="form-row">
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label className="mono" style={{ fontSize: 11, color: "var(--ink-mute)" }}>COMPANY (OPTIONAL)</label>
                    <input name="company" type="text" style={{ padding: 14, border: "1px solid var(--line)", background: "transparent", color: "var(--ink)", fontFamily: "var(--font-sans)", fontSize: 16, outline: "none", borderRadius: 0 }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label className="mono" style={{ fontSize: 11, color: "var(--ink-mute)" }}>BUDGET RANGE</label>
                    <select name="budget" style={{ padding: 14, border: "1px solid var(--line)", background: "var(--bg)", color: "var(--ink)", fontFamily: "var(--font-sans)", fontSize: 16, outline: "none", borderRadius: 0, appearance: "none" }}>
                      <option>&lt; $5k</option>
                      <option>$5k – $15k</option>
                      <option>$15k – $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label className="mono" style={{ fontSize: 11, color: "var(--ink-mute)" }}>MESSAGE *</label>
                  <textarea required name="message" rows="5" style={{ padding: 14, border: "1px solid var(--line)", background: "transparent", color: "var(--ink)", fontFamily: "var(--font-sans)", fontSize: 16, outline: "none", resize: "vertical", borderRadius: 0 }}></textarea>
                </div>

                {status === 'error' && (
                  <p style={{ fontSize: 14, color: "#e84a1c" }}>Something went wrong. Please try emailing us directly.</p>
                )}

                <button type="submit" disabled={status === 'submitting'} className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>
                  {status === 'submitting' ? 'Sending...' : 'Send brief →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
