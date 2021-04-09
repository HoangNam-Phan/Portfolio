import React, { useState, useEffect } from 'react';
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
      <a className='navbar-brand' href="#contact">Kontakt</a>
    </>
  )
}

const Navbar = () => {

  const [isToggle, setToggle] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth < 767.98);

  const updateMedia = () => {
    setDesktop(window.innerWidth < 767.98);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <nav className="navbar navbar-light fixed-top">
      <div className="container-fluid">
        <h3>Portfolio</h3>
        <div className="navLinks">
          <NavToggle />
          <button className='navBtn' onClick={() => setToggle(!isToggle)}>{bars}</button>
        </div>
      </div>
      <div className='d-flex flex-column pl-3'>
        {isToggle &&  isDesktop ? <NavToggle /> : ''}
      </div >
    </nav >
  )
}

export default Navbar

