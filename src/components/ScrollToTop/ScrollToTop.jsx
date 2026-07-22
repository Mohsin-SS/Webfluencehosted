import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to top on route change (ignores in-page hash navigation). */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
