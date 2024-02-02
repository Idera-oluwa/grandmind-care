import React from 'react'

const apply = () => {
  return (
    <div className='md:bg-[#2A2C58] w-full py-[3rem] mt-[7rem] md:mt-[10rem] relative mb-[7rem] md:mb-[12rem]' id="apply">
      <div className='w-[90vw] lg:w-[80vw]  2xl:max-w-[1440px] mx-auto md:flex md:flex-row items-center justify-between'>
        <div className='md:w-[45%]'>
            <p className='text-[24px] text-[#1B1B1E] md:text-[40px] md:text-[#FFFFFF] text-semibold leading-[48.41px] text-center md:text-left'>Ready to join us?</p>
            <p className='text-[12px] md:text-[20px] text-[#1B1B1E] md:text-[#FFFFFF] text-normal leading-[24.2px] md:mt-[1rem] text-center md:text-left w-[90%] mx-auto md:w-full'>Get started by clicking the button below to send your CV and cover letter.</p>
            <a href="mailto:recruitment@grandmindcare.co.uk"><button className='bg-[#474973] rounded-[20px] h-[42px] w-[128px] hidden md:flex justify-center items-center text-[#F6F8FF] text-[15px] font-bold mt-[2rem]'>Apply Now</button></a>
            <div className='py-[1rem] px-[2rem] bg-[#FFFFFF] w-[336px] h-[241px] mt-[2rem] rounded-[10px] hidden md:block'>
            <div className="w-full h-[11px] rounded-[20px] bg-[#FFD166]"></div>
            <div className="flex flex-col mt-[1rem] gap-[0.5rem]">
                <p className="text-[16px] font-bold text-[#1B1B1E]">
                Security
                </p>
                <p className="text-[16px] font-bold text-[#1B1B1E]">
                Kitchen Assistants
                </p>
                <p className="text-[16px] font-bold text-[#1B1B1E]">
                Support workers
                </p>
                <p className="text-[16px] font-bold text-[#1B1B1E]">
                Domestic workers
                </p>
                <p className="text-[16px] font-bold text-[#1B1B1E]">
                Healthcare Assistants
                </p>
                <img src='/Images/staffing/stars.png' alt='' className='w-[103.44px] h-[19px]'/>
              </div>
            </div>
        </div>
        <div className='md:w-[45%] flex flex-col gap-[1rem] mt-[2rem] md:mt-0'>
          <div className='flex flex-row gap-[1rem]'>
          <img src='/Images/staffing/applying.png' alt=''  className='w-[40%] h-[160px]'/>
          <img src='/Images/staffing/applying2.png' alt='' className='w-[60%] h-[160px]'/>
          </div>
          <div className='flex flex-row gap-[1rem]'>
          <img src='/Images/staffing/applying3.png' alt='' className='w-[40%] h-[160px]'/>
          <img src='/Images/staffing/applying4.png' alt=''className='w-[60%] h-[160px]'/>
          </div>
        </div>
        <div className='py-[1rem] px-[2rem] bg-[#FFFFFF] w-[90%] mx-auto h-[241px] mt-[2rem] rounded-[10px] md:hidden shadow-shadow1'>
            <div className="w-full h-[11px] rounded-[20px] bg-[#FFD166]"></div>
            <div className="flex flex-col mt-[1rem] gap-[0.5rem]">
                <p className="text-[16px] font-bold text-[#1B1B1E]">
                Security
                </p>
                <p className="text-[16px] font-bold text-[#1B1B1E]">
                Kitchen Assistants
                </p>
                <p className="text-[16px] font-bold text-[#1B1B1E]">
                Support workers
                </p>
                <p className="text-[16px] font-bold text-[#1B1B1E]">
                Domestic workers
                </p>
                <p className="text-[16px] font-bold text-[#1B1B1E]">
                Healthcare Assistants
                </p>
                <img src='/Images/staffing/stars.png' alt='' className='w-[103.44px] h-[19px]'/>
              </div>
            </div>
            <div className='w-full flex justify-center md:hidden'>
            <a href="mailto:recruitment@grandmindcare.co.uk"><button className='bg-[#474973] rounded-[20px] h-[42px] w-[128px] md:hidden justify-center items-center text-[#F6F8FF] text-[15px] font-bold mt-[2rem] mx-auto'>Apply Now</button></a>
            </div>
      </div>
    </div>
  )
}

export default apply;
