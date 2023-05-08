import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ color: "white" }}
          >
            <h1 style={{ fontSize: "2.6em" }}>
              Позвольте мне <span className="purple">представить себя</span>
            </h1>
            <p className="home-about-body">
              Я увлечен программированием и думаю, что смог чему-то научиться.
              Надеюсь, что это так... 🤷‍♂️
              <br />
              <br /> Я свободно владею такими технологиями, как{" "}
              <i>
                <b className="purple"> C++, Python и JavaScript </b>
              </i>
              <br />
              <br />
              Моя сфера интересов - разработка новых &nbsp;
              <i>
                <b className="purple">технологий и продуктов</b>а также тематика{" "}
                <b className="purple">
                  машинного обучения и применения искуственного интеллекта
                </b>
              </i>
              <br />
              <br />
              Когда это возможно технически, я стараюсь использовать{" "}
              <i>
                <b className="purple">Node.JS</b>, а также{" "}
              </i>
              <i>
                <b className="purple">современные фреймворки JavaScript,</b>{" "}
              </i>
              такие как{" "}
              <i>
                <b className="purple">React.js</b> и
                <b className="purple">Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row md={12} className="home-about-social">
          <h1>Найдите меня на:</h1>
          <p>
            Буду рад, если Вы{" "}
            <span className="purple">подпишитесь на мои страницы </span> в
            социальных сетях
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/v-makarovskyi"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/v-makarovskyi"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/v-makarovskyi"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/v-makarovskyi"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Row>
      </Container>
    </Container>
  );
}
