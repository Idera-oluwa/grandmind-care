import React from 'react'
import Link from 'next/link';

const staff = () => {
  return (
    <div className='mt-[5rem] h-[20rem] md:h-auto w-full relative'>
      <img src='Images/staffing/our-staff-banner.png' alt='' className='object-cover h-full w-full rounded-[10px]'/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center'>
        <p className='text-[35px] md:text-[40px] font-semibold text-white'>Our Staff</p>
        <p className='text-[16px] md:text-[20px] font-semibold text-white mt-[1rem] w-[95%] md:w-[755px] text-center'>Welcome to Grandmind Care, our journey is fueled by a deep commitment to enhancing lives through compassionate care </p>
        <Link href='/about#register'><button className='bg-[#474973] rounded-[22px] py-[10px] lg:py-[12px] px-[18px] lg:px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[3rem] hover:text-black border border-transparent hover:border-[#1B1B1E] hover:bg-transparent transition ease-in-out delay-300'>Register today</button></Link>
      </div>
    </div>
  )
}

export default staff
