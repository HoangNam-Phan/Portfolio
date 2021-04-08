import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const bars = <FontAwesomeIcon icon={faBars} />

const NavToggle = () => {
  return (
    <>
      <a className='navbar-brand' href="#">Home</a>
      <a className='navbar-brand' href="#intro">Intro</a>
      <a className='navbar-brand' href="#skills">Skills</a>
      <a className='navbar-brand' href="#about">Über mich</a>
    </>
  )
}

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-light fixed-top">
      <div className="container-fluid">
        <h3>Portfolio</h3>
        <div className="navLinks">
          <NavToggle />
          <button className='navBtn' onClick={() => setToggle(!toggle)}>{bars}</button>
        </div>
      </div>
      <div className='d-flex flex-column pl-3'>
        {toggle && <NavToggle />}
      </div >
    </nav >
  )
}

export default Navbar

