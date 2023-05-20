import React, { useState } from "react";
import logo from "../Assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColor, setNavColor] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} alt="brand" className="img-fluid logo" /> */}
          <h2 className="purple" style={{fontWeight:'700'}}>makarovskyi.v@gmail.com</h2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse aria-controls="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} />
                Главная
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => setExpand(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Обо мне
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpand(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Проекты
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => setExpand(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Резюме
              </Nav.Link>
            </Nav.Item>
           {/*  <Nav.Item>
              <Nav.Link as={Link} to="/blog" onClick={() => setExpand(false)}>
                <ImBlog style={{ marginBottom: "2px" }} /> Блог
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/v-makarovskyi/portfolio_react"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{fontSize:'1.2em'}} />{' '}
                <AiFillStar style={{fontSize:'1.2em'}} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
