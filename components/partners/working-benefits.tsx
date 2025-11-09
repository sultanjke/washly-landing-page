export default function PartnersHowItWorks() {
    const steps = [
        {number: "1", description: "Оставляете заявку на партнёрство"},
        {number: "2", description: "Получаете доступ к личному кабинету"},
        {number: "3", description: "Размещаете информацию о вашем автосервисе"},
        {number: "4", description: "Видите новых клиентов на автосервисе"},
        {number: "5", description: "Получаете оплату за каждое посещение"},
    ]

    return (
        <section data-reveal className="py-28 px-4 sm:px-6 lg:px-8 bg-white" id="how-it-works">
            <div className="max-w-6xl mx-auto text-center scale-[1.08]">
                <h2 className="text-5xl font-bold mb-25">Как выглядит работа с washly.kz</h2>
                <div className="relative mx-auto sm:mt-4">
                    <div
                        className="
                          absolute left-0 right-0 top-1/4 -translate-y-1/2
                          h-[0.2rem] bg-black
                          hidden sm:block
                          mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]
                        "
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-14 sm:gap-10 items-start">
                        {steps.map((s, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div
                                    className="flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-3xl bg-black text-white text-3xl font-bold shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-4">
                                    {s.number}
                                </div>
                                <p className="text-gray-500 text-sm sm:text-base max-w-[220px] leading-snug">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
