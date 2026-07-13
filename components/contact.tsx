"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight, Calendar, Instagram } from "lucide-react"
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/site"
import { BookMeetingButton } from "@/components/booking-modal"

const details = [
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Phone, label: "Phone", value: CONTACT_PHONE, href: CONTACT_PHONE_HREF },
  { icon: Instagram, label: "Instagram", value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
  { icon: MapPin, label: "Location", value: "Lahore CCA 2, DHA Phase 6", href: null },
]

const budgets = ["Under $5k", "$5k to $15k", "$15k to $50k", "$50k plus"]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-[6%] bottom-0 h-[36vw] w-[36vw] rounded-full bg-brand-amber/[0.06] blur-[130px]" />
        <div className="animate-blob absolute -right-[6%] top-0 h-[34vw] w-[34vw] rounded-full bg-brand-teal/[0.04] blur-[130px] [animation-delay:3s]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
              07 · Contact
            </span>
            <h2 className="mt-5 max-w-md text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Start a conversation.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Whether you need a full platform build or a dedicated engineering pod,
              we would love to hear about it. We overlap with GMT+5 for the UK and EU
              and flex for US East.
            </p>

            <BookMeetingButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-md">
              <Calendar className="h-4 w-4" />
              Book a meeting
            </BookMeetingButton>

            <div className="mt-8 space-y-4">
              {details.map((d) => {
                const Icon = d.icon
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand-teal/30">
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-brand-teal/10 text-brand-teal">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {d.label}
                      </div>
                      <div className="font-medium text-foreground">{d.value}</div>
                    </div>
                  </div>
                )
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={d.label}>{content}</div>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border bg-card p-8 shadow-[0_30px_80px_-40px_rgba(11,11,20,0.3)] md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="mt-5">
              <Field label="Company (optional)" name="company" placeholder="Company name" />
            </div>

            <div className="mt-5">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Budget range
              </span>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <label
                    key={b}
                    className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-foreground/70 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground"
                  >
                    <input type="radio" name="budget" value={b} className="sr-only" />
                    {b}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about your project"
                className="w-full resize-none rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand-amber/40 focus:bg-card"
              />
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-[1.01] hover:shadow-md"
            >
              Send brief
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand-amber/40 focus:bg-card"
      />
    </label>
  )
}
