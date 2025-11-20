'use client'

import {
    useState,
    type FormEvent,
    type ChangeEvent,
    type KeyboardEvent,
} from "react"

const extractDigits = (value: string): string => {
    const digits = value.replace(/\D/g, "")
    return digits.slice(0, 10)
}

const formatLocalPhone = (digits: string): string => {
    if (!digits) return ""

    const p1 = digits.slice(0, 3)
    const p2 = digits.slice(3, 6)
    const p3 = digits.slice(6, 8)
    const p4 = digits.slice(8, 10)

    let result = ""

    if (p1) {
        result += `(${p1}`
        if (p1.length === 3) result += ")"
    }

    if (p2) {
        result += ` ${p2}`
    }

    if (p3) {
        result += `-${p3}`
    }

    if (p4) {
        result += `-${p4}`
    }

    return result
}

export default function PartnersDownloadSection() {
    const [phoneDigits, setPhoneDigits] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [successOpen, setSuccessOpen] = useState<boolean>(false)

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const digits = extractDigits(e.target.value)
        setPhoneDigits(digits)
    }

    const handlePhoneKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            e.preventDefault()
            setPhoneDigits((prev) => prev.slice(0, -1))
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (phoneDigits.length !== 10 || !name.trim()) return

        try {
            setLoading(true)
            await fetch("https://api.washly.kz/smtp/lead/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    phone: `+7${phoneDigits}`,
                    name: name.trim(),
                }),
            })
            setPhoneDigits("")
            setName("")
            setSuccessOpen(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {successOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                    onClick={() => setSuccessOpen(false)}
                >
                    <div
                        className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-xl font-semibold text-gray-900">
                            Заявка отправлена
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Мы свяжемся с вами в ближайшее время.
                        </p>
                        <button
                            onClick={() => setSuccessOpen(false)}
                            className="mt-4 w-full rounded-2xl bg-[#4C85FF] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#4DA6FF] transition"
                        >
                            Понятно
                        </button>
                    </div>
                </div>
            )}

            <section data-reveal id="filloutForm" className="py-16 px-4 transition-colors sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-black rounded-4xl p-10 sm:p-14 text-white">
                        <h3 className="text-3xl font-bold text-center sm:text-4xl">
                            Оставьте заявку на партнерство
                        </h3>
                        <p className="mt-3 text-center text-base text-white/60 sm:text-lg">
                            Мы вам позвоним или напишем в мессенджер
                        </p>
                        <form
                            className="mt-15 flex flex-col items-center gap-3 sm:flex-row sm:justify-center flex-wrap"
                            onSubmit={handleSubmit}
                        >
                            <label htmlFor="partners-download-name" className="sr-only">
                                Имя
                            </label>
                            <div className="w-full max-w-xs mb-2 sm:mb-0">
                                <input
                                    id="partners-download-name"
                                    type="text"
                                    placeholder="Ваше имя"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <label htmlFor="partners-download-phone" className="sr-only">
                                Номер телефона
                            </label>
                            <div className="relative w-full max-w-xs">
                                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    +7
                                </span>
                                <input
                                    id="partners-download-phone"
                                    type="tel"
                                    inputMode="tel"
                                    placeholder="(705) 123-45-65"
                                    value={formatLocalPhone(phoneDigits)}
                                    onChange={handlePhoneChange}
                                    onKeyDown={handlePhoneKeyDown}
                                    className="w-full rounded-2xl border border-white/10 bg-white px-12 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={
                                    loading ||
                                    phoneDigits.length !== 10 ||
                                    !name.trim()
                                }
                                className="w-full max-w-44 rounded-2xl bg-[#4C85FF] px-6 py-3 text-base cursor-pointer text-white shadow-lg transition hover:bg-[#4DA6FF] disabled:opacity-60"
                            >
                                {loading ? "Отправка..." : "Оставить заявку"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
