import { Link } from "react-router-dom";
function AboutPage(){
  return (
    <div className="mainInner">
      <h1 className='innerTitle'>About Me</h1>
      <div className="innerContainer aboutMe">
        <div className="aboutConLeft">
          Full-Stack Developer with 3+ years of experience specializing in robust enterprise solutions.<br/><br/>
          I have a proven track record of managing large-scale data systems, including batch processing for over 150,000 customers in the insurance industry. I excel at translating complex client requirements into both brand-new software modules and optimized system enhancements, ensuring they align perfectly with business goals.<br/><br/>
          I take pride in my proactive approach to troubleshooting; I enjoy diving deep into code and logs to provide rapid, effective solutions for technical inquiries from business stakeholders. My goal is to build seamless, user-centric applications while maintaining the highest standards of backend stability and operational continuity.
        </div>
        <div className="aboutConRight">
          <h3 className='miniTitle'>Skills</h3>
          <div className='skillsBox'>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>SQL(Oracle, Tibero)</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SCSS</span>
            <span>JavaScript</span>
            <span>jQuery</span>
            <span>GIT</span>
            <span>Github</span>
            <span>SVN</span>
          </div>
        </div>
      </div>
      <Link to="/project" className='nextPageBtn'>Let's continue to Project <i className="bi bi-chevron-right nextBtnIcon"></i></Link>
    </div>
  )
}

export default AboutPage;