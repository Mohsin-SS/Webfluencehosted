"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Webfluence logo. Uses the real artwork at /public/webfluence-logo.png.
 * The badge sits on a white tile so the black logo reads on the dark theme.
 * Until the file exists, it falls back to just the wordmark.
 */
export function Logo({
  className,
  showWordmark = true,
  invert = false,
}: {
  className?: string
  showWordmark?: boolean
  invert?: boolean
}) {
  const [ok, setOk] = useState(true)

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {ok && (
        <span className="grid h-10 w-10 flex-none place-items-center overflow-hidden rounded-full bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/webfluence-logo.png"
            alt="Webfluence"
            className="h-full w-full object-contain p-1"
            onError={() => setOk(false)}
          />
        </span>
      )}
      {showWordmark && (
        <span className={cn("text-xl font-bold tracking-tight", invert ? "text-[#0a0a0a]" : "text-foreground")}>
          Webfluence<span className="text-brand-amber">.</span>
        </span>
      )}
    </span>
  )
}
