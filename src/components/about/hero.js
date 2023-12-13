import React from 'react'

const hero = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row gap-[20px]'>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/mail-sm.png' alt='' className='w-[18px] h-[16px]'/>
         <p className='text-[16px] font-normal text-[#474973]'>info@grandmind.co.uk</p>
       </div>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/phone-sm.png' alt='' className='w-[13px] h-[13px]'/>
         <p className='text-[16px] font-normal text-[#474973]'>02034177797</p>
       </div>
       </div>
       <h1 className='font-bold text-[40px] text-[#1B1B1E] mt-[1rem]'>Empowering <span className='text-[#474973]'>Care,</span></h1>
       <h1 className='font-bold text-[40px] text-[#1B1B1E]'>Empathy In Every Connection</h1>
       <p className='text-[16px] font-normal text-center text-[#1B1B1E] mt-[1rem] w-[669px]'>Welcome to Grandmind Care, our journey is fueled by a deep commitment to enhancing lives through compassionate care </p>
       <button className='bg-[#474973] rounded-[22px] py-[12px] px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[1rem]'>Register today</button>
    </div>
  )
}

export default hero
