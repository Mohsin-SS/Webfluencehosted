import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <CaseStudies />
      <Process />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
