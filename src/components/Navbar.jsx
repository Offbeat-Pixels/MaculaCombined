import React, { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { Menu, PhoneCall, SquareX } from "lucide-react";


export default function Navbar() {

 

  return (
    <nav className="flex   bg-transparent  fixed top-0  left-0  z-[99999] items-center justify-between px-5 sm:px-8 md:px-10 xl:px-16 2xl:px-24 py-2 h-14 sm:h-16 md:h-40 w-full">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Macula Logo"
          width={120}
          height={60}
          className="h-10 mr-24 md:mr-0  md:h-16  object-contain w-44"
        />
      </Link>

      {/* <Link id="btn" to="/contact" className="absolute top-[50vh]">
        <div className="flex items-center border mt-10 gap-2 py-1 px-3 sm:py-1 sm:px-2 mx-auto w-fit bg-white rounded-full hover:bg-slate-300 transition-colors">
          <div className="bg-[#373737] rounded-full p-2 shadow-md cursor-pointer">
            <PhoneCall className="w-5 h-5 text-white" />
          </div>

          <span className="hidden md:block bg-[#373737] text-white py-2 px-2 rounded-full text-sm sm:text-base">
            Schedule a Call
          </span>
        </div>
      </Link> */}
    </nav>
  );
}
