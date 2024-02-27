import React from "react";

import styles from "./ExpCard.module.css";
import { getAssetUrl } from "../../utils";

export const ExpCard = ({title, company, start, end, content, skills}) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}{(company != "" ? ", " + company : "") + ":"}</h3>
        <h4 className={styles.dates}>{start != "" ? start + " - " + end : ""}</h4>
        <p className={styles.content}>{content}</p>
      </div>
      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>Skills:</h3>
        <div className={styles.skillSlider}>
          {
            skills?.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getAssetUrl(skill.imageSrc)} alt={skill.title} className={styles.skillImage} />
                  </div>
                  <p className={styles.skillTitle}>{skill.title}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};