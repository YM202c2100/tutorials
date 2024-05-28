import Image from "next/image";
import NavBar from "./components/NavBar";
import profilePic from '@/public/images/profile/developer-pic-1.png'
import AnimatedTitle from "./components/AnimatedTitle";

export default function Page() {
  return (<>
    <NavBar/>
    <div className="flex items-center">
      <div className="w-1/2">
        <Image src={profilePic} alt="Picture of developer"  className="pl-32"/>
      </div>
      <div className="w-1/2">
      <AnimatedTitle 
        text="Turning Vision Into Reality With Code And Design."
        className="text-6xl text-left"
      />
      </div>
    </div>
  </>);
}
