import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Apple, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-amber-600 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-16">
            <div className="text-white space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Современное приложение для тех, кто ценит время и комфорт
              </h1>
              <p className="text-lg text-white/90">
                Найди ближайшую к себе мойку, выбери удобное время и оплати онлайн
              </p>

              <div className="space-y-4">
                <div className="flex gap-2 max-w-md">
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="bg-white/95 border-0 text-gray-900 placeholder:text-gray-500"
                  />
                  <Button className="bg-white text-purple-900 hover:bg-gray-100 whitespace-nowrap">
                    Получить приложение
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    <Apple className="w-5 h-5 mr-2" />
                    App Store
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Google Play
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src="/modern-luxury-car-front-view-on-gradient-backgroun.jpg"
                alt="Modern car"
                className="absolute bottom-0 right-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
