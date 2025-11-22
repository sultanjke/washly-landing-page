import Image from "next/image"

export default function HowItWorks() {
    const steps = [
        {number: "1", title: "Скачайте приложение", description: "Получите Washly из App Store или Google Play"},
        {number: "2", title: "Выберите план", description: "Безлимитный месяц или оплата за каждую мойку"},
        {number: "3", title: "Найдите станцию", description: "Используйте карту для поиска ближайших партнёров"},
        {number: "4", title: "Покажите QR-код", description: "Подтвердите и наслаждайтесь мойкой"},
    ]

    return (
        <section
            data-reveal
            className="bg-background px-4 py-28 transition-colors sm:px-6 lg:px-8"
            id="how-it-works"
        >
            <div className="max-w-6xl mx-auto text-center scale-[1.08]">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                    <Image src="/GlowingStar.webp" alt="Glowing Star" width={64} height={64} loading="lazy" className="h-16 w-16"/>
                </div>
                <h2 className="mb-3 text-4xl font-bold text-gray-900 transition-colors dark:text-white">Как это работает?</h2>
                <p className="mb-16 text-xl text-gray-500 transition-colors dark:text-gray-400">Начните за минуты, мойтесь за секунды</p>
                <div className="relative mx-auto sm:mt-4">
                    <div
                        className="
                          absolute left-0 right-0 top-1/4 -translate-y-1/2
                          h-[0.2rem] bg-[#4C85FF] dark:bg-[#4C85FF]
                          hidden sm:block
                          mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]
                        "
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-14 sm:gap-10 items-start">
                        {steps.map((s, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                {/* Чёрный номер поверх линии */}
                                <div
                                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#4C85FF] text-3xl font-bold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] sm:h-18 sm:w-18 dark:bg-[#4C85FF] dark:text-white">
                                    {s.number}
                                </div>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">{s.title}</h3>
                                <p className="max-w-[220px] text-sm leading-snug text-gray-500 sm:text-base dark:text-gray-400">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
