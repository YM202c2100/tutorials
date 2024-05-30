"use client"

import { useInView, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface CUTProps{
  value: number
}

const CountUpTo:React.FC<CUTProps> = ({value})=>{
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref)
  const count = useSpring(0)

  useEffect(()=>{
    if(isInView){
      count.set(value)
    }
  },[isInView])

  useEffect(()=>{
    count.on("change", (latest)=>{
      if(ref.current){
        ref.current.textContent = latest
      }
    })
  },[])

  return(
    <span ref={ref}></span>
  )
}

export default CountUpTo