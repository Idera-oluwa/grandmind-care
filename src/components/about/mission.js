import React from 'react'
import Link from 'next/link';

const mission = () => {
  return (
    <div className='mt-[4rem] relative w-full'>
      <img src='Images/about/mission-img2.png' alt=''/>
      <div className='absolute w-full h-full top-0 flex flex-col items-center justify-center'>
        <h1 className='font-bold text-[40px] text-white'>Our Mission</h1>
        <p className='text-[20px] font-medium text-white w-[865px] text-center'>Welcome to Grandmind Care, our journey is fueled by a deep commitment to enhancing lives through compassionate care </p>
        <Link href='/about'><button className='bg-[#474973] py-[5px] flex items-center justify-center rounded-[32px] text-[15px] font-medium text-[#F6F8FF] w-[122px] mt-[2rem]'>Learn more</button></Link>
      </div>
    </div>
  )
}

export default mission
