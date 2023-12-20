import React from 'react'

const joinus = () => {
  return (
    <div className='mt-[6rem] grid grid-cols-1 lg:grid-cols-2 h-auto'>
      <div className='col-span-1 bg-[#2A2C58] h-full px-[1rem] md:px-[2rem] flex flex-col justify-center pb-[2rem] lg:pb-[1rem] rounded-t-[10px] lg:rounded-tl-[10px] lg:rounded-bl-[10px] lg:rounded-t-[0px] pt-[1rem] lg:pt-0'>
       <h1 className='text-[32px] md:text-[35px] lgtext-[40px] font-semibold text-white text-center'>Join Our Team</h1>
       <p className='text-[16px] font-medium text-white text-center mt-[1.5rem] w-full md:w-[80%] mx-auto'>Are you passionate about caregiving? Consider joining our team of dedicated professionals. We are always looking for compassionate individuals to contribute to our mission.</p>
       <div className='flex flex-col md:flex-row gap-[2rem] md:gap-0 mt-[2rem] justify-between'>
        <div className='w-full md:w-[45%] bg-white px-[1rem] py-[2rem] rounded-[5px]'>
          <div className='flex flex-row'>
           <div className='flex flex-col gap-[1rem]'>
            <p className='font-medium text-[14px] text-[#1B1B1E]'>Healthcare Assistants</p>
            <p className='font-medium text-[14px] text-[#1B1B1E]'>Support Workers</p>
            <p className='font-medium text-[14px] text-[#1B1B1E]'>Senior Support Workers</p>
            <p className='font-medium text-[14px] text-[#1B1B1E]'>Homecare Managers </p>
           </div>
           <img src='Images/staffing/logo2.png' alt='' className='w-[30px] h-[30px] mt-auto ml-auto'/>
          </div>
        </div>
        <div className='w-full md:w-[49%] bg-white px-[1rem] py-[2rem] rounded-[5px]'>
          <div className='flex flex-row'>
           <div className='flex flex-col gap-[1rem]'>
            <p className='font-medium text-[14px] text-[#1B1B1E]'>Healthcare Assistants</p>
            <p className='font-medium text-[14px] text-[#1B1B1E]'>Support Workers</p>
            <p className='font-medium text-[14px] text-[#1B1B1E]'>Senior Support Workers</p>
            <p className='font-medium text-[14px] text-[#1B1B1E]'>Homecare Managers </p>
           </div>
           <img src='Images/staffing/logo2.png' alt='' className='w-[30px] h-[30px] mt-auto ml-auto'/>
          </div>
        </div>
       </div>
      </div>
      <div className='w-full relative'>
      <img src='Images/staffing/join-us.png' alt='' className='col-span-1 h-full w-full lg:rounded-r-[10px]'/>
      <div className='absolute bottom-0 left-0 lg:ml-[3rem] mb-[-3rem] flex flex-row gap-[1rem] md:gap-[3rem]'>
         <div className='bg-white p-[1rem] flex flex-row items-center gap-[1rem] rounded-[5px] shadow-shadow4'>
              <img src='Images/staffing/staff-phone.png' alt='' className='w-[2rem] h-[2rem] md:w-auto md:h-auto'/>
              <div>
                <p className='font-bold text-[14px] md:text-[20px] text-[#1B1B1E]'>Call us</p>
                <a href='tel:+442034177797'><p className='font-semibold text-[10px] md:text-[14px] text-[#1B1B1E]'>01474247739</p></a>
              </div>
         </div>
         <div className='bg-white p-[1rem] flex flex-row items-center gap-[1rem] rounded-[5px] shadow-shadow4'>
              <img src='Images/staffing/staff-mail.png' alt='' className='w-[2rem] h-[2rem] md:w-auto md:h-auto'/>
              <div>
                <p className='font-bold text-[14px] md:text-[20px] text-[#1B1B1E]'>Email</p>
                <a href="mailto:info@grandmind.co.uk"><p className='font-semibold text-[10px] md:text-[14px] text-[#1B1B1E]'>info@grandmind.co.uk</p></a>
              </div>
         </div>
      </div>
      </div>
    </div>
  )
}

export default joinus
