"use client"
import React from "react";
import { Fade } from "react-awesome-reveal";

const joinus = () => {
  return (
    <Fade>
    <div className="mt-[6rem] grid grid-cols-1 lg:grid-cols-2 h-auto w-full">
      <div className="col-span-1 bg-[#2A2C58] h-full px-[1rem] md:px-[2rem] flex flex-col justify-center pb-[2rem] lg:pb-[2rem] pt-[1rem] lg:pt-[3rem]">
      <Fade>
        <h1 className="text-[32px] md:text-[35px] lgtext-[40px] font-semibold text-white text-center">
          Join Our Team
        </h1>
        <p className="text-[16px] font-medium text-white text-center mt-[1.5rem] w-full md:w-[80%]  2xl:w-full mx-auto">
          Are you passionate about caregiving? Consider joining our team of
          dedicated professionals. We are always looking for compassionate
          individuals to contribute to our mission.
        </p>
        <div className="flex flex-col md:flex-row gap-[2rem] md:gap-0 mt-[2rem] justify-between">
          <div className="w-full md:w-[45%] bg-white px-[1.5rem] py-[1.5rem] rounded-[5px]">
            <div className="flex flex-row">
              <div className="flex flex-col gap-[0.4rem]">
                <p className="font-medium text-[14px] text-[#1B1B1E]">
                  Healthcare Assistants
                </p>
                <p className="font-medium text-[14px] text-[#1B1B1E]">
                  Support Workers
                </p>
                <p className="font-medium text-[14px] text-[#1B1B1E]">
                  Nurses
                </p>
                <p className="font-medium text-[14px] text-[#1B1B1E]">
                  Care Managers{" "}
                </p>
              </div>
              <img
                src="/Images/home/logo-symbol.svg"
                alt=""
                className="w-[30px] h-[30px] mt-auto ml-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-[49%] bg-white px-[1.5rem] py-[1.5rem] rounded-[5px] relative">
            <div className="flex flex-row h-full items-center">
              <div className="flex flex-col gap-[0.4rem]">
                <p className="font-medium text-[14px] text-[#1B1B1E]">Care Assistants</p>
                <p className="font-medium text-[14px] text-[#1B1B1E]">
                  Senior Carers
                </p>
                <p className="font-medium text-[14px] text-[#1B1B1E]">
                Live-In Carers
                </p>
                <p className="font-medium text-[14px] text-[#1B1B1E]">
                Wake-In Carers
                </p>
              </div>
              <img
                src="/Images/home/logo-symbol.svg"
                alt=""
                className="w-[30px] h-[30px] mt-auto ml-auto absolute right-0 bottom-0 mr-[1rem] mb-[1rem]"
              />
            </div>
          </div>
        </div>
        </Fade>
      </div>
      <div className="w-full relative">
        <img
          src="/Images/staffing/join-us.svg"
          alt=""
          className="col-span-1 h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 lg:ml-[3rem] mb-[-3rem] flex flex-row-reverse gap-[1rem] md:gap-[2rem]">
          <div className="bg-white p-[1rem] flex flex-row items-center gap-[0.5rem] md:gap-[1rem] rounded-[5px] shadow-shadow4 hover:shadow-none border border-transparent hover:border hover:border-[#FFD166] cursor-pointer">
            <img
              src="/Images/staffing/staff-phone.png"
              alt=""
              className="w-[2rem] h-[2rem] md:w-auto md:h-auto"
            />
            <div>
              <p className="font-bold text-[14px] md:text-[20px] text-[#1B1B1E]">
                Call us
              </p>
              <a href="tel:+441474526784">
                <p className="font-semibold text-[10px] md:text-[14px] text-[#1B1B1E]">
                01474526784
                </p>
              </a>
            </div>
          </div>
          <div className="bg-white p-[1rem] flex flex-row items-center gap-[0.5rem] md:gap-[1rem] rounded-[5px] shadow-shadow4 hover:shadow-none border border-transparent hover:border hover:border-[#474973] cursor-pointer">
            <img
              src="/Images/staffing/staff-mail.png"
              alt=""
              className="w-[2rem] h-[2rem] md:w-auto md:h-auto"
            />
            <div>
              <p className="font-bold text-[14px] md:text-[20px] text-[#1B1B1E]">
                Email
              </p>
              <a href="mailto:info@grandmindcare.co.uk">
                <p className="font-semibold text-[10px] md:text-[14px] text-[#1B1B1E]">
                  info@grandmindcare.co.uk
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default joinus;
