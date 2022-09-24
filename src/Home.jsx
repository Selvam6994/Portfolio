import React from 'react';

import Typewriter from 'typewriter-effect';
import { FaBars } from 'react-icons/fa';

// import { FaBars } from 'react-icons/fa';
// import { FaBars } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
function Home() {
    return (
        <>
            <i className="bi bi-list mobile-nav-toggle d-xl-none">
            <Dropdown className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <FaBars />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#home">Home</Dropdown.Item>
                    <Dropdown.Item href="#about">About</Dropdown.Item>
                    
                    <Dropdown.Item href="#project">Projects</Dropdown.Item>
                    <Dropdown.Item href="#skills">Skills</Dropdown.Item>
                    <Dropdown.Item href="#contact">Contact</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown></i>

            <header id="header" className="d-flex flex-column justify-content-center">
            </header>
            <section id="home" className="d-flex flex-column justify-content-center" style={{ backgroundImage: `url("img/image3.jpg")` }} >
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Selva Kumar</h1>
                    <p><span>I'm<Typewriter
                        options={{
                            strings: ['Designer', 'Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></span></p>
                    
                </div>
            </section>
        </>
    )
}

export default Home