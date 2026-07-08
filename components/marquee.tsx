"use client"

type Client = { name: string; src: string; wide?: boolean }

const clients: Client[] = [
  { name: "Fastaxi UK", src: "/logos/fastaxi.png" },
  { name: "Property Linkers", src: "/logos/property-linkers.png" },
  { name: "Education Links", src: "/logos/education-links.png", wide: true },
  { name: "Times Consultant", src: "/logos/times-consultant.png", wide: true },
  { name: "Data Flour Mills", src: "/logos/data-flour-mills.png" },
  { name: "The Carology", src: "/logos/the-carology.png" },
  { name: "Gari Baich", src: "/logos/gari-baich.png", wide: true },
  { name: "Pitstop 63", src: "/logos/pitstop63.jpeg" },
]

function LogoMark({ c }: { c: Client }) {
  return (
    <span className="inline-flex select-none items-center whitespace-nowrap opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={c.src}
        alt={c.name}
        className={`h-10 w-auto object-contain md:h-12 ${c.wide ? "max-w-[9rem] md:max-w-[11rem]" : "max-w-[6rem] md:max-w-[7rem]"}`}
      />
    </span>
  )
}

export function Marquee() {
  return (
    <section className="border-y border-border bg-secondary/40 py-10">
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
