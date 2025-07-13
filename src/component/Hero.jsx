import React from 'react'
import './Hero.css'
import profile_img from '../assets/profile_img.png'
import resume from '../assets/resume.pdf'
const hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="pranav" width={300} />
            <h1><span>I am Pranav Dabde,</span> DevOps Engineer based in India</h1>
            <p>Passionate and results-driven DevOps Engineer with a strong foundation in cloud platforms, CI/CD pipelines, infrastructure as code (IaC), and automation. Skilled in bridging the gap between development and operations to accelerate software delivery, enhance system reliability, and streamline deployment processes. Continuously learning and evolving with the latest DevOps tools and best practices to drive efficiency and innovation in modern software teams.</p>
            <div className="hero-action">
                <div className="hero-connect" ><a href="#contact">Connect with me</a></div>
                <div className="hero-resume"><a href={resume} download="PranavResume.pdf" alt="Resume">Resume</a></div>
            </div>
        </div>
    )
}

export default hero
