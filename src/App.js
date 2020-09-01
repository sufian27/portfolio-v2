import React, { useState, useEffect, useRef } from "react";
import MyNavbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Publications from "./components/publications";
import Contact from "./components/contact";

const App = () => {
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState({
    about: false,
    projects: false,
    publications: false,
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () =>
      window.removeEventListener("scroll", () =>
        console.log("removed scroll listener")
      );
  }, []);

  useEffect(() => console.log(active), [active]);
  return (
    <div className="App">
      <MyNavbar scroll={scroll} setActive={setActive} active={active} />
      <Home />
      <About active={active["about"]} />
      <Projects active={active["projects"]} />
      <Publications active={active["publications"]} />
      <Contact />
      <footer class="small text-center text-white-50">
        <div class="container">Designed by Sufian Mushtaq</div>
      </footer>
    </div>
  );
};

export default App;
