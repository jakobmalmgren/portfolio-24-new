import "./ResumeCard.css";

const ResumeCard = (props) => {
  return (
    <div className=" myexperienceCard ">
      <p className="myexperienceCard__year">
        {props.year} {props.yearEducation}
      </p>
      <h3 className="myexperienceCard__kind-of-job">
        {props.kindOfJob}
        {props.typeOfEducation}
      </h3>

      <li className="myexperienceCard__company">
        <span>
          {props.company}
          {props.place}
        </span>
      </li>
    </div>
  );
};

export default ResumeCard;
