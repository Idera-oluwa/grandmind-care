import React from 'react'

const subscribe = () => {
  return (
    <div className='mt-[4rem] w-[90vw] mx-auto'>
      <div className='w-[80%] bg-[#F4EEEE] px-[4rem] py-[2rem] mx-auto'>
        <div className='flex flex-row justify-between items-center border-b border-[#76778399] pb-[3rem]'>
            <p className='font-semibold text-[24px] text-[#1B1B1E]'>Subscribe To Our Newsletter</p>
            <div className='flex flex-row'>
               <input type='text' name='subscribe' placeholder='Enter your email' className='font-medium text-[14px] text-[#767783] w-[306px] px-[1rem] h-[59px] outline-none'/>
               <div className='bg-[#FFD166] w-[62px] h-[59px] rounded-[5px] flex justify-center items-center cursor-pointer hover:border-transparent hover:bg-[#ffba66] transition ease-in-out delay-300'><img src='Images/home/subscribe-arrow.png' alt=''/></div>
            </div>
        </div>
        <div className='flex flex-row mt-[3rem] justify-between border-b border-[#76778399] pb-[3rem]'>
          {/* Left hand side */}
          <div className='w-[50%]'>
            <img src='Images/home/LOGO.png' alt='' className='w-[164px] h-[41.65px]'/>
            <p className='font-medium text-[12px] trxt-[#767783B2] mt-[1rem]'>Contacting the team is easy, enter your name</p>
            <div className='flex flex-row gap-[8px] items-center mt-[1rem]'>
             <img src='Images/home/facebook-logo.png' alt=''/>
             <a href="mailto:info@grandmind.co.uk"><img src='Images/home/mail-logo.png' alt=''/></a>
             <img src='Images/home/phone-logo.png' alt=''/>
      </div>
          </div>
          {/* Right hand side */}
          <div className='flex flex-row gap-[1rem]'>
            <div className='bg-[#474973] flex flex-col justify-center items-center w-[224px] h-[152px] text-left'>
            <div className='text-left'>
              <p className='font-bold text-[12px] text-white'>Office Address</p>
              <p className='font-medium text-[12px] text-white mt-[0.5rem]'>22 Cutmore Street</p>
              <p className='font-medium text-[12px] text-white mt-[0.2rem]'>Gravesend Kent</p>
              <p className='font-medium text-[12px] text-white mt-[0.2rem]'>DA11 0PS</p>
              </div>
            </div>
            <div className='bg-[#474973] flex flex-col justify-center items-center w-[224px] h-[152px]'>
            <div className='text-left'>
            <p className='font-bold text-[12px] text-white'>Office Opening Hours</p>
            <p className='font-medium text-[12px] text-white mt-[0.5rem]'>Mon-Fri: 9:00am -5:00pm</p>
            <p className='font-medium text-[12px] text-white mt-[0.2rem]'>Saturday: Closed</p>
            <p className='font-medium text-[12px] text-white mt-[0.2rem]'>Sunday: Closed</p>
            </div>
            </div>

          </div>
        </div>
        <div className='flex flex-row justify-between mt-[1rem]'>
        <p className='font-medium text-[12px] text-[#474973B2]'>Copyright 2023 © grandmind care Ltd. </p>
        <div className='flex flex-row'>
        <p className='font-medium text-[12px] text-[#474973B2] pr-[0.3rem] border-r border-[#474973B2] cursor-pointer'>Privacy Policy</p>
        <p className='font-medium text-[12px] text-[#474973B2] pl-[0.3rem] cursor-pointer'>Terms and Conditions </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default subscribe
