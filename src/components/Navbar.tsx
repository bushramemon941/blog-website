"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Image from 'next/image'; // Import Image component

const Navbar = () => {
  const [isMenu, setMenu] = useState(false);

  function toggle() {
    setMenu(!isMenu);
  }

  return (
    <div className="py-6">
      {/* Nav1 for Desktop */}
      <div className="mx-10 sm:mx-auto max-w-6xl px-6 flex items-center justify-between border border-black p-3 rounded-full">
      <div>
          <Image
            src="/imgs/57logo.png" 
            alt="logo"
            className="log"
            width={100}
            height={100}
          />
        </div>

        <ul className="md:flex hidden gap-10 items-center font-[700] mr-5 text-[20px]">
          <li>
            <Link className="line" href={"/"} aria-label="Go to Home">Home</Link>
          </li>
          
          <li>
            <Link className="line" href={"/blog"} aria-label="Go to Blog">Blog</Link>
          </li>
          <li>
            <Link className="line" href={"/contact"} aria-label="Go to Contact">Contact</Link>
          </li>
        </ul>
        {/* Menu Icon */}
        <div onClick={toggle}>
          <IoMdMenu
            className="block md:hidden cursor-pointer"
            size={20}
          />
        </div>
      </div>

      {/* Nav2 for Mobile */}
      <div
        className={`nav2 md:hidden fixed top-[0px] right-0 w-full h-screen flex justify-center bg-[#080404ee] text-white font-bold z-10
          transition-all duration-500 ease-in-out transform ${
            isMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
      >
        <div className="absolute right-11 top-10 font-semibold">
          <IoCloseSharp
            className="text-orange-700"
            size={60}
            onClick={toggle}
          />
        </div>

        <ul className="navs z-10 flex md:hidden flex-col justify-center items-center text-[20px] gap-16">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
