import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  CaseStudyHero,
  CaseStudyStats,
  CaseStudyContent,
  CaseStudyNav,
} from "@/components/case-study-detail"
import { caseStudies, getCaseStudy } from "@/lib/case-studies"
import type { Metadata } from "next"

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: "Case Study | Webfluence" }
  return {
    title: `${study.name} — Case Study | Webfluence`,
    description: study.summary,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const idx = caseStudies.findIndex((s) => s.slug === slug)
  const prev = idx > 0 ? caseStudies[idx - 1] : undefined
  const next = idx < caseStudies.length - 1 ? caseStudies[idx + 1] : undefined

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <CaseStudyHero study={study} />
      <CaseStudyStats study={study} />
      <CaseStudyContent study={study} />
      <CaseStudyNav prev={prev} next={next} />
      <Footer />
    </main>
  )
}
