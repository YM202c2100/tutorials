"use client"

import Link from "next/link"
import Image, { StaticImageData } from "next/image"

interface Props {
  title:string,
  url:string,
  thumbnail:StaticImageData,
  className?:string
}

const Article:React.FC<Props> = ({title, url, thumbnail, className})=>{
  return(<>
    <Link 
      href={url} 
      target="_blank"
      className={`hover:underline ${className}`}
      onMouseMove={(e)=>{console.log(e.pageX)}}
    >
      {title}
    </Link>
    <Image src={thumbnail} alt="sampleThumbnailImage"/>
  </>)
}

export default Article