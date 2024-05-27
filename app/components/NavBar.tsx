import Link from "next/link"
import Logo from "./Logo"

interface PropsCNL{
  href:string,
  title:string,
  className?:string
}
const CustomNavLink:React.FC<PropsCNL> = ({href,title,className})=>{
  return(
    <Link 
      href={href}
      className={className}
    >
      {title}
    </Link>
  )
}

const NavBar:React.FC = () =>{
  return (
    <header className="flex justify-between items-center py-8 mx-32">
      <nav>
        <CustomNavLink href="/" title="Home"/>
        <CustomNavLink href="/about" title="About"/>
        <CustomNavLink href="/projects" title="Projects"/>
        <CustomNavLink href="/articles" title="Articles"/>
      </nav>

      <div className="absolute left-1/2 top-2 translate-x-[-50%]">
        <Logo/>
      </div>

      <nav>
        <Link href="/" target="_blank">T</Link>
        <Link href="/" target="_blank">T</Link>
        <Link href="/" target="_blank">T</Link>
        <Link href="/" target="_blank">T</Link>
        <Link href="/" target="_blank">T</Link>
        <Link href="/" target="_blank">T</Link>
      </nav>
    </header>
  )
}

export default NavBar