import Banner from '../Components/Banner'
import OurBrand from '../Components/OurBrand'
import OurDiscount from '../Components/OurDiscount'
import WeAer from '../Components/WeAre';

function Home() {
  return (
    <div className='p-5'>
      <Banner></Banner>
      <hr />
      <OurBrand></OurBrand>
      <hr />
      <OurDiscount></OurDiscount>
      <hr />
      <WeAer></WeAer>
    </div>
  )
}

export default Home;