import React from 'react'

const hero = () => {
  return (
    <div className='flex flex-row mt-[3rem]'>
        {/* Left hand side */}
     <div className='w-[50%] relative'>
       <div className='flex flex-row gap-[20px]'>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/mail-sm.png' alt='' className='w-[18px] h-[16px]'/>
         <p className='text-[16px] font-normal text-[#474973]'>info@grandmind.co.uk</p>
       </div>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/phone-sm.png' alt='' className='w-[13px] h-[13px]'/>
         <p className='text-[16px] font-normal text-[#474973]'>02034177797</p>
       </div>
       </div>
       <h1 className='text-[40px] font-bold leading-[48.41px] text-[#1B1B1E] mt-[1.5rem]'><span className='text-[#474973]'>Welcome</span> To <span className='text-[#474973]'>Your</span></h1>
       <i className='text-[40px] font-bold leading-[48.41px] text-[#1B1B1E] mt-[48px]'>No 1 Carer <span className='text-[#474973]'>Service</span> </i>
       <p className='text-[16px] leading-[25.6px] text-[#1B1B1E] font-normal w-[80%] mt-[1.5rem]'>We're delighted to welcome you to <span className='text-[#474973] font-semibold'>Grandmind Care LTD</span>, where compassionate care meets cutting-edge convenience. Here, you’ll find a supportive community,valuable resources, and a seamless interaction with our professional carers.</p>
       <div className='flex flex-row mt-[1.5rem] gap-[10px]'>
        <button className='bg-[#474973] rounded-[22px] py-[12px] px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px]'>Register today</button>
        <button className='bg-transparent rounded-[22px] py-[12px] px-[20px] text-[15px] font-medium text-black border border-[#1B1B1E] tracking-[1px]'>Learn more</button>
       </div>
       <img src='Images/Star 6.png' alt='' className='absolute bottom-0 mb-[-3rem] left-0 right-0 ml-auto mr-[4rem]'/>
     </div>
     {/* Right hand side */}
     <div className='w-[50%]  border-l border-[#47497380] pl-[2rem]'>
       <img src='Images/hero-image.png' alt=''/>
       <h1 className='text-[32px] font-semibold text-[#1B1B1E]'>Our <span className='text-[35px] font-bold text-[#E27396] mt-[1rem]'>Mission</span></h1>
       <p className='text-[18px] font-medium text-[#1B1B1E] mt-[]'>is to make this journey smoother for both caregivers and those in need of care. Here, you'll find a supportive community, valuable resources, and a seamless</p>
     </div>
    </div>
  )
}

export default hero
