import React, { useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Me from "../../img/me.JPG";

const Publications = () => {
  return (
    <section id="publications">
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
            margin: "2rem 0rem 0rem 0rem",
            borderBottom: "2px solid #4f837f",
            color: "#4f837f",
          }}
        >
          <h1>Publications</h1>
        </div>
      </Container>
    </section>
  );
};

export default Publications;
