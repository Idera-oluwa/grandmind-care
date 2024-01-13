"use client";
import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const staff = () => {
  return (
    <Fade>
    <div className="w-[90vw]  2xl:max-w-[1440px] mx-auto">
      <div className="mt-[7rem] md:mt-[10rem] h-[20rem] md:h-auto w-full relative">
        <img
          src="/Images/staffing/our-staff-banner.png"
          alt=""
          className="object-cover h-full w-full rounded-[10px]"
        />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
        <Fade>
          <p className="text-[30px] md:text-[32px] font-semibold text-white">
            Our Staff
          </p>
          <p className="text-[14px] md:text-[16px] font-semibold text-white mt-[1rem] w-[95%] md:w-[755px] text-center">
            Welcome to Grandmind Care, our journey is fueled by a deep
            commitment to enhancing lives through compassionate care{" "}
          </p>
          <Link href="#apply">
            <button className="bg-[#474973] rounded-[22px] py-[10px] lg:py-[12px] px-[18px] lg:px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[3rem] border border-transparent transition-all ease-out duration-[600] hover:bg-[hsl(237,24%,25%)]">
             Apply Now
            </button>
          </Link>
          </Fade>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default staff;
