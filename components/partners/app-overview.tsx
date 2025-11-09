export default function PartnersFeaturesPreview() {
  const stats = [
    {
      value: "5",
      label: "лет работаем в сфере автомойки",
      icon: "/achievementsIcons/trophy.png",
      alt: "trophy",
    },
    {
      value: "+1 млн",
      label: "регистраций в приложении",
      icon: "/achievementsIcons/ppl.png",
      alt: "ppl",
    },
    {
      value: "6",
      label: "стран и 28 городов по всему миру",
      icon: "/achievementsIcons/worldwide.png",
      alt: "worldwide",
    },
    {
      value: "2454",
      label: "партнеров во всех странах",
      icon: "/achievementsIcons/handshake.png",
      alt: "handshake",
    },
  ]

  return (
    <section data-reveal className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto m-20 mr-25">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
        <article
            key={stat.value}
              className="flex flex-col items-start gap-4 rounded-3xl bg-white/90 p-6 text-gray-900"
        >
            <div>
                    <p className="text-4xl font-bold sm:text-5xl">{stat.value}</p>
                    <p className="mt-2 text-base text-gray-600 sm:text-2xl">
                    {stat.label}
                    </p>
            </div>
            <div className="mt-auto">
                <div className="flex h-16 w-16 items-center justify-center rounded-2x">
                    <img src={stat.icon} alt={stat.alt} className="h-15 w-15 object-contain" />
                </div>
            </div>
        </article>
        ))}
    </div>
    </div>
    </section>
  )
}
