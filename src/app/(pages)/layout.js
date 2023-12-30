"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar";
import Subscribe from "../../components/subscribe";
import Sidebar from "../../components/sidebar";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const LayoutTransition = ({ children }) => {
  const [show, setShow] = useState(false);
  const showSidebar = () => {
    setShow(true);
  };
  const hideSidebar = () => {
    setShow(false);
  };

  return (
    <div>
      {" "}
      <Sidebar show={show} hideSidebar={hideSidebar} />
      <Navbar showSidebar={showSidebar} />
      {children}
      <Subscribe />
    </div>
  );
};

export default LayoutTransition;
