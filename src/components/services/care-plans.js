import React from 'react'

const carePlans = () => {
  return (
    <div className='mt-[10rem] w-full lg:w-[90%] mx-auto flex flex-col gap-[4rem] md:gap-[8rem]'>
      <div className='flex flex-col md:flex-row items-center gap-[2rem] md:gap-0'>
        <div className='w-full md:w-[50%]'>
            <p className='font-semibold text-[30px] md:text-[32px] text-[#1B1B1E]'>Personalised</p>
            <p className='font-semibold text-[30px] md:text-[32px]  text-[#1B1B1E]'>Care Plans</p>
            <p className='text-[14px] font-normal w-full lg:w-[90%] mt-[1rem]'>We offer respite care services to provide temporary relief for family caregivers. This allows you to take a break while ensuring your loved ones receive the care they need.</p>
        </div>
        <img src='Images/services/care1.png' alt='' className='w-full md:w-[50%] object-cover'/>
      </div>
      <div className='flex flex-col md:flex-row-reverse items-center gap-[2rem]'>
        <div className='w-full md:w-[50%]'>
            <p className='font-semibold text-[30px] md:text-[32px] text-[#1B1B1E]'>Specialised Care</p>
            <p className='text-[14px] font-normal w-full lg:w-[90%] mt-[1rem]'>We offer respite care services to provide temporary relief for family caregivers. This allows you to take a break while ensuring your loved ones receive the care they need.</p>
        </div>
        <img src='Images/services/care2.png' alt='' className='w-full md:w-[50%] object-cover'/>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-[2rem] md:gap-0'>
        <div className='w-full md:w-[50%]'>
            <p className='font-semibold text-[30px] md:text-[32px] text-[#1B1B1E]'>Respite Care</p>
            <p className='text-[14px] font-normal w-full lg:w-[90%] mt-[1rem]'>We offer respite care services to provide temporary relief for family caregivers. This allows you to take a break while ensuring your loved ones receive the care they need.</p>
        </div>
        <img src='Images/services/care3.png' alt='' className='w-full md:w-[50%] object-cover'/>
      </div>
    </div>
  )
}

export default carePlans;
