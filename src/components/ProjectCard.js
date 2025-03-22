import React from "react";
import "./ProjectCard.css";
import { NavLink } from "react-router-dom";
// import * as React from "react";
import { LuGithub } from "react-icons/lu";
import { PiLinkLight } from "react-icons/pi";
const ProjectCard = ({ item }) => {
  return (
    <div className="project-card">
      <section className="project-card__innerdiv">
        <section className="project-card__item-label-wrapper">
          {Array.isArray(item.label) ? (
            item.label.map((label, index) => (
              <button
                key={index}
                className={
                  label.includes("Back-End")
                    ? "project-card__label--back"
                    : "project-card__label"
                }
              >
                {label}
              </button>
            ))
          ) : (
            <button className="project-card__label">{item.label}</button>
          )}
        </section>

        <section className="project-card__img-section">
          <img
            className="project-card__img"
            src={`/images/${item.image}`}
            alt=""
          />
        </section>
        <section className="project-card__text-section">
          <section className="project-card__text-top-wrapper">
            <h1 className="project-card__title">{item.title}</h1>
            <p className="project-card__paragraph">{item.info}</p>
          </section>
          <section className="project-card__lower-wrapper">
            <section className="project-card__icons">{item.techniques}</section>
            <section className="project-card__link-icons-wrapper">
              <section className="project-card__link-icons">
                <NavLink to={item.url}>
                  <LuGithub className="project-card__link-item" />
                </NavLink>
              </section>
              <section className="project-card__link-icons">
                <NavLink to={item.live}>
                  <PiLinkLight className="project-card__link-item" />
                </NavLink>
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};
export default ProjectCard;
