import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = ({japanese, setNav}) => {
  return (
    <section className={styles.container} id="projects" onMouseEnter={() => setNav(4)} >
      <hr />
      <h2 className={styles.title}>Projects</h2>
      <hr />
      <div className={styles.projects}>
        {
          projects.map((project, id) => {
            return (
              <ProjectCard
                key={id}
                title={japanese ? project.titleJP : project.title}
                videoSrc={project.videoSrc}
                description={japanese ? project.descriptionJP : project.description}
                skills={project.skills}
                demo={project.demo}
                source={project.source} />
            );
          })
        }
      </div>
    </section>
  );
};
