import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Базовый",
      price: "299",
      features: [
        "Экспресс мойка",
        "Уборка салона",
        "Мойка дисков",
        "Сушка автомобиля",
        "Чистка ковриков",
        "Чистка стёкол",
        "Протирка панели",
        "Пылесос салона",
      ],
      gradient: "from-cyan-500 to-blue-600",
      popular: false,
    },
    {
      name: "Премиум",
      price: "499",
      features: [
        "Экспресс мойка",
        "Уборка салона",
        "Мойка дисков",
        "Сушка автомобиля",
        "Чистка ковриков",
        "Чистка стёкол",
        "Протирка панели",
        "Пылесос салона",
        "Полировка кузова",
        "Чернение шин",
      ],
      gradient: "from-green-500 to-emerald-600",
      popular: true,
    },
    {
      name: "VIP",
      price: "899",
      features: [
        "Комплексная мойка",
        "Детейлинг салона",
        "Полировка кузова",
        "Химчистка салона",
        "Чернение шин",
        "Нанесение воска",
        "VIP-обслуживание 24/7",
        "Персональный менеджер",
        "Трансфер авто",
        "Страхование авто",
      ],
      gradient: "from-orange-500 to-red-600",
      popular: false,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 rounded-3xl p-8 lg:p-16">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Выбери свой уровень чистоты</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Каждый уровень предлагает уникальный набор услуг для профессионального ухода, превосходящий стандартные
              предложения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 ${plan.popular ? "ring-4 ring-green-400" : ""}`}>
                <div className={`bg-gradient-to-br ${plan.gradient} text-white rounded-xl p-4 mb-6`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}₸</span>
                    <span className="text-white/80">/ месяц</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Скачать приложение</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
