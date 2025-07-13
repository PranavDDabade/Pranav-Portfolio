import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>

      <div className="edu-container">
        <div className="edu-card">
          <h3> B.Tech in Computer Science and Business Systems</h3>
          <p><strong>College:</strong>KIT collage of Engineering, Kolhapur</p>
          <p><strong>University:</strong> Shivaji University, Kolhapur</p>
          <p><strong>Year:</strong> 2024 – 2027</p>
          <p><strong>CGPA:</strong> -</p>
        </div>

        <div className="edu-card">
          <h3> Diploma in Computer Engineering</h3>
          <p><strong>School:</strong> Sharad Institute of Techonology, Polytechnic, Yadrav</p>
          <p><strong>Board:</strong> MSBTE</p>
          <p><strong>Year:</strong> 2021 – 2024</p>
          <p><strong>Percentage:</strong> 85.95%</p>
        </div>

        <div className="edu-card">
          <h3>SSC (10th Grade)</h3>
          <p><strong>School:</strong> Swa. Sawarkar Prathishthan Sangli</p>
          <p><strong>Board:</strong> State Board</p>
          <p><strong>Year:</strong> 2010 – 2021</p>
          <p><strong>Percentage:</strong> 82.60%</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
