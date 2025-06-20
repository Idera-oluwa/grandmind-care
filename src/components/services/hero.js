"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center overflow-x-hidden">
      <motion.div className="w-full md:w-[50%]">
        <h1 className="font-bold text-[30px] md:text-[32px] text-[#474973]">
          Our <span className="font-bold text-[#1B1B1E]">Comprehensive</span>
        </h1>
        <h1 className="font-bold text-[30px] md:text-[32px] text-[#474973]">
          <span className="font-bold text-[#1B1B1E]">Care</span> Services
        </h1>
        <p className="text-[14px] font-normal text-[#1B1B1E] leading-[26.33px] w-[90%] mt-[1rem]">
          At Grandmind Care, we understand that each individual has unique
          needs, and we are dedicated to providing personalised and
          compassionate care. Our range of care services is designed to enhance
          the well-being and quality of life for your loved ones.
        </p>
        <Link href="/about#register">
          <button className="bg-[#474973] rounded-[22px] py-[9px] lg:py-[10px] px-[15px] lg:px-[18px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[1rem] border border-transparent hover:bg-[hsl(237,24%,25%)] transition-all ease-out duration-[600]">
            Register today
          </button>
        </Link>
        <div className="flex flex-row gap-[10px] mt-[1rem]">
          <div className="flex flex-row gap-[8px] items-center cursor-pointer">
            <img
              src="/Images/home/mail-sm.png"
              alt=""
              className="w-[18px] h-[16px]"
            />
            <a href="mailto:info@grandmindcare.co.uk">
              <p className="text-[12px] md:text-[14px] font-normal text-[#474973]">
              info@grandmindcare.co.uk
              </p>
            </a>
          </div>
          <div className="flex flex-row gap-[8px] items-center cursor-pointer">
            <img
              src="/Images/home/whatsapp-icon.png"
              alt=""
              className="w-[17px] h-[17px]"
            />
            <a
              href="https://wa.me/447466308429"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-[14px] md:text-[14px] font-normal text-[#474973]">
                +44 (0) 7466308429
              </p>
            </a>
          </div>
        </div>
      </motion.div>
      <div className="w-full md:w-[50%] mt-[3rem] md:mt-full">
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: "0.3", ease: "easeOut" }}
          src="/Images/services/our-services-image.png"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default hero;

{
  /* <motion.img
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: "0.5" }}
        src="Images/services/our-services-image.png"
        alt="" */
}
