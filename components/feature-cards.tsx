export default function FeatureCards() {
  const features = [
    {
      title: "QR — доступ",
      description: "Просто отсканируй QR-код на мойке и начни мыть свой автомобиль",
      gradient: "from-blue-600 via-purple-600 to-purple-700",
      image: "/hand-holding-smartphone-with-qr-code-scanner-3d-il.jpg",
    },
    {
      title: "Удобное приложение",
      description: "Управляй процессом мойки прямо из приложения",
      gradient: "from-orange-500 via-orange-600 to-red-600",
      image: "/floating-coins-and-payment-icons-3d-illustration.jpg",
    },
    {
      title: "Безопасные платежи",
      description: "Плати без риска с помощью защищённых платёжных систем",
      gradient: "from-red-600 via-red-700 to-orange-600",
      image: "/smartwatch-with-payment-notification-3d-illustrati.jpg",
    },
    {
      title: "Приглашай друзей",
      description: "Получай бонусы за каждого приглашённого друга",
      gradient: "from-purple-600 via-purple-700 to-blue-600",
      image: "/golden-coins-and-gift-box-3d-illustration.jpg",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${feature.gradient} rounded-3xl p-8 text-white overflow-hidden min-h-[320px] flex flex-col justify-between`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/90 text-lg">{feature.description}</p>
              </div>
              <div className="relative z-0 mt-4">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-32 h-32 object-contain ml-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
