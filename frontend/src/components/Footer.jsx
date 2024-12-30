import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Ashish's Event</h1>
          <p>Events and Weddings</p>
        </div>

        <div className="social-icons-container">
          <h3 className="social-icons-header">Connect with us:</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ashis-muchahary-769b2930a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={27} />
            </a>
            <a href="https://github.com/Sino-T05" target="_blank" rel="noopener noreferrer">
              <FaGithub size={27} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={27} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={27} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;