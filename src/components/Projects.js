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
              <img className={styles.coverPhoto} src={project.coverPhoto} alt="" />
              <h2 className={styles.cardTitle}><a href={project.link}  rel="noopener noreferrer" target="_blank">{project.title}</a></h2>
              <ul>
                <li>Description:<p className={styles.description}>{project.description}</p></li>
                <li>Acquis:<p className={styles.description}>{project.acquis}</p></li>
                <li>Techno:<p className={styles.description}>{project.techno}</p></li>
              </ul>
              
            </div>
          </div>
        );
      })}
    </section>
  );
};
