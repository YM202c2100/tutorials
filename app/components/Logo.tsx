"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icons"


const MotionLink = motion(Link)

interface LogoProps{
  className?:string
}

const PopupMenu:React.FC = ()=>{
  return(
    <div className="w-[60vw] h-[50vh] bg-red-500 fixed top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
      <nav className="flex items-center justify-center">
        <TwitterIcon className="w-6 mr-3"/>
        <GithubIcon className="w-6 mx-3"/>
        <LinkedInIcon className="w-6 mx-3"/>
        <PinterestIcon className="w-6 mx-3"/>
        <DribbbleIcon className="w-6 mx-3"/>
        <motion.a href="/" target="_blank" whileHover={{scale:1.1, y:-2}} whileTap={{scale:0.9}} className="w-6 ml-3">T</motion.a>
      </nav>
    </div>
  )
}

const Logo:React.FC<LogoProps> = ({className})=>{
  const [isMenuOpen, toggleMenu] = useState<boolean>(false)


  return(
    <div className={`${className}`}>
      <motion.button
        className="text-white font-bold text-2xl bg-black rounded-full flex w-16 h-16 justify-center items-center"
        onClick={()=>toggleMenu(!isMenuOpen)}
        whileHover={
          {
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,  180,1)", "#121212"],
            transition:{duration:1.5, repeat:Infinity}
          }
        }
      >
        CB
      </motion.button>

      {isMenuOpen && <PopupMenu/>}
    </div>
  )
}

export default Logo