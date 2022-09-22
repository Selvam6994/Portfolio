import React from 'react'
import { FaLocationArrow } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';


function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contact</h2>
                </div>
                <div className="row mt-1">
                    <div className="col-lg-4">
                    </div>
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <a id="link" target="_blank" href="https://www.google.co.in/maps/place/Selvam+farms/@10.3158875,77.62454,15.11z/data=!4m5!3m4!1s0x3b075f892668d3e3:0xb506ce07a5b5e1d9!8m2!3d10.3186813!4d77.6246977?hl=en">
                                    <i className="bi bi-geo-alt" ><FaLocationArrow /></i>
                                    <h4>Location:</h4>
                                    <p>2/217,Thandikudi,Kodaikannal</p>
                                </a>
                            </div><br />

                            <div className="email">
                                <a id="link" target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSKkkCjzhQdwZFhRKkptsNWzJQSftbGHnhgJnZjFSmmdlZXqJnDHZSCKFSMqnKHmPvNkkJWQ">
                                    <i className="bi bi-envelope" ><FaEnvelope /></i>
                                    <h4>Email:</h4>

                                </a>
                                <p>selvamyoor@gmail.com</p>
                            </div><br />

                            <div className="phone">
                                <i className="bi bi-phone"><FaPhoneAlt /></i>
                                <h4>Call:</h4>
                                <p>+91 8111033297</p>
                                <p>+91 9790905989</p>
                            </div>
                            <br />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact