"use client";
import React from "react";
import Link from "next/link";
import { Zoom } from "react-awesome-reveal";

const services = () => {
  return (
    <div className="mt-[7rem] md:mt-[12rem] lg:px-[3rem]">
      <h1 className="text-[20px] font-semibold text-[#1B1B1E] text-center">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[3rem] gap-[2rem] md:gap-[5rem] justify-between">
        <Zoom cascade damping={0.3}>
          <div className="flex flex-col bg-[#F6F8FF] items-center py-[2rem] shadow-shadow1 cursor-pointer hover:bg-[#fdebf1] transition-all duration-300 ease-in h-full px-[0.5rem] relative">
            <img
              src="/Images/home/home-icon.png"
              alt=""
              className="w-[30px] h-[28px]"
            />
            <p className="font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]">
            Home Care Services
            </p>
            <div className="mt-[1rem] text-center">
              <p className="text-[16px] font-normal text-[#1B1B1E] leading-[26.92px]">
              Home Care Services are tailored to meet the unique needs of individuals in the comfort of their own homes.
              </p>
            </div>
            <Link href="/about">
              <button className="flex items-center justify-center border border-[#1B1B1E] text-[#1B1B1E] rounded-[32px] mt-[1.5rem] lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:mx-auto lg:mb-[2rem] w-[122px] h-[37px]">
                Learn more
              </button>
            </Link>
          </div>
          <div className="flex flex-col bg-[#F6F8FF] items-center py-[2rem] shadow-shadow1 cursor-pointer hover:bg-[#fdebf1] transition-all duration-300 ease-in h-full px-[0.5rem] relative">
            <img
              src="/Images/home/heart-icon.png"
              alt=""
              className="w-[30px] h-[28px]"
            />
            <p className="font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]">
            Supported Living
            </p>
            <div className="mt-[1rem] text-center">
              <p className="text-[16px] font-normal text-[#1B1B1E] leading-[26.92px]">
              We believe in fostering independence and creating a supportive environment for individuals to thrive.
              </p>
            </div>
            <Link href="/about">
              <button className="flex items-center justify-center border border-[#1B1B1E] text-[#1B1B1E] rounded-[32px] mt-[1.5rem] lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:mx-auto lg:mb-[2rem] w-[122px] h-[37px]">
                Learn more
              </button>
            </Link>
          </div>
          <div className="flex flex-col bg-[#F6F8FF] items-center py-[2rem] shadow-shadow1 cursor-pointer hover:bg-[#fdebf1] transition-all duration-300 ease-in h-full px-[0.5rem]">
            <img
              src="/Images/home/memory-care-icon.png"
              alt=""
              className="w-[30px] h-[28px]"
            />
            <p className="font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]">
            Mental Health Services
            </p>
            <div className="mt-[1rem] text-center">
              <p className="text-[16px] font-normal text-[#1B1B1E] leading-[26.92px]">
              Our Mental Health Services are designed to provide care and support for individuals facing mental health challenges.
              </p>
            </div>
            <Link href="/about">
              <button className="flex items-center justify-center border border-[#1B1B1E] text-[#1B1B1E] rounded-[32px] mt-[1.5rem] w-[122px] h-[37px]">
                Learn more
              </button>
            </Link>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default services;
