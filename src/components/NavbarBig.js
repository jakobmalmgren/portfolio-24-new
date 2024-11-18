import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import icon from "../images/iconJakob.svg";
import "./NavbarBig.css";
import logoNavbar from "../images/logoJM.png";

const NavbarBig = () => {
  return (
    <Fragment>
      <nav className="navbar">
        {/* <img className="navbar__icon" src={icon} alt="" /> */}
        <img src={logoNavbar} alt="" className="navbar__icon" />
        <section className="navbar__list-container">
          <section className="navbar__list-wrapper">
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <Link className="navbar__link" to="/">
                  HOME
                </Link>
              </li>
            </ul>
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <Link className="navbar__link" to="/resume">
                  RESUME
                </Link>
              </li>
            </ul>
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <Link className="navbar__link" to="/projects">
                  PROJECTS
                </Link>
              </li>
            </ul>
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <Link className="navbar__link" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </nav>
    </Fragment>
  );
};

export default NavbarBig;
