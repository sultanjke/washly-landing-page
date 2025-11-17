import { Button } from "@/components/ui/button";
import { BadgeCheckIcon, Star } from "lucide-react";

export default function PricingSection() {
  const benefits = [
    "Безлимитные мойки",
    "Полный детейлинг",
    "Химчистка салона",
    "Полировка кузова",
    "Защитное покрытие",
    "Выездная мойка",
    "VIP-обслуживание 24/7",
    "Персональный менеджер",
  ];

  const plans = [
    {
      name: "Базовый",
      price: "2990",
      priceDiscount: "‎",
      features: [true, true, true, true, false, false, false, false],
      popular: false,
      imageSrc: "/images/basic-plan.png",
    },
    {
      name: "Премиум",
      price: "4990",
      priceDiscount: "7990₸",
      features: [true, true, true, true, true, true, false, false],
      popular: true,
      popularLabel: "Самый популярный",
      imageSrc: "/images/premium-plan.png",
    },
    {
      name: "VIP",
      price: "8990",
      priceDiscount: "15990₸",
      features: [true, true, true, true, true, true, true, true],
      popular: false,
      imageSrc: "/images/vip-plan.png",
    },
  ];

  return (
    <section data-reveal className="py-16 px-4 transition-colors sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="/images/pricing-placeholder.png"
            alt="Фоновое изображение для блока тарифов"
            className="absolute inset-0 h-full w-full object-fill"
          />
          <div className="relative rounded-3xl p-8 lg:p-16">
            <div className="text-center text-white mb-12">
              <h2 className="text-4xl font-bold mt-5 mb-5">
                Выбери свой
                <br />
                 уровень чистоты
              </h2>
              <p className="text-white/80 max-w-3xl mx-auto pt-3 w-80 text-lg mb-20">
                Стань участником клуба и получай доступ к профессиональному уходу, приоритетное обслуживание и персональные бонусы.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {plans.map((plan, index) => (
                <div key={index} className="relative">
                  {plan.popular && (
                    <div className="pointer-events-none absolute inset-x-4 top-[-10] pb-6 -translate-y-1/2 flex items-center justify-center gap-2 rounded-xl bg-green-500 py-2 text-md font-regular font-regular tracking-wide text-white shadow-xl">
                      <span>{plan.popularLabel ?? "Привилегированный план"}</span>
                      <img src="/particles.png" alt="" loading="lazy" decoding="async" className="h-4 w-4"/>
                    </div>
                  )}
                  <div
                    className={`relative z-10 rounded-2xl border border-black/5 bg-white/95 p-4 shadow-md transition-all duration-300 ${
                      plan.popular ? "shadow-2xl" : ""
                    }`}
                  >
                    <div className="relative bg-linear-to-br rounded-xl overflow-hidden mb-6">
                      <img
                        src={plan.imageSrc}
                        alt={plan.name}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="relative z-10 h-30 p-4 pl-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      </div>
                    </div>

                    <div className="text-left mt-auto">
                      <div className="flex items-end gap-2 pl-3">
                        <div className="flex flex-col leading-none">
                          <span className="-mb-0.5 text-sm font-bold text-gray-300 line-through">
                            {plan.priceDiscount}
                          </span>
                          <span className="text-4xl font-bold text-gray-900">
                            {plan.price}₸
                          </span>
                        </div>
                        <span className="text-gray-500">в месяц</span>
                      </div>
                    </div>


                    <ul className="mt-6 space-y-2 pl-3">
                      {benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <BadgeCheckIcon
                            className={`h-3 w-3 shrink-0 transition-colors ${plan.features[idx] ? "text-black": "text-gray-400"}`}
                          />
                          <span className={`${plan.features[idx] ? "text-black" : "text-gray-400"}`}>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <Button className="w-full cursor-pointer rounded-lg border border-gray-300 bg-white font-bold text-black transition hover:bg-gray-100 hover:shadow-xl">
                        Скачать приложение
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
