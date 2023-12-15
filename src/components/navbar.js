"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navbar = () => {
  const pathname=usePathname()
  return (
    <div className='flex flex-row items-center justify-between w-[90vw] mx-auto mt-[2rem]'>
      <img src='Images/LOGO.png' alt=''/>
      <ul className='flex flex-row gap-[8px] items-center'>
      <Link href='/'><li className={`text-[14px] text-center transition ease-in-out delay-300 font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${pathname==="/" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>HOME</li></Link>
        <Link href='/about'><li className={`transition ease-in-out delay-300 text-[14px] text-center font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${pathname==="/about" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>ABOUT US</li></Link>
        <Link href='/services'><li className={`text-[14px] text-center transition ease-in-out delay-300 font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${pathname==="/services" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>OUR SERVICES</li></Link>
        <Link href='/staffing'><li className={`text-[14px] text-center transition ease-in-out delay-300 font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${pathname==="/staffing" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>STAFFING</li></Link>
        <Link href='/contact'><li className={`text-[14px] text-center transition ease-in-out delay-300 font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${pathname==="/contact" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>CONTACT US</li></Link>
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
