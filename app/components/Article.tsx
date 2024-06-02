"use client"

import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { useRef } from "react"

interface Props {
  title:string,
  url:string,
  thumbnail:StaticImageData,
  className?:string
}

const Article:React.FC<Props> = ({title, url, thumbnail, className})=>{

  const thumbNailRef = useRef<HTMLImageElement>(null)

  function showThubnail(e:React.MouseEvent<HTMLAnchorElement>){
    console.log(e.pageX)
    if(thumbNailRef.current){
      thumbNailRef.current.style.display = "inline-block"
    }
  }

  return(<>
    <Link 
      href={url} 
      target="_blank"
      className={`hover:underline ${className}`}
      onMouseMove={showThubnail}
    >
      {title}
    </Link>
    <Image 
      ref={thumbNailRef}
      src={thumbnail}
      alt="sampleThumbnailImage"
      className="hidden"
    />
  </>)
}

export default Article