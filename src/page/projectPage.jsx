import { Link } from "react-router-dom";
import ProjectModal from "../comp/projectModal";
import { useState } from "react";
function SkillList({skillList}){
  return(
    <div className='projectSkill'>
      {
         skillList.map((item,index)=>(
           <span key={index}>{item}</span>
         ))
      }
    </div>
  )
}
function ProjectBox({projectList,modalControl}){

  return(
    <>
      {projectList.map((item,index)=>(
        <div key={index} className='projectLinkBox' onClick={()=> modalControl(item)}>
          <div className="projectbox">
            <img className='projectImg' src={item.projectImg} alt="" />
            <span className='projectNm'>{item.projectNm}</span>
            <p className='projectInfo'>{item.projectInfo}</p>
            <SkillList skillList={item.prjoectSkills}></SkillList>
          </div>
        </div>
      ))}
    </>
  )
}

function ProjectPage(){
  const [modalOpen,setModalOpen]=useState(false);
  const [modalSendData,setModalSendData] = useState();
  const projectList=[
    {projectNm : 'Heunguk Life Insurance Channel System (e-Life)',
      projectInfo : 'Managed the maintenance and enhancement of the "e-Life" channel system, a mission-critical platform for insurance planners and business stakeholders. Worked across diverse modules, including Customer Management, Common Services, and Insurance Application.',
      projectImg: '/image/heungkukLogo.jpeg',
      projectRole : 'Full-Stack Developer (Maintenance & Development)',
      projectFeature : [{name :'Scalable Data Processing', data:'Developed and optimized large-scale batch systems to manage and deliver notifications to over 150,000+ policyholders with high reliability.'},
                        {name :'Feature Development', data :'Collaborated with business stakeholders to design and implement new modules, improving operational efficiency for field agents.'},
                        {name : 'Confidentiality Note', data : 'Due to strict non-disclosure agreements (NDA) and the enterprise nature of the project, specific source codes and internal system screenshots are not publicly disclosable.'}],
      projectLink:'',
      projectGithub:'',
      prjoectSkills : ['Java', 'Spring boot','SQL(Oracle, tibero)','HTML','CSS','JavaScript']
    },
    {projectNm : 'Tea Selection',
      projectInfo : 'This project is a full-stack e-commerce application designed for premium tea enthusiasts. It consists of two main parts User Storefront and Admin Dashboard.',
      projectImg: '/image/teaselection.png',
      projectRole : 'Solo Developer (Full-Stack)',
      projectFeature : [{name : 'User Storefront' , data:' Provides a seamless shopping journey with advanced product filtering, search capabilities, and a responsive checkout process.'},{name :'Admin Dashboard' ,data : 'A centralized management hub featuring real-time sales analytics, inventory tracking, and data visualization to monitor business growth effectively.'}],
      projectLink:'',
      projectGithub:'https://github.com/dani0907/project_teashop',
      prjoectSkills : ['React','JavaScript','HTML','CSS','Supabase(BaaS)','Recharts']
    },
    {projectNm : 'manage your schedule [In Progress]',
      projectInfo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem!',
      projectImg: '/image/kanbanboard.png',
      projectRole : 'Solo Developer (Full-Stack)',
      projectFeature : [],
      projectLink:'',
      projectGithub:'https://github.com/dani0907/project_kanban',
      prjoectSkills : ['React','Spring boot','Java','SQL(PostgreSQL)','JavaScript','HTML','CSS','SCSS']
    },
    {projectNm : 'Portfolio web site',
      projectInfo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem!',
      projectImg: '/image/portfolioPage.png',
      projectFeature : [],
      projectLink:'',
      projectGithub:'https://github.com/dani0907/portfolio_page',
      prjoectSkills : ['React','JavaScript','HTML','CSS/SCSS']
    }
    
  ];

  function modalControl(modalData){
    setModalOpen(modalOpen ? false : true);
    setModalSendData(modalData);
    console.log("modalData : ",modalData);
  }
  return (
    <div className="mainInner">
      <h1 className='innerTitle'>Project</h1>
      <div className="innerContainer project">
        <ProjectBox projectList = {projectList} modalControl={modalControl}></ProjectBox>
      </div>
      <Link to="/resume" className='nextPageBtn'>Let's go to my Resume <i className="bi bi-chevron-right nextBtnIcon"></i></Link>
      {
        modalOpen ? <ProjectModal modalControl={modalControl} modalData={modalSendData}></ProjectModal> : null
      }
    </div>
  )
}

export default ProjectPage;