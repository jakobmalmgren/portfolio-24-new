import { SiCss3 } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import { RiBootstrapLine } from "react-icons/ri";
import { IoLogoSass } from "react-icons/io";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAxios } from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";

const data = [
  {
    title: "Bootcamp Webpage",
    info: `Focusing on Bootstrap, CSS and HMTL.
      It also includes a Javascript library called AOS that creates nice and smooth 
      animations. It is all responsive.
       `,
    label: ["Front-End"],
    image: "bootstrap.png",
    url: "https://github.com/jakobmalmgren/bootstrap-css-html-js",
    live: "https://bootstrap-css-html-js-ndxf.vercel.app/",
    techniques: [<SiCss3 />, <ImHtmlFive2 />, <RiBootstrapLine />],
  },
  {
    title: "Chatservice",
    label: ["Back-End", "Front-End"],
    info: `Focusing on React, fetching data from an API with async/await,
      Axios, Context API, Firebase to create an authentification and the concept of styled components. I also used React hooks such as usestate, usecontext and useffect.
      It is all responsive.`,
    image: "chat.jpg",
    url: "https://github.com/jakobmalmgren/chatproject",
    live: "https://chatproject-fawn.vercel.app/",
    techniques: [
      <SiCss3 />,
      <ImHtmlFive2 />,
      <FaReact />,
      <BiLogoFirebase />,
      <SiAxios />,
    ],
  },

  {
    title: "Photography Webpage",
    label: ["Front-End"],
    info: `Focusing on CSS, HTML, The Grid Layout System, 
      The FlexBox Layout Module and the preprocessor language SASS. 
      It also includes some Javascript. It is all responsive.`,
    image: "photographer.png",
    url: "https://github.com/jakobmalmgren/sass-flex-grid-js",
    live: "https://grid-flexbox-sass-project.vercel.app/",
    techniques: [
      <SiCss3 />,
      <ImHtmlFive2 />,
      <IoLogoSass />,
      <RiJavascriptLine />,
    ],
  },
  {
    title: "Videoplayer",
    label: ["Front-End"],
    info: `Focusing on React, fetching data from an API,
      the state management tool Redux, Typescript and Tailwind. It is all responsive.`,
    image: "video.png",
    url: "https://github.com/jakobmalmgren/videoplayer",
    live: "https://videoplayer-beta.vercel.app/",
    techniques: [
      <SiCss3 />,
      <ImHtmlFive2 />,

      <FaReact />,
      <SiRedux />,
      <TbBrandTypescript />,
      <RiTailwindCssFill />,
    ],
  },

  {
    title: "E-Comerce",
    label: "Front-End",
    info: `Focusing on React. For the styling I use CSS - modules. I use various techniques as react-router-dom, dealing with props, destructuring props, folderstructure etc.
      A variaty of methods such as map, filter, find, reduce. I use hooks such as
      usestate, and useeffect. It is all responsive.`,
    image: "ecomerce.png",
    url: "https://github.com/jakobmalmgren/react-project",
    live: "https://react-project-gules.vercel.app/",
    techniques: [<SiCss3 />, <ImHtmlFive2 />, <IoLogoSass />, <FaReact />],
  },
];

export default data;
