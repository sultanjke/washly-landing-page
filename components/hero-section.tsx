import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Apple, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px]">
          <img
            src="/new-bg-image.png"
            alt="Hero background"
            aria-hidden="true"
            loading="eager"
            style={{ objectPosition: '100% 80%' }}
            className="absolute inset-0 w-full h-full object-cover object-right z-0"
          />
          <div className="relative z-20 grid lg:grid-cols-12 gap-8 items-center p-2 lg:p-16">
            <div className="text-white space-y-6 lg:col-span-7 mb-30">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Современное приложение для тех, кто ценит время и комфорт
              </h1>
              <p className="text-lg text-white/90">
                Найди ближайшую автомойку, выбери удобное время и оплати онлайн
              </p>

              <div className="space-y-4">
                  <Button className="bg-white text-black hover:bg-gray-100 whitespace-nowrap">
                    Скачать приложение
                  </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] lg:col-span-5" />
          </div>
        </div>
      </div>
    </section>
  )
}
