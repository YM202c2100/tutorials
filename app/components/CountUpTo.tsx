
interface CUTProps{
  value: number
}

const CountUpTo:React.FC<CUTProps> = ({value})=>{
  return(
    <span>{value}</span>
  )
}

export default CountUpTo