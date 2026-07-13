"use client"

import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Check, Calendar as CalIcon, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTACT_EMAIL } from "@/lib/site"

type BookingContextValue = { openBooking: () => void }
const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error("useBooking must be used within BookingProvider")
  return ctx
}

const TIME_SLOTS = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"]
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

function startOfDay(d: Date) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
  })
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [confirmed, setConfirmed] = useState(false)

  const today = startOfDay(new Date())

  function reset() {
    setDate(null)
    setTime(null)
    setName("")
    setEmail("")
    setConfirmed(false)
  }

  const openBooking = () => {
    reset()
    setIsOpen(true)
  }
  const close = () => setIsOpen(false)

  const days = useMemo(() => {
    const year = view.getFullYear()
    const month = view.getMonth()
    const firstWeekday = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const cells: (Date | null)[] = []
    for (let i = 0; i < firstWeekday; i++) cells.push(null)
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))
    return cells
  }, [view])

  const canConfirm = date && time && name.trim() && /\S+@\S+\.\S+/.test(email)

  function confirm() {
    if (!canConfirm || !date) return
    // Build a Google Calendar event so the booking lands in the client's calendar.
    const [h, m] = (time as string).split(":").map(Number)
    const start = new Date(date)
    start.setHours(h, m, 0, 0)
    const end = new Date(start.getTime() + 30 * 60000)
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: "Intro call with Webfluence",
      details: `Discovery call booked by ${name} (${email}).`,
      dates: `${fmt(start)}/${fmt(end)}`,
      add: CONTACT_EMAIL,
    })
    window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, "_blank", "noopener")
    setConfirmed(true)
  }

  const prevDisabled = view.getFullYear() === today.getFullYear() && view.getMonth() === today.getMonth()

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              {confirmed ? (
                <div className="flex flex-col items-center justify-center px-8 py-16 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient text-white">
                    <Check className="h-8 w-8" strokeWidth={3} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">You are booked in</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    {date && `${WEEKDAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}`} at {time}. We
                    opened a Google Calendar invite in a new tab and will email you at{" "}
                    <span className="font-medium text-foreground">{email}</span> to confirm.
                  </p>
                  <button
                    onClick={close}
                    className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/95"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-[1fr_1.3fr]">
                  {/* Summary panel */}
                  <div className="hidden flex-col justify-between bg-gradient-to-b from-[#1a1436] to-[#0e0c1e] p-8 text-white md:flex">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-teal">
                        <CalIcon className="h-3.5 w-3.5" /> 30 min
                      </span>
                      <h3 className="mt-6 text-2xl font-bold">Book an intro call</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">
                        A quick, no pressure call to talk through your project and see if we are a fit.
                      </p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-white/80">
                        <CalIcon className="h-4 w-4 text-brand-teal" />
                        {date
                          ? `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
                          : "Pick a date"}
                      </div>
                      <div className="flex items-center gap-3 text-white/80">
                        <Clock className="h-4 w-4 text-brand-teal" />
                        {time ? `${time} (GMT+5)` : "Pick a time"}
                      </div>
                    </div>
                  </div>

                  {/* Scheduler */}
                  <div className="p-6 md:p-8">
                    {/* Calendar */}
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-semibold text-foreground">
                        {MONTHS[view.getMonth()]} {view.getFullYear()}
                      </span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => !prevDisabled && setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
                          disabled={prevDisabled}
                          className="grid h-8 w-8 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary disabled:opacity-30"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
                          className="grid h-8 w-8 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center">
                      {WEEKDAYS.map((w) => (
                        <span key={w} className="pb-2 text-xs font-semibold text-muted-foreground">
                          {w}
                        </span>
                      ))}
                      {days.map((d, i) => {
                        if (!d) return <span key={i} />
                        const isPast = startOfDay(d) < today
                        const isSelected = date && startOfDay(d).getTime() === startOfDay(date).getTime()
                        return (
                          <button
                            key={i}
                            disabled={isPast}
                            onClick={() => {
                              setDate(d)
                              setTime(null)
                            }}
                            className={cn(
                              "aspect-square rounded-lg text-sm font-medium transition-colors",
                              isPast && "cursor-not-allowed text-muted-foreground/30",
                              !isPast && !isSelected && "text-foreground hover:bg-secondary",
                              isSelected && "bg-primary text-primary-foreground",
                            )}
                          >
                            {d.getDate()}
                          </button>
                        )
                      })}
                    </div>

                    {/* Time slots */}
                    <AnimatePresence>
                      {date && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 grid grid-cols-3 gap-2">
                            {TIME_SLOTS.map((t) => (
                              <button
                                key={t}
                                onClick={() => setTime(t)}
                                className={cn(
                                  "rounded-lg border py-2 text-sm font-medium transition-colors",
                                  time === t
                                    ? "border-transparent bg-primary text-primary-foreground"
                                    : "border-border text-foreground hover:border-brand-purple/40",
                                )}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Details */}
                    <AnimatePresence>
                      {time && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 space-y-3">
                            <input
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Your name"
                              className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground outline-none focus:border-brand-purple/40 focus:bg-card"
                            />
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              placeholder="you@company.com"
                              className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground outline-none focus:border-brand-purple/40 focus:bg-card"
                            />
                            <button
                              onClick={confirm}
                              disabled={!canConfirm}
                              className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:bg-primary/95 disabled:opacity-40"
                            >
                              Confirm booking
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  )
}

/** Reusable button that opens the booking modal, styled by the caller. */
export function BookMeetingButton({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  const { openBooking } = useBooking()
  return (
    <button type="button" onClick={openBooking} className={className}>
      {children}
    </button>
  )
}
