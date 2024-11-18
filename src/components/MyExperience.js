import "./MyExperience.css";
import data from "../ExperienceData.js";

import MyexperienceCard from "./MyexperienceCard";
const MyExperience = () => {
  return (
    <div className="myExperience">
      <h1 className="myExperience__header">My experience</h1>
      <p className="myExperience__paragrapgh">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae et
        hic, nemo enim sint.
      </p>
      <section className="myExperience__grid">
        {data.map((item) => {
          return <MyexperienceCard {...item}></MyexperienceCard>;
        })}

        {/* // om de kmr mer kort göra en scrollbar sidan */}
      </section>
    </div>
  );
};

export default MyExperience;
