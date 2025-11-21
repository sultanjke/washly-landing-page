export default function AppPreview() {
  return (
    <section data-reveal className="py-24 px-4 transition-colors sm:px-6 lg:px-8" id="app-preview">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-2xl transition-colors dark:bg-neutral-900">
            <div className="absolute inset-0 z-10" />
            <div className="absolute inset-x-0 top-11 z-20 px-8 pt-10 sm:px-10">
              <h3 className="text-2xl md:text-4xl font-bold leading-tight  text-white text-center">
                <span className="block">Панель управления</span>
                <span className="block">автомойкой</span>
              </h3>
            </div>
            <img
              src="/appPreview2.webp"
              alt="Настройка времени, боксов и цен на услуги"
              className="h-full w-full object-cover"
            />
          </article>
          <article className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-2xl transition-colors dark:bg-neutral-900">
            <div className="absolute inset-0 z-10" />
            <div className="absolute inset-x-0 top-11 z-20 px-8 pt-10 sm:px-10">
              <h3 className="md:text-4xl text-2xl font-bold text-white text-center">
                <span className="block">Статистика посещений</span>
                <span className="block">и доходов</span>
              </h3>
            </div>
            <img
              src="/appPreview1.webp"
              alt="Визиты и доход с выгрузкой в Excel / PDF"
              className="h-full w-full object-cover"
            />
          </article>
        </div>
      </div>
    </section>
  )
}