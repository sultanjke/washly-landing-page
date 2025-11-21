'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isDark = isMounted && resolvedTheme === 'dark'
  const nextTheme = isDark ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className={cn(
        'flex h-6 w-6 items-center justify-center rounded-lg border border-black/10 bg-white/80 text-black shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/30 focus-visible:ring-offset-background dark:border-white/20 dark:bg-black/60 dark:text-white dark:hover:shadow-lg dark:focus-visible:ring-white/40',
        className,
      )}
      aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
      data-state={isDark ? 'dark' : 'light'}
    >
      {isMounted ? (
        <img
          src={isDark ? '/themes/lighttheme.webp' : '/themes/darktheme.webp'}
          alt=""
          className="h-3 w-3"
        />
      ) : (
        <span className="h-3 w-3 animate-pulse rounded-full bg-black/20" />
      )}
    </button>
  )
}
