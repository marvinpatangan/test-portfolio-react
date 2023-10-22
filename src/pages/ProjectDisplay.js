import React from 'react'
import { projectList } from '../helpers/ProjectList'
import { useParams } from 'react-router-dom'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams()
    const project = projectList[id]
    return (
        <div className='project'>  
            <h1> {project.name} </h1> 
            <img src={project.image}></img>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
        </div>
    )
}

export default ProjectDisplay