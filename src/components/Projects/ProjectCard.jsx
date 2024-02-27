import React from "react";

import styles from "./ProjectCard.module.css";
import { getAssetUrl } from "../../utils";

export const ProjectCard = ({title, videoSrc, description, skills, demo, source}) => {
  return (
    <div className={styles.container}>
      <video
        autoPlay
        loop
        muted
        src={getAssetUrl(videoSrc)}
        alt={`Video of ${title}`}
        className={styles.video}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
