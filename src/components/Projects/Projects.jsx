import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import chat from '../../Assets/Projects/chat.png'
import sushci from '../../Assets/Projects/suschi.png'
import travel_blog from '../../Assets/Projects/travel_blog.png'

export default function Projects() {
  return (
    <Container fluid className='project-section'>
        <Particle />
        <Container>
            <h1 className='project-heading'>
                Мои недавние <strong className='purple'>работы</strong>
            </h1>
            <p style={{color:'white'}}>
                Вот несколько проектов, над которыми я работал в последнее время.
            </p>
            <Row style={{justifyContent:'center', paddingBottom:'10px'}}>
                <Col md={4} className='project-card'>
                    <ProjectCard
                        imgPath={chat}
                        isBlog={false}
                        title='Python Real Time Chat Application with GUI interface'
                        description='I used Tkinter and the Socket and Threading modules from the standard Python library.'
                        ghLink='https://github.com/v-makarovskyi/python_chat_app'
                    />
                </Col>
                <Col md={4} className='project-card'>
                    <ProjectCard
                        imgPath={sushci}
                        isBlog={false}
                        title='Sushi-Shop'
                        description='I created a full-fledged online store for sushi and rolls. This project uses the MERN stack + JWT.'
                        ghLink='https://github.com/v-makarovskyi/Sushi-Shop'
                    />
                </Col>
                <Col md={4} className='project-card'>
                    <ProjectCard
                        imgPath={travel_blog}
                        isBlog={false}
                        title='Travel blog application'
                        description='Travel blog application. The project is written using DRF and PostgreSQL on the backend and react/redux on the frontend.'
                        ghLink='https://github.com/v-makarovskyi/travel_blog_dfr_client'
                    />
                </Col>
            </Row>
        </Container>
    </Container>
  )
}
