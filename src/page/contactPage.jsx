import { Link } from "react-router-dom";

function ContactPage(){
  const email = "danileesep7@gmail.com";
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

          <p className="contactText">Let's work together 🤝</p>
          <p className="contactSubText">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
          <p className="emailTxt">{email}</p>

          <div className="linkBtnBox">
            {/* Primary CTA */}
            <a className="emailBtn btnPrimary" href={gmailUrl} target="_blank" rel="noreferrer">
              <i className="bi bi-envelope-fill"></i> Send Email
            </a>
            <button className="emailCopyBtn btnSecondary" onClick={copyToClipboard}>
              <i className="bi bi-clipboard-check"></i> Copy Address
            </button>
          </div>

          <div className="socialBtnBox">
            <a className="githubBtn socialBtn" href="https://github.com/dani0907" target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i> GitHub
            </a>
            <a className="linkedInBtn socialBtn" href="https://linkedin.com/in/dayeonleedev" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>

        </div>
      </div>
      <Link to="/" className='nextPageBtn'>
        Go back to Main <i className="bi bi-chevron-right nextBtnIcon"></i>
      </Link>
    </div>
  )
}

export default ContactPage;