import "./App.css";
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarBig from "./components/NavbarBig";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Fragment>
      <NavbarBig />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}

export default App;
