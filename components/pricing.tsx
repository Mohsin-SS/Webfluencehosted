"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ArrowRight, Repeat } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { services } from "@/lib/services"
import { pricingByService, retainerFrom, type Currency } from "@/lib/pricing"
import { BookMeetingButton } from "@/components/booking-modal"

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("PKR")
  const [activeSlug, setActiveSlug] = useState(services[0].slug)

  const tiers = pricingByService[activeSlug]

  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            05 · Pricing
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Priced per service. Project or monthly retainer, your call.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Pick a service to see its package tiers. Every engagement starts with a one
            week discovery sprint, and the numbers below are firm afterwards.
          </p>
        </div>

        {/* Service selector */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((s) => {
            const Icon = s.icon
            const active = s.slug === activeSlug
            return (
              <button
                key={s.slug}
                onClick={() => setActiveSlug(s.slug)}
                className={cn(
                  "inline-flex flex-none items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all",
                  active
                    ? "border-transparent bg-foreground text-primary-foreground shadow-sm"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className={cn("h-4 w-4", active ? "text-brand-teal" : "text-brand-amber")} />
                {s.title}
              </button>
            )
          })}
        </div>

        {/* Currency toggle */}
        <div className="mb-12 inline-flex items-center gap-1 rounded-full border border-border bg-secondary p-1">
          {(["PKR", "USD"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                currency === c ? "bg-foreground text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {c === "PKR" ? "PKR ₨" : "USD $"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {tiers.map((t) => (
              <div
                key={t.name}
                className={cn(
                  "relative flex flex-col rounded-3xl border p-8",
                  t.popular
                    ? "border-brand-amber/35 bg-foreground/[0.03] shadow-[0_40px_90px_-40px_rgba(200,148,62,0.2)]"
                    : "border-border bg-card",
                )}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[#0a0a0a] px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className={cn("text-lg font-bold", t.popular ? "text-foreground" : "text-foreground")}>{t.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  {t.prefix && (
                    <span className={cn("mb-1.5 text-sm font-medium", t.popular ? "text-muted-foreground" : "text-muted-foreground")}>
                      {t.prefix}
                    </span>
                  )}
                  <span className="text-4xl font-bold tracking-tight">{t.price[currency]}</span>
                  <span className={cn("mb-1 text-sm", t.popular ? "text-muted-foreground" : "text-muted-foreground")}>/ project</span>
                </div>
                <p className={cn("mt-2 text-sm", t.popular ? "text-muted-foreground" : "text-muted-foreground")}>{t.blurb}</p>

                <ul className="mt-8 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        className={cn("mt-0.5 h-4 w-4 flex-none", t.popular ? "text-brand-teal" : "text-brand-amber")}
                        strokeWidth={3}
                      />
                      <span className={t.popular ? "text-foreground/80" : "text-foreground/80"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className={cn(
                    "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02]",
                    t.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground",
                  )}
                >
                  {t.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Retainer callout */}
        <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-gradient-to-br from-brand-teal/8 to-brand-amber/8 p-8 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-[#0a0a0a] text-white">
              <Repeat className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-foreground">Prefer an ongoing team?</h3>
              <p className="mt-1 max-w-xl text-muted-foreground">
                Monthly retainers start at{" "}
                <span className="font-semibold text-foreground">{retainerFrom[currency]} / month</span> for a dedicated
                engineering pod, across any of these services. Pause or adjust scope any month.
              </p>
            </div>
          </div>
          <BookMeetingButton className="inline-flex flex-none items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-md">
            Talk retainers
            <ArrowRight className="h-4 w-4" />
          </BookMeetingButton>
        </div>
      </div>
    </section>
  )
}
