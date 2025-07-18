import React from 'react';
import './Skill.css';

function Skill() {
  return (
    <section id="skill" className="skill-section">
      <h2 className="section-title">Skills</h2>

      <p className="project-intro">Learning key DevOps concepts and tools to build a strong foundational skillset.
      <br></br>Following are the skills I am currently focusing on.</p>
      <div className="skill-grid">

        <div className="skill-box">
          <h3>DevOps & Cloud</h3>
          <ul>
            <li>AWS</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Terraform</li>
            <li>GitHub Actions</li>
            <li>Jenkins</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Programming & Scripting</h3>
          <ul>
            <li>Linux Shell</li>
            <li>Bash</li>
            <li>YAML</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>CI/CD & Automation</h3>
          <ul>
            <li>CI/CD Pipelines</li>
            <li>Infrastructure as Code (IaC)</li>
            <li>Monitoring & Logging</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Continuous Learning</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skill;
