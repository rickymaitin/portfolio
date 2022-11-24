import React from 'react'
import './Experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          
          <h3>Frontend Development</h3>
          <div className="experience__content"></div>
          <article className='experience__details'>
           <HiBadgeCheck className='experience__details-icon'/>


           <div>
             <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
           </div>
          </article>


          <article className='experience__details'>
           <HiBadgeCheck className='experience__details-icon'/>
             <div>
              <h4>JAVA</h4>
              <small className='text-light'>Intermediate</small>
             </div>
          </article>


          <article className='experience__details'>
           <HiBadgeCheck className='experience__details-icon'/>

             <div>
               <h4>JavaScript</h4>
               <small className='text-light'>Intermediate</small>
             </div>
          </article>

          <article className='experience__details'>
          <HiBadgeCheck className='experience__details-icon'/>
             <div>
               <h4>CSS</h4>
               <small className='text-light'>Intermediate</small>
             </div>
          </article>
          <article className='experience__details'>
           <HiBadgeCheck className='experience__details-icon'/>
            <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
             </div>
          </article>
        </div>



        <div className="experinece__backend">
        <h3>Backend Development</h3>
         <div className="experience__content"></div>
          <article className='experience__details'>
           <HiBadgeCheck className='experience__details-icon'/>
             <div>
                <h4>Node.js</h4>
                <small className='text-light'>Experienced</small>
             </div>
          </article>
          <article className='experience__details'>
           <HiBadgeCheck className='experience__details-icon'/>
             <div>
               <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
             </div>
          </article>
          <article className='experience__details'>
           <HiBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small>
              </div>
          </article>
          <article className='experience__details'>
           <HiBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Beginner</small>
              </div>
          </article>
          <article className='experience__details'>
           <HiBadgeCheck className='experience__details-icon'/>
              <div>
                 <h4>PHP</h4>
                 <small className='text-light'>Basic</small>
              </div>
          </article>
        </div>



        </div>
      
    </section>
  )
}

export default Experience