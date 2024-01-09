"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const mission = () => {
  return (
    <Fade>
    <div
      className="mt-[7rem] md:mt-[10rem] relative w-full h-[20rem] md:h-auto"
    >
      <img
        src="/Images/about/mission-img2.png"
        alt=""
        className="object-cover h-full w-full  rounded-[10px]"
      />
      <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center">
      <Fade>
        <h1 className="font-bold text-[30px] md:text-[32px] text-white">
          Our Mission
        </h1>
        <p className="text-[14px] md:text-[16px] font-medium text-white w-[95%] md:w-[865px] text-center">
          Welcome to Grandmind Care, our journey is fueled by a deep commitment
          to enhancing lives through compassionate care{" "}
        </p>
        <Link href="/about">
          <button className="bg-[#474973] py-[5px] flex items-center justify-center rounded-[32px] text-[15px] font-medium text-[#F6F8FF] w-[122px] mt-[2rem]">
            Learn more
          </button>
        </Link></Fade>
      </div>
    </div>
    </Fade>
  );
};

export default mission;
