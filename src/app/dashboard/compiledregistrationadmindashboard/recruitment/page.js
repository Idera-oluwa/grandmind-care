"use client"
import React, {useState,useEffect} from 'react'
import { MdWindow } from "react-icons/md";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link';

const page = () => {
  const [showModal, setShowModal] = useState(false)
  const url = 'https://grandmindcare.onrender.com/api/v1/grandmind/applicants'
  const [regData, setRegData] = useState([])
  const length = regData.length;

  const fetchUrl = async() =>{
   try {
    const response = await axios.get(url)
    const data = await response.data;
    setRegData(data.applicant)
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
      setShowModal(false)
      toast.success("User Deleted Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
      });
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
        <Link href='/dashboard/compiledregistrationadmindashboard/data'><div className='flex flex-row gap-[0.5rem] items-center cursor-pointer hover:bg-[#32936F80] py-[0.5rem] pl-[5vw]'>
            <img src='/Images/dashboard/email2.png' alt='' className='w-[13px] h-[13px]'/>
            <p className='font-medium text-[#32936F] text-[16px]'>Emails</p>
        </div></Link>
        <Link href='/dashboard/compiledregistrationadmindashboard/recruitment'><div className='flex flex-row gap-[0.5rem] items-center cursor-pointer bg-[#32936F80] py-[0.5rem] pl-[5vw]'>
            <img src='/Images/dashboard/person-logo.png' alt='' className='w-[13px] h-[13px]'/>
            <p className='font-medium text-[#32936F] text-[16px]'>Recruitment</p>
            <div className='bg-[#32936F] w-[3px] h-[1.5rem] ml-auto'></div>
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
        <p className='font-semibold text-[24px] text-[#1B1B1E]'>CVs</p>
        <div className='p-[1rem] shadow-shadow4'>
            <div className='flex flex-row gap-[2rem]'>
              <p className='font-medium text-[#1B1B1E] text-[20px]'>Applications</p>
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
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center'>Download CV</p>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center'>Action</p>
        </div>
        {regData.map((data)=>{
         const {_id,fullname, email, cvPath} = data;
         return(
           <div className='grid grid-cols-4 py-[1rem] cursor-pointer hover:bg-[#7677831A]' key={_id}>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center'>{fullname}</p>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center'>{email}</p>
          <a href={cvPath} download><img src='/Images/dashboard/download.png' alt='' className='mx-auto'/></a>
          <div className='flex flex-row gap-[0.5rem] mx-auto items-center'>
            <img src='/Images/home/delete.png' className='w-[10.67px] h-[10.67px]'/>
          <p className='text-[#383737] text-[14px] font-semibold col-span-1 text-center' onClick={()=>{setShowModal(true)}}>Delete</p>
          {showModal && <div className='w-screen h-screen fixed top-0 left-0 bg-black/20 flex justify-center items-center'>
         <div className='p-[2rem] bg-white w-[491px] h-[217px] flex flex-col rounded-[10px] shadow'>
         <p className='text-[#344E41] font-medium text-[20px]'>Delete Message</p>
           <p className='font-normal text-[14px] leading-[19px] text-[#373737] mt-[0.5rem]'>Are you sure you want to delete this message? Deleted messages will be removed permanently.</p>
           <div className='flex flex-row w-full justify-between mt-[2rem]'>
          <button className='w-[145px] h-[51px] flex items-center justify-center bg-white rounded-[4px] border border-[#45454B] font-medium text-[16px] text-[#373737]' onClick={()=>{setShowModal(false)}}>Close</button>
          <button className='w-[248px] h-[51px] flex items-center justify-center bg-[#CB261F] rounded-[4px] font-medium text-[16px] text-white' onClick={()=>deleteUser(_id)}>Delete Message</button>
           </div>
         </div>
          </div>}
          <ToastContainer />
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
