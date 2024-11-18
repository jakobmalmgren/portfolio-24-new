import "./MyExperienceCard.css";
// import data from "../ExperienceData.";

const MyexperienceCard = (props) => {
  return (
    <div className=" myexperienceCard ">
      <p className="myexperienceCard__year">{props.year}</p>
      <h3 className="myexperienceCard__kind-of-job">{props.kindOfJob}</h3>

      <li className="myexperienceCard__company">
        <span>{props.company}</span>
      </li>
    </div>
  );
};

export default MyexperienceCard;
