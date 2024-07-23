"use client"
import { useRef } from "react"

interface ContentProps{
  color:string
}
const Content:React.FC<ContentProps> = ({color})=>{
  return(
    <div className={`
      w-full sm:w-1/2 md:w-1/3 aspect-square
      flex-shrink-0
      ${color}`}>
    </div>
  )
}

const Slider:React.FC = ()=>{
  const carouselRef = useRef<HTMLDivElement>(null)

  const dragging = (e:React.MouseEvent)=>{
    if(carouselRef.current){
      carouselRef.current.scrollLeft = e.pageX
    }
  }

  return(
    <div className="mt-20 mx-10">
      <div 
        ref={carouselRef} 
        className="flex space-x-1 overflow-hidden"
        onMouseMove={dragging}
      >
        <Content color={"bg-blue-400"}/>
        <Content color={"bg-red-400"}/>
        <Content color={"bg-green-400"}/>
        <Content color={"bg-yellow-400"}/>
        <Content color={"bg-gray-400"}/>
      </div>
    </div>
  )
}

export default Slider