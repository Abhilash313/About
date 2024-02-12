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
            <a href={props.Link1}><FontAwesomeIcon className='icons' icon={faInstagram} /></a>
            <a href={props.Link2}><FontAwesomeIcon className='icons' icon={faEnvelope} /></a>
        </div>
    </div>
  )
}

export default About
