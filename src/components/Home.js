import img from "../images/me.jpg";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
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
            <section className="home__btn-section">
              <button className="home__btn-section__download-btn">
                DOWNLOAD CV <LuDownload />
              </button>
            </section>
            <section className="home__icon-section">
              <section className="home__icon-section__container">
                <LuGithub className="home__icon-section__icon" />
              </section>
              <section className="home__icon-section__container">
                <RiLinkedinLine className="home__icon-section__icon" />
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
