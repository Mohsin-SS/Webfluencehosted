"use client"

import { useState } from "react"
import { Check, ArrowRight, Repeat } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { pricingByService, retainerFrom, type Currency } from "@/lib/pricing"
import { BookMeetingButton } from "@/components/booking-modal"

export function ServicePricing({ slug, title }: { slug: string; title: string }) {
  const [currency, setCurrency] = useState<Currency>("PKR")
  const tiers = pricingByService[slug]
  if (!tiers) return null

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
              Pricing
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {title} packages
            </h2>
            <p className="mt-4 text-muted-foreground">
              Firm after a one week discovery sprint. Prefer an ongoing team? Ask about
              a monthly retainer instead.
            </p>
          </div>

          <div className="inline-flex flex-none items-center gap-1 rounded-full border border-border bg-secondary p-1">
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
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
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
                  "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]",
                  t.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground",
                )}
              >
                {t.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Retainer note */}
        <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-gradient-to-br from-brand-teal/8 to-brand-amber/8 p-8 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-brand-gradient text-white">
              <Repeat className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-foreground">Ongoing {title.toLowerCase()} support</h3>
              <p className="mt-1 max-w-xl text-muted-foreground">
                Monthly retainers start at{" "}
                <span className="font-semibold text-foreground">{retainerFrom[currency]} / month</span>. Pause or
                adjust scope any month.
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
