import React from 'react'

function About() {
    return (
        <section id="about" className="about">
            <div className="container container-fluid" data-aos="fade-up">

                <div className="section-title">
                    <h2>About</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <img src="../img/my image 2.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Web Designer &amp; Developer.</h3><br/>
                        <p className="fst-italic">
                            A budding Software professional
                            in the field of IT, looking to establish
                            a career as a web designer and developer,
                            to grow in my career journey while
                            contributing to the development of
                            the organization.

                        </p><br/>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>6 Sep 1994</span></li><br/>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 8111033297</span></li><br/>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Dindigul</span></li><br/>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>28</span></li><br/>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of  Mechatronics Engineering</span></li><br/>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>selvamyoor@gmail.com</span></li><br/>

                                </ul>
                            </div>
                        </div>
                        <p>
                            I started my journey by learning full-stack development from GUVI GEEK NETWORK PRIVATE LIMITED.
                            I’m easily inspired and I prefer to keep learning, continue challenging myself, and do interesting things that matter</p>
                           <p>
                             You can read more about my biography, experience, skills, education and much more in the PDF attached bellow
                        </p><br/>
                        <a id='download' href='../resume/my resume.pdf' download><b>My Resume.pdf</b></a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About