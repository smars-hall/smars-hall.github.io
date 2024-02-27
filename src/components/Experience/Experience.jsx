import React, { useState } from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { ExpCard } from "./ExpCard";
import { getAssetUrl } from "../../utils";

export const Experience = ({japanese, setNav}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if(newIndex < 0) {
      newIndex = history.length - 1;
    }
    else if (newIndex >= history.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }

  return (
    <section className={styles.container} id="experience" onMouseEnter={() => setNav(3)}>
      <hr />
      <h2 className={styles.title}>Experience</h2>
      <hr />
      <div className={styles.content}>
        <img
          className={`${styles.iconHighlight} ${styles.cardBtn} ${styles.cardBtnL}`}
          src={getAssetUrl("directional/left_arrow.png")}
          alt="Previous card button"
          onClick={() => updateIndex(activeIndex - 1)}
        />
        <div className={styles.cardCarousel}>
          <div className={styles.carouselInner}
          style={{ transform: `translate(-${activeIndex * 110}%)`}}>
            {
              history.map((job, id) => {
                return (
                  <ExpCard 
                    key={id}
                    title={japanese ? job.roleJP : job.role}
                    company={japanese ? job.organizationJP : job.organization}
                    start={japanese ? job.startDateJP : job.startDate}
                    end={japanese ? job.endDateJP : job.endDate}
                    content={japanese ? job.experiencesJP : job.experiences}
                    skills={job.skills} />
                );
              })
            }
          </div>
        </div>
        <img
          className={`${styles.iconHighlight} ${styles.cardBtn} ${styles.cardBtnR}`}
          src={getAssetUrl("directional/right_arrow.png")}
          alt="Next card button"
          onClick={() => updateIndex(activeIndex + 1)}
        />
      </div>
    </section>
  );
};