import Image from "next/image";
import NavBar from "./components/NavBar";
import profilePic from '@/public/images/profile/developer-pic-1.png'

export default function Page() {
  return (<>
    <NavBar/>
    <div className="w-1/2">
      <Image src={profilePic} alt="Picture of developer"  className="pl-32"/>
    </div>
  </>);
}
