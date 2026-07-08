"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { caseStudies, type CaseStudy } from "@/lib/case-studies"

function StackCard({ study, index, total }: { study: CaseStudy; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const brightness = useTransform(scrollYProgress, [0, 1], [0.72, 1])
  const filter = useTransform(brightness, (b) => `brightness(${b})`)

  const depth = total - index

  return (
    <div
      ref={ref}
      className="case-study-card relative md:sticky"
      style={{
        ["--card-index" as any]: index,
      }}
    >
      <motion.div
        style={{ scale, opacity, filter, transformOrigin: "center top" }}
        className="will-change-transform"
      >
        <Link
          href={`/work/${study.slug}`}
          style={{ boxShadow: `0 ${18 + depth * 5}px ${60 + depth * 10}px -22px rgba(11,11,20,0.55)` }}
          className={`group relative block overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br ${study.gradient} p-8 backdrop-blur-xl transition-shadow hover:!shadow-[0_36px_90px_-38px_rgba(200,148,62,0.25)] md:p-12`}
        >
          <div className="absolute inset-0 bg-card/92" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold tabular-nums text-brand-amber">{study.n}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {study.sector}
                  </span>
                </div>
                {study.logo && (
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-border bg-white p-1.5 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={study.logo} alt={`${study.name} logo`} className="h-full w-full object-contain" />
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {study.name}
              </h3>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-foreground/70">
                {study.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-amber">
                Read case study
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              {study.stats.map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-card/80 p-5">
                  <div className="text-3xl font-bold text-foreground md:text-4xl">{s.k}</div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  )
}

export function CaseStudies() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            03 · Case Studies
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Results we can point to, not just talk about.
          </h2>
        </div>

        <div className="flex flex-col gap-8 pb-[40vh]">
          {caseStudies.map((study, i) => (
            <StackCard key={study.slug} study={study} index={i} total={caseStudies.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
