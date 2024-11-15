import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavbarBig.css";

const NavbarBig = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <aside className="navbar__icon">JM</aside>
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
