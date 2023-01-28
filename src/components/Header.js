import React, { useState } from "react";

import styles from "./Header.module.css";

import { profile } from "../content/profile.js";

import { navbar } from "../content/navbar.js";
 
export const Header = () => {
  const [mobileNavigation, setMobileNavigation] = useState(false);

  return (
    <header className={styles.wrapper}>
      <div className={styles.brand}>
        <img className={styles.icon} src={profile.image} alt="profile" />
        <h1 className={styles.logo}>Portfolio</h1>
      </div>
      <img
          className={styles.toggle}
          onClick={(e) => {
            setMobileNavigation(true);
            e.target.nextSibling.classList.toggle(styles.close);
          }}
          src="./assets/actions/hamburger.png"
          alt="menu"
        />
        <ul className={`${styles.navigation} ${styles.close}`}>
          {navbar.map((item, index) => {
            return (
              <li
                key={index}
                className={styles.item}
                onClick={(e) => {
                  document
                    .getElementById(item.title.toLowerCase())
                    .scrollIntoView({ behavior: "smooth" });
                  mobileNavigation &&
                  e.target.parentNode.classList.add(styles.close);
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
    </header>
  );
};
