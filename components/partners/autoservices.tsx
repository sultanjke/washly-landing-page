import Image from "next/image"

export default function PartnersFeatureCards() {
  const services = [
    {
      name: "Tiffany detailing",
      image: "/servicePreviews/Tiffany.png",
      ratingText: "Автосервис премиум-класса",
      address: "проспект Райымбека, 196Б/1, Алматы",
    },
    {
      name: "Detail masters",
      image: "/servicePreviews/DetailMasters.png",
      ratingText: "Автосервис",
      address: "проспект Назарбаева, 270а",
    },
    {
      name: "Swag",
      image: "/servicePreviews/Swag.png",
      ratingText: "Автосервис и детейлинг",
      address: "проспект Райымбека, 196Б/1",
    },
    {
      name: "Car Vision",
      image: "/servicePreviews/CarVision.png",
      ratingText: "Премиальная автомойка",
      address: "проспект Гагарина, 111Б/1",
    },
  ]

  return (
    <section data-reveal className="px-4 pt-20 pb-16 transition-colors sm:px-6 lg:px-8" id="autoservices">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] bg-gray-900 text-white shadow-2xl">
          <Image
            src="/preview-bg-img.png"
            alt="Фон блока партнёров"
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center" }}
          />

          <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold leading-tight">
                Работаем как с крупными автосервисами,
                <br className="hidden sm:block" /> так и с премиальными автодетейлингами
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.name}
                  className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white text-black shadow-xl"
                >
                  <div className="relative h-40 w-full sm:h-44">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 25vw"
                      style={{ objectPosition: '50% 70%' }}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-5">
                    <div>
                      <h3 className="text-lg font-bold leading-snug">{service.name}</h3>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <img
                        src="/rating.png"
                        alt="Рейтинг"
                        loading="lazy"
                        decoding="async"
                        className="h-5 w-10"
                      />
                      <span>{service.ratingText}</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <img
                        src="/location.png"
                        alt="Адрес"
                        loading="lazy"
                        decoding="async"
                        className="mt-0.5 h-4 w-4"
                      />
                      <span>{service.address}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
