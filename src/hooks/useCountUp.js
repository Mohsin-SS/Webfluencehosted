import { useEffect, useRef, useState } from 'react'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Counts a numeric value up from 0 when the returned ref scrolls into view.
 * Renders final value immediately when reduced motion is preferred.
 */
export default function useCountUp(target, { duration = 1400, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(prefersReduced() ? target : 0)
  const started = useRef(false)

  useEffect(() => {
    if (prefersReduced()) { setValue(target); return }
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now) => {
              const t = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - t, 3)
              const current = target * eased
              setValue(decimals ? Number(current.toFixed(decimals)) : Math.round(current))
              if (t < 1) requestAnimationFrame(tick)
              else setValue(target)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration, decimals])

  return [ref, value]
}
