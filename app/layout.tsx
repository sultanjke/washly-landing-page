import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import ScrollRevealProvider from "@/components/scroll-reveal-provider"
import InitialLoader from "@/components/initial-loader"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const yandex = localFont({
  // Use filesystem paths that resolve at build time. From `app/layout.tsx`,
  // public is a sibling directory, so reference fonts via "../public/...".
  src: [
    { path: "../public/fonts/YandexSansDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/YandexSansDisplay-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Washly - Современное приложение для автомойки",
  description: "Найди ближайшую к себе мойку, выбери удобное время и оплати онлайн",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${yandex.className} antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider>
          <InitialLoader>
            <ScrollRevealProvider>
              {children}
            </ScrollRevealProvider>
          </InitialLoader>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
