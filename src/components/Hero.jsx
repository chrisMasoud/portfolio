import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Full Stack Web & Mobile Developer👋</h1>
              <p>
                Hi, I'm Chris Masoud. A passionate Full Stack Web & Mobile
                Developer based in New York📍
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/chrismasoud/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="fa-icon"
                  />
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/chrisMasoud"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="fa-icon"
                  />
                </a>
              </span>
            </div>
            <div className="hero-img" />
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple logo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.cdnlogo.com/logos/s/66/swift.svg"
                    alt="Swift logo"
                  />
                </li>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                    alt="React logo"
                  />
                </li>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="JavaScript logo"
                  />
                </li>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                    alt="CSS3 logo"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
