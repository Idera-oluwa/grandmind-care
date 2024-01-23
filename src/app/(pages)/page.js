import Hero from "../../components/home/hero";
import HeroSm from "../../components/home/hero-sm";
import Services from "../../components/home/services";
import Domiciliary from "../../components/home/domiciliary";
import WhyChooseUs from "../../components/home/why-us";
import Explore from "../../components/home/explore";
import Faq from "../../components/home/faq";
import Contact from "../../components/home/contact";
import ContactSm from "../../components/home/contact-sm";
import Companies from "../../components/home/companies";

export default function Home() {
  return (
    <div className="mt-[2rem] mb-[5rem] overflow-hidden relative">
      <Hero />
      <HeroSm/>
      <Services />
      <Domiciliary />
      <WhyChooseUs />
      <Explore />
      <Contact />
      <ContactSm />
      <Companies />
      <div className="flex flex-col md:hidden gap-[17px] items-center mt-[11rem] fixed top-0 right-0 mr-[5vw] z-[10000]">
      <a
            href="https://web.facebook.com/profile.php?id=61555673407229&_rdc=1&_rdr"
            target="_blank"
            rel="noreferrer"
          >
        <img src="/Images/home/facebook-logo.png" alt="" className='w-[13px] h-[13px]'/>
        </a>
        <a href="mailto:info@grandmindcare.co.uk">
          <img src="/Images/home/mail-logo.png" alt="" className='w-[13px] h-[13px]'/>
        </a>
        <a href="tel:+441474247739" target="_blank" rel="noreferrer">
          <img src="/Images/home/phone-logo.png" alt="" className='w-[13px] h-[13px]'/>
        </a>
      </div>
    </div>
  );
}
