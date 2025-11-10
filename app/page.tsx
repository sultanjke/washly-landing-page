import dynamic from "next/dynamic"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"

const FeaturesPreview = dynamic(() => import("@/components/features-preview"), {
  loading: () => <section className="px-4 py-16 sm:px-6 lg:px-8 animate-pulse" aria-hidden />,
})

const FeatureCards = dynamic(() => import("@/components/feature-cards"), {
  loading: () => <section className="px-4 py-16 sm:px-6 lg:px-8 animate-pulse" aria-hidden />,
})

const HowItWorks = dynamic(() => import("@/components/how-it-works"), {
  loading: () => <section className="px-4 py-16 sm:px-6 lg:px-8 animate-pulse" aria-hidden />,
})

const PricingSection = dynamic(() => import("@/components/pricing-section"), {
  loading: () => <section className="px-4 py-16 sm:px-6 lg:px-8 animate-pulse" aria-hidden />,
})

const DownloadSection = dynamic(() => import("@/components/download-section"), {
  loading: () => <section className="px-4 py-16 sm:px-6 lg:px-8 animate-pulse" aria-hidden />,
})
export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground transition-colors">
      <Header />
      <main>
        <HeroSection />
        <FeaturesPreview />
        <FeatureCards />
        <HowItWorks />
        <PricingSection />
        <DownloadSection />
      </main>
        <Footer/>
    </div>
  )
}
