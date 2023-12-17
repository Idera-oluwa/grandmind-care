import React from 'react'

const faq = () => {
  return (
    <div>
      <h1 className='text-[24px] font-semibold text-[#1B1B1E] text-center mt-[6rem]'>Frequently Asked Quesions</h1>
      <div className='flex flex-col mt-[3rem]'>
        <div className='flex flex-row gap-[1rem] md:gap-[3rem] items-center pb-[15px] border-b border-[#FFD166]'>
        <img src='Images/home/dot.png' alt='' className='w-[12px] h-[12px]'/>
        <div className='flex flex-col'>
         <p className='text-[16px] font-semibold text-[#353538]'>What is Grandmind Care LTD?</p>
         <p className='text-[14px] font-medium leading-[16.94px] text-[#353538] mt-[1rem]'>Grandmind Care is a dedicated care services platform that connects carers with family needs, so whether you’re a carer looking for opportunities or a family seeking reliable care,our platform makes it easier.</p>
        </div>
        </div>
        <div className='flex flex-row gap-[1rem] md:gap-[3rem] items-center pb-[15px] border-b border-[#FFD166] mt-[1rem]'>
        <img src='Images/home/dot.png' alt='' className='w-[12px] h-[12px]'/>
        <div className='flex flex-col'>
         <p className='text-[16px] font-semibold text-[#353538]'>How can I create an account on Grandmind Care?</p>
         <p className='text-[14px] font-medium leading-[16.94px] text-[#353538] mt-[1rem]'>Creating an account is easy, click on the register button and follow the prompts, complete your profile to get started.</p>
        </div>
        </div>
        <div className='flex flex-row gap-[1rem] md:gap-[3rem] items-center pb-[15px] border-b border-[#FFD166] mt-[1rem]'>
        <img src='Images/home/dot.png' alt='' className='w-[12px] h-[12px]'/>
        <div className='flex flex-col'>
         <p className='text-[16px] font-semibold text-[#353538]'>What is Grandmind Care LTD?</p>
         <p className='text-[14px] font-medium leading-[16.94px] text-[#353538] mt-[1rem]'>Grandmind Care is a dedicated caregiving platform that connects caregivers with family needs, so whether you’re a caregiver looking for opportunities or a family seeking reliable care,our platform makes it easier by fostering meaningful connections</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default faq
