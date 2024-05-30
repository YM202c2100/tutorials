"use client"

import { useInView, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface CUTProps{
  value: number
  className?: string
}

const CountUpTo:React.FC<CUTProps> = ({value, className})=>{
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref)
  const count = useSpring(0, {duration:3000, bounce:0})

  useEffect(()=>{
    if(isInView){
      count.set(value)
    }
  },[isInView])

  useEffect(()=>{
    count.on("change", (latest)=>{
      if(ref.current){
        ref.current.textContent = latest.toFixed(0)
      }
    })
  },[])

  return(
    <span ref={ref} className={className}></span>
  )
}

export default CountUpTo