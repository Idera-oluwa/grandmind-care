"use client";
import React from 'react'
import { Fade } from "react-awesome-reveal";

const howWeWork = () => {
  return (
    <div className='mt-[7rem] md:mt-[12rem] bg-[#252648] w-full lg:w-[90%] mx-auto flex flex-col-reverse lg:flex-row relative h-auto lg:h-[312px] py-[2rem] lg:py-0 rounded-[10px] lg:px-[3rem]'>
       <div className='w-full lg:w-[40%]'>
       <Fade>
        <img src='Images/services/care4.png' alt='' className='hidden lg:grid lg:absolute top-0 mt-[-3rem] left-0 ml-[3rem] object-cover' />
         <p className='font-medium text-[12px] text-[#F6F8FF] mt-[2rem] lg:mt-[11rem] lg:px-[1rem]'>We conduct a thorough assessment to understand your loved one's unique needs. Based on the assessment, we create a personalised care plan tailored to individual requirement</p>
         <p className='font-medium text-[12px] text-[#F6F8FF] mt-[1rem] lg:px-[1rem]'>Our team is comprised of experienced caregivers who bring expertise and compassion to every interaction.</p>
         </Fade>
       </div>
       <div className='w-full lg:w-[40%] ml-auto mr-[3rem] flex flex-col items-center'>
       <Fade>
        <p className='font-extrabold text-[24px] text-white mt-[2rem] text-center'>How  We Work</p>
        <p className='font-semibold text-[12px] text-[#F6F8FF] mt-[1rem] text-center w-full md:w-[356px]'>From initial assessments to ongoing support, our process is designed to ensure the best possible care</p>
        <img src='Images/services/care5.png' alt='service image' className='mt-[1rem] w-[95%] lg:w-auto mx-auto object-cover'/>
        </Fade>
       </div>
    </div>
    
  )
}

export default howWeWork
