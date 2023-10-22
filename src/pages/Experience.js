import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2007 - 2013' 
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> 
            Navotas Adventist Elementary School, Navotas City
          </h3>
          <p>
            Primary School
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2013 - 2017'
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> 
            San Jose Academy, Navotas City
          </h3>
          <p>
            Junior High School | National Robotics Champion (2015)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2017 - 2019' 
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> 
            San Jose Academy, Navotas City
          </h3>
          <p>
            Senior High School | With High Honors
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2022' 
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> 
            Xurpas Inc.
          </h3>
          <p>
            I was a Web Developer Intern at Xurpas Inc. from August 12, 2022 to September 27, 2022
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2019 - 2023' 
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> 
            Polytechnic University of the Philippines, Sta.Mesa
          </h3>
          <p>
            Bachelor of Science in Computer Engineering | President's Lister
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience