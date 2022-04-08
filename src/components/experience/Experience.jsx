import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_detaild'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>experienced</small>
            </article>
            <article className='experience_detaild'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>experienced</small>
            </article>
            <article className='experience_detaild'>
              <BsPatchCheckFill />
              <h4>JavaScripts</h4>
              <small className='text-light'>experienced</small>
            </article>
            <article className='experience_detaild'>
              <BsPatchCheckFill />
              <h4>Boostrap</h4>
              <small className='text-light'>experienced</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience_beckend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_detaild'>
              <BsPatchCheckFill />
              <h4>Python</h4>
              <small className='text-light'>experienced</small>
            </article>
            <article className='experience_detaild'>
              <BsPatchCheckFill />
              <h4>R</h4>
              <small className='text-light'>experienced</small>
            </article>
            <article className='experience_detaild'>
              <BsPatchCheckFill />
              <h4>Django</h4>
              <small className='text-light'>experienced</small>
            </article>
            <article className='experience_detaild'>
              <BsPatchCheckFill />
              <h4>Laravel</h4>
              <small className='text-light'>experienced</small>
            </article>
            <article className='experience_detaild'>
              <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience