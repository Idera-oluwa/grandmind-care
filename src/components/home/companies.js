"use client"
import React from 'react'
import Marquee from "react-fast-marquee"

const companies = () => {

  return (
    <div className='mt-[10rem] w-[90vw]  2xl:max-w-[1440px] mx-auto'>
        <Marquee>
    <img src='/Images/home/logo-1.svg' alt='' className='lg:mr-[5rem]'/>
    <img src='/Images/home/logo-2.svg' alt='' className='lg:mr-[5rem]'/>
    <img src='/Images/home/logo-3.svg' alt='' className='lg:mr-[5rem]'/>
    <img src='/Images/home/logo-1.svg' alt='' className='lg:mr-[5rem]'/>
    <img src='/Images/home/logo-2.svg' alt='' className='lg:mr-[5rem]'/>
    <img src='/Images/home/logo-3.svg' alt='' className='lg:mr-[5rem]'/>
    </Marquee>
    </div>
  )
}

export default companies
