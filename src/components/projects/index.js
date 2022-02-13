import React from "react";

function Project(props) {
  return (
    <section className="container">
      <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
        {props.projects.map((project) => (
          <div className="column is-half">
            <div className="card">
              <div className="card-image"></div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <h4 className="title">{project.title}</h4>
                  </div>
                </div>
                <a href={project.live}>
                  <img
                    src={process.env.PUBLIC_URL + project.image}
                    class="project-image"
                    style={{ width: "400px", height: "400px" }}
                    alt="placeholder"
                  />
                </a>
                <div className="content">
                  {project.description}
                  <br />
                  <br />
                  <div className="content">
                    Made With: {project.languages}
                    <br />
                  </div>
                  <br></br>
                  <div className="card-footer">
                    <footer class="footcard">
                      <a
                        href={project.github}
                        className="card-footer-item"
                        target="_blank"
                        rel="noreferrer"
                      >
                      GitHub
                      </a>
                      <br />
                      <a
                        href={project.link}
                        className="card-footer-item"
                        target="_blank"
                        rel="noreferrer"
                      >
                      Deployed
                      </a>
                    </footer>
                  </div>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
