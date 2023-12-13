import React from 'react'

const explore = () => {
  return (
    <div className='flex flex-row mt-[5rem] items-center'>
      <div className='w-[50%]'>
       <p className='text-[45px] font-bold text-black leading-[55.55px]'>Explore our flexible</p>
       <p className='text-[45px] font-bold text-black leading-[55.55px]'><span className='text-[#32936F]'>staffing</span> options</p>
       <img src='Images/underline.png' alt=''/>
       <p className='text-[18px] font-medium leading-[21.78px] w-[80%] mt-[2rem]'>We recognize the importance of work-life balance. Discover opportunities with flexible scheduling options that suit your availability.</p>
       <button className='py-[5px] px-[20px] border border-[#1B1B1E] text-[#1B1B1E] rounded-[32px] mt-[1rem]'>Learn more</button>
      </div>
       <img src='Images/explore-img.png' alt=''/>
    </div>
  )
}

export default explore
