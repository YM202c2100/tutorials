"use client"

import Link from "next/link"
import { motion } from "framer-motion"


const MotionLink = motion(Link)
const Logo = ()=>{
  return(
    <div>
      <MotionLink
        href="/" 
        className="text-white font-bold text-2xl bg-black rounded-full flex w-16 h-16 justify-center items-center"
        whileHover={
          {
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,  180,1)", "#121212"],
            transition:{duration:1.5, repeat:Infinity}
          }
        }
      >CB</MotionLink>
    </div>
  )
}

export default Logo