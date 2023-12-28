import React from "react";
import Hero from "../../../components/about/hero";
import Mission from "../../../components/about/mission";
import WhyUs from "../../../components/about/whyus";
import Team from "../../../components/about/team";
import JoinUs from "../../../components/about/joinus";
import Contact from "../../../components/about/contact";

const page = () => {
  return (
    <div className="w-[90vw]  2xl:max-w-[1440px] mx-auto mt-[4rem] mb-[5rem]">
      <Hero />
      <Mission />
      <WhyUs />
      <Team />
      <JoinUs />
      <Contact />
    </div>
  );
};

export default page;
