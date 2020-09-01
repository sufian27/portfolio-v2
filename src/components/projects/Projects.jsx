import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Me from "../../img/me.JPG";
import {
  Checkers,
  LobPong,
  Portfolio,
  RecDescParser,
  ShoppingMERN,
  ShortestPathMap,
  SmileyDiscovery,
} from "../../img/projects";

const Projects = ({ active }) => {
  const [projects, setProjects] = useState([
    //pull from database later
    {
      name: "SmileyDiscovery (under dev)",
      desc: `Made an online platform to help teach Machine Learning concepts 
            to K12 high school students through Chernoff faces data visualization 
            using Node.js, React.js, Redux, MS SQL, and Python.`,
      img: SmileyDiscovery,
      href: "https://machinteraction.ur.rochester.edu/SmileyDiscovery/",
    },
    {
      name: "Intelligent Checkers",
      desc: `Designed and implemented an AI program that plays a game of checkers against
            human or computer opponents. It uses several versions of the Minimax algorithm 
            to make intelligent moves. The program is written in Java.`,
      img: Checkers,
      href: "https://github.com/sufian27/intelligent-checkers",
    },
    {
      name: "Recursive Descent Parser for RegEx",
      desc: `Wrote a recursive descent parser in C for a grammar that defines 
            the language of Regular Expressions. It takes advantage of pointers the low level nature
            of C and manages memory efficiently.`,
      img: RecDescParser,
      href: "https://github.com/sufian27/recursive-descent-parser",
    },
    {
      name: "Lob Pong",
      desc: `Built a lob pong game using the Java swing library. This lob pong game is one of my 
            first Java projects and makes use of event-driven programming to create animations based 
            on user input.`,
      img: LobPong,
      href: "https://github.com/sufian27/lob-pong",
    },
    {
      name: "Shopping List",
      desc: `Created a Full stack application using the MERN stack. It demonstrates a basic web application
            infrastructure and shows how the React.js UI interacts with the Express.js backend while the application 
            state is managed using Redux.`,
      img: ShoppingMERN,
      href: "https://github.com/sufian27/ShoppingList-MERN",
    },
    {
      name: "Portfolio",
      desc: `I made this website to showcase my achievements and experiences. It is made using React.js and will
            eventually feature more content and will also be connected to a GraphQL backend.`,
      img: Portfolio,
      href: "https://github.com/sufian27/portfolio-v2",
    },
  ]);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setWidth(window.innerWidth);
      },
      true
    );
    return () => {
      window.removeEventListener("resize", () =>
        console.log("Listener removed")
      );
    };
  }, []);

  return (
    <section id="projects">
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
                src={ShortestPathMap}
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
              <h4>
                <a
                  href="https://github.com/sufian27/shortest-path-map"
                  target="_blank"
                >
                  Shortest Path Map{" "}
                </a>
                <span id="star" style={{ color: "#ffd700" }}>
                  &#9733;
                </span>
              </h4>
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
          index % 2 === 1 || width < 992 ? ( //right
            <>
              <Row
                className="shadow d-flex justify-content-center"
                style={{ margin: "20px" }}
              >
                <Col lg="6" className="project-img">
                  <a href={href} target="_blank">
                    <img class="img-fluid mb-3 mb-lg-0" src={img} alt={name} />
                  </a>
                </Col>
                <Col lg="6" style={{ background: "#161616" }}>
                  <div class="bg-black text-center h-100">
                    <div class="d-flex h-100">
                      <div
                        class="project-text w-100 my-auto text-center text-lg-left"
                        style={{ padding: "5rem" }}
                      >
                        <h4 class="project-title">
                          <a href={href} target="_blank">
                            {name}
                          </a>
                        </h4>

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
                        <h4 class="project-title">
                          <a href={href} target="_blank">
                            {name}
                          </a>
                        </h4>

                        <p class="mb-0 text-white-50">{desc}</p>
                        <hr class="d-none d-lg-block mb-0 ml-0" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" className="project-img">
                  <a href={href} target="_blank">
                    <img class="img-fluid mb-3 mb-lg-0" src={img} alt={name} />
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
