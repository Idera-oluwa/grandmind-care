"use client"
import React, {useState,useEffect} from 'react'
import { MdWindow } from "react-icons/md";
import Link from 'next/link';
import axios from 'axios';

const page = () => {
  const msgurl = 'https://grandmindcare.onrender.com/api/v1/grandmind/register'
  const cvurl = 'https://grandmindcare.onrender.com/api/v1/grandmind/applicants'
  const [msgData, setmsgData] = useState([])
  const [cvData, setCvData] = useState([])

  const msgLength = msgData.length;
  const cvLength = cvData.length;

  const fetchMsgUrl = async() =>{
   try {
    const response = await axios.get(msgurl)
    const data = await response.data;
    setmsgData(data.user)
   } catch (error) {
    console.log(error)
   }
    
  }
  const fetchCvUrl = async() =>{
   try {
    const response = await axios.get(cvurl)
    const data = await response.data;
    setCvData(data.applicant)
   } catch (error) {
    console.log(error)
   }
    
  }
  useEffect(() => {
    fetchMsgUrl()
    fetchCvUrl()
  },[])
  return (
    <div className='grid grid-cols-10 relative pb-[3rem]'>
        <div className='absolute top-0 mt-[5rem] w-full h-[1px]'></div>
      <div className='col-span-2 h-[100vh] py-[1rem] sticky top-0'>
      <div className='pl-[5vw]'><img src='/Images/home/LOGO.svg' alt='' className='mr-auto w-[133.86px] h-[34px]'/></div>
      <div className=' flex flex-col mt-[30vh]'>
      <Link href='/dashboard/compiledregistrationadmindashboard'><div className='flex flex-row gap-[0.5rem] items-center cursor-pointer bg-[#32936F80] py-[0.5rem]  pl-[5vw]'>
            <MdWindow className='text-[15px] text-[#32936F]'/>
            <p className='font-medium text-[#32936F] text-[16px]'>Dashboard</p>
            <div className='bg-[#32936F] w-[3px] h-[1.5rem] ml-auto'></div>
        </div></Link>
        <Link href='/dashboard/compiledregistrationadmindashboard/data'><div className='flex flex-row gap-[0.5rem] items-center cursor-pointer hover:bg-[#32936F80] py-[0.5rem] pl-[5vw]'>
            <img src='/Images/dashboard/email2.png' alt='' className='w-[13px] h-[13px]'/>
            <p className='font-medium text-[#32936F] text-[16px]'>Emails</p>
        </div></Link>
        <Link href='/dashboard/compiledregistrationadmindashboard/recruitment'><div className='flex flex-row gap-[0.5rem] items-center cursor-pointer hover:bg-[#32936F80] py-[0.5rem] pl-[5vw]'>
            <img src='/Images/dashboard/person-logo.png' alt='' className='w-[13px] h-[13px]'/>
            <p className='font-medium text-[#32936F] text-[16px]'>Recruitment</p>
        </div></Link>
        
      </div>
      </div>
      <div className='col-span-8 bg-white h-[100vh] px-[5vw] py-[1rem]'>
      <div className='w-full flex flex-row justify-end items-center gap-[1rem]'>
        <img src='/Images/dashboard/admin-icon.svg' alt='' className='w-[32px] h-[32px] rounded-full'/>
        <div className='flex flex-col'>
        <p className='text-[#373737] font-normal text-[14px] text-left'>Administrator</p>
      <p className='text-[#808080] font-semibold text-[10px] text-left'>recruitment@grandmindcare.co.uk</p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center mt-[6rem]'>
       <div className='flex flex-col w-[50%]'>
        <p className='font-semibold text-[24px] text-[#1B1B1E]'>Welcome Admin!</p>
        <p className='font-normal text-[16px] text-[#1B1B1E]'>Check for new messages</p>
       </div>
       <img src='/Images/home/Rectangle 3463287.svg' alt='' className='w-[348px] h-[186px]'/>
      </div>
      <div className='w-full flex flex-row justify-center mt-[4rem] gap-[2rem]'>
      <div className='p-[1rem] shadow-shadow4 w-[296px]'>
            <div className='flex flex-row gap-[2rem] justify-between'>
              <p className='font-medium text-[#1B1B1E] text-[20px]'>Total Messages</p>
              <img src='/Images/home/notification-icon.png' alt=''/>
            </div>
            <div className='flex flex-row gap-[0.8rem] mt-[1rem] items-center'>
            <img src='/Images/home/mail3.png' alt='' className='w-[40px] h-[41px]'/>
            <p className='font-bold text-[#1B1B1E] text-[40px]'>{msgLength}</p>
            </div>
        </div>
        <div className='p-[1rem] shadow-shadow4 w-[296px]'>
            <div className='flex flex-row gap-[2rem] justify-between'>
              <p className='font-medium text-[#1B1B1E] text-[20px]'>CVs</p>
              <img src='/Images/home/notification-icon.png' alt=''/>
            </div>
            <div className='flex flex-row gap-[0.8rem] mt-[1rem] items-center'>
            <img src='/Images/home/mail3.png' alt='' className='w-[40px] h-[41px]'/>
            <p className='font-bold text-[#1B1B1E] text-[40px]'>{cvLength}</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default page
