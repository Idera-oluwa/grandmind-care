import React from 'react'

const staff = () => {
  return (
    <div className='mt-[5rem] h-[424px] w-full relative'>
      <img src='Images/staffing/our-staff-banner.png' alt=''/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center'>
        <p className='text-[40px] font-semibold text-white'>Our Staff</p>
        <p className='text-[20px] font-semibold text-white mt-[1rem] w-[755px] text-center'>Welcome to Grandmind Care, our journey is fueled by a deep commitment to enhancing lives through compassionate care </p>
        <button className='bg-[#474973] rounded-[22px] py-[12px] px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[3rem]'>Register today</button>
      </div>
    </div>
  )
}

export default staff
