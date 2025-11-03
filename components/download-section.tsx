import { Button } from "@/components/ui/button"
import { Apple, Play, QrCode } from "lucide-react"

export default function DownloadSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Больше возможностей в приложении Washly.kz</h3>
            <p className="text-white/80 mb-6">Установи приложение по QR-коду или скачай в App Store и Google Play</p>

            <div className="flex gap-4 mb-8">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Apple className="w-5 h-5 mr-2" />
                App Store
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Play className="w-5 h-5 mr-2" />
                Google Play
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <QrCode className="w-32 h-32 text-white" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Скачай приложение</h3>

              <div className="bg-white rounded-2xl p-6 inline-block mb-6">
                <QrCode className="w-48 h-48 text-blue-600" />
              </div>

              <p className="text-white/90">Отсканируй QR-код для быстрой установки</p>
            </div>

            <div className="absolute bottom-0 right-0 w-32 h-32">
              <img src="/smartphone-with-app-icon-3d-illustration.jpg" alt="Phone" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
