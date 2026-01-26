import { Link } from "react-router-dom";
function Footer(){
  return(
    <footer className="footer">
      <div className="footInner">
        <a className="githubBtn" href="https://github.com/dani0907" target="_blank"><i className="bi bi-github"></i></a>
        <a className="linkedInBtn" href="https://linkedin.com/in/dayeonleedev" target="_blank"><i className="bi bi-linkedin"></i></a>
      </div>
    </footer>
  )
}

export default Footer;