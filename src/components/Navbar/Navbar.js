import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Portfolio</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a className='navbar-brand' href="#intro">Intro</a>
            </li>
            <li class="nav-item">
              <a className='navbar-brand' href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a className='navbar-brand' href="#about">Über mich</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

