import React from "react";
import Logo from "../../img/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = ({ scroll }) => {
  return (
    <>
      <Navbar
        bg={scroll > 20 ? "light" : "transparent"}
        expand="lg"
        className="fixed-top navbar-dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img height="40" width="40" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
