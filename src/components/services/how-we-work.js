import React from 'react'

const howWeWork = () => {
  return (
    <div className='mt-[8rem] bg-[#252648] w-[90%] mx-auto flex flex-row relative h-[312px]'>
       <div className='w-[40%]'>
        <img src='Images/services/care4.png' alt='' className='absolute top-0 mt-[-3rem] left-0 ml-[3rem]' />
         <p className='font-medium text-[12px] text-[#F6F8FF] mt-[11rem] ml-[3rem]'>We conduct a thorough assessment to understand your loved one's unique needs. Based on the assessment, we create a personalised care plan tailored to individual requirement</p>
         <p className='font-medium text-[12px] text-[#F6F8FF] mt-[1rem] ml-[3rem]'>Our team is comprised of experienced caregivers who bring expertise and compassion to every interaction.</p>
       </div>
       <div className='w-[40%] ml-auto mr-[3rem] flex flex-col items-center'>
        <p className='font-extrabold text-[24px] text-white mt-[2rem] text-center'>How  We Work</p>
        <p className='font-semibold text-[12px] text-[#F6F8FF] mt-[1rem] text-center w-[356px]'>From initial assessments to ongoing support, our process is designed to ensure the best possible care</p>
        <img src='Images/services/care5.png' alt='' className='mt-[1rem]'/>
       </div>
    </div>
  )
}

export default howWeWork
