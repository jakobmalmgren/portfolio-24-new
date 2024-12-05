import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
// import icon from "../images/iconJakob.svg";
import "./NavbarBig.css";
import logoNavbar from "../images/logoJM.png";

const NavbarBig = () => {
  return (
    // <Fragment>
    <nav className="navbar">
      {/* <img className="navbar__icon" src={icon} alt="" /> */}
      <img src={logoNavbar} alt="" className="navbar__icon" />
      <section className="navbar__list-container">
        <section className="navbar__list-wrapper">
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <NavLink className="animation-link " to="/">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Home
              </NavLink>
            </li>
          </ul>
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <NavLink className="animation-link " to="/resume">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Resume
              </NavLink>
            </li>
          </ul>
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <NavLink className="animation-link " to="/projects">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Projects
              </NavLink>
            </li>
          </ul>
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <NavLink className="animation-link " to="/contact">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Contact
              </NavLink>
            </li>
            {/* <div className="a">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              buttton
            </div> */}
          </ul>
        </section>
      </section>
    </nav>
    // </Fragment>
  );
};

export default NavbarBig;
