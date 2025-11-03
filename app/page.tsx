import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesPreview from "@/components/features-preview"
import FeatureCards from "@/components/feature-cards"
import HowItWorks from "@/components/how-it-works"
import PricingSection from "@/components/pricing-section"
import DownloadSection from "@/components/download-section"
import {Footer} from "react-day-picker";

export default function Home() {
    return (
        <div id="home" className="min-h-screen bg-white">
            <Header/>
            <main>
                <HeroSection/>
                <FeaturesPreview/>
                <FeatureCards/>
                <HowItWorks/>
                <PricingSection/>
                <DownloadSection/>
            </main>
            <Footer/>
        </div>
    )
}
