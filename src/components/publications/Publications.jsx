import React, { useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
// import Me from "../../img/me.JPG";
import Publication from "../../img/publication.PNG";

const Publications = ({ active }) => {
  return (
    <section id="publications">
      <Container
        className={`shadow main-container ${active ? " container-active" : ""}`}
        style={{
          // minHeight: "100vh",
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
              href="https://drive.google.com/file/d/1hXSY8qaQYz8pXlrmmVJH5KA2i776GtMW/view?usp=sharing"
              target="_blank"
            >
              <img
                class="img-fluid mb-3 mb-lg-0"
                src={Publication}
                alt="publication"
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
              <h4>
                <a
                  href="https://media-exp1.licdn.com/dms/document/C4D1FAQFCB8sznTX7OA/feedshare-document-pdf-analyzed/0?e=1598644800&v=beta&t=0bYzjlvG9YzWhKjp2CnYL-WG48wsyiPmVOi_ubRi5kk"
                  target="_blank"
                >
                  Empowering Teachers to Integrate Machine Learning into K-12
                  Scientific Discovery
                </a>
              </h4>

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
