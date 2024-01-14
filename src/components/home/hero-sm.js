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

const herosm = () => {
  const sliderRef = useRef();
  return (
    <div className="flex md:hidden flex-col justify-center mt-[3rem]">
      {/* Left hand side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.3", ease: "easeOut" }}
        className="w-[90vw]  2xl:max-w-[1440px] mx-auto"
      >
        <div className="flex flex-row gap-[10px] justify-center">
          <div className="flex flex-row gap-[8px] items-center cursor-pointer">
            <a href="mailto:info@grandmindcare.co.uk">
              <p className="text-[12px] font-normal text-[#474973]">
              info@grandmindcare.co.uk
              </p>
            </a>
          </div>
          <div className="flex flex-row gap-[8px] items-center cursor-pointer">
            <a
              href="https://wa.me/447903220307"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-[12px] font-normal text-[#474973]">
                07903220307
              </p>
            </a>
          </div>
        </div>
        <h1 className="text-[32px] font-normal leading-[48.41px] text-[#1B1B1E] text-center">
          <span className="text-[#474973]">Welcome</span> To{" "}
          <span className="text-[#474973]">Your</span>
        </h1>
        <p className="text-[32px] font-normal leading-[48.41px] text-[#1B1B1E] text-center">
          No 1 Carer <span className="text-[#474973]">Service</span>{" "}
        </p>
        <p className="text-[12px] leading-[25.6px] text-[#1B1B1E] font-normal w-[95%] md:w-[80%]  2xl:w-full mt-[0.5rem] md:mt-[2rem]  text-center">
          <span className="text-[#474973] font-semibold">
            Grandmind Care LTD
          </span>
          , where compassionate care meets cutting-edge convenience.
        </p>
        <div className="flex flex-row mt-[2rem] justify-center gap-[10px] w-full">
          <Link href="/about#register">
            <button className="bg-[#474973] rounded-[22px] w-[122px] h-[36px] flex justify-center items-center text-[12px] font-bold text-[#FDFDFD] tracking-[1px] border border-transparent hover:bg-[hsl(237,24%,25%)] transition-all ease-out duration-[600] mx-auto">
              Register today
            </button>
          </Link>
        </div>
       
      </motion.div>
      {/* Right hand side */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.3", ease: "easeOut" }}
        className="w-full md:w-[53%] mt-[2.5rem] pt-[2rem] md:pt-0 md:mt-0 md:border-l border-[#47497380] md:pl-[2rem]"
      >
        <Swiper
          modules={[Autoplay, Navigation, A11y, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          onSwiper={(it) => (sliderRef.current = it)}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        >
          <SwiperSlide>
            <img
              src="/Images/home/hero-image.png"
              alt=""
              className="w-full h-[209px] md:h-[420px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Images/home/hero2.png"
              alt=""
              className="w-full h-[209px] md:h-[420px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Images/home/hero3.png"
              alt=""
              className="w-full h-[209px] md:h-[420px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Images/home/hero4.png"
              alt=""
              className="w-full h-[209px] md:h-[420px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
        <h1 className="text-[20px] font-semibold text-[#1B1B1E] text-center md:text-left mt-[4rem]">
          Our{" "}
          <span className="text-[20px] font-bold text-[#E27396]">Mission</span>
        </h1>
        <p className="text-[12px] font-medium text-[#1B1B1E] mt-[0.5rem] md:mt-0 text-center md:text-left w-[90%] px-[5vw] mx-auto">
          is to make this journey smoother for both carers and those in need
          of care. Here, you'll find a supportive community and valuable resources.
        </p>
      </motion.div>
    </div>
  );
};

export default herosm;
