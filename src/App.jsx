import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Aboutme from './component/Aboutme'
import Education from './component/Education'
import Skill from './component/Skill'
import Project from './component/Projects'
import Footer from './component/Footer'
import Contact from './component/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <section id='hero'>

      <Hero />
      </section>
      <section id="about">
        <Aboutme />
      </section>
      <section id='education' >
        <Education/>
      </section>
      <section id='skills'>
        <Skill/>
      </section>
      <section id='projects'>
        <Project/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
      <Footer/>
    </div>
    
  )
}

export default App
