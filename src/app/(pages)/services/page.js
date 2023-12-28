import React from "react";
import Hero from "../../../components/services/hero";
import Services from "../../../components/services/services";
import CarePlans from "../../../components/services/care-plans";
import HowWeWork from "../../../components/services/how-we-work";

const page = () => {
  return (
    <div className="w-[90vw]  2xl:max-w-[1440px] mx-auto mt-[5rem] mb-[6rem]">
      <Hero />
      <Services />
      <CarePlans />
      <HowWeWork />
    </div>
  );
};

export default page;
