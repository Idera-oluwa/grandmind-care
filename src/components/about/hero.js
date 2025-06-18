"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const hero = () => {
  return (
    <div className="flex flex-col items-center mt-[3rem] md:mt-[6rem]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.3", ease: "easeOut" }}
        className="flex flex-row gap-[20px]"
      >
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
          <a href="https://wa.me/447466308429" target="_blank" rel="noreferrer">
            <p className="text-[12px] md:text-[14px] font-normal text-[#474973]">
              +44 (0) 7466308429
            </p>
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.3", ease: "easeOut" }}
        className="flex justify-center flex-col items-center"
      >
        <h1 className="font-bold text-center text-[30px] md:text-[35px] lg:text-[40px] text-[#1B1B1E] mt-[1rem]">
          Empowering <span className="text-[#474973]">Care,</span>
        </h1>
        <h1 className="font-bold text-[30px]  md:text-[35px] lg:text-[40px] text-[#1B1B1E] text-center">
          Empathy In Every Connection
        </h1>
        <p className="text-[14px] font-normal text-center text-[#1B1B1E] mt-[1rem] w-[95%] md:w-[669px]">
          Welcome to Grandmind Care, our journey is fueled by a deep commitment
          to enhancing lives through compassionate care{" "}
        </p>
        <Link href="#register">
          {" "}
          <button className="bg-[#474973] rounded-[22px] py-[10px] lg:py-[12px] px-[18px] lg:px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[2rem] border border-transparent hover:bg-[hsl(237,24%,25%)] transition-all ease-out duration-[600]">
            Register today
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default hero;
