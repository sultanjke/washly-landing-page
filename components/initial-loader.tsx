'use client'

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

export default function InitialLoader({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false)
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState(true)
  const hasMarkedReadyRef = useRef(false)
  const assetsLoadedRef = useRef(false)

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("washly-loader-complete")) {
      hasMarkedReadyRef.current = true
      assetsLoadedRef.current = true
      setIsReady(true)
      setShouldRenderOverlay(false)
      return
    }

    let fallbackTimer: number | undefined
    let hideTimer: number | undefined

    const criticalAssets = [
      "/new-bg-image.webp",
      "/app_demonstration_1.webp",
      "/app_demonstration_2.webp",
      "/app_demonstration_3.webp",
      "/download-app-illustration.webp",
    ]

    const preloadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image()
        img.decoding = "async"
        img.src = src
        if (img.complete) {
          resolve()
        } else {
          img.onload = () => resolve()
          img.onerror = () => resolve()
        }
      })

    const assetPromise = Promise.all(criticalAssets.map(preloadImage)).then(() => {
      assetsLoadedRef.current = true
    })

    const markReady = () => {
      if (hasMarkedReadyRef.current) return
      hasMarkedReadyRef.current = true
      setIsReady(true)
      hideTimer = window.setTimeout(() => setShouldRenderOverlay(false), 400)
      if (typeof window !== "undefined") {
        sessionStorage.setItem("washly-loader-complete", "true")
      }
    }

    const handleAssetsAndReadyState = () => {
      if (assetsLoadedRef.current) {
        markReady()
      } else {
        assetPromise.finally(markReady)
      }
    }

    if (document.readyState === "complete") {
      assetPromise.finally(() => {
        hideTimer = window.setTimeout(markReady, 200)
      })
    } else {
      const handleLoad = () => {
        if (fallbackTimer) window.clearTimeout(fallbackTimer)
        handleAssetsAndReadyState()
      }

      window.addEventListener("load", handleLoad, { once: true })
      fallbackTimer = window.setTimeout(markReady, 2500)

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
