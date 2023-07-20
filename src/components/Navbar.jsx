import React from "react";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar-close">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              height="32px"
              width="32px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="mobile-navbar-links">
            <li>
              <a onClick={openNav} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar">
          <h3 className="logo">Chris Masoud</h3>
          <ul className="navbar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="mobile-hamb" onClick={openNav}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              height="32px"
              width="32px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}
