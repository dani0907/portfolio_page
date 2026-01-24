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
        <p>Feel free to reach out via Gmail!</p>
        <a href={gmailUrl} target="_blank" rel="noreferrer" className="btn-gmail">
          Open Gmail
        </a>
        <a href="" onClick={copyToClipboard}>
          Copy Email Address
        </a>
      </div>
      <Link to="/" className='nextPageBtn'>Go back to the Main <i className="bi bi-chevron-right nextBtnIcon"></i></Link>
    </div>
  )
}

export default ContactPage;