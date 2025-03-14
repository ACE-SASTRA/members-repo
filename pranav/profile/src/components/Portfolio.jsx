import "../App.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import CursorGlow from "./CursorGlow";

function Portfolio() {
  // const navigate = useNavigate();
  // const [isGlowing, setGlow] = useState(false);

  // function settingGlow() {
  //   setGlow(true);
  // }

  // function removingGlow() {
  //   setGlow(false);
  // }

  return (
    <div className="app">
      {/* {isGlowing ? (
        <CursorGlow />
      ) : (
        // <CursorGlow style={{ visibility: "hidden" }} />
        null
      )} */}
      <CursorGlow />
      <div className="header">
        <h1>Pranav Ram S</h1>
        <h5>-Budding full stack web developer</h5>
      </div>
      <div className="body">
        <div className="left">
          <div className="description">
            <h4>Oh, Hello👋!</h4>
            <p>
              I am an aspiring full stack web developer with some cute-little
              experience in developing web applications using React, Node.js,
              and PostgreSQL. I have a strong foundation in web development and
              am passionate about learning new technologies.
            </p>
          </div>
          <div className="about">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex align-items-center justify-content-center">
                    {/*style="height: 300px; background-color: #f8f9fa;"*/}
                    <div>
                      <h4 style={{ textAlign: "center" }}>Education</h4>
                      <h5>B.Tech IT:</h5>
                      <ul className="text-start d-inline-block">
                        <li>SASTRA Deemed University (2022-present)</li>
                      </ul>
                      <h5>Higher Secondary:</h5>
                      <ul className="text-start d-inline-block">
                        <li>Mount Zion Internation School-CBSE (2020-2022)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="d-flex align-items-center justify-content-center">
                    {/*style="height: 300px; background-color: #e9ecef;" */}
                    <div>
                      <h4 style={{ textAlign: "center" }}>Clubs</h4>
                      <h5>Association of Computing Engineers:</h5>
                      <ul className="text-start d-inline-block">
                        <li>Member of ACE - Web Development Cluster</li>
                        <li>Member of ACE - Operation & Control-Promotions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="d-flex align-items-center justify-content-center">
                    {/*style="height: 300px; background-color: #dee2e6;" */}
                    <div>
                      <h4 style={{ textAlign: "center" }}>Courses</h4>
                      <h5>Certificates in:</h5>
                      <ul className="text-start d-inline-block">
                        <li>Full stack web development from Udemy(ongoing)</li>
                        <li>Basics of Machine Learning from Teachnook</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center justify-content-center">
                    {/*style="height: 300px; background-color: #dee2e6;" */}
                    <div>
                      <h4 style={{ textAlign: "center" }}>My Hobbies</h4>
                      <h5>Interested in:</h5>
                      <ul className="text-start d-inline-block">
                        <li>Keeping myself active by going to Gym & jogging</li>
                        <li>Reading self-development books</li>
                        <li>Watching movies & TV shows</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="projects">
            <h4>Projects</h4>
            <ul>
              <li>
                Mapify-A web app designed for students to create mindmap to
                learn new concepts easily
              </li>
              <li>A business website for a local two-wheeler workshop</li>
              <li>Employee salary Predictor using machine learning</li>
              <li>
                InfoHub - To collect and display User Information in an
                organised way
              </li>
            </ul>
          </div>
          <div className="skills">
            <h4>Skills</h4>
            <div>
              <div className="skill-btn">C++</div>
              <div className="skill-btn">Python</div>
              <div className="skill-btn">ReactJS</div>
              <div className="skill-btn">NodeJS</div>
              <div className="skill-btn">PostgreSQL</div>
              <div className="skill-btn">Machine Learning</div>
            </div>
          </div>
          <div className="contact">
            <h4>Contact Me!</h4>
            <div className="contact-options">
              <div>
                <a
                  href="https://www.linkedin.com/in/pranav-ram-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="contact-btn" size={50} />
                </a>
              </div>
              <div>
                <a
                  href="mailto:pranavram2982004@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="contact-btn" size={50} />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Prax29"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="contact-btn" size={50} />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/kinda.pranav_?igsh=Mmd2M3p2cWNxc2dw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="contact-btn" size={50} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
