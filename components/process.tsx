"use client"

import { motion } from "framer-motion"
import { ProcessInfographic } from "@/components/process-infographic"

const steps = [
  {
    n: "01",
    title: "Discovery sprint",
    body: "We embed for five working days. By Friday you have a written spec, a firm quote, and a Loom walkthrough of a working scaffold, before you commit.",
  },
  {
    n: "02",
    title: "Scope and price, agreed",
    body: "We agree a scope and a price together, whether that is a single project or a monthly retainer. If the scope does not change, the price does not.",
  },
  {
    n: "03",
    title: "Build in the open",
    body: "Senior engineers ship in your repo, your CI/CD, your cloud. You watch it happen and own every artifact from day one.",
  },
  {
    n: "04",
    title: "Ship and support",
    body: "Runbooks, ADRs, and a 30 day warranty on every feature. Continue with a monthly retainer only if you want to.",
  },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-secondary/40 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]">
        <div className="absolute left-1/4 top-0 h-[30vw] w-[30vw] rounded-full bg-brand-amber/[0.06] blur-[130px]" />
        <div className="absolute right-1/4 top-10 h-[26vw] w-[26vw] rounded-full bg-brand-teal/[0.04] blur-[130px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            04 · Process
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            How we take you from idea to shipped.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Output on every engagement: runbooks, architectural decision records,
            and a 30 day warranty. No black boxes.
          </p>
        </div>

        <ProcessInfographic />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-card p-7 backdrop-blur"
            >
              <div className="text-4xl font-bold text-gradient">{s.n}</div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
