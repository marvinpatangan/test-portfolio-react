import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'> 
      <div className='about'>
        <h2> Hi, my name is Jan Marvin </h2> 
        <div className='prompt'> 
          <p> A Software Developer with a passion for learning and creating. </p>
          <LinkedInIcon/>
          <EmailIcon/>
          <GithubIcon/>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End </h2>
            <span> ReactJS, Redux, HTML, CSS, MaterialUI </span>
          </li>
          <li className='item'>
            <h2> Back-end </h2>
            <span> MySQL, Firebase</span>
          </li>
          <li className='item'>
            <h2> Languages </h2>
            <span> JavaScript, Java, Python, C#, C++ </span>
          </li>
        </ol> 
      </div> 
    </div>
  )
}

export default Home