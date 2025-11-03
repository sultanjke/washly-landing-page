import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesPreview from "@/components/features-preview"
import FeatureCards from "@/components/feature-cards"
import HowItWorks from "@/components/how-it-works"
import PricingSection from "@/components/pricing-section"
import DownloadSection from "@/components/download-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesPreview />
        <FeatureCards />
        <HowItWorks />
        <PricingSection />
        <DownloadSection />
      </main>
    </div>
  )
}
