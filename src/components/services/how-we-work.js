import React from 'react'

const howWeWork = () => {
  return (
    <div className='mt-[8rem] bg-[#252648] w-full lg:w-[90%] mx-auto flex flex-col-reverse lg:flex-row relative h-auto py-[2rem] lg:py-0 rounded-[10px]'>
       <div className='w-full lg:w-[40%]'>
        <img src='Images/services/care4.png' alt='' className='hidden lg:grid lg:absolute top-0 mt-[-3rem] left-0 ml-[3rem]' />
         <p className='font-medium text-[12px] text-[#F6F8FF] mt-[2rem] lg:mt-[11rem] px-[1rem] lg:ml-[3rem]'>We conduct a thorough assessment to understand your loved one's unique needs. Based on the assessment, we create a personalised care plan tailored to individual requirement</p>
         <p className='font-medium text-[12px] text-[#F6F8FF] mt-[1rem] px-[1rem] lg:ml-[3rem]'>Our team is comprised of experienced caregivers who bring expertise and compassion to every interaction.</p>
       </div>
       <div className='w-full lg:w-[40%] ml-auto mr-[3rem] flex flex-col items-center'>
        <p className='font-extrabold text-[24px] text-white mt-[2rem] text-center'>How  We Work</p>
        <p className='font-semibold text-[12px] text-[#F6F8FF] mt-[1rem] text-center w-full md:w-[356px]'>From initial assessments to ongoing support, our process is designed to ensure the best possible care</p>
        <img src='Images/services/care5.png' alt='' className='mt-[1rem] w-[95%] lg:w-auto mx-auto'/>
       </div>
    </div>
  )
}

export default howWeWork
