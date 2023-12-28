import React from 'react'
import Link from 'next/link';

const hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center'>
     <div className='w-full md:w-[50%]'>
      <h1 className='font-bold text-[30px] md:text-[32px] text-[#474973]'>Our <span className='font-bold text-[#1B1B1E]'>Comprehensive</span></h1>
      <h1 className='font-bold text-[30px] md:text-[32px] text-[#474973]'><span className='font-bold text-[#1B1B1E]'>Care</span> Services</h1>
      <p className='text-[14px] font-normal text-[#1B1B1E] leading-[26.33px] w-[90%] mt-[1rem]'>At Grandmind Care, we understand that each individual has unique needs, and we are dedicated to providing personalised and compassionate care. Our range of care services is designed to enhance the well-being and quality of life for your loved ones.</p>
      <Link href='/about#register'><button className='bg-[#474973] rounded-[22px] py-[12px] px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[1rem] border border-transparent hover:bg-[hsl(237,24%,25%)] transition ease-in-out delay-500'>Register today</button></Link>
      <div className='flex flex-row gap-[10px] mt-[1rem]'>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/home/mail-sm.png' alt='' className='w-[18px] h-[16px]'/>
         <a href="mailto:info@grandmind.co.uk"><p className='text-[14px] md:text-[14px] font-normal text-[#474973]'>info@grandmind.co.uk</p></a>
       </div>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/home/whatsapp-icon.png' alt='' className='w-[17px] h-[17px]'/>
         <a href='https://wa.me/447903220307' target="_blank" rel="noreferrer"><p className='text-[14px] md:text-[14px] font-normal text-[#474973]'>07903220307</p></a>
       </div>
       </div>
     </div>
     <img src='Images/services/our-services-image.png' alt='' className='w-full md:w-[50%] mt-[3rem] md:mt-full'/>
    </div>
  )
}

export default hero
