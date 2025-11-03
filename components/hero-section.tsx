'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Apple, Play } from "lucide-react"
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
        // Разрешаем удалять любой символ, в том числе "-", ")", " "
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
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        onKeyDown={handleKeyDown}
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
                                src="/modern-luxury-car-on-gradient-background.jpg"
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
