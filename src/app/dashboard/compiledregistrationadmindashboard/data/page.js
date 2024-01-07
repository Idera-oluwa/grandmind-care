"use client"
import React, {useState,useEffect} from 'react'
import { MdWindow } from "react-icons/md";
import axios from 'axios';
import Link from 'next/link';

const page = () => {
  const url = 'https://grandmindcare.onrender.com/api/v1/grandmind/register'
  const [regData, setRegData] = useState([])
  const length = regData.length;

  const fetchUrl = async() =>{
   try {
    const response = await axios.get(url)
    const data = await response.data;
    setRegData(data.user)
   } catch (error) {
    console.log(error)
   }
    
  }
  const deleteUser = async (id) => {
    const backendEndpoint = url;
    try {
      const response = await axios.delete(`${backendEndpoint}/${id}`);
      console.log('User deleted successfully', response.data);
      window.location.reload()
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };
  


  useEffect(() => {
    fetchUrl()
  },[])
  return (
    <div className='grid grid-cols-10 relative pb-[3rem]'>
        <div className='absolute top-0 mt-[5rem] w-full h-[1px] bg-[#c2c2c241]'></div>
        <div className='col-span-2 h-[100vh] py-[1rem] sticky top-0'>
      <div className='pl-[5vw]'><img src='/Images/home/LOGO.svg' alt='' className='mr-auto w-[133.86px] h-[34px]'/></div>
      <div className=' flex flex-col mt-[30vh]'>
      <Link href='/dashboard/compiledregistrationadmindashboard'><div className='flex flex-row gap-[0.5rem] items-center cursor-pointer hover:bg-[#32936F80] py-[0.5rem]  pl-[5vw]'>
            <MdWindow className='text-[15px] text-[#32936F]'/>
            <p className='font-medium text-[#32936F] text-[16px]'>Dashboard</p>
        </div></Link>
        <Link href='/dashboard/compiledregistrationadmindashboard/data'><div className='flex flex-row gap-[0.5rem] items-center cursor-pointer bg-[#32936F80] py-[0.5rem] pl-[5vw]'>
            <img src='/Images/dashboard/email2.png' alt='' className='w-[13px] h-[13px]'/>
            <p className='font-medium text-[#32936F] text-[16px]'>Emails</p>
            <div className='bg-[#32936F] w-[3px] h-[1.5rem] ml-auto'></div>
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
      <div className='flex flex-row justify-between mt-[5rem]'>
        <p className='font-semibold text-[24px] text-[#1B1B1E]'>Emails</p>
        <div className='p-[1rem] shadow-shadow4'>
            <div className='flex flex-row gap-[2rem]'>
              <p className='font-medium text-[#1B1B1E] text-[20px]'>Total Messages</p>
              <img src='/Images/home/notification-icon.png' alt=''/>
            </div>
            <div className='flex flex-row gap-[0.8rem] mt-[1rem] items-center'>
            <img src='/Images/home/mail3.png' alt='' className='w-[40px] h-[41px]'/>
            <p className='font-bold text-[#1B1B1E] text-[40px]'>{length}</p>
            </div>
        </div>
      </div>
      <div className='mt-[4rem]'>
         <div className='grid grid-cols-4 py-[1rem]'>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center'>Name</p>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center'>Email address</p>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center'>Contact Details</p>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center'>Action</p>
        </div>
        {regData.map((data)=>{
         const {_id,name, email, contact} = data;
         return(
           <div className='grid grid-cols-4 py-[1rem] cursor-pointer hover:bg-[#7677831A]' key={_id}>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center'>{name}</p>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center'>{email}</p>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center'>{contact}</p>
          <div className='flex flex-row gap-[0.5rem] mx-auto items-center'>
            <img src='/Images/home/delete.png' className='w-[10.67px] h-[10.67px]'/>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center' onClick={()=>deleteUser(_id)}>Delete</p>
          </div>
        </div>
         )
        })}
        
      </div>
      </div>
    </div>
  )
}

export default page
