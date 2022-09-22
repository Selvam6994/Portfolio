import React from 'react'

function Projects() {
  const tiles = [
    {
      image:"../project/project-1.jpg"
    },
    {
      image:"../project/project-2.jpg"
    },
    {
      image:"../project/project-3.jpg"
    },
    {
      image:"../project/project-4.jpg"
    },
    {
      image:"../project/project-5.jpg"
    },
    {
      image:"../project/project-6.jpg"
    },
  ]
  return (
    <section id="project" className="project section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Projects</h2>
          <p>Under process...</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            {/* <ul id="project-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul> */}
          </div>
        </div>

        <div className="row project-container" data-aos="fade-up" data-aos-delay="200">
          {
          tiles.map((img)=>{
            return(
              <div className="col-lg-4 col-md-6 project-item filter-app">
            <div className="project-wrap">
              <img src={img.image} className="img-fluid" alt=""/>
              <div className="project-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="project-links">
                  <a href={img.image} data-gallery="projectGallery" className="project-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="project-details.html" className="project-details-lightbox" data-glightbox="type: external" title="project Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
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

export default Projects