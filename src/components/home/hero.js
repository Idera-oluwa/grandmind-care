import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const hero = () => {
  return (
    <div className='flex flex-col md:flex-row mt-[5rem]'>
        {/* Left hand side */}
     <div className='w-full md:w-[50%] relative'>
       <div className='flex flex-row gap-[20px]'>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <Image src='/Images/home/mail-sm.png'
          alt=''
          width={18}
          height={16}
           />
         <a href="mailto:info@grandmind.co.uk"><p className='text-[14px] md:text-[16px] font-normal text-[#474973]'>info@grandmind.co.uk</p></a>
       </div>
       <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
         <img src='Images/home/phone-sm.png' alt='' className='w-[13px] h-[13px]'/>
         <a href='tel:+442034177797'><p className='text-[14px] md:text-[16px] font-normal text-[#474973]'>02034177797</p></a>
       </div>
       </div>
       <h1 className='text-[40px] md:text-[35px] lg:text-[40px] font-bold leading-[48.41px] text-[#1B1B1E] mt-[1.5rem]'><span className='text-[#474973]'>Welcome</span> To <span className='text-[#474973]'>Your</span></h1>
       <i className='text-[40px] md:text-[35px] lg:text-[40px] font-bold leading-[48.41px] text-[#1B1B1E] mt-[48px]'>No 1 Carer <span className='text-[#474973]'>Service</span> </i>
       <p className='text-[16px] leading-[25.6px] text-[#1B1B1E] font-normal w-[95%] md:w-[80%] mt-[1.5rem]'>We're delighted to welcome you to <span className='text-[#474973] font-semibold'>Grandmind Care LTD</span>, where compassionate care meets cutting-edge convenience. Here, you’ll find a supportive community,valuable resources, and a seamless interaction with our professional carers.</p>
       <div className='flex flex-row mt-[1.5rem] gap-[10px]'>
       <Link href='/about#register'><button className='bg-[#474973] rounded-[22px] py-[10px] lg:py-[12px]py-[12px] px-[18px] lg:px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] hover:text-black border border-transparent hover:border-[#1B1B1E] hover:bg-transparent transition ease-in-out delay-300'>Register today</button></Link>
        <Link href='/about'> <button className='bg-transparent rounded-[22px] py-[10px] lg:py-[12px] px-[18px] lg:px-[20px] text-[15px] font-medium text-black border border-[#1B1B1E] tracking-[1px] hover:bg-[#474973] hover:border-transparent hover:text-[#FDFDFD] transition ease-in-out delay-300'>Learn more</button> </Link>
       </div>
       <img src='Images/home/Star 6.png' alt='' className='absolute bottom-0 mb-0 md:mb-[-3rem] left-0 right-0 ml-auto mr-[1rem] md:mr-[-5rem] lg:mr-[4rem] z-[-50] w-[6rem] lg:w-auto'/>
     </div>
     {/* Right hand side */}
     <div className='w-full md:w-[50%] mt-[2rem] md:mt-0 border-t md:border-t-0 md:border-l border-[#47497380] pt-[2rem] md:pl-[2rem]'>
       <img src='Images/home/hero-image.png' alt=''/>
       <h1 className='text-[32px] font-semibold text-[#1B1B1E] mt-[1rem] md:mt-0'>Our <span className='text-[35px] font-bold text-[#E27396] mt-[1rem]'>Mission</span></h1>
       <p className='text-[16px] md:text-[18px] font-medium text-[#1B1B1E] mt-[1rem] md:mt-0'>is to make this journey smoother for both caregivers and those in need of care. Here, you'll find a supportive community, valuable resources, and a seamless</p>
     </div>
    </div>
  )
}

export default hero
