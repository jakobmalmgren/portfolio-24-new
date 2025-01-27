import img from "../images/me.jpg";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
// import LittleNav from "./LittleNav";
import logoNavbar from "../images/logoJM.png";
//
// import { TfiEmail } from "react-icons/tfi";
// import { BsBrush } from "react-icons/bs";
// import { RxPerson } from "react-icons/rx";
// import { RxHome } from "react-icons/rx";
// import { IoIosMail } from "react-icons/io";
// import { FaBriefcase } from "react-icons/fa";
// import { ImHome3 } from "react-icons/im";
// import { IoPersonSharp } from "react-icons/io5";
//

import { NavLink } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="home__info-section">
        <section className="home__info-section-wrapper">
          <p className="home__info-section__p">Fullstack Developer</p>
          <h1 className="home__info-section__header">
            Hello I´m <br /> <span className="home__span">Jakob Malmgren</span>
          </h1>
          <p className="home__info-section__p">
            Fullstack JavaScript Developer with a passion for UX/UI and the
            creation of scalable projects.
          </p>
          <section className="home__btn-icons-wrapper">
            {/* <section className="home__btn-section"></section> */}
            <section className="home__icon-section">
              <section className="home__icon-section__container">
                <NavLink target="_ blank" to="https://github.com/jakobmalmgren">
                  <LuGithub className="home__icon-section__icon" />
                </NavLink>
              </section>
              <section className="home__icon-section__container">
                <NavLink
                  target="_ blank"
                  to="https://www.linkedin.com/in/jakob-malmgren-832062226/"
                >
                  <RiLinkedinLine className="home__icon-section__icon" />
                </NavLink>
              </section>
            </section>
          </section>
        </section>
      </section>

      <section className="home__img-section">
        <img className="home__img" src={img} alt="profile-img" />
      </section>
    </div>
  );
};

export default Home;
