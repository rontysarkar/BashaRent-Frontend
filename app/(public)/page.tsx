
import HowItWorks from '@/components/home/how-it-works'
import Testimonials from '@/components/home/testimonials'
import WhyChooseBashaRent from '@/components/home/why-choose-basharent'
import Banner from '@/components/shared/banner'
import FeaturedPropertiesSection from '@/components/shared/fetured-properties'
import Footer from '@/components/shared/footer'


export default function page() {
  return (
    <div className='max-w-6xl mx-auto'>
      <Banner/>
      <FeaturedPropertiesSection/>
      <HowItWorks/>
      <WhyChooseBashaRent/>
      <Testimonials/>
    </div>
  )
}
