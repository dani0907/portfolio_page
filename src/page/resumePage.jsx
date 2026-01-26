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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repudiandae, ad ipsam quis iusto quam dolorem obcaecati tenetur reiciendis quos commodi debitis delectus ea aliquid quibusdam officiis magni dicta maiores!</p>
        </div>
      </div>
      <Link to="/contact" className='nextPageBtn'>Let's move to Contact <i className="bi bi-chevron-right nextBtnIcon"></i></Link>
    </div>
  )
}

export default ResumePage;