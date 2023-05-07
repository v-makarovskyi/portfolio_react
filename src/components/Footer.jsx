import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
            <Col md='4' className="footer-copywright">
                <h3>Разработка и проект: Volodymyr Makarovskyi</h3>
            </Col>
            <Col md='4' className="footer-copywright">
                <h3>Copyright  © {year} VM</h3>
            </Col>
            <Col md='4' className="footer-body">
                <ul className="footer-icons">
                    <li className="social-icons">
                        <a
                            href="https://github.com/v-makarovskyi"
                            style={{color:'white'}}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://github.com/v-makarovskyi"
                            style={{color:'white'}}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiOutlineTwitter />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://github.com/v-makarovskyi"
                            style={{color:'white'}}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://github.com/v-makarovskyi"
                            style={{color:'white'}}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
            </Col>
        </Row>
      </Container>
    );
  }