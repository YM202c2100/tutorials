"use client"

interface ContentProps{
  color:string
}
const Content:React.FC<ContentProps> = ({color})=>{
  return(
    <div className={`
      w-1/3 aspect-square
      flex-shrink-0
      ${color}`}>
    </div>
  )
}

const Slider:React.FC = ()=>{
  return(
    <div className="mt-20 overflow-hidden mx-10">
      <div className="flex space-x-1">
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