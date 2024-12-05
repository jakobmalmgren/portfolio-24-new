import "./LittleNav.css";
import { Divide as Hamburger } from "hamburger-react";
import { TfiEmail } from "react-icons/tfi";
import { BsBrush } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { RxHome } from "react-icons/rx";
import { BsChatLeftText } from "react-icons/bs";
import { useState } from "react";
// import logoNavbar from "../images/logoJM.png";
import { NavLink } from "react-router-dom";

const LittleNav = () => {
  const linkItemsMob = [
    <NavLink to="/home" className="navigation-link-mob">
      <span className="navigation-text-mob">HOME</span>
      <span className="navigation-icon-mob">
        <RxHome></RxHome>
      </span>
    </NavLink>,
    <NavLink to="/resume" className="navigation-link-mob">
      <span className="navigation-text-mob">RESUME</span>
      <span className="navigation-icon-mob">
        <RxPerson></RxPerson>
      </span>
    </NavLink>,
    <NavLink to="/projects" className="navigation-link-mob">
      <span className="navigation-text-mob">PROJECTS</span>
      <span className="navigation-icon-mob">
        <BsBrush></BsBrush>
      </span>
    </NavLink>,
    // <NavLink href="#testimonials" className="navigation-link-mob">
    //   <span className="navigation-text-mob">TESTIMONIALS</span>
    //   <span className="navigation-icon-mob">
    //     <BsChatLeftText></BsChatLeftText>
    //   </span>
    // </NavLink>,
    <NavLink to="/contact" className="navigation-link-mob">
      <span className="navigation-text-mob">CONTACT</span>
      <span className="navigation-icon-mob">
        <TfiEmail></TfiEmail>
      </span>
    </NavLink>,
  ];
  const [selected, setSelected] = useState(0);

  function handleClick(i) {
    if (selected === i) {
      setSelected(null);
    }

    setSelected(i);
  }

  const items = linkItemsMob.map((item, i) => {
    return (
      <li
        className={
          selected === i ? "navigation-list-mob active" : "navigation-list-mob"
        }
        onClick={() => {
          handleClick(i);
        }}
      >
        {item}
      </li>
    );
  });

  return (
    <div className="navigation-mob-wrapper">
      <div className="navigation-mob">
        <ul className="navigation-ul-mob">
          {items}
          <div className="indicator-mob"></div>
        </ul>
      </div>
    </div>
  );
};

export default LittleNav;

//lägga till från router..
