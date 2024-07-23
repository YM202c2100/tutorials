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
    <header className="flex flex-col justify-center items-center mt-20">
      <Logo className="fixed top-3 left-1/2 -translate-x-1/2"/>

      <nav className="flex space-x-8">
        <CustomNavLink href="/" title="Home"/>
        <CustomNavLink href="/about" title="About"/>
        <CustomNavLink href="/projects" title="Projects"/>
        <CustomNavLink href="/articles" title="Articles"/>
      </nav>

      {/* <nav className="flex">
        <TwitterIcon className="w-6 mr-3"/>
        <GithubIcon className="w-6 mx-3"/>
        <LinkedInIcon className="w-6 mx-3"/>
        <PinterestIcon className="w-6 mx-3"/>
        <DribbbleIcon className="w-6 mx-3"/>
        <motion.a href="/" target="_blank" whileHover={{scale:1.1, y:-2}} whileTap={{scale:0.9}} className="w-6 ml-3">T</motion.a>
      </nav> */}
    </header>
  )
}

export default NavBar