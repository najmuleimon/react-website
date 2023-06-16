import Apply from '../components/home/Apply'
import Banner from '../components/home/Banner'
import Custom from '../components/home/Custom'
import Service from '../components/home/Service'
import SocialMedia from '../components/home/SocialMedia'
import TryOut from '../components/home/TryOut'
import AllMedia from '../components/home/allMedia/AllMedia'
import ChartData from '../components/home/chartData/ChartData'
import Features from '../components/home/features/Features'

const Home = () => {
  return (
    <>
        <Banner/>
        <SocialMedia/>
        <TryOut/>
        <Features/>
        <Service/>
        <ChartData/>
        <Custom/>
        <AllMedia/>
        <Apply/>
    </>
  )
}

export default Home