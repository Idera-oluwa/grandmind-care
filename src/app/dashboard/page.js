"use client"
import React,{useState} from 'react'
import Link from 'next/link';

const page = () => {
    const [password, setPassword] = useState('')
    const protectedPassword = process.env.NEXT_PUBLIC_PASSWORD
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <h1 className='font-bold text-[40px]'>Admin Login Page</h1>
      <form className='flex flex-col mt-[2rem]'>
        <label htmlFor='password' className='font-medium text-[20px]'>Please enter admin password:</label>
        <input type='text' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='h-[50px] bg-gray-200 rounded-[10px] mt-[1rem]'/>
        {password === protectedPassword && <Link href='/dashboard/compiledregistrationadmindashboard'><button className='bg-[#474973] rounded-[22px] py-[10px] lg:py-[12px] px-[18px] lg:px-[20px] text-[15px] font-bold text-[#FDFDFD] tracking-[1px] hover:text-black border border-transparent hover:border-[#1B1B1E] hover:bg-transparent transition ease-in-out delay-300 mt-[2rem]'>Submit</button></Link>}
      </form>
    </div>
  )
}

export default page
