'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        const target = document.querySelector(id)
        if (target) {
            window.scrollTo({
                top: (target as HTMLElement).offsetTop - 80, // 80px — высота шапки
                behavior: "smooth",
            })
        }
        setIsMenuOpen(false)
    }

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : ""
        return () => {
            document.body.style.overflow = ""
        }
    }, [isMenuOpen])

    const navItems = [
        { label: "Главная", href: "#home" },
        { label: "Партнеры", href: "#autoservices" },
        { label: "CRM система", href: "#app-preview" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-sm shadow-[0_25px_20px_-6px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/10 dark:bg-black/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="flex h-8 w-20 items-center">
                            <Image
                                src="/icon-black.png"
                                alt="Washly"
                                width={80}
                                height={32}
                                priority
                                className="block h-full w-full object-contain dark:hidden"
                            />
                            <Image
                                src="/icon-white.png"
                                alt="Washly"
                                width={80}
                                height={32}
                                className="hidden h-full w-full object-contain dark:block"
                            />
                        </Link>
                        <nav className="hidden items-center gap-8 md:flex">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Link
                                href="/"
                                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                            >
                                Клиентам
                            </Link>
                        </nav>
                    </div>
                    <div className="hidden items-center gap-4 md:flex">
                        <ThemeToggle />
                        <Button className="rounded-xl bg-[#4C85FF] px-6 text-white transition-colors hover:bg-[#4DA6FF] dark:bg-[#4C85FF] dark:text-white dark:hover:bg-[#4DA6FF]">
                            Скачать
                        </Button>
                    </div>
                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-gray-800 transition-colors hover:bg-gray-100 dark:border-white/20 dark:bg-black dark:text-white md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <span className="relative block h-4 w-5">
                            <span
                                className={`absolute left-0 right-0 h-0.5 rounded-full bg-current transition-transform duration-200 ${
                                    isMenuOpen
                                        ? "top-1/2 -translate-y-1/2 rotate-45"
                                        : "top-0"
                                }`}
                            />
                            <span
                                className={`absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
                                    isMenuOpen ? "scale-x-0 opacity-0" : "opacity-100"
                                }`}
                            />
                            <span
                                className={`absolute left-0 right-0 h-0.5 rounded-full bg-current transition-transform duration-200 ${
                                    isMenuOpen
                                        ? "top-1/2 -translate-y-1/2 -rotate-45"
                                        : "bottom-0"
                                }`}
                            />
                        </span>
                    </button>

                    {isMenuOpen && (
                        <div className="absolute left-0 right-0 top-full mt-3 md:hidden">
                            <div className="rounded-2xl backdrop-blur-lg border border-black/5 bg-white/95 p-5 shadow-2xl dark:border-white/10 dark:bg-black/90">
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-2">
                                        {navItems.map((item) => (
                                            <a
                                                key={`mobile-${item.href}`}
                                                href={item.href}
                                                onClick={(e) => handleScroll(e, item.href)}
                                                className="rounded-xl border border-black/5 px-4 py-2 text-left text-base font-medium text-gray-800 transition-colors hover:border-black/20 hover:text-black dark:border-white/10 dark:text-gray-100 dark:hover:border-white/40 dark:hover:text-white"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                        <Link
                                            href="/"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="rounded-xl border border-black/5 px-4 py-2 text-left text-base font-medium text-gray-800 transition-colors hover:border-black/20 hover:text-black dark:border-white/10 dark:text-gray-100 dark:hover:border-white/40 dark:hover:text-white"
                                        >
                                            Клиентам
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between rounded-xl border border-black/5 bg-gray-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Тема</span>
                                        <ThemeToggle />
                                    </div>
                                    <Button
                                        className="w-full rounded-xl bg-black py-3 text-base font-semibold text-white hover:bg-gray-800 dark:bg-[#4C85FF] dark:hover:bg-[#4DA6FF]"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Скачать приложение
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
