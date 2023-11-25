import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Home from './components/Home';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import UniversityCourses from './components/UniversityCourses';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Routes> {/* Use the Routes component instead of Switch */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/university-courses" element={<UniversityCourses />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
