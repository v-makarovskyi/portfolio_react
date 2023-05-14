import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard(props) {
  return (
    <Card className='project-card-view'>
        <Card.Img variant='top' src={props.imgPath} alt='card-img' />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{textAlign:'justify'}}>{props.description}</Card.Text>
            <Button variant='primary' href={props.ghLink} target='_blank'>
                <BsGithub /> &nbsp; GitHub
            </Button>
        </Card.Body>
    </Card>
  )
}
