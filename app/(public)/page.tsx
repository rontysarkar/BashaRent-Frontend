
import Banner from '@/components/shared/banner'
import FeaturedPropertiesSection from '@/components/shared/fetured-properties'


export default function page() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Banner/>
      <FeaturedPropertiesSection/>
    </div>
  )
}
