import React from 'react'

const carePlans = () => {
  return (
    <div className='mt-[5rem] w-[90%] mx-auto flex flex-col gap-[4rem]'>
      <div className='flex flex-row items-center'>
        <div className='w-[50%]'>
            <p className='font-semibold text-[40px] text-[#1B1B1E]'>Personalised</p>
            <p className='font-semibold text-[40px] text-[#1B1B1E]'>Care Plans</p>
            <p className='text-[16px] font-normal w-[90%] mt-[1rem]'>We offer respite care services to provide temporary relief for family caregivers. This allows you to take a break while ensuring your loved ones receive the care they need.</p>
        </div>
        <img src='Images/services/care1.png' alt=''/>
      </div>
      <div className='flex flex-row-reverse items-center gap-[2rem]'>
        <div className='w-[50%]'>
            <p className='font-semibold text-[40px] text-[#1B1B1E]'>Specialised Care</p>
            <p className='text-[16px] font-normal w-[90%] mt-[1rem]'>We offer respite care services to provide temporary relief for family caregivers. This allows you to take a break while ensuring your loved ones receive the care they need.</p>
        </div>
        <img src='Images/services/care2.png' alt=''/>
      </div>
      <div className='flex flex-row items-center'>
        <div className='w-[50%]'>
            <p className='font-semibold text-[40px] text-[#1B1B1E]'>Respite Care</p>
            <p className='text-[16px] font-normal w-[90%] mt-[1rem]'>We offer respite care services to provide temporary relief for family caregivers. This allows you to take a break while ensuring your loved ones receive the care they need.</p>
        </div>
        <img src='Images/services/care3.png' alt=''/>
      </div>
    </div>
  )
}

export default carePlans;
