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
      description:
        "Просто отсканируйте QR-код и начните мойку. Быстро и безопасно.",
      bgSrc: "/images/cards/qr-bg.png",
      decoSrc: "/images/cards/qr-deco.png",
      decoSide: "left" as const,
      align: "left" as const,
    },
    {
      title: "Удобное приложение",
      description:
        "Найдите ближайшую станцию на карте и посмотрите доступность в реальном времени.",
      bgSrc: "/images/cards/app-bg.png",
      decoSrc: "/images/cards/app-deco.png",
      decoSide: "right" as const,
      align: "right" as const,
    },
    {
      title: "Безопасные платежи",
      description:
        "Kaspi Pay и банковские карты. Ваши деньги под защитой.",
      bgSrc: "/images/cards/pay-bg.png",
      decoSrc: "/images/cards/pay-deco.png",
      decoSide: "left" as const,
      align: "left" as const,
    },
    {
      title: "Приглашай друзей",
      description:
        "Получайте бесплатную мойку за каждого приглашенного друга.",
      bgSrc: "/images/cards/invite-bg.png",
      decoSrc: "/images/cards/invite-deco.png",
      decoSide: "right" as const,
      align: "right" as const,
    },
  ];

  return (
    <section data-reveal className="flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
  <div className="grid w-180 mx-auto gap-4 sm:grid-cols-1 md:grid-cols-2">
          {features.map((f, i) => (
            <article
              key={i}
              className="relative rounded-[28px] h-[360px] md:h-[440px] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              style={{
                backgroundImage: `url(${f.bgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Soft vignette + blur glow to match the look */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(120%_90%_at_10%_10%,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_35%,rgba(0,0,0,0.35)_100%)]" />

              {/* Content */}
              <div
                className={
                  "relative z-10 flex h-full flex-col justify-between p-8 sm:p-10 text-white"
                }
              >
                <header
                  className={
                    f.align === "right"
                      ? "text-right"
                      : f.align === "center"
                      ? "text-center"
                      : "text-left"
                  }
                >
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                    {f.title}
                  </h3>
                  <p className={
                    "mt-4 max-w-xs text-white/90 leading-6 sm:leading-7" +
                    (f.align === "center" ? " mx-auto" : f.align === "right" ? " ml-auto" : "")
                  }>
                    {f.description}
                  </p>
                </header>

                {/* Spacer to push deco item off the text a bit */}
                <div className="h-20" />
              </div>

              {/* Floating 3D item */}
              <div
                className={
                  "absolute z-20 inset-y-60 w-40 sm:w-[190px] md:w-[210px] -bottom-3 " +
                  (f.decoSide === "left" ? "left-[-85px]" : "right-[-85px]")
                }
              >
                <Image
                  src={f.decoSrc}
                  alt=""
                  width={420}
                  height={420}
                  className="select-none pointer-events-none drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)]"/>
              </div>

              {/* Inner card corners (strong rounding like the reference) */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/8" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
