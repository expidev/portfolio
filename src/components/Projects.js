import React from "react";
import styles from "./Projects.module.css";

import { projects } from "../content/projects.js";

export const Projects = () => {
  return (
    <section className={styles.wrapper}>
      {projects.map((project, index) => {
        return (
          <div className={styles.card} key={index}>
            <div className={styles.info}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
              <p className={styles.description}><a href={project.link}  rel="noopener noreferrer" target="_blank">{project.link}</a></p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
