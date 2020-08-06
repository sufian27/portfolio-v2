import React, { useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Me from "../../img/me.JPG";
import Js from "../../img/js.png";
import { v4 as uuid } from "uuid";

const About = () => {
  const [languages, setLanguages] = useState({
    JavaScript: 80,
    Java: 90,
    Python: 70,
    C: 65,
    SQL: 85,
    R: 60,
  });

  const [techStack, setTechStack] = useState({
    node: Js,
    react: Js,
    postgres: Js,
    graphql: Js,
    mongodb: Js,
    aws: Js,
    html: Js,
    css: Js,
  });
  return (
    <section id="about">
      <Container
        className="shadow"
        style={{
          minHeight: "100vh",
          background: "rgba(255, 255, 255, 1.0)", //transition from grey to white
          border: "1px solid transparent",
          borderRadius: "15px",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center title-text"
          style={{
            margin: "2rem 0rem",
            borderBottom: "2px solid #4f837f",
            color: "#4f837f",
          }}
        >
          <h1>About Me</h1>
        </div>

        <Row>
          <Col lg="6">
            <img
              src={Me}
              style={{
                height: "375px",
                width: "300px",
                margin: "auto",
                display: "block",
              }}
            />
          </Col>
          <Col lg="6">
            <div className="skills-container">
              <div className="d-flex align-items-center justify-content-center title-text">
                <h2>My Skills</h2>
              </div>
              <div>
                {Object.entries(languages).map(([name, percentage]) => (
                  <ProgressBar
                    striped
                    animated
                    variant="success"
                    now={percentage}
                    label={name}
                    key={uuid()}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <p
              style={{
                padding: "50px 20px",
                margin: "0px",
              }}
            >
              I am currently a Sophomore at University of Rochester pursuing a
              major in Computer Science and Business. I aspire to be a
              full-stack developer with a greater expertise in back-end
              technologies. I have largely worked on projects with a back-end
              written in Flask and am very fond of databases. In my free time I
              like to play guitar and I’m currently taking piano lessons at the
              Eastman School of Music. The complex, flexible, and the expressive
              nature of music can be compared to that of Computer Science. Both
              these fields have the potential to be experimented with which is
              why I fell in love with them. I also occasionally enjoy
              photography and travelling with my friends.
            </p>
          </Col>
        </Row>

        <Row style={{ padding: "30px" }}>
          <Col lg="12" className="tech-stack">
            {/*add image to this*/}
            <div className="d-flex align-items-center justify-content-center title-text">
              <h2>Tech Stack</h2>
            </div>
            <Row>
              {Object.entries(techStack).map(([name, src]) => (
                <Col md="6" lg="3" style={{ padding: "15px" }}>
                  <img src={src} height="200px" width="200px" />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
