import { Star } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Создай приложение",
      description: "Скачай и зарегистрируйся в приложении",
    },
    {
      number: "2",
      title: "Выбери и купи",
      description: "Выбери ближайшую мойку и забронируй время",
    },
    {
      number: "3",
      title: "Найдёте и помой",
      description: "Используй карту для навигации и помой машину",
    },
    {
      number: "4",
      title: "Оцени",
      description: "Оцени качество мойки и получи бонусы",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-6">
          <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
        </div>

        <h2 className="text-4xl font-bold mb-4">Как это работает?</h2>
        <p className="text-gray-600 mb-12">Всего 4 простых шага</p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
