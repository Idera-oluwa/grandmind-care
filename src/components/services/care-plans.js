"use client"
import React from 'react'
import { Slide,Fade  } from "react-awesome-reveal";

const carePlans = () => {
  return (
    <div className='mt-[7rem] md:mt-[10rem] w-full lg:w-[80%] mx-auto flex flex-col gap-[2rem] md:gap-[8rem]'>
      <div className='flex flex-col md:flex-row items-center gap-[2rem] md:gap-0'>
        <div className='w-full md:w-[50%]'>
        <Fade>
          <div className='flex flex-row md:flex-col gap-[0.5rem] md-[gap-0]'>
            <p className='font-semibold text-[26px] md:text-[32px] text-[#1B1B1E]'>Personalised</p>
            <p className='font-semibold text-[26px] md:text-[32px]  text-[#1B1B1E]'>Care Plans</p>
            </div>
            <p className='text-[14px] font-normal w-full lg:w-[90%] mt-[1rem]'>We believe in tailoring our services to meet the specific needs of each client. Our personalised care plans include: Companion Care, assistance with daily activities and medication management.</p>
            </Fade>
        </div>
        <div className="w-full md:w-[50%] "><Slide direction="right"><img src='/Images/services/care1.png' alt='' className='object-cover'/></Slide></div>
      </div>
      <div className='flex flex-col md:flex-row-reverse items-center gap-[2rem]'>
        <div className='w-full md:w-[50%]'>
        <Fade>
            <p className='font-semibold text-[26px] md:text-[32px] text-[#1B1B1E]'>Specialised Care</p>
            <p className='text-[14px] font-normal w-full lg:w-[90%] mt-[1rem]'>For clients with specific medical or health requirements, our specialized care services include, Dementia Care, Palliative Care and Post-Surgery Care</p>
            </Fade>
        </div>
        <div className="w-full md:w-[50%] "><Slide direction="left"><img src='/Images/services/care2.png' alt='' className='object-cover'/></Slide></div>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-[2rem] md:gap-0'>
        <div className='w-full md:w-[50%]'>
        <Fade>
            <p className='font-semibold text-[26px] md:text-[32px] text-[#1B1B1E]'>Respite Care</p>
            <p className='text-[14px] font-normal w-full lg:w-[90%] mt-[1rem]'>We offer respite care services to provide temporary relief for family carers. This allows you to take a break while ensuring your loved ones receive the care they need.</p>
            </Fade>
        </div>
        <div className="w-full md:w-[50%] "><Slide direction="right"><img src='/Images/services/care3.png' alt='' className='object-cover'/></Slide></div>
      </div>
    </div>
  )
}

export default carePlans;
