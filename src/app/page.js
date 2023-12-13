import Hero from '../components/hero'
import Services from '../components/services'
import Domiciliary from '../components/domiciliary'
import WhyChooseUs from '../components/why-us'
import Explore from '../components/explore'
import Faq from '../components/faq'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div className='w-[90vw] mx-auto mt-[2rem] mb-[5rem]'>
      
      <Hero/>
      <Services/>
      <Domiciliary/>
      <WhyChooseUs/>
      <Explore/>
      <Faq/>
      <Contact/>
    </div>
  )
  }
