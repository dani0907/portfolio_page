import { Link } from "react-router-dom";

function AboutPage(){
  const skills = {
    "Back-end": ["Java", "Spring Boot", "SQL (Oracle, Tibero, PostgreSQL)"],
    "Front-end": ["HTML5", "CSS3/SCSS", "JavaScript", "TypeScript", "jQuery", "React", "Angular"],
    "Tools & Infra": ["Git", "GitHub", "SVN", "Jenkins"],
    "Enterprise": ["BXM", "ProObject", "eXBuilder6", "NCRM"],
  };

  return (
    <div className="mainInner">
      <h1 className='innerTitle'>About Me</h1>
      <div className="innerContainer aboutMe">

        <div className="aboutConLeft">
          <p className="aboutHighlight">
            Full-Stack Developer with <span className="pointColor">3 years</span> of enterprise experience.
          </p>
          <p>
            Specialized in robust enterprise solutions — I have a proven track record of managing
            large-scale data systems, including batch processing for over{" "}
            <span className="pointColor">150,000+ insurance agent records</span>.
          </p>
          <p>
            I excel at translating complex client requirements into both brand-new software modules
            and optimized system enhancements, ensuring they align perfectly with business goals.
          </p>
          <p>
            I take pride in my proactive approach to troubleshooting — performing deep-dive analyses
            of code and logs to deliver rapid, effective solutions for business stakeholders.
          </p>
        </div>

        <div className="aboutConRight">
          <h3 className='miniTitle'>Skills</h3>
          {Object.entries(skills).map(([category, items]) => (
            <div className="skillCategory" key={category}>
              <span className="skillCategoryLabel">{category}</span>
              <div className="skillsBox">
                {items.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
      <Link to="/project" className='nextPageBtn mainCta'>
        Let's continue to Project <i className="bi bi-chevron-right nextBtnIcon"></i>
      </Link>
    </div>
  )
}

export default AboutPage;