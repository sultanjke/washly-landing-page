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

    const observed = new WeakSet<Element>()

    const register = (element: HTMLElement) => {
      if (observed.has(element)) return
      observed.add(element)

      if (element.classList.contains("is-visible")) {
        return
      }

      observer.observe(element)
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
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

    const handleInitialElements = () => {
      if (!elements.length) {
        return
      }

      window.requestAnimationFrame(() => {
        elements.forEach(register)
        revealRemaining()
      })
    }

    handleInitialElements()

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return

          const revealNodes = node.matches?.("[data-reveal]")
            ? [node]
            : Array.from(node.querySelectorAll<HTMLElement>("[data-reveal]"))

          revealNodes.forEach((revealNode) => {
            elements.push(revealNode)
            if (!revealNode.classList.contains("is-visible")) {
              register(revealNode)
            }
          })
        })
      })
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    window.addEventListener("scroll", revealRemaining, { passive: true })

    return () => {
      window.removeEventListener("scroll", revealRemaining)
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, [pathname])

  return <>{children}</>
}
