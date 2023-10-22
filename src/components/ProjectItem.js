import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectItem({image, name, id}) {
  const navigate = useNavigate()
  return (
    <div className='projectItem' onClick={() => {navigate("/project/" + id)}}>
        <div style={{backgroundImage: image }} className='bgImage'/>
        <h4> {name} </h4>   
    </div>
  )
}

export default ProjectItem