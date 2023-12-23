"use client"
import React,{useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const companies = () => {
    const sliderRef = useRef();
  return (
    <div className='mt-[6rem]'>
      <Swiper
       modules={[Autoplay,EffectFade]}
      spaceBetween={20}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        800: { slidesPerView: 4},
        1200:{slidesPerView: 6}
      }}
        // visibilityFullFit= {true}
        // autoResize= {false}
        autoplay={{ delay: 2500, disableOnInteraction: false,}}
        // onSwiper={it => (sliderRef.current = it)}
        // effect="fade"
        // fadeEffect= {{ crossFade: true }}
    >
      <SwiperSlide><img src='Images/home/logo-1.png' alt=''/></SwiperSlide>
      <SwiperSlide><img src='Images/home/logo-2.png' alt=''/></SwiperSlide>
      <SwiperSlide><img src='Images/home/logo-3.png' alt=''/></SwiperSlide>
      <SwiperSlide><img src='Images/home/logo-1.png' alt=''/></SwiperSlide>
      <SwiperSlide><img src='Images/home/logo-2.png' alt=''/></SwiperSlide>
      <SwiperSlide><img src='Images/home/logo-3.png' alt=''/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default companies
