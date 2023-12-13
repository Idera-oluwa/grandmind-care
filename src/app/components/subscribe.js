import React from 'react'

const subscribe = () => {
  return (
    <div className='mt-[4rem]'>
      <div className='w-[80%] bg-[#F4EEEE] px-[4rem] py-[2rem] mx-auto'>
        <div className='flex flex-row justify-between'>
            <p className='font-semibold text-[24px] text-[#1B1B1E]'>Subscribe To Our Newsletter</p>
            <div className='flex flex-row'>
               <input type='text' name='subscribe' placeholder='Enter your email' className='font-medium text-[14px] text-[#767783] w-[306px] px-[1rem]'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default subscribe
