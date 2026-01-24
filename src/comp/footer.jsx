import { Link } from "react-router-dom";
function Footer(){
  return(
    <footer className="footer">
      <div className="footInner">
        <Link className="githubBtn"><i className="bi bi-github"></i></Link>
        <Link className="linkedInBtn"><i className="bi bi-linkedin"></i></Link>
      </div>
    </footer>
  )
}

export default Footer;