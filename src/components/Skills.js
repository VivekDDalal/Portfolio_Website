import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './skills.css';

// Import the Navbar component
import Navbar from './Navbar';

const Skills = () => {
  const hardcodedSkills = [
    {
      _id: { "$oid": "652f8e1c1dd24a2ce154fa25" },
      Domain: "Databases",
      List: "SQL Server, Mongo DB, MySQL, Maria DB",
    },
    {
      _id: { "$oid": "652f8e841dd24a2ce154fa26" },
      Domain: "Frontend",
      List: "HTML 5, CSS 3, JavaScript, React Js",
    },
    {
      _id: { "$oid": "652f8ebe1dd24a2ce154fa27" },
      Domain: "Machine Learning and Deep Learning",
      List: "Neural Networks, Tensorflow, Keras",
      Certifications: "Neural Networks and Deep Learning, Pandas, Intermediate Machine Learning, Improving Deep Neural Networks, Convolutional Neural Networks, Sequence Models",
    },
    {
      _id: { "$oid": "652f90641dd24a2ce154fa29" },
      Domain: "Data Science and Data Analysis",
      List: "Basic Statistics, Plotting, Prediction Models",
      Certifications: "Applied Plotting/Charting and Data Representation in Python, Introduction To Data Science in Python",
    },
    {
      _id: { "$oid": "652f907e1dd24a2ce154fa2a" },
      Domain: "Languages",
      List: "C++/C, Java, Python, JavaScript, SQL",
    },
    {
      _id: { "$oid": "652f90bf1dd24a2ce154fa2b" },
      Domain: "Frameworks/Technologies",
      List: "Node Js, Express Js, Numpy, Pandas, Matplotlib, Scikit-learn, Seaborn, Tensorflow, Keras",
    },
    {
      _id: { "$oid": "652f91501dd24a2ce154fa2c" },
      Domain: "Reporting Tools",
      List: "Power BI, Tableau",
      Certifications: "Data-Driven Decisions With Power BI, Fundamentals of Visualization with Tableau, Essential Design Principles for Tableau",
    }
  ];
  const [expandedSkills, setExpandedSkills] = useState([]);

  // Create a map of certifications to their respective links
  const certificationLinks = {
    "Neural Networks and Deep Learning": "https://www.coursera.org/account/accomplishments/verify/6LMXFJF2JHT3",
    "Pandas": "https://drive.google.com/file/d/1Obz33WSwBpcq_2dKSKZd88Ry8dHX7yAG/view?usp=sharing",
    "Intermediate Machine Learning": "https://drive.google.com/file/d/135qrjy3DMEhACmDmi2Uc7kYGingYF8mP/view?usp=sharing",
    "Improving Deep Neural Networks": "https://www.coursera.org/account/accomplishments/verify/BZ44QW9VXG4C?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    "Convolutional Neural Networks": "https://www.coursera.org/account/accomplishments/verify/H2CYNTPQBXVH",
    "Sequence Models": "https://www.coursera.org/account/accomplishments/verify/L5B7W2JRXU6U",
    "Applied Plotting/Charting and Data Representation in Python": "https://www.coursera.org/account/accomplishments/verify/FNVYPTSHEMUW",
    "Introduction To Data Science in Python": "https://www.coursera.org/account/accomplishments/verify/JEUHY6QAKAS2",
    "Data-Driven Decisions With Power BI": "https://www.coursera.org/account/accomplishments/verify/P2KBYEZ3NVSC",
    "Fundamentals of Visualization with Tableau": "https://www.coursera.org/account/accomplishments/verify/P5D95TSQVF6S",
    "Essential Design Principles for Tableau": "https://www.coursera.org/account/accomplishments/verify/48BUTFN8A2YH",
  };

  const handleSkillClick = (index) => {
    if (expandedSkills.includes(index)) {
      setExpandedSkills(expandedSkills.filter((item) => item !== index));
    } else {
      setExpandedSkills([...expandedSkills, index]);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="skills">
        <h2>Skills & Certifications</h2>
        <a href="https://drive.google.com/file/d/1RmTTGM6WdfreDdvtJiHeXrlGbvtzxeC0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  My Resume <FontAwesomeIcon icon={faExternalLinkAlt} />
</a>

        <ul>
          {hardcodedSkills.map((skill, index) => (
            <ul key={index} className="skill-item">
              <h3 onClick={() => handleSkillClick(index)}>
                {skill.Domain}{' '}
                {expandedSkills.includes(index) ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronRight} />
                )}
              </h3>
              {expandedSkills.includes(index) && (
                <div className="skill-details">
                  <p>
                    <strong>TOPICS</strong>
                    <ul>
                      {skill.List.split(',').map((item, itemIndex) => (
                        <ul key={itemIndex}>{item.trim()}</ul>
                      ))}
                    </ul>
                  </p>
                  <p>&nbsp;</p>
                  {skill.Certifications && (
                    <p>
                      <strong>CERTIFICATIONS</strong>
                      <ul>
                        {skill.Certifications.split(',').map((certification, itemIndex) => (
                          <ul key={itemIndex}>
                            <a
                              href={certificationLinks[certification.trim()]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="certifications-link"
                            >
                              {certification.trim()} <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                          </ul>
                        ))}
                      </ul>
                    </p>
                  )}
                </div>
              )}
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
