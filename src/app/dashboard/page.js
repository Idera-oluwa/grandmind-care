"use client";
import React, { useState } from "react";
import Link from "next/link";

const page = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState('Sign In')
  const handleClick=()=>{
    setText('Signing In...')
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="font-semibold text-[40px]">Admin Login</h1>
      <img src='/Images/dashboard/admin-icon.svg' alt='' className='mt-[3rem]'/>
      <form className="flex flex-col mt-[2rem] w-[496px]">
       <div className='flex flex-col w-full'>
       <label htmlFor='email' className='font-medium text-[14px]'>Email</label>
       <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow-shadow5 rounded-[10px] mt-[1rem] w-full border border-[#1B1B1E4D] h-[64px] px-[2rem] outline-none"
        />
       </div>
        <div className='flex flex-col w-full mt-[1rem]'>        
          <label htmlFor="password"  className='font-medium text-[14px]'>
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow-shadow5 rounded-[10px] mt-[1rem] w-full border border-[#1B1B1E4D] h-[64px] px-[2rem] outline-none"
        /></div>
        {password === process.env.NEXT_PUBLIC_PASSWORD && email === process.env.NEXT_PUBLIC_EMAIL ?
          <Link href="/dashboard/compiledregistrationadmindashboard">
            <button className="bg-[#3066BE] rounded-[10px] w-full flex justify-center items-center h-[78px] text-[20px] font-semibold text-[#FDFDFD] tracking-[1px] transition-all ease-out duration-[600] mt-[2rem]" onClick={handleClick}>
              {text}
            </button>
          </Link>
        :  <button className="bg-[#3066BE] rounded-[10px] w-full flex justify-center items-center h-[78px] text-[20px] font-semibold text-[#FDFDFD] tracking-[1px] transition-all ease-out duration-[600] mt-[2rem]" onClick={(e)=>e.preventDefault()}>
        Sign In
      </button>}
      </form>
    </div>
  );
};

export default page;
