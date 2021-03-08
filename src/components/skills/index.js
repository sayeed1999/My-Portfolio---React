import React from 'react'
import './index.css'

function Skills({skills}) {

    return (
        <div className="skills" id="skills">
            <div>
                <h1 className="section-title">Skills</h1>
            </div>
            <div className="skills-center">
            {
                skills.map(skill => 
                    <div className="skill">
                        <img src={skill.src} alt="skill-icon"/>
                        <h2 className="skill-title">{skill.id}</h2>
                    </div>)
            }
            </div>
        </div>
    )
}

export default Skills;