import Image from "next/image";
import NavBar from "./components/NavBar";
import profilePic from '@/public/images/profile/developer-pic-1.png'

export default function Page() {
  return (<>
    <NavBar/>
    <Image src={profilePic} alt="Picture of developer"/>
  </>);
}
