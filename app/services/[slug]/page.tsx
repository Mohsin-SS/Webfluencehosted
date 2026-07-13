import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookMeetingButton } from "@/components/booking-modal"
import { ServicePricing } from "@/components/service-pricing"
import { HeroBackdrop } from "@/components/hero-backdrop"
import { services, getService } from "@/lib/services"
import type { Metadata } from "next"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: "Service | Webfluence" }
  return {
    title: `${service.title} | Webfluence`,
    description: service.description,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const Icon = service.icon
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 md:pt-48">
        <HeroBackdrop />

        <div className="container relative z-10 mx-auto px-6">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-[0_16px_36px_-16px_rgba(26,26,26,0.4)]">
              <Icon className="h-7 w-7" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
              {service.n} · {service.tagline}
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {service.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-105"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Deliverables + outcomes */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">What you get</h2>
            <ul className="mt-8 space-y-4">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-brand-teal/12">
                    <Check className="h-3.5 w-3.5 text-brand-teal" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/80">{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-2">
              {service.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {service.outcomes.map((o) => (
              <div
                key={o.v}
                className="rounded-3xl border border-border bg-gradient-to-br from-brand-teal/8 to-brand-amber/8 p-8"
              >
                <div className="text-4xl font-bold tracking-tight md:text-5xl">{o.k}</div>
                <div className="mt-2 text-sm text-muted-foreground">{o.v}</div>
              </div>
            ))}
            <div className="rounded-3xl border border-border bg-foreground p-8 text-background">
              <p className="text-sm leading-relaxed text-background/80">
                Every engagement starts with a one week discovery sprint. You leave
                with a written spec and a firm quote before you commit.
              </p>
              <BookMeetingButton className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-amber">
                Book a discovery call
                <ArrowRight className="h-4 w-4" />
              </BookMeetingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Service pricing */}
      <div className="border-t border-border bg-secondary/40">
        <ServicePricing slug={service.slug} title={service.title} />
      </div>

      {/* Other services */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Other disciplines</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => {
              const OIcon = o.icon
              return (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand-amber/30"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-teal/10 text-brand-amber transition-colors group-hover:bg-foreground group-hover:text-white">
                    <OIcon className="h-5 w-5" />
                  </span>
                  <div className="mt-4 text-sm font-semibold">{o.title}</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
