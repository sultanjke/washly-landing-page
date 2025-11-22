import { CardSpotlight } from "@/components/ui/card-spotlight"

type Benefit = {
  title: string
  description: string
  icon: string
  alt: string
}

const benefits: Benefit[] = [
  {
    title: "Свежий приток людей",
    description:
      "Добавим ваш автосервис в приложение, благодаря чему о вас узнают новые люди и запишутся на услуги",
    icon: "/people.webp",
    alt: "Новые клиенты",
  },
  {
    title: "Увеличенный заработок",
    description:
      "К обычным посетителям добавятся пользователи приложения, что повысит вашу прибыль",
    icon: "/profit.webp",
    alt: "Рост дохода", 
  },
  {
    title: "Постоянные пользователи",
    description:
      "Соберем и проанализируем отзывы клиентов, которые возвращаются чаще",
    icon: "/users.webp",
    alt: "Лояльность",
  },
  {
    title: "Бесплатный сервис",
    description:
      "Вы не платите за работу с нами — оплачиваете только каждое посещение вашего сервиса",
    icon: "/service.webp",
    alt: "Бесплатное подключение",
  },
  {
    title: "Комфортная система",
    description:
      "После онбординга вы получите сертификат, который ценится при устройстве на работу",
    icon: "/system.webp",
    alt: "Комфорт",
  },
  {
    title: "Высокая заполняемость",
    description:
      "Управляйте расписанием и выбирайте удобные часы для своих клиентов",
    icon: "/capacity.webp",
    alt: "Заполняемость",
  },
]

export default function PartnersBenefitsSection() {
  return (
    <section data-reveal className="py-24 px-4 transition-colors sm:px-6 lg:px-8" id="benefits">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 transition-colors sm:text-4xl dark:text-white">
          Почему сотрудничество с Washly.kz — выгодно?
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <CardSpotlight
            key={benefit.title}
            radius={420}
            color="rgba(59,130,246,0.15)"
            className="relative h-full overflow-hidden rounded-3xl border-1 border-[#1e2b3c] bg-[#06090E] p-8 text-white shadow-xl"
          >
            <article className="relative z-10 flex h-full flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-700">
                <img src={benefit.icon} alt={benefit.alt} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold leading-snug">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{benefit.description}</p>
            </article>
          </CardSpotlight>
        ))}
      </div>
    </section>
  )
}
