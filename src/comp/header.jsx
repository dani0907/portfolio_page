import { Link } from "react-router-dom";
import { useState } from "react";

function Header(){
  const [menuClick, setMenuClick] = useState(false);

  function mobileMenuClick(){
    if (window.innerWidth <= 700) {
      setMenuClick(false);
    }
  }
  return (
    <header className="header">
      <div className="headInner">
        <Link to="/">
          <div className="logo">
            <i className="bi bi-bookmark-heart-fill"></i>
          </div>
        </Link>
        <div className="menuBox">
          <button className={`menuClickBtnBox ${menuClick? 'click' : ''}`} onClick={()=> setMenuClick(menuClick ? false : true)}>
            <span className='menuClickBtn'></span>
            <span className='menuClickBtn'></span>
            <span className='menuClickBtn'></span>
          </button>
          <div className={`menuBoxInner ${menuClick? 'click' : ''}`}>
            <Link to="/about" onClick={mobileMenuClick} className='menuItem'>About</Link>
            <Link to="/project" onClick={mobileMenuClick} className='menuItem'>Project</Link>
            <Link to="/contact" onClick={mobileMenuClick} className='menuItem'>Contact</Link>
          </div>
        </div>
      </div>
      {
        menuClick ? <div className="mobileHeaderBack" onClick={()=> setMenuClick(menuClick ? false : true)} ></div> : null
      }
      
    </header>
  )
}

export default Header;