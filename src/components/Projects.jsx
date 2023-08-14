import React from "react";
import img from "../img/SkateSpotter.jpeg";
import img2 from "../img/SkateSpotter-iOS.jpg";
import img3 from "../img/ExpenseTracker.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="project-content">
          <p>Projects</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-img">
                <img src={img3} alt="SkateSpotter Image" className="img" />
              </div>
              <div className="project-text">
                <h3>Expense Tracker💰</h3>
                <p>
                  Expense Tracker is an iOS app that lets users track their
                  income and expenses. The app provides an interface for viewing
                  and adding transactions, as well as charts to help users
                  visualize their spending habits.
                </p>
                <div className="stack">
                  <p>SwiftUI</p>
                  <p>Core Data</p>
                  <p>Swift Charts</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/chrisMasoud/ExpenseTracker"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      className="fa-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img">
                <img
                  src={img2}
                  alt="SkateSpotter - iOS Image"
                  className="img"
                />
              </div>
              <div className="project-text">
                <h3>SkateSpotter🛹 - Mobile</h3>
                <p>
                  SkateSpotter is an iOS App that lets skateboarders find and
                  share local street skate spots. The app provides an interface
                  for searching, adding, comparing, reviewing, and saving skate
                  spots.
                </p>
                <div className="stack">
                  <p>SwiftUI</p>
                  <p>MapKit</p>
                  <p>Firebase</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/chrisMasoud/SkateSpotter-iOS"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      className="fa-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img">
                <img src={img} alt="SkateSpotter Image" className="img" />
              </div>
              <div className="project-text">
                <h3>SkateSpotter🛹 - Desktop</h3>
                <p>
                  SkateSpotter is a Full Stack Web App that lets skateboarders
                  find and share local street skate spots. The website provides
                  an interface for searching, adding, comparing, reviewing, and
                  saving skate spots.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>CSS</p>
                  <p>Node.js</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/chrisMasoud/SkateSpotter"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      className="fa-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
