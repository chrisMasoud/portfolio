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
              <h1>Front-End React Developer</h1>
              <p>
                Hi, I'm Chris Masoud. A passionate Front-end Developer based in
                New York📍
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
                    alt="HTML5 logo and wordmark"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                  />
                </li>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/512px-CSS3_logo_and_wordmark.svg.png"
                    alt="CSS3 logo and wordmark"
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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                    alt="React logo"
                  />
                </li>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Font_Awesome_5_brands_node-js.svg/512px-Font_Awesome_5_brands_node-js.svg.png"
                    alt="Node.js logo"
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
