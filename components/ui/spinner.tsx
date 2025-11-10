'use client'

import { cn } from "@/lib/utils"

const variants = {
  ring: "",
}

export type SpinnerProps = {
  className?: string
  size?: number
  variant?: keyof typeof variants
}

export function Spinner({ className, size = 48, variant = "ring" }: SpinnerProps) {
  if (variant === "ring") {
    return (
      <svg
        className={cn("text-foreground", className)}
        width={size}
        height={size}
        viewBox="0 0 44 44"
        stroke="currentColor"
        role="status"
        aria-live="polite"
        aria-label="Загрузка"
      >
        <title>Loading...</title>
        <g fill="none" fillRule="evenodd" strokeWidth="2">
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.8s"
              values="1; 20"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              calcMode="spline"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              dur="1.8s"
              values="1; 0"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              calcMode="spline"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="-0.9s"
              dur="1.8s"
              values="1; 20"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              calcMode="spline"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              dur="1.8s"
              values="1; 0"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              calcMode="spline"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    )
  }

  return null
}
