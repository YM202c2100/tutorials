import Link from "next/link"

interface Props {
  title:string,
  url:string,
  className?:string
}

const Article:React.FC<Props> = ({title, url, className})=>{
  return(
    <Link 
      href={url} 
      target="_blank"
      className={`hover:underline ${className}`}>{title}</Link>
  )
}

export default Article