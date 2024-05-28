
interface animatedTitleProps{
  text:string
}

const AnimatedTitle:React.FC<animatedTitleProps> = ({text})=>{
  return(
    <h1>
      {text.split(" ").map((word, idx)=>
        <span key={word+"-"+idx}>
          {word}&nbsp;
        </span>
      )}
    </h1>
  )
}

export default AnimatedTitle