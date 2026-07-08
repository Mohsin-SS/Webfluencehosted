import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { Logo } from "@/components/logo"
import { services } from "@/lib/services"
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, LINKEDIN_URL } from "@/lib/site"

const company = [
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Case Studies", href: "/#work" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
]

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pt-20 pb-10 text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Senior engineering studio in Lahore. Web platforms, mobile apps, and
              AI native products, code you own outright.
            </p>
            <p className="mt-4 text-sm font-medium text-foreground/70">{INSTAGRAM_HANDLE}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-foreground/70 transition-colors hover:border-brand-amber hover:text-brand-amber"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-foreground/70 transition-colors hover:border-brand-amber hover:text-brand-amber"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground/60">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground/60">Company</h4>
            <ul className="mt-5 space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground/60">Legal</h4>
            <ul className="mt-5 space-y-3">
              {legal.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground/50 md:flex-row">
          <p>© 2026 Webfluence. All rights reserved.</p>
          <p>Built in Lahore, shipping worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
