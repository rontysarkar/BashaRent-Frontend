
import Banner from '@/components/shared/banner'
import FeaturedPropertiesSection from '@/components/shared/fetured-properties'
import Footer from '@/components/shared/footer'


export default function page() {
  return (
    <div className='max-w-6xl mx-auto'>
      <Banner/>
      <FeaturedPropertiesSection/>
      <Footer/>
    </div>
  )
}
