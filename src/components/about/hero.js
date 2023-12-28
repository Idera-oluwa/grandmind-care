import React from 'react'
import Link from 'next/link';

const hero = () => {
  return (
    <div className='flex flex-col items-center mt-[6rem]'>
      <div className='flex flex-row gap-[20px]'>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/home/mail-sm.png' alt='' className='w-[18px] h-[16px]'/>
         <a href="mailto:info@grandmind.co.uk"><p className='text-[14px] md:text-[14px] font-normal text-[#474973]'>info@grandmind.co.uk</p></a>
       </div>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='/Images/home/whatsapp-icon.png' alt='' className='w-[17px] h-[17px]'/>
         <a href='https://wa.me/447903220307' target="_blank" rel="noreferrer"><p className='text-[12px] md:text-[14px] font-normal text-[#474973]'>07903220307</p></a>
       </div>
       </div>
       <h1 className='font-bold text-[30px] md:text-[35px] lg:text-[40px] text-[#1B1B1E] mt-[1rem]'>Empowering <span className='text-[#474973]'>Care,</span></h1>
       <h1 className='font-bold text-[30px] md:text-[35px] lg:text-[40px] text-[#1B1B1E] text-center'>Empathy In Every Connection</h1>
       <p className='text-[14px] font-normal text-center text-[#1B1B1E] mt-[1rem] w-[95%] md:w-[669px]'>Welcome to Grandmind Care, our journey is fueled by a deep commitment to enhancing lives through compassionate care </p>
       <Link href='#register'> <button className='bg-[#474973] rounded-[22px] py-[10px] lg:py-[12px] px-[18px] lg:px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[2rem] border border-transparent hover:bg-[hsl(237,24%,25%)] transition ease-in-out delay-500'>Register today</button></Link>
    </div>
  )
}

export default hero
