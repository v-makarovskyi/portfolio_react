import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { Row } from 'react-bootstrap'

export default function Github() {
  return (
    <Row style={{justifyContent:'center', paddingBottom:'15px'}}>
        <h1 className='project-heading' style={{paddingBottom:'20px'}}>
            Время, которое я провожу на <strong className='purple'>GitHub</strong>
        </h1>
        <GitHubCalendar 
            username='v-makarovskyi'
            blockSize={15}
            blockMargin={5}
            fontSize={16}
        />
    </Row>
  )
}
