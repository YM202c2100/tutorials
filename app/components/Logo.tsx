import Link from "next/link"

const Logo = ()=>{
  return(
    <div className="bg-black w-16 h-16 rounded-full flex justify-center items-center">
      <Link href="/" 
            className="text-white font-bold text-2xl"
      >CB</Link>
    </div>
  )
}

export default Logo