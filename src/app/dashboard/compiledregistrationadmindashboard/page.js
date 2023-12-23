import React from 'react'
import { MdWindow } from "react-icons/md";
import Link from 'next/link';

const page = () => {
  return (
    <div className='grid grid-cols-10 relative pb-[3rem]'>
        <div className='absolute top-0 mt-[5rem] w-full h-[1px] bg-[#c2c2c241]'></div>
      <div className='col-span-2 bg-[#CECECE80] h-[100vh] pl-[5vw] py-[1rem] sticky top-0'>
      <img src='/Images/home/LOGO.png' alt='' className='mr-auto'/>
      <div className=' flex flex-col mt-[30vh] gap-[1rem]'>
      <Link href='/dashboard/compiledregistrationadmindashboard'><div className='flex flex-row gap-[0.5rem] items-center cursor-pointer'>
            <MdWindow className='text-[15px] text-[#474973]'/>
            <p className='font-medium text-[#474973] text-[16px]'>Dashboard</p>
        </div></Link>
        <Link href='/dashboard/compiledregistrationadmindashboard/data'><div className='flex flex-row gap-[0.5rem] items-center cursor-pointer'>
            <img src='/Images/home/mail-sm.png' alt='' className='w-[13px] h-[13px]'/>
            <p className='font-medium text-[#474973] text-[16px]'>Emails</p>
        </div></Link>
        
      </div>
      </div>
      <div className='col-span-8 bg-white h-[100vh] px-[5vw] py-[1rem]'>
      <div className='w-full flex justify-end'><p className='text-[#373737] font-semibold text-[25px] ml-auto text-right'>Administrator</p></div>
      <div className='flex flex-row justify-between items-center mt-[6rem]'>
       <div className='flex flex-col w-[50%]'>
        <p className='font-semibold text-[30px] text-[#1B1B1E]'>Welcome Admin!</p>
        <p className='font-normal text-[20px] text-[#1B1B1E]'>Check for new messages</p>
       </div>
       <img src='/Images/home/Rectangle 3463287.svg' alt='' className='w-[50%]'/>
      </div>
      </div>
    </div>
  )
}

export default page
