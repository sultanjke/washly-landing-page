import Image from "next/image"
import { Star } from "lucide-react"

export default function PartnersFeatureCards() {
  const services = [
    {
      name: "Tiffany detailing",
      image: "/servicePreviews/Tiffany.webp",
      type: "Автосервис премиум-класса",
      rating: 4.9,
      address: "проспект Райымбека, 196Б/1, Алматы",
    },
    {
      name: "Detail masters",
      image: "/servicePreviews/DetailMasters.webp",
      type: "Автосервис",
      rating: 4.8,
      address: "проспект Назарбаева, 270а",
    },
    {
      name: "Swag",
      image: "/servicePreviews/Swag.webp",
      type: "Автосервис и детейлинг",
      rating: 4.95,
      address: "проспект Райымбека, 196Б/1",
    },
    {
      name: "Car Vision",
      image: "/servicePreviews/CarVision.webp",
      type: "Премиальная автомойка",
      rating: 4.87,
      address: "проспект Гагарина, 111Б/1",
    },
  ]

  return (
    <section data-reveal className="px-4 pt-20 pb-16 transition-colors sm:px-6 lg:px-8" id="autoservices">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-4xl bg-gray-900 text-white shadow-2xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background: "radial-gradient(circle at 50% 35%, rgba(7, 10, 20, 0.05), rgba(3, 6, 12, 0.75))",
              mixBlendMode: "multiply",
            }}
          />

          <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold leading-tight">
                Работаем с крупными автосервисами
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

                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <span className="inline-flex items-center gap-1.5 bg-amber-50 text-xs font-semibold text-amber-600">
                        <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-amber-100 mb-1">
                          <Star aria-hidden="true" className="h-3 w-3" strokeWidth={2} />
                        </span>
                        <span aria-label="Рейтинг сервиса">{service.rating.toFixed(2)}</span>
                      </span>
                      <span>{service.type}</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <img
                        src="/location.webp"
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
