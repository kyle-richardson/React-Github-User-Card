import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <a href="mailto:kyle.richardson1@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/kyle-richardson">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/kyle-m-richardson">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p>Copyright Kyle Richardson 2019</p>
    </div>
  );
};

export default Footer;
