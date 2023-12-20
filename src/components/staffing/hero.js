import React from 'react'
import Link from 'next/link';

const hero = () => {
  return (
<div className='flex flex-row mt-[5rem] items-center'>
      <div className='w-full md:w-[50%]'>
       <p className='text-[32px] md:text-[35px] lg:text-[45px] font-bold text-black leading-[55.55px]'>Explore our flexible</p>
       <p className='text-[32px] md:text-[35px] lg:text-[45px] font-bold text-black leading-[55.55px]'><span className='text-[#32936F]'>staffing</span> options</p>
       <img src='Images/home/underline.png' alt=''/>
       <img src='Images/staffing/staffing1.png' alt='' className='md:hidden w-full mt-[1rem]'/>
       <p className='text-[18px] font-medium leading-[21.78px] w-[95%] lg:w-[80%] mt-[1rem] lg:mt-[2rem]'>We recognize the importance of work-life balance. Discover opportunities with flexible scheduling options that suit your availability.</p>
       <Link href='/about#register'><button className='bg-[#474973] rounded-[22px] py-[10px] lg:py-[12px] px-[18px] lg:px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[2rem] hover:text-black border border-transparent hover:border-[#1B1B1E] hover:bg-transparent transition ease-in-out delay-300'>Register today</button></Link>
      </div>
       <img src='Images/staffing/staffing1.png' alt='' className='hidden md:grid w-[50%]'/>
    </div>
  )
}

export default hero
