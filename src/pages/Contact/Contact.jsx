import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { EASE } from '../../components/common/Reveal'
import usePageMeta from '../../hooks/usePageMeta'
import { OFFICES, EMAIL } from '../../data/site'
import './Contact.css'

const BUDGETS = ['<$50K', '$50–150K', '$150–500K', '$500K+', 'Not sure yet']

const STEPS = [
  ['Intro call', '30 minutes to understand what you are trying to do and whether we are a fit.'],
  ['Diagnostic proposal', 'A written plan with scope, team, and a fixed price — usually within a week.'],
  ['Start date', 'If we both say yes, we embed and start diagnosing. Working software follows.'],
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  usePageMeta(
    'Contact — Webfluence',
    "Start a project. Reply within one business day. NDAs welcome. If we're not the right fit, we'll point you to who is."
  )

  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | pending | done
  const [ref] = useState(() => `WF-${Math.floor(2000 + Math.random() * 8000)}`)

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((x) => ({ ...x, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.email.trim()) next.email = 'A work email helps us reply.'
    else if (!EMAIL_RE.test(form.email)) next.email = 'That email doesn\'t look right.'
    if (!form.company.trim()) next.company = 'Which company are you with?'
    if (!form.budget) next.budget = 'Pick a range — even a rough one.'
    if (!form.message.trim()) next.message = 'Tell us what has to be true.'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus('pending')
    setTimeout(() => setStatus('done'), 800)
  }

  return (
    <Layout cta={false}>
      <section className="contact" aria-labelledby="contact-heading">
        <div className="container contact__grid">
          {/* Left */}
          <div className="contact__intro">
            <motion.h1
              id="contact-heading"
              className="contact__title display"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              Start a project.
            </motion.h1>
            <p className="contact__lead">
              Reply within one business day. NDAs welcome. If we're not the right fit, we'll point
              you to who is.
            </p>

            <div className="contact__block">
              <span className="contact__block-label mono">Direct</span>
              <a href={`mailto:${EMAIL}`} className="contact__email">{EMAIL}</a>
            </div>

            <div className="contact__block">
              <span className="contact__block-label mono">Offices</span>
              {OFFICES.map((o) => (
                <p key={o.code} className="contact__office mono">
                  {o.city.toUpperCase()} — {o.address}
                </p>
              ))}
            </div>

            <div className="contact__steps">
              <span className="contact__block-label mono">What happens next</span>
              <ol>
                {STEPS.map(([t, d], i) => (
                  <li key={t} className="contact__step">
                    <span className="contact__step-num mono">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="contact__step-title">{t}</h3>
                      <p className="contact__step-desc">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right — form / success */}
          <div className="contact__formwrap">
            {status === 'done' ? (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                role="status"
              >
                <span className="contact__success-icon" aria-hidden="true">
                  <Check size={22} strokeWidth={2} />
                </span>
                <h2 className="contact__success-title display">
                  Thank you — we'll be in touch within one business day.
                </h2>
                <p className="contact__success-ref mono">REF: {ref}</p>
              </motion.div>
            ) : (
              <form className="contact__form" onSubmit={onSubmit} noValidate>
                <Field label="Name" id="name" error={errors.name}>
                  <input id="name" type="text" value={form.name} onChange={set('name')}
                    autoComplete="name" aria-invalid={!!errors.name} />
                </Field>
                <Field label="Work email" id="email" error={errors.email}>
                  <input id="email" type="email" value={form.email} onChange={set('email')}
                    autoComplete="email" aria-invalid={!!errors.email} />
                </Field>
                <Field label="Company" id="company" error={errors.company}>
                  <input id="company" type="text" value={form.company} onChange={set('company')}
                    autoComplete="organization" aria-invalid={!!errors.company} />
                </Field>
                <Field label="Budget" id="budget" error={errors.budget}>
                  <select id="budget" value={form.budget} onChange={set('budget')}
                    aria-invalid={!!errors.budget} className={form.budget ? '' : 'is-placeholder'}>
                    <option value="" disabled>Select a range</option>
                    {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </Field>
                <Field label="What has to be true in six months?" id="message" error={errors.message}>
                  <textarea id="message" rows={5} value={form.message} onChange={set('message')}
                    aria-invalid={!!errors.message} />
                </Field>

                <button type="submit" className="btn btn--primary contact__submit" disabled={status === 'pending'}>
                  {status === 'pending' ? 'Sending…' : <>Send inquiry <ArrowRight size={16} strokeWidth={1.5} /></>}
                </button>
                <p className="contact__disclaimer">
                  We use what you send only to reply. No lists, no CRM spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

function Field({ label, id, error, children }) {
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={id} className="field__label">{label}</label>
      {children}
      {error && <span className="field__error" role="alert">{error}</span>}
    </div>
  )
}
