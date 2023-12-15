import React from 'react'
import Link from 'next/link';

const hero = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row gap-[20px]'>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/home/mail-sm.png' alt='' className='w-[18px] h-[16px]'/>
         <a href="mailto:info@grandmind.co.uk"><p className='text-[16px] font-normal text-[#474973]'>info@grandmind.co.uk</p></a>
       </div>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/home/phone-sm.png' alt='' className='w-[13px] h-[13px]'/>
         <a href='tel:+442034177797'><p className='text-[16px] font-normal text-[#474973]'>02034177797</p></a>
       </div>
       </div>
       <h1 className='font-bold text-[40px] text-[#1B1B1E] mt-[1rem]'>Empowering <span className='text-[#474973]'>Care,</span></h1>
       <h1 className='font-bold text-[40px] text-[#1B1B1E]'>Empathy In Every Connection</h1>
       <p className='text-[16px] font-normal text-center text-[#1B1B1E] mt-[1rem] w-[669px]'>Welcome to Grandmind Care, our journey is fueled by a deep commitment to enhancing lives through compassionate care </p>
       <Link href='#register'> <button className='bg-[#474973] rounded-[22px] py-[12px] px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[1rem] border border-transparent hover:border-[#1B1B1E] hover:text-black hover:bg-transparent transition ease-in-out delay-300'>Register today</button></Link>
    </div>
  )
}

export default hero
