"use client"

// components/footer.tsx
import { useEffect, useState } from "react"
import Image from "next/image"
import { Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { LinkPreview } from "@/components/ui/link-preview"

const footerCopy = {
    light: {
        madeBy: "Humans",
        location: { label: "Earth", className: "text-green-500" },
    },
    dark: {
        madeBy: "Reptiloids",
        location: { label: "Mars", className: "text-red-500" },
    },
} as const

export default function Footer() {
    const { resolvedTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const themeKey = isMounted && resolvedTheme === "dark" ? "dark" : "light"
    const copy = footerCopy[themeKey]

    return (
        <footer data-reveal className="max-w-7xl mx-auto border-t border-gray-200 bg-white transition-colors duration-300 dark:border-white/10 dark:bg-background">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-500 sm:flex-row sm:px-6 lg:px-8 dark:text-gray-400">
                <div className="flex items-center gap-2 mb-4 sm:mb-0">
                    <div className="h-8 w-20 pr-2">
                        <Image src="/icon-black.webp" alt="Washly" width={80} height={32} className="block h-full w-full object-contain dark:hidden" />
                        <Image src="/icon-white.webp" alt="Washly" width={80} height={32} className="hidden h-full w-full object-contain dark:block" />
                    </div>
                    <span>© 2025 TOO Washly</span>
                    <Mail size={16} className="ml-2 text-gray-400 dark:text-gray-500" />
                    <a href="mailto:support@washly.kz" className="transition hover:text-gray-700 dark:hover:text-gray-200">
                        support@washly.kz
                    </a>
                </div>

                {/* Правая часть */}
                {/* <div className="text-center text-sm text-gray-400 sm:text-right">
                    Performed by{" "}
                    <LinkPreview url="https://github.com/sultanjke" className="font-semibold text-gray-500 transition-colors dark:text-gray-400 dark:hover:text-white" width={320} height={200}>
                        Sultan Mecheyev
                    </LinkPreview>{" "}— Made by{" "}
                    <span className="transition-colors dark:text-gray-400">{copy.madeBy}</span> on{" "}
                    <span className={`font-bold transition-colors ${copy.location.className}`}>{copy.location.label}</span>
                </div> */}
            </div>
        </footer>
    )
}
