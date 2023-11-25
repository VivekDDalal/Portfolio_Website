import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './universitycourses.css';

// Import the Navbar component
import Navbar from './Navbar';

const UniversityCourses = () => {
  // Hardcoded course data
  const courses = [
    {
      Course: 'Discrete Mathematics and Applications',
      Semester: 3,
      Contents: {
        T1: 'Induction, Sequences and Summations',
        T2: 'Basic Counting Principles',
        T3: 'Relations and Functions',
        T4: 'Graph Theory',
        T5: 'Algebraic Structures',
      },
    },
    {
      Course: 'Linear Algebra',
      Semester: 3,
      Contents: {
        T1: 'Vector Space and Inner Product',
        T2: 'Systems Of Linear Equations',
        T3: 'Elementary Matrix Factorization',
        T4: 'Linear Transformation',
        T5: 'Eigenvalues and Eigenvectors',
      },
    },
    {
      Course: 'Data Structures and Algorithms',
      Semester: 3,
      Contents: {
        T1: 'Stacks and Queues',
        T2: 'Arrays and Linked Lists',
        T3: 'Binary Trees',
        T4: 'Graphs',
        T5: 'Searching Techniques and Hashing',
        T6: 'Sorting Techniques',
        T7: 'Greedy Algorithm and its Applications',
        T8: 'Dynamic Programming and its Applications',
      },
    },
    {
      Course: 'Computer Organization and Applications',
      Semester: 3,
      Contents: {
        T1: 'CPU',
        T2: 'Memory Organization',
        T3: 'I/O Organization',
        T4: 'Parallel Organization',
      },
    },
    {
      Course: 'Python',
      Semester: 3,
      Contents: {
        T1: 'Functions',
        T2: 'Pandas',
        T3: 'NumPy',
        T4: 'Matplotlib',
      },
    },
    {
      Course: 'Data Interpretation and Analysis',
      Semester: 4,
      Contents: {
        T1: 'Descriptive Statistics',
        T2: 'Discrete and Continuous Probability',
        T3: 'Random Variables and Expectation',
        T4: 'Special Random Variable',
        T5: 'Parameter Estimation',
      },
    },
    {
      Course: 'Automata Theory/Theory of Computation',
      Semester: 4,
      Contents: {
        T1: 'Finite Automata',
        T2: 'Grammar',
        T3: 'Pushdown Automata',
        T4: 'Turing Machine',
      },
    },
    {
      Course: 'Design and Analysis of Algorithms',
      Semester: 4,
      Contents: {
        T1: 'Divide and Conquer Technique',
        T2: 'Greedy Method',
        T3: 'Dynamic Programming',
        T4: 'NP-Completeness',
      },
    },
    {
      Course: 'Operating System',
      Semester: 4,
      Contents: {
        T1: 'Process and Threads Management',
        T2: 'Memory Management',
        T3: 'File Management',
        T4: 'I/O Management',
        T5: 'Architecture of the UNIX',
        T6: 'Buffer Cache',
        T7: 'Protection and Security',
      },
    },
    {
      Course: 'Web Technologies',
      Semester: 4,
      Contents: {
        T1: 'HTML',
        T2: 'CSS',
        T3: 'JavaScript',
        T4: 'React Js',
      },
    },
  ];
  const [expandedCourses, setExpandedCourses] = useState([]);

  const handleCourseClick = (index) => {
    if (expandedCourses.includes(index)) {
      setExpandedCourses(expandedCourses.filter((item) => item !== index));
    } else {
      setExpandedCourses([...expandedCourses, index]);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="university-courses">
        <h2>University Courses</h2>
        <ul>
          {courses.map((course, index) => (
            <ul key={index} className="course-item">
              <h3 onClick={() => handleCourseClick(index)}>
                {course.Course}{' '}
                {expandedCourses.includes(index) ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronRight} />
                )}
              </h3>
              {expandedCourses.includes(index) && (
                <div className="course-details">
                  <h3><strong>SEMESTER</strong> </h3>
                  <p>{course.Semester}</p>
                  <p>&nbsp;</p>
                  <h3><strong>CONTENTS</strong></h3>
                  <ul>
                    {Object.keys(course.Contents).map((contentKey) => (
                      <ul key={contentKey}>
                        {course.Contents[contentKey]}
                      </ul>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UniversityCourses;
