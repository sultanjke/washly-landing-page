'use client'
import Image from "next/image"
export default function PartnersHeroSection() {
  return (
    <section data-reveal className="px-4 pt-24 pb-12 transition-colors sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative min-h-[400px] overflow-hidden rounded-3xl lg:min-h-[500px]">
          <Image
            src="/partners-bg-img.png"
            alt="Hero background"
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 z-0 h-full w-full object-cover object-[40%_95%] sm:object-[55%_90%] md:object-[80%_70%] lg:object-[100%_60%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background: "radial-gradient(circle at 50% 35%, rgba(7, 10, 20, 0.05), rgba(3, 6, 12, 0.75))",
              mixBlendMode: "multiply",
            }}
          />
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-16">
            <div className="text-white space-y-6 text-center lg:text-left lg:col-span-7 mb-30 pt-20 flex flex-col items-center lg:items-start">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance max-w-3xl">
                Станьте нашим партнером
              </h1>
              <p className="text-lg md:text-2xl font-regular text-white/90 max-w-2xl">
                Добавьте свою автомойку или автосервис в приложение и получите поток новых пользователей
              </p>
              <form className="w-full max-w-md">
                <div className="rounded-3xl border border-white/20 bg-white/5 bg-clip-padding p-4 backdrop-blur-xl shadow-lg w-full">
                  <label htmlFor="partner-phone" className="sr-only">
                    Номер телефона
                  </label>
                  <div className="space-y-3">
                    <input
                      id="partner-phone"
                      type="tel"
                      placeholder="+7"
                      className="w-full rounded-2xl bg-white/10 px-4 py-3 text-gray-300 placeholder:text-gray-300 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/20 px-4 py-3 text-base font-semibold text-white transition hover:bg-white/30 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Оставить заявку
                    </button>
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
