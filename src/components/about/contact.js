import React from 'react'

const contact = () => {
  return (
    <div className='mt-[5rem] w-full h-[520px] bg-[#3066BE] border-2 border-[#5d98f7] flex flex-col items-center justify-center'>
      <h1 className='text-[80px] font-semibold text-white'>Contact the team</h1>
      <p className='text-[20px] font-semibold text-white mt-[1rem] w-[667px] text-center'> Get to know the faces and stories of the individuals working tirelessly to make our platform a trusted and compassionate space.</p>
      <div className='w-[274px] bg-[#474973] h-[79px] rounded-[65px] mt-[2rem] flex flex-row gap-[1rem] justify-center items-center cursor-pointer'>
        <p className='text-[20px] font-semibold text-white'>Contact Us</p>
        <img src='Images/about/arrow-right.png' alt=''/>
      </div>
    </div>
  )
}

export default contact
