import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSalesforce } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import  '../Components/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media-container">
        <a href="https://github.com/joaop92" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
        <a href=" https://www.linkedin.com/in/joaopinteraminense/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
        <a href="https://www.salesforce.com/trailblazer/jpaulointeraminense/" target="_blank">
          <FontAwesomeIcon icon={faSalesforce} />
          <span>Salesforce</span>
        </a>
      </div>
      <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;