import Link from "next/link"

interface Props {
  title:string,
  url:string,
  className?:string
}

const Article:React.FC<Props> = ({title, url})=>{
  return(
    <Link href={url} target="_blank">{title}</Link>
  )
}

export default Article