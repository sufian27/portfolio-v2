import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Me from "../../img/me.JPG";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "Project 1",
      desc: "Project 1 description",
      img: Me,
      href: "https://github.com/sufian27/shortest-path-map",
    },
    {
      name: "Project 2",
      desc: "Project 2 description",
      img: Me,
      href: "https://github.com/sufian27/shortest-path-map",
    },
    {
      name: "Project 3",
      desc: "Project 3 description",
      img: Me,
      href: "https://github.com/sufian27/shortest-path-map",
    },
    {
      name: "Project 4",
      desc: "Project 4 description",
      img: Me,
      href: "https://github.com/sufian27/shortest-path-map",
    },
  ]);

  const [width, setWidth] = useState();

  useEffect(() => {
    console.log("hello");
    // window.addEventListener(
    //   "scroll",
    //   () => {
    //     setWidth(window.innerWidth);
    //   },
    //   true
    // );

    // return () => {
    //   window.removeEventListener("resize", () =>
    //     console.log("Listener removed")
    //   );
    // };
  }, []);

  return (
    <section id="projects">
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
          <h1>Projects</h1>
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
              padding: "5rem 0rem",
            }}
          >
            <div class="featured-text text-lg-left">
              <a
                href="https://github.com/sufian27/shortest-path-map"
                target="_blank"
              >
                <h4>
                  Shortest Path Map <span id="star">&#9733;</span>
                </h4>
              </a>
              <p class="text-black-50 mb-0">
                I used Java to implement Dijkstra's algorithm to compute the
                shortest path between two points on a map. The graphics are
                implemented using Java's swing library.{" "}
              </p>
            </div>
          </Col>
        </Row>
        <br />

        {projects.map(({ name, desc, img, href }, index) =>
          index % 2 === 1 || width < 892 ? ( //right
            <>
              <Row
                className="shadow d-flex justify-content-center"
                style={{ margin: "20px" }}
              >
                <Col lg="6" className="project-img">
                  <a href={href} target="_blank">
                    <img
                      class="img-fluid mb-3 mb-lg-0"
                      src={img}
                      alt="featured project"
                    />
                  </a>
                </Col>
                <Col lg="6" style={{ background: "#161616" }}>
                  <div class="bg-black text-center h-100">
                    <div class="d-flex h-100">
                      <div
                        class="project-text w-100 my-auto text-center text-lg-left"
                        style={{ padding: "5rem" }}
                      >
                        <a href={href} target="_blank">
                          <h4 class="text-white">{name}</h4>
                        </a>
                        <p class="mb-0 text-white-50">{desc}</p>
                        <hr class="d-none d-lg-block mb-0 ml-0" />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            //left
            <>
              <Row
                className="shadow d-flex justify-content-center"
                style={{ margin: "20px" }}
              >
                <Col lg="6" style={{ background: "#161616" }}>
                  <div class="bg-black text-center h-100">
                    <div class="d-flex h-100">
                      <div
                        class="project-text w-100 my-auto text-center text-lg-left"
                        style={{ padding: "5rem" }}
                      >
                        <a href={href} target="_blank">
                          <h4 class="text-white">{name}</h4>
                        </a>
                        <p class="mb-0 text-white-50">{desc}</p>
                        <hr class="d-none d-lg-block mb-0 ml-0" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" className="project-img">
                  <a href={href} target="_blank">
                    <img
                      class="img-fluid mb-3 mb-lg-0"
                      src={img}
                      alt="featured project"
                    />
                  </a>
                </Col>
              </Row>
            </>
          )
        )}
      </Container>
    </section>
  );
};

export default Projects;
