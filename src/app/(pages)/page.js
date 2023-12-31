import Hero from "../../components/home/hero";
import Services from "../../components/home/services";
import Domiciliary from "../../components/home/domiciliary";
import WhyChooseUs from "../../components/home/why-us";
import Explore from "../../components/home/explore";
import Faq from "../../components/home/faq";
import Contact from "../../components/home/contact";
import Companies from "../../components/home/companies";

export default function Home() {
  return (
    <div className="w-[90vw]  2xl:max-w-[1440px] mx-auto mt-[2rem] mb-[5rem] overflow-hidden">
      <Hero />
      <Services />
      <Domiciliary />
      <WhyChooseUs />
      <Explore />
      <Faq />
      <Contact />
      <Companies />
    </div>
  );
}
