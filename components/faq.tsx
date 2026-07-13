"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "How does the one week discovery sprint work?",
    a: "We embed with your team for five working days. By Friday you have a written spec, a firm quote, and a Loom walkthrough of a working scaffold, before you commit to anything. Discovery is billed separately and credited in full against the project fee if you proceed.",
  },
  {
    q: "How do your engagement models work?",
    a: "You can work with us on a single fixed scope project or on a monthly retainer. On a project we agree a scope and a price after discovery, and if the scope does not change, the price does not. On a retainer you get a dedicated engineering pod you can adjust or pause each month.",
  },
  {
    q: "Do you work with international clients?",
    a: "About 40% of our revenue is international, across the UK, UAE, US, and EU. We overlap with GMT+5 and flex hours for US East calls. All communication is in English, contracts are in USD or PKR, and we have shipped production code under GDPR, SOC 2, and PCI DSS constraints.",
  },
  {
    q: "Who owns the code and infrastructure?",
    a: "You do. Repo, CI/CD pipelines, cloud accounts, vendor API keys, architectural decision records, everything is in your name from day one. We do not gate keep access and we do not charge exit fees.",
  },
  {
    q: "What happens after launch?",
    a: "Every feature ships with a 30 day warranty. After that you can continue with an optional monthly retainer, which is never assumed and never bundled in by default.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-secondary/40 py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
              06 · FAQ
            </span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Questions we hear in every discovery call.
            </h2>
          </div>

          <div className="divide-y divide-border rounded-3xl border border-border bg-card">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-foreground">{f.q}</span>
                  <Plus
                    className={cn(
                      "h-5 w-5 flex-none text-brand-amber transition-transform duration-300",
                      open === i && "rotate-45",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
