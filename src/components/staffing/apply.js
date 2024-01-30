import React from 'react'

const apply = () => {
  return (
    <div className='md:bg-[#2A2C58] w-full py-[3rem] mt-[7rem] md:mt-[10rem] relative mb-[7rem] md:mb-[12rem]'>
      <div className='w-[90vw]  2xl:max-w-[1440px] mx-auto md:flex md:flex-row md:justify-between'>
        <div className='md:w-[50%]'>
            <p className='text-[24px] text-[#1B1B1E] md:text-[40px] md:text-[#FFFFFF] text-semibold leading-[48.41px] text-center md:text-left'>Ready to join us?</p>
            <p className='text-[12px] md:text-[20px] text-[#1B1B1E] md:text-[#FFFFFF] text-normal leading-[24.2px] md:mt-[1rem] text-center md:text-left w-[90%] mx-auto md:w-full'>Send your CV and cover letter by clicking the button below to start your application.</p>
            <img src='/Images/staffing/health2.png' alt='' className='w-full h-[265px] mt-[2rem] md:hidden'/>
            <img src='/Images/staffing/support2.png' alt='' className='w-full h-[265px] mt-[2rem] md:hidden'/>
            <a href="mailto:recruitment@grandmindcare.co.uk"><button className='bg-[#474973] rounded-[20px] h-[42px] w-[128px] flex justify-center items-center text-[#F6F8FF] text-[15px] font-bold mt-[2rem]'>Apply Now</button></a>
        </div>
        <img src='/Images/staffing/support.png' alt='' className='hidden md:grid'/>
      </div>
      <img src='/Images/staffing/health.png' alt='' className='absolute bottom-0 left-0 right-0 mx-auto mb-[-150px] hidden lg:grid'/>
    </div>
  )
}

export default apply;
