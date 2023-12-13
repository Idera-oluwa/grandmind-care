import React from 'react'

const services = () => {
  return (
    <div className='mt-[4rem]'>
      <h1 className='text-[24px] font-semibold text-[#1B1B1E] text-center'>Our Sevices</h1>
      <div className='flex flex-row mt-[3rem] gap-[1rem] justify-between'>
       <div className='flex flex-col bg-[#F6F8FF] items-center w-[30%] py-[2rem] shadow-shadow1'>
         <img src='Images/home-icon.png' alt='' className='w-[30px] h-[28px]'/>
         <p className='font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]'>In-Home Elderly Care</p>
     <div className='mt-[1rem] text-center'>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Assistance with daily activities</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Medication management</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Companionship and emotional support</p>
    </div>
      <button className='py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] mt-[1.5rem] rounded-[32px]'>Learn more</button>
       </div>
       <div className='flex flex-col bg-[#F6F8FF] items-center w-[30%] py-[2rem] shadow-shadow1'>
         <img src='Images/heart-icon.png' alt='' className='w-[30px] h-[28px]'/>
         <p className='font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]'>Special Needs Support</p>
     <div className='mt-[1rem] text-center'>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Tailored care plans</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Therapeutic activities</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Emotional and behavioral support</p>
    </div>
      <button className='py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] mt-[1.5rem] rounded-[32px]'>Learn more</button>
       </div>
       <div className='flex flex-col bg-[#F6F8FF] items-center w-[30%] py-[2rem] shadow-shadow1'>
         <img src='Images/memory-care-icon.png' alt='' className='w-[30px] h-[28px]'/>
         <p className='font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]'>Memory Care Services</p>
     <div className='mt-[1rem] text-center'>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Cognitive stimulation</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Safe and secure environment</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Family support and education</p>
    </div>
      <button className='py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] mt-[1.5rem] rounded-[32px]'>Learn more</button>
       </div>
      </div>
    </div>
  )
}

export default services
