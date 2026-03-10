import { Link } from "react-router-dom";
import ProjectModal from "../comp/projectModal";
import { useState } from "react";

function SkillList({ skillList }) {
  return (
    <div className='projectSkill'>
      {skillList.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
}

function ProjectBox({ projectList, modalControl }) {
  return (
    <>
      {projectList.map((item, index) => (
        <div key={index} className='projectLinkBox' onClick={() => modalControl(item)}>
          <div className="projectbox">
            {item.projectNm.includes("In Progress") && (
              <span className="inProgressBadge">🚧 In Progress</span>
            )}
            <img className='projectImg' src={item.projectImg} alt={item.projectNm} />
            <span className='projectNm'>
              {item.projectNm.replace(" [In Progress]", "")}
            </span>
            <p className='projectInfo'>{item.projectInfo}</p>
            <SkillList skillList={item.projectSkills} />
          </div>
        </div>
      ))}
    </>
  );
}

function ProjectPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSendData, setModalSendData] = useState();

  const projectList = [
    {
      projectNm: 'Heungkuk Life Insurance Channel System (e-Life)',
      projectInfo: 'Managed the maintenance and enhancement of the "e-Life" channel system, a mission-critical platform for insurance planners and business stakeholders.',
      projectImg: '/image/heungkukLogo.jpeg',
      projectRole: 'Full-Stack Developer (Maintenance & Development)',
      projectFeature: [
        { name: 'Scalable Data Processing', data: 'Developed and optimized large-scale batch systems to manage and deliver notifications to over 150,000+ policyholders with high reliability.' },
        { name: 'Feature Development', data: 'Collaborated with business stakeholders to design and implement new modules, improving operational efficiency for field agents.' },
        { name: 'Confidentiality Note', data: 'Due to strict NDA and the enterprise nature of the project, specific source codes and internal screenshots are not publicly disclosable.' },
      ],
      projectLink: '',
      projectGithub: '',
      projectSkills: ['Java', 'Spring Boot', 'SQL (Oracle, Tibero)', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      projectNm: 'Tea Selection',
      projectInfo: 'A full-stack e-commerce application for premium tea enthusiasts, featuring a User Storefront and Admin Dashboard.',
      projectImg: '/image/teaselection.png',
      projectRole: 'Solo Developer (Full-Stack)',
      projectFeature: [
        { name: 'User Storefront', data: 'Seamless shopping with advanced filtering, search, and responsive checkout.' },
        { name: 'Admin Dashboard', data: 'Real-time sales analytics, inventory tracking, and data visualization.' },
      ],
      projectLink: 'https://tea-selection.vercel.app',
      projectGithub: 'https://github.com/dani0907/project_teashop',
      projectSkills: ['React', 'JavaScript', 'HTML', 'CSS', 'Supabase (BaaS)', 'Recharts'],
    },
    {
      projectNm: 'Daily Diary',
      projectInfo: 'A cozy personal diary web app to capture and save daily memories. Built with Angular, Node.js, and MongoDB.',
      projectImg: '/image/dailydiary.png',
      projectRole: 'Solo Developer (Full-Stack)',
      projectFeature: [
        { name: 'Monthly Calendar & Diary Editor', data: 'Browse entries on an interactive calendar and write or edit diary entries by selecting a date.' },
        { name: 'Full-Stack CRUD', data: 'Diary data stored and retrieved from MongoDB via a Node.js + Express REST API.' },
        { name: 'Theme Switcher', data:'5 pastel color themes applied globally via CSS variables.'}
      ],
      projectLink: '',
      projectGithub: 'https://github.com/dani0907/monthlyDiary',
      projectSkills: ['Angular', 'Node.js','MongoDB', 'TypeScript', 'HTML', 'CSS/SCSS'],
    },
    {
      projectNm: 'Kanban Board [In Progress]',
      projectInfo: 'A high-performance, responsive Kanban board built with React and Spring Boot, offering intuitive UI across web and mobile.',
      projectImg: '/image/kanbanboard.png',
      projectRole: 'Solo Developer (Full-Stack)',
      projectFeature: [
        { name: 'Real-time Collaboration', data: 'WebSockets for instant task synchronization among team members.' },
        { name: 'Mobile Optimization', data: 'Responsive UI for a native-app-like mobile experience.' },
      ],
      projectLink: '',
      projectGithub: 'https://github.com/dani0907/project_kanban',
      projectSkills: ['React', 'Spring Boot', 'Java', 'SQL (PostgreSQL)', 'JavaScript', 'HTML', 'Tailwind CSS'],
    },
    {
      projectNm: 'Portfolio Website',
      projectInfo: 'A fully responsive portfolio website built with React, featuring component-based architecture and optimized performance.',
      projectImg: '/image/portfolioPage.png',
      projectRole: '',
      projectFeature: [],
      projectLink: '',
      projectGithub: 'https://github.com/dani0907/portfolio_page',
      projectSkills: ['React', 'JavaScript', 'HTML', 'CSS/SCSS'],
    },
  ];

  function modalControl(modalData) {
    setModalOpen(prev => !prev);
    setModalSendData(modalData);
  }

  return (
    <div className="mainInner">
      <h1 className='innerTitle'>Project</h1>
      <div className="innerContainer project">
        <ProjectBox projectList={projectList} modalControl={modalControl} />
      </div>
      <Link to="/resume" className='nextPageBtn mainCta'>
        Let's go to my Resume <i className="bi bi-chevron-right nextBtnIcon"></i>
      </Link>
      {modalOpen && (
        <ProjectModal modalControl={modalControl} modalData={modalSendData} />
      )}
    </div>
  );
}

export default ProjectPage;