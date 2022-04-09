import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav ('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#portofolio" onClick={() => setActiveNav ('#portofolio')} className={activeNav === '#portofolio' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#contact" onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav