"use client"

import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface CUTProps{
  value: number
}

const CountUpTo:React.FC<CUTProps> = ({value})=>{
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref)

  useEffect(()=>{
    if(isInView){
      console.log("inView")
    }
  },[isInView])
  return(
    <span ref={ref}>{value}</span>
  )
}

export default CountUpTo