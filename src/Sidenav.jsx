import React from 'react'
import { FaHome } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

function Sidenav() {
  return (
    <div>
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
 
  <header id="header" className="d-flex flex-column justify-content-center">

    <nav id="navbar" className="navbar nav-menu">
      <ul>
        <li><a href="#home" className="nav-link scrollto active"><i><FaHome /></i> <span>Home</span></a></li>
        <li><a href="#about" className="nav-link scrollto"><i><FaUserAlt /></i>  <span>About</span></a></li>
        <li><a href="#project" className="nav-link scrollto"><i><FaProjectDiagram /></i>  <span>Project</span></a></li>
        <li><a href="#skills" className="nav-link scrollto"><i><FaServer /></i> <span>Skill</span></a></li>
        <li><a href="#contact" className="nav-link scrollto"><i><FaEnvelope /></i><span>Contact</span></a></li>
      </ul>
    </nav>
  </header>
    </div>
  )
}

export default Sidenav