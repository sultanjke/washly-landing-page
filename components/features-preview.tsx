
export default function FeaturesPreview() {
  return (
    <section
      data-reveal
      className="mt-5 mb-48 px-4 py-16 transition-colors sm:px-6 lg:px-8"
      id="advantages"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6">
          {/*<Sparkles className="w-8 h-8 text-amber-500" />*/}
            <img src="Dizzy.png" alt="Dizzy" />
        </div>

        <h2 className="mb-4 text-4xl font-bold text-gray-900 transition-colors dark:text-white">
          Чисто, удобно, быстро.
        </h2>
        <p className="mb-16 text-xl text-gray-500 transition-colors dark:text-gray-400">
          Не трать время в очередях. Выбирай мойку, бронируй время и оплачивай онлайн
        </p>

        <div className="relative top-[8rem] max-w-5xl mx-auto h-[600px] ">
          <div className="absolute left-22 top-1/2 -translate-y-1/2 w-[17.7rem] z-10">
              <img
                  src="/app_demonstration_2.png"
                  alt="App screen 1"
                  className="w-full "
              />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[-5rem] bottom-1 w-[24rem] z-20">
              <img
                  src="/app_demonstration_3.png"
                  alt="App screen 2"
                  className="w-full "
              />
          </div>
          <div className="absolute right-22 top-1/2 -translate-y-1/2 w-[17rem] z-10">
              <img
                  src="/app_demonstration_1.png"
                  alt="App screen 2"
                  className="w-full "
              />
          </div>
        </div>
      </div>
    </section>
  )
}
