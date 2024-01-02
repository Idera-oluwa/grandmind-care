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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[3rem] gap-[2rem] md:gap-[4rem] justify-between">
        <Zoom cascade damping={0.3}>
          <div className="flex flex-col bg-[#F6F8FF] items-center py-[2rem] shadow-shadow1 cursor-pointer hover:bg-[#fdebf1] transition-all duration-300 ease-in">
            <img
              src="Images/home/home-icon.png"
              alt=""
              className="w-[30px] h-[28px]"
            />
            <p className="font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]">
              In-Home Elderly Care
            </p>
            <div className="mt-[1rem] text-center">
              <p className="text-[16px] font-normal text-[#1B1B1E]">
                Assistance with daily activities
              </p>
              <p className="text-[16px] font-normal text-[#1B1B1E]">
                Medication management
              </p>
              <p className="text-[16px] font-normal text-[#1B1B1E]">
                Companionship and emotional support
              </p>
            </div>
            <Link href="/about">
              <button className="py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] mt-[1.5rem] rounded-[32px]">
                Learn more
              </button>
            </Link>
          </div>
          <div className="flex flex-col bg-[#F6F8FF] items-center py-[2rem] shadow-shadow1 cursor-pointer hover:bg-[#fdebf1] transition-all duration-300 ease-in">
            <img
              src="Images/home/heart-icon.png"
              alt=""
              className="w-[30px] h-[28px]"
            />
            <p className="font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]">
              Special Needs Support
            </p>
            <div className="mt-[1rem] text-center">
              <p className="text-[16px] font-normal text-[#1B1B1E]">
                Tailored care plans
              </p>
              <p className="text-[16px] font-normal text-[#1B1B1E]">
                Therapeutic activities
              </p>
              <p className="text-[16px] font-normal text-[#1B1B1E]">
                Emotional and behavioral support
              </p>
            </div>
            <Link href="/about">
              <button className="py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] mt-[1.5rem] rounded-[32px]">
                Learn more
              </button>
            </Link>
          </div>
          <div className="flex flex-col bg-[#F6F8FF] items-center py-[2rem] shadow-shadow1 cursor-pointer hover:bg-[#fdebf1] transition-all duration-300 ease-in">
            <img
              src="Images/home/memory-care-icon.png"
              alt=""
              className="w-[30px] h-[28px]"
            />
            <p className="font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]">
              Memory Care Services
            </p>
            <div className="mt-[1rem] text-center">
              <p className="text-[16px] font-normal text-[#1B1B1E]">
                Cognitive stimulation
              </p>
              <p className="text-[16px] font-normal text-[#1B1B1E]">
                Safe and secure environment
              </p>
              <p className="text-[16px] font-normal text-[#1B1B1E]">
                Family support and education
              </p>
            </div>
            <Link href="/about">
              <button className="py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] mt-[1.5rem] rounded-[32px]">
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
