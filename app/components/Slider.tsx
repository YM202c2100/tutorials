"use client"
import { useRef, useState } from "react"

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
  const [isDragStart, startDrag] = useState<boolean>(false)
  const [initialPageX, setInitialX] = useState<number>(0)
  const [prevScroll, setPrevScroll] = useState<number>(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const dragging = (e:React.MouseEvent)=>{
    if(carouselRef.current && isDragStart){
      const draggedDistance = initialPageX - e.pageX
      const scrollVal = prevScroll + draggedDistance
      carouselRef.current.scrollLeft = scrollVal
    }
  }

  const dragStartHandler = (e:React.MouseEvent) =>{
    e.preventDefault()
    startDrag(true)
    setInitialX(e.pageX)
    if(carouselRef.current){
      setPrevScroll(carouselRef.current.scrollLeft)
    }
  }

  return(
    <div className="mt-20 mx-10">
      <div 
        ref={carouselRef} 
        className="flex space-x-1 overflow-hidden"
        onMouseMove={dragging}
        onMouseDown={dragStartHandler}
        onMouseUp={()=>{startDrag(false)}}
        onMouseLeave={()=>{startDrag(false)}}
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