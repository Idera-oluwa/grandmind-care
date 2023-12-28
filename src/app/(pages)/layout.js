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

  const pathname = usePathname();
  const lastPageRef = useRef(null);
  const currentPageRef = useRef(null);
  const exitAnimationDivRef = useRef(null);

  useLayoutEffect(() => {
    if (!currentPageRef.current) return;
    if (!lastPageRef.current)
      lastPageRef.current = currentPageRef.current.children;

    exitAnimationDivRef.current?.appendChild(
      lastPageRef.current[0].cloneNode(true)
    );
    lastPageRef.current = currentPageRef.current.children;
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname + "exit-animation"}
        style={{
          position: "absolute",
        }}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
        }}
        transition={{ ease: "easeIn", duration: 0.4 }}
      >
        <div ref={exitAnimationDivRef} />
      </motion.div>

      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.4 }}
      >
        <div ref={currentPageRef}>
          {" "}
          <Sidebar show={show} hideSidebar={hideSidebar} />
          <Navbar showSidebar={showSidebar} />
          {children}
          <Subscribe />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LayoutTransition;
