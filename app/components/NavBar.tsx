import Link from "next/link"

const NavBar:React.FC = () =>{
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
      </nav>

      <div>Logo</div>

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