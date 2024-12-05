import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
// import NavbarBig from "./components/NavbarBig";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LittleNav from "./components/LittleNav";

function App() {
  return (
    <div className="app">
      <LittleNav></LittleNav>
      <div className="app-wrapper">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
