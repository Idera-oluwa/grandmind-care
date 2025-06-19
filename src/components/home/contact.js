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
        setStatus("Thanks for your message! We'll get back to you soon.");
        form.reset();
      } else {
        const errorData = await response.json();
        if (errorData.errors) {
          setStatus(errorData.errors.map(error => error.message).join(", "));
        } else {
          setStatus("Oops! There was a problem submitting your message");
        }
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your message");
    }

    setIsSubmitting(false);
  };
  return (
    <div className="hidden md:block mt-[7rem] md:mt-[10rem] relative pb-[5rem] h-[652px] w-[90vw]  2xl:max-w-[1440px] mx-auto">
      <img
        src="/Images/home/cform.png"
        alt=""
        className="object-cover rounded-[10px] h-[11rem] w-full md:h-auto"
      />
      <div className="absolute top-0 left-0 flex flex-col items-center w-full mt-[1rem]">
        <div className="py-[1rem] md:py-[1rem] text-center flex flex-col items-center w-full">
          <p className="text-[24px] font-bold text-white">Contact the team</p>
          <p className="text-[12px] font-medium text-white w-[95%] md:w-[80%]  2xl:w-full lg:w-[40%] text-center mt-[8px]">
            Contacting the team is easy, enter your name, your email, and your
            message to get started.
          </p>
        </div>
        <div className="w-full md:w-[588px] h-[528px] rounded-[10px] bg-[#474973B2] mt-[1rem] md:mt-[1.5rem] flex items-center justify-center shadow-shadow2">
          <div className="w-full md:w-[557px] h-[500px] border border-[#424359] rounded-[10px] bg-white md:mt-[1.5rem] p-[2rem]">
            <form action="https://formspree.io/f/xayrynve" method="POST" onSubmit={handleSubmit}>
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
              <div className="flex flex-col gap-[10px] mt-[30px]">
                <label
                  htmlFor="message"
                  className="text-[16px] font-bold text-[#474973]"
                >
                  Write your message here
                </label>
                <textarea
                  name="message"
                  required
                  className="px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[177px] outline-none"
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
  );
};

export default contact;
