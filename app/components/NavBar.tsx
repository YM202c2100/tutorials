"use client"

import Link from "next/link"
import Logo from "./Logo"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icons"

interface PropsCNL{
  href:string,
  title:string,
  className?:string
}
const CustomNavLink:React.FC<PropsCNL> = ({href,title,className})=>{
  const currentPath = usePathname()
  return(<>
    <div className={`${className} group`}>
      <Link 
        href={href}
      >
        {title}
      </Link>
      <span className={`bg-black block h-0.5 group-hover:w-full transition-[width] duration-150 ease-in ${(currentPath===href)?"w-full":"w-0"}`}>&nbsp;</span>
    </div>
    </>)
}

const NavBar:React.FC = () =>{
  return (
    <header className="flex justify-between items-center py-8 mx-32">
      <nav className="flex">
        <CustomNavLink href="/" title="Home" className="mr-4"/>
        <CustomNavLink href="/about" title="About" className="mx-4"/>
        <CustomNavLink href="/projects" title="Projects" className="mx-4"/>
        <CustomNavLink href="/articles" title="Articles" className="ml-4"/>
      </nav>

      <div className="absolute left-1/2 top-2 translate-x-[-50%]">
        <Logo/>
      </div>

      <nav className="flex">
        <motion.a href="https://x.com" target="_blank" whileHover={{scale:1.1, y:-2}}>
          <TwitterIcon className=""/>
        </motion.a>
        <motion.a href="https://github.com" target="_blank" whileHover={{scale:1.1, y:-2}}>
          <GithubIcon className=""/>
        </motion.a>
        <motion.a href="https://linkedIn.com" target="_blank" whileHover={{scale:1.1, y:-2}}>
          <LinkedInIcon className=""/>
        </motion.a>
        <motion.a href="https://pinterest.jp" target="_blank" whileHover={{scale:1.1, y:-2}}>
          <PinterestIcon className=""/>
        </motion.a>
        <motion.a href="https://dribbble.com" target="_blank" whileHover={{scale:1.1, y:-2}}>
          <DribbbleIcon className=""/>
        </motion.a>
        <motion.a href="/" target="_blank" whileHover={{scale:1.1, y:-2}}>T</motion.a>
      </nav>
    </header>
  )
}

export default NavBar