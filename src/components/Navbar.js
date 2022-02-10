import React from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./Data";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img
            src="https://raw.githubusercontent.com/john-smilga/react-projects/master/11-navbar/final/src/logo.svg"
            alt="logo"
          />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">products</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
