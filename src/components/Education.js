import React from 'react';
import './education.css'; // Import the CSS file for education
import Navbar from './Navbar'
const Education = () => {
  const hardcodedEducation = [
    {
      _id: { $oid: "652f71e31dd24a2ce154f9fa" },
      Grade: "10th",
      Score: "95.17%",
      Institute: "Kapol Vidyanidhi International School (ICSE)",
      Location: "Mumbai",
      Year: "2019",
    },
    {
      _id: { $oid: "652f73021dd24a2ce154f9fc" },
      Grade: "12",
      Score: "94.67%",
      Institute: "Prakash College Of Science and Commerce(HSC)",
      Location: "Mumbai",
      Year: "2019 - 2021",
    },
    {
      _id: { $oid: "652f73b01dd24a2ce154fa00" },
      Grade: "BTech",
      Score: "7.48 CGPA",
      Institute: "Veermata Jijabai Technological Institute, Mumbai University",
      Location: "Mumbai",
      Year: "2021 - 2025 (expected)",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
    <div className="education">
      <h2>Education</h2>
      <ul>
        {hardcodedEducation.map((education, index) => (
          <ul key={index} className="education-item">
            <p>
              <span className="label">Grade/Degree:</span> {education.Grade}
            </p>
            <p>
              <span className="label">Institute Name:</span> {education.Institute}
            </p>
            <p>
              <span className="label">Score:</span> {education.Score}
            </p>
            <p>
              <span className="label">Year:</span> {education.Year}
            </p>
          </ul>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Education;
