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
  const [isDragging, setDragging] = useState<boolean>(false)
  const [initialPageX, setInitialX] = useState<number>(0)
  const [prevScroll, setPrevScroll] = useState<number>(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  function getPageX(e:React.MouseEvent|React.TouchEvent):number{
    if("touches" in e){
      return e.touches[0].pageX
    }else{
      return e.pageX
    }
  }

  function getContentHalfWidth(parentDiv:HTMLDivElement):number{
    const parentWidth = parentDiv.offsetWidth

    let contentWidth
    if(parentWidth < 640){
      contentWidth = parentWidth
    }else if(parentWidth < 768){
      contentWidth = parentWidth/2
    }else{
      contentWidth = parentWidth/3
    }

    return contentWidth/2
  }

  function autoDrag(draggedDistance:number){
    if(!carouselRef.current) return
    const carousel = carouselRef.current
    const contentHalfWidth = getContentHalfWidth(carousel)
    const absDraggedDist = Math.abs(draggedDistance)

    if(draggedDistance > 0){
      if(draggedDistance < contentHalfWidth){
        carousel.scrollLeft -= draggedDistance
      }else{
        carousel.scrollLeft += contentHalfWidth*2 - draggedDistance + 4
      }
    }else{
      if(absDraggedDist < contentHalfWidth){
        carousel.scrollLeft += absDraggedDist
      }else{
        carousel.scrollLeft -= contentHalfWidth*2 - absDraggedDist
      }
    }
  }

  const scrollByDragging = (e:React.MouseEvent|React.TouchEvent)=>{
    if(carouselRef.current && isDragging){
      const draggedDistance = initialPageX - getPageX(e)
      const scrollVal = prevScroll + draggedDistance
      carouselRef.current.scrollLeft = scrollVal
    }
  }

  const dragStart = (e:React.MouseEvent|React.TouchEvent) =>{
    setDragging(true)

    if(!carouselRef.current) return
    setPrevScroll(carouselRef.current.scrollLeft)
    setInitialX(getPageX(e))

    if(e.nativeEvent instanceof MouseEvent){
      e.preventDefault()
    }
  }

  const dragEnd = (e:React.MouseEvent|React.TouchEvent)=>{
    setDragging(false)
    
    const draggedDistance = initialPageX - getPageX(e)
    setTimeout(()=>{autoDrag(draggedDistance)},0.1)
  }


  return(
    <div className="mt-20 mx-10">
      <div 
        ref={carouselRef} 
        className={`flex space-x-1 overflow-hidden ${isDragging ? "scroll-auto":"scroll-smooth"}`}
        onMouseMove={scrollByDragging}
        onTouchMove={scrollByDragging}
        onMouseDown={dragStart}
        onTouchStart={dragStart}
        onMouseUp={dragEnd}
        onTouchEnd={()=>{setDragging(false)}}
        onMouseLeave={()=>{setDragging(false)}}
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