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
            <p><span className="summaryBold">Problem Solver</span> : Resolved critical system bugs in insurance domain.</p>
            <p><span className="summaryBold">Tech Stack</span> : Java, Spring, React, Oracle/Tibero, HTML, CSS, SCSS.</p>
            <p><span className="summaryBold">Location</span> : Available for in-person work in Vancouver.</p>
          </div>
          <a className="resumeDownBtn" href="/Dayeon_Resume.pdf" download="Dayeon_Resume_Software_Engineer.pdf"><i className="bi bi-download"></i> Download Resume</a>
        </div>
      </div>
      <Link to="/contact" className='nextPageBtn'>Let's move to Contact <i className="bi bi-chevron-right nextBtnIcon"></i></Link>
    </div>
  )
}

export default ResumePage;