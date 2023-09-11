 import Slider from '../../components/Slider/Slider'
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
      <div className="relative  ">
      <Slider />

      <div className=' my-9'>
      <FeaturedProduct featuredName='trending'/>
      </div>
      <div className='my-9'>
      <FeaturedProduct featuredName='top featured product'/>
      </div>
      <Contact/>
    </div>
  )
}

export default Home