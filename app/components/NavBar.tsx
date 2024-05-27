import Link from "next/link"
import Logo from "./Logo"

const NavBar:React.FC = () =>{
  return (
    <header className="flex justify-between items-center py-8 mx-32">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
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