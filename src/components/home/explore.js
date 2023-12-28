"use client"
import React from "react";
import Link from "next/link";
import { Slide,Fade  } from "react-awesome-reveal";

const explore = () => {
  return (
    <div className="flex flex-row mt-[7rem] md:mt-[10rem] items-center">
      <div className="w-full md:w-[50%]">
      <Slide direction="up">
        <p className="text-[32px] lg:text-[40px] font-bold text-black leading-[55.55px]">
          Explore our flexible
        </p>
        <p className="text-[32px] lg:text-[40px] font-bold text-black leading-[55.55px]">
          <span className="text-[#32936F]">staffing</span> options
        </p>
        <img src="Images/home/underline.png" alt="" />
        <img
          src="Images/home/staffing.png"
          alt=""
          className="mt-[1rem] w-full md:w-0 object-cover"
        />
        <p className="text-[14px] lg:text-[14px] font-medium leading-[21.78px] w-[95%] md:w-[80%]  2xl:w-full mt-[1rem] lg:mt-[0rem]">
          We recognize the importance of work-life balance. Discover
          opportunities with flexible scheduling options that suit your
          availability.
        </p>
        <Link href="/about">
          <button className="py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] rounded-[32px] mt-[2rem] hover:bg-[#474973] hover:border-transparent hover:text-[#FDFDFD] transition-all ease-out duration-[600]">
            Learn more
          </button>
        </Link></Slide>
      </div>
      <Slide direction="up"><img src="Images/home/staffing.png" alt="" className="w-0 md:w-[50%]" /></Slide>
    </div>
  );
};

export default explore;
