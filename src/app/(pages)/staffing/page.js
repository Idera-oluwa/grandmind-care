import React from "react";
import Hero from "../../../components/staffing/hero";
import Staff from "../../../components/staffing/staff";
import WhyUs from "../../../components/staffing/whyus";
import JoinUs from "../../../components/staffing/joinus";
import Specialized from "../../../components/staffing/specialized";
import Apply from "../../../components/staffing/apply";
import Contact from "../../../components/staffing/contact";

const page = () => {
  return (
    <div className="mt-[4rem] mb-[5rem] 2xl:max-w-[1440px] mx-auto">
      <Hero />
      <Staff />
      <WhyUs />
      <JoinUs />
      <Specialized />
      <Apply />
    </div>
  );
};

export default page;
