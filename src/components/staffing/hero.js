import React from 'react'

const hero = () => {
  return (
<div className='flex flex-row mt-[5rem] items-center'>
      <div className='w-[50%]'>
       <p className='text-[45px] font-bold text-black leading-[55.55px]'>Explore our flexible</p>
       <p className='text-[45px] font-bold text-black leading-[55.55px]'><span className='text-[#32936F]'>staffing</span> options</p>
       <img src='Images/underline.png' alt=''/>
       <p className='text-[18px] font-medium leading-[21.78px] w-[80%] mt-[2rem]'>We recognize the importance of work-life balance. Discover opportunities with flexible scheduling options that suit your availability.</p>
       <button className='bg-[#474973] rounded-[22px] py-[12px] px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] mt-[2rem]'>Register today</button>
      </div>
       <img src='Images/staffing/staffing1.png' alt=''/>
    </div>
  )
}

export default hero
