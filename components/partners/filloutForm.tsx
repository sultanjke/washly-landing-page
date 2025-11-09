export default function PartnersDownloadSection() {
    return (
        <section data-reveal id="download" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-black rounded-4xl p-10 sm:p-14 text-white">
                    <h3 className="text-3xl font-bold text-center sm:text-4xl">
                        Оставьте заявку на партнерство
                    </h3>
                    <p className="mt-3 text-center text-base text-white/60 sm:text-lg">
                        Мы вам позвоним или напишем в мессенджер
                    </p>
                    <form className="mt-15 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                        <label htmlFor="partners-download-phone" className="sr-only">
                            Номер телефона
                        </label>
                        <input
                            id="partners-download-phone"
                            type="tel"
                            placeholder="+7"
                            className="w-full max-w-xs rounded-2xl border border-white/10 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="w-full max-w-44 rounded-2xl bg-blue-500 px-6 py-3 text-base cursor-pointer text-white shadow-lg transition hover:bg-blue-600"
                        >
                            Оставить заявку
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
