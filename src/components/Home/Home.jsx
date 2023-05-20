import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import home_pic from '../../Assets/home_pic.png'
import Home2 from "./Home2";
import Type from "./Type";

export default function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 className="heading" style={{ marginBottom: "15px" }}>
                Здравствуйте!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                Меня зовут{" "}
                <strong className="main-name">Владимир Макаровский</strong>
              </h1>
              <div style={{ padding: "50px", textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: "20px" }}>
              <img
                src={home_pic}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
