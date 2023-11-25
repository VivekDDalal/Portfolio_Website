import React from 'react';
import './achievements.css'; // Import the CSS file for achievements
import Navbar from './Navbar';

const Achievements = () => {
  const hardcodedAchievements = [
    {
      _id: { $oid: "652f6f641dd24a2ce154f9f6" },
      Title: "Code Gladiators 2023 Finalist",
      Desc: "Code Gladiators is an online 3-round Competitive Programming Contest held every year. This year I managed to reach the finals held in July.",
    },
    {
      _id: { $oid: "652f70611dd24a2ce154f9f7" },
      Title: "SIH 2023 Finalist",
      Desc: "Smart India Hackathon is a very prestigious national hackathon held annually. To qualify, one's team must clear the previous round, which is Pre-SIH. My team managed to clear Pre-SIH by creating a working prototype for our project (Integration of AI for Adaptive Learning for MCQ Selection in PARAKH). We managed to build it in a short notice of 8 days.",
    },
    {
      "_id": {
        "$oid": "652f717c1dd24a2ce154f9f8"
      },
      Title: "C++ Workshop Instructor",
      Desc: "Taught junior students C++ basics and Pillars of Object Oriented Programming"
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="achievements">
        <h2>Achievements and Positions of Responsibilities</h2>
        
          {hardcodedAchievements.map((achievement, index) => (
            <ul key={index} className="achievement-item">
              <h3>{achievement.Title}</h3>
              <p>{achievement.Desc}</p>
            </ul>
          ))}
        
      </div>
    </div>
  );
};

export default Achievements;
