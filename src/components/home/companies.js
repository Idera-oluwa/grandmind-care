"use client"
import React from 'react'
import Marquee from "react-fast-marquee"

const companies = () => {

  return (
    <div className='mt-[10rem]'>
        <Marquee>
    <img src='Images/home/logo-1.svg' alt=''/>
    <img src='Images/home/logo-2.svg' alt=''/>
    <img src='Images/home/logo-3.svg' alt=''/>
    <img src='Images/home/logo-1.svg' alt=''/>
    <img src='Images/home/logo-2.svg' alt=''/>
    <img src='Images/home/logo-3.svg' alt=''/>
    </Marquee>
    </div>
  )
}

export default companies
