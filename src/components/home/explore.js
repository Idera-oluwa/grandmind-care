import React from 'react'
import Link from 'next/link';

const explore = () => {
  return (
    <div className='flex flex-row mt-[5rem] items-center'>
      <div className='w-[50%]'>
       <p className='text-[45px] font-bold text-black leading-[55.55px]'>Explore our flexible</p>
       <p className='text-[45px] font-bold text-black leading-[55.55px]'><span className='text-[#32936F]'>staffing</span> options</p>
       <img src='Images/home/underline.png' alt=''/>
       <p className='text-[18px] font-medium leading-[21.78px] w-[80%] mt-[2rem]'>We recognize the importance of work-life balance. Discover opportunities with flexible scheduling options that suit your availability.</p>
       <Link href='/about'><button className='py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] rounded-[32px] mt-[1rem] hover:bg-[#474973] hover:border-transparent hover:text-[#FDFDFD] transition ease-in-out delay-300'>Learn more</button></Link>
      </div>
       <img src='Images/home/staffing.png' alt=''/>
    </div>
  )
}

export default explore
