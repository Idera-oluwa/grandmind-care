import React from 'react'
import Link from 'next/link';

const domiciliary = () => {
  return (
    <div className='mt-[6rem]'>
     <h1 className='text-[24px] font-semibold text-[#1B1B1E] text-center'>Domiciliary Care Services</h1>
     <div className='mt-[2rem] relative h-[412px] w-[100%]'>
        <img src='Images/home/care-img.png' alt='' className='absolute z-10 w-full h-full object-cover'/>
        <div className='absolute z-50 w-full h-full bg-[#D9D9D933]'>
        <div className='flex flex-col md:flex-row w-full h-full items-center px-[3rem] justify-center'>
          <img src='Images/home/domiciliary-img.png' alt='' className='h-[250px] lg:h-[329px] w-[50%] hidden md:grid'/>
          <div className='flex flex-col ml-[3rem] w-[100%] md:w-[50%] '>
           <p className='font-medium text-[30px] md:text-[40px] text-[#FFFFFF]'>Trusted Professionals</p>
           <p className='font-normal text-[16px] text-[#FFFFFF]'>is to make this journey smoother for both caregivers and those in need of care.</p>
           <Link href='/about'><button className='bg-[#474973] py-[5px] flex items-center justify-center rounded-[32px] text-[15px] font-medium text-[#F6F8FF] w-[122px] mt-[2rem]'>Learn more</button></Link>
          </div>
        </div>
        </div>
     </div>
    </div>
  )
}

export default domiciliary
