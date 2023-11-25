import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn and GitHub icons
import './navbar.css';

const Navbar = () => {
  const [contactPopupVisible, setContactPopupVisible] = useState(false);

  const toggleContactPopup = () => {
    setContactPopupVisible(!contactPopupVisible);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active"> {/* Use NavLink */}
            <button className="navbar-button">Home</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeClassName="active"> {/* Use NavLink */}
            <button className="navbar-button">Skills & Certifications</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/university-courses" activeClassName="active"> {/* Use NavLink */}
            <button className="navbar-button">University Courses</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active"> {/* Use NavLink */}
            <button className="navbar-button">Projects</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/achievements" activeClassName="active"> {/* Use NavLink */}
            <button className="navbar-button">Achievements</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" activeClassName="active"> {/* Use NavLink */}
            <button className="navbar-button">Educational Details</button>
          </NavLink>
        </li>
        <li>
          <button className="navbar-button" onClick={toggleContactPopup}>
            Contact Me
          </button>
        </li>
      </ul>

      {contactPopupVisible && (
        <div className="contact-popup">
          <h2>Contact Me</h2>
          <p>
            <FontAwesomeIcon icon={faPhone} /> : +91 7021532074
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> : vivekddalal8@gmail.com
          </p>
          <p>
            <a href="https://www.linkedin.com/in/vivek-dalal-096448250" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </p>
          <p>
            <a href="https://github.com/VivekDDalal" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
          <button onClick={toggleContactPopup}>Close</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
