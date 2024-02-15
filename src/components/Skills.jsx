import React from 'react'

function Skills() {
  return (
    <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
            <div className="skill-card html">
                <i className='fa-brand fa-html5 html-icon'></i>
                <p>HTML</p>
            </div>
            <div className="skill-card css">
                <i className='fa-brand fa-css-alt css-icon'></i>
                <p>CSS</p>
            </div>
            <div className="skill-card js">
                <i className='fa-brand fa-js-square js-icon'></i>
                <p>JavaScript</p>
            </div>
            <div className="skill-card react">
                <i className='fa-brand fa-react react-icon'></i>
                <p>REACT</p>
            </div>
            <div className="skill-card gsap">
                <i className='fa-brand fa-gsap gsap-icon'></i>
                <p>GSAP</p>
            </div>
        </div>
    </div>
  )
}

export default Skills