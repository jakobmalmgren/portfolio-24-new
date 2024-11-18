import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h1 className="aboutMe__header">About me</h1>
      <p className="aboutMe__paragrapgh">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae et
        hic, nemo enim sint.
      </p>
      <section className="aboutMe__info-section">
        <p>
          Name <span>Jakob Malmgren</span>
        </p>
        <p>
          Experience <span>3 years</span>
        </p>
        <p>
          Nationality<span>Swedish</span>
        </p>
        <p>
          Phone<span>(+46)768-699954</span>
        </p>
        <p>
          Email<span>Jakob.Malmgren1987@gmail.com</span>
        </p>
        <p>
          Languages<span>English, Swedish, Spanish</span>
        </p>
        <p>
          Resident<span>Sweden</span>
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
