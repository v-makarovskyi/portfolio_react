import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import chat from '../../Assets/Projects/chat.png'
import sushci from '../../Assets/Projects/suschi.png'
import travel_blog from '../../Assets/Projects/travel_blog.png'
import culinary from '../../Assets/Projects/culinary.png'
import admin_panel from '../../Assets/Projects/admin_panel.png'

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
                        title='Python чат в реальном времени (GUI)'
                        description='Я использовал Tkinter и модули Socket и Threading из стандартной библиотеки Python.'
                        ghLink='https://github.com/v-makarovskyi/python_chat_app'
                    />
                </Col>
                <Col md={4} className='project-card'>
                    <ProjectCard
                        imgPath={sushci}
                        isBlog={false}
                        title='Sushi-Shop'
                        description='Полноценный интернет-магазин суши и роллов. В этом проекте используется стек MERN + JWT.'
                        ghLink='https://github.com/v-makarovskyi/Sushi-Shop'
                    />
                </Col>
                <Col md={4} className='project-card'>
                    <ProjectCard
                        imgPath={travel_blog}
                        isBlog={false}
                        title='Travel blog приложение'
                        description='Проект написан с использованием DRF и PostgreSQL на бэкенде и react/redux на фронтенде.'
                        ghLink='https://github.com/v-makarovskyi/travel_blog_dfr_client'
                    />
                </Col>
                <Col md={4} className='project-card'>
                    <ProjectCard
                        imgPath={admin_panel}
                        isBlog={false}
                        title='Универсальная админпанель'
                        description='Это приложение представляет собой универсальную панель администратора для приложений react. Оно позволяет настраивать необходимые разделы в боковой панели для вашего удобства, а также переключаться между светлым и темным режимами отображения.'
                        ghLink='https://github.com/v-makarovskyi/travel_blog_dfr_client'
                    />
                </Col>
                <Col md={4} className='project-card'>
                    <ProjectCard
                        imgPath={culinary}
                        isBlog={false}
                        title='Кулинарный блог'
                        description='Проект представляет собой блог о еде, сделанный на Django. Реализован вывод категорий постов, отдельного поста, создание и вывод комментариев для каждой записи.'
                        ghLink='https://github.com/v-makarovskyi/travel_blog_dfr_client'
                    />
                </Col>
            </Row>
        </Container>
    </Container>
  )
}
