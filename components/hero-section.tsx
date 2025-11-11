'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section data-reveal className="px-4 pb-12 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-[400px] overflow-hidden rounded-3xl lg:min-h-[500px]">
          <Image
            src="/new-bg-image.png"
            alt="Hero background"
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: "100% 100%" }}
            className="absolute inset-0 z-0 h-full w-full object-cover object-right"
          />
          <div className="relative z-20 grid items-center gap-8 p-16 grid-cols-12 lg:p-16">
            <div className="lg:col-span-7 space-y-6 text-white">
              <h1 className="lg:w-220  md:w-110 w-55 text-2xl font-bold leading-tight text-balance  lg:text-5xl">
                Современное приложение для тех, кто ценит время и комфорт
              </h1>
              <p className="md:w-125 w-60 md:text-2xl text-xl text-white/90">
                Найди ближайшую автомойку, выбери удобное время и оплати онлайн
              </p>

              <div className="space-y-2">
                <Button className="text-md h-10 w-50 whitespace-nowrap cursor-pointer bg-white text-black hover:bg-gray-100">
                  Скачать приложение
                </Button>
                <div className="mt-3 flex items-center gap-4">
                  <a
                    href="#"
                    className="inline-flex h-12 w-30 items-center justify-center overflow-hidden rounded-md"
                    aria-label="App Store link"
                  >
                    <img
                      src="/badges/app-store-badge.png"
                      alt="App Store"
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full"
                    />
                  </a>

                  <a
                    href="#"
                    className="inline-flex h-12 w-30 items-center justify-center overflow-hidden rounded-md"
                    aria-label="Google Play link"
                  >
                    <img
                      src="/badges/google-play-badge.png"
                      alt="Google Play"
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:col-span-5 lg:h-[500px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
