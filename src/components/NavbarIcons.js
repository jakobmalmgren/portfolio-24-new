import "./NavbarIcons.css";
import { IoIosMail } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logoNavbar from "../images/logoJM.png";

const NavbarIcons = () => {
  const NavlinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "rgb(38 77 32)" : "",
      color: isActive ? "white" : "",
    };
  };

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logoNavbar} alt="" className="navbar__icon" />
      </NavLink>

      <ul>
        <li>
          <NavLink style={NavlinkStyles} to="/">
            <ImHome3 />
          </NavLink>
        </li>

        <li>
          <NavLink style={NavlinkStyles} to="/resume">
            <FaBriefcase />
          </NavLink>
        </li>
        <li>
          <NavLink style={NavlinkStyles} to="/projects">
            <IoPersonSharp />
          </NavLink>
        </li>

        <li>
          <NavLink style={NavlinkStyles} to="/contact">
            <IoIosMail />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarIcons;
