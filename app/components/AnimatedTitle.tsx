"use client"

import { motion, stagger } from "framer-motion"
interface animatedTitleProps{
  text:string,
  className?:string
}

const AnimatedTitle:React.FC<animatedTitleProps> = ({text, className})=>{
  const parentVariants = {
    initial:{
    },
    animate:{
      transition:{
        staggerChildren:0.05
      }
    },
  }
  const variants = {
    initial:{
      opacity:0,
      y:10
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        duration:0.5
      }
    },
  }
  return(<>
    <motion.h1 variants={parentVariants} initial="initial" animate="animate">
      {text.split(" ").map((word, idx)=>
        <motion.span key={word+"-"+idx} variants={variants} className={`inline-block font-bold`}>
          {word}&nbsp;
        </motion.span>
      )}
    </motion.h1>
    
  </>)
}

export default AnimatedTitle