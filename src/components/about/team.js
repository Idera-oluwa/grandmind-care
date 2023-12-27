import React from 'react'

const team = () => {
  return (
    <div className='mt-[10rem]'>
      <h1 className='text-[20px] font-semibold text-[#1B1B1E] text-center'>Meet The Team</h1>
      <p className='text-center w-[95%] lg:w-[833px] font-normal text-[14px] mt-[1rem] mx-auto'>Get to know the faces and stories of the individuals working tirelessly to make our platform a trusted and compassionate space.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] justify-between px-[5rem] gap-[2rem] md:gap-[1rem]'>
        <div>
            <img src='Images/about/President.png' alt='' className='mx-auto'/>
            <p className='font-bold text-[16px] text-[#1B1B1E] text-center mt-[1rem]'>HAPPY AKPEYI</p>
            <p className='font-medium text-[14px] text-[#48484A] text-center mt-[1rem]'>President</p>
        </div>
        <div>
            <img src='Images/about/Praise.png' alt='' className='mx-auto'/>
            <p className='font-bold text-[16px] text-[#1B1B1E] text-center mt-[1rem]'>PRAISE ASEMOTA</p>
            <p className='font-medium text-[14px] text-[#48484A] text-center mt-[1rem]'>Business Strategist</p>
        </div>
        <div>
            <img src='Images/about/Mitchell.png' alt='' className='mx-auto'/>
            <p className='font-bold text-[16px] text-[#1B1B1E] text-center mt-[1rem]'>MITCHELL JONES</p>
            <p className='font-medium text-[14px] text-[#48484A] text-center mt-[0.5rem]'>Care Coordinator</p>
        </div>
      </div>
    </div>
  )
}

export default team
