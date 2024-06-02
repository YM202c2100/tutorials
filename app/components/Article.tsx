"use client"

import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { useRef } from "react"
import { motion, useMotionValue } from "framer-motion"

interface Props {
  title:string,
  url:string,
  thumbnail:StaticImageData,
  className?:string
}

const Article:React.FC<Props> = ({title, url, thumbnail, className})=>{

  const thumbNailRef = useRef<HTMLImageElement>(null)
  const MotionImage = motion(Image)
  const x = useMotionValue(0)

  function showThubnail(e:React.MouseEvent<HTMLAnchorElement>){
    console.log(e.pageX)
    if(thumbNailRef.current){
      thumbNailRef.current.style.display = "inline-block"
      x.set(e.pageX)
    }
  }

  function hideThumbnail(){
    if(thumbNailRef.current){
      thumbNailRef.current.style.display = "none"
    }
  }

  return(<>
    <Link 
      href={url} 
      target="_blank"
      className={`relative hover:underline ${className}`}
      onMouseMove={showThubnail}
      onMouseLeave={hideThumbnail}
    >
      {title}
    </Link>
    <MotionImage 
      ref={thumbNailRef}
      src={thumbnail}
      alt="sampleThumbnailImage"
      className="hidden absolute"
      style={{x:x}}
    />
  </>)
}

export default Article