'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"

export default function Header() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        const target = document.querySelector(id)
        if (target) {
            window.scrollTo({
                top: (target as HTMLElement).offsetTop - 80, // 80px — высота шапки
                behavior: "smooth",
            })
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-sm shadow-[0_25px_20px_-6px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/10 dark:bg-black/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
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
                            <a
                                href="#home"
                                onClick={(e) => handleScroll(e, "#home")}
                                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                            >
                                Главная
                            </a>
                            <a
                                href="#autoservices"
                                onClick={(e) => handleScroll(e, "#autoservices")}
                                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                            >
                                Партнеры
                            </a>
                            <a
                                href="#app-preview"
                                onClick={(e) => handleScroll(e, "#app-preview")}
                                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                            >
                                CRM система
                            </a>
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
                        <Button className="rounded-xl bg-black px-6 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300">
                            Скачать
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
