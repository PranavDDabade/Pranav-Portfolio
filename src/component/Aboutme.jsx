import React from 'react';
import './Aboutme.css';
import profile_img from '../assets/profile_img.png'; // Make sure the image exists

function Aboutme() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        I'm <strong>Pranav Dabde</strong>, a DevOps Engineer based in India with a strong interest in cloud-native systems and automation-first engineering. I specialize in building scalable infrastructure using CI/CD pipelines, Infrastructure as Code (IaC), and containerized deployments that support rapid and reliable software delivery.
      </p>
      <p>
        Over time, I've worked with tools and platforms like AWS, Docker, Kubernetes, GitHub Actions, and Terraform, enabling automation at scale. I take pride in writing efficient, secure, and maintainable scripts that improve developer workflows and increase deployment confidence.
      </p>

      <h3>Additional Information</h3>
      <ul>
        <li>Location: India</li>
        <li>Key Skills: DevOps, CI/CD, IaC, Linux</li>
        <li>Tools & Platforms: AWS, GitHub Actions, Jenkins, Docker</li>
        <li>Soft Skills: Problem-solving, continuous learning</li>
        <li>Currently Exploring: DevSecOps, Prometheus & Grafana</li>
      </ul>
    </div>

  );
}

export default Aboutme;
