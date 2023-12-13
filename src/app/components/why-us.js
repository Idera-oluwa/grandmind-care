import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='mt-[4rem]'>
      <h1 className='text-[24px] font-semibold text-[#1B1B1E] text-center'>Why Choose Us</h1>
      <div className='mt-[2rem]'>
        <div className='bg-[#474973D4] w-full grid grid-cols-3 py-[1rem]'>
          <div className='col-span-1 border-r-2 border-[#FFD166] px-[2rem]'><img src='Images/patient1.png' alt='' className=''/></div>
          <div className='col-span-1 border-r-2 border-[#FFD166] px-[2rem]'><img src='Images/patient2.png' alt='' className=''/></div>
          <div className='col-span-1 px-[2rem]'><img src='Images/patient3.png' alt='' className=''/></div>
        </div>
        <div className='grid grid-cols-3'>
        <div className='col-span-1 px-[1rem]'>
         <p className='text-[30px] font-semibold text-[#1B1B1E] mt-[0.5rem]'>Personalised Care Plans</p>
         <p className='text-[18px] font-medium text-[#1B1B1E] leading-[21.78px] mt-[1.5rem]'>We design individualized care plans to ensure your loved ones receive the attention and support they deserve</p>
         <div className='flex flex-row items-center justify-between mt-[1.5rem]'>
         <button className='py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] rounded-[32px]'>Learn more</button>
         <img src='Images/Grandmind-care.png' alt='' className='w-[38px] h-[38px] mr-[1rem]'/>
         </div>
        </div>
        <div className='col-span-1 px-[1rem]'>
         <p className='text-[30px] font-semibold text-[#1B1B1E] mt-[0.5rem]'>Skilled Professionals</p>
         <p className='text-[18px] font-medium text-[#1B1B1E] leading-[21.78px] mt-[1.5rem]'>Our experienced and trained caregivers are committed to providing quality assistance with a focus on dignity and respect.</p>
         <div className='flex flex-row items-center justify-between mt-[1.5rem]'>
         <button className='py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] rounded-[32px]'>Learn more</button>
         <img src='Images/Grandmind-care.png' alt='' className='w-[38px] h-[38px] mr-[1rem]'/>
         </div>
        </div>
        <div className='col-span-1 px-[1rem]'>
         <p className='text-[30px] font-semibold text-[#1B1B1E] mt-[0.5rem]'>Comprehensive Support</p>
         <p className='text-[18px] font-medium text-[#1B1B1E] leading-[21.78px] mt-[1.5rem]'>We design individualized care plans to ensure your loved ones receive the attention and support they deserve</p>
         <div className='flex flex-row items-center justify-between mt-[1.5rem]'>
         <button className='py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] rounded-[32px]'>Learn more</button>
         <img src='Images/Grandmind-care.png' alt='' className='w-[38px] h-[38px] mr-[1rem]'/>
         </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
