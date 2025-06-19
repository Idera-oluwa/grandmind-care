"use client";
import React, { useState } from "react";

const contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("Thanks for your application! We'll review your CV and get back to you soon.");
        form.reset();
      } else {
        const errorData = await response.json();
        if (errorData.errors) {
          setStatus(errorData.errors.map(error => error.message).join(", "));
        } else {
          setStatus("Oops! There was a problem submitting your application");
        }
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your application");
    }

    setIsSubmitting(false);
  };
  return (
    <div className="mt-[7rem] md:mt-[12rem] max-w-[100vw] mb-[35rem] lg:mb-[22rem]" id="apply">
      <h1 className="text-center text-[20px] font-semibold mb-[2rem]">
        Apply Now
      </h1>
      <div className="w-full bg-[#474973] h-[336px] flex flex-col lg:flex-row px-0  md:px-[4rem] pt-[2rem] lg:pt-0">
        <div className="w-full lg:w-[30%] my-[auto]">
          <h1 className="font-semibold md:text-[40px] text-[30px] text-[white] mx-auto text-center lg:text-left">
            Tell us about you!
          </h1>
          <p className="font-semibold md:text-[16px] text-[14px] text-[white] mt-[1rem] text-center lg:text-left">
            Get started with your application here, send a detailed copy of your
            cv to us and let us review your application.
          </p>
        </div>
        <div className="w-full lg:w-[60%] ml-[auto]">
          <div className="w-full md:w-[600px] mx-auto bg-transparent h-[300px] mt-[36px] md:border-b-0 md:border-2 md:border-white p-0 md:p-[1rem] rounded-t-[25px]">
            <div className="w-full h-[528px] p-[1rem] rounded-[10px] bg-[#474973] items-center justify-center">
              <div className="w-full h-full border border-[#424359] rounded-[20px] bg-white p-[2rem]">
                <form action="https://formspree.io/f/xayrynve" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
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
                      required
                      className="px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[52px] outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px] mt-[15px]">
                    <label
                      htmlFor="email"
                      className="text-[16px] font-bold text-[#474973]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[52px] outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px] mt-[15px]">
                    <label
                      htmlFor="cv"
                      className="text-[16px] font-bold text-[#474973]"
                    >
                      CV Upload
                    </label>
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf, .doc, .docx"
                      required
                      className="px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[52px] outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#474973] rounded-[10px] font-semibold text-[20px] w-full mt-[3rem] h-[64px] text-white hover:border-transparent hover:bg-[#353756] transition-all ease-out duration-[600] disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                  {status && (
                    <p className={`mt-[1rem] text-center text-[14px] ${status.includes("Thanks") ? "text-green-600" : "text-red-600"}`}>
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
