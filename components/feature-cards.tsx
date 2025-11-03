export default function FeatureCards() {
  const features = [
    {
      title: "QR — доступ",
      description: "Просто отсканируйте QR-код и начните мойку. Быстро и безопасно.",
      gradient: "from-blue-600 via-purple-600 to-purple-700",
      imageSrc: "/images/qr-access.png",
    },
    {
      title: "Удобное приложение",
      description: "Найдите ближайшую станцию на карте и посмотрите доступность в реальном времени.",
      gradient: "from-purple-600 via-purple-700 to-blue-600",
      imageSrc: "/images/app-convenience.png",
    },
    {
      title: "Безопасные платежи",
      description: "Kaspi Pay и банковские карты. Ваши деньги под защитой.",
      gradient: "from-red-600 via-red-700 to-orange-600",
      imageSrc: "/images/safe-payments.png",
    },
    {
      title: "Приглашай друзей",
      description: "Получайте бесплатную мойку за каждого приглашенного друга.",
      gradient: "from-purple-600 via-purple-700 to-blue-600",
      imageSrc: "/images/invite-friends.png",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-linear-to-br ${feature.gradient} rounded-4xl p-8 text-white overflow-hidden min-h-[480px] flex flex-col justify-between`}
            >
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-5 mt-6">{feature.title}</h3>
                <p className="text-white/90 text-lg">{feature.description}</p>
              </div>
              <div className="relative z-0 mt-4 flex justify-center items-center">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-4xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
