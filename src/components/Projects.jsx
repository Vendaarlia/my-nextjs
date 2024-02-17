import { projectData } from "./data";

import React from 'react'

function Projects() {
  return (
    <div className="projects-container">
        <h2>News</h2>
        <div className="projects-grid">
            {projectData && projectData.map((project) => (
                <div className="project-card" key={project.id}>
                    <div className="project-header">
                        <i class="fa-regular fa-newspaper folder-icon"></i>
                        <div className="small-icons">
                            <a href={project.gitHubLink}><i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    <h6 className="project-date">{project.date}</h6>
                    <h3 className="project-title">{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Projects