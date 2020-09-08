import React, { useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Me from "../../img/me.JPG";
import {
  AWS,
  CSS,
  GraphQL,
  HTML,
  Mongo,
  Node,
  Postgres,
  ReactJS,
} from "../../img/tech-stack";
import { v4 as uuid } from "uuid";

const About = ({ active }) => {
  const [languages, setLanguages] = useState({
    JavaScript: 80,
    Java: 90,
    Python: 70,
    C: 65,
    SQL: 85,
    R: 60,
  });

  const [techStack, setTechStack] = useState({
    node: Node,
    react: ReactJS,
    postgres: Postgres,
    graphql: GraphQL,
    mongodb: Mongo,
    aws: AWS,
    html: HTML,
    css: CSS,
  });
  return (
    <section id="about">
      <Container
        className={`shadow main-container ${active ? " container-active" : ""}`}
        style={{
          minHeight: "100vh",
          border: "1px solid transparent",
          borderRadius: "15px",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center title-text"
          style={{
            margin: "2rem 0rem 0rem 0rem",
            borderBottom: "2px solid #4f837f",
            color: "#4f837f",
          }}
        >
          <h1>About Me</h1>
        </div>

        <Row>
          <Col lg="6" style={{ marginTop: "2rem" }}>
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
          <Col lg="6" style={{ marginTop: "2rem" }}>
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
                padding: "50px 20px 20px 20px",
                margin: "0px",
              }}
            >
              I am currently a junior at University of Rochester pursuing a
              major in Computer Science and a minor Business. During the summer of 2019,
              I interned for the first time at start-up company and worked as a
              full-stack developer. During my time there I saw how much depth
              web applications have and began exploring this vast field. I found
              out how a full-stack developer’s work includes juggling through
              many things such as planning, organizing, and streamlining tasks.
              This is very fitting with my work-ethic, which is why I want to
              pursue this field. I've continued my journey as a full-stack
              developer and currently work at at the HCI department of my
              college where I’m improving my skills as a programmer and an
              engineer. I've also had the opportunity to intern as a full-stack
              engineering intern at Perflo where I have received an insight into
              the US tech industry and have had the chance to be part of an
              agile team.
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
                  <img src={src} width="200px" />
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
