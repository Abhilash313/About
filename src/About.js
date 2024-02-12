import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'

import './App.css'
const About = (props) => {
  return (
    <div className='box'>
        <img src={props.image} alt='team_img'/>
        <h3>{props.Name}</h3>
        <h5>{props.Role}</h5>
        <div className='icons'>
            <a href={props.Link1} target="_blank"><FontAwesomeIcon className='icons' icon={faInstagram} size='xl'/></a>
            <a href={props.Link2} target="_blank"><FontAwesomeIcon className='icons' icon={faEnvelope} size='xl'/></a>
        </div>
    </div>
  )
}

export default About
