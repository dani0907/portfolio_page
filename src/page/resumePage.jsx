import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function ResumePage(){
  return(
    <div className="mainInner">
      <h1 className='innerTitle'>Résumé</h1>
      <div className="innerContainer resume">
        <div className="resumeBox resumeLeft">
          <Document  className="resumeViewer" file="/Dayeon_Resume.pdf">
            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
          {/* <iframe  className="resumeViewer"
            src="/Dayeon_Resume.pdf" 
            title="Resume Viewer"
          /> */}
        </div>
        <div className="resumeBox resumeRight">
          <h4 className="summaryTitle">Summary</h4>
          <div className="summaryBox">
            <p>Full-Stack Developer with 3+ years of experience in the insurance sector, specializing in large-scale data processing and scalable web applications.</p>
            <p><span className="summaryBold">Large-Scale Data Management</span> : Managed batch processing for 150,000+ users, ensuring zero data loss and high performance.</p>
            <p><span className="summaryBold">Strategic Development & Enhancement</span> : Developed new software modules and delivered tailored enhancements by collaborating directly with business stakeholders to meet evolving requirements.</p>
            <p><span className="summaryBold">Expert Troubleshooting & Support</span> : Effectively addressed technical inquiries from business stakeholders by conducting thorough source code and log analysis, providing rapid fixes to maintain high operational efficiency.</p>
            <p><span className="summaryBold">Tech Stack</span> : Java, Spring, React, SQL (Oracle/Tibero), HTML5, CSS3, SCSS.</p>
            <p><span className="summaryBold">Location</span> : Vancouver, BC (Open to In-person/Hybrid)</p>
          </div>
          <a className="resumeDownBtn" href="/Dayeon_Resume.pdf" download="Dayeon_Resume_Software_Engineer.pdf"><i className="bi bi-download"></i> Download Resume</a>
        </div>
      </div>
      <Link to="/contact" className='nextPageBtn'>Let's move to Contact <i className="bi bi-chevron-right nextBtnIcon"></i></Link>
    </div>
  )
}

export default ResumePage;