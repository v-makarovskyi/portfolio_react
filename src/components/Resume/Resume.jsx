import React, { useState, useEffect } from 'react'
import { Container, Row, Button } from 'react-bootstrap' 
import Particle from '../Particle'
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../../Assets/../Assets/resume_vm.pdf'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/v-makarovskyi/portfolio_react/master/src/Assets/resume_vm.pdf";


export default function Resume() {
    const [width, setWidth] = useState(1200)
    console.log(width)

    useEffect(() => {
      setWidth(window.innerWidth)
    }, [width])

  return (
    <div>
      <Container fluid className='resume-section'>
        <Particle />
        <Row style={{justifyContent:'center', position:'relative'}}>
          <Button variant='primary' href={pdf} target='_blank' style={{maxWidth:'250px'}}>
            <AiOutlineDownload />
            &nbsp;Загрузить резюме
          </Button>
        </Row>
        <Row className='resume'>
          <Document file={resumeLink} className='d-flex justify-content-center'>
            <Page pageNumber={1} scale={width > 768 ? 1.5 : 0.6} />
          </Document>
        </Row> 
        <Row style={{justifyContent:'center', position:'relative'}}>
          <Button variant='primary' href={pdf} target='_blank' style={{maxWidth:'250px'}}>
            <AiOutlineDownload />
            &nbsp;Загрузить резюме
          </Button>
        </Row>
      </Container>
    </div>
  )
}
