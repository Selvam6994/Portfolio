import React from 'react'

function Skills() {
    const skillIcons = [
        {
            icon: '../Icons/html.png',
            tag: "HTML5",
            isTag: true
        },
        {
            icon: '../Icons/css.png',
            tag: "CSS",
        },
        {
            icon: '../Icons/MongoDB.png',
            tag: "MongoDB",
        },
        {
            icon: '../Icons/React.png',
            tag: "React",
        },
        {
            icon: '../Icons/Node JS.png',
            tag: "Node JS",
        },
        {
            icon: '../Icons/Java Script.png',
            tag: "Java Script",
        }

    ]
    return (
        <section id="skills" className="skills">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Siklls</h2>
                </div>

                <div className="row">
                    {
                        skillIcons.map((icons) => {
                            return (
                                <div className="col-lg-4 col-md-6 ">
                                    <div className="icon-box iconbox-blue" >
                                        <div className="icon">
                                            <img className="icons" src={icons.icon} />
                                        </div>
                                        <p id='tag'>{icons.tag}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
          </div>

            </div>
        </section>
    )
}

export default Skills