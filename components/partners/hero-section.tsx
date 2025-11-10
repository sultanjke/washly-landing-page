'use client'

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export default function PartnersHeroSection() {
  return (
    <section data-reveal className="px-4 pt-24 pb-12 transition-colors sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px]">
          <img
            src="/partners-bg-img.png"
            alt="Hero background"
            aria-hidden="true"
            loading="eager"
            style={{ objectPosition: '100% 60%' }}
            className="absolute inset-0 w-full h-full object-cover object-right z-0"
          />
          <div className="relative z-20 grid lg:grid-cols-12 gap-8 items-center p-2 lg:p-16">
            <div className="text-white space-y-6 lg:col-span-7 mb-30 pt-10">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance w-220">
                Станьте нашим партнером
              </h1>
              <p className="text-2xl font-regular text-white/90 w-125">
                Добавьте свою автомойку или автосервис в приложение и получите поток новых пользователей
              </p>
              <form className="max-w-md">
                <div className="rounded-3xl border border-white/20 bg-white/5 bg-clip-padding p-4 backdrop-blur-xl shadow-lg w-85">
                  <label htmlFor="partner-phone" className="sr-only">
                    Номер телефона
                  </label>
                  <div className="space-y-3">
                    <input
                      id="partner-phone"
                      type="tel"
                      placeholder="+7"
                      className="w-75 rounded-2xl bg-white/10 px-4 py-3 text-gray-300 placeholder:text-gray-300 focus:outline-none"
                    />
                    <HoverBorderGradient
                      as="button"
                      type="submit"
                      containerClassName="!w-full rounded-4xl border border-white/20"
                      className="flex !w-full font-bold justify-center py-3 text-base text-white"
                    >
                      Оставить заявку
                    </HoverBorderGradient>
                  </div>
                </div>
              </form>
            </div>

            <div className="relative h-[400px] lg:h-[500px] lg:col-span-5" />
          </div>
        </div>
      </div>
    </section>
  )
}
