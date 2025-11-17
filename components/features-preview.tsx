"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/FeaturesPreview.module.css";

export default function FeaturesPreview() {
    const mobileSlides = [
        { src: "/app_demonstration_1.png", alt: "App booking" },
        { src: "/app_demonstration_2.png", alt: "App navigation" },
        { src: "/app_demonstration_3.png", alt: "App home" },
    ] as const

    const sliderViewportRef = useRef<HTMLDivElement | null>(null)
    const sliderTrackRef = useRef<HTMLDivElement | null>(null)
    const scrollRaf = useRef<number | null>(null)
    const [activeSlide, setActiveSlide] = useState(1)

    useEffect(() => {
        const viewport = sliderViewportRef.current
        const track = sliderTrackRef.current
        if (!viewport || !track) return

        const updateActiveSlide = () => {
            const slides = Array.from(track.children) as HTMLElement[]
            if (!slides.length) return

            const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2
            let closestIndex = 0
            let shortestDistance = Number.POSITIVE_INFINITY

            slides.forEach((slide, index) => {
                const slideCenter = slide.offsetLeft + slide.offsetWidth / 2
                const distance = Math.abs(slideCenter - viewportCenter)
                if (distance < shortestDistance) {
                    shortestDistance = distance
                    closestIndex = index
                }
            })

            setActiveSlide((prev) => (prev === closestIndex ? prev : closestIndex))
        }

        const handleScroll = () => {
            if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current)
            scrollRaf.current = requestAnimationFrame(updateActiveSlide)
        }

        viewport.addEventListener("scroll", handleScroll, { passive: true })
        updateActiveSlide()

        return () => {
            viewport.removeEventListener("scroll", handleScroll)
            if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current)
        }
    }, [])

    const scrollToSlide = (index: number) => {
        const viewport = sliderViewportRef.current
        const track = sliderTrackRef.current
        if (!viewport || !track) return

        const slide = track.children[index] as HTMLElement | undefined
        if (!slide) return

        const targetLeft = slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2
        viewport.scrollTo({ left: targetLeft, behavior: "smooth" })
        setActiveSlide(index)
    }

    return (
        <section
            data-reveal
            className="mt-5 mb-48 px-4 py-16 transition-colors sm:px-6 lg:px-8"
            id="advantages"
        >
            <div className="mx-auto max-w-7xl text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl">
                    <Image src="/Dizzy.png" alt="Dizzy" width={64} height={64} loading="lazy"/>
                </div>

                <h2 className="mb-4 text-4xl font-bold text-gray-900 transition-colors dark:text-white">
                    Чисто, удобно, быстро.
                </h2>
                <p className="mb-30 text-xl text-gray-500 transition-colors dark:text-gray-400">
                    Не трать время в очередях. Выбирай мойку, бронируй время и оплачивай онлайн
                </p>
                <div className="relative mx-auto hidden h-[640px] max-w-5xl md:block">
                    <div className="absolute inset-0" aria-hidden={true}>
                        <div className="absolute left-22 top-[65%] z-10 w-100 -translate-y-1/2 transform-gpu">
                            <Image src="/app_demonstration_2.png" alt="App screen navigation" width={284} height={586} loading="lazy" className="h-auto w-full" />
                        </div>
                        <div className="absolute left-1/2 z-20 w-120 -translate-x-1/2 transform-gpu">
                            <Image src="/app_demonstration_3.png" alt="App home screen" width={384} height={768} priority className="h-auto w-full" />
                        </div>
                        <div className="absolute right-22 top-[65%] z-10 w-100 -translate-y-1/2 transform-gpu">
                            <Image src="/app_demonstration_1.png" alt="App booking screen" width={284} height={586} loading="lazy" className="h-auto w-full" />
                        </div>
                    </div>
                </div>

                <div className="md:hidden">
                    <div
                        ref={sliderViewportRef}
                        className={`${styles.maskEdges} ${styles.noScrollbar} -mx-4 overflow-x-auto px-4`}
                    >
                        <div
                            ref={sliderTrackRef}
                            className="flex snap-x snap-mandatory gap-8"
                            role="list"
                            aria-label="Скриншоты приложения"
                        >
                            {mobileSlides.map((slide, i) => (
                                <article
                                    key={slide.src}
                                    data-slide={i}
                                    className={`${styles.card} snap-center`}
                                    aria-roledescription="Слайд"
                                    aria-label={slide.alt}
                                >
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        width={360}
                                        height={780}
                                        priority={i === 1}
                                        sizes="(max-width: 640px) 75vw, 360px"
                                        className="h-full w-full object-contain"
                                    />
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="mt-[-100] flex justify-center gap-3" role="tablist" aria-label="Навигация по экранам">
                        {mobileSlides.map((_, index) => {
                            const isActive = index === activeSlide
                            return (
                                <button
                                    key={index}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-label={`Показать экран ${index + 1}`}
                                    className={`h-2.5 rounded-full transition-all ${
                                        isActive
                                            ? "w-6 bg-gray-900 dark:bg-white"
                                            : "w-2.5 bg-gray-400 dark:bg-gray-900"
                                    }`}
                                    onClick={() => scrollToSlide(index)}
                                />
                            )
                        })}
                    </div>
                </div>

                {/* Десктоп-версию скрываем. Если нужна — оберни старый блок в <div className="hidden md:block"> ... </div> */}
            </div>
        </section>
    );
}
