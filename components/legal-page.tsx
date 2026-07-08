import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-40 pb-24 md:pt-48">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Last updated {updated}
          </p>
          <div className="prose-legal mt-12 space-y-8 text-foreground/80">{children}</div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground">{heading}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed">{children}</div>
    </div>
  )
}
