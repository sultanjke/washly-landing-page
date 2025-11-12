"use client";

import Image from "next/image";
import styles from "@/styles/FeaturesPreview.module.css";
import {motion, MotionConfig, ViewportOptions , Variants} from "framer-motion";

const viewport: ViewportOptions = { once: true, amount: 0.45 }

const phoneVariants: Variants = { initial: { opacity: 0, scale: 0.92, y: 60, }, visible: (custom: number) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: custom }, }), }

export default function FeaturesPreview() {
    // @ts-ignore
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
                <p className="mb-10 text-xl text-gray-500 transition-colors dark:text-gray-400">
                    Не трать время в очередях. Выбирай мойку, бронируй время и оплачивай онлайн
                </p>
                <MotionConfig transition={{type: "spring", stiffness: 220, damping: 24, mass: 0.9}}>
                    <div className="relative mx-auto h-[680px] hidden md:block max-w-5xl">
                        <motion.div variants={phoneVariants} initial="initial" whileInView="visible" viewport={viewport}
                                    custom={0.12}
                                    className="absolute left-22 top-[58%] z-10 w-[17.7rem] -translate-y-1/2 transform-gpu will-change-transform">
                            <Image src="/app_demonstration_2.png" alt="App screen navigation" width={284} height={586}
                                   loading="lazy" className="h-auto w-full"/></motion.div>
                        <motion.div variants={phoneVariants} initial="initial" whileInView="visible" viewport={viewport}
                                    custom={0}
                                    className="absolute bottom-1 left-1/2 z-20 w-[24rem] -translate-x-1/2 translate-y-[5rem] transform-gpu will-change-transform">
                            <Image src="/app_demonstration_3.png" alt="App home screen" width={384} height={768}
                                   priority className="h-auto w-full"/></motion.div>
                        <motion.div variants={phoneVariants} initial="initial" whileInView="visible" viewport={viewport}
                                    custom={0.2}
                                    className="absolute right-22 top-[58%] z-10 w-[17rem] -translate-y-1/2 transform-gpu will-change-transform">
                            <Image src="/app_demonstration_1.png" alt="App booking screen" width={272} height={552}
                                   loading="lazy" className="h-auto w-full"/></motion.div>
                    </div>
                </MotionConfig>

                <div className="md:hidden ">
                    <div className={`${styles.maskEdges} ${styles.noScrollbar} -mx-4 overflow-x-auto px-4`}>
                        <div className="flex snap-x snap-mandatory gap-3">
                            {[
                                {src: "/app_demonstration_1.png", alt: "App booking"},
                                {src: "/app_demonstration_2.png", alt: "App navigation"},
                                {src: "/app_demonstration_3.png", alt: "App home"},
                            ].map((s, i) => (
                                <article
                                    key={i}
                                    className={`${styles.card} snap-center `}
                                >
                                    <Image
                                        src={s.src}
                                        alt={s.alt}
                                        fill
                                        priority={i === 1}
                                        sizes="(max-width: 640px) 66vw, 420px"
                                        className="object-cover"
                                    />
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* точки */}
                    <div className="mt-6 flex justify-center gap-2">
                        {[0, 1, 2].map((i) => (
                            <span key={i} className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600"/>
                        ))}
                    </div>
                </div>

                {/* Десктоп-версию скрываем. Если нужна — оберни старый блок в <div className="hidden md:block"> ... </div> */}
            </div>
        </section>
    );
}
