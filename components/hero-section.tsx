'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section data-reveal className="px-4 pb-12 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-[800px] overflow-hidden rounded-4xl lg:min-h-[100px]">
          <Image
            src="https://amzn-s3-washly.s3.eu-north-1.amazonaws.com/bgImgClients.png"
            alt="Hero background"
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "65% 100%" }}
            className="absolute inset-0 z-0 h-full w-full"
          />
          <div className="relative z-20 grid grid-cols-1 items-center gap-8 p-10 sm:p-12 lg:grid-cols-12 lg:p-16">
            <div className="flex flex-col items-center space-y-8 text-white text-center lg:col-span-7 lg:items-start lg:text-left">
              <h1 className="lg:w-220 max-w-[55ch] text-balance text-4xl sm:text-4xl md:text-5xl lg:text-5xl tracking-light font-bold leading-tight lg:max-w-[110ch]">
                Современное приложение для тех, кто ценит время и комфорт
              </h1>
              <p className="w-full max-w-[60ch] text-xl text-white/90 md:max-w-[125ch] md:text-2xl">
                Найди ближайшую автомойку, выбери удобное время и оплати онлайн
              </p>

              <div className="flex w-full flex-col items-center gap-4 sm:items-start">
                <Button className="text-md h-10 w-50 cursor-pointer whitespace-nowrap bg-[#4C85FF] text-white hover:bg-[#4DA6FF] lg:self-start">
                  Скачать приложение
                </Button>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <a
                    href="#"
                    className="inline-flex h-12 w-30 items-center justify-center overflow-hidden rounded-md"
                    aria-label="App Store link"
                  >
                    <img
                      src="/badges/app-store-badge.webp"
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
                      src="/badges/google-play-badge.webp"
                      alt="Google Play"
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative hidden h-[400px] lg:col-span-5 lg:block lg:h-[500px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
