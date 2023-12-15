import React from 'react'
import Image from 'next/image';

const hero = () => {
  return (
    <div className='flex flex-row mt-[3rem]'>
        {/* Left hand side */}
     <div className='w-[50%] relative'>
       <div className='flex flex-row gap-[20px]'>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <Image src='/Images/home/mail-sm.png'
          alt=''
          width={18}
          height={16}
           />
         <a href="mailto:info@grandmind.co.uk"><p className='text-[16px] font-normal text-[#474973]'>info@grandmind.co.uk</p></a>
       </div>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/home/phone-sm.png' alt='' className='w-[13px] h-[13px]'/>
         <p className='text-[16px] font-normal text-[#474973]'>02034177797</p>
       </div>
       </div>
       <h1 className='text-[40px] font-bold leading-[48.41px] text-[#1B1B1E] mt-[1.5rem]'><span className='text-[#474973]'>Welcome</span> To <span className='text-[#474973]'>Your</span></h1>
       <i className='text-[40px] font-bold leading-[48.41px] text-[#1B1B1E] mt-[48px]'>No 1 Carer <span className='text-[#474973]'>Service</span> </i>
       <p className='text-[16px] leading-[25.6px] text-[#1B1B1E] font-normal w-[80%] mt-[1.5rem]'>We're delighted to welcome you to <span className='text-[#474973] font-semibold'>Grandmind Care LTD</span>, where compassionate care meets cutting-edge convenience. Here, you’ll find a supportive community,valuable resources, and a seamless interaction with our professional carers.</p>
       <div className='flex flex-row mt-[1.5rem] gap-[10px]'>
        <button className='bg-[#474973] rounded-[22px] py-[12px] px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] hover:text-black border border-transparent hover:border-[#1B1B1E] hover:bg-transparent transition ease-in-out delay-300'>Register today</button>
        <button className='bg-transparent rounded-[22px] py-[12px] px-[20px] text-[15px] font-medium text-black border border-[#1B1B1E] tracking-[1px] hover:bg-[#474973] hover:border-transparent hover:text-[#FDFDFD] transition ease-in-out delay-300'>Learn more</button> 
       </div>
       <img src='Images/home/Star 6.png' alt='' className='absolute bottom-0 mb-[-3rem] left-0 right-0 ml-auto mr-[4rem]'/>
     </div>
     {/* Right hand side */}
     <div className='w-[50%]  border-l border-[#47497380] pl-[2rem]'>
       <img src='Images/home/hero-image.png' alt=''/>
       <h1 className='text-[32px] font-semibold text-[#1B1B1E]'>Our <span className='text-[35px] font-bold text-[#E27396] mt-[1rem]'>Mission</span></h1>
       <p className='text-[18px] font-medium text-[#1B1B1E] mt-[]'>is to make this journey smoother for both caregivers and those in need of care. Here, you'll find a supportive community, valuable resources, and a seamless</p>
     </div>
    </div>
  )
}

export default hero
