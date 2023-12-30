"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, A11y, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const hero = () => {
  const sliderRef = useRef();
  return (
    <div className="flex flex-col md:flex-row mt-[3rem] md:mt-[6rem]">
      {/* Left hand side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.3", ease: "easeOut" }}
        className="w-full md:w-[47%]"
      >
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-row gap-[8px] items-center cursor-pointer">
            <Image
              src="/Images/home/mail-sm.png"
              alt=""
              width={18}
              height={16}
            />
            <a href="mailto:info@grandmind.co.uk">
              <p className="text-[13px] md:text-[14px] font-normal text-[#474973]">
                info@grandmind.co.uk
              </p>
            </a>
          </div>
          <div className="flex flex-row gap-[8px] items-center cursor-pointer">
            <img
              src="Images/home/whatsapp-icon.png"
              alt="image"
              className="w-[17px] h-[17px]"
            />
            <a
              href="https://wa.me/447903220307"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-[13px] md:text-[14px] font-normal text-[#474973]">
                07903220307
              </p>
            </a>
          </div>
        </div>
        <h1 className="text-[32px] md:text-[35px] lg:text-[40px] font-bold leading-[48.41px] text-[#1B1B1E] mt-[1.5rem]">
          <span className="text-[#474973]">Welcome</span> To{" "}
          <span className="text-[#474973]">Your</span>
        </h1>
        <i className="text-[32px] md:text-[35px] lg:text-[40px] font-bold leading-[48.41px] text-[#1B1B1E] mt-[48px]">
          No 1 Carer <span className="text-[#474973]">Service</span>{" "}
        </i>
        <p className="text-[14px] md:text-[14px] leading-[25.6px] text-[#1B1B1E] font-normal w-[95%] md:w-[80%]  2xl:w-full mt-[0.5rem] md:mt-[2rem]">
          We're delighted to welcome you to{" "}
          <span className="text-[#474973] font-semibold">
            Grandmind Care LTD
          </span>
          , where compassionate care meets cutting-edge convenience. Here,
          you’ll find a supportive community,valuable resources, and a seamless
          interaction with our professional carers.
        </p>
        <div className="flex flex-row mt-[1.5rem] gap-[10px]">
          <Link href="/about#register">
            <button className="bg-[#474973] rounded-[22px] py-[9px] lg:py-[10px] px-[15px] lg:px-[18px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] border border-transparent hover:bg-[hsl(237,24%,25%)] transition-all ease-out duration-[600]">
              Register today
            </button>
          </Link>
          <Link href="/about">
            {" "}
            <button className="hidden md:block bg-transparent rounded-[22px] py-[9px] lg:py-[10px] px-[15px] lg:px-[18px] text-[15px] font-medium text-black border border-[#1B1B1E] tracking-[1px] hover:bg-[#474973] hover:border-transparent hover:text-[#FDFDFD] transition-all ease-out duration-[600]">
              Learn more
            </button>{" "}
          </Link>
        </div>
      </motion.div>
      {/* Right hand side */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.3", ease: "easeOut" }}
        className="w-full md:w-[53%] mt-[0.5rem] pt-[2rem] md:pt-0 md:mt-0 md:border-l border-[#47497380] md:pl-[2rem]"
      >
        <Swiper
          modules={[Autoplay, Navigation, A11y, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          onSwiper={(it) => (sliderRef.current = it)}
          onSlideChange={() => console.log("slide change")}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        >
          <SwiperSlide>
            <img
              src="Images/home/hero-image.png"
              alt=""
              className="rounded-[23px] w-full h-[209px] md:h-[420px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Images/home/hero2.png"
              alt=""
              className="rounded-[23px] w-full h-[209px] md:h-[420px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Images/home/hero3.png"
              alt=""
              className="rounded-[23px] w-full h-[209px] md:h-[420px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Images/home/hero4.png"
              alt=""
              className="rounded-[23px] w-full h-[209px] md:h-[420px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
        <h1 className="text-[20px] font-semibold text-[#1B1B1E] text-center md:text-left mt-[2rem] md:mt-[1rem]">
          Our{" "}
          <span className="text-[20px] font-bold text-[#E27396]">Mission</span>
        </h1>
        <p className="text-[14px] md:text-[14px] font-medium text-[#1B1B1E] mt-[0.5rem] md:mt-0 text-center md:text-left">
          is to make this journey smoother for both caregivers and those in need
          of care. Here, you'll find a supportive community, valuable resources,
          and a seamless
        </p>
      </motion.div>
    </div>
  );
};

export default hero;
