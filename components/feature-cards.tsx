import Image from "next/image";

export default function FeatureCards() {
    type Feature = {
        title: string;
        description: string;
        bgSrc: string;
        decoSrc: string;
        decoSide: "left" | "right";
        align: "left" | "right" | "center";
    };

    const features: Feature[] = [
        {
            title: "QR — доступ",
            description: "Просто отсканируйте QR-код и начните мойку. Быстро и безопасно.",
            bgSrc: "/images/cards/qr-bg.png",
            decoSrc: "/images/cards/qr-deco.png",
            decoSide: "left",
            align: "left",
        },
        {
            title: "Удобное приложение",
            description: "Найдите ближайшую станцию на карте и посмотрите доступность в реальном времени.",
            bgSrc: "/images/cards/app-bg.png",
            decoSrc: "/images/cards/app-deco.png",
            decoSide: "right",
            align: "right",
        },
        {
            title: "Безопасные платежи",
            description: "Kaspi Pay и банковские карты. Ваши деньги под защитой.",
            bgSrc: "/images/cards/pay-bg.png",
            decoSrc: "/images/cards/pay-deco.png",
            decoSide: "left",
            align: "left",
        },
        {
            title: "Приглашай друзей",
            description: "Получайте бесплатную мойку за каждого приглашенного друга.",
            bgSrc: "/images/cards/invite-bg.png",
            decoSrc: "/images/cards/invite-deco.png",
            decoSide: "right",
            align: "right",
        },
    ];

    return (
        <section data-reveal className="flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-5xl">
                <div className="mx-auto grid w-full md:w-200 gap-4 sm:grid-cols-1 md:grid-cols-2">
                    {features.map((f, i) => (
                        <article
                            key={i}
                            className="relative w-full h-[260px] rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:h-[440px]"
                            style={{
                                backgroundImage: `url(${f.bgSrc})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(120%_90%_at_10%_10%,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_35%,rgba(0,0,0,0.35)_100%)]" />

                            <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white sm:p-10">
                                <header
                                    className={
                                        f.align === "right"
                                            ? "text-right"
                                            : f.align === "center"
                                                ? "text-center"
                                                : "text-left"
                                    }
                                >
                                    <h3 className="text-3xl font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] sm:text-4xl">
                                        {f.title}
                                    </h3>
                                    <p
                                        className={
                                            "mt-4 max-w-xs leading-6 text-white/90 sm:leading-7" +
                                            (f.align === "center" ? " mx-auto" : f.align === "right" ? " ml-auto" : "")
                                        }
                                    >
                                        {f.description}
                                    </p>
                                </header>
                            </div>

                            {/* Floating 3D item (адаптив) */}
                            <div
                                className={[
                                    "absolute z-20 select-none pointer-events-none drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)]",
                                    // базовая вертикаль
                                    "bottom-[-85px] sm:bottom-[-10px] md:bottom-[-12px]",
                                    // горизонталь в зависимости от стороны и брейкпоинта
                                    f.decoSide === "left"
                                        ? "left-[-18px] sm:left-[-22px] md:left-[-54px] lg:left-[-88px]"
                                        : "right-[-18px] sm:right-[-22px] md:right-[-54px] lg:right-[-88px]",
                                ].join(" ")}
                                style={
                                    {
                                        // адаптивный размер: от 96px до 220px, относительно ширины вьюпорта
                                        // можно подстроить 18–22vw под свой макет
                                        ["--item" as any]: "clamp(180px, 20vw, 220px)",
                                        width: "var(--item)",
                                        height: "var(--item)",
                                    } as React.CSSProperties
                                }
                            >
                                <Image
                                    src={f.decoSrc}
                                    alt=""
                                    fill
                                    // объект не обрезаем, чтобы сохранить пропорции
                                    className="object-contain"
                                    // корректные подсказки для рендера (подстраиваются под брейкпоинты)
                                    sizes="(max-width: 640px) 32vw, (max-width: 768px) 24vw, 20vw"
                                    priority={false}
                                />
                            </div>

                            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/8" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
