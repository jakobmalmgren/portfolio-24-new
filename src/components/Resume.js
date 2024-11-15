import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <h1 className="resume__header">RESUME</h1>
      <section className="resume__wrapper">
        <section className="resume__btn-section">
          <section className="resume__btn-section__wrapper">
            <h1>Why hire me?</h1>
            <p>
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
        <section className="resume__show-section"></section>
      </section>
    </div>
  );
};

export default Resume;
