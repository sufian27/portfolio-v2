import React, { useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Me from "../../img/me.JPG";

const Publications = () => {
  return (
    <section id="publications">
      <Container
        className="shadow"
        style={{
          // minHeight: "100vh",
          background: "rgba(255, 255, 255, 1.0)", //transition from grey to white
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
          <h1>Publications</h1>
        </div>
        <Row className="shadow" style={{ margin: "20px" }}>
          <Col lg="7" className="project-img">
            <a
              href="https://github.com/sufian27/shortest-path-map"
              target="_blank"
            >
              <img
                class="img-fluid mb-3 mb-lg-0"
                src={Me}
                alt="featured project"
              />
            </a>
          </Col>
          <Col
            lg="5"
            className="d-flex align-items-center justify-content-center"
            style={{
              padding: "2rem 0rem",
            }}
          >
            <div class="featured-text text-lg-left">
              <a
                href="https://github.com/sufian27/shortest-path-map"
                target="_blank"
              >
                <h4>
                  Empowering Teachers to Integrate Machine Learning into K-12
                  Scientific Discovery
                </h4>
              </a>
              <p class="text-black-50 mb-0">
                We co-designed a learning environment called SmileyDiscovery
                with science teachers to investigate opportunities of
                integrating Machine Learning (ML) with K-12 scientific
                discovery.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Publications;
