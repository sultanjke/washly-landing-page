import PartnersHeroSection from "@/components/partners/hero-section"
import PartnersAppOverview from "@/components/partners/app-overview"
import PartnersAutoservices from "@/components/partners/autoservices"
import PartnersWorkingBenefits from "@/components/partners/working-benefits"
import PartnersBenefitsSection from "@/components/partners/benefits"
import PartnersFilloutForm from "@/components/partners/filloutForm"
import PartnersFooter from "@/components/partners/footer"
import HeaderPartners from "@/components/partners/header-partners"
import AppBenefits from "@/components/partners/app-preview"

export default function PartnersPage() {
  return (
    <div id="home" className="min-h-screen bg-white">
  <HeaderPartners />
      <main>
  <PartnersHeroSection />
  <PartnersAppOverview />
  <PartnersAutoservices />
  <PartnersWorkingBenefits />
  <PartnersBenefitsSection />
  <AppBenefits />
  <PartnersFilloutForm />
      </main>
  <PartnersFooter />
    </div>
  )
}
