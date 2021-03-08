import React from 'react'
import './index.css'

function Works({works}) {
    return (
        <div className="works" id="works">
            <div>
                <h1 className="section-title">My Recent Works</h1>
            </div>
            {
                works.map(work =>
                    <div className="works-center">
                        <div className="work">
                            <div className="work-description">
                                <h3>{work.title}</h3>
                                <p>
                                    <span>{work.span}</span>{work.description}
                                </p>
                                <a href={work.link} target="_blank">visit app</a>
                            </div>
                            <div className="work-image">
                                <img src={work.image} alt="project-screenshot" />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Works;