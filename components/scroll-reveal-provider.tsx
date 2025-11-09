'use client'

import { useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"

const STYLE_ID = "scroll-reveal-styles"

export default function ScrollRevealProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof document === "undefined") {
      return
    }

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style")
      style.id = STYLE_ID
      style.textContent = `
[data-reveal] {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
      `
      document.head.appendChild(style)
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    )

    if (!elements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px 10% 0px" }
    )

    const revealRemaining = () => {
      if (typeof window === "undefined") return

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        elements.forEach((element) => {
          if (!element.classList.contains("is-visible")) {
            element.classList.add("is-visible")
            observer.unobserve(element)
          }
        })
      }
    }

    window.requestAnimationFrame(() => {
      elements.forEach((element) => {
        if (!element.classList.contains("is-visible")) {
          observer.observe(element)
        }
      })
      revealRemaining()
    })

    window.addEventListener("scroll", revealRemaining, { passive: true })

    return () => {
      window.removeEventListener("scroll", revealRemaining)
      observer.disconnect()
    }
  }, [pathname])

  return <>{children}</>
}
