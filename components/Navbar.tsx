"use client"

import Link from "next/link"
import Image from "next/image"

import CustomButton from "./CustomButton"
import { useEffect, useState } from "react"

function Navbar(){

  const [ isNavbarActive, setIsNavbarActive ] = useState(false);

  function changeNavbarStyle() {
    if(window.scrollY >= 40 && window.scrollY <= 800){
      setIsNavbarActive(true);
    } else {
      setIsNavbarActive(false);
    }
  } 

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarStyle);

  }, [])
    

  return (
    <header className={`w-full sticky  top-0 z-10 ${isNavbarActive ? "bg-transparent" : "bg-white"} transition-all ease-in duration-300`}>
      <nav className="max-w-[1440px] mx-auto flex justify-between sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image 
            src="logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles={` rounded-full min-w-[130px] z-30  ${isNavbarActive ? "bg-white text-primary-blue hover:bg-slate-100" : "bg-primary-blue text-white hover:bg-blue-400 "} transition-all ease-in-out duration-150`}
        />
      </nav>
      
    </header>
  )
}

export default Navbar