import "./Resume.css";
import ResumeBox from "./ResumeBox";
const resumeSkill = [
  {
    image: "/images/atom.png",
    skillName: "React",
    whatArea: "Framework",
  },
  {
    image: "/images/firebase.png",
    skillName: "Firebase",
    whatArea: "Database",
  },
  {
    image: "/images/figma.png",
    skillName: "Figma",
    whatArea: "Design",
  },
  {
    image: "/images/github.png",
    skillName: "Github",
    whatArea: "version control system",
  },
  {
    image: "/images/sass.png",
    skillName: "SASS",
    whatArea: "Extenssion for css",
  },
  {
    image: "/images/tailwind.png",
    skillName: "Tailwind",
    whatArea: "CSS framework",
  },
  {
    image: "/images/redux.svg",
    skillName: "Redux",
    whatArea: "State management tool",
  },
  {
    image: "/images/typescript.png",
    skillName: "Typescript",
    whatArea: "Javascript with superpowers",
  },
  {
    image: "/images/java-script.png",
    skillName: "Javascript",
    whatArea: "Coding language",
  },
  {
    image: "/images/html.png",
    skillName: "HTML",
    whatArea: "Structure",
  },
  {
    image: "/images/css-3.png",
    skillName: "CSS",
    whatArea: "Design",
  },
  {
    image: "/images/bootstrap.svg",
    skillName: "Bootstrap",
    whatArea: "CSS library",
  },
  {
    image: "/images/express.jpg",
    skillName: "Express JS",
    whatArea: "Node JS framework",
  },
  {
    image: "/images/nodeJS.png",
    skillName: "Node JS",
    whatArea: "Back-end language",
  },
  {
    image: "/images/mongodb.png",
    skillName: "Mongo DB",
    whatArea: "Database",
  },
];

const Resume = () => {
  return (
    <div>
      {resumeSkill.map((item) => {
        return <ResumeBox key={item.skillName} item={item} />;
      })}
    </div>
  );
};

export default Resume;
