import { Button } from "@/components/ui/button"

export default function Header() {
  return (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-[0_25px_20px_-6px_rgba(0,0,0,0.12)] ring-1 ring-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <div className="h-8 w-20">
              <img src="/icon-black.png" alt="" />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Главная
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Преимущества
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Партнёрам
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Тарифы
              </a>
            </nav>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-xl px-6 font-bold cursor-pointer">Скачать</Button>
        </div>
      </div>
    </header>
  )
}
