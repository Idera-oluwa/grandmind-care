"use client";
import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const faq = () => {
  return (
    <div>
      <Fade><h1 className="text-[20px] font-semibold text-[#1B1B1E] text-center mt-[7rem] md:mt-[10rem]">
        Frequently Asked Quesions
      </h1></Fade>
      <div className="flex flex-col mt-[3rem]">
      <Fade>
        <div className="flex flex-row gap-[1rem] md:gap-[3rem] items-center pb-[15px] border-b border-[#FFD166]">
          <img src="Images/home/dot.png" alt="" className="w-[12px] h-[12px]" />
          <div className="flex flex-col">
            <p className="text-[16px] font-semibold text-[#353538]">
              What is Grandmind Care LTD?
            </p>
            <p className="text-[14px] font-medium leading-[16.94px] text-[#353538] mt-[1rem]">
              Grandmind Care is a dedicated care services platform that connects
              carers with family needs, so whether you’re a carer looking for
              opportunities or a family seeking reliable care,our platform makes
              it easier.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[1rem] md:gap-[3rem] items-center pb-[15px] border-b border-[#FFD166] mt-[1rem]">
          <img src="Images/home/dot.png" alt="" className="w-[12px] h-[12px]" />
          <div className="flex flex-col">
            <p className="text-[16px] font-semibold text-[#353538]">
              How can I create an account on Grandmind Care?
            </p>
            <p className="text-[14px] font-medium leading-[16.94px] text-[#353538] mt-[1rem]">
              Creating an account is easy, click on the register button and
              follow the prompts, complete your profile to get started.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[1rem] md:gap-[3rem] items-center pb-[15px] border-b border-[#FFD166] mt-[1rem]">
          <img src="Images/home/dot.png" alt="" className="w-[12px] h-[12px]" />
          <div className="flex flex-col">
            <p className="text-[16px] font-semibold text-[#353538]">
            How are our services priced?
            </p>
            <p className="text-[14px] font-medium leading-[16.94px] text-[#353538] mt-[1rem]">
            Our pricing is tailored to the specific services required. For a detailed discussion and quote, please <a href='/contact' className='text-[#3066BE]'>contact us</a>
            </p>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default faq;
