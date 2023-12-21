"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBarsStaggered } from "react-icons/fa6"

const navbar = ({showSidebar}) => {
  const pathname=usePathname()
  return (
    <div className='w-full py-[2rem] fixed top-0 bg-white z-[1000] shadow-shadow4'>
        <div className='flex flex-row items-center justify-between w-[90vw] mx-auto'>
        <Link href='/'><img src='Images/home/LOGO.png' alt=''/></Link>
      <ul className='hidden lg:flex flex-row gap-[8px] items-center'>
      <Link href='/'><li className={`text-[14px] text-center transition ease-in-out delay-300 font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${pathname==="/" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>HOME</li></Link>
        <Link href='/about'><li className={`transition ease-in-out delay-300 text-[14px] text-center font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${pathname==="/about" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>ABOUT US</li></Link>
        <Link href='/services'><li className={`text-[14px] text-center transition ease-in-out delay-300 font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${pathname==="/services" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>OUR SERVICES</li></Link>
        <Link href='/staffing'><li className={`text-[14px] text-center transition ease-in-out delay-300 font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${pathname==="/staffing" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>STAFFING</li></Link>
        <Link href='/contact'><li className={`text-[14px] text-center transition ease-in-out delay-300 font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${pathname==="/contact" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>CONTACT US</li></Link>
      </ul>
      <div className='hidden lg:flex flex-row gap-[8px] items-center'>
      <img src='Images/home/facebook-logo.png' alt=''/>
      <a href="mailto:info@grandmind.co.uk"><img src='Images/home/mail-logo.png' alt=''/></a>
      <a href='tel:+442034177797'><img src='Images/home/phone-logo.png' alt=''/></a>
      </div>
      <FaBarsStaggered className='text-[30px] lg:hidden cursor-pointer' onClick={showSidebar}/>
    </div>
    </div>
  )
}

export default navbar
