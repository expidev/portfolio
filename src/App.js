import React from "react";
import { Header } from "./components/Header.js";
import { HeroArea } from "./components/HeroArea.js";
import { Projects } from "./components/Projects.js";
import { Contacts } from "./components/Contacts.js";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <HeroArea />
      <h1 id="projets" className="title">
        Mes projets
      </h1>
      <p className="description">Projets d'études et personnels</p>
      <Projects />
      <h1 id="contact" className="title">
        Contact
      </h1>
      <p className="description">Ouvert à vos propositions</p>
      <Contacts />
    </div>
  );
}
