'use client'
import { Button } from "@/components/ui/button"

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
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-12">
                        <div className="text-2xl font-bold">washly</div>
                        <nav className="hidden md:flex items-center gap-8">
                            <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="text-sm text-gray-600 hover:text-gray-900">
                                Главная
                            </a>
                            <a href="#advantages" onClick={(e) => handleScroll(e, "#advantages")} className="text-sm text-gray-600 hover:text-gray-900">
                                Преимущества
                            </a>
                            <a href="#partners" onClick={(e) => handleScroll(e, "#partners")} className="text-sm text-gray-600 hover:text-gray-900">
                                Партнёрам
                            </a>
                            <a href="#pricing" onClick={(e) => handleScroll(e, "#pricing")} className="text-sm text-gray-600 hover:text-gray-900">
                                Тарифы
                            </a>
                        </nav>
                    </div>
                    <Button onClick={(e)=>handleScroll(e,"#download")}  className="bg-black text-white hover:bg-gray-800 rounded-full px-6"><a href="#download">Скачать</a></Button>
                </div>
            </div>
        </header>
    )
}
