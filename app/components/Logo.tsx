"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icons"
import { AddUnderLine } from "./Helpers"


const MotionLink = motion(Link)

interface LogoProps{
  className?:string
}

interface PopupProps{
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>
}

interface CustomLinkProps{
  href:string
  title:string
  toggleMenu:React.Dispatch<React.SetStateAction<boolean>>
}

const CustomLink:React.FC<CustomLinkProps> = ({href, title, toggleMenu})=>{
  return(
    <AddUnderLine 
      href={href} 
      lineStyle="bg-white h-[2px] -translate-y-[2px]"
    >
      <Link 
        href={href}
        className="text-white" 
        onClick={()=>toggleMenu(false)}
      >
        {title}
      </Link>
    </AddUnderLine>
  )
}

const PopupMenu:React.FC<PopupProps> = ({toggleMenu})=>{
  return(
    <div className="w-[60vw] h-[50vh] backdrop-blur-md bg-black/70 fixed top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-lg">
      <nav className="flex items-center justify-center">
        <TwitterIcon className="w-6 mr-3"/>
        <GithubIcon className="w-6 mx-3"/>
        <LinkedInIcon className="w-6 mx-3"/>
        <PinterestIcon className="w-6 mx-3"/>
        <DribbbleIcon className="w-6 mx-3"/>
        <motion.a href="/" target="_blank" whileHover={{scale:1.1, y:-2}} whileTap={{scale:0.9}} className="w-6 ml-3">T</motion.a>
      </nav>
      <nav className="items-center flex flex-col">
        <Link href="/" className="text-white group" onClick={()=>toggleMenu(false)}>
          Home
          <div className="w-0 group-hover:w-full h-0.5 relative -translate-y-[2px] bg-white ease-in transition-[width]"/>  
        </Link>
        <Link href="/about" className="text-white group" onClick={()=>toggleMenu(false)}>
          About
          <div className="w-0 group-hover:w-full h-0.5 relative -translate-y-[2px] bg-white ease-in transition-[width]"/>  
        </Link>
        <Link href="/projects" className="text-white group" onClick={()=>toggleMenu(false)}>
          Projects
          <div className="w-0 group-hover:w-full h-0.5 relative -translate-y-[2px] bg-white ease-in transition-[width]"/>  
        </Link>
        <Link href="/articles" className="text-white group" onClick={()=>toggleMenu(false)}>
          Articles
          <div className="w-0 group-hover:w-full h-0.5 relative -translate-y-[2px] bg-white ease-in transition-[width]"/>  
        </Link>
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

      {isMenuOpen && <PopupMenu toggleMenu={toggleMenu}/>}
    </div>
  )
}

export default Logo