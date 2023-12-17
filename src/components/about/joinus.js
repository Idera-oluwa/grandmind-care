import React from 'react'

const joinus = () => {
  return (
    <div className='mt-[6rem]' id='register'>
      <h1 className='text-[24px] font-semibold text-[#1B1B1E] text-center'>Join Us On The Care Journey</h1>
      <div className='flex flex-col md:flex-row mt-[4rem] md:px-[2rem] justify-between items-center gap-[2rem] md:gap-0'>
        <div className='w-full md:w-[50%]'>
          <img src='Images/home/LOGO.png' alt=''/>
          <p className='text-[16px] md:text-[20px] font-normal text-[#1B1B1E] w-[95%] lg:w-[80%] mt-[2rem]'>Whether you're a caregiver looking for fulfilling opportunities or a family seeking reliable and caring support, we invite you to join us on this care journey. Explore, <span className='font-medium text-[#32936F]'>Grandmind Care</span> connect with our community, and be a part of something truly meaningful.</p>
        </div>
        <div className='w-full md:w-[50%]'>
         <div className='w-full md:w-[90%] bg-[#47497333] py-[2rem] ml-auto p-4 rounded-[10px] border border-[#47497328]'>
           <form>
            <div className='flex flex-col gap-[2rem]'>
            <input type='text' name='first-name' placeholder='First Name' className='py-[15px] px-[20px] border border-[#47497380] w-full text-[14px] font-bold text-[#474973] rounded-[10px] outline-none'/>
            <input type='text' name='first-name' placeholder='First Name' className='py-[15px] px-[20px] border border-[#47497380] w-full text-[14px] font-bold text-[#474973] rounded-[10px] outline-none'/>
            <input type='text' name='first-name' placeholder='First Name' className='py-[15px] px-[20px] border border-[#47497380] w-full text-[14px] font-bold text-[#474973] rounded-[10px] outline-none'/>
            </div>
            <button className='w-full bg-[#474973] rounded-[10px] h-[64px] font-semibold text-[20px] text-white flex justify-center items-center mt-[2rem] hover:border-transparent hover:bg-[#353756] transition ease-in-out delay-300'>Register</button>
           </form>
         </div>
        </div>
      </div>
    </div>
  )
}

export default joinus
