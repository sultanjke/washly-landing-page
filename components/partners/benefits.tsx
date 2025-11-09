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
    icon: "/people.png",
    alt: "Новые клиенты",
  },
  {
    title: "Увеличенный заработок",
    description:
      "К обычным посетителям добавятся пользователи приложения, что повысит вашу прибыль",
    icon: "/profit.png",
    alt: "Рост дохода",
  },
  {
    title: "Постоянные пользователи",
    description:
      "Соберем и проанализируем отзывы клиентов, которые возвращаются чаще",
    icon: "/users.png",
    alt: "Лояльность",
  },
  {
    title: "Бесплатный сервис",
    description:
      "Вы не платите за работу с нами — оплачиваете только каждое посещение вашего сервиса",
    icon: "/service.png",
    alt: "Бесплатное подключение",
  },
  {
    title: "Комфортная система",
    description:
      "После онбординга вы получите сертификат, который ценится при устройстве на работу",
    icon: "/system.png",
    alt: "Комфорт",
  },
  {
    title: "Высокая заполняемость",
    description:
      "Управляйте расписанием и выбирайте удобные часы для своих клиентов",
    icon: "/capacity.png",
    alt: "Заполняемость",
  },
]

export default function PartnersBenefitsSection() {
  return (
    <section data-reveal className="py-24 px-4 sm:px-6 lg:px-8" id="benefits">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          Почему сотрудничество с Washly.kz — выгодно?
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="flex h-full flex-col gap-4 rounded-4xl bg-[#061329] p-8 text-left text-white shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-800/20 border border-gray-700">
              <img src={benefit.icon} alt={benefit.alt} className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold leading-snug">{benefit.title}</h3>
            <p className="text-sm text-white/80 leading-relaxed">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
