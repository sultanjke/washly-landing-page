import Image from "next/image"
import {Button} from "@/components/ui/button"

export default function DownloadSection() {
    return (
        <section data-reveal id="download" className="py-16 px-4 transition-colors sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Левая карточка */}
                    <div
                        className="flex h-full w-full flex-col items-start justify-center rounded-4xl bg-[#0A23D5] p-7 text-white lg:p-6 lg:px-12">
                        <h3 className="text-[2rem] font-bold mb-3 mt-5">
                            Больше возможностей в приложении Washly.kz
                        </h3>
                        <p className="mb-8 text-[1.2rem] text-white">
                            Установите приложение по QR-коду или скачайте в App Store и Google Play
                        </p>
                        <div className="flex flex-wrap gap-2 mb-15">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-30 h-12 rounded-md overflow-hidden"
                                aria-label="App Store link"
                            >
                                <img src="/badges/app-store-badge.png" alt="App Store" className="w-full h-auto"/>
                            </a>

                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-30 h-12 rounded-md overflow-hidden"
                                aria-label="Google Play link"
                            >
                                <img src="/badges/google-play-badge.png" alt="Google Play" className="w-full h-auto"/>
                            </a>
                        </div>

                    </div>
                    {/* Правая карточка */}
                    <Image
                        src="/download-app-illustration.png"
                        alt="Экран приложения Washly"
                        width={960}
                        height={720}
                        loading="lazy"
                        className="h-full w-full rounded-4xl object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
