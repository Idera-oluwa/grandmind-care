import React from 'react'
import Link from 'next/link';

const contact = () => {
  return (
    <div className='mt-[10rem] w-full h-[520px] bg-[#3066BE] border-2 border-[#5d98f7] flex flex-col items-center justify-center px-[1rem] rounded-[10px]'>
      <h1 className='text-[35px] md:text-[40px] font-semibold text-white text-center'>Contact the team</h1>
      <p className='text-[14px] md:text-[14px] font-semibold text-white mt-[1rem] w-[95%] md:w-[667px] text-center'> Get to know the faces and stories of the individuals working tirelessly to make our platform a trusted and compassionate space.</p>
      <Link href='/contact'><div className='w-[200px] md:w-[274px] bg-[#474973] h-[70px] md:h-[79px] rounded-[65px] mt-[2rem] flex flex-row gap-[1rem] justify-center items-center cursor-pointer'>
        <p className='text-[16px] md:text-[20px] font-semibold text-white'>Contact Us</p>
        <img src='Images/about/arrow-right.png' alt=''/>
      </div></Link>
    </div>
  )
}

export default contact
