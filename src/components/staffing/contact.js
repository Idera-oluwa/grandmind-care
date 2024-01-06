"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const contact = () => {
  const [file, setFile] = useState(null);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (fullname === "" || email === "" || file === "") {
      toast.warning("Please input all credentials !", {
        position: toast.POSITION.TOP_RIGHT,
        type: "warning",
      });
      setLoading(false);
    } else {
      try {
        const formData = new FormData();
        formData.append("cv", file);
        formData.append("email", email);
        formData.append("fullname", fullname);

        const response = await axios.post(
          "https://grandmindcare.onrender.com/api/v1/grandmind/applicants",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
        toast.success("Registration Successful !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
        setFullname("");
        setEmail("");
        setFile(null);
      } catch (error) {
        if (error.response) {
          console.log("Error Response Data:", error.response.data);
          console.log("Error Response Status:", error.response.status);
          console.log("Error Response Headers:", error.response.headers);
        }
        if (fullname !== "" || email !== "" || file !== "") {
          toast.error("Registration failed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        setLoading(false);

        throw error;
      }
    }
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };
  return (
    <div className="mt-[7rem] md:mt-[12rem] max-w-[100vw] mb-[22rem]">
      <h1 className="text-center text-[20px] font-semibold mb-[2rem]">
        Apply Now
      </h1>
      <div className="w-full bg-[#474973] h-[336px] flex flex-col lg:flex-row  px-[4rem]">
        <div className="w-full lg:w-[30%] my-[auto]">
          <h1 className="font-semibold md:text-[40px] text-[30px] text-[white]">
            Tell us about you!
          </h1>
          <p className="font-semibold md:text-[16px] text-[14px] text-[white] mt-[1rem]">
            Get started with your application here, send a detailed copy of your
            cv to us and let us review your application.
          </p>
        </div>
        <div className="w-full lg:w-[60%] ml-[auto]">
          <div className="w-[600px] bg-[#474973] h-[300px] mt-[36px] border-b-0 border-2 border-white p-[1rem] rounded-t-[25px]">
            <div className="w-full h-[528px] p-[1rem] rounded-[10px] bg-[#474973] items-center justify-center">
              <div className="w-full h-full border border-[#424359] rounded-[20px] bg-white p-[2rem]">
                <form onSubmit={handleSubmit}>
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
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
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
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[52px] outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px] mt-[15px]">
                    <label
                      htmlFor="cv"
                      className="text-[16px] font-bold text-[#474973]"
                    >
                      CV
                    </label>
                    <input
                      type="text"
                      value={file ? file.name : ""}
                      required
                      readOnly
                      name="cv"
                      className="px-[20px] py-[20px] rounded-[10px] border border-[#47497380] h-[52px] outline-none"
                    />
                  </div>
                  <label className="text-[14px] font-medium text-[#171C74] mt-[1rem] cursor-pointer">
                    {" "}
                    Click to upload your CV
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                      accept=".pdf, .doc, .docx"
                    />
                  </label>
                  <button
                    type="submit"
                    className="bg-[#474973] rounded-[10px] font-semibold text-[20px] w-full mt-[3rem] h-[64px] text-white hover:border-transparent hover:bg-[#353756] transition-all ease-out duration-[600]"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                  <ToastContainer />
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
