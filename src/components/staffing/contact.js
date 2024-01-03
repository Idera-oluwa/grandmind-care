"use client"
import React,{ useState } from 'react'

const contact = () => {
   const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };
  return (
    <div className='mt-[7rem] md:mt-[12rem] max-w-[100vw] mb-[18rem]'>
      <h1 className='text-center text-[20px] font-semibold mb-[2rem]'>Apply Now</h1>
      <div className='w-full bg-[#474973] h-[336px] flex flex-row px-[4rem]'>
       <div className='w-[30%] my-[auto]'>
        <h1 className='font-semibold text-[40px] text-[white]'>Tell us about you!</h1>
        <p className='font-semibold text-[16px] text-[white] mt-[1rem]'>Get started with your application here, send a detailed copy of your cv to us and let us review your application.</p>
       </div>
       <div className='w-[60%] ml-[auto]'>
       <div className='w-[600px] bg-[#474973] h-[300px] mt-[36px] border-b-0 border-2 border-white p-[1rem] rounded-t-[25px]'>
       <div className="w-full h-[528px] p-[1rem] rounded-[10px] bg-[#474973] items-center justify-center">
          <div className="w-full h-full border border-[#424359] rounded-[20px] bg-white p-[2rem]">
            <form>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor="first-name"
                  className="text-[16px] font-bold text-[#474973]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  className="px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[52px] outline-none"
                />
              </div>
              <div className="flex flex-col gap-[10px] mt-[20px]">
                <label
                  htmlFor="email"
                  className="text-[16px] font-bold text-[#474973]"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[52px] outline-none"
                />
              </div>
              <div className="flex flex-col gap-[10px] mt-[20px]">
                <label
                  htmlFor="cv"
                  className="text-[16px] font-bold text-[#474973]"
                >
                  CV
                </label>
                <input
                 type="text"
                 placeholder="Upload your CV"
                 value={file ? file.name : ''}
                 readOnly
                  name="cv"
                  className="px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[52px] outline-none"
                />
              </div>
              <label className='text-[14px] font-medium text-[#171C74]'> Click to upload your CV
                <input
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
              </label>
              <button
                type="submit"
                className="bg-[#474973] rounded-[10px] font-semibold text-[20px] w-full mt-[3rem] h-[64px] text-white hover:border-transparent hover:bg-[#353756] transition-all ease-out duration-[600]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default contact
