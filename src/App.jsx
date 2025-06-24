import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AllProjects,
  Contact,
  Experience,
  Hero,
  Navbar,
  Portfolio,
  Skills,
} from "./components";

const MainPage = () => {
  const wrapperRef = useRef(null);

  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <div className="wrapper" ref={wrapperRef}>
        <div id="hero" className="z-10">
          <Hero scrollContainer={wrapperRef} />
        </div>
        <div id="experience" className="relative z-30 bg-primary">
          <Experience />
        </div>
        <div id="portfolio" className="relative z-30 bg-primary mt-[-2px]">
          <Portfolio />
        </div>
        <div id="skills" className="relative z-30 bg-primary mt-[-2px]">
          <Skills />
        </div>
        <div id="contact" className="relative z-30 bg-primary">
          <Contact />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
