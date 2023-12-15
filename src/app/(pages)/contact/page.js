import React from 'react'
import Faq from '../../../components/contact/faq'
import Contact from '../../../components/contact/contact'

const page = () => {
  return (
    <div>
      <div className='mt-[3rem] bg-[#474973] h-[110px] flex items-center justify-center mb-0'>
        <h1 className='font-bold text-[40px] text-[#F6F8FF] text-center'>Get In Touch</h1>
      </div>
    <div className='w-[90vw] mx-auto mb-[5rem]'>
      <Contact/>
      <Faq/>
    </div>
    </div>

  )
}

export default page