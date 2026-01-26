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
    {projectNm : 'Tea Selection',
      projectInfo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem!',
      projectImg: '/image/test.jpeg',
      projectLink:'',
      projectGithub:'https://github.com/dani0907/project_teashop',
      prjoectSkills : ['React','JavaScript','HTML','CSS','Supabase(PostgreSQL)']
    },
    {projectNm : 'Portfolio web site',
      projectInfo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem!',
      projectImg: '/image/test.jpeg',
      projectLink:'',
      projectGithub:'https://github.com/dani0907/portfolio_page',
      prjoectSkills : ['React','JavaScript','HTML','CSS','Supabase(PostgreSQL)']
    },
    {projectNm : 'Flats rental website',
      projectInfo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem!',
      projectImg: '/image/test.jpeg',
      projectLink:'',
      projectGithub:'https://github.com/dani0907/project_rent',
      prjoectSkills : ['React','JavaScript','HTML','CSS','Supabase(PostgreSQL)']
    },
    {projectNm : 'Heungkuk Insurance System',
      projectInfo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem!',
      projectImg: '/image/test.jpeg',
      projectLink:'',
      projectGithub:'',
      prjoectSkills : ['Java', 'Spring','SQL(Oracle, tibero)','HTML','CSS','JavaScript']
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