import React from 'react'

const contact = () => {
  return (
    <div className='w-[80%] px-[3rem] py-[4rem] shadow-shadow5 mt-0 mx-auto flex flex-row items-center'>
      <div className='flex flex-col gap-[2rem]'>
        <div className='flex flex-row gap-[2rem]'>
         <img src='Images/contact/location.png' alt='' className='w-[17px] h-[24px]'/>
         <div className='text-left'>
              <p className='font-bold text-[14px] text-[#1B1B1E]'>Office Address</p>
              <p className='font-medium text-[14px] text-[#1B1B1E] mt-[0.5rem]'>22 Cutmore Street</p>
              <p className='font-medium text-[14px] text-[#1B1B1E] mt-[0.2rem]'>Gravesend Kent</p>
              <p className='font-medium text-[14px] text-[#1B1B1E] mt-[0.2rem]'>DA11 0PS</p>
              </div>
        </div>
        <div className='flex flex-row gap-[2rem]'>
         <img src='Images/contact/home.png' alt='' className='w-[17px] h-[18px]'/>
         <div className='text-left'>
              <p className='font-bold text-[14px] text-[#1B1B1E]'>Office Opening Hours</p>
              <p className='font-medium text-[14px] text-[#1B1B1E] mt-[0.5rem]'>Mon-Fri: 9:00am -5:00pm</p>
              <p className='font-medium text-[14px] text-[#1B1B1E] mt-[0.2rem]'>Saturday: Closed</p>
              <p className='font-medium text-[14px] text-[#1B1B1E] mt-[0.2rem]'>Sunday: Closed</p>
              </div>
        </div>
        <div className='flex flex-row gap-[2rem]'>
         <img src='Images/home/mail-sm.png' alt='' className='w-[17px] h-[18px]'/>
         <div className='text-left'>
         <a href="mailto:info@grandmind.co.uk"> <p className='font-semibold text-[14px] text-[#1B1B1E]'>info@sgmcare.co.uk</p></a>
              </div>
        </div>
        <div className='flex flex-row gap-[2rem]'>
         <img src='Images/home/phone-logo.png' alt='' className='w-[17px] h-[18px]'/>
         <div className='text-left'>
              <p className='font-semibold text-[14px] text-[#1B1B1E]'>01474247739</p>
              </div>
        </div>
      </div>
      <div className='w-[557px] h-[500px] border border-[#47497380] rounded-[10px] bg-white p-[2rem] ml-auto'>
         <form>
            <div className='flex flex-col gap-[10px]'>
            <label htmlFor='first-name' className='text-[16px] font-bold text-[#474973]'>First Name</label>
            <input type='text' name='first-name' className='px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[52px] outline-none'/>
            </div>
            <div className='flex flex-col gap-[10px] mt-[20px]'>
            <label htmlFor='message' className='text-[16px] font-bold text-[#474973]'>Write your message here</label>
            <textarea name='message' className='px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[177px] outline-none'/>
            </div>
            <button className='bg-[#474973] rounded-[10px] font-semibold text-[20px] w-full mt-[3rem] h-[64px] text-white hover:border-transparent hover:bg-[#353756] transition ease-in-out delay-300'>Submit</button>
         </form>
       </div>
    </div>
  )
}

export default contact
