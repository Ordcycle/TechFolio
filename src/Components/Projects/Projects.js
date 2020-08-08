import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import ProjectCard from "./ProjectCard";
import "./project.css";
import { projectsSection } from "../../techfolio";
import Heading from "../common/Heading";
import { isMobile } from "react-device-detect";
function Projects() {
  const projects = projectsSection.projects.map((project, i) => {
    return <ProjectCard project={project} key={i} />;
  });

  return (
    <Fragment>
      {isMobile && (
        <Heading heading={"Projects"} style={{ marginBottom: "30px" }} />
      )}
      <section className="section section5" name="projects">
        <div className="site-container">
          <Fade bottom>
            <h1 style={{ textAlign: "center" }}>
              {!isMobile ? "Projects" : ""}
            </h1>
            <div className="project-cards">{projects}</div>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Projects;
