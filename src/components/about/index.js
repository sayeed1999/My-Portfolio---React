import React from 'react'
import './index.css'

function About({about}) {
    return (
        <div className="about" id="about">
            <div>
                <h1 className="section-title">About Me</h1>
            </div>
            {
                about.map(_about => 
                    <div className="about-center">
                        <p>{_about}</p>
                    </div>
                )
            }
        </div>
    )
}

export default About;