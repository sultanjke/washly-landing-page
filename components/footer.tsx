// components/footer.tsx
import { Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2 mb-4 sm:mb-0">
                    <span className="text-xl font-bold text-gray-900">wäshly</span>
                    <span>© 2025 TOO Washly</span>
                    <Mail size={16} className="text-gray-400 ml-2" />
                    <a href="mailto:support@washly.kz" className="hover:text-gray-700 transition">
                        support@washly.kz
                    </a>
                </div>

                {/* Правая часть */}
                <div className="text-center sm:text-right text-gray-400 text-sm">
                    Designed by{" "}
                    <span className="font-semibold text-gray-600">Sultan Mecheyev</span> — Made by{" "}
                    <span className="font-semibold text-gray-600">Humans</span> on{" "}
                    <a href="#" className="text-green-600 font-medium hover:underline">
                        Mars
                    </a>
                </div>
            </div>
        </footer>
    )
}
