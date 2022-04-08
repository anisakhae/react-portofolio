import React from 'react'
import './about.css'
import ME from '../../assets/foto.jpg'
import {FaAward} from 'react-icons/fa'
import {FaFolder} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward  className='about_icon'/>
              <h5>Experience</h5>
              <small>1 Years Working Experience</small>
            </article>

            <article className='about_card'>
              <FaFolder  className='about_icon'/>
              <h5>Project</h5>
              <small>1 Years Working Experience</small>
            </article>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, minima quos. 
            Earum in magnam debitis voluptas dolor odio inventore delectus iste doloribus mollitia, 
            laboriosam veniam neque repellendus reiciendis nulla eveniet!
        </p>
            
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default about