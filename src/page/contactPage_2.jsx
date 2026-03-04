import { Link } from "react-router-dom";
function ContactPage(){
  const email = "danileesep7@gmail.com";
  // Gmail link
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("Email address copied!");
  };

  return (
    <div className="mainInner">
      <h1 className='innerTitle'>Contact</h1>
      <div className="innerContainer contact">
        <div className="contactInner">
          <p className="contactText">Feel free to reach out via Gmail!</p>
          <p className="emailTxt">danileesep7@gmail.com</p>
          <div className="linkBtnBox">
            <a className="emailBtn" href={gmailUrl} target="_blank" rel="noreferrer">
              <i class="bi bi-envelope-fill"></i> Open Gmail
            </a>
            <button className="emailCopyBtn" href="" onClick={copyToClipboard}>
              <i class="bi bi-clipboard-check"></i> Copy Email Address
            </button>
            <a className="githubBtn" href="https://github.com/dani0907" target="_blank"><i class="bi bi-github"></i> Github</a>
            <a className="linkedInBtn" href="https://linkedin.com/in/dayeonleedev" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a>
          </div>
        </div>
      </div>
      <Link to="/" className='nextPageBtn'>Go back to the Main <i className="bi bi-chevron-right nextBtnIcon"></i></Link>
    </div>
  )
}

export default ContactPage;