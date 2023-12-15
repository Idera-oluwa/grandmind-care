import React from 'react'
import Link from 'next/link';

const hero = () => {
  return (
<div className='flex flex-row mt-[5rem] items-center'>
      <div className='w-[50%]'>
       <p className='text-[45px] font-bold text-black leading-[55.55px]'>Explore our flexible</p>
       <p className='text-[45px] font-bold text-black leading-[55.55px]'><span className='text-[#32936F]'>staffing</span> options</p>
       <img src='Images/underline.png' alt=''/>
       <p className='text-[18px] font-medium leading-[21.78px] w-[80%] mt-[2rem]'>We recognize the importance of work-life balance. Discover opportunities with flexible scheduling options that suit your availability.</p>
       <Link href='/about#register'><button className='bg-[#474973] rounded-[22px] py-[12px] px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[2rem] hover:text-black border border-transparent hover:border-[#1B1B1E] hover:bg-transparent transition ease-in-out delay-300'>Register today</button></Link>
      </div>
       <img src='Images/staffing/staffing1.png' alt=''/>
    </div>
  )
}

export default hero
