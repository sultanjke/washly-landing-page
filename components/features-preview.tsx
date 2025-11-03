import { Sparkles } from "lucide-react"

export default function FeaturesPreview() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="advantages">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-6">
          <Sparkles className="w-8 h-8 text-amber-500" />
        </div>

        <h2 className="text-4xl font-bold mb-4">Чисто, удобно, быстро.</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Не трать время в очередях. Выбирай мойку, бронируй время и оплачивай онлайн
        </p>

        <div className="relative max-w-5xl mx-auto h-[600px]">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] z-10">
            <img src="/mobile-app-interface-showing-car-wash-booking-map-.jpg" alt="App screen 1" className="w-full rounded-3xl shadow-2xl" />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] z-20">
            <img src="/mobile-app-interface-showing-car-wash-service-deta.jpg" alt="App screen 2" className="w-full rounded-3xl shadow-2xl" />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] z-10">
            <img src="/mobile-app-interface-showing-car-wash-location-map.jpg" alt="App screen 3" className="w-full rounded-3xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
