"use client";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const joinus = () => {
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
        setStatus("Thanks for your registration! We'll be in touch soon.");
        form.reset();
      } else {
        const errorData = await response.json();
        if (errorData.errors) {
          setStatus(errorData.errors.map(error => error.message).join(", "));
        } else {
          setStatus("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form");
    }

    setIsSubmitting(false);
  };
  return (
    <div className="mt-[7rem] md:mt-[10rem] md:px-[3rem]" id="register">
      <Fade>
      <h1 className="text-[20px] font-semibold text-[#1B1B1E] text-center">
        Join Us On The Care Journey
      </h1>
      <div className="flex flex-col md:flex-row mt-[2rem] md:mt-[4rem] md:px-[2rem] justify-between gap-[2rem] md:gap-0">
        <div className="w-full md:w-[50%] mt-[2rem] md:mt-[4rem]">
          <img src="/Images/home/Logo-new.svg" alt="" />
          <p className="text-[14px] md:text-[16px] font-medium text-[#1B1B1E] w-[95%] lg:w-[85%] mt-[2rem] leading-[36.02px]">
            Whether you're a carer looking for fulfilling opportunities or a
            family seeking reliable and caring support, we invite you to join us
            on this care journey. Explore,{" "}
            <span className="font-medium text-[#32936F]">Grandmind Care</span>{" "}
            connect with our community, and be a part of something truly
            meaningful.
          </p>
        </div>
        <div className="w-full md:w-[50%]">
          <div className="w-full md:w-[90%] bg-[#47497310] ml-auto p-[3rem] rounded-[10px] border border-[#47497328]">
            <form action="https://formspree.io/f/xayrynve" method="POST" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[3rem]">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  className="py-[15px] px-[20px] border border-[#47497380] w-full text-[14px] font-bold text-[#474973] rounded-[10px] outline-none bg-[#47497303] h-[52px]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="py-[15px] px-[20px] border border-[#47497380] w-full text-[14px] font-bold text-[#474973] rounded-[10px] outline-none bg-[#47497303] h-[52px] "
                  required
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Phone Number"
                  className="py-[15px] px-[20px] border border-[#47497380] w-full text-[14px] font-bold text-[#474973] rounded-[10px] outline-none bg-[#47497303] h-[52px] "
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#474973] rounded-[10px] h-[64px] font-semibold text-[20px] text-white flex justify-center items-center mt-[2rem] hover:border-transparent hover:bg-[#353756] transition-all ease-out duration-[600] disabled:opacity-50"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
              {status && (
                <p className={`mt-[1rem] text-center text-[14px] ${status.includes("Thanks") ? "text-green-600" : "text-red-600"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div></Fade>
    </div>
  );
};

export default joinus;
