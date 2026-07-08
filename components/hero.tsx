"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Layers } from "lucide-react"
import Link from "next/link"
import { BookMeetingButton } from "@/components/booking-modal"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { DeveloperTerminal } from "@/components/developer-terminal"

const stats = [
  { value: "08 yr", label: "Avg. engineer tenure" },
  { value: "147", label: "Products shipped" },
  { value: "31 d", label: "Median time to deploy" },
  { value: "97%", label: "Client retention, 24 mo" },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <HeroBackdrop />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:text-left text-center">
          {/* Hero text panel */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 shadow-sm backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground md:text-7xl"
            >
              We build software that <span className="text-gradient">compounds</span>,
              not just ships.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              A senior engineering studio in Lahore building web platforms, mobile apps,
              and AI native products for founders and operators worldwide. Project sprints
              or monthly retainers, no agency overhead, code you own outright.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row w-full lg:justify-start"
            >
              <BookMeetingButton className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md w-full sm:w-auto">
                <Calendar className="h-4 w-4" />
                Book a meeting
              </BookMeetingButton>
              <Link
                href="/#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-background px-8 py-4 text-lg font-semibold text-primary transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-md w-full sm:w-auto"
              >
                <Layers className="h-4 w-4" />
                See what we build
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Software/IDE Terminal Visualizer */}
          <div className="w-full max-w-lg mx-auto lg:max-w-none">
            <DeveloperTerminal />
          </div>
        </div>

        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-7">
              <div className="text-3xl font-bold tracking-tight text-foreground">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
