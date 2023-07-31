import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-content">
          <div className="skills-title">
            <p>Skills</p>
            <h3>My Favorite Technologies💻</h3>
          </div>
          <div className="skills-icons">
            <div className="skills-icon-box">
              <span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 22"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  height="48px"
                  width="48px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </span>
              <div className="skills-info">
                <h3>Front End</h3>
                <ul>
                  <li>SwiftUI</li>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Next.js</li>
                  <li>Angular</li>
                  <li>jQuery</li>
                </ul>
              </div>
            </div>
            <div className="skills-icon-box">
              <span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 22"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  height="48px"
                  width="48px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                  />
                </svg>
              </span>
              <div className="skills-info">
                <h3>Back End</h3>
                <ul>
                  <li>Swift</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Kotlin</li>
                  <li>Java</li>
                  <li>PHP</li>
                  <li>SQL</li>
                  <li>NoSQL</li>
                </ul>
              </div>
            </div>
            <div className="skills-icon-box">
              <span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 22"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  height="48px"
                  width="48px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </span>
              <div className="skills-info">
                <h3>Developer Tools</h3>
                <ul>
                  <li>AWS</li>
                  <li>Xcode</li>
                  <li>Git</li>
                  <li>Vercel</li>
                  <li>Agile Methodology</li>
                  <li>CI/CD</li>
                  <li>TDD</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
