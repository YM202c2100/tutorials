"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icons"
import { AddUnderLine } from "./Helpers"

interface LogoProps{
  className?:string
}

interface CustomLinkProps{
  href:string
  title:string
}

const Logo:React.FC<LogoProps> = ({className})=>{
  const [isMenuOpen, toggleMenu] = useState<boolean>(false)
  
  const CustomLink:React.FC<CustomLinkProps> = ({href, title})=>{
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

  const PopupMenu:React.FC = ()=>{
    return(
      <div className="min-w-[60vw] backdrop-blur-md bg-black/70 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
        <nav className="items-center flex flex-col space-y-2 p-5">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/articles" title="Articles" />
        </nav>
        <nav className="flex items-center justify-center p-6 pt-0">
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


  return(<>
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
    </div>

    {isMenuOpen && <PopupMenu/>}
  </>)
}

export default Logo