'use client'

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

export default function InitialLoader({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false)
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState(true)
  const hasMarkedReadyRef = useRef(false)

  useEffect(() => {
    let fallbackTimer: number | undefined
    let hideTimer: number | undefined

    const markReady = () => {
      if (hasMarkedReadyRef.current) return
      hasMarkedReadyRef.current = true
      setIsReady(true)
      hideTimer = window.setTimeout(() => setShouldRenderOverlay(false), 400)
    }

    if (document.readyState === "complete") {
      hideTimer = window.setTimeout(markReady, 200)
    } else {
      const handleLoad = () => {
        if (fallbackTimer) window.clearTimeout(fallbackTimer)
        markReady()
      }

      window.addEventListener("load", handleLoad, { once: true })
      fallbackTimer = window.setTimeout(markReady, 1500)

      return () => {
        window.removeEventListener("load", handleLoad)
        if (fallbackTimer) window.clearTimeout(fallbackTimer)
        if (hideTimer) window.clearTimeout(hideTimer)
      }
    }

    return () => {
      if (fallbackTimer) window.clearTimeout(fallbackTimer)
      if (hideTimer) window.clearTimeout(hideTimer)
    }
  }, [])

  return (
    <>
      {shouldRenderOverlay && (
        <div
          className={cn(
            "fixed inset-0 z-[999] flex items-center justify-center bg-background/95 transition-opacity duration-300",
            isReady ? "opacity-0" : "opacity-100"
          )}
          aria-hidden={isReady}
        >
          <div className="flex flex-col items-center gap-4">
            <Spinner size={56} className="text-foreground/80" />
            <p className="text-sm font-medium text-muted-foreground">Готовим интерфейс…</p>
          </div>
        </div>
      )}
      <div className={cn("transition-opacity duration-300", isReady ? "opacity-100" : "opacity-0")}>{children}</div>
    </>
  )
}
