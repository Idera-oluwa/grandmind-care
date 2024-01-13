"use client"
import React,{useRef} from 'react'
import Link from 'next/link';
import { Autoplay, Navigation, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade } from "react-awesome-reveal";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


const domiciliary = () => {
  const sliderRef = useRef();
  return (
    <Fade>
    <div className='mt-[7rem] md:mt-[10rem]'>
     <h1 className='text-[20px] font-semibold text-[#1B1B1E] text-center'>Home Care Services</h1>
     <div className='mt-[2rem] relative h-[250px] md:h-[412px] w-[100%]'>
        <img src='Images/home/care-img.png' alt='' className='absolute z-10 w-full h-full object-cover'/>
        <div className='absolute z-50 w-full h-full bg-[#D9D9D933]'>
        <Swiper
      modules={[Autoplay, Navigation, A11y,EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      autoplay={{ delay: 2500, disableOnInteraction: false,}}
      onSwiper={it => (sliderRef.current = it)}
      effect="fade"
      fadeEffect= {{ crossFade: true }}
      className='h-full'>
  
        <SwiperSlide className='h-full'>
        <div className='flex flex-col md:flex-row w-full h-full items-center px-[2rem] md:px-[3rem] justify-center'>
          <img src='/Images/home/domiciliary-img.png' alt='' className='h-[128px] md:h-[329px] w-[100%] md:w-[50%] hidden md:grid rounded-[5px] object-fill'/>
          <img src='/Images/home/dom1.png' alt='' className='md:hidden w-full h-[155px]'/>
          <div className='flex flex-col ml-0 md:ml-[3rem] w-[100%] md:w-[50%] mt-[1rem] md:mt-0'>
           <p className='font-medium text-[14px] md:text-[40px] text-[#E27396] text-center md:text-left'>Tailor <span className='text-[#FFFFFF]'>Made Services</span></p>
           <p className='font-normal text-[10px] md:text-[14px] text-[#FFFFFF] text-center md:text-left'>Personalized care plans, ensuring that each person receives the specific support required for their well-being.</p>
           <Link href='/about'><button className='bg-[#474973] py-[5px] hidden md:flex items-center justify-center rounded-[32px] text-[15px] font-medium text-[#F6F8FF] w-[122px] mt-[1rem] md:mt-[2rem] mx-auto md:ml-0'>Learn more</button></Link>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col md:flex-row w-full h-full items-center px-[2rem] md:px-[3rem] justify-center'>
          <img src='/Images/home/hero3.png' alt='' className='h-[128px] md:h-[329px] w-[100%] md:w-[50%] hidden md:grid rounded-[5px] object-fill'/>
          <img src='/Images/home/dom2.png' alt='' className='md:hidden w-full h-[155px]'/>
          <div className='flex flex-col ml-0 md:ml-[3rem] w-[100%] md:w-[50%] mt-[1rem] md:mt-0'>
           <p className='font-medium text-[14px] md:text-[40px] text-[#FFFFFF] text-center md:text-left'>Dependable <span className='text-[#32936F]'>&</span> Reliable</p>
           <p className='font-normal text-[10px] md:text-[14px] text-[#FFFFFF] text-center md:text-left'>is to make this journey smoother for both carers and those in need of care.</p>
           <Link href='/about'><button className='bg-[#474973] py-[5px] hidden md:flex items-center justify-center rounded-[32px] text-[15px] font-medium text-[#F6F8FF] w-[122px] mt-[1rem] md:mt-[2rem] mx-auto md:ml-0'>Learn more</button></Link>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col md:flex-row w-full h-full items-center px-[2rem] md:px-[3rem] justify-center'>
          <img src='/Images/home/domiciliary2.png' alt='' className='h-[128px] md:h-[329px] w-[100%] md:w-[50%] hidden md:grid rounded-[5px] object-fill'/>
          
          <img src='/Images/home/dom3.png' alt='' className='md:hidden w-full h-[155px]'/>
          <div className='flex flex-col ml-0 md:ml-[3rem] w-[100%] md:w-[50%] mt-[1rem] md:mt-0'>
           <p className='font-medium text-[14px] md:text-[40px] text-[#FFFFFF] text-center md:text-left'> <span className='text-[#32936F]'>Be-Spoke</span> Care Services</p>
           <p className='font-normal text-[10px] md:text-[14px] text-[#FFFFFF] text-center md:text-left'>We create bespoke care plans that address your specific requirements</p>
           <Link href='/about'><button className='bg-[#474973] py-[5px] hidden md:flex items-center justify-center rounded-[32px] text-[15px] font-medium text-[#F6F8FF] w-[122px] mt-[1rem] md:mt-[2rem] mx-auto md:ml-0'>Learn more</button></Link>
          </div>
        </div>
        </SwiperSlide>
        
    </Swiper>
        </div>
     </div>
    </div>
    </Fade>
  )
}

export default domiciliary
