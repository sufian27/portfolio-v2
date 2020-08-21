import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Me from "../../img/me.JPG";

const Contact = () => {
  return (
    <section className="contact-section shadow" id="contact">
      <Container>
        <div
          className="d-flex align-items-center justify-content-center title-text"
          style={{
            margin: "2rem 0rem 0rem 0rem",
            borderBottom: "2px solid #4f837f",
            color: "#4f837f",
          }}
        >
          <h1>Contact</h1>
        </div>
        <Row>
          <Col md="4" className="mb-3 mb-md-0 mt-2">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fa fa-map-marker text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Address</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  500 Wilson Blvd, Rochesher NY 14627
                </div>
              </div>
            </div>
          </Col>

          <Col md="4" className="mt-2 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fa fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href="mailto:sufianmushtaq@gmail.com">
                    sufianmushtaq@gmail.com
                  </a>
                </div>
                <div className="small text-black-50">
                  <a href="mailto:smushtaq@u.rochester.edu">
                    smushtaq@u.rochester.edu
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col md="4" className="mt-2 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fa fa-mobile text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4" />
                <div className="small text-black-50">+1 (585) 503-6908</div>
                <div className="small text-black-50">+92 323 4022504</div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="social d-flex justify-content-center">
          <a
            href="https://www.facebook.com/sufian.mushtaq"
            target="_blank"
            className="fa fa-facebook-f"
          ></a>
          <a
            href="https://github.com/sufian27"
            target="_blank"
            className="fa fa-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/sufian-mushtaq-247b50178"
            target="_blank"
            className="fa fa-linkedin"
          ></a>
        </div>
        <br />
      </Container>
    </section>
  );
};

export default Contact;
