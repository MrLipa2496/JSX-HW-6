import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Components.module.sass";
import listBooksImg from "./img/ListBooks.png";
import weatherImg from "./img/Weather.png";
import sliderImg from "./img/Slider.png";
import regFormImg from "./img/RegForm.png";

function Components() {
  const projects = [
    { name: "ListBooks", path: "listbooks", img: listBooksImg },
    { name: "Weather", path: "weather", img: weatherImg },
    { name: "Slider", path: "slider", img: sliderImg },
    { name: "RegForm", path: "regform", img: regFormImg },
  ];

  return (
    <div className={styles.componentsWrapper}>
      {projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <img
            src={project.img}
            alt={project.name}
            className={styles.cardImg}
          />
          <div className={styles.projInfo}>
            <h2 className={styles.projName}>{project.name}</h2>
            <NavLink className={styles.linkBtn} to={project.path}>
              View Project
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Components;
