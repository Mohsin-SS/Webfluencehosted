"use client"

import { motion } from "framer-motion"
import { Bell, Wifi, Battery, Signal, Apple, MonitorSmartphone, Terminal as TerminalIcon, Bot, Sparkles } from "lucide-react"
import { NeuralNetwork } from "@/components/neural-network"

/** Shared window chrome wrapper so every service visual reads as one family. */
function VisualFrame({
  label,
  children,
  dark = false,
}: {
  label: string
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={dark ? { background: "#0e0d12" } : undefined}
      className={`glass relative h-[380px] w-full overflow-hidden rounded-2xl border border-border shadow-2xl backdrop-blur-md md:h-[440px] ${
        dark ? "" : "bg-card/60"
      }`}
    >
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          {label}
        </span>
        <span className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
      </div>
      <div className="relative h-[calc(100%-45px)] w-full">{children}</div>
    </motion.div>
  )
}

function WebDevelopmentVisual() {
  return (
    <VisualFrame label="webfluence.dev — preview">
      <div className="flex h-full flex-col p-5">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[11px] font-mono text-muted-foreground">https://your-product.com</span>
        </div>
        <div className="flex-1 space-y-3">
          {[
            { w: "60%", h: "h-5" },
            { w: "90%", h: "h-3" },
            { w: "75%", h: "h-3" },
          ].map((s, i) => (
            <motion.div
              key={i}
              className={`rounded-md bg-secondary/70 ${s.h}`}
              initial={{ width: 0 }}
              whileInView={{ width: s.w }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: "easeOut" }}
            />
          ))}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="aspect-video rounded-lg bg-gradient-to-br from-brand-teal/15 to-brand-amber/15"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              />
            ))}
          </div>
          <div className="relative pt-4">
            <motion.button
              className="rounded-full bg-brand-gradient px-5 py-2.5 text-xs font-semibold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              Deploy to production
            </motion.button>
            <motion.span
              className="absolute left-6 top-4 h-9 w-24 rounded-full border-2 border-brand-amber"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.6, 0], scale: [0.6, 1.3, 1.6] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2, delay: 1.4 }}
            />
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-[11px] font-medium text-muted-foreground">
          <span>Lighthouse</span>
          <motion.span
            className="text-emerald-500 font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            97 / 100
          </motion.span>
        </div>
      </div>
    </VisualFrame>
  )
}

function MobileAppsVisual() {
  const screens = [
    { accent: "bg-brand-teal", tint: "bg-brand-teal/15", label: "Home" },
    { accent: "bg-brand-amber", tint: "bg-brand-amber/15", label: "Orders" },
  ]
  return (
    <VisualFrame label="iOS · Android preview" dark>
      <div className="relative flex h-full items-center justify-center">
        <div className="relative h-[320px] w-[168px] rounded-[2rem] border-4 border-white/15 bg-[#16151c] shadow-2xl md:h-[360px] md:w-[188px]">
          <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black/60" />
          <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[#f4f1ea]">
            {screens.map((s, i) => (
              <motion.div
                key={s.label}
                className="absolute inset-0 flex flex-col gap-3 p-4 pt-9"
                initial={{ x: i === 0 ? 0 : "100%" }}
                animate={{ x: ["0%", "0%", "-100%", "-100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.9, 1], ease: "easeInOut" }}
                style={{ zIndex: screens.length - i }}
              >
                <div className={`h-2.5 w-16 rounded-full ${s.accent}`} />
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {[0, 1, 2, 3].map((c) => (
                    <div key={c} className={`h-12 rounded-lg ${s.tint}`} />
                  ))}
                </div>
                <div className={`mt-auto h-8 rounded-full ${s.accent}`} />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="absolute -right-2 top-10 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/95 px-3.5 py-2.5 shadow-xl md:right-6"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], y: [-20, 0, 0, -10] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, times: [0, 0.15, 0.8, 1] }}
        >
          <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand-gradient text-white">
            <Bell className="h-4 w-4" />
          </span>
          <div>
            <div className="text-[11px] font-bold text-[#111]">New order received</div>
            <div className="text-[10px] text-[#666]">Just now</div>
          </div>
        </motion.div>
      </div>
    </VisualFrame>
  )
}

function ArVrVisual() {
  return (
    <VisualFrame label="WebXR · Unity viewport" dark>
      <div className="flex h-full items-center justify-center" style={{ perspective: 900 }}>
        <motion.div
          className="relative h-32 w-32"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: 360, rotateY: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          {[
            { t: "rotateY(0deg) translateZ(64px)" },
            { t: "rotateY(180deg) translateZ(64px)" },
            { t: "rotateY(90deg) translateZ(64px)" },
            { t: "rotateY(-90deg) translateZ(64px)" },
            { t: "rotateX(90deg) translateZ(64px)" },
            { t: "rotateX(-90deg) translateZ(64px)" },
          ].map((f, i) => (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center border border-brand-teal/50 bg-gradient-to-br from-brand-teal/15 to-brand-amber/10 backdrop-blur-sm"
              style={{ transform: f.t }}
            >
              <Sparkles className="h-6 w-6 text-brand-amber/70" />
            </div>
          ))}
        </motion.div>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-brand-teal"
            style={{ left: `${25 + i * 25}%`, top: `${30 + i * 15}%` }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}
      </div>
    </VisualFrame>
  )
}

function CrmErpVisual() {
  const columns = ["Lead", "Quoted", "Closed"]
  return (
    <VisualFrame label="Pipeline board — live">
      <div className="flex h-full flex-col gap-4 p-5">
        <div className="grid flex-1 grid-cols-3 gap-3">
          {columns.map((col, ci) => (
            <div key={col} className="flex flex-col gap-2 rounded-xl border border-border bg-secondary/40 p-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/70">{col}</span>
              <div className="relative flex-1">
                <motion.div
                  className="absolute left-0 right-0 rounded-lg border border-border bg-card p-2 shadow-sm"
                  initial={{ top: "0%" }}
                  animate={{ top: ["0%", "0%", "0%"] }}
                  style={{ top: 0 }}
                >
                  <div className="h-1.5 w-3/4 rounded-full bg-brand-teal/40" />
                  <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-secondary" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        <motion.div
          className="absolute h-14 w-[86px] rounded-lg border border-brand-amber/40 bg-card p-2 shadow-lg"
          initial={{ left: "6%", top: "26%" }}
          animate={{
            left: ["6%", "6%", "38%", "38%", "70%", "70%", "6%"],
            top: ["26%", "26%", "26%", "26%", "26%", "26%", "26%"],
          }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.15, 0.35, 0.5, 0.7, 0.85, 1] }}
        >
          <div className="h-1.5 w-3/4 rounded-full bg-brand-amber/60" />
          <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-secondary" />
        </motion.div>
        <div className="flex items-end gap-2 rounded-xl border border-border bg-secondary/40 p-3">
          {[40, 70, 55, 90, 65].map((h, i) => (
            <motion.div
              key={i}
              className="w-full rounded-t-md bg-gradient-to-t from-brand-teal to-brand-amber"
              initial={{ height: 0 }}
              whileInView={{ height: h * 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            />
          ))}
        </div>
      </div>
    </VisualFrame>
  )
}

function DesktopAppsVisual() {
  const platforms = [
    { icon: Apple, label: "macOS" },
    { icon: MonitorSmartphone, label: "Windows" },
    { icon: TerminalIcon, label: "Linux" },
  ]
  return (
    <VisualFrame label="Cross-platform build" dark>
      <div className="flex h-full flex-col items-center justify-center gap-8 p-6">
        <div className="flex gap-6">
          {platforms.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.label}
                className="flex flex-col items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.25 }}
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wide text-white/50">{p.label}</span>
              </motion.div>
            )
          })}
        </div>
        <div className="relative h-2 w-52 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-brand-gradient"
            animate={{ left: ["-33%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[11px] font-medium uppercase tracking-widest text-white/40">
          one codebase · synced offline
        </span>
      </div>
    </VisualFrame>
  )
}

function AiIntegrationVisual() {
  return (
    <VisualFrame label="Agent runtime — online" dark>
      <div className="relative h-full w-full">
        <NeuralNetwork className="absolute inset-0 h-full w-full opacity-70" />
        <motion.div
          className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-white/70">
            <Bot className="h-4 w-4 text-brand-teal" />
            <span className="text-[11px] font-semibold uppercase tracking-wide">Assistant</span>
          </div>
          <div className="mt-2 flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-white/60"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
              />
            ))}
            <motion.span
              className="ml-1 text-[11px] text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            >
              Lead captured, CRM updated
            </motion.span>
          </div>
        </motion.div>
      </div>
    </VisualFrame>
  )
}

const VISUALS: Record<string, () => React.ReactNode> = {
  "web-development": WebDevelopmentVisual,
  "mobile-apps": MobileAppsVisual,
  "ar-vr-development": ArVrVisual,
  "crm-erp-systems": CrmErpVisual,
  "desktop-applications": DesktopAppsVisual,
  "ai-integration": AiIntegrationVisual,
}

export function ServiceVisual({ slug }: { slug: string }) {
  const Visual = VISUALS[slug]
  if (!Visual) return null
  return <Visual />
}
