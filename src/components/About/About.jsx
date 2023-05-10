import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import ToolStack from "./Toolstack";

export default function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
         <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
          md={8}
          style={{
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <h1>
            Кто <strong className="purple">Я</strong>
          </h1>
          <AboutCard />
        </Col>
        <Col
          md={4}
          style={{ paddingTop: "120px", paddingBottom: "50px" }}
          className="about-img"
        >
          <img
            src="https://vsememy.ru/kartinki/wp-content/uploads/2023/03/1639314621_36-papik-pro-p-programmist-klipart-37.png"
            alt="about"
            className="img-fluid"
          />
        </Col>
      </Row>
      <h1 className="project-heading">Профессиональные <strong className="purple">навыки</strong></h1>
      <Techstack />
      <h1><strong className="purple">Инструменты,</strong> которые я использую</h1>
      <ToolStack />
      </Container>
     
    </Container>
  );
}
