import AnnoucementSection from "./AnnouncementSection/AnnoucementSection"
import FeatureSection from "./FeatureSection/FeatureSection"
import Footer from "./Footer/Footer"
import HeroSection from "./HeroSection/HeroSection"
import Navbar from "./Navbar/Navbar"
import PricingSection from "./PricingSection/PricingSection"
import ServiceSection from "./ServiceSection/ServiceSection"
import TrustedSection from "./TrustedSection/TrustedSection"


function UserPage() {
  return (
    <>
      <Navbar/>
      <AnnoucementSection/>
      <HeroSection/>
      <FeatureSection/>
      <ServiceSection/>
      <TrustedSection/>
      <PricingSection/>
      <Footer/>
    </>
  )
}

export default UserPage
