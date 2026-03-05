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
            Full-Stack Developer with <span className="pointColor">3+ years</span> of enterprise experience.
          </p>
          <p>
            enterprise-level systems within the insurance and finance sectors. 
            I have a proven track record of managing and optimizing high-availability 
            systems handling <span className="pointColor">1.2M+ customer records</span> for major institutions.
          </p>
          <p>
            Took ownership of designing and implementing batch processing systems for <span className="pointColor">150,000+ records</span>, 
            ensuring high data integrity and reliable delivery.
          </p>
          <p>
            Beyond development, I am a dedicated problem-solver. I have resolved <span className="pointColor">100+ production tickets annually</span> through deep-dive root cause analysis of Java source code and distributed logs, 
            significantly reducing system downtime and ensuring operational excellence for premier clients.
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