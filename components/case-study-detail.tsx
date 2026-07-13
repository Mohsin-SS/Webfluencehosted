"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { CaseStudy } from "@/lib/case-studies"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28"
    >
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-5%,var(--color-brand-amber)/0.08,transparent_80%)]" />
        <div className="absolute left-1/2 top-[-10%] h-[42vw] w-[62vw] -translate-x-1/2 rounded-full bg-brand-amber/10 blur-[150px]" />
        <div className="absolute right-[-6%] top-[30%] h-[26vw] w-[26vw] rounded-full bg-brand-teal/8 blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 mx-auto px-6"
      >
        {/* Breadcrumb */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full border border-border transition-colors group-hover:border-brand-amber/40">
              <svg className="h-3.5 w-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            All case studies
          </Link>
        </motion.div>

        {/* Meta */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <span className="rounded-full bg-brand-amber/15 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.15em] text-brand-amber">
            {study.n}
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {study.sector}
          </span>
          <span className="text-sm text-muted-foreground/30">·</span>
          <span className="text-sm text-muted-foreground">{study.place}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          {study.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {study.summary}
        </motion.p>

        {/* Service tags */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-8 flex flex-wrap gap-2"
        >
          {study.services.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-card/50 px-4 py-1.5 text-muted-foreground backdrop-blur"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export function CaseStudyStats({ study }: { study: CaseStudy }) {
  return (
    <section className="relative -mt-8 z-10">
      <div className="container mx-auto px-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {study.stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[0_8px_30px_-10px_rgba(200,148,62,0.1)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(200,148,62,0.15)]"
            >
              <div className="text-3xl font-bold tracking-tight text-gradient md:text-4xl">
                {s.k}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CaseStudyContent({ study }: { study: CaseStudy }) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_340px]">
          {/* Main content */}
          <div>
            {/* Challenge */}
            {study.challenge && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-amber/30 to-transparent" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-amber">
                    The Challenge
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-foreground/75">
                  {study.challenge}
                </p>
              </motion.div>
            )}

            {/* Gallery 1 */}
            {study.images[0] && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-14 overflow-hidden rounded-2xl border border-border shadow-[0_20px_60px_-20px_rgba(11,11,20,0.35)]"
              >
                <Image
                  src={study.images[0]}
                  alt={`${study.name} — project screenshot`}
                  width={1200}
                  height={675}
                  className="w-full object-cover"
                />
              </motion.div>
            )}

            {/* Approach */}
            {study.approach && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-14"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-teal/30 to-transparent" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                    Our Approach
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-foreground/75">
                  {study.approach}
                </p>
              </motion.div>
            )}

            {/* Gallery 2 */}
            {study.images[1] && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-14 overflow-hidden rounded-2xl border border-border shadow-[0_20px_60px_-20px_rgba(11,11,20,0.35)]"
              >
                <Image
                  src={study.images[1]}
                  alt={`${study.name} — project detail`}
                  width={1200}
                  height={675}
                  className="w-full object-cover"
                />
              </motion.div>
            )}

            {/* Results */}
            {study.results && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-14"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-amber/30 via-brand-teal/20 to-transparent" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gradient">
                    The Results
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-foreground/75">
                  {study.results}
                </p>
              </motion.div>
            )}

            {/* Quote */}
            {study.quote && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-14"
              >
                <div className="relative rounded-2xl border border-brand-amber/20 bg-gradient-to-br from-brand-amber/8 to-brand-teal/8 p-8 md:p-10">
                  <Quote className="absolute right-6 top-6 h-10 w-10 text-brand-amber/15" />
                  <p className="relative text-xl font-medium italic leading-relaxed text-foreground/85 md:text-2xl">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-brand-amber">
                    — {study.name} Team
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-muted-foreground">
                Project Details
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
                    Client
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">{study.name}</div>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
                    Industry
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">{study.sector}</div>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
                    Location
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">{study.place}</div>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
                    Services
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {study.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/#contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
                >
                  Start your project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CaseStudyNav({
  prev,
  next,
}: {
  prev: CaseStudy | undefined
  next: CaseStudy | undefined
}) {
  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-brand-amber/30 hover:shadow-[0_12px_40px_-12px_rgba(200,148,62,0.12)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                ← Previous
              </span>
              <h3 className="mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-brand-amber">
                {prev.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{prev.sector}</p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-right transition-all hover:-translate-y-1 hover:border-brand-amber/30 hover:shadow-[0_12px_40px_-12px_rgba(200,148,62,0.12)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Next →
              </span>
              <h3 className="mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-brand-amber">
                {next.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{next.sector}</p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  )
}
