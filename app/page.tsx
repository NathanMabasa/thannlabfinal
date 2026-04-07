import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/Hero'
import MarqueeTicker from '@/components/common/MarqueeTicker'
import ServicesSection from '@/components/sections/Services'
import WorkSection from '@/components/sections/Work'
import WhyThannlabSection from '@/components/sections/WhyThannlab'
import TestimonialsSection from '@/components/sections/Testimonials'
import LeadCaptureSection from '@/components/sections/LeadCapture'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <HeroSection />
        <MarqueeTicker />
        <ServicesSection />
        <WorkSection />
        <WhyThannlabSection />
        <TestimonialsSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </>
  )
}