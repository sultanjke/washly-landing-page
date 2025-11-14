export default function PartnersFeaturesPreview() {
  const stats = [
    {
      value: "1",
      label: "год работаем в сфере автомойки",
      icon: "/achievementsIcons/trophy.png",
      alt: "trophy",
    },
    {
      value: "+100к",
      label: "регистраций в приложении",
      icon: "/achievementsIcons/ppl.png",
      alt: "ppl",
    },
    {
      value: "2",
      label: "страны и 10 городов по всему миру",
      icon: "/achievementsIcons/worldwide.png",
      alt: "worldwide",
    },
    {
      value: "100+",
      label: "партнеров во всех странах",
      icon: "/achievementsIcons/handshake.png",
      alt: "handshake",
    },
  ]

  return (
    <section data-reveal className="py-16 px-4 transition-colors sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto m-10">
        <div className="grid gap-20 grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
        <article
            key={stat.value}
              className="flex flex-col items-start gap-4 rounded-3xl p-6 text-gray-900 dark:text-white"
        >
            <div>
                    <p className="text-4xl font-bold sm:text-5xl">{stat.value}</p>
                    <p className="mt-2 text-base text-gray-600 sm:text-2xl dark:text-gray-300">
                    {stat.label}
                    </p>
            </div>
            <div className="mt-auto">
        <div className="flex h-16 w-16 items-center justify-center rounded-2x">
          <img src={stat.icon} alt={stat.alt} loading="lazy" decoding="async" className="h-15 w-15 object-contain" />
                </div>
            </div>
        </article>
        ))}
    </div>
    </div>
    </section>
  )
}
