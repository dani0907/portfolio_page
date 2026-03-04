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
        </div>
        <div className="resumeBox resumeRight">
          <h4 className="summaryTitle">Summary</h4>
          <div className="summaryBox">
            <p>
              Java-focused <span className="summaryBold">Full-stack Developer</span> with 3 years of experience specializing in enterprise-level systems within the insurance industry. 
              Proven track record of delivering high-availability solutions through rigorous root cause analysis and performance tuning.
            </p>
            <p>
              <span className="summaryBold">Enterprise System Management</span>: Managed and optimized financial systems handling 1.2M+ customer records, ensuring seamless data processing for major institutions.
            </p>
            <p>
              <span className="summaryBold">High-Integrity Data Processing</span>: Independently designed and implemented batch processing for 150,000+ records, achieving 99.9% data integrity.
            </p>
            <p>
              <span className="summaryBold">Expert Troubleshooting</span>: Resolved 100+ production tickets annually by conducting deep-dive analysis of Java source code and distributed logs, significantly reducing system downtime.
            </p>
            <p>
              <span className="summaryBold">Tech Stack</span><br/>
              <span className="summaryBold">Back-end:</span> Java, Spring Boot, SQL (Oracle, Tibero, PostgreSQL)<br/>
              <span className="summaryBold">Front-end:</span> React, Angular, TypeScript, JavaScript (ES6+), HTML5, CSS3/SCSS 
            </p>
            <p>
              <span className="summaryBold">Location</span>: Vancouver, BC (Available for In-person/Hybrid/remote roles)
            </p>
          </div>
          <a className="resumeDownBtn" href="/Dayeon_Resume.pdf" download="Dayeon_Lee_Resume_Fullstack_Software_Engineer.pdf"><i className="bi bi-download"></i> Download Resume</a>
        </div>
      </div>
      <Link to="/contact" className='nextPageBtn'>Let's move to Contact <i className="bi bi-chevron-right nextBtnIcon"></i></Link>
    </div>
  )
}

export default ResumePage;