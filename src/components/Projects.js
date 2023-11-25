import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './projects.css';
import Navbar from './Navbar.js'

const Projects = () => {
  const hardcodedProjects = [
    {
      "_id": { "$oid": "652f822a1dd24a2ce154fa19" },
      "Topic": "AI Based Test Platform",
      "Role": "\nTeam Lead\nBackend Developer\nDesigned the Rule-based AI Algorithm\nDesigned the Work Breakdown Structure",
      "Desc": {
        "Intro": "An innovative web-based adaptive multiple-choice question (MCQ) testing system for PARAKH, aimed at enhancing the assessment and learning experience for engineering students across AICTE Approved Technical Institutions in India. The system utilizes a rule-based AI algorithm to deliver personalized MCQ assessments, adapting the question selection based on the user's performance, time taken, and accuracy in previous questions, thereby fostering a more effective and tailored learning environment.",
        "Features": {
          "F1": "AI Implementation for Adaptive Question Selection",
          "F2": "Detailed Analytics Dashboard",
          "F3": "Proctoring System"
        },
      },
      "Link": "https://github.com/VivekDDalal/sureshot_presih",
      "Domains": "\nWeb Development\nData Analysis\nRule-Based AI\nComputer Vision",
      "TechStack": "\nMSSQL\nReact Js\nNode Js\nExpress Js\nTensorflow"
    },
    {
      "_id": { "$oid": "652f84941dd24a2ce154fa1a" },
      "Topic": "Online Test Platform",
      "Role": "\nTeam Lead\nBackend Developer\nDesigned the Work Breakdown Structure",
      "Domains": "\nWeb Development\nData Analysis\nComputer Vision",
      "Desc": {
        "Intro": "It is an Online Test Platform for MCQ type of questions.\nIt also includes a proctoring system to detect cheating during the tests.",
        "Features": {
          "F1": "Institutes can upload question papers in MCQ format",
          "F2": "Detailed Analytics Dashboard",
          "F3": "Proctoring System"
        }
      },
      "Link": "https://github.com/VivekDDalal/Online-Test-Platform",
      "TechStack": "\nMSSQL\nReact Js\nNode Js\nExpress Js\nTensorflow"
    },
    {
      "_id": { "$oid": "652f871c1dd24a2ce154fa1c" },
      "Topic": "Hostel Mess Management",
      "Role": "\nTeam Lead\nBackend Developer\nData Analysis in SQL\nDesigned the Work Breakdown Structure",
      "Desc": {
        "Intro": "Mess Management System for my college's hostel mess.",
        "Features": {
          "F1": "Keeps a record of all mess-registered students",
          "F2": "Students can mark the days they will remain absent",
          "F3": "Keeps a record of everyday's menu",
          "F4": "Amount of food wastage",
          "F5": "Overhead Expenses"
        },
      },
      "Link": "https://github.com/VivekDDalal/COC_Hackathon",
      "Domains": "\nWeb Development\nData Analysis",
      "TechStack": "\nMSSQL\nReact Js\nNode Js\nExpress Js"
    },
    {
      "_id": { "$oid": "652f88cb1dd24a2ce154fa1d" },
      "Topic": "Portfolio Website",
      "Domains": "\nWeb Development\nPrompt Engineering",
      "Role": "\nFull-Stack Solo Project\nPrompting AI chatbots",
      "TechStack": "\nMongoDB\nReact Js\nNode Js\nExpress Js",
      "Desc": {
        "Intro": "This Website :)",
        "Features": {
          "F1": "Technical Skills",
          "F2": "University-Courses I took regarding Computer Engineering",
          "F3": "Achievements and Roles of Responsibility",
          "F4": "Educational Details",
          "F5": "List of my Projects"
        },
        "Link": "https://vivekdalalportfolio.netlify.app/"
      }
    },
    {
      // "_id": { "$oid": "652f88cb1dd24a2ce154fa1d" },
      "Topic": "File System Forensic Dummy Website",
      "Domains": "\nWeb Development\nPrompt Engineering",
      "Role": "\nFull-Stack Solo Project\nPrompting AI chatbots",
      "TechStack": "\Django\SQL Server\Flask\nJavaScript\nPython",
      "Desc": {
        "Intro": "A dummy website which records and displays data breach and unauthorized access to files",
        "Features": {
          "F1": "Add, Delete, Edit, Read Files without authorized access.",
          "F2" : "Records the above actions and displays ."   
        },
        "Link": "https://github.com/VivekDDalal/SE_Project"
      }
    }
  ];

  const [expandedProjects, setExpandedProjects] = useState([]);
  const [expandedRoles, setExpandedRoles] = useState([]);
  const [expandedDomains, setExpandedDomains] = useState([]);
  const [expandedTechStack, setExpandedTechStack] = useState([]);

  const handleProjectClick = (index) => {
    if (expandedProjects.includes(index)) {
      setExpandedProjects(expandedProjects.filter((item) => item !== index));
      setExpandedRoles([]);
      setExpandedDomains([]);
      setExpandedTechStack([]);
    } else {
      setExpandedProjects([index]);
    }
  };

  const renderExpandIcon = (index) => {
    return expandedProjects.includes(index) ? (
      <FontAwesomeIcon icon={faChevronDown} />
    ) : (
      <FontAwesomeIcon icon={faChevronRight} />
    );
  };

  const handleRolesClick = (index) => {
    if (expandedRoles.includes(index)) {
      setExpandedRoles(expandedRoles.filter((item) => item !== index));
    } else {
      setExpandedRoles([index]);
    }
  };

  const handleDomainsClick = (index) => {
    if (expandedDomains.includes(index)) {
      setExpandedDomains(expandedDomains.filter((item) => item !== index));
    } else {
      setExpandedDomains([index]);
    }
  };

  const handleTechStackClick = (index) => {
    if (expandedTechStack.includes(index)) {
      setExpandedTechStack(expandedTechStack.filter((item) => item !== index));
    } else {
      setExpandedTechStack([index]);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {hardcodedProjects.map((project, index) => (
          <ul key={index} className="project-item">
            <h3
              onClick={() => handleProjectClick(index)}
              style={{ cursor: 'pointer' }}
            >
              {project.Topic} {renderExpandIcon(index)}
            </h3>
            {expandedProjects.includes(index) && (
              <div className="project-details">
                <p>
                  {project.Desc.Intro}
                </p>
                <p>&nbsp;</p>
                <p onClick={() => handleRolesClick(index)}
                style={{ cursor: 'pointer' }}>
                  <strong>ROLE</strong> {expandedRoles.includes(index) ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}
                  {expandedRoles.includes(index) && (
                    <ul>
                      {project.Role.trim().split('\n').map((item, itemIndex) => (
                        <ul key={itemIndex}>{item}</ul>
                      ))}
                    </ul>
                  )}
                </p>
                <p>&nbsp;</p>
                <p onClick={() => handleDomainsClick(index)}
                style={{ cursor: 'pointer' }}>
                  <strong>DOMAINS</strong> {expandedDomains.includes(index) ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}
                  {expandedDomains.includes(index) && (
                    <ul>
                      {project.Domains.trim().split('\n').map((item, itemIndex) => (
                        <ul key={itemIndex}>{item}</ul>
                      ))}
                    </ul>
                  )}
                </p>
                <p>&nbsp;</p>
                <p onClick={() => handleTechStackClick(index)}
                style={{ cursor: 'pointer' }}>
                  <strong>TECHSTACK</strong> {expandedTechStack.includes(index) ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}
                  {expandedTechStack.includes(index) && (
                    <ul>
                      {project.TechStack.trim().split('\n').map((item, itemIndex) => (
                        <ul key={itemIndex}>{item}</ul>
                      ))}
                    </ul>
                  )}
                </p>
                <p>
                  <p>&nbsp;</p>
                  {project.Link ? (
                    <a
                      href={project.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Link to Project
                    </a>
                  ) : (
                    'N/A'
                  )}
                </p>
              </div>
            )}
          </ul>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Projects;
