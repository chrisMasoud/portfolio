import React from "react";
import img from "../img/about.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img src={img} alt="About Image" className="about-img" />
          </div>
          <div className="text-side">
            <h3>About Me</h3>
            <h4>
              A dedicated Full Stack Web & Mobile Developer
              <br />
              based in New York, USA.📍
            </h4>
            <p>
              As an experienced Full Stack Web & Mobile Developer, I possess an
              impressive arsenal of skills in React & React Native; as well as
              HTML, CSS, JavaScript, Swift, and Node.js. I excel in designing
              and developing responsive websites & mobile applications that
              offer a smooth user experience. My expertise lies in crafting
              dynamic, engaging interfaces through writing clean and optimized
              code and utilizing cutting-edge development tools and techniques.
              I am also a team player who thrives in collaborating with
              cross-functional teams to produce outstanding mobile and web
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
