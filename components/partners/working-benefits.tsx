export default function PartnersHowItWorks() {
    const steps = [
        {number: "1", description: "Оставляете заявку на партнёрство"},
        {number: "2", description: "Получаете доступ к личному кабинету"},
        {number: "3", description: "Размещаете информацию о вашем автосервисе"},
        {number: "4", description: "Видите новых клиентов на автосервисе"},
        {number: "5", description: "Получаете оплату за каждое посещение"},
    ]

    return (
        <section
            data-reveal
            className="bg-background px-4 py-28 transition-colors sm:px-6 lg:px-8"
            id="how-it-works"
        >
            <div className="max-w-6xl mx-auto text-center scale-[1.08]">
                <h2 className="mb-25 text-4xl font-bold text-gray-900 transition-colors dark:text-white">Как выглядит работа с washly.kz</h2>
                <div className="relative mx-auto sm:mt-4">
                    <div
                        className="
                          absolute left-0 right-0 top-1/4 -translate-y-1/2
                          h-[0.2rem] bg-[#4C85FF] dark:bg-[#4C85FF]
                          hidden sm:block
                          mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]
                        "
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-14 sm:gap-10 items-start">
                        {steps.map((s, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div
                                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#4C85FF] text-3xl font-bold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] sm:h-18 sm:w-18 dark:bg-[#4C85FF]">
                                    {s.number}
                                </div>
                                <p className="max-w-[220px] text-sm leading-snug text-gray-500 sm:text-base dark:text-gray-400">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
