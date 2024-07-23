"use client"

import Link from "next/link"
import Logo from "./Logo"
import { motion } from "framer-motion"

import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icons"
import { AddUnderLine } from "./Helpers"

interface PropsCNL{
  href:string,
  title:string,
  className?:string
}
const CustomNavLink:React.FC<PropsCNL> = ({href,title})=>{
  return(
    <AddUnderLine href={href} lineStyle="bg-black h-[2px]">
      <Link href={href}>
        {title}
      </Link>
    </AddUnderLine>
  )
}

const NavBar:React.FC = () =>{
  return (
    <header className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-20 md:mt-14 md:mx-4">
      <Logo className="fixed top-3 left-1/2 -translate-x-1/2"/>

      <nav className="flex space-x-8">
        <CustomNavLink href="/" title="Home"/>
        <CustomNavLink href="/about" title="About"/>
        <CustomNavLink href="/projects" title="Projects"/>
        <CustomNavLink href="/articles" title="Articles"/>
      </nav>

      <nav className="fixed md:static top-0 right-0 flex space-x-1 md:space-x-3 mt-2">
        <TwitterIcon className="w-5 md:w-6"/>
        <GithubIcon className="w-5 md:w-6"/>
        <LinkedInIcon className="w-5 md:w-6"/>
        <PinterestIcon className="w-5 md:w-6"/>
        <DribbbleIcon className="w-5 md:w-6"/>
        <motion.a href="/" target="_blank" whileHover={{scale:1.1, y:-2}} whileTap={{scale:0.9}} className="w-6 ml-3">T</motion.a>
      </nav>
    </header>
  )
}

export default NavBar