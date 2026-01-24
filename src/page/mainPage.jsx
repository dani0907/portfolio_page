import { Link } from "react-router-dom";
import WordRotate from "../components/ui/word-rotate.jsx"
function MainPage(){
  return (
    <div className="mainInner">
      <div className="innerContainer">
        <div className="mainBox">
          <h2 className='mainTitle'>Hello, I'm Dayeon!</h2>
          <WordRotate className ="wordRotateText" words={[
                                "Vancouver based Software Engineer",
                                "Experienced Java Developer",
                                "Full-stack Troubleshooter",
                                "Root Cause Analysis Expert",
                                "Detail-oriented Problem Solver"]}/>
        </div>
      </div>
      <Link to="about" className='nextPageBtn'>See more about me <i className="bi bi-chevron-right nextBtnIcon"></i></Link>
    </div>
  )
}

export default MainPage;