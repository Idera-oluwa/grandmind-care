"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const joinus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const handleRegistration = async (e) => {
    e.preventDefault();
    const url = "https://grandmindcare.onrender.com/api/v1/grandmind";
    const registrationData = {
      name: name,
      email: email,
      contact: contact,
    };

    try {
      // Make a POST request with Axios using async/await
      const response = await axios.post(url, registrationData);

      // Handle the response after registration
      console.log("Registration successful:", response.data);
      toast.success("Registration Successful !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setName("");
      setEmail("");
      setContact("");
    } catch (error) {
      // Handle registration errors
      console.error("Registration failed:", error);
      if (name === "" || email === "" || contact === "") {
        toast.warning("Please input all credentials !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Registration failed !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      setName("");
      setEmail("");
      setContact("");
    }
  };
  return (
    <div className="mt-[7rem] md:mt-[10rem] md:px-[3rem]" id="register">
      <h1 className="text-[20px] font-semibold text-[#1B1B1E] text-center">
        Join Us On The Care Journey
      </h1>
      <div className="flex flex-col md:flex-row mt-[2rem] md:mt-[4rem] md:px-[2rem] justify-between gap-[2rem] md:gap-0">
        <div className="w-full md:w-[50%] mt-[2rem] md:mt-[4rem]">
          <img src="Images/home/LOGO.png" alt="" />
          <p className="text-[14px] md:text-[16px] font-medium text-[#1B1B1E] w-[95%] lg:w-[85%] mt-[2rem] leading-[36.02px]">
            Whether you're a caregiver looking for fulfilling opportunities or a
            family seeking reliable and caring support, we invite you to join us
            on this care journey. Explore,{" "}
            <span className="font-medium text-[#32936F]">Grandmind Care</span>{" "}
            connect with our community, and be a part of something truly
            meaningful.
          </p>
        </div>
        <div className="w-full md:w-[50%]">
          <div className="w-full md:w-[90%] bg-[#47497310] ml-auto p-[3rem] rounded-[10px] border border-[#47497328]">
            <form>
              <div className="flex flex-col gap-[3rem]">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="first-name"
                  placeholder="First Name"
                  className="py-[15px] px-[20px] border border-[#47497380] w-full text-[14px] font-bold text-[#474973] rounded-[10px] outline-none bg-[#47497303] h-[52px]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="Email Address"
                  className="py-[15px] px-[20px] border border-[#47497380] w-full text-[14px] font-bold text-[#474973] rounded-[10px] outline-none bg-[#47497303] h-[52px] "
                />
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  name="contact"
                  placeholder="Phone Number"
                  className="py-[15px] px-[20px] border border-[#47497380] w-full text-[14px] font-bold text-[#474973] rounded-[10px] outline-none bg-[#47497303] h-[52px] "
                />
              </div>
              <button
                className="w-full bg-[#474973] rounded-[10px] h-[64px] font-semibold text-[20px] text-white flex justify-center items-center mt-[2rem] hover:border-transparent hover:bg-[#353756] transition-all ease-out duration-[600]"
                onClick={handleRegistration}
              >
                Register
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default joinus;
