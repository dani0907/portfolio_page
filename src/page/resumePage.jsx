import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const summaryItems = [
  {
    icon: "bi-building",
    title: "Enterprise System Management",
    desc: "Managed and optimized financial systems handling 1.2M+ customer records, ensuring seamless data processing for major institutions."
  },
  {
    icon: "bi-database-check",
    title: "Large-Scale Data Processing",
    desc: "Took ownership of designing and implementing batch processing systems for 150,000+ records, ensuring high data integrity and reliable delivery."
  },
  {
    icon: "bi-bug",
    title: "Expert Troubleshooting",
    desc: "Resolved 100+ production tickets annually via deep-dive analysis of Java source code and distributed logs, significantly reducing downtime."
  },
];

function ResumePage(){
  return(
    <div className="mainInner">
      <h1 className='innerTitle'>Résumé</h1>
      <div className="innerContainer resume">

        {/* 왼쪽: PDF 뷰어 */}
        <div className="resumeBox resumeLeft">
          <Document className="resumeViewer" file="/Dayeon_Resume.pdf">
            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
        </div>

        {/* 오른쪽: 요약 */}
        <div className="resumeBox resumeRight">

          <div className="resumeIntro">
            <p className="resumeIntroText">
              <span className="pointColor">Java-focused Full-Stack Developer</span> with 3+ years of
              enterprise experience in the insurance industry. Proven track record in high-availability
              systems and performance tuning.
            </p>
          </div>

          {/* 하이라이트 카드 3개 */}
          <div className="resumeHighlights">
            {summaryItems.map((item, i) => (
              <div className="resumeCard" key={i}>
                <div className="resumeCardIcon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div className="resumeCardBody">
                  <p className="resumeCardTitle">{item.title}</p>
                  <p className="resumeCardDesc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 스택 한눈에 보기 */}
          <div className="resumeStack">
            <span className="resumeStackLabel">Back-end</span>
            <div className="resumeStackTags">
              {["Java", "Spring Boot", "Oracle", "Tibero", "PostgreSQL"].map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <span className="resumeStackLabel">Front-end</span>
            <div className="resumeStackTags">
              {["React", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3/SCSS"].map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </div>

          <a className="resumeDownBtn" href="/Dayeon_Resume.pdf" download="Dayeon_Lee_Resume_Fullstack_Software_Engineer.pdf"><i className="bi bi-download"></i> Download Resume</a>

        </div>
      </div>
      <Link to="/contact" className='nextPageBtn mainCta'>
        Let's move to Contact <i className="bi bi-chevron-right nextBtnIcon"></i>
      </Link>
    </div>
  )
}

export default ResumePage;