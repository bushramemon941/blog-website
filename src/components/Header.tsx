
  
  
  
  
  
  
  
  
  
  
  
  
  'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { clearInterval } from "timers";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export default  function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const Options:Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month:'long',
        day:'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false,
       };
       setCurrentDateTime(
         now.toLocaleDateString("en-US", Options) +
           "" +
    
 
            now.toLocaleTimeString('en-US', { hour12: false })
       );
    };
    updateDateTime();
    const interValid = setInterval(updateDateTime ,1000);
    return () => clearInterval(interValid);

}, []);  

  return (
    <header className=" text-blue-400 body-font shadow-lg">
       <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 text-black font-extrabold">
            <span>{currentDateTime}</span> 
            
        </div>
       


       </div>
       </header>
  )};