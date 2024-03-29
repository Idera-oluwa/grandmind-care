"use client"
import React from "react";
import { Zoom } from "react-awesome-reveal";

const whyus = () => {
  return (
    <div className="w-[90vw]  2xl:max-w-[1440px] mx-auto">
      <div className="mt-[7rem] md:mt-[10rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem]">
      <Zoom cascade damping={0.3}>
        <div className="h-full cursor-pointer shadow-shadow3 hover:scale-[1.01] border border-transparent transition-all duration-[600] ease-out  px-[1rem] py-[2rem] flex flex-col items-center col-span-1">
          <img src="/Images/staffing/staffing-logo1.png" alt="" />
          <p className="text-[16px] font-bold text-black mt-[2.5rem]">
            24-Hour Availability
          </p>
          <p className="text-[16px] font-normal text-[#1B1B1E] mt-[2rem] text-center">
            our client managers are on-call every day of the week, throughout
            the year. Whether it's day or night, we are ready to address any
            issues or accommodate last-minute staffing requests
          </p>
        </div>
        <div className="h-full shadow-shadow3 hover:scale-[1.01] border border-transparent transition-all duration-[600] ease-out cursor-pointer px-[1rem] py-[2rem] flex flex-col items-center col-span-1">
          <img src="/Images/staffing/staffing-logo2.png" alt="" />
          <p className="text-[16px] font-bold text-black mt-[2.5rem]">
            Fully Managed Service
          </p>
          <p className="text-[16px] font-normal text-[#1B1B1E] mt-[2rem] text-center">
            Opting for our service can alleviate stress for your organization,
            both physically and financially. By overseeing the coordination and
            fulfillment of your staffing requirements.
          </p>
        </div>
        <div className="h-full cursor-pointer shadow-shadow3 hover:scale-[1.01] border border-transparent transition-all duration-[600] ease-out px-[1rem] py-[2rem] flex flex-col items-center col-span-1">
          <img src="/Images/staffing/staffing-logo3.png" alt="" />
          <p className="text-[16px] font-bold text-black mt-[2.5rem]">
            Precise Profiling
          </p>
          <p className="text-[16px] font-normal text-[#1B1B1E] mt-[2rem] text-center">
            We take the time to understand your needs by learning about your
            preferences and requirements in advance. To help us match you with
            the right carers from our team.
          </p>
        </div>
        <div className="h-full shadow-shadow3 hover:scale-[1.01] border border-transparent transition-all duration-[600] ease-out cursor-pointer px-[1rem] py-[2rem] flex flex-col items-center col-span-1">
          <img src="/Images/staffing/staffing-logo4.png" alt="" />
          <p className="text-[16px] font-bold text-black mt-[2.5rem]">
            Regular Staff Audits
          </p>
          <p className="text-[16px] font-normal text-[#1B1B1E] mt-[2rem] text-center">
            To ensure our staff always meet our high standards, we work with
            clients to regularly check for quality and consistency.
          </p>
        </div>
        </Zoom>
      </div>
    </div>
  );
};

export default whyus;
