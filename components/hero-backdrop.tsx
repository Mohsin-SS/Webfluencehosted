"use client"

import { motion } from "framer-motion"

export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(200,148,62,0.08)_0%,transparent_70%)]" />
      <div className="absolute left-[-10%] top-[20%] h-[50vw] w-[50vw] rounded-full bg-brand-teal/[0.04] blur-[120px]" />
      <div className="absolute right-[-5%] top-[-10%] h-[40vw] w-[40vw] rounded-full bg-brand-amber/[0.06] blur-[140px]" />
      <motion.div
        className="absolute right-[12%] top-[18%] h-24 w-24 rounded-full border border-foreground/[0.04] md:h-36 md:w-36"
        animate={{ y: [-10, 10, -10], rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-[8%] top-[55%] h-16 w-16 rounded-lg border border-foreground/[0.04] md:h-24 md:w-24"
        animate={{ y: [8, -8, 8], rotate: [45, 135, 225, 315, 405] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[25%] bottom-[15%] h-12 w-12 rounded-full border border-brand-amber/[0.08] md:h-20 md:w-20"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
