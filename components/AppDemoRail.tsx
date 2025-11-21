"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import '@/styles/demo-rail.css';

const slides = [
    {src: "/app_demonstration_1.webp", alt: "Booking"},
    {src: "/app_demonstration_2.webp", alt: "Navigation"},
    {src: "/app_demonstration_3.webp", alt: "Home"},
];

export default function AppDemoRail() {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        const items = Array.from(el.querySelectorAll("[data-slide]")) as HTMLElement[];

        const io = new IntersectionObserver(
            (entries) => {
                // выбираем тот, что ближе к центру экрана
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => Math.abs(0.5 - a.intersectionRatio) - Math.abs(0.5 - b.intersectionRatio));

                if (visible[0]) {
                    const idx = Number((visible[0].target as HTMLElement).dataset.index || 0);
                    setActive(idx);
                }
            },
            {root: el, threshold: [0.35, 0.6, 0.9]}
        );

        items.forEach((it) => io.observe(it));
        return () => io.disconnect();
    }, []);

    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h3 className="mb-4 text-center text-3xl font-bold">Демо приложения</h3>
                <p className="mb-8 text-center text-gray-500">Листай по горизонтали, чтобы посмотреть экраны</p>

                {/* ВАЖНО: вынеси класс mask-edges в отдельный .css/.scss файл (см. ниже) */}
                <div
                    className="relative"
                >
                    <div
                        ref={trackRef}
                        className="mask-edges -mx-4 overflow-x-auto scroll-smooth px-4 no-scrollbar"
                    >
                        <div
                            className="
                flex snap-x snap-mandatory gap-4
                [perspective:1200px]
              "
                        >
                            {slides.map((s, i) => (
                                <article
                                    key={i}
                                    data-slide
                                    data-index={i}
                                    className="
                    group relative snap-center
                    w-[74vw] min-w-[74vw] sm:w-[58vw] sm:min-w-[58vw] md:w-[420px] md:min-w-[420px]
                    aspect-[9/19.5]
                    rounded-[32px]  from-black/10 to-black/5
                    ring-1 ring-black/5 dark:ring-white/10
                    overflow-hidden
                    -mr-6 first:ml-2 last:mr-2
                    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                    transition-transform duration-300
                    [transform-style:preserve-3d]
                  "
                                    style={{
                                        // лёгкий «конвейер»: крайние слегка уезжают по оси Z и поворачиваются
                                        // (на мобилке ощущается «друг за другом»)
                                        transform:
                                            active === i
                                                ? "translateZ(0) rotateY(0deg)"
                                                : active > i
                                                    ? "translateZ(-60px) rotateY(6deg)"
                                                    : "translateZ(-60px) rotateY(-6deg)",
                                    }}
                                >
                                    {/* мокап-рамка (опционально: подставь webp с рамкой телефона) */}
                                    {/* <Image src="/frames/iphone-15.webp" alt="" fill className="pointer-events-none object-contain" /> */}

                                    <Image
                                        src={s.src}
                                        alt={s.alt}
                                        fill
                                        priority={i === 1} // центральный — приоритет
                                        sizes="(max-width: 640px) 74vw, (max-width: 1024px) 58vw, 420px"
                                        className="object-cover"
                                    />
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="mt-6 flex justify-center gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-2 w-2 rounded-full transition-all ${
                                    active === i ? "w-6 bg-gray-900 dark:bg-white" : "bg-gray-300 dark:bg-gray-600"
                                }`}
                                onClick={() => {
                                    const el = trackRef.current;
                                    const card = el?.querySelectorAll<HTMLElement>("[data-slide]")[i];
                                    if (el && card) {
                                        el.scrollTo({
                                            left: card.offsetLeft - 16, // учёт паддинга контейнера
                                            behavior: "smooth",
                                        });
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
