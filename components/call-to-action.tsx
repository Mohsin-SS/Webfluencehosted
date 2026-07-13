"use client"

import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

export function CallToAction() {
  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Start a Project</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Ready to create
            <br />
            something <HighlightedText>extraordinary</HighlightedText>?
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life. Every great space begins with a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@hously.com"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#0a0a0a] px-8 py-4 text-sm tracking-wide font-semibold hover:bg-white/90 transition-all duration-300 group rounded-full hover:scale-105"
            >
              Begin the conversation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 text-sm tracking-wide font-semibold hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 rounded-full hover:scale-105"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
