export default function HowItWorks() {
    const steps = [
        {number: "1", title: "Скачайте приложение", description: "Получите Washly из App Store или Google Play"},
        {number: "2", title: "Выберите план", description: "Безлимитный месяц или оплата за каждую мойку"},
        {number: "3", title: "Найдите станцию", description: "Используйте карту для поиска ближайших партнёров"},
        {number: "4", title: "Покажите QR-код", description: "Подтвердите и наслаждайтесь мойкой"},
    ]

    return (
        <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white" id="how-it-works">
            <div className="max-w-6xl mx-auto text-center scale-[1.08]">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                    <img src="/Glowing%20Star.png"/>
                </div>
                <h2 className="text-5xl font-bold mb-3">Как это работает?</h2>
                <p className="text-gray-400 mb-16 text-xl">Начните за минуты, мойтесь за секунды</p>
                <div className="relative mx-auto sm:mt-4">
                    <div
                        className="
                          absolute left-0 right-0 top-1/4 -translate-y-1/2
                          h-[0.4rem] bg-black
                          hidden sm:block
                          [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]
                        "
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-14 sm:gap-10 items-start">
                        {steps.map((s, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                {/* Чёрный номер поверх линии */}
                                <div
                                    className="flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-3xl bg-black text-white text-3xl font-bold shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-4">
                                    {s.number}
                                </div>
                                <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-1">{s.title}</h3>
                                <p className="text-gray-500 text-sm sm:text-base max-w-[220px] leading-snug">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
