import "./MyEducation.css";
import data from "./EducationData.js";
import ResumeCard from "./ResumeCard";

const MyEducation = () => {
  return (
    <div className="myEducation">
      <h1 className="myEducation__header">My experience</h1>
      <p className="myEducation__paragrapgh">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae et
        hic, nemo enim sint.
      </p>
      <section className="myEducation__grid">
        {data.map((item) => {
          return <ResumeCard {...item}></ResumeCard>;
        })}
        {/* // om de kmr mer kort göra en scrollbar sidan */}
      </section>
    </div>
  );
};

export default MyEducation;
