import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Navbar from './Navbar';



const Home = () => {
  const [contactPopupVisible, setContactPopupVisible] = useState(false);

  const toggleContactPopup = () => {
    setContactPopupVisible(!contactPopupVisible);
  };

  return (
    <div>
      <Navbar /> 
    <div className="home">
      
      <h2>Welcome To My Portfolio!</h2>

      {contactPopupVisible && (
        <div className="contact-popup">
          <h2>Contact Me</h2>
          <p>Phone: +91 7021532074</p>
          <p>Email: vivekddalal8@gmail.com</p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/vivek-dalal-096448250" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/VivekDDalal" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <button onClick={toggleContactPopup}>Close</button>
        </div>
      )}
      <div className="intro">
        <p>
        Hello, I'm Vivek Dalal, a dedicated third-year Computer Engineering student currently working towards my BTech degree at Veermata Jijabai Technological Institute (VJTI), which is affiliated with the esteemed Mumbai University.
        </p>
        <p>
        Welcome to my digital sanctuary, where I offer a glimpse into my journey, experiences, and accomplishments. Here, you'll find an assortment of my academic pursuits, skills, and projects. Whether you're interested in my coursework, eager to explore my skills and certifications, or curious about my project portfolio, this space has it all.
        </p>
        <p>
        I encourage you to connect with me for potential collaborations and opportunities. Your visit here is greatly appreciated, and I trust you'll find valuable insights during your stay. Thank you for stopping by, and I hope you have an enjoyable experience!
        </p>
      </div>
    </div>

    </div>


  );
};

export default Home;
