"use client"
import React from "react";
import { Fade,Zoom} from "react-awesome-reveal";

const whyus = () => {
  return (
    <div className="mt-[6rem] md:mt-[8rem]">
     <Fade> <h1 className="text-[20px] font-semibold text-[#1B1B1E] text-center">
        What Sets Us Apart?
      </h1></Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[2rem] gap-[2rem] md:gap-[2rem] md:px-[3rem]">
        <Zoom cascade damping={0.3}><div className="bg-[#32936F] flex flex-col items-center justify-center h-[273px] rounded-[10px] px-[2rem] md:px-[3rem] cursor-pointer hover:translate-y-[-0.5rem] transition-all ease-in duration-300">
          <img src="/Images/home/heart2.png" alt="" />
          <p className="font-bold text-[18px] text-white mt-[1rem]">
            Empathy In Every Interaction
          </p>
          <p className="font-medium text-[16px] text-white mt-[1rem] text-center">
            Designed with a deep sense of empathy, ensuring that every
            interaction is marked bygenuine care.
          </p>
        </div>
        <div className="bg-[#32936F] flex flex-col items-center justify-center h-[273px] rounded-[10px] px-[2rem] md:px-[3rem] cursor-pointer hover:translate-y-[-0.5rem] transition-all ease-in duration-300 ">
          <img src="/Images/home/medal.png" alt="" />
          <p className="font-bold text-[18px] text-white mt-[1rem]">
            Quality Care, Personalised
          </p>
          <p className="font-medium text-[16px] text-white mt-[1rem] text-center">
          Our mission is to enhance the well-being of our clients by providing compassionate and reliable care
          </p>
        </div>
        <div className="bg-[#32936F] flex flex-col items-center justify-center h-[273px] rounded-[10px] px-[2rem] md:px-[3rem] cursor-pointer hover:translate-y-[-0.5rem] transition-all ease-in duration-300 ">
          <img src="/Images/home/community.png" alt="" />
          <p className="font-bold text-[18px] text-white mt-[1rem]">
            Community Of Support
          </p>
          <p className="font-medium text-[16px] text-white mt-[1rem] text-center">
          We're here to make a positive impact on the lives of those we serve. Let us be your partner in providing exceptional care.
          </p>
        </div></Zoom>
      </div>
    </div>
  );
};

export default whyus;
