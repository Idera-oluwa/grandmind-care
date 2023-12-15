import React from 'react'
import Link from 'next/link';

const hero = () => {
  return (
    <div className='flex flex-row items-center'>
     <div className='w-[50%]'>
      <h1 className='font-bold text-[40px] text-[#474973]'>Our <span className='font-bold text-[#1B1B1E]'>Comprehensive</span></h1>
      <h1 className='font-bold text-[40px] text-[#474973]'><span className='font-bold text-[#1B1B1E]'>Care</span> Services</h1>
      <p className='text-[16px] font-normal text-[#1B1B1E] leading-[26.33px] w-[90%] mt-[1rem]'>At Grandmind Care, we understand that each individual has unique needs, and we are dedicated to providing personalised and compassionate care. Our range of care services is designed to enhance the well-being and quality of life for your loved ones.</p>
      <Link href='/about#register'><button className='bg-[#474973] rounded-[22px] py-[12px] px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[2rem] hover:text-black border border-transparent hover:border-[#1B1B1E] hover:bg-transparent transition ease-in-out delay-300'>Register today</button></Link>
     </div>
     <img src='Images/services/our-services-image.png' alt=''/>
    </div>
  )
}

export default hero
