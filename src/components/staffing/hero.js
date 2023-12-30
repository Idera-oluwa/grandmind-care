"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const hero = () => {
  return (
    <div className="w-[90vw]  2xl:max-w-[1440px] mx-auto">
      <Fade>
      <div className="flex flex-row mt-[5rem] items-center overflow-x-hidden">
        <div
          className="w-full md:w-[43%]"
        >
          <p className="text-[32px] md:text-[35px] lg:text-[40px] font-bold text-black leading-[55.55px]">
            Explore our flexible
          </p>
          <p className="text-[32px] md:text-[35px] lg:text-[40px] font-bold text-black leading-[55.55px]">
            <span className="text-[#32936F]">staffing</span> options
          </p>
          <img src="Images/home/underline.png" alt="" />
          <img
            src="Images/staffing/staffing1.png"
            alt=""
            className="md:hidden w-full mt-[1rem]"
          />
          <p className="text-[16px] font-medium leading-[21.78px] w-[95%] lg:w-[80%]  2xl:w-full mt-[1rem] lg:mt-[1rem]">
            We recognize the importance of work-life balance. Discover
            opportunities with flexible scheduling options that suit your
            availability.
          </p>
          <Link href="/about#register">
            <button className="bg-[#474973] rounded-[22px] py-[9px] lg:py-[10px] px-[15px] lg:px-[18px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[1rem] border border-transparent hover:bg-[hsl(237,24%,25%)] transition-all ease-out duration-[600]">
              Register today
            </button>
          </Link>
          <div className="flex flex-row gap-[10px] mt-[1rem]">
            <div className="flex flex-row gap-[8px] items-center cursor-pointer">
              <img
                src="Images/home/mail-sm.png"
                alt=""
                className="w-[18px] h-[16px]"
              />
              <a href="mailto:info@grandmind.co.uk">
                <p className="text-[12px] md:text-[14px] font-normal text-[#474973]">
                  info@grandmind.co.uk
                </p>
              </a>
            </div>
            <div className="flex flex-row gap-[8px] items-center cursor-pointer">
              <img
                src="Images/home/whatsapp-icon.png"
                alt=""
                className="w-[17px] h-[17px]"
              />
              <a
                href="https://wa.me/447903220307"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-[12px] md:text-[14px] font-normal text-[#474973]">
                  07903220307
                </p>
              </a>
            </div>
          </div>
        </div>
        <img
          src="Images/staffing/staffing1.png"
          alt=""
          className="hidden md:grid w-[57%]"
        />
      </div>
      </Fade>
    </div>
  );
};

export default hero;
