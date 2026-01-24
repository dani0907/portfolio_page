import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Layout from './comp/layout';
import MainPage from './page/mainPage';
import AboutPage from './page/aboutPage';
import ProjectPage from './page/projectPage';
import ContactPage from './page/contactPage';
import ResumePage from './page/resumePage';

import './style/clear.css'
import './style/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<MainPage></MainPage>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path='/project' element={<ProjectPage></ProjectPage>}></Route>
          <Route path='/resume' element={<ResumePage></ResumePage>}></Route>
          <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
