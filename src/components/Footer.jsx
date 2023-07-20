import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <h3>Copyright © 2023. All rights are reserved.</h3>
          <div className="footer-socials">
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
              <FontAwesomeIcon icon={faGithub} size="2x" className="fa-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
