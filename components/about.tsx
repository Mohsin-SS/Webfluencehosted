"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const points = [
  "One week scoping sprint before you commit a rupee",
  "Written spec, firm quote, working scaffold up front",
  "Senior engineers, product designers, infra specialists",
  "You own the repo, pipelines, and cloud from day one",
]

const cards = [
  { k: "2018", v: "Founded" },
  { k: "50+", v: "Clients shipped for" },
  { k: "40%", v: "Revenue international" },
  { k: "30 day", v: "Warranty on every ship" },
]

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber"
            >
              01 · About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-5 max-w-xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              Built like your in house team, without the headcount.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              We started in 2018 as two engineers tired of agency middlemen,
              slide deck estimates, and code that became someone else&apos;s problem
              to maintain. Today we are a senior studio of engineers, product
              designers, and infrastructure specialists who ship like insiders.
            </motion.p>

            <ul className="mt-8 space-y-3">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-brand-teal/12">
                    <Check className="h-3.5 w-3.5 text-brand-teal" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/80">{p}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-teal/12 via-card to-brand-amber/12 p-8 shadow-[0_30px_80px_-40px_rgba(200,148,62,0.15)]">
              <div className="grid grid-cols-2 gap-4">
                {cards.map((c) => (
                  <div key={c.v} className="rounded-2xl bg-card/80 p-6 backdrop-blur">
                    <div className="text-3xl font-bold text-foreground">{c.k}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{c.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-border bg-foreground p-6 text-background">
                <p className="text-sm leading-relaxed text-background/80">
                  &ldquo;Sprints or monthly retainers, no agency overhead, code you own
                  outright.&rdquo;
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-amber">
                  The Webfluence promise
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
