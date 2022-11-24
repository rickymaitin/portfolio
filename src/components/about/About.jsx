import React from 'react'
import './About.css'
import ME from '../../assets/ricklane.PNG'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {SiCodingninjas} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image"/>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineWorkOutline className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years working</small>

            </article>
          
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ projects completed</small>

            </article>
          
            <article className='about__card'>
              <SiCodingninjas className='about__icon'/>
              <h5>Languages</h5>
              <small>React and more</small>

            </article>
          </div>
          <p>
            Im a Javascript and java coder with react as a skill learnt on the go,
            im looking for begginer projects to work on, always thinking outside the box and looking for new ideas to implement.

          </p>
            <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About