import Article from "../components/Article";
import sampleThumbnail from "@/public/images/articles/form validation in reactjs using custom react hook.png"
import sampleThumbnail2 from "@/public/images/articles/smooth scrolling in reactjs.png"

export default function Page(){
  return(<>
    <li className="list-none space-y-3">
      <Article 
        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
        url="/"
        thumbnail={sampleThumbnail}
      />
      <Article 
        title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
        url="/"
        thumbnail={sampleThumbnail2}
      />
    </li>
  </>)
}