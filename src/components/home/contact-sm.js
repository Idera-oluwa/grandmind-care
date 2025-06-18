import React from 'react'
import Link from "next/link";

const contactSm = () => {
  return (
    <div className='md:hidden mt-[7rem] w-[90vw]  2xl:max-w-[1440px] mx-auto'>
      <p className='font-normal text-[24px] text-[#1B1B1E] text-center'>Want To Join Us?</p>
      <p className='font-medium text-[12px] leading-[27px] text-[#1B1B1E] text-center mt-[0.5rem]'>Whether you're a carer looking for fulfilling opportunities or a family seeking reliable and caring support, we invite you to join us on this care journey. Explore, <span className='text-[#32936F]'>Grandmind Care </span>connect with our community, and be a part of something truly meaningful.</p>
      <Link href="/about#register">
            <button className="bg-[#474973] rounded-[22px] w-[122px] h-[36px] flex justify-center items-center text-[12px] font-bold text-[#FDFDFD] tracking-[1px] border border-transparent hover:bg-[hsl(237,24%,25%)] transition-all ease-out duration-[600] mx-auto mt-[1rem]">
              Register today
            </button>
          </Link>
          <p className='text-[24px] mt-[3rem] font-normal text-center text-[#1B1B1E]'>Contact Us </p>
          <p className='text-[12px] font-medium leading-[17.5px] text-center w-[90%] mx-auto mt-[1rem]'>Have questions or ready to discuss your care needs? We're here to help. Reach out to us through the following channels:</p>
          <a href="tel:441474526784" target="_blank" rel="noreferrer"><p className='text-[12px] font-medium text-[#474973] text-center mt-[1.5rem]'>01474526784</p></a>
          <a href="mailto:info@grandmindcare.co.uk">
              <p className="text-[12px] font-medium text-[#474973] text-center">
              info@grandmindcare.co.uk
              </p>
            </a>
            <div className="flex flex-row gap-[28px] items-center justify-center mt-[1rem] mx-auto">
              <a href="mailto:info@grandmindcare.co.uk">
                <img src="/Images/home/mail-logo.png" alt="" className='w-[34px] h-[28px]'/>
              </a>
              <a
               href="tel:441474526784" target="_blank" rel="noreferrer"
              >
                <img src="/Images/staffing/staff-phone.png" alt="" className='w-[29px] h-[29px]'/>
              </a>
              <a
                href="https://www.facebook.com/LCBNTV"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/Images/home/facebook-logo.png" alt="" className='w-[31px] h-[30px]'/>
              </a>
            </div>
    </div>
  )
}

export default contactSm
