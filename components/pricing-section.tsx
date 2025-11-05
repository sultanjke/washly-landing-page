import { Button } from "@/components/ui/button";
import { BadgeCheckIcon, BookCheck, Check, CheckCheck, CheckCheckIcon, CheckCircle, CheckCircle2, CheckCircle2Icon, CheckCircleIcon, CheckIcon, CheckSquare, CheckSquare2, MailCheckIcon } from "lucide-react";

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
      features: [true, true, true, true, false, false, false, false],
      gradient: "from-cyan-500 to-blue-600",
      popular: false,
      imageSrc: "/images/basic-plan.png",
    },
    {
      name: "Премиум",
      price: "4990",
      features: [true, true, true, true, true, true, false, false],
      gradient: "from-green-500 to-emerald-600",
      popular: true,
      imageSrc: "/images/premium-plan.png",
    },
    {
      name: "VIP",
      price: "8990",
      features: [true, true, true, true, true, true, true, true],
      gradient: "from-orange-500 to-red-600",
      popular: false,
      imageSrc: "/images/vip-plan.png",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-purple-900 via-purple-800 to-purple-900 rounded-3xl p-8 lg:p-16">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Выбери свой уровень чистоты</h2>
            <p className="text-white/80 max-w-3xl mx-auto pt-3">
              Стань участником клуба и получай доступ к профессиональному уходу, приоритетное обслуживание и персональные бонусы.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 ${plan.popular ? "ring-3 ring-green-400" : ""}`}
              >
                <div className="relative bg-linear-to-br rounded-xl overflow-hidden mb-6">
                  <img
                    src={plan.imageSrc}
                    alt={plan.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative z-10 p-4 text-white pl-8 h-30">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  </div>
                </div>

                <div className="text-left mt-auto">
                  <div className="flex items-baseline gap-2 pl-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}₸</span>
                    <span className="text-gray-500">в месяц</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2 pl-2">
                  {benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                    >
                      <BadgeCheckIcon
                        className={`w-3 h-3 shrink-0 ${plan.features[idx] ? "text-black" : "text-gray-400"}`}
                      />
                      <span className={`${plan.features[idx] ? "text-black" : "text-gray-400"}`}>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button className="w-full rounded-lg border font-bold border-gray-300 text-black bg-white hover:bg-gray-100 cursor-pointer hover:shadow-xl transition">
                    Скачать приложение
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
