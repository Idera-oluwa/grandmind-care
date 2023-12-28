import React from 'react'

const specialized = () => {
  return (
    <div className='w-[90vw] mx-auto'>
    <div className='mt-[7rem] md:mt-[12rem] grid grid-cols-1 lg:grid-cols-2 w-full md:w-[90%] mx-auto gap-[4rem]'>
      <img src='Images/staffing/specialized.png' alt='' className='hidden lg:grid col-span-1 w-full'/>
      <div className='col-span-1 w-full'>
       <p className='font-semibold text-[28px] md:text-[32px] lgtext-[36px] text-black'>Specialised Staffs</p>
       <img src='Images/staffing/specialized.png' alt='' className='grid lg:hidden w-full mt-[1rem]'/>
       <p className='font-normal text-[16px] text-[#1B1B1E] mt-[1rem]'>Our extensive staff database includes a diverse range of specialists, encompassing</p>
       <div className='grid grid-cols-1 md:grid-cols-2 mt-[1rem] gap-[1rem]'>
         <div className='p-[2rem] border border-[#9C9EBF80] rounded-[10px]'>
           <div className='w-full h-[11px] rounded-[20px] bg-[#FFD166]'></div>
           <div className='flex flex-col mt-[1rem] gap-[0.5rem]'>
           <p className='text-[16px] font-bold text-[#1B1B1E]'>Brain Injury</p>
           <p className='text-[16px] font-bold text-[#1B1B1E]'>Spinal Cord Injury</p>
           <p className='text-[16px] font-bold text-[#1B1B1E]'>End of Life Care</p>
           <p className='text-[16px] font-bold text-[#1B1B1E]'>Down syndrome</p>
           </div>
         </div>
         <div className='p-[2rem] border border-[#9C9EBF80] rounded-[10px]'>
           <div className='w-full h-[11px] rounded-[20px] bg-[#474973]'></div>
           <div className='flex flex-col mt-[1rem] gap-[0.5rem]'>
           <p className='text-[16px] font-bold text-[#1B1B1E]'>Elderly Care</p>
           <p className='text-[16px] font-bold text-[#1B1B1E]'>Learning Disability</p>
           <p className='text-[16px] font-bold text-[#1B1B1E]'>Mental Health</p>
           <p className='text-[16px] font-bold text-[#1B1B1E]'>Physical Disability</p>
           </div>
         </div>
       </div>
      </div>
    </div>
    </div>
  )
}

export default specialized
