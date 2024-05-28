
interface animatedTitleProps{
  text:string
}

const AnimatedTitle:React.FC<animatedTitleProps> = ({text})=>{
  return(
    <h1>{text}</h1>
  )
}

export default AnimatedTitle