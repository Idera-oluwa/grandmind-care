"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar2 from "./home/navbar2";
import { FaBarsStaggered } from "react-icons/fa6";

const navbar = ({ showSidebar }) => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > window.innerHeight) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between w-[90vw]  2xl:max-w-[1440px] mx-auto mt-[2rem]">
        <Link href="/">
          <img
            src="/Images/home/LOGO.svg"
            alt=""
            className="w-[133.86px] h-[34px]"
          />
        </Link>
        <ul className="hidden lg:flex flex-row gap-[8px] items-center ">
          <Link href="/">
            <li
              className={`text-[14px] text-center transition-color ease-out duration-[600] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${
                pathname === "/"
                  ? "bg-[#252760] text-[#FFFFFF]"
                  : "bg-transparent text-[#1B1B1E] "
              }`}
            >
              HOME
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`transition-color ease-out duration-[700] text-[14px] text-center font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${
                pathname === "/about/"
                  ? "bg-[#252760] text-[#FFFFFF]"
                  : "bg-transparent text-[#1B1B1E] "
              }`}
            >
              ABOUT US
            </li>
          </Link>
          <Link href="/services">
            <li
              className={`text-[14px] text-center transition-color ease-out duration-[700] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${
                pathname === "/services/"
                  ? "bg-[#252760] text-[#FFFFFF]"
                  : "bg-transparent text-[#1B1B1E] "
              }`}
            >
              OUR SERVICES
            </li>
          </Link>
          <Link href="/staffing">
            <li
              className={`text-[14px] text-center transition-color ease-out duration-[700] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${
                pathname === "/staffing/"
                  ? "bg-[#252760] text-[#FFFFFF]"
                  : "bg-transparent text-[#1B1B1E] "
              }`}
            >
              STAFFING
            </li>
          </Link>
          <Link href="/cform">
            <li
              className={`text-[14px] text-center transition-all ease-out duration-[700] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${
                pathname === "/cform/"
                  ? "bg-[#252760] text-[#FFFFFF]"
                  : "bg-transparent text-[#1B1B1E] "
              }`}
            >
              CONTACT US
            </li>
          </Link>
        </ul>
        <div className="hidden lg:flex flex-row gap-[8px] items-center">
          <a
            href="https://www.facebook.com/LCBNTV"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Images/home/facebook-logo.png" alt="" />
          </a>
          <a href="mailto:info@grandmindcare.co.uk">
            <img src="/Images/home/mail-logo.png" alt="" />
          </a>
          <a href="https://wa.me/447903220307" target="_blank" rel="noreferrer">
            <img src="/Images/home/whatsapp-icon.png" alt="" />
          </a>
        </div>
        <FaBarsStaggered
          className="text-[30px] lg:hidden cursor-pointer text-[#252760]"
          onClick={showSidebar}
        />
      </div>
      {show && <Navbar2 showSidebar={showSidebar} />}
    </div>
  );
};

export default navbar;
