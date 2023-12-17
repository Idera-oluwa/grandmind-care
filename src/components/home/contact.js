import React from 'react'

const contact = () => {
  return (
    <div className='mt-[5rem] relative pb-[5rem] h-[652px]'>
      <img src='Images/home/contact.png' alt='' className='object-cover rounded-[10px]'/>
      <div className='absolute top-0 left-0 flex flex-col items-center w-full mt-[1rem] py-[1rem]'>
      <p className='text-[24px] font-bold text-white'>Contact the team</p>
      <p className='text-[14px] font-medium md:font-semibold text-white w-[95%] md:w-[80%] lg:w-[40%] text-center mt-[8px]'>Contacting the team is easy, enter your name, your email, and your message to get started.</p>
      <div className='w-full md:w-[588px] h-[528px] rounded-[10px] bg-[#474973B2] mt-[1.5rem] flex items-center justify-center shadow-shadow2'>
      <div className='w-full md:w-[557px] h-[500px] border border-[#424359] rounded-[10px] bg-white mt-[1.5rem] p-[2rem]'>
         <form action="https://formspree.io/f/xyyrgynn"
  method="POST">
            <div className='flex flex-col gap-[10px]'>
            <label htmlFor='first-name' className='text-[16px] font-bold text-[#474973]'>First Name</label>
            <input type='text' name='first-name' className='px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[52px] outline-none'/>
            </div>
            <div className='flex flex-col gap-[10px] mt-[20px]'>
            <label htmlFor='message' className='text-[16px] font-bold text-[#474973]'>Write your message here</label>
            <textarea name='message' className='px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[177px] outline-none'/>
            </div>
            <button type="submit" className='bg-[#474973] rounded-[10px] font-semibold text-[20px] w-full mt-[3rem] h-[64px] text-white hover:border-transparent hover:bg-[#353756] transition ease-in-out delay-300'>Submit</button>
         </form>
       </div>
      </div>
      </div>
    </div>
  )
}

export default contact
