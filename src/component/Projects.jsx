import React from 'react';
import './Projects.css';

const Project = () => {
  const projectList = [
    {

      title: " Full-Stack Task Manager with Automated CI/CD",
      description: "Developed a news aggregator application with microservices architecture and deployed it on a Kubernetes cluster using Helm charts. Each service (news fetch, sentiment analysis, UI) was containerized and scaled independently. Implemented health checks, rolling updates, and load balancing. Integrated Prometheus and Grafana for real-time monitoring.",
      tech: " React, Node.js, MongoDB, GitHub Actions, Docker, AWS EC2  "
     
    },
    {
      title: " Automated Cloud Infrastructure Provisioning with Terraform",
      description: "Built a scalable, three-tier architecture using Terraform to provision AWS infrastructure. Configured VPC, subnets, EC2, and RDS instances. Used S3 + DynamoDB for remote backend state management. The project supports full automation from infrastructure provisioning to instance bootstrapping using Terraform modules and reusable templates.",
      tech: "erraform, AWS (EC2, S3, RDS, IAM), GitHub Actions"
      
    },
    {
      title: " Scalable Microservices Deployment with Kubernetes",
      description: "Developed a news aggregator application with microservices architecture and deployed it on a Kubernetes cluster using Helm charts. Each service (news fetch, sentiment analysis, UI) was containerized and scaled independently. Implemented health checks, rolling updates, and load balancing. Integrated Prometheus and Grafana for real-time monitoring.",
      tech: "Node.js, Kubernetes (Minikube / EKS), Helm, Docker, Prometheus, Grafana"
      
    }
  ];

  return (
    <section id="project" className="project-section">
      <h2 className="section-title">Projects</h2>
      <p className="project-intro">Looking forward to implementing this project as a hands-on step in my DevOps learning journey.</p>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech"><strong>Tech:</strong> {project.tech}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
