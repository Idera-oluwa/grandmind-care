"use client";
import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebar = ({ show, hideSidebar }) => {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      hideSidebar();
    }, 600);
  }, [pathname]);
  return (
    <div
      className={`lg:hidden fixed top-0 transition-all ease-out duration-600 container  ${
        show ? `transform translate-x-[0]` : "transform -translate-x-[100%]"
      } bg-white h-[100vh] z-[100000]`}
    >
      <div className="flex flex-row items-center justify-between  mx-auto mt-[2rem] px-3">
        <Link href="/">
          <img
            src="/Images/home/LOGO.svg"
            alt=""
            className="w-[90px] h-[20px] md:w-[133.86px] md:h-[34px]"
          />
        </Link>
        <FaTimes
          className="text-[20px] cursor-pointer text-[#252760]"
          onClick={hideSidebar}
        />
      </div>
      <ul className="flex flex-col mt-[2rem]">
        <Link href="/">
          <li
            className={`text-[14px] transition-all ease-out duration-[600] font-medium py-[15px] px-[15px] hover:px-[20px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer ${
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
            className={`transition-all ease-out duration-[600] text-[14px] font-medium py-[15px] px-[15px] hover:px-[20px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer ${
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
            className={`text-[14px] transition-all ease-out duration-[600] font-medium py-[15px] px-[15px] hover:px-[20px] hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer ${
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
            className={`text-[14px] transition-all ease-out duration-[600] font-medium py-[15px] px-[15px] hover:px-[20px]  hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer ${
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
            className={`text-[14px] transition-all ease-out duration-[600] font-medium py-[15px] px-[15px] hover:px-[20px]  hover:bg-[#252760] hover:text-[#FFFFFF] cursor-pointer ${
              pathname === "/cform/"
                ? "bg-[#252760] text-[#FFFFFF]"
                : "bg-transparent text-[#1B1B1E] "
            }`}
          >
            CONTACT US
          </li>
        </Link>
      </ul>
      <div className="flex flex-row gap-[8px] items-center justify-center mt-[3rem]">
      <a
            href="https://web.facebook.com/profile.php?id=61555673407229&_rdc=1&_rdr"
            target="_blank"
            rel="noreferrer"
          >
        <img src="/Images/home/facebook-logo.png" alt="" />
        </a>
        <a href="mailto:info@grandmindcare.co.uk">
          <img src="/Images/home/mail-logo.png" alt="" />
        </a>
        <a href="https://wa.me/447466308429" target="_blank" rel="noreferrer">
          <img src="/Images/home/whatsapp-icon.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default sidebar;
