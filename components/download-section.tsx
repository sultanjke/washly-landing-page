import {Button} from "@/components/ui/button"
import {Apple, Play} from "lucide-react"

export default function DownloadSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Левая чёрная карточка */}
                    <div
                        className="bg-black rounded-[3rem] p-8 lg:px-12 flex items-start flex-col justify-center lg:p-6 text-white">
                        <h3 className="text-[2.5rem] font-bold mb-12">
                            Больше возможностей в приложении Washly.kz
                        </h3>
                        <p className="text-white/80 mb-8 text-[1.7rem]">
                            Установите приложение по QR-коду или скачайте в App Store и Google Play
                        </p>
                        <div className="flex flex-wrap gap-4 mb-10">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-30 h-12 rounded-md overflow-hidden"
                                aria-label="App Store link"
                            >
                                <img src="/badges/app-store-badge.svg" alt="App Store" className="w-full h-auto"/>
                            </a>

                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-30 h-12 rounded-md overflow-hidden"
                                aria-label="Google Play link"
                            >
                                <img src="/badges/google-play-badge.svg" alt="Google Play" className="w-full h-auto"/>
                            </a>
                        </div>

                    </div>
                    <img src="/download-app-illustration.png" className="w-full h-auto" />
                </div>
            </div>
        </section>
    )
}
