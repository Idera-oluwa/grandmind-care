"use client"
// import './globals.css'
import React,{useState} from 'react'
import Navbar from '../../components/navbar'
import Subscribe from '../../components/subscribe'
import Sidebar from '../../components/sidebar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [show, setShow] = useState(false)
  const showSidebar = ()=>{
      setShow(true)
  }
  const hideSidebar = ()=>{
      setShow(false)
  }
  return (
    <html lang="en">
    <head>
        <title>Grandmind Care</title>
      </head>
      <body className={inter.className}>
        <Sidebar show={show} hideSidebar={hideSidebar}/>
        <Navbar showSidebar={showSidebar}/>
        {children}
        <Subscribe/>
        </body>
    </html>
  )
}
