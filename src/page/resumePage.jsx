import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function ResumePage(){
  return(
    <div className="mainInner">
      <h1 className='innerTitle'>Résumé</h1>
      <div className="innerContainer resume">
        <div className="resumeBox resumeLeft">
          {/* <Document file="/Dayeon_Resume.pdf">
            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document> */}
          <iframe  className="resumeViewer"
            src="/Dayeon_Resume.pdf" 
            title="Resume Viewer"
          />
        </div>
      </div>
      <Link to="/contact" className='nextPageBtn'>Let's move to Contact <i className="bi bi-chevron-right nextBtnIcon"></i></Link>
    </div>
  )
}

export default ResumePage;