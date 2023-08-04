import React from "react";

import { profile } from "../content/profile.js";

import styles from "./HeroArea.module.css";

export const HeroArea = () => {
  return (
    <section className={styles.wrapper}>
      <img className={styles.profile} src={profile.image} alt="profile" />
      <p className="description">
        {profile.description}
      </p>
      <p className="description">
        Spécialité en {profile.techno}
      </p>
      <p className="description">
        Flexible en {profile.flex}
      </p>
      <div className={styles.buttonBox}>
        <button
          className={`${styles.button} ${styles.project}`}
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          My projects
        </button>
        <button
          className={`${styles.button} ${styles.hire}`}
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </button>
      </div>
    </section>
  );
};
