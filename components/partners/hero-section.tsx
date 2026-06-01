'use client'

import Image from "next/image"
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

export default function PartnersHeroSection() {
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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
                    onClick={() => setSuccessOpen(false)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="success-card w-full max-w-md rounded-4xl bg-white p-8 text-center shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 drop-in-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.66a.75.75 0 1 0-1.22-.88l-3.102 4.294-1.62-1.62a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.138-.082l3.614-5.022Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                            Готовим релиз
                        </h3>
                        <p className="mt-3 text-base text-gray-600">
                            Спасибо за заявку! Приложение находится в разработке и вот-вот выйдет. Мы будем держать Вас в курсе.
                        </p>
                        <button
                            onClick={() => setSuccessOpen(false)}
                            className="mt-6 w-full rounded-2xl bg-emerald-500 px-4 py-3 text-base font-semibold text-white transition hover:bg-emerald-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                        >
                            Отлично
                        </button>
                    </div>
                </div>
            )}

            <section data-reveal className="px-4 pt-24 pb-12 transition-colors sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="relative h-[800px] overflow-hidden rounded-4xl lg:h-[630px]">
                        <Image
                            src="/partners-bg-img.webp"
                            alt="Hero background"
                            aria-hidden="true"
                            fill
                            priority
                            sizes="100vw"
                            className="absolute inset-0 z-0 h-full w-full object-cover object-[40%_95%] sm:object-[55%_90%] md:object-[80%_70%] lg:object-[100%_60%]"
                        />
                        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-16">
                            <div className="text-white space-y-6 text-center lg:text-left lg:col-span-7 flex flex-col items-center lg:items-start">
                                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance max-w-3xl">
                                    Станьте нашим партнером
                                </h1>
                                <p className="text-lg md:text-2xl font-regular text-white/90 max-w-2xl">
                                    Добавьте свою автомойку или автосервис в приложение и получите поток новых пользователей
                                </p>
                                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                                    <div className="rounded-3xl border border-white/20 bg-white/5 bg-clip-padding p-4 backdrop-blur-xl shadow-lg w-full">
                                        <label htmlFor="partner-name" className="sr-only">
                                            Имя
                                        </label>
                                        <div className="space-y-3">
                                            <input
                                                id="partner-name"
                                                type="text"
                                                placeholder="Ваше имя"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full rounded-2xl bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 focus:outline-none"
                                            />
                                            <div className="relative w-full">
                                                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white">
                                                    +7
                                                </span>
                                                <input
                                                    id="partner-phone"
                                                    type="tel"
                                                    inputMode="tel"
                                                    placeholder="(705) 123-45-65"
                                                    value={formatLocalPhone(phoneDigits)}
                                                    onChange={handlePhoneChange}
                                                    onKeyDown={handlePhoneKeyDown}
                                                    className="w-full rounded-2xl bg-white/10 px-12 py-3 text-gray placeholder:text-gray focus:outline-none"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={
                                                    loading ||
                                                    phoneDigits.length !== 10 ||
                                                    !name.trim()
                                                }
                                                className="flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/20 px-4 py-3 text-base font-semibold text-white transition hover:bg-white/30 disabled:opacity-60 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
                                            >
                                                {loading ? "Отправка..." : "Оставить заявку"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="relative hidden h-[400px] lg:col-span-5 lg:block lg:h-[500px]" />
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .success-card {
                    animation: modal-pop 0.35s ease-out both;
                }

                .drop-in-icon {
                    animation: icon-drop 0.5s ease-out both;
                }

                @keyframes modal-pop {
                    0% {
                        opacity: 0;
                        transform: translateY(16px) scale(0.96);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes icon-drop {
                    0% {
                        opacity: 0;
                        transform: translateY(-40%) scale(0.9);
                    }
                    70% {
                        opacity: 1;
                        transform: translateY(8%) scale(1.04);
                    }
                    100% {
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </>
    )
}
