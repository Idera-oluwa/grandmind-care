"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsStaggered } from "react-icons/fa6";

const navbar = ({ showSidebar }) => {
  const pathname = usePathname();
  return (
    <div className="w-full py-[2rem] fixed top-0 bg-white z-[1000] shadow-shadow4">
      <div className="flex flex-row items-center justify-between w-[90vw]  2xl:max-w-[1440px] mx-auto">
        <Link href="/">
          <img
            src="/Images/home/LOGO.svg"
            alt=""
            className="w-[133.86px] h-[34px]"
          />
        </Link>
        <ul className="hidden lg:flex flex-row gap-[8px] items-center">
          <Link href="/">
            <li
              className={`text-[14px] text-center transition-all ease-out duration-[600] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${
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
              className={`transition-all ease-out duration-[600] text-[14px] text-center font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${
                pathname === "/about"
                  ? "bg-[#252760] text-[#FFFFFF]"
                  : "bg-transparent text-[#1B1B1E] "
              }`}
            >
              ABOUT US
            </li>
          </Link>
          <Link href="/services">
            <li
              className={`text-[14px] text-center transition-all ease-out duration-[600] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${
                pathname === "/services"
                  ? "bg-[#252760] text-[#FFFFFF]"
                  : "bg-transparent text-[#1B1B1E] "
              }`}
            >
              OUR SERVICES
            </li>
          </Link>
          <Link href="/staffing">
            <li
              className={`text-[14px] text-center transition-all ease-out duration-[600] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${
                pathname === "/staffing"
                  ? "bg-[#252760] text-[#FFFFFF]"
                  : "bg-transparent text-[#1B1B1E] "
              }`}
            >
              STAFFING
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`text-[14px] text-center transition-all ease-out duration-[600] font-medium py-[5px] px-[15px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer rounded-[5px] ${
                pathname === "/contact"
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
          <a href="info@grandmindcare.co.uk">
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
    </div>
  );
};

export default navbar;
