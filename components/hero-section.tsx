'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function HeroSection() {
    const [phone, setPhone] = useState("")

    const formatPhone = (digits: string) => {
        if (digits === "") return ""

        // ограничиваем длину
        if (digits.length > 11) digits = digits.slice(0, 11)

        // заменяем первую 8 на 7, если есть
        if (digits.startsWith("8")) digits = "7" + digits.slice(1)
        if (!digits.startsWith("7")) digits = "7" + digits

        // форматирование
        let formatted = "+7"
        if (digits.length > 1) formatted += " (" + digits.slice(1, 4)
        if (digits.length >= 4) formatted += ") " + digits.slice(4, 7)
        if (digits.length >= 7) formatted += "-" + digits.slice(7, 9)
        if (digits.length >= 9) formatted += "-" + digits.slice(9, 11)

        return formatted
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value
        const digits = raw.replace(/\D/g, "")
        setPhone(formatPhone(digits))
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            const input = e.currentTarget
            const start = input.selectionStart ?? 0
            const end = input.selectionEnd ?? 0

            // если курсор не в конце — обычное поведение
            if (start !== input.value.length || end !== input.value.length) return

            // если удаляем последний символ — снимаем по цифрам
            const digits = phone.replace(/\D/g, "")
            const newDigits = digits.slice(0, -1)
            setPhone(formatPhone(newDigits))
            e.preventDefault()
        }
    }
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px]">
          <img
            src="/new-bg-image.png"
            alt="Hero background"
            aria-hidden="true"
            loading="eager"
            style={{ objectPosition: '100% 100%' }}
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

              <div className="space-y-2">
                  <Button className="bg-white text-black hover:bg-gray-100 whitespace-nowrap cursor-pointer w-50 h-10 text-md">
                    Скачать приложение
                  </Button>
                  <div className="flex items-center gap-4 mt-3">
                    {/* Replace these <img> sources with your real badge images if needed */}
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-30 h-12 rounded-md overflow-hidden"
                      aria-label="App Store link"
                    >
                      <img src="/badges/app-store-badge.svg" alt="App Store" className="w-full h-auto" />
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-30 h-12 rounded-md overflow-hidden"
                      aria-label="Google Play link"
                    >
                      <img src="/badges/google-play-badge.svg" alt="Google Play" className="w-full h-auto" />
                    </a>
                  </div>
                </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] lg:col-span-5" />
          </div>
        </div>
      </div>
    </section>
  )
}
