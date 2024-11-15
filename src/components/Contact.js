import "./Contact.css";
// 'ndra om till BEM

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container-content">
        <div className="contact-container">
          <div className="contact-container-header">
            {/* <p> ~ Get in touch ~</p> */}
            <h1>CONTACT</h1>
          </div>
          <div className="contact-container-wrapper">
            <div className="contact-container-icons">
              <div className="icon-wrapper">
                <div className="icon-circle"></div>
                <p> +46768- 699954</p>
              </div>
              <div className="icon-wrapper">
                <div className="icon-circle"></div>

                <p>Jakob.Malmgren1987@gmail.com</p>
              </div>
              <div className="location-wrapper">
                {/* <div className="icon-wrapper"></div> */}
                <div className="icon-wrapper">
                  <div className="icon-circle"></div>
                  <p> Kristianstad, Sweden</p>
                </div>
              </div>

              <iframe
                src={
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71346.91532573519!2d14.0632383450249!3d56.025753522488046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4654034d24249807%3A0x4019078290e7ae0!2sKristianstad!5e0!3m2!1ssv!2sse!4v1689156567853!5m2!1ssv!2sse"
                }
                width="100%"
                height="290"
                allowfullscreen=""
                loading="lazy"
                title="map"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact-container-inputfields">
              <form>
                <div className="form-wrapper">
                  <div className="input-wrapper">
                    <label for="fname" className="formLabel">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="Your first name.."
                    />
                  </div>

                  <div className="input-wrapper">
                    <label for="lname" className="formLabel">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      id="lname"
                      name="lastname"
                      placeholder="Your last name.."
                    />
                  </div>

                  <div className="input-wrapper">
                    <label for="email" className="formLabel">
                      Email
                    </label>
                    <input
                      pattern="^[\w#][\w\.\`+#](.[\w\\`#]+)\@[a-zA-Z0-9]+(.[a-zA-Z0-9]+)*(.[a-zA-Z]{2,20})$"
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email.."
                    />
                  </div>

                  <div className="input-wrapper">
                    <label for="subject" className="formLabel">
                      Subject
                    </label>
                    <textarea
                      required
                      type="text"
                      minLength="20"
                      rows="8"
                      cols="50"
                      id="subject"
                      name="message"
                      placeholder="Write something.."
                    ></textarea>
                  </div>
                </div>

                <button className="form-btn" type="submit" value="Submit">
                  <h3>SEND</h3>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
