"use client"

import { usePathname } from "next/navigation"

interface Props{
  href:string
  lineStyle:string
  children:React.ReactNode
}

const AddUnderLine:React.FC<Props> = ({href,lineStyle,children})=>{
  const currentPath = usePathname()
  return(<>
    <div className={"group"}>
      {children}
      <div className={`group-hover:w-full transition-[width] duration-150 ease-in ${(currentPath===href)?"w-full":"w-0"} ${lineStyle}`}>&nbsp;</div>
    </div>
  </>)
}

export{AddUnderLine}