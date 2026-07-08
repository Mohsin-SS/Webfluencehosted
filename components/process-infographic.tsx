"use client"

import { motion } from "framer-motion"

const stages = ["Discovery", "Design", "Development", "Deployment"]

const PIXELS = [
  { x: 486, y: 150, s: 13, d: 0.0 },
  { x: 470, y: 132, s: 9, d: 0.05 },
  { x: 500, y: 170, s: 11, d: 0.1 },
  { x: 512, y: 140, s: 8, d: 0.15 },
  { x: 528, y: 158, s: 14, d: 0.1 },
  { x: 476, y: 176, s: 10, d: 0.2 },
  { x: 544, y: 128, s: 9, d: 0.25 },
  { x: 556, y: 168, s: 12, d: 0.2 },
  { x: 566, y: 146, s: 8, d: 0.3 },
  { x: 582, y: 160, s: 13, d: 0.28 },
  { x: 594, y: 134, s: 9, d: 0.35 },
  { x: 604, y: 176, s: 10, d: 0.32 },
  { x: 618, y: 150, s: 12, d: 0.4 },
  { x: 632, y: 138, s: 8, d: 0.42 },
  { x: 640, y: 168, s: 11, d: 0.45 },
  { x: 656, y: 152, s: 9, d: 0.5 },
  { x: 668, y: 132, s: 10, d: 0.52 },
  { x: 676, y: 174, s: 8, d: 0.55 },
  { x: 690, y: 148, s: 12, d: 0.58 },
  { x: 704, y: 160, s: 9, d: 0.62 },
  { x: 716, y: 140, s: 10, d: 0.65 },
  { x: 726, y: 168, s: 8, d: 0.68 },
]

export function ProcessInfographic() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="relative mb-16 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10"
    >
      <svg viewBox="0 0 900 320" className="w-full" role="img" aria-label="Discovery, Design, Development, Deployment">
        {/* Stage labels */}
        {stages.map((s, i) => (
          <motion.text
            key={s}
            x={112 + i * 225}
            y={44}
            textAnchor="middle"
            className="fill-foreground/70 font-[600]"
            style={{ fontSize: 20, letterSpacing: "0.12em", fontFamily: "var(--font-display)" }}
            variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }}
            transition={{ delay: i * 0.15 }}
          >
            {s.toUpperCase()}
          </motion.text>
        ))}

        {/* Divider lines */}
        {[225, 450, 675].map((x, i) => (
          <motion.line
            key={x}
            x1={x}
            y1={62}
            x2={x}
            y2={300}
            stroke="currentColor"
            className="text-foreground/10"
            strokeWidth={2}
            variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1 } }}
            style={{ transformOrigin: `${x}px 62px` }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          />
        ))}

        {/* 1 — DISCOVERY: dashed outline */}
        <motion.g
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <rect x={70} y={150} width={150} height={48} rx={8} fill="none" stroke="currentColor" className="text-foreground/35" strokeWidth={2.5} strokeDasharray="7 6" />
          {[150, 165, 180].map((x) => (
            <line key={x} x1={x} y1={150} x2={x} y2={198} stroke="currentColor" className="text-foreground/25" strokeWidth={2} strokeDasharray="4 5" />
          ))}
        </motion.g>

        {/* 2 — DESIGN: blueprint block */}
        <motion.g variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }} style={{ transformOrigin: "337px 174px" }} transition={{ delay: 0.7, duration: 0.6 }}>
          <rect x={240} y={150} width={200} height={48} rx={4} fill="#1a6b5a" />
          {[260, 280, 300, 320, 340, 360, 380, 400, 420].map((x) => (
            <line key={x} x1={x} y1={150} x2={x} y2={198} stroke="rgba(255,255,255,0.35)" strokeWidth={1} />
          ))}
          {[166, 182].map((y) => (
            <line key={y} x1={240} y1={y} x2={440} y2={y} stroke="rgba(255,255,255,0.35)" strokeWidth={1} />
          ))}
          <motion.g variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} transition={{ delay: 1.1 }}>
            <line x1={252} y1={140} x2={428} y2={140} stroke="currentColor" className="text-foreground" strokeWidth={1.5} />
            <path d="M252 140 l7 -4 l0 8 z" fill="currentColor" className="text-foreground" />
            <path d="M428 140 l-7 -4 l0 8 z" fill="currentColor" className="text-foreground" />
          </motion.g>
        </motion.g>

        {/* 3 — DEVELOPMENT: pixel dissolve */}
        <g>
          {PIXELS.map((p, i) => (
            <motion.rect
              key={i}
              x={p.x}
              y={p.y}
              width={p.s}
              height={p.s}
              rx={1.5}
              fill={i % 3 === 0 ? "#c8943e" : i % 3 === 1 ? "#daa854" : "#e0b76a"}
              variants={{ hidden: { opacity: 0, scale: 0 }, show: { opacity: 1, scale: 1 } }}
              transition={{ delay: 0.9 + p.d, duration: 0.4 }}
            />
          ))}
        </g>

        {/* 4 — DEPLOYMENT: finished pencil */}
        <motion.g variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } }} transition={{ delay: 1.3, duration: 0.6 }}>
          <rect x={735} y={150} width={110} height={48} fill="#c8943e" />
          <rect x={735} y={150} width={110} height={16} fill="#daa854" />
          <rect x={735} y={186} width={110} height={12} fill="#b07e32" />
          <path d="M845 150 L878 174 L845 198 Z" fill="#f0d9a0" />
          <path d="M845 174 L878 174 L845 198 Z" fill="#e4c47f" />
          <path d="M878 174 L862 166 L862 182 Z" fill="currentColor" className="text-foreground" />
        </motion.g>

        {/* baseline shadow */}
        <motion.ellipse
          cx={450}
          cy={214}
          rx={410}
          ry={7}
          fill="currentColor"
          className="text-foreground/5"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          transition={{ delay: 1.4 }}
        />
      </svg>
    </motion.div>
  )
}
