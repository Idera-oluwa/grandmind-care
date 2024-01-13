"use client";
import React from "react";
import Link from "next/link";
import { Slide, Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const explore = () => {
  return (
    <div className="flex flex-row mt-[7rem] md:mt-[10rem] items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.3", ease: "easeOut" }}
        className="w-full md:w-[50%]"
      >
        <p className="text-[28px] lg:text-[40px] font-bold text-black lg:leading-[55.55px]">
          Explore our flexible
        </p>
        <p className="text-[28px] lg:text-[40px] font-bold text-black lg:leading-[55.55px]">
          <span className="text-[#32936F]">staffing</span> options
        </p>
        <img src="/Images/home/underline.png" alt="" />
        <img
          src="/Images/home/staffing.png"
          alt=""
          className="mt-[1rem] w-full md:w-0 object-cover"
        />
        <p className="text-[12px] lg:text-[14px] font-medium leading-[21.78px] w-full md:w-[80%]  2xl:w-full mt-[1rem] lg:mt-[0rem]">
          We recognize the importance of work-life balance. Discover
          opportunities with flexible scheduling options that suit your
          availability.
        </p>
        <Link href="/staffing">
          <button className="py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] rounded-[32px] mt-[1rem] md:mt-[2rem] hover:bg-[#474973] hover:border-transparent hover:text-[#FDFDFD] transition-all ease-out duration-[600]">
            Apply Now
          </button>
        </Link>
      </motion.div>
      <div className="w-0 md:w-[50%]">
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: "0.3", ease: "easeOut" }}
          src="Images/home/staffing.png"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default explore;
