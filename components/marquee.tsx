"use client"

import { useEffect, useRef, useState } from "react"
import { Link2, GraduationCap, Clock, Car } from "lucide-react"
import type { LucideIcon } from "lucide-react"

/**
 * Client logos. Drop a matching file in /public/logos (e.g. /public/logos/ahm-developers.png)
 * and it replaces the icon+wordmark placeholder automatically. Until then, each client
 * falls back to its icon below.
 */
type Client = { name: string; sub?: string; icon: LucideIcon; logo: string }

const clients: Client[] = [
  { name: "Property Linkers", icon: Link2, logo: "/logos/property-linkers.png" },
  { name: "Education Links", icon: GraduationCap, logo: "/logos/education-links.png" },
  { name: "Times Consultant", icon: Clock, logo: "/logos/times-consultant.png" },
  { name: "Fastaxi", sub: "UK", icon: Car, logo: "/logos/fastaxi.png" },
]

function LogoMark({ c }: { c: Client }) {
  const Icon = c.icon
  const [logoOk, setLogoOk] = useState(true)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // The <img> is already in the SSR'd HTML, so on a fast/local server the
    // request can fail before this effect (and onError) ever attaches.
    // Catch that race by checking the already-settled state on mount.
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) {
      setLogoOk(false)
    }
  }, [])

  return (
    <span className="inline-flex select-none items-center gap-2.5 whitespace-nowrap opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
      {logoOk ? (
        <img
          ref={imgRef}
          src={c.logo}
          alt={c.name}
          className="h-20 w-auto max-w-[280px] object-contain"
          onError={() => setLogoOk(false)}
        />
      ) : (
        <>
          <Icon className="h-8 w-8 text-brand-amber" />
          <span className="text-2xl font-bold tracking-tight text-foreground">
            {c.name}
            {c.sub && <span className="ml-1 text-brand-teal">{c.sub}</span>}
          </span>
        </>
      )}
    </span>
  )
}

export function Marquee() {
  return (
    <section className="border-y border-border bg-secondary/40 py-14">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Trusted by teams from seed to Series C
      </p>

      {/* Continuous marquee on every screen size */}
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
            <LogoMark key={i} c={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
