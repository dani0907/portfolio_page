import "./css/projectModal.css"
import { useEffect } from "react";

function SkillList({skillData}){
  return(
    <div className='mProjectSkill'>
      {
         skillData && skillData.map((item,index)=>(
           <span key={index}>{item}</span>
         ))
      }
    </div>
  )
}
function ProjectModal({modalControl,modalData}){
  useEffect(()=>{
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  },[])
  return(
    <div className="projModalCon">
      <div className="pModalBox">
        <div className="pModalTop" onClick={modalControl}><i class="bi bi-arrow-left-circle"></i> back to Projects</div>
        <div className="pModalMain">
          <img className="pModalImg" src={modalData.projectImg} alt="project image" />
          <h4 className="pModalTitle">{modalData.projectNm}</h4>
          <p className="pModalInfo">{modalData.projectInfo}</p>
          <SkillList skillData={modalData.prjoectSkills}></SkillList>
        </div>
      </div>
      <div className="modalBackground" onClick={modalControl}></div>
    </div>
  )
}

export default ProjectModal;