"use client";
import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const contact = () => {
  return (
    <Fade>
    <div
      className="w-full md:w-[80%]  2xl:w-full px-[1rem] md:px-[3rem] py-[4rem] shadow-shadow5 mt-0 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[2rem] z-[2] lg:gap-0 items-center"
    >
      <div className="flex flex-col gap-[2rem] col-span-1">
      <Fade>
        <div className="flex flex-col justify-between md:flex-row lg:flex-col gap-[2rem] md:gap-0 lg:gap-[2rem]">
          <div className="flex flex-row gap-[2rem]">
            <img
              src="/Images/contact/location.png"
              alt=""
              className="w-[17px] h-[24px]"
            />
            <div className="text-left">
              <p className="font-bold text-[14px] text-[#1B1B1E]">
                Office Address
              </p>
              <p className="font-medium text-[14px] text-[#1B1B1E] mt-[0.5rem]">
                22 Cutmore Street
              </p>
              <p className="font-medium text-[14px] text-[#1B1B1E] mt-[0.2rem]">
                Gravesend Kent
              </p>
              <p className="font-medium text-[14px] text-[#1B1B1E] mt-[0.2rem]">
                DA11 0PS
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[2rem]">
            <img
              src="/Images/contact/home.png"
              alt=""
              className="w-[17px] h-[18px]"
            />
            <div className="text-left">
              <p className="font-bold text-[14px] text-[#1B1B1E]">
                Office Opening Hours
              </p>
              <p className="font-medium text-[14px] text-[#1B1B1E] mt-[0.5rem]">
                Mon-Fri: 9:00am -5:00pm
              </p>
              <p className="font-medium text-[14px] text-[#1B1B1E] mt-[0.2rem]">
                Saturday: Closed
              </p>
              <p className="font-medium text-[14px] text-[#1B1B1E] mt-[0.2rem]">
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row lg:flex-col gap-[2rem] md:gap-0 lg:gap-[2rem]">
          <div className="flex flex-row gap-[2rem]">
            <img
              src="/Images/home/mail-sm.png"
              alt=""
              className="w-[17px] h-[18px]"
            />
            <div className="text-left">
            <a href="mailto:info@grandmindcare.co.uk">
                {" "}
                <p className="font-semibold text-[14px] text-[#1B1B1E]">
                info@grandmindcare.co.uk
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-[2rem] md:mr-[5rem] lg:mr-0">
            <img
              src="/Images/home/phone-logo.png"
              alt=""
              className="w-[17px] h-[18px]"
            />
            <div className="text-left">
              <a href="tel:+442034177797">
                <p className="font-semibold text-[14px] text-[#1B1B1E]">
                  01474247739
                </p>
              </a>
            </div>
          </div>
        </div>
        </Fade>
      </div>
      <div className=" h-[500px] border border-[#47497380] rounded-[10px] bg-white p-[2rem] ml-auto col-span-1 lg:col-span-2 w-full">
        <form action="https://formspree.io/f/xayrynve" method="POST">
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="first-name"
              className="text-[16px] font-bold text-[#474973]"
            >
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              className="px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[52px] outline-none"
            />
          </div>
          <div className="flex flex-col gap-[10px] mt-[20px]">
            <label
              htmlFor="message"
              className="text-[16px] font-bold text-[#474973]"
            >
              Write your message here
            </label>
            <textarea
              name="message"
              className="px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[177px] outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#474973] rounded-[10px] font-semibold text-[20px] w-full mt-[3rem] h-[64px] text-white hover:border-transparent hover:bg-[#353756] transition-all ease-out duration-[600]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </Fade>
  );
};

export default contact;
