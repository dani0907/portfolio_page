import { Link } from "react-router-dom";
function AboutPage(){
  return (
    <div className="mainInner">
      <h1 className='innerTitle'>About Me</h1>
      <div className="innerContainer aboutMe">
        <div className="aboutConLeft">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit molestiae aliquam vel, commodi minus sunt ipsa iusto incidunt doloribus natus dicta, voluptatem ad ullam, earum porro laboriosam eum laudantium.
        </div>
        <div className="aboutConRight">
          <h3 className='miniTitle'>Skills</h3>
          <div className='skillsBox'>
            <span>Java</span>
            <span>SQL(Oracle, Tibero)</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SCSS</span>
            <span>JavaScript</span>
            <span>jQuery</span>
            <span>GIT</span>
            <span>Github</span>
            <span>SVN</span>
            <span>Spring Boot</span>
          </div>
        </div>
      </div>
      <Link to="/project" className='nextPageBtn'>Let's continue to Project <i className="bi bi-chevron-right nextBtnIcon"></i></Link>
    </div>
  )
}

export default AboutPage;