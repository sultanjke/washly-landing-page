import { Mail } from "lucide-react"

export default function PartnersFooter() {
    return (
        <footer data-reveal className="border-t border-gray-200 bg-white max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2 mb-4 sm:mb-0">
                    <div className="h-8 w-20 pr-2">
                        <img src="/icon-black.png" alt="" />
                    </div>
                    <span>© 2025 TOO Washly</span>
                    <Mail size={16} className="text-gray-400 ml-2" />
                    <a href="mailto:support@washly.kz" className="hover:text-gray-700 transition">
                        support@washly.kz
                    </a>
                </div>

                <div className="text-center sm:text-right text-gray-400 text-sm">
                    Performed by{" "}
                    <span className="relative inline-flex items-center group">
                        <a
                            href="https://github.com/sultanjke"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-gray-400 hover:text-black transition"
                            aria-label="GitHub профайл Sultan Mecheyev"
                        >
                            Sultan Mecheyev
                        </a>
                        <span className="pointer-events-none absolute bottom-full right-0 hidden w-64 translate-y-2 rounded-2xl border border-black/10 bg-white p-3 text-left text-xs text-gray-500 shadow-2xl transition-all duration-200 group-hover:block">
                            <span className="block text-sm font-semibold text-gray-900">github.com/sultanjke</span>
                            <span className="mt-1 block overflow-hidden rounded-xl border border-black/5">
                                <img
                                    src="https://opengraph.githubassets.com/1/sultanjke"
                                    alt="Предпросмотр GitHub профиля Sultan Mecheyev"
                                    className="h-36 w-full object-cover"
                                />
                            </span>
                            <span className="mt-2 inline-flex items-center text-[11px] text-gray-400">
                                Откроется в новой вкладке
                            </span>
                        </span>
                    </span>{" "}— Made by{" "}
                    <span>Humans</span> on{" "}
                    <span className="text-green-500 font-semibold">Earth</span>
                </div>
            </div>
        </footer>
    )
}
