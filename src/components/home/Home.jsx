import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particles from "react-particles-js";
import particleConfig from "./config";
import Typed from "react-typed";

const Home = () => {
  return (
    <section id="home">
      <Particles
        style={{
          backgroundColor: "black",
          position: "absolute",
          left: "0",
        }}
        height="100vh"
        className="particle"
        params={particleConfig}
      />

      <Container
        style={{
          padding: "0px",
          height: "100vh",
        }}
        className="d-flex justify-content-center align-items-center"
        fluid
      >
        <div>
          <Row style={{ marginLeft: "2rem", marginRight: "2rem" }}>
            <Col
              xs="12"
              style={{
                padding: "0.5rem 1.5rem 0.5rem 1.5rem",
                border: "1px solid white",
                marginBottom: "2rem",
              }}
            >
              <h1 style={{ color: "whitesmoke", textAlign: "center" }}>
                I am
                <span style={{ color: "#4f837f" }}> SUFIAN </span>
                <span style={{ color: "#8f1e25" }}>MUSHTAQ</span>
              </h1>
            </Col>
          </Row>
          <Row style={{ maxWidth: "100vw" }}>
            <Col xs="12">
              <h1 style={{ color: "whitesmoke", textAlign: "center" }}>
                <Typed
                  strings={[
                    "Web Developer.",
                    "Designer.",
                    "Software Engineer.",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h1>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Home;
