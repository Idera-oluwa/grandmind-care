import React from 'react'

const services = () => {
  return (
    <div className='mt-[4rem] w-[90%] mx-auto'>
      <div className='flex flex-row mt-[3rem] gap-[1rem] justify-between'>
       <div className='flex flex-col bg-[#F6F8FF] items-center w-[30%] py-[2rem] px-[2rem] shadow-shadow1 h-[319px]'>
         <img src='Images/home-icon.png' alt='' className='w-[30px] h-[28px]'/>
         <p className='font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]'>In-Home Elderly Care</p>
     <div className='mt-[1rem] text-center flex flex-col gap-[0.2rem]'>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Assistance with daily activities</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Medication management</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Companionship and emotional support</p>
    </div>
       </div>
       <div className='flex flex-col bg-[#F6F8FF] items-center w-[30%] py-[2rem] px-[2rem] shadow-shadow1 h-[319px]'>
         <img src='Images/heart-icon.png' alt='' className='w-[30px] h-[28px]'/>
         <p className='font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]'>Special Needs Support</p>
     <div className='mt-[1rem] text-center flex flex-col gap-[0.2rem]'>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Tailored care plans</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Therapeutic activities</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Emotional and behavioral support</p>
    </div>
       </div>
       <div className='flex flex-col bg-[#F6F8FF] items-center w-[30%] py-[2rem] px-[2rem] shadow-shadow1 h-[319px]'>
         <img src='Images/memory-care-icon.png' alt='' className='w-[30px] h-[28px]'/>
         <p className='font-semibold text-[18px] text-[#1B1B1E] mt-[1rem]'>Memory Care Services</p>
     <div className='mt-[1rem] text-center flex flex-col gap-[0.2rem]'>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Cognitive stimulation</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Safe and secure environment</p>
         <p className='text-[16px] font-normal text-[#1B1B1E]'>Family support and education</p>
    </div>
       </div>
      </div>
    </div>
  )
}

export default services