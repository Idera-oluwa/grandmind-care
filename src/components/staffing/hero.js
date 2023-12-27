import React from 'react'
import Link from 'next/link';

const hero = () => {
  return (
<div className='flex flex-row mt-[5rem] items-center'>
      <div className='w-full md:w-[43%]'>
       <p className='text-[32px] md:text-[35px] lg:text-[40px] font-bold text-black leading-[55.55px]'>Explore our flexible</p>
       <p className='text-[32px] md:text-[35px] lg:text-[40px] font-bold text-black leading-[55.55px]'><span className='text-[#32936F]'>staffing</span> options</p>
       <img src='Images/home/underline.png' alt=''/>
       <img src='Images/staffing/staffing1.png' alt='' className='md:hidden w-full mt-[1rem]'/>
       <p className='text-[16px] font-medium leading-[21.78px] w-[95%] lg:w-[80%] mt-[1rem] lg:mt-[1rem]'>We recognize the importance of work-life balance. Discover opportunities with flexible scheduling options that suit your availability.</p>
       <Link href='/about#register'><button className='bg-[#474973] rounded-[22px] py-[10px] lg:py-[12px] px-[18px] lg:px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[1rem] border border-transparent hover:bg-[hsl(237,24%,25%)] transition ease-in-out delay-500'>Register today</button></Link>
       <div className='flex flex-row gap-[10px] mt-[1rem]'>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/home/mail-sm.png' alt='' className='w-[18px] h-[16px]'/>
         <a href="mailto:info@grandmind.co.uk"><p className='text-[12px] md:text-[14px] font-normal text-[#474973]'>info@grandmind.co.uk</p></a>
       </div>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/home/whatsapp-icon.png' alt='' className='w-[17px] h-[17px]'/>
         <a href='tel:+442034177797'><p className='text-[12px] md:text-[14px] font-normal text-[#474973]'>02034177797</p></a>
       </div>
       </div>
      </div>
       <img src='Images/staffing/staffing1.png' alt='' className='hidden md:grid w-[57%]'/>
    </div>
  )
}

export default hero
