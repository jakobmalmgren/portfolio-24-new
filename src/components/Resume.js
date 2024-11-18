import "./Resume.css";
import MyExperience from "./MyExperience.js";
import MyEducation from "./MyEducation.js";
import MySkills from "./MySkills.js";
import AboutMe from "./AboutMe.js";

const Resume = () => {
  return (
    <div className="resume">
      <section className="resume__wrapper">
        <section className="resume__btn-section">
          <section className="resume__btn-section__wrapper">
            <h1 className="resume__header">Why hire me?</h1>
            <p className="resume__paragrapgh">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, dicta? Quos eum sequi iste dolores?
            </p>
            <section className="resume__btn-wrapper">
              <button className="resume__btn-wrapper__btn">Experience</button>
              <button className="resume__btn-wrapper__btn">Education</button>
              <button className="resume__btn-wrapper__btn">Skills</button>
              <button className="resume__btn-wrapper__btn">About Me</button>
            </section>
          </section>
        </section>
        <section className="resume__show-section">
          <AboutMe></AboutMe>
          {/* <MyExperience></MyExperience> */}
          {/* <MySkills></MySkills> */}
          {/* <MyEducation></MyEducation> */}
        </section>
      </section>
    </div>
  );
};

export default Resume;
