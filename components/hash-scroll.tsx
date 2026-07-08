"use client"

import { useEffect } from "react"

/**
 * Next.js's built-in hash scrolling can lose the race against client
 * component hydration on cross-page navigation (e.g. /services/x -> /#contact),
 * leaving the browser at the top of the page. This retries until the target
 * section actually exists in the DOM, then scrolls to it.
 */
export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = hash.slice(1)
    let attempts = 0
    let cancelled = false

    function scrollNow(smooth: boolean) {
      const el = document.getElementById(id)
      if (!el) return false
      el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" })
      return true
    }

    function tryScroll() {
      if (cancelled) return
      if (scrollNow(true)) {
        // Fonts and late-mounting content can still shift layout after the
        // first scroll, so re-correct the position a few times as things settle.
        const corrections = [150, 400, 900]
        corrections.forEach((delay) => {
          window.setTimeout(() => {
            if (!cancelled) scrollNow(false)
          }, delay)
        })
        return
      }
      attempts += 1
      if (attempts < 60) requestAnimationFrame(tryScroll)
    }

    tryScroll()
    return () => {
      cancelled = true
    }
  }, [])

  return null
}
