"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Menu, X, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { BookMeetingButton, useBooking } from "@/components/booking-modal"

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openBooking } = useBooking()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40)
  })

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4 animate-slide-up"
    >
      <div
        className={cn(
          "glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300",
          isScrolled && "bg-card/90 shadow-[0_10px_30px_-12px_var(--glass-border)]",
        )}
      >
        <Link href="/#home" className="relative z-50">
          <Logo />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
          <BookMeetingButton className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-md">
            <Calendar className="h-3.5 w-3.5" />
            Book a meeting
          </BookMeetingButton>
        </div>

        <button
          className="relative z-50 text-foreground lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-semibold text-foreground transition-colors hover:text-brand-amber"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  openBooking()
                }}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
              >
                <Calendar className="h-4 w-4" />
                Book a meeting
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
