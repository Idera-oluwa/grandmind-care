import React from 'react'
import Link from 'next/link';

const navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between w-[90vw] mx-auto mt-[2rem]'>
      <img src='Images/LOGO.png' alt=''/>
      <ul className='flex flex-row gap-[8px] items-center'>
      <Link href='/'><li className='text-[14px] text-center text-[#1B1B1E] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer'>HOME</li></Link>
        <Link href='/about'><li className='text-[14px] text-center text-[#1B1B1E] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer'>ABOUT US</li></Link>
        <Link href='/services'><li className='text-[14px] text-center text-[#1B1B1E] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer'>OUR SERVICES</li></Link>
        <li className='text-[14px] text-center text-[#1B1B1E] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer'>STAFFING</li>
        <li className='text-[14px] text-center text-[#1B1B1E] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer'>CONTACT US</li>
      </ul>
      <div className='flex flex-row gap-[8px] items-center'>
      <img src='Images/facebook-logo.png' alt=''/>
      <img src='Images/mail-logo.png' alt=''/>
      <img src='Images/phone-logo.png' alt=''/>
      </div>
    </div>
  )
}

export default navbar
