"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getCaseStudiesForService } from "@/lib/case-studies"

export function ServiceRelatedWork({ slug, title }: { slug: string; title: string }) {
  const studies = getCaseStudiesForService(slug)
  if (studies.length === 0) return null

  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            Related work
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Recent {title} case studies.
          </h2>
        </div>

        <div className="space-y-5">
          {studies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/work/${study.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-brand-amber/30 hover:shadow-[0_24px_60px_-30px_rgba(200,148,62,0.18)]"
              >
                <div className="grid gap-6 p-7 md:grid-cols-[1.4fr_1fr] md:items-center md:p-9">
                  <div>
                    <div className="text-sm font-semibold text-foreground/70">{study.name}</div>
                    <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-foreground md:text-2xl">
                      {study.summary}
                    </h3>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-amber opacity-0 transition-opacity group-hover:opacity-100">
                      Read case study
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-border pt-5 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                    {study.stats.map((s) => (
                      <div key={s.v}>
                        <div className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                          {s.k}
                        </div>
                        <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
