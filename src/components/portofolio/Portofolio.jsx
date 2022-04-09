import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/foto.jpg'

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio_container">
        <article className='portofolio_item'>
          <div className="potofolio_item-img">
            <img src={IMG1} alt="" />
          </div>
          <h3> title portofolio</h3>
          <div className="portofolio_item-cta">
            <a href="https;//github.com" className='btn' target='_blank'>Github</a>
            <a href="https;//github.com" className='btn btn-primary'>Live demo</a>
          </div>
        </article>

        <article className='portofolio_item'>
          <div className="potofolio_item-img">
            <img src={IMG1} alt="" />
          </div>
          <h3> title portofolio</h3>
          <div className="portofolio_item-cta">
            <a href="https;//github.com" className='btn' target='_blank'>Github</a>
            <a href="https;//github.com" className='btn btn-primary'>Live demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portofolio