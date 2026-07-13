"use client"

import { useEffect, useRef } from "react"

/**
 * Ambient neural-network background: layered nodes with faint connections and
 * glowing signals that pulse forward through the layers, like data moving through
 * a model. Gentle, no mouse interaction, dark-hero friendly.
 */
export function NeuralNetwork({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const LAYER_SIZES = [4, 7, 8, 6, 3]

    let w = 0
    let h = 0
    let raf = 0
    let layers: { x: number; y: number; glow: number }[][] = []

    type Signal = { l: number; i: number; j: number; t: number; speed: number; hue: string }
    let signals: Signal[] = []
    const HUES = ["#22d3ee", "#a78bfa", "#ffffff"]

    function rand(n: number) {
      return Math.floor(Math.random() * n)
    }

    function build() {
      const parent = canvas!.parentElement
      w = parent ? parent.clientWidth : window.innerWidth
      h = parent ? parent.clientHeight : window.innerHeight
      canvas!.width = w * dpr
      canvas!.height = h * dpr
      canvas!.style.width = w + "px"
      canvas!.style.height = h + "px"
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const padX = w * 0.1
      const padY = h * 0.16
      const usableW = w - padX * 2
      const usableH = h - padY * 2

      layers = LAYER_SIZES.map((count, li) => {
        const x = padX + (usableW * li) / (LAYER_SIZES.length - 1)
        return Array.from({ length: count }, (_, k) => ({
          x,
          y: padY + usableH * ((k + 0.5) / count),
          glow: 0,
        }))
      })

      const signalCount = Math.max(10, Math.min(20, Math.floor(w / 90)))
      signals = Array.from({ length: signalCount }, () => spawn(rand(LAYER_SIZES.length - 1)))
    }

    function spawn(l: number): Signal {
      return {
        l,
        i: rand(layers[l].length),
        j: rand(layers[l + 1].length),
        t: Math.random(),
        speed: 0.004 + Math.random() * 0.006,
        hue: HUES[rand(HUES.length)],
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      // connections
      for (let l = 0; l < layers.length - 1; l++) {
        for (const a of layers[l]) {
          for (const b of layers[l + 1]) {
            ctx!.strokeStyle = "rgba(150, 140, 235, 0.07)"
            ctx!.lineWidth = 0.6
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      // signals
      for (const s of signals) {
        const a = layers[s.l][s.i]
        const b = layers[s.l + 1][s.j]
        if (!a || !b) {
          Object.assign(s, spawn(rand(LAYER_SIZES.length - 1)))
          continue
        }
        s.t += s.speed
        const x = a.x + (b.x - a.x) * s.t
        const y = a.y + (b.y - a.y) * s.t

        // active edge highlight
        ctx!.strokeStyle = "rgba(124, 58, 237, 0.18)"
        ctx!.lineWidth = 1
        ctx!.beginPath()
        ctx!.moveTo(a.x, a.y)
        ctx!.lineTo(b.x, b.y)
        ctx!.stroke()

        // moving pulse
        ctx!.beginPath()
        ctx!.arc(x, y, 2.4, 0, Math.PI * 2)
        ctx!.fillStyle = s.hue
        ctx!.shadowBlur = 10
        ctx!.shadowColor = s.hue
        ctx!.fill()
        ctx!.shadowBlur = 0

        if (s.t >= 1) {
          b.glow = 1
          const next = s.l + 1
          if (next >= layers.length - 1) {
            Object.assign(s, spawn(0))
          } else {
            s.l = next
            s.i = s.j
            s.j = rand(layers[next + 1].length)
            s.t = 0
          }
        }
      }

      // nodes
      for (const layer of layers) {
        for (const n of layer) {
          n.glow *= 0.93
          const r = 3 + n.glow * 3
          if (n.glow > 0.05) {
            ctx!.beginPath()
            ctx!.arc(n.x, n.y, r + 6, 0, Math.PI * 2)
            ctx!.fillStyle = `rgba(34, 211, 238, ${n.glow * 0.25})`
            ctx!.fill()
          }
          ctx!.beginPath()
          ctx!.arc(n.x, n.y, r, 0, Math.PI * 2)
          ctx!.fillStyle = n.glow > 0.05 ? "#67e8f9" : "rgba(180, 170, 245, 0.7)"
          ctx!.fill()
        }
      }
    }

    function loop() {
      draw()
      raf = requestAnimationFrame(loop)
    }

    build()
    if (reduce) draw()
    else raf = requestAnimationFrame(loop)

    const onResize = () => build()
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
