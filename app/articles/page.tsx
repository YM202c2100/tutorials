import Article from "../components/Article";
import sampleThumbnail from "@/public/images/articles/form validation in reactjs using custom react hook.png"

export default function Page(){
  return(
    <Article 
      title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
      url="/"
      thumbnail={sampleThumbnail}
    />
  )
}