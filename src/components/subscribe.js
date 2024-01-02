import React from "react";

const subscribe = () => {
  return (
    <div className="mt-[6rem] w-[90vw] md:w-[80vw] lg:w-[70vw]  2xl:max-w-[1440px] mx-auto">
      <div className="w-full lg:w-full bg-[#F4EEEE] px-[1rem] md:px-[4rem] py-[2rem] mx-auto rounded-[10px]">
        <div className="flex flex-col gap-[1rem] lg:gap-0 lg:flex-row justify-between items-center border-b border-[#76778399] pb-[3rem]">
          <p className="font-semibold text-[20px] md:text-[24px] text-[#1B1B1E]">
            Subscribe To Our Newsletter
          </p>
          <form
            className="flex flex-row w-full md:w-auto"
            action="https://formspree.io/f/mleqedzn"
            method="POST"
          >
            <input
              type="text"
              name="subscribe"
              placeholder="Enter your email"
              className="font-medium text-[14px] text-[#767783] w-[83%] md:w-[306px] px-[1rem] h-[59px] outline-none rounded-l-[5px]"
            />
            <button
              type="submit"
              className="bg-[#FFD166] w-[17%] md:w-[62px] h-[59px] rounded-r-[5px] flex justify-center items-center cursor-pointer hover:border-transparent hover:bg-[#ffba66] transition-all ease-out duration-[600]"
            >
              <img src="Images/home/subscribe-arrow.png" alt="" />
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-[2rem] lg:gap-0 lg:flex-row mt-[3rem] justify-between border-b border-[#76778399] pb-[3rem]">
          {/* Left hand side */}
          <div className="w-full lg:w-[50%]">
            <img
              src="Images/home/LOGO.svg"
              alt=""
              className="w-[164px] h-[41.65px]"
            />
            <p className="font-medium text-[12px] text-[#767783B2] mt-[1rem]">
              Contacting the team is easy, enter your name
            </p>
            <div className="flex flex-row gap-[8px] items-center mt-[1rem]">
              <a
                href="https://www.facebook.com/LCBNTV"
                target="_blank"
                rel="noreferrer"
              >
                <img src="Images/home/facebook-logo.png" alt="" />
              </a>
              <a href="mailto:info@grandmindcare.co.uk">
                <img src="Images/home/mail-logo.png" alt="" />
              </a>
              <a
                href="https://wa.me/447903220307"
                target="_blank"
                rel="noreferrer"
              >
                <img src="Images/home/whatsapp-icon.png" alt="" />
              </a>
            </div>
          </div>
          {/* Right hand side */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-[1rem]">
            <div className="bg-[#474973] col-span-1 flex flex-col justify-center items-center lg:w-[224px] h-[152px] text-left rounded-[10px]">
              <div className="text-center sm:text-left">
                <p className="font-bold text-[12px] text-white">
                  Office Address
                </p>
                <p className="font-medium text-[12px] text-white mt-[0.5rem]">
                  22 Cutmore Street
                </p>
                <p className="font-medium text-[12px] text-white mt-[0.2rem]">
                  Gravesend Kent
                </p>
                <p className="font-medium text-[12px] text-white mt-[0.2rem]">
                  DA11 0PS
                </p>
              </div>
            </div>
            <div className="bg-[#474973] col-span-1 flex flex-col justify-center items-center lg:w-[224px] h-[152px] rounded-[10px]">
              <div className="text-center sm:text-left">
                <p className="font-bold text-[12px] text-white">
                  Office Opening Hours
                </p>
                <p className="font-medium text-[12px] text-white mt-[0.5rem]">
                  Mon-Fri: 9:00am -5:00pm
                </p>
                <p className="font-medium text-[12px] text-white mt-[0.2rem]">
                  Saturday: Closed
                </p>
                <p className="font-medium text-[12px] text-white mt-[0.2rem]">
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-[1rem] gap-[1rem] md:gap-0">
          <p className="font-medium text-[12px] text-[#474973B2]">
            Copyright 2023 © grandmind care Ltd.{" "}
          </p>
          <div className="flex flex-row">
            <p className="font-medium text-[12px] text-[#474973B2] pr-[0.3rem] border-r border-[#474973B2] cursor-pointer">
              Privacy Policy
            </p>
            <p className="font-medium text-[12px] text-[#474973B2] pl-[0.3rem] cursor-pointer">
              Terms and Conditions{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default subscribe;
