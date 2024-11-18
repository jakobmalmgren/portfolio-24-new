import "./MySkills.css";
import data from "../SkillDataIcons.js";

const MySkills = () => {
  return (
    <div className="mySkills">
      <h1 className="mySkills__header">My Skills</h1>
      <p className="mySkills__paragrapgh">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae et
        hic, nemo enim sint.
      </p>
      <section className="mySkills__grid-skill-icons">
        {data.map((item) => {
          return (
            <div className="mySkills__grid-skill-icons__wrapper">{item}</div>
          );
        })}
        {/* ha en data me skillsen o mapar bara? */}
        {/* // om de kmr mer kort göra en scrollbar sidan */}
      </section>
    </div>
  );
};

export default MySkills;
