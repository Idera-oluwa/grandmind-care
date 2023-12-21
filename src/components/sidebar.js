"use client"
import React from 'react'
import {FaTimes} from 'react-icons/fa'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const sidebar = ({show,hideSidebar}) => {
    const pathname=usePathname()
  return (
    <div className={`lg:hidden fixed top-0 transition-all ease-in-out duration-500 container transform -translate-x-full ${show && `transform translate-x-0`} bg-white h-[100vh] z-[10000]`}>
      <div className='flex flex-row items-center justify-between w-[90vw] mx-auto mt-[2rem]'>
      <Link href='/'><img src='Images/home/LOGO.png' alt='' className=''/></Link>
       <FaTimes className='text-[40px] cursor-pointer text-red-700' onClick={hideSidebar}/>
      </div>
      <ul className='flex flex-col mt-[2rem]'>
      <Link href='/'><li className={`text-[14px] transition ease-in-out delay-300 font-medium py-[15px] px-[15px] hover:px-[20px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer ${pathname==="/" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>HOME</li></Link>
        <Link href='/about'><li className={`transition ease-in-out delay-300 text-[14px] font-medium py-[15px] px-[15px] hover:px-[20px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer ${pathname==="/about" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>ABOUT US</li></Link>
        <Link href='/services'><li className={`text-[14px] transition ease-in-out delay-300 font-medium py-[15px] px-[15px] hover:px-[20px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer ${pathname==="/services" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>OUR SERVICES</li></Link>
        <Link href='/staffing'><li className={`text-[14px] transition ease-in-out delay-300 font-medium py-[15px] px-[15px] hover:px-[20px]  hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer ${pathname==="/staffing" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>STAFFING</li></Link>
        <Link href='/contact'><li className={`text-[14px] transition ease-in-out delay-300 font-medium py-[15px] px-[15px] hover:px-[20px]  hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer ${pathname==="/contact" ? "bg-[#252760] text-[#FFFFFF]" :"bg-transparent text-[#1B1B1E] "}`}>CONTACT US</li></Link>
      </ul>
      <div className='flex flex-row gap-[8px] items-center justify-center mt-[3rem]'>
      <img src='Images/home/facebook-logo.png' alt=''/>
      <a href="mailto:info@grandmind.co.uk"><img src='Images/home/mail-logo.png' alt=''/></a>
      <a href='tel:+442034177797'><img src='Images/home/phone-logo.png' alt=''/></a>
      </div>
    </div>
  )
}

export default sidebar
