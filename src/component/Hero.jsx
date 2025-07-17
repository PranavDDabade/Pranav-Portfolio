import React from 'react';
import './Hero.css';
import profile_img from '../assets/profile_img.png';
import resume from '../assets/resume.pdf';

const hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="pranav" width={300} />
            <h1><span>I am Pranav Dabade,</span> DevOps Engineer based in India</h1>
            <p>
                Aspiring and growth-focused DevOps Engineer currently building a strong foundation in cloud platforms, CI/CD pipelines, Infrastructure as Code (IaC), and automation. Actively learning how to bridge the gap between development and operations to enable faster, more reliable software delivery. Passionate about exploring modern DevOps tools, cloud technologies, and best practices to drive continuous improvement and innovation.
            </p>
            <div className="hero-action">
                <a href="#contact" className='hero-connect' >Connect with me</a>
                <a href={resume} download="PranavResume.pdf" className="hero-resume">Resume</a>
            </div>
        </div>
    );
};

export default hero;
