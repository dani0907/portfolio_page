import { Link } from "react-router-dom";
import WordRotate from "../components/ui/word-rotate.jsx"

function MainPage(){
  return (
    <div className="mainInner">
      <div className="innerContainer">
        <div className="mainBox">

          <span className="mainBadge">👋 Available for new opportunities</span>

          <h1 className='mainTitle'>
            Hello, I'm <span className="mainNameHighlight">Dayeon</span>
          </h1>
          <div className="mainDivider" />
          <WordRotate
            className="wordRotateText"
            words={[
              "Vancouver based Software Engineer",
              "Experienced Java Developer",
              "Full-stack Troubleshooter",
              "Root Cause Analysis Expert",
              "Detail-oriented Problem Solver"
            ]}
          />
          <p className="mainSubDesc">
            3 years of enterprise experience · Java · React · Spring Boot
          </p>

        </div>
      </div>

      <Link to="about" className='nextPageBtn mainCta'>
        See more about me <i className="bi bi-chevron-right nextBtnIcon"></i>
      </Link>
    </div>
  )
}

export default MainPage;