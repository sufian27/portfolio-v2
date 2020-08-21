import React, { useState, useEffect } from "react";
import "./App.css";
import MyNavbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Publications from "./components/publications";
import Contact from "./components/contact";

function App() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));
    return () =>
      window.removeEventListener("scroll", () =>
        console.log("removed scroll listener")
      );
  }, []);
  return (
    <div className="App">
      <MyNavbar scroll={scroll} />
      <Home />
      <About />
      <Projects />
      <Publications />
      <Contact />
      <footer class="small text-center text-white-50">
        <div class="container">Designed by Sufian Mushtaq</div>
      </footer>
    </div>
  );
}

export default App;
