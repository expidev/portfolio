import React from "react";
import styles from "./Contacts.module.css";

import { contacts } from "../content/contacts.js";

export const Contacts = () => {
  return (
    <footer className={styles.wrapper}>
      <h2 className={styles.title}>{contacts.name}</h2>
      <p>{contacts.address}</p>
      <p>{contacts.contact}</p>
      <div className={styles.socials}>
        {
          contacts.social.map((item) => {
            return (
            <a href={item.link}>
              <img
              src={item.icon}
              alt="social-icon"
              className={styles.icon}
              />
            </a>
            );
          })
        }
      </div>
    </footer>
  );
};
