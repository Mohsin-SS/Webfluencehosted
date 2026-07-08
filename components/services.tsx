"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/services"

export function Services() {
  return (
    <section id="services" className="relative bg-secondary/40 py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber"
          >
            02 · Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Six disciplines, one team.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-muted-foreground"
          >
            One senior team that carries a product from first sketch to production.
            Open any discipline to see how we work.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.1 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-amber/30 hover:shadow-[0_28px_60px_-30px_rgba(200,148,62,0.1)]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-teal/10 text-brand-teal transition-colors group-hover:bg-brand-teal group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-semibold tabular-nums text-foreground/20">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{s.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-brand-amber transition-colors">
                    Explore service
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
