"use client"

import Link from "next/link"

const Logo = ()=>{
  return(
    <div>
      <Link href="/" 
            className="text-white font-bold text-2xl bg-black rounded-full flex w-16 h-16 justify-center items-center"
      >CB</Link>
    </div>
  )
}

export default Logo