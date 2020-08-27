import React from "react";
import Logo from "../../img/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

const MyNavbar = ({ scroll, setActive, active }) => {
  const handleSetActive = (e) => setActive({ ...active, [e]: true });
  return (
    <>
      <Navbar
        expand="lg"
        className={`fixed-top my-nav${
          scroll > 20 ? " light" : " transparent navbar-dark"
        }`}
      >
        <Container>
          <Navbar.Brand>
            <Link to="home" smooth={true}>
              <img height="40" width="40" src={Logo} alt="" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link
                to="about"
                smooth={true}
                spy={true}
                offset={-100}
                className={`navbar-link navbar-link-${
                  scroll > 20 ? "bg-light" : "bg-dark"
                }`}
                onSetActive={handleSetActive}
              >
                About
              </Link>
              <Link
                to="projects"
                smooth={true}
                spy={true}
                offset={-100}
                className={`navbar-link navbar-link-${
                  scroll > 20 ? "bg-light" : "bg-dark"
                }`}
                onSetActive={handleSetActive}
              >
                Projects
              </Link>
              <Link
                to="publications"
                smooth={true}
                spy={true}
                offset={-100}
                className={`navbar-link navbar-link-${
                  scroll > 20 ? "bg-light" : "bg-dark"
                }`}
                onSetActive={handleSetActive}
              >
                Publications
              </Link>
              <Link
                to="contact"
                smooth={true}
                spy={true}
                offset={-100}
                className={`navbar-link navbar-link-${
                  scroll > 20 ? "bg-light" : "bg-dark"
                }`}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
